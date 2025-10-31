import { client } from "@shared/api/client.ts";
import type { Todo } from "@entities/todo/model/types.ts";

export const todoApi = {
  async getAllTodos(): Promise<Todo[]> {
    return client.get<Todo[]>("/todos").then((res) => res.data);
  },
};
