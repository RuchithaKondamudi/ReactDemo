import Button from '../../atoms/Button';
import TextField from '../../atoms/InputField';
import { Grid } from '@mui/material';
import { getUsers } from '../../../service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordVerify = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    const users = await getUsers();
    console.log(users);
    const userpresent = users.filter(
      (u: any) => u.email == mail && u.password == pass
    );
    const valid = userpresent.length > 0;
    console.log(userpresent);
    if (valid) {
      navigate('/reset');
    }
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
            value={mail}
            placeholder="enter mail"
            onChange={(e) => setMail(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            value={pass}
            type="password"
            placeholder="enter password"
            onChange={(e) => setPass(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item>
          <Button onClick={handleLogin} name={'Submit'}></Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PasswordVerify;
