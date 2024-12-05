import styled from 'styled-components';
import { Typography } from '@mui/material';

const TitleStyled = styled(Typography)`
  && {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;

export default TitleStyled;
