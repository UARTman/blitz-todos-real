import { Ctx } from "blitz"
import { db } from "src/db"
import * as z from "zod"

const UpdateTodo = z
  .object({
    id: z.number().or(z.undefined()),
    done: z.boolean().or(z.undefined()),
    title: z.string(),
  })
  .nonstrict()

export default async function createProject(
  input: z.infer<typeof UpdateTodo>,
  ctx: Ctx
) {
  // Validate input - very important for security
  const data = UpdateTodo.parse(input)
  const todo = await db.task.update({where: {id: data.id}, data});
  return todo;
}