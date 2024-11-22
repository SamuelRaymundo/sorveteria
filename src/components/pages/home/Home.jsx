import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h1 className="home-title">Sorvetes Fiel</h1>
                <p className="home-subtitle">Sabores que encantam, momentos que ficam!</p>
                <div className="home-features">
                    <div className="feature">
                        <i className="feature-icon">🍦</i>
                        <h2>Sabores Artesanais</h2>
                        <p>Mais de 30 sabores feitos com ingredientes frescos e naturais</p>
                    </div>
                    <div className="feature">
                        <i className="feature-icon">🌿</i>
                        <h2>Opções Saudáveis</h2>
                        <p>Sorvetes sem lactose, baixo açúcar e veganos disponíveis</p>
                    </div>
                    <div className="feature">
                        <i className="feature-icon">🎉</i>
                        <h2>Ambiente Acolhedor</h2>
                        <p>Espaço perfeito para famílias e encontros com amigos</p>
                    </div>
                </div>
                <a href="/products">
                    <button className="cta-button">Conheça nossos sabores!</button>
                </a>
            </div>
        </div>
    )
}

export default Home

