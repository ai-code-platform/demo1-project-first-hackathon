import { Trash2 } from "lucide-react";
import { Todo } from "@/pages/Index";

// submodule 1.4.
interface TodoListProps {
  todos: Todo[];
  // -submodule 1.4.
  // submodule 1.5.
  onDeleteTodo: (id: string) => void;
  // -submodule 1.5.
  // submodule 1.4.
}
// -submodule 1.4.

export const TodoList = (
  // submodule 1.4.
  {
    todos,
    // -submodule 1.4.
    // submodule 1.5.
    onDeleteTodo,
    // -submodule 1.5.
    // submodule 1.4.
  }:
  TodoListProps
  // -submodule 1.4.
) =>
  {
    // submodule 1.5.
    if (todos.length === 0) {
      return (
        <div className="bg-card rounded-lg border shadow-sm p-8 text-center">
          <p className="text-muted-foreground">
            No tasks yet. Add one above to get started!
          </p>
        </div>
      );
    }
    // -submodule 1.5.
    return (
      <div className="space-y-2">
        {/* submodule 1.4. */}
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-card rounded-lg border shadow-sm transition-shadow hover:shadow-md p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-foreground flex-1">{todo.text}</p>
              <button
                onClick={() => onDeleteTodo(todo.id)}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9 text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
        {/* -submodule 1.4. */}
      </div>
    );
  };
