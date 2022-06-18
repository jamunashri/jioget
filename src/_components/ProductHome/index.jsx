import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const ProductHome = () => {
    return (
        <>
            <div className="gutter" />
            <h4 className="LandingPage-heading">KOTTANJI COTTON SAREE</h4>
            <div className="LandingPage-container">
                <div className="Poster-container poster-1">
                    <div className="Poster-overlay">
                        <Link to="/product">
                            <button className="Overlay-button">Shop Now</button>
                        </Link>
                    </div>
                    <img
                        className="Poster"
                        src="https://res.cloudinary.com/nithi-tex/image/upload/v1655546072/actress-aathmika-silk-saree-photos-hd-kannai-nambathey-movie-launch-1776dd7_xh2lrc.jpg"
                        alt="poster"
                    />
                </div>
                <div className="Poster-container poster-2">
                    <div className="Poster-overlay">
                        <Link to="/product">
                            <button className="Overlay-button">Shop Now</button>
                        </Link>
                    </div>
                    <img
                        className="Poster"
                        src="https://res.cloudinary.com/nithi-tex/image/upload/v1655546062/412yc_VdGdL_b5jp4t.jpg"
                        alt="poster"
                    />
                </div>
                <div className="Poster-container poster-3">
                    <div className="Poster-overlay">
                        <Link to="/product">
                            <button className="Overlay-button">Shop Now</button>
                        </Link>
                    </div>
                    <img
                        className="Poster"
                        src="https://res.cloudinary.com/nithi-tex/image/upload/v1655546197/bella-pon-fruitsia-y9HsMX3-mUY-unsplash_dwzyq8.jpg"
                        alt="poster"
                    />
                </div>
            </div>
            <h4 className="LandingPage-heading">BRIDAL SAREE</h4>
            <div className="LandingPage-container">
                <div className="Poster-container poster-1">
                    <div className="Poster-overlay">
                        <Link to="/product">
                            <button className="Overlay-button">Shop Now</button>
                        </Link>
                    </div>
                    <img
                        className="Poster"
                        src="https://res.cloudinary.com/nithi-tex/image/upload/v1655546184/bulbul-ahmed-xTrp1WOq2Do-unsplash_sxpfbz.jpg"
                        alt="poster"
                    />
                </div>
                <div className="Poster-container poster-2">
                    <div className="Poster-overlay">
                        <Link to="/product">
                            <button className="Overlay-button">Shop Now</button>
                        </Link>
                    </div>
                    <img
                        className="Poster"
                        src="https://res.cloudinary.com/nithi-tex/image/upload/v1655546072/actress-aathmika-silk-saree-photos-hd-kannai-nambathey-movie-launch-1776dd7_xh2lrc.jpg"
                        alt="poster"
                    />
                </div>
                <div className="Poster-container poster-3">
                    <div className="Poster-overlay">
                        <Link to="/product">
                            <button className="Overlay-button">Shop Now</button>
                        </Link>
                    </div>
                    <img
                        className="Poster"
                        src="https://res.cloudinary.com/nithi-tex/image/upload/v1655546044/IndianSaree_2_zhzfo4.jpg"
                        alt="poster"
                    />
                </div>
            </div>
            <h4 className="LandingPage-heading">WEDDING</h4>
            <div className="LandingPage-container">
                <div className="Poster-container poster-1">
                    <div className="Poster-overlay">
                        <Link to="/product">
                            <button className="Overlay-button">Shop Now</button>
                        </Link>
                    </div>
                    <img
                        className="Poster"
                        src="https://res.cloudinary.com/nithi-tex/image/upload/v1655546045/IndianSaree_3_rjkqod.jpg"
                        alt="poster"
                    />
                </div>
                <div className="Poster-container poster-2">
                    <div className="Poster-overlay">
                        <Link to="/product">
                            <button className="Overlay-button">Shop Now</button>
                        </Link>
                    </div>
                    <img
                        className="Poster"
                        src="https://res.cloudinary.com/nithi-tex/image/upload/v1655546062/412yc_VdGdL_b5jp4t.jpg"
                        alt="poster"
                    />
                </div>
                <div className="Poster-container poster-3">
                    <div className="Poster-overlay">
                        <Link to="/product">
                            <button className="Overlay-button">Shop Now</button>
                        </Link>
                    </div>
                    <img
                        className="Poster"
                        src="https://res.cloudinary.com/nithi-tex/image/upload/v1655546044/IndianSaree_2_zhzfo4.jpg"
                        alt="poster"
                    />
                </div>
            </div>
        </>
    )
}
export default ProductHome