import { z } from 'zod'

export const schema = z.object({
  giveId: z.string(),
  takeId: z.string(),
  money: z.number(),
})

export type FormSchema = z.infer<typeof schema>
