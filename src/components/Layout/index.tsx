import React from 'react';
import { AppWrapper, ContentWrapper } from './layout.styles';

interface ILayout {
  children: React.ReactNode;
}

export function Layout({ children }: ILayout) {
  return (
    <AppWrapper>
      <ContentWrapper maxWidth='sm'>{children}</ContentWrapper>
    </AppWrapper>
  );
}
