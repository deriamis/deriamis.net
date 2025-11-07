import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";

export const auth = betterAuth({
    plugins: [
        genericOAuth({ 
            config: [ 
                { 
                    providerId: "provider-id", 
                    clientId: "test-client-id", 
                    clientSecret: "test-client-secret", 
                    discoveryUrl: "https://auth.example.com/.well-known/openid-configuration",
                    // authorizationUrl: "https://api.example.com/oauth/authorize",
                    // tokenUrl: "https://api.example.com/oauth/access_token",
                    // scopes: ["user_profile", "user_media"]
                }, 
            ] 
        }) 
    ]
});