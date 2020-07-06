import React from 'react';
import './styles.css';

const Header = () => (
    <div className="nav">

        <input type="checkbox" id="nav-check"></input>
        <div className="nav-header">
            <div className="nav-title">
                <a>
                   <img src="../amaro.png"></img> 
                </a>
            </div>
        </div>
        <div className="nav-btn">
            <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
        
        <div className="nav-links">
            <a href="" target="_blank">Home</a>
            <a href="" target="_blank">Sobre</a>
            <a href="" target="_blank">Contato</a>
            <a href="" target="_blank">Blog</a>
            <a href="" target="_blank">Faq</a>
        </div>
        
    </div>
   
    
);

export default Header;

