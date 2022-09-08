import { Container, Row, Col } from 'react-grid-system';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Baseurl from '../url';
import Imagesurl from '../imagesurl';
import card1 from '../Components/asset/card1.jpeg'
import noData1 from '../Components/asset/noDATA1.webp'
import Cardinfo from './Cardinfo';
const Shope = () => {
    // const [modalIsOpen, setModalIsOpen] = useState(false)
    // const [index, setIndex] = useState(1)
    const [type, setType] = useState("Card");
    const [loader, setLoader] = useState(false)
    const [getCardData, setCardData] = useState([]);
    const [data, setData] = useState([])
    const gettingCardData = () => {
        setLoader(true)
        axios.get(`${Baseurl}getallitems`)
            .then(res => {
                setLoader(false)
                setCardData(res.data.items)
                console.log(res.data.items);
            })
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        gettingCardData()
    }, [])
    const filtered = getCardData.filter((item, index) => item.item_type === type)

    const returnData = () => {
        return (
            <>
               
                    {filtered.length >= 1 ?

                        <Container>
                            <Row>
                                {

                                    getCardData.length < 1 ?
                                        <h1 className='text-light'>data not find</h1>
                                        :
                                        // cards.filter((item) => item.type === type).map((item) => {
                                        filtered.map((item, index) => {
                                            return (
                                                <>

                                                    <Col lg={4} className="mt-3 mb-3 p-2">
                                                        <div className="card bg-dark" style={{ textcenter: "center", borderRadius: "10px" }} key={item.id}>
                                                            {/* <img className="card-img-top" src={`${Imagesurl}${item.item_pic}`} alt="card image cant load" style={{ borderRadius: "10px" }} /> */}
                                                            {
                                                                item.item_pic !== "default" ?
                                                                    <img className="card-img-top" src={`${Imagesurl}${item.item_pic}`} alt="card image cant load" style={{ borderRadius: "10px", height: "20em", width: "x" }} />
                                                                    :
                                                                    <img src={card1} style={{ borderRadius: "10px", height: "20em", width: "x" }} alt="Images can't Load right Now" />

                                                            }
                                                            <div className="card-body bg-dark mt-1" style={{ borderRadius: "10px" }}>
                                                                {/* <button className="btn bg-success" to={{ pathname: "/Cardinfo"}} state={{ID:item.id}} >See details</button> */}
                                                                <button className="btn bg-success w-100" onClick={() => {
                                                                    setData(item)
                                                                    OncloseModal()
                                                                }}  >See details</button>

                                                            </div>
                                                        </div>
                                                    </Col>
                                                </>
                                            )
                                        }
                                        )
                                }
                            </Row>
                        </Container> :
                        <div className='text-center mt-1 mb-3'>
                            <h3>No data {getCardData.length}</h3>
                            <img src={noData1} alt="" style={{ borderRadius: "10px", height: "17em", width: "x" }} />
                        </div>}
            
            </>
        )

    }

    const [shouldShow, setShouldShow] = useState(false)
    function OncloseModal() {
        setShouldShow((prev) => !prev)
    }



    return (
        <>
            {
                loader === true ?

                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <div className="spinner-border text-warning" role="status" style={{ height: "4em", width: "4em" }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className='mt-4 mb-4 ms-3 me-3' style={{backgroundColor:"#0F1724", borderRadius:"3px"}}>


                        <div className="text-center p-5">
                            <button onClick={() => setType("Card")} type="button" className={type === "Card" ? "btn btn-outline-info active" : "btn"}>Card</button>
                            <button onClick={() => setType("Tattoos")} type="button" className={type === "Tattoos" ? "btn btn-outline-info active" : "btn"}>Tattoos</button>
                            <button onClick={() => setType("Jewellery")} type="button" className={type === "Jewellery" ? "btn btn-outline-info active" : "btn"}>Jewellery</button>
                        </div>
                        {returnData()}
                        <Cardinfo shouldShow={shouldShow} closeModal={OncloseModal} data={data} />
                    </div>

            }
        </>
    )
}

export default Shope