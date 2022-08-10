import React, {useEffect} from 'react'

const Modal = ({modalContent,closeModal}) => {
  useEffect(()=>{
    const modalOut = setTimeout(()=>{
      closeModal();
    }, 2000);
    return clearTimeout(modalOut);
  })
  return (
    <div>
      <h2>{modalContent}</h2>
    </div>
  )
}

export default Modal;