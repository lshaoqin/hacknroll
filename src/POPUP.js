import React, { useState } from 'react';
import Modal from 'react-modal';
import CloseButton from './components/CloseButton'

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
        backgroundColor: 'navy',
        color: 'white',
        padding: '10px, 10px',
        fontFamily: 'Comic Sans MS, Comic Sans',

      }} 
      >INSTRUCTIONS</button>
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
            width: '28.5%',
            color: 'brown',
            fontFamily: 'Comic Sans MS, Comic Sans',
            height: '72%',
            margin: '0 auto',
            top: '50%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid #ccc',
            borderradius: '10px' ,
            boxShadow: '0px 0px 10px #000'
          }
        }}
      >
         <div style={{ borderRadius: '60px'}}>
  
        <img src={require('.//phonto.jpg')} />
        <CloseButton onClick={handleCloseModal}
        style= {{
          position: 'fixed',
          top: '60',
          bottom: '10', right: '10' ,
          border: 'none' ,
          backgroundColor: 'transparent'
        }} />

        </div>
      </Modal>
    </div>
  );
};


export default POPUP;