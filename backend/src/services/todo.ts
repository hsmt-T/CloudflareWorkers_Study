import { findAllTodos, insertTodo, putTodo, deleteTodoID } from "../repositories/todo";
import type { Env } from "../types/env";

export const createTodo = (env: Env, title: string) => {
    return insertTodo(env, title)
}

export const getAllTodos = (env: Env) => {
    return findAllTodos(env)
}

export const updateTodo = (env: Env, id: number, title: string, completed: number ) => {
    return putTodo(env, id, title, completed)
}

export const deleteTodo = (env: Env, id: number) => {
    return deleteTodoID(env, id)
}