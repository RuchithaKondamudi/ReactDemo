import React from 'react';
import { Grid } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import TextField from '../../atoms/InputField';

interface TypoWithInputProps {
  variant: any;
  name: any;
  placeholder: string;
}

const TypoWithInput = ({ variant, name, placeholder }: TypoWithInputProps) => {
  return (
    <Grid container direction={'column'} gap={2}>
      <Grid item>
        <TypographyComponent variant={variant}>{name}</TypographyComponent>
      </Grid>
      <Grid item>
        <TextField placeholder={placeholder}></TextField>
      </Grid>
    </Grid>
  );
};

export default TypoWithInput;
