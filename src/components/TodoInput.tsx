import { useState } from "react";
import { Plus } from "lucide-react";

// submodule 1.3.
interface TodoInputProps {
  onAddTodo: (text: string) => void;
}
// -submodule 1.3.
export const TodoInput = (
  // submodule 1.3.
  { onAddTodo }: TodoInputProps
    // -submodule 1.3.
) =>
  {
    // submodule 1.2.
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (input.trim()) {
        // -submodule 1.2.
        // submodule 1.3.
        onAddTodo(input);
        // -submodule 1.3.
        // submodule 1.2.
        setInput("");
      }
    };
    // -submodule 1.2.

    return (
      <div className="bg-card rounded-lg border shadow-sm p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          {/* submodule 1.1. */}
          <input
            type="text"
            // -submodule 1.1.
            // submodule 1.2.
            value={input}
            onChange={(e) => setInput(e.target.value)}
            // -submodule 1.2.
            // submodule 1.1.
            placeholder="Add a new task..."
            className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </form>
        {/* -submodule 1.1. */}
      </div>
    );
  };
