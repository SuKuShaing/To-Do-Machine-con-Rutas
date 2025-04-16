import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, onClose }) {
    const modalContentRef = useRef(null); // useRef nos permite acceder al DOM de un elemento .ModalContent y obtener sus dimensiones

    const handleBackgroundClick = (e) => {
        const dialogDimensions = modalContentRef.current.getBoundingClientRect();  // modalContentRef.current apunta al elemento .ModalContent gracias al ref={modalContentRef}
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            onClose();
        }
    };

    return ReactDOM.createPortal(
        <div className="ModalBackground" onClick={handleBackgroundClick}>
            <div className="ModalContent" ref={modalContentRef}>
                {children}
            </div>
        </div>,
        document.getElementById("modal")
    )
}

export { Modal };