import React from 'react';
import styled from 'styled-components';

const UserListeIem = ({ user, upgradeUser, downgradeUser }) => {
  const upgrade = (id) => {
    upgradeUser(id);
  };
  const downgrade = (id) => {
    downgradeUser(id);
  };

  const { id, name, role, email } = user;

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
      <UserTd> {name}</UserTd>
      <UserTd> {email}</UserTd>
      <UserTd>
        {role === 1 ? <p style={{ color: 'gold' }}>Admin</p> : <p>User</p>}
      </UserTd>
      <UserTd>
        {role === 0 ? (
          <BtnUpgrade onClick={() => upgrade(id)}>Upgrade</BtnUpgrade>
        ) : (
          <BtnDowngrade onClick={() => downgrade(id)}> downgrade </BtnDowngrade>
        )}
      </UserTd>
    </div>
  );
};

const UserTd = styled.div`
  flex: 2;
`;

const Btn = styled.button`
  padding: 10px 25px;
  cursor: pointer;
  border: none;
`;

const BtnUpgrade = styled(Btn)`
  background: #cdeca1;
`;

const BtnDowngrade = styled(Btn)`
  background: #caaeea;
`;

export default UserListeIem;
