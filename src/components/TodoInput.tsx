
import { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

export const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTodo(input);
      setInput('');
    }
  };

  return (
    <div className="bg-card rounded-lg border shadow-sm p-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </form>
    </div>
  );
};
