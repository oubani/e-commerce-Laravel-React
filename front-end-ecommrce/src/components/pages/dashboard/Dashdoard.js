import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { checkAdmin } from '../../../actions/authAction';

const Dashdoard = (props) => {
  // distruct from props
  const { auth, checkAdmin } = props;

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      props.history.push('/login');
    }
    console.log('call checkAdmin method');
    checkAdmin();
    console.log(isAdmin);
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

export default connect(mapStateToProps, { checkAdmin })(Dashdoard);
