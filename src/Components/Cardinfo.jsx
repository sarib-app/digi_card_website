import React from 'react'
import card1 from '../Components/asset/card1.jpeg'
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import Imagesurl from '../imagesurl';
import Modal from 'react-modal';
import { Container, Row, Col } from 'react-grid-system';
import { hover } from '@testing-library/user-event/dist/hover';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "rgba(0,0,0,0.2)"
  },
}

const Cardinfo = ({ shouldShow, closeModal, data }) => {
  return (

    <Modal
      isOpen={shouldShow}
      className="container p-2"
      contentLabel="Example Modal"
    >

      <div className="container p-2">
        <div className="row justify-content-center ">
          <div className="col-lg-8">
            <div className="card mb-3 " style={{ borderRadius: "1em", backgroundColor: "rgb(128, 128, 128)" }}>
              <button
                onClick={() => closeModal()}
                type="button" className="btn-close btn-close-white position-absolute  top-0 end-0 text-light mt-2 me-1 " aria-label="Close" />
              <div className="row mt-2">
                <div className="col-lg-6 mt-2 ">
                  {
                    data.item_pic != "default" ?
                      <img src={`${Imagesurl}${data.item_pic}`} className="img-fluid ms-2" style={{ width: "18em", height: "18em", borderRadius: "1em" }} />
                      :
                      <img src={card1} className="img-fluid ms-2" style={{ width: "20em", height: "18em", borderRadius: "1em" }} alt="image can't load" />
                  }
                </div>
                <div className="col-lg-6 mt-2" style={{ color: "rgb(230, 255, 242)" }}>
                  <div className="card-body" style={{ fontFamily: "serif" }}>
                    <h4 className="card-title"><span className='fw-bold'>Name:</span> {data.item_name}</h4>
                    <h4 className="card-title"><span className='fw-bold'>Type:</span> {data.item_type}</h4>
                    <div className='d-flex'>
                      <h4 className="card-title "><span className='fw-bold'>Colors:</span> {data.item_color}</h4>
                    </div>
                    <h4 className="card-title"><span className='fw-bold'>Quantity:</span>({data.quantity})</h4><br />
                    <button className=' btn text-light'
                      style={{ borderColor: "#1ef7f7", borderRadius: "1em" }}> <h5><span style={{ fontSize: "1.2em", color: "orange" }}> Price: </span>{data.item_price}/-RS</h5></button>
                  </div>
                </div>
              </div>
              <Container>
                <Row>
                  <div className="row" style={{ fontFamily: "serif", fontSize: "20px", justifyContent: "center" }}>
                    <div className="col-lg-4">
                      <div className="flip3D text-light" style={{ background: "radial-gradient(#76b2fe, #b69efe)", height: "8em", width: "10em" }} >
                        <div className="text-center">
                          <div><i className="fa-solid fa-4x fa-phone text-center mt-4"></i>
                            <div>
                              <h4><a href="" className="order now text-light  fw-bold">Order On Call</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="flip3D text-light" style={{ background: "radial-gradient(#60efbc, #58d5c9)", height: "8em", width: "10em" }} >
                        <div className="text-center">
                          <div><i className="fas fa-4x fa-shipping-fast mt-4"></i>
                            <div>
                              <Link className="order-now text-light" to={{ pathname: "/Form" }} state={{ customID: data.id }}><h4>Order Now</h4></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="flip3D text-light" style={{ background: "radial-gradient(#fbc1cc, #fa99b2)", height: "8em", width: "10em" }} >
                        <div className="text-center">
                          <div><i className="fa-solid fa-4x fa-square-phone mt-4"></i>
                            <div>
                              {/* <Link className="order-now   " to={{ pathname: "/Form" }}><h5>Order Now</h5></Link> */}
                              <h4><a href="" className='order-now text-light fw-bold'>Get-Info</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </Modal>


  )
}

export default Cardinfo