import React, { Component } from "react";
import api from '../../services/api';
import './styles.css';

export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {
        const { code_color } = this.props.match.params;
        const response = await api.get(`/`);

        const posicaoNoArray = response.data.products
        .map(function (product) {return product.code_color;})
        .indexOf(code_color);

        this.setState({ product: response.data.products[posicaoNoArray] });
        console.log(response.data.products[posicaoNoArray])

    }

    verificaDesconto(desconto){
        if(desconto !== ""){
          return "preco-desconto";
        }else{
          return "preco";
        }
    }

    render() {
        const { product } = this.state;
        const novoEstilo = this.verificaDesconto(product.discount_percentage);
        var esconder = true;

        if(novoEstilo === "preco-desconto") {
            esconder = false;
        }

        return (
            <div>

                <div className="product-info container">

                    <div>
                        <div className="direita">
                            <article>
                                <img
                                    src={product.image}
                                    alt="imagem ilustrativa do produto"
                                />
                                <h1>{product.name}</h1>
                                <p style={{ textDecoration: esconder? "none":"line-through" }} className="preco">{product.regular_price}</p>
                                <p style={{ display: esconder? "none":"block" }}className={novoEstilo}>{product.actual_price}</p>
                                <div className="product-comprar">
                                    <button> Comprar
                                        <img alt="" src="../../carrinho.svg" className="ir-carrinho"></img>
                                    </button>
                                </div>
                            </article>
                        </div>

                        <div className="centro">
                            <article>
                                <h1>{product.name}</h1>
                                <div className="tamanhos">
                                    <p className="tamanhos-title">Tamanhos Disponíveis:</p>
                                    { product.sizes && product.sizes.map(size => <p className="tamanhos-disp" key={size.sku}>{size.size}</p>) }
                                </div>

                                <p className="product-desc">	Descrição: Lorem ipsum sodales sagittis,integer, odio dapibus hac eros donec ornare. aliquet neque quisque donec laoreet placerat taciti dictum aptent donec ultrices tincidunt, lectus turpis mi sagittis in libero ut pellentesque bibendum neque pharetra, massa cubilia nisi facilisis curabitur ipsum aptent vitae dapibus aptent. </p>
                            </article>
                        </div>
                    </div>

                    <div className="esquerda">
                        <div>
                            <h1 className="product-title mobile-hide">{product.name}</h1>
                        </div>
                        <div className="wrapper-chip">
                            <p className="chip-title">Tags</p>
                            <span className="chip">Design</span>
                            <span className="chip">Fashion</span>
                            <span className="chip">Inverno</span>
                            <span className="chip">Verão</span>
                            <span className="chip">Primavera</span>
                            <span className="chip">Frio</span>
                            <span className="chip">Colorido</span>
                            <span className="chip">Básico</span>
                            <span className="chip">Fashion</span>
                            <span className="chip">Design</span>
                        </div>
                        <div className="wrapper-categoria">
                            <p className="chip-title">Categorias</p>
                            <span className="chip">Masculino</span>
                            <span className="chip">Feminino</span>
                            <span className="chip">Infantil</span>
                            <span className="chip">Acessórios</span>
                            <span className="chip">Bolsas</span>
                            <span className="chip">Sapatos</span>
                        </div>
                        <div className="wrapper-vendas">
                            <p className="chip-title">Mais Vendidos</p>
                            <span className="chip">Vestido</span>
                            <span className="chip">Calça</span>
                            <span className="chip">Saia</span>
                            <span className="chip">Relógio</span>
                            <span className="chip">Camisetas</span>
                            <span className="chip">Jaquetas</span>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}