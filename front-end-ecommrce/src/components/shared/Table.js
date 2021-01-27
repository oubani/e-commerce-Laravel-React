import styled from 'styled-components';

export const TrTable = styled.div`
  display: flex;
  margin: auto;
  max-width: 900px;
  padding: 10px 0;
  text-align: center;
  font-size: 1.2rem;
`;

export const THead = styled(TrTable)`
  background: var(--main-blue-color);
  color: var(--main-white-color);
`;
export const TBody = styled(TrTable)`
  color: #fff;
`;
export const TD = styled.div`
  flex: ${({ flex }) => (flex ? flex : '1')};
`;
