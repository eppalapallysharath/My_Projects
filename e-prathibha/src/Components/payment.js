import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import razopay from "../Media Files/1896px-Razorpay_logo.svg.png";
import "./index.css"

export const Payment = () => {
    const paymentState = useSelector(state => state.examR.payment)
    console.log(paymentState);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <div>
        <center className="m-4 "><h3 className="m-2" >Pay by using</h3>
        <img src={razopay} alt="razopay" width="150px" onClick={handleShow} className="payment"></img> </center>
    </div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{paymentState?.data?.prefill?.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <img src={paymentState?.data?.image} alt='qrcode' />
    </Modal.Body>
    <Modal.Footer> Price: ₹ 499
      <Button variant="primary">
        Pay Now
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}
