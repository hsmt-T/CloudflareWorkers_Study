import { Hono } from "hono";
import type { Env } from "../types/env";
import { createTodo, getAllTodos, deleteTodo,updateTodo } from "../services/todo";


export const todoRoute = new Hono<{ Bindings: Env }>();

todoRoute.post("/", async (c) => {
    const { title } = await c.req.json()
    await createTodo(c.env, title)
    return c.json({ statusOK: true })
})

todoRoute.get("/", async (c) => {
    const todos = await getAllTodos(c.env)
    return c.json(todos)
})

todoRoute.put("/:id", async (c) => {
    const id = Number(c.req.param("id"))
    const { title, completed } = await c.req.json()
    await updateTodo(c.env, id, title, completed)
    return c.json({ update : true})
})

todoRoute.delete("/:id", async (c) => {
    const id = Number(c.req.param("id"))
    await deleteTodo(c.env, id)
    return c.json({ delete: true })
})