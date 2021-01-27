import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authApi, link } from '../../Api/Api';
import Loading from '../layouts/Loading';
import { SeeBtn } from '../pages/UserListeIem';
import { THead, TD } from '../shared/Table';
import OrderDetail from './OrderDetail';

const OrderModal = (props) => {
  const [details, setDetails] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState(props.orderId);
  const [loading, setLoading] = useState(false);
  const body = {
    id,
  };

  useEffect(() => {
    // get order detail's
    async function getOrderDetails() {
      try {
        setLoading(true);
        // const res = await authApi.get(`${link}`, { params: body });
        setLoading(false);
        setDetails([
          {
            id: 1,
            name: 'Wpplae azd, azkerlfg ',
            prix: 5222,
            thumbnail: 'tv.png',
            quantity: 5,
          },
        ]);
      } catch (error) {}
    }
    getOrderDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  <TD> Image </TD>
                  <TD> Name </TD>
                  <TD> prix </TD>
                  <TD> Quantity </TD>
                  <TD> Total </TD>
                </THead>
                {details.map((detail) => (
                  <OrderDetail key={detail.id} detail={detail} />
                ))}
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <CancleBtn onClick={() => props.onClose()}>Cancle</CancleBtn>
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
  min-width: 600px;
  max-height: 80%;
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

export default OrderModal;
