import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  size?: 'large' | 'small';
  color?: any;
  name?: string;
  sx?: any;
  onClick?: () => void;
  variant?: 'outlined' | 'contained';
}
const ButtonComponent = ({
  size,
  color,
  name,
  sx,
  onClick,
  variant,
}: ButtonProps) => {
  return (
    <>
      <Button
        size={size}
        color={color}
        sx={sx}
        onClick={onClick}
        variant={variant}
      >
        {name}
      </Button>
    </>
  );
};

export default ButtonComponent;
