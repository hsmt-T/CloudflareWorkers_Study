import { findAllTodos, insertTodo } from "../repositories/todo";
import type { Env } from "../types/env";

export const createTodo = (env: Env, title: string) => {
    return insertTodo(env, title)
}

export const getAllTodos = (env: Env) => {
    return findAllTodos(env)
}