import React, { ChangeEvent, useCallback, useState } from 'react';
import { Button } from '../Button';
import { AddTodoWrapper, AddTodoInput } from './addTodo.styles';
import { IAddTodo } from './addTodo.types';

export const AddTodo = React.memo(({ onTodoAdd }: IAddTodo) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    if (value.trim() !== '') {
      onTodoAdd(value.trim());
      setValue('');
    }
  }, [value, onTodoAdd]);

  return (
    <AddTodoWrapper>
      <AddTodoInput value={value} onChange={handleChange} placeholder='Новая задача...' />
      <Button onClick={handleAdd} $gradient={true} variant='contained'>
        Добавить
      </Button>
    </AddTodoWrapper>
  );
});
