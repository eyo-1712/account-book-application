import { z } from 'zod'

const category = z.object({ id: z.string(), name: z.string().trim().min(1) })

export const schema = z.object({ categories: category.array().min(1) })
export type FormSchema = z.infer<typeof schema>
