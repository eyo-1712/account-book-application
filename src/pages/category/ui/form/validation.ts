import { z } from 'zod'

const category = z.object({ category: z.string().min(1) })

export const zForm = z.array(category).min(1)
