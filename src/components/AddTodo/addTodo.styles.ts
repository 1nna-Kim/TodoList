import { TextField } from '@mui/material';
import styled from 'styled-components';

export const AddTodoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const AddTodoInput = styled(TextField)`
  && {
    flex-grow: 1;
  }
`;
