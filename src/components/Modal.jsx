import React, { useState } from 'react';
import '../../src/components/modal.css'

function Modal({ isOpen, onClose, title, content }) {
    
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
          <button onClick={onClose} className="close-button">
            Закрыть
          </button>
        </div>
        <div className="modal-content">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Modal;
