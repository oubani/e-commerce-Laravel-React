import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/authAction';
import { Link } from 'react-router-dom';

const Register = ({ register }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [error, setError] = useState({});

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      console.log('passwords do not match');
    } else {
      console.log('subb');

      const formData = {
        name,
        email,
        password,
        password_confirmation,
      };
      register(formData);
    }
  };

  const { email, password, name, password_confirmation } = user;
  return (
    <div className='login-screen'>
      <section className='login-info'>
        <h1>Welcome to ElectronStore</h1>
        <p>Here you can find all smart products </p>
      </section>
      <section className='login-form'>
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <div className='form-controll'>
            <label htmlFor='name'>User Name</label>
            <input type='text' name='name' value={name} onChange={onChange} />
          </div>
          <div className='form-controll'>
            <label htmlFor='email'>Email </label>
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
          <div className='form-controll'>
            <label htmlFor='confirm-password'>Confirme Password</label>
            <input
              type='password'
              name='password_confirmation'
              value={password_confirmation}
              onChange={onChange}
            />
          </div>
          <input
            type='submit'
            value='Register'
            className='btn btn-primary btn-block'
          />
        </form>
        <center>
          <Link to='/login' className='registerLink'>
            Already have account
          </Link>
        </center>
      </section>
    </div>
  );
};

export default connect(null, { register })(Register);
