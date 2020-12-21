import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login, clearError } from '../../actions/authAction';
import { ToastContainer, toast } from 'react-toastify';
import { Link, Redirect } from 'react-router-dom';

const Login = (props) => {
  const { auth: auth, error, login } = props;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    if (email.length >= 8 && password.length >= 7) login(formData);
    if (error !== null) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push('/dashboard');
    }

    if (error !== null) {
      toast.error(error);
    }
  }, [error, auth.isAuthenticated]);

  const { email, password } = user;
  return (
    <div className='login-screen'>
      <ToastContainer />
      <section className='login-info'>
        <h1>Welcome to ElectronStore</h1>
        <p>Here you can find all smart products </p>
      </section>
      <section className='login-form'>
        <h1>Login</h1>
        <form action='' onSubmit={onSubmit}>
          <div className='form-controll'>
            <label htmlFor='usernamme'>User Name</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-controll'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              required
              onChange={onChange}
            />
          </div>
          <input
            type='submit'
            value='Login'
            className='btn btn-primary btn-block'
          />
        </form>
        <center>
          <Link to='/register' className='registerLink'>
            Create accounte
          </Link>
        </center>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => ({
  error: state.auth.error,
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
