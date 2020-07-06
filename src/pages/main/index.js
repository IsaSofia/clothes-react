import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Main extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data.products });
        console.log(response.data.products);
    };

    render() {
        const { products } = this.state;

        return (
            <div className="conteudo">
                <div className="topo-header-mobile">
                    <a>
                    <img src="topo-header-img-mobile.jpg"></img>
                    </a>
                </div>
                <div className="topo-header-desk">
                    <a>
                    <img src="topo-header-img.jpg"></img>
                    </a>
                </div>

                <div className="products">
                    <div className="title-main">
                    <h1>NEW RELEASED</h1>
                    </div>
                    <div className="product-list">
                        {products.map(product => (
                            <article key={product.code_color}>
                                <img 
                                    src={product.image}
                                    alt="imagem ilustrativa do produto"
                                />
                                <h2>{product.name}</h2>
                                
                                <Link to={`/products/${product.code_color}`}>Acessar</Link>
                            
                            </article>
                        ))}
                    </div>

                </div>
            </div>
        )
    }
}