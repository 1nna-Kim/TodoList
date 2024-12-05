import { List, ListItem, Checkbox, Typography, TextField } from '@mui/material';
import styled from 'styled-components';

export const TodoCounterStyled = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-size: 1.5rem;
    font-weight: bold;
    align-self: flex-start;
  }
`;

export const ListStyled = styled(List)`
  && {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0;
    min-width: 100%;
  }
`;

export const ListItemStyled = styled(ListItem)`
  && {
    ${({
      theme: {
        palette: { primary, secondary },
      },
    }) => `
    background: linear-gradient( 270deg,
      ${primary.main} 0%,
      ${primary.light} 100%
    );
    color: ${secondary.main};`}
    padding: 1rem;
    border-radius: 10px;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const CheckboxStyled = styled(Checkbox)`
  && {
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  &&.Mui-checked {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const EditingTodoInput = styled(TextField)`
  && {
    flex-grow: 1;
  }
`;
