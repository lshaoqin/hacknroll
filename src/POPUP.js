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
    <div style={{alignItems: 'center'}}>
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
            width: '520px',
            height: '720px',
            maxWidth: 'none',
            maxHeight: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            zIndex: '1000',
            position: 'fixed',
            margin: 'auto',
          },
          content: {
            width: 'auto', /* or a fixed width */
            height: 'auto', /* or a fixed height */
            border: '1px solid #ccc',
            borderradius: '10px' ,
            boxShadow: '0px 0px 10px #000',
            
          }
        }}
      >
         <div style={{ borderRadius: '60px'}}>
  
        <img src={require('.//phonto.jpg')} alt=''/>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}>
        <CloseButton onClick={handleCloseModal}
         />
        </div>
        </div>
      </Modal>
    </div>
  );
};


export default POPUP;