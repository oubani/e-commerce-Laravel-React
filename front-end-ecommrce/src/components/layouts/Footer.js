import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footer}>
      Ecommerce store created by
      <a
        href='http://'
        style={{ color: '#fff', fontSize: '1.2rem' }}
        target='_blanck'
      >
        {' '}
        Ayoub Oubani
      </a>
    </div>
  );
};
const styles = {
  footer: {
    color: '#fff',
    fontSize: '1.1rem',
    textAlign: 'center',
    padding: '2rem',
    marginTop: '1rem',
    display: 'block',
    backgroundColor: '#1e3d59',
    opacity: '0.99',
  },
};

export default Footer;
