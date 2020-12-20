import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { register } from '../../actions/authAction';
import { Link } from 'react-router-dom';

const Register = (props) => {
  const {
    register,
    auth: { isAuthenticated, error },
  } = props;

  const [user, setUser] = useState({
    name: 'oubani ayoub',
    email: 'test@gmail.com',
    password: 'testtest',
    password_confirmation: 'testtest',
  });

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      toast.warning('passwords do not match');
    } else if (name.length < 7) {
      toast.warning('Enter a name longer than 7 characters ');
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

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }
    if (error !== null) {
      console.log(error.email);
      toast.warning(error.email[0]);
    }
  }, [error, isAuthenticated]);

  const { email, password, name, password_confirmation } = user;
  return (
    <div className='login-screen'>
      <ToastContainer />
      <section className='login-info'>
        <h1>Welcome to ElectronStore</h1>
        <p>Here you can find all smart products </p>
      </section>
      <section className='login-form'>
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <div className='form-controll'>
            <label htmlFor='name'>User Name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-controll'>
            <label htmlFor='email'>Email </label>
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
              onChange={onChange}
              required
            />
          </div>
          <div className='form-controll'>
            <label htmlFor='confirm-password'>Confirme Password</label>
            <input
              type='password'
              name='password_confirmation'
              value={password_confirmation}
              onChange={onChange}
              required
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
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { register })(Register);
