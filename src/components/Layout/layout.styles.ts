import { Box, Container } from '@mui/material';
import styled from 'styled-components';

export const AppWrapper = styled(Box)`
  background: linear-gradient(
    150deg,
    ${({ theme: { palette } }) => palette.primary.main} 0%,
    ${({ theme: { palette } }) => palette.primary.light} 90%
  );
  min-height: 100vh;
`;

export const ContentWrapper = styled(Container)`
  && {
    ${({
      theme: {
        palette: { secondary },
      },
    }) => `
    background-color: ${secondary.main};
    box-shadow: 0px 0px 10px 4px ${secondary.contrastText};
  `}
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem;
  }
`;
