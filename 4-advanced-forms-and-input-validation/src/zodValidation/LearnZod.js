import { z } from "zod";

const ordersSchema = z.object({
  customer: z.object({
    name: z.string().min(3),
    email: z.email()
  }),
  id: z.number().min(1000),
  date: z.date().optional().nullable(),
  price: z.number().min(10),
  password: z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number'),
  category: z.string().refine((value) => {
    if (value === "ORANGE") return false;
    return true;
  }, {
    message: "Not a valid category, can't use ORANGE"
  }),
  quantity: z.number().default(1)
})

const ordersData = {
  customer: {
    name: "Mr. Ram",
    email: "ramg@mail.com"
  },
  id: 1235,
  date: null,
  price: 123.45,
  password: "123876A578",
  category: "APPLE"
}

const data = ordersSchema.parse(ordersData);

console.log(data)






