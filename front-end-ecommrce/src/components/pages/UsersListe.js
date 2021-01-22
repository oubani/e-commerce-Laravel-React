import React, { useState, useEffect } from 'react';
import { authApi, link } from '../../Api/Api';
import Loading from '../layouts/Loading';
import { SideNav } from './dashboard/SideNav/SideNav';
import UserListeIem from './UserListeIem';

const UsersListe = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const body = {
    page,
  };

  useEffect(() => {
    async function getUsers() {
      setLoading(true);
      const res = await authApi.get(`${link}/getUsers`, { params: body });
      setLoading(false);
      setUsers(res.data);
    }
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [body.page]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <SideNav />
        <div style={{ flex: '5', flexDirection: 'column', padding: '10px' }}>
          <h1 style={{ margin: '1rem auto' }}>Products Liste</h1>
          <h3 style={{ marginBottom: '1rem' }}>Users Liste</h3>
          <div
            style={{
              display: 'flex',
              marginInline: 'auto',
              maxWidth: '900px',
              padding: '10px 0',
              textAlign: 'center',
              fontSize: '1.2rem',
              background: 'var(--main-blue-color)',
              color: 'var(--main-white-color)',
            }}
          >
            <div style={{ flex: 1 }}>Name</div>
            <div style={{ flex: 2 }}>email</div>
            <div style={{ flex: 2 }}>role</div>
            <div style={{ flex: 2 }}>action</div>
          </div>
          {loading && <Loading />}
          {!loading && users ? (
            users.data.length > 0 &&
            users.data.map((user) => <UserListeIem key={user.id} user={user} />)
          ) : (
            <p> there is no client </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersListe;
