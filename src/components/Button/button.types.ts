import { ButtonProps } from '@mui/material';

export interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  onChange?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  $gradient?: boolean;
  $icon?: boolean;
}

export interface IButtonStyledProps extends ButtonProps {
  $gradient?: boolean;
  $icon?: boolean;
}
