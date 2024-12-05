import { useCallback, useState, ChangeEvent, useEffect, useMemo } from 'react';
import uuid from 'react-uuid';
import { ITodo } from './todo.types';
import { Todo } from './Todo';
import { AddTodo } from '../AddTodo';
import { FilterButtons } from '../FiltersButtons';
import { ListStyled, TodoCounterStyled } from './todo.styles';

export function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [tab, setTab] = useState('all');
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [editWarning, setEditWarning] = useState('');

  //синхронизация todos в localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //список отфильтрованных задач
  const filteredTodos: ITodo[] = useMemo(() => {
    return todos.filter(todo => {
      if (tab === 'all') return true;
      if (tab === 'active') return !todo.completed;
      if (tab === 'completed') return todo.completed;
      return false;
    });
  }, [todos, tab]);

  // Управление чекбоксом
  const handleChecked = useCallback((id: string) => {
    setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  }, []);

  // Упаравление режимом редактирования задачи
  const handleEdit = useCallback(
    (id: string) => {
      const todo = todos.find(todo => todo.id === id);
      if (todo) {
        setEditingTodoId(id);
        setEditValue(todo.value);
      }
    },
    [todos],
  );

  // Удаление задачи
  const handleDelete = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  // Отмена редактирования
  const handleCanselEdit = useCallback(() => {
    setEditValue('');
    setEditingTodoId(null);
    setEditWarning('');
  }, []);

  // Сохранить изменения в задаче
  const handleSaveEdit = useCallback(
    (id: string) => {
      if (!editValue.trim()) {
        setEditWarning('Невозможно сохранить пустую строку');
        return;
      }

      setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, value: editValue } : todo)));
      setEditingTodoId(null);
      setEditValue('');
      setEditWarning('');
    },
    [editValue],
  );

  // Управление инпута редактирования задачи
  const handleChangeEditValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  }, []);

  // Добавление новой задачи
  const handleAddTodo = useCallback((value: string) => {
    setTodos(prev => [...prev, { id: uuid(), value, completed: false }]);
  }, []);

  return (
    <>
      <AddTodo onTodoAdd={handleAddTodo} />
      <FilterButtons active={tab} onChange={current => setTab(current)} />
      <TodoCounterStyled variant='h2'>
        {tab === 'all' && 'Всего задач'}
        {tab === 'active' && 'Активные задачи'}
        {tab === 'completed' && 'Выполненные задачи'} : {filteredTodos.length}
      </TodoCounterStyled>
      <ListStyled>
        {filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            isEditing={editingTodoId === todo.id}
            editValue={editValue}
            editWarning={editWarning}
            onChecked={handleChecked}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onCancelEdit={handleCanselEdit}
            onSaveEdit={handleSaveEdit}
            onChangeEditValue={handleChangeEditValue}
          />
        ))}
      </ListStyled>
    </>
  );
}
