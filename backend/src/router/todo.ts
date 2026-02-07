import { Hono } from "hono";
import type { Env } from "../types/env";
import { createTodo, getAllTodos } from "../services/todo";


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