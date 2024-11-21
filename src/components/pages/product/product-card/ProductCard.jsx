import PropTypes from "prop-types";
import './ProductCard.css';

const ProductCard = ({product}) => {
    return (
        <div className="product-card">
            <img src={product.imgUrl} alt={product.name} className="product-image"/>
            <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <h3 className="product-price">R$ {product.price.toFixed(2)}</h3>
            </div>
            <button className="buy-button">Comprar</button>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        imgUrl: PropTypes.string,
        price: PropTypes.number
    })
}

export default ProductCard