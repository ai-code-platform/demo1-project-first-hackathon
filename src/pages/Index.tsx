
import { useState } from 'react';
import { TodoList } from '@/components/TodoList';
import { TodoInput } from '@/components/TodoInput';

export interface Todo {
  id: string;
  text: string;
  createdAt: Date;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text.trim(),
      createdAt: new Date(),
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Todo App</h1>
          <p className="text-muted-foreground">Keep track of your tasks</p>
        </div>
        
        <div className="space-y-6">
          <TodoInput onAddTodo={addTodo} />
          <TodoList todos={todos} onDeleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
};

export default Index;
