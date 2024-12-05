import styled from 'styled-components';
import { Button } from '@mui/material';
import { IButtonStyledProps } from './button.types';

export const ButtonStyled = styled(Button)<IButtonStyledProps>`
  && {
    ${({
      theme: {
        palette: { primary, secondary },
      },
      $gradient,
      $icon,
    }) => {
      if ($gradient) {
        return `
          background: linear-gradient(150deg, ${primary.main} 0%, ${primary.light} 90%);
          color: ${secondary.main};
        `;
      }
      if ($icon) {
        return `
          color: ${secondary.main};
        `;
      }
      return `
        background: none; 
        color: ${primary.contrastText};
      `;
    }}

    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    padding: 1rem;
  }
`;
