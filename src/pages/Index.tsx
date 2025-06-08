import { useState } from "react";
import { TodoList } from "@/components/TodoList";
import { TodoInput } from "@/components/TodoInput";

// submodule 1.3.
export interface Todo {
  id: string;
  text: string;
  createdAt: Date;
}
// -submodule 1.3.

const Index = () => {
  // submodule 1.3.
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text.trim(),
      createdAt: new Date(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
  // -submodule 1.3.

  // submodule 1.5.
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  // -submodule 1.5.

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Todo App</h1>
          <p className="text-muted-foreground">Keep track of your tasks</p>
        </div>

        <div className="space-y-6">
          <TodoInput
            // submodule 1.3.
            onAddTodo={addTodo}
            // -submodule 1.3.
          />
          <TodoList
            // submodule 1.4.
            todos={todos}
            // -submodule 1.4.
            // submodule 1.5.
            onDeleteTodo={deleteTodo}
            // -submodule 1.5.
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
