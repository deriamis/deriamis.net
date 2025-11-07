import type { SiteConfig, SiteContent } from "src/types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ryan Egesdahl - Systems Software and Platform Engineer",
  author: "Ryan Egesdahl",
  description:
    "Software and Systems Engineer based in Seattle, USA. ",
  lang: "en",
  siteLogo: "/ryan-small.jpg",
  navLinks: [
    { text: "Top", href: "#top", },
    { text: "Contact", href: "#contact" },
    { text: "Experience", href: "#experience" },
    // { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    // { text: "Blog", href: "/posts"},
    // { text: "Articles", href: "/articles" },
  ],
  socialLinks: [
    { text: "Bluesky", href: "https://bsky.app/profile/did:plc:ta6qcwcdunr7fqsycnrjru2r" },
    { text: "Mastodon", href: "https://mstdn.social/@deriamis"},
    { text: "LinkedIn", href: "https://linkedin.com/in/ryanegesdahl" },
    { text: "Github", href: "https://github.com/deriamis" },
    { text: "GitLab", href: "https://gitlab.com/regesdahl" },
  ],
  socialImage: "/ryan-small.jpg",
  canonicalURL: "https://deriamis.net",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ryan Egesdahl",
    namePronunciation: "ˈɹaiɘn ˈɛɡɪsˌdɐl",
    namePronunciationAudio: "/name.mp3",
    specialty: "Software, Platform, and Linux Systems Engineer",
    summary:
      "I'm a Software, Platform, and Linux systems Engineer based in Seattle, USA. I specialize in Linux systems software, platform tooling and toolchains, automation, and large-scale design and development.",
  },
  contact: {
    email: "me@ryanegesdahl.com",
    phone: "+1 (206) 407-9561",
  },
  experience: [
    {
      company: "GitLab",
      position: "Senior Distribution Engineer - Distribution::Build",
      startDate: "July 2023",
      endDate: "February 2025",
      summary: [
        "My role as a Distribution Engineer included being both a Software Engineer and a Platform Engineer.",
        "I diagnosed and resolved software delivery pipeline issues, including end-to-end test failures. My regular tasks included manual testing of dependency updates and writing automated tests where possible.",
        "During my employment, I began writing Terraform/Tofu to convert the Build Team’s owned infrastructure to managed code deployments to be taken over by a dedicated Infrastructure team.",
        "I also assisted with the design of and managed multiple large-scale projects encompassing several years of future work.",
      ],
    },
    {
      company: "MongoDB",
      position: "Platform Engineer III - Developer Productivity",
      startDate: "May 2020",
      endDate: "April 2023",
      summary: [
        "My role as a Platform Engineer included a Software Engineering with deep systems knowledge of syscalls, library dependencies, and toolchains.",
        "I developed and maintained the SCons build system and toolchain that developers and CI automation use to build server code and run tests.",
        "My code was written in Python and C++ and is deployed to a public, world-accessible GitHub repository.",
        "My work included diagnosing and resolving complex toolchain issues such as distributed compilation and link failures as well as managing and simplifying a compiled object dependency graph of over 100k mesh-connected nodes.",
        "One of my projects included creating and maintaining a Docker container build system to replace the MongoDB container previously developed by DockerHub.",
      ],
    },
    {
      company: "Amazon Web Services (AWS)",
      position: "Systems Engineer II - IAM Service",
      startDate: "October 2017",
      endDate: "May 2020",
      summary: [
        "My role as a Systems Engineer included scaling and improving the operations of the relational datastore I managed, including cross-team interactions and championing operational excellence on my team.",
        "The relational datastore was the single source of truth for AWS Identity user data, which underlies all authN and authZ within AWS.",
        "To manage the datastore and the service on top of it, I regularly deployed code to an “always-on” infrastructure that services millions of users every day in mission-critical applications.",
      ]
    },
    {
      company: "HostGator.com",
      position: "Linux Administration Supervisor - Systems Administration",
      startDate: "September 2015",
      endDate: "October 2017",
      summary: [
        "I led a team of senior Linux administrators responsible for developing and maintaining customer support policy in a constantly changing environment as well as maintaining all tools used in customer support.",
        "I was responsible for developing employees into senior administrators and beyond, setting the pace for technical training within the company.",
        "In my role, I developed several senior administrators into systems architects and served as a liaison between senior support administrators and systems architect team.",
      ]
    },
    {
      company: "HostGator.com",
      position: "Linux Systems Administrator II - Systems Administration",
      startDate: "September 2011",
      endDate: "September 2015",
      summary: [
        "As the team lead, I shared responsibility with the team for developing and documenting support operations procedures, including disaster recovery.",
        "I trained and mentored new administrators from junior positions into senior positions.",
        "I investigated and resolved issues requiring potential destruction of user data, including root access compromises and corrupted filesystems.",
        "I developed and reviewed operations tools written in multiple languages which were published into a company-wide repository and used by support engineers of multiple levels of experience.",
      ]
    },
    {
      company: "HostGator.com",
      position: "Linux Systems Administrator - Systems Administration",
      startDate: "May 2011",
      endDate: "September 2011",
      summary: [
        "I diagnosed and resolved problems with websites written in various languages and frameworks.",
        "I administered Linux servers with root access, including but not limited to dedicated servers and VPS containers (OpenVZ).",
        "I became an expert in Plesk servers and developed documentation and a training program to pass that knowledge on to my fellow administrators.",
      ]
    }
  ],
  /*
  projects: [
    {
      name: "GeekVim",
      summary: "A NeoVim configuration for developer geeks.",
      linkDocs: "https://geekvim.org",
      linkSource: "https://github.com/GeekVim",
      image: "/geekvim.png",
    },
    {
      name: "ExecJail",
      summary: "A lightweight Linux sandboxing tool for running untrusted binaries.",
      linkDocs: "https://execjail.org",
      linkSource: "https://github.com/HanamiToolworks/execjail",
      image: "/execjail.png",
    }
  ],
  */
  about: {
    description: [
    `Hello, I'm Ryan Egesdahl. I'm an experienced and principled Software and Systems engineer who loves to make "impossible" things happen. I have a strong background in systems programming, including Linux kernel syscalls, software development toolchains, build systems, systems software debugging, and Linux security tools. In addition, I have several years of experience as a systems engineer designing, deploying, and maintaining large-scale architectures as well as infrastructure automation and monitoring.`,
    `Over my nearly 20 years of experience, I have developed talents for finding technical possibilities, design simplification, productizing internal tooling, and menoring and educating others. My projects are oriented on free tools and utilities for personal and software development productivity as well as some odds-and-ends of retro technology.`,
    ],
    image: "/ryan-big.jpg",
  },
};