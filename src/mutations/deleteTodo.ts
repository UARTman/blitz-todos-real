import { Ctx } from "blitz"
import { db } from "src/db"
import * as z from "zod"

const DeleteTodo = z
  .object({
    id: z.number().or(z.undefined()),
  })
  .nonstrict()

export default async function deleteTodo(
  input: z.infer<typeof DeleteTodo>,
  ctx: Ctx
) {
  // Validate input - very important for security
  const data = DeleteTodo.parse(input)
  const todo = await db.task.delete({where: {
    id: data.id
  }});
  return todo;
}