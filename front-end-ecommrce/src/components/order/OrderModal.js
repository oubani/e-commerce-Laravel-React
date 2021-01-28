import React from 'react';
import styled from 'styled-components';
import Loading from '../layouts/Loading';
import { SeeBtn } from '../pages/UserListeIem';
import { THead, TBody, TDH, TDB } from '../shared/Table';
import OrderDetail from './OrderDetail';

const OrderModal = (props) => {
  const { details, loading } = props;
  if (!props.show) {
    return null;
  } else {
    const { orderId } = props;

    return (
      <Modal>
        <ModalContent>
          <ModalHeader>
            <ModalTitle> Order n: {orderId} </ModalTitle>
          </ModalHeader>
          <ModalBody>
            {loading && <Loading />}
            {!loading && details && (
              <div>
                <THead>
                  <TDH flex='1'> Image </TDH>
                  <TDH flex='3'> Name </TDH>
                  <TDH> prix </TDH>
                  <TDH> Quantity </TDH>
                  <TDH> Total </TDH>
                </THead>
                {details.details.map((detail) => (
                  <OrderDetail key={detail.id} detail={detail} />
                ))}
                <TBody>
                  <TDB> total: </TDB>
                  <TDB> {details.total} Dh </TDB>
                </TBody>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            {!loading ? (
              <div>
                {!props.status ? (
                  <ValideBtn onClick={() => props.validateOrder(orderId)}>
                    Validate Order
                  </ValideBtn>
                ) : (
                  ''
                )}
                <CancleBtn onClick={() => props.onClose()}>Close</CancleBtn>
              </div>
            ) : (
              ''
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
};

const Modal = styled.div`
  position: fixed;
  padding: 2rem;
  width: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalContent = styled.div`
  max-width: 800px;
  min-width: 700px;
  max-height: 90%;
  overflow: scroll;
  background: #fff;
`;
const ModalHeader = styled.div`
  padding: 10px;
`;
const ModalTitle = styled.div`
  font-size: 1.5rem;
  text-align: left;
`;
const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
const ModalFooter = styled.div`
  padding: 10px;
`;

const CancleBtn = styled(SeeBtn)`
  background: #fa0a0a;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
`;
const ValideBtn = styled(SeeBtn)`
  background: #0fff14;
  color: #fff;
  margin-right: 2rem;
  border-radius: 10px;
  font-weight: bold;
`;

export default OrderModal;
