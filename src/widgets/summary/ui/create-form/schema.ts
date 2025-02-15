import { z } from 'zod'

export const schema = z.object({
  type: z.enum(['income', 'expenditure']),
  accountId: z.number(),
  categoryId: z.number(),
  money: z.number(),
  datetime: z.string().datetime({ local: true }),
})
export type FormSchema = z.infer<typeof schema>
