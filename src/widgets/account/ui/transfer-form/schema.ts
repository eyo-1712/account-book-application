import { z } from 'zod'

export const schema = z.object({
  giveId: z.number(),
  takeId: z.number(),
  money: z.number(),
})

export type FormSchema = z.infer<typeof schema>
