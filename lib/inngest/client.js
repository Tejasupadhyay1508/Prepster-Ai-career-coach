import { Inngest } from "inngest";
//create a client to send and receive events
export const inngest = new Inngest({
    id: "Prepster",
    name: "Prepster",
    credentials:{
        gemini:{
            apikey:process.env.GEMINI_API_KEY,
        },
    },
});