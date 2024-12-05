import TitleStyled from './title.styles';

interface ITitle {
  children: React.ReactNode;
}

export function Title({ children }: ITitle) {
  return <TitleStyled variant='h1'>{children}</TitleStyled>;
}
