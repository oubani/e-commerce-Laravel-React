import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { checkAdmin } from '../../../actions/authAction';
import SoldChart from '../../charts/SoldChart';
import VisitsChart from '../../charts/VisitsChart';
import { Wrapper } from '../../layouts/Wrapper';
import SoldOutProducts from '../../product/SoldOutProducts';
import { SideNav } from './SideNav/SideNav';

const Dashdoard = (props) => {
  // distruct from props
  const { auth, checkAdmin } = props;

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      props.history.push('/login');
    }
    setIsAdmin(checkAdmin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <SideNav />
        <div style={{ flex: '5', flexDirection: 'column', padding: '10px' }}>
          <Wrapper column='2'>
            <SoldChart />
            <VisitsChart />
          </Wrapper>
          <SoldOutProducts />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { checkAdmin })(Dashdoard);
