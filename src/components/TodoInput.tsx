
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
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
    <Card>
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1"
          />
          <Button type="submit" size="sm">
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
