import { z } from 'zod'

export const schema = z.object({
  id: z.number(),
  name: z.string(),
  number: z.string().regex(/^[\d-]+$/),
  money: z.number(),
})
export type FormSchema = z.infer<typeof schema>
