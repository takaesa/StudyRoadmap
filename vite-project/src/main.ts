import { z } from "zod"


const hobbies = ["programming", "weight lifting", "guitar"] as const

const UserSchema = z.object({
  username: z.string().min(3),
  age: z.number().gt(0),
  birthday: z.date(),
  isProgrammer: z.boolean(),
  hobby: z.enum(hobbies)
})

type User = z.infer<typeof UserSchema>

const user: User = { username: "WDS", age: 20, birthday: new Date(), isProgrammer: true, hobby: 'guitar' }

console.log(UserSchema.safeParse(user))

