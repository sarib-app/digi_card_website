import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <div className="main-container crds-color">
                <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="card-home card-1" style={{ margin: "20px", padding: "20px", width: "500px" }}>
                        <div className="card__icon text-center mt-2"><i class="fa-solid fa-4x fa-shop"></i>
                            <div className="mt-2">
                                <h5>See Shop</h5>
                            </div></div>
                        <p className="card__exit"><i className="fas fa-" /></p>
                        {/* <h2 className="card__title"></h2> */}
                        <h5 className="card-text  text-center p-5" style={{ cursor: "pointer", color: "white" }}></h5>
                        <p className="card__apply">
                            <Link className="card__link " to='/Shope'>Apply Now <i className="fas fa-arrow-right" /></Link>
                        </p>
                    </div>
                    <div className="card-home card-2" style={{ margin: "20px", padding: "20px", width: "500px" }}>
                        <div className="card__icon text-center mt-2"><i class="fa-solid fa-4x fa-phone-flip"></i>
                            <div className="mt-2">
                                <h5>Phone</h5>
                            </div></div>
                        <p className="card__exit"><i className="fas fa-" /></p>
                        {/* <h2 className="card__title"></h2> */}
                        <h5 className="card-text  text-center p-5" style={{ cursor: "pointer", color: "white" }}></h5>
                        <p className="card__apply" >
                            {/* <a className="card__link" href="tel:+923034450790">Apply Now <i className="fas fa-arrow-right" /></a> */}
                            <a className="card__link" href="https://web.whatsapp.com/send?phone=+923494927404" target={"_blank"}> Apply Now <i className="fas fa-arrow-right" /></a>
                        </p>
                    </div>
                    <div className="card-home card-3" style={{ margin: "20px", padding: "20px", width: "500px" }}>
                        <div className="card__icon text-center mt-2"><i class="fa-solid fa-4x fa-globe"></i>
                            <div className="mt-2">
                                <h5>How It Work</h5>
                            </div></div>
                        
                        <p className="card__exit"><i className="" /></p>
                        <h5 className="card-text  text-center p-5" style={{ cursor: "pointer", color: "white" }}></h5>
                        <p className="card__apply">
                            {/* <a className="card__link" href="#" >Apply Now<i className="fas fa-arrow-right" /> */}                            
                            {/* </a> */}
                            <Link className="card__link" to={'WorkingVideo'} >Apply Now <i className="fas fa-arrow-right"/></Link>
                        </p>
                    </div>
                    <div className="card-home card-4" style={{ margin: "20px", padding: "20px", width: "500px" }}>
                        <div className="card__icon text-center mt-2"><i class="fa-solid fa-4x fa-user"></i>
                            <div className="mt-2">
                                <h5>Profile</h5>
                            </div></div>
                        <p className="card__exit"><i className="" /></p>
                        <h5 className="card-text  text-center p-5" style={{ cursor: "pointer", color: "white" }}></h5>
                        <p className="card__apply">
                            <Link className="card__link" to='/Profile'> Apply Now <i className="fas fa-arrow-right" /></Link>
                        </p>
                    </div>
                    {/* <div className="card card-5">
                        <div className="card__icon"><i className="fas fa-bolt" /></div>
                        <p className="card__exit"><i className="fas fa-times" /></p>
                        <h2 className="card__title">Ut aliquip ex ea commodo consequat. Duis aute irure dolor.</h2>
                        <p className="card__apply">
                            <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right" /></a>
                        </p>
                    </div>
                    <div className="card card-1">
                        <div className="card__icon"><i className="fas fa-bolt" /></div>
                        <p className="card__exit"><i className="fas fa-times" /></p>
                        <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p className="card__apply">
                            <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right" /></a>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>

    )
}

export default Home