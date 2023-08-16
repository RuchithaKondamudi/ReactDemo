import * as React from 'react';
import Box from '@mui/material/Box';
import {
  TextFieldProps as MuiTextFieldProps,
  TextField as MuiTextField,
} from '@mui/material';

export type TextFieldProps = Omit<MuiTextFieldProps, 'variant'>;

export default function TextField(props: TextFieldProps) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <MuiTextField
        data-testid="text-field"
        id="outlined-basic"
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
      />
    </Box>
  );
}
