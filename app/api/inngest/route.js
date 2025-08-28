import {serve} from "inngest/next";
import { inngest } from "@/lib/inngest/client";


//create an API that server zero function
export const {GET,POST,PUT} = serve({
     client: inngest,
     functions: [
        /*your function will be passed here later! */
        
    ],
});