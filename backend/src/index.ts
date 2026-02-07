import { Hono } from 'hono'
import type { Env } from './types/env';
import { todoRoute } from './router/todo';

const app = new Hono<{ Bindings: Env }>();

app.get("/message", (c) => {
    const db = c.env.todos;
    return c.text("hi Hono")
});

app.onError((err, c) => {
    console.error(`${err}`);
    return c.json({ message: "Internal Server Error", error: err.message }, 500);
});

app.route("/todos", todoRoute)


export default app;