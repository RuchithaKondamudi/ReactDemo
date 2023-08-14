import React, { useState } from 'react';
import Button from '../../atoms/Button';
import TextField from '../../atoms/InputField';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

const ResetPass = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const handleReset = () => {
    otp == '12345678' ? alert('otp validaed successfully') : alert('wrong otp');
  };
  return (
    <div>
      <Grid
        container
        direction={'column'}
        gap={4}
        alignItems={'center'}
        justifyContent={'center'}
        paddingTop={10}
      >
        <Grid item>
          <TextField
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item>
          <Button onClick={handleReset} name={'Reset Password'}></Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResetPass;
