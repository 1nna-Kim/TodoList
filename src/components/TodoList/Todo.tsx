import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import { Typography } from '@mui/material';
import { ListItemStyled, CheckboxStyled, ItemWrapper, EditingTodoInput } from './todo.styles';
import { Button } from '../Button';
import { ITodoProps } from './todo.types';
import React from 'react';

export const Todo = React.memo(
  ({
    todo,
    isEditing,
    editValue,
    editWarning,
    onChecked,
    onEdit,
    onDelete,
    onCancelEdit,
    onSaveEdit,
    onChangeEditValue,
  }: ITodoProps) => {
    return (
      <ListItemStyled>
        {!isEditing && (
          <ItemWrapper>
            <CheckboxStyled onChange={() => onChecked(todo.id)} checked={todo.completed} />
            <Typography>{todo.value}</Typography>
          </ItemWrapper>
        )}

        {isEditing && <EditingTodoInput value={editValue} onChange={onChangeEditValue} placeholder={editWarning} />}

        <ItemWrapper>
          {!isEditing && (
            <>
              <Button onClick={() => onEdit(todo.id)} $icon={true}>
                <EditOutlinedIcon />
              </Button>
              <Button onClick={() => onDelete(todo.id)} $icon={true}>
                <DeleteOutlinedIcon />
              </Button>
            </>
          )}

          {isEditing && (
            <>
              <Button onClick={() => onCancelEdit(todo.id)} $icon={true}>
                <EditOffOutlinedIcon />
              </Button>
              <Button onClick={() => onSaveEdit(todo.id)} $icon={true}>
                <SaveAsOutlinedIcon />
              </Button>
            </>
          )}
        </ItemWrapper>
      </ListItemStyled>
    );
  },
);
