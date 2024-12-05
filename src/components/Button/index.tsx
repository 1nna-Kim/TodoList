import { ButtonStyled } from './button.styles';
import { IButton } from './button.types';

export function Button({ children, ...props }: IButton) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
