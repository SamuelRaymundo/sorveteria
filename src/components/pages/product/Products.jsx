import ProductCard from "./product-card/ProductCard.jsx";
import './Products.css';

const Products = () => {
  const productsData = [
    {name: "Tangerina", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/tangerina_sem_lactose_1222007_1_20201006145518.png", price: 79},
    {name: "Doce de Leite", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/doce_de_leite_1212010_1_20201121192925.jpeg", price: 69},
    {name: "Milho Verde", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/milho_verde_1212012_1_20201006230657.png", price: 79},
    {name: "Paçoca", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/pacoca_1212016_1_20201121193141.jpeg", price: 89},
    {name: "Goiaba", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/goiaba_sem_lactose_1222003_1_20201006145516.png", price: 59},
    {name: "Queijo Minas", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/queijo_minas_1322033_1_8e4e8f4e56eb022f3fd639524430942b.png", price: 89},
    {name: "Milho Verde", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/milho_verde_1212012_1_20201006230657.png", price: 79},
    {name: "Café com Brownie", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/cafe_com_brownie_1212001_1_20201123200851.jpg", price: 89},
    {name: "Caramelo Crocante", imgUrl: "https://images.tcdn.com.br/img/img_prod/815177/caramelo_crocante_1212002_1_20201006145509.png", price: 109}
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