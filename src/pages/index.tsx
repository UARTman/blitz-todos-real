import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { TodoCreator } from "src/stories/TodoCreator"
import { TodoList } from "src/stories/TodoList"
import { Task } from "@prisma/client"
import { useQuery, useMutation, invalidateQuery } from "@blitzjs/rpc"
import getTodos from "src/queries/getTodos"
import createTodo from "src/mutations/createTodo"
import styles from 'src/styles/Home.module.css'
import updateTodo from "src/mutations/updateTodo"
import deleteTodo from "src/mutations/deleteTodo"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */



const Home: BlitzPage = () => {

  const [tasks] = useQuery(getTodos, {});
  const [createTodoMut] = useMutation(createTodo);
  const [updateTodoMut] = useMutation(updateTodo);
  const [deleteTodoMut] = useMutation(deleteTodo);

  async function onCreateTask(title: string) {
    await createTodoMut({
      title
    });
    await invalidateQuery(getTodos);
  }

  async function onUpdateTask(id: number, newT: Task) {
    await updateTodoMut(newT);
    await invalidateQuery(getTodos);
  }

  async function onDeleteTask(id: number) {
    await deleteTodoMut({ id });
    await invalidateQuery(getTodos);
  }

  return (
    <Layout title="Home">
      <style>

      </style>
      <TodoCreator onSubmit={onCreateTask} />
      <TodoList tasks={tasks} onTaskDelete={onDeleteTask} onTaskChange={onUpdateTask} />
    </Layout>
  )
}

export default Home
