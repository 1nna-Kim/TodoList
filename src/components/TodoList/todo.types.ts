import { ChangeEvent } from 'react';

export interface ITodo {
  id: string;
  value: string;
  completed: boolean;
}

export interface ITodoProps {
  todo: ITodo;
  isEditing: boolean;
  editValue: string | null;
  editWarning: string;
  onChecked: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCancelEdit: (id: string) => void;
  onSaveEdit: (id: string) => void;
  onChangeEditValue: (e: ChangeEvent<HTMLInputElement>) => void;
}
