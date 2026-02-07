import type { Env } from "../types/env";
import type { Todo } from "../types/todo";

export const insertTodo = async (env: Env, title: string) => {
    await env.todos
        .prepare('INSERT INTO todos (title, completed) VALUES (?, 0)')
        .bind(title)
        .run()
}

export const findAllTodos = async (env: Env) => {
    const { results } = await env.todos
        .prepare('SELECT * FROM todos')
        .all<Todo>()

    return results;
}