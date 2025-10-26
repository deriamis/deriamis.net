import { PageDataType } from '@types';

function hexToBytes(hex: string) {
  let bytes = [];
  for (let i = 0; i < hex.length; i += 2) {
    bytes.push(parseInt(hex.substring(i, i + 2), 16));
  }
  return bytes;
}

export function deobfuscate(obfuscated: string, xor: number) {
  return atob(
    hexToBytes(obfuscated)
      .map((e, i) => String.fromCharCode(
        (e ^ (i % 256)) ^ xor
      ))
      .join('')
  );
}

export type ElementFunction = (deobfuscated: string, text?: string | null) => HTMLElement;
export type ElementFunctionRegistry = Record<string, ElementFunction>;

/*
 * Vite bundles a different version of this file when it is imported from node_modules versus
 * when the ObfuscatedData component imports it. This happens whether a relative or package
 * name import is used in the component, and prevents the ObfuscatedData class from
 * storing custom element functions. To work around this, a global variable is used.
 */
declare global {
  interface Window {
    astroObfuscateCustomElements: ElementFunctionRegistry
  }
}
if (!('astroObfuscateCustomElements' in window)) {
  // @ts-expect-error
  window.astroObfuscateCustomElements = {};
}

export default class ObfuscatedData extends HTMLElement {
  connectedCallback() {
    const xor = parseInt(this.dataset.xor as string, 10);

    let deobfuscatedData: string,
        deobfuscatedText: string | null;

    try {
      deobfuscatedData = deobfuscate(this.dataset.obfuscated as string, xor);
      deobfuscatedText = this.dataset.text ?
        deobfuscate(this.dataset.text as string, xor) : null;
    } catch (e) {
      this.replaceChildren(this.#createErrorElement());
      throw e;
    }
    
    setTimeout(() => {
      const elem = this.#createElement(deobfuscatedData, deobfuscatedText);
      this.replaceChildren(elem || this.#createErrorElement());
    }, 500);
  }

  #createErrorElement() {
    const elem = document.createElement('span');
    elem.innerText = '[an error occurred]';
    return elem;
  }

  static #ELEMENT_FUNCTIONS: ElementFunctionRegistry = {
      [PageDataType.EMAIL.toString()]: (deobfuscated, text) => {
        const elem = document.createElement('a');
        elem.href = `mailto:${deobfuscated}`;
        elem.innerText = text || deobfuscated;
        return elem;
      },

      [PageDataType.PHONE.toString()]: (deobfuscated, text = deobfuscated) => {
        const elem = document.createElement('a');
        elem.href = `tel:${deobfuscated}`;
        elem.innerText = text || deobfuscated;
        return elem;
      },

      [PageDataType.TEXT.toString()]: (deobfuscated) => {
        const elem = document.createElement('span');
        elem.innerText = deobfuscated;
        return elem;
      }
    }

  static #isRegistered(id: string) {
    return id in ObfuscatedData.#ELEMENT_FUNCTIONS || id in window.astroObfuscateCustomElements;
  }

  static registerElement(id: string, fn: ElementFunction) {
    if (ObfuscatedData.#isRegistered(id)) {
      throw new Error('An element function with that ID already exists');
    }

    window.astroObfuscateCustomElements[id] = fn;
  }


  #createElement(deobfuscated: string, text?: string | null) {
    if (!this.dataset.type) return;
    if (!ObfuscatedData.#isRegistered(this.dataset.type)) {
      console.error(`Custom type ${this.dataset.type} has no element function registered`);
    }

    return (
      ObfuscatedData.#ELEMENT_FUNCTIONS[this.dataset.type] ||
      window.astroObfuscateCustomElements[this.dataset.type]
    )?.(deobfuscated, text);
  }
}