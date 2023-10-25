import React from "react";
import ReactDOM from "react-dom";
import "../index.css"; // Add your CSS styles for the modal here

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default Modal;
