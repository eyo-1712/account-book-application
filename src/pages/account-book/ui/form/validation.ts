import { z } from 'zod'

export const zForm = z.object({
  type: z.string(),
  money: z.number(),
  category: z.string().min(1),
  datetime: z
    .string()
    .regex(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d)$/,
      'Invalid datetime format. Expected format is YYYY-MM-DDTHH:mm',
    ),
})
