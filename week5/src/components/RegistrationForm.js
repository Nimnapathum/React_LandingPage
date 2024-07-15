import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';

const RegistrationForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '300px' }}>
      <Typography variant='h5' align='center'>Registration Form</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              label="Username"
              name="username"
              variant="outlined"
              fullWidth
              error={Boolean(errors.username && touched.username)}
              helperText={errors.username && touched.username && <ErrorMessage name="username" />}
            />
            <Field
              as={TextField}
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              error={Boolean(errors.email && touched.email)}
              helperText={errors.email && touched.email && <ErrorMessage name="email" />}
            />
            <Field
              as={TextField}
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              error={Boolean(errors.password && touched.password)}
              helperText={errors.password && touched.password && <ErrorMessage name="password" />}
            />
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegistrationForm;
