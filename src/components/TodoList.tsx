
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Todo } from '@/pages/Index';

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
}

export const TodoList = ({ todos, onDeleteTodo }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">No tasks yet. Add one above to get started!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <Card key={todo.id} className="transition-shadow hover:shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-foreground flex-1">{todo.text}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDeleteTodo(todo.id)}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
