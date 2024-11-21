import './Footer.css';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Horário de Funcionamento</h3>
            <p>Segunda a Sexta: 10h às 22h</p>
            <p>Sábado e Domingo: 11h às 23h</p>
          </div>
          <div className="footer-section">
            <h3>Contato</h3>
            <p>Telefone: (19) 9935-4478</p>
            <p>Email: contato@sorveteriafiel.com</p>
          </div>
          <div className="footer-section">
            <h3>Endereço</h3>
            <p>Rua Mundial, 2012</p>
            <p>Itaquera - Zona Leste</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Sorveteria Fiel. Todos os direitos reservados.</p>
        </div>
      </footer>
  );
};

export default Footer;

