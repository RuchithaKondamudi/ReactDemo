import React from 'react';
import Typography from '@mui/material/Typography';

interface TypographyProps {
  variant: any;
  children: any;
  sx?: any;
  color?: any;
}
const TypographyComponent = ({
  variant,
  children,
  sx,
  color,
}: TypographyProps) => {
  return (
    <>
      <Typography variant={variant} sx={sx} color={color}>
        {children}
      </Typography>
    </>
  );
};

export default TypographyComponent;
