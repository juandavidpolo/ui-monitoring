import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';

const CustomModal = ({
  size="",
  isOpen,
  changeModalState,
  header = true,
  modalTitle = 'Modal Title',
  body = true,
  footer = true,
  submitButton = true,
  submitButtonLabel = "Save",
  submitModal,
  closeButton = true,
  closeButtonLabel = "Close",
  loading,
  children
}) => {

  return (
    <Modal
      className='custom--modal'
      contentClassName={`modal--content ${size}`}
      isOpen={isOpen}
      toggle={ev => changeModalState()}>
      {header &&
        <ModalHeader
          className="modal--header"
          toggle={ev => changeModalState()}>
            {modalTitle}
        </ModalHeader>
      }
      {body &&
        <ModalBody className="modal--body">
          {children}
        </ModalBody>
      }
      {footer &&
        <ModalFooter className="modal--footer">
          {submitButton &&
            <Button onClick={ev => submitModal()}>
              {loading && <Spinner size="sm"/>}
              {submitButtonLabel}
            </Button>
          }
          {closeButton &&
            <Button onClick={ev => changeModalState()}>
              {closeButtonLabel}
            </Button>
          }
        </ModalFooter>
      }
    </Modal>
  )
}

export default CustomModal;