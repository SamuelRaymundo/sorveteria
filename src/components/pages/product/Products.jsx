import ProductCard from "./product-card/ProductCard.jsx";
import './Products.css';

const Products = () => {
  const productsData = [
    {name: "Tangerina", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/tangerina_sem_lactose_1222007_1_20201006145518.png", price: 79},
    {name: "Morango", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/goiaba_sem_lactose_1222003_1_20201006145516.png", price: 69},
    {name: "Milho Verde", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/milho_verde_1212012_1_20201006230657.png", price: 79}
  ]

  return (
      <div className="products-container">
        <h1 className="products-title">Prove nossos sorvetes!</h1>
        <div className="products-grid">
          {productsData.map((product, index) => (
              <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
  )
}

export default Products