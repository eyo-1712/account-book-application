import { z } from 'zod'

const category = z.object({ category: z.string().trim().min(1) })

export const zForm = z.array(category).min(1)
