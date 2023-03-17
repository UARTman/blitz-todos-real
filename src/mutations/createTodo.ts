import { Ctx } from "blitz"
import { db } from "src/db"
import * as z from "zod"

const CreateTodo = z
  .object({
    id: z.number().or(z.undefined()),
    done: z.boolean().or(z.undefined()),
    title: z.string(),
  })
  .nonstrict()

export default async function createTodo(
  input: z.infer<typeof CreateTodo>,
  ctx: Ctx
) {
  // Validate input - very important for security
  const data = CreateTodo.parse(input)
  const todo = await db.task.create({data});
  return todo;
}