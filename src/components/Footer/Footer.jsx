import React from "react";
import "./Footer.css"


const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer__container container">
                {/* <img src={logo} alt="" /> */}
                <h3 className="title">Liberalty Constructions</h3>

                <p className="text__muted ftr">CIN: U05190KA2005PTC036119
                </p>

                <div className="footer__social">
                <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
                    <i class="bi bi-instagram"></i>
                </a>

            {/* <a href="https://github.com/deepesh-reddy/" className="footer__social-link" target="_blank">
                <i class="bi bi-github"></i>
            </a> */}

            <a href="https://www.linkedin.com/feed/" className="footer__social-link" target="_blank">
                <i class="bi bi-linkedin"></i>
            </a>
                </div>

                <span className="footer__copy">
                &#169; Liberalty Constructions pvt ltd. All rigths reserved
                </span>

            </div>
        </footer>
    )
}

export default Footer;