import React from 'react';
import './styles.css';

const Footer = () => (
    <div className="footer">
        
        <footer className="footer-distributed">

            <div className="footer-left">
                <h3>AMARO<span>Loja Virtual</span></h3>
                <p className="footer-links">
                <a href="#">Home</a>
                ·
                <a href="#">Sobre</a>
                ·
                <a href="#">Faq</a>
                ·
                <a href="#">Blog</a>
                ·
                <a href="#">Preço</a>
                ·
                <a href="#">Contato</a>
                </p>

                <p className="footer-company-name">Mercadapp &copy; 2020</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Av. Washington Soares, 85 - Edson Queiroz</span> Fortaleza - CE, Brasil</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+55 (85) 3477-3560</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="emailsupport@amaro.com">emailsupport@amaro.com</a></p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                <span>Sobre nós:</span>
                A AMARO é uma marca digital de moda que oferece tendências e peças essenciais a preços justos. Empoderamos você para viver todas as histórias que quiser!
                </p>
                <div className="footer-icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>
                </div>
            </div>

        </footer>
    </div>
   
    
);

export default Footer;