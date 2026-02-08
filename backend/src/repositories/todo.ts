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

export const putTodo = async (env: Env, id: number, title?: string, completed?: number  ) => {
    await env.todos
        .prepare('UPDATE todos SET title = COALESCE(?, title), completed = COALESCE(?, completed) WHERE id = ?')
        .bind(title, completed, id)
        .run()
}

export const deleteTodoID = async (env: Env, id : number) => {
    await env.todos
        .prepare('DELETE FROM todos WHERE id = ?')
        .bind(id)
        .run()
}