import React from 'react'
import { FaHeart, FaShareAlt, FaEnvelope } from 'react-icons/fa';
const Card = ({ data }) => {
    // console.log(data);
    return (
        <>

            <div className="main-Conatiner">
                {
                    data.map((items) => {
                        return (

                            <>
                                <div className="sub-container">
                                    <div className="cards">
                                        <div className="left-container">
                                            <div className="movies-heading">
                                                <div className="image">
                                                    <img src={items.img} alt="profile" />

                                                </div>
                                                <div className="hero">
                                                    <h2>{items.Name}</h2>

                                                    <h3>{items.Published}</h3>

                                                    <button>{items.duraction}</button>
                                                </div>

                                            </div>

                                            <div className="movies-about">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente aliquid ducimus expedita fugit ea, porro illo cumque animi adipisci repudiandae officiis iste obcaecati nobis culpa voluptatem similique totam dolore error!
                                            </div>
                                            <div className="icon">
                                                <li><FaHeart /></li>
                                                <li><FaShareAlt /></li>
                                                <li><FaEnvelope /></li>
                                            </div>

                                        </div>
                                        <div className="right-container">
                                            <img src={items.img} alt="" />
                                        </div>




                                    </div>

                                </div>

                            </>
                        )

                    })
                }

            </div>

        </>
    )
}

export default Card