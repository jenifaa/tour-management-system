import z from "zod";

export const createTourSchema= z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    costFrom: z.number(),
    startDate: z.string(),
    endDate: z.string(),
    tourType: z.string(),
    included: z.array(z.string()),
    excluded: z.array(z.string()),
    amenities: z.array(z.string()),
    touPlan: z.array(z.string()),
    maxGuest: z.number(),
    minAge: z.number(),
    division: z.string(),
})
export const updateTourSchema= z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    location: z.string().optional(),
    costFrom: z.number().optional(),
    startDate: z.string().optional().optional(),
    endDate: z.string().optional().optional(),
    tourType: z.string().optional(),
    included: z.array(z.string()).optional(),
    excluded: z.array(z.string()).optional(),
    amenities: z.array(z.string()).optional(),
    touPlan: z.array(z.string()).optional(),
    maxGuest: z.number().optional(),
    minAge: z.number().optional(),
    divisionId: z.string().optional(),
})



export const createTourTypeZodSchema = z.object({
    name:z.string()
})