import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Dashdoard = (props) => {
  // distruct from props
  const { auth } = props;

  useEffect(() => {
    if (!auth.isAuthenticated) {
      props.history.push('/login');
    }
  }, []);

  return (
    <div className='container'>
      <h1>Dashboard page</h1>
      <p>this is it</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Dashdoard);
