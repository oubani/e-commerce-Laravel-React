import React from 'react';
import styled from 'styled-components';

const UserListeIem = ({ user }) => {
  return (
    <div
      style={{
        display: 'flex',
        marginInline: 'auto',
        maxWidth: '900px',
        padding: '10px 0',
        textAlign: 'center',
        fontSize: '1.2rem',
        color: 'black',
      }}
    >
      <UserTd> {user.name}</UserTd>
      <UserTd> {user.email}</UserTd>
      <UserTd>
        {user.role === 1 ? <p style={{ color: 'gold' }}>Admin</p> : <p>User</p>}
      </UserTd>
      <UserTd>
        <Btn> Upgrade </Btn>
      </UserTd>
    </div>
  );
};

const UserTd = styled.div`
  flex: 2;
`;

const Btn = styled.button`
  padding: 5px 20px;
`;

export default UserListeIem;
