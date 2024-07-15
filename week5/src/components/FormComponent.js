import React , {useState} from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'

const FormComponent = () => {
    const [FormData , setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors , setErrors] = useState({
        username: false,
        email: false,
        password: false
    })

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
        setErrors({ ...errors, [name]: false });
        setErrorMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username , email , password} = FormData
        if(!username || !email || !password){
            setErrors({
                username: !username,
                email: !email,
                password: !password
            })
            setErrorMessage('All fields are required.')
        }else{
            setErrorMessage('')
            console.log('Form submitted' , FormData)
        }
    }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}>
        <Typography variant='h5' align='center'>Sign Up</Typography>
        <TextField 
            label="Username"
            variant='outlined'
            name='username'
            value={FormData.username}
            onChange={handleChange}
            error={errors.username}
            helperText={errors.username && "Username is required"}
        />
        <TextField
        label="Email"
        variant="outlined"
        name="email"
        value={FormData.email}
        onChange={handleChange}
        error={errors.email}
        helperText={errors.email && "Email is required"}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        value={FormData.password}
        onChange={handleChange}
        error={errors.password}
        helperText={errors.password && "Password is required"}
      />
      {errorMessage && (
        <Typography color="error" align='center'>{errorMessage}</Typography>
      )}
      <Button type='submit' variant='contained' color='primary'>Submit</Button>
    </Box>
  )
}

export default FormComponent