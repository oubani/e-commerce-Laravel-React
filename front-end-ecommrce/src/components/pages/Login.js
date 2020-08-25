import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authAction';
import { Link } from 'react-router-dom';

const Login = ({ login }) => {
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
    login(formData);
  };

  const { email, password } = user;
  return (
    <div className='login-screen'>
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
            />
          </div>
          <div className='form-controll'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={password}
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

export default connect(null, { login })(Login);
