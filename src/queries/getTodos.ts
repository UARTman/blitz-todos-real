import { Task } from "@prisma/client";
import { Ctx } from "blitz"
import { db } from "src/db";
import * as z from "zod"

// const GetTodos = z.object({
//     id: z.number(),
// })

export default async function getTodos(
    input,
    ctx: Ctx
): Promise<Task[]> {
    // Validate the input
    // const data = GetTodos.parse(input)

    // Require user to be logged in
    // ctx.session.$authorize()

    const todos = await db.task.findMany();

    // Can do any processing, fetching from other APIs, etc

    return todos;
}

