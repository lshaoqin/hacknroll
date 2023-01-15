import React, { useState } from 'react';
import Modal from 'react-modal';

const POPUP = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}
      style= {{
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px, 20px'

      }} 
      >Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            zIndex: '1000',
            position: 'fixed'
          },
          content: {
            width: '27%',
            color: 'brown',
            fontFamily: 'Comic Sans MS, Comic Sans',
            height: '81%',
            margin: '0 auto',
            top: '50%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid #ccc',
            padding: '10px',
            boxShadow: '0px 0px 10px #000'
          }
        }}
      >
  
        <img src={require('.//phonto.jpg')} />
        <button onClick={handleCloseModal}
        style= {{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px, 20px',
          fontFamily: 'Comic Sans MS, Comic Sans'
  
        }} 
        >CLOSE ME</button>
      </Modal>
    </div>
  );
};


export default POPUP;