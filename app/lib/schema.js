import { z } from "zod";
export const onboardingSchema = z.object({
    industry: z.string({
        require_error:"Please select an industry",
    }),
    subIndustry:z.string({
        require_error:"Please select a sub-industry",
    }),
    bio:z
    .string()
    .max(500)
    .optional(),
    experience:z.string()
    .transform((val)=> parseInt(val,10))
    .pipe(
        z.number()
        .min(0,"experience must be at least 0 years")
        .max(50,"experience must be at most 50 years")
    ),
    skills:z.string().transform((val)=>
        val
          ? val.split(",")
          .map((skill)=>skill.trim())
          .filter(Boolean)
          :undefined
    ),

});