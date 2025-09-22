import {serve} from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/functions";


//create an API that server zero function
export const {GET,POST,PUT} = serve({
     client: inngest,
     functions: [
        /*your function will be passed here later! */
        generateIndustryInsights,
        
    ],
});