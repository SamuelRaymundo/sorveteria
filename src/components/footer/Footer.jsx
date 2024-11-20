import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <section id="contact">
        <hr />
        <h2>Contato</h2>
        <br />
        <img 
          src="https://img.freepik.com/fotos-gratis/casquinha-de-sorvete-doce-com-ai-generativa-de-morango_188544-12340.jpg?semt=ais_hybrid" 
          alt="Casquinha de sorvete de morango" 
        />
        <div>
          <div id="contact-info">
            <p>
              <span className="fa fa-phone"></span> 954545455
            </p>
            <p>
              <span className="fa fa-address-book"></span> Av. dos Salles 4878
            </p>
            <p>
              <span className="fa fa-envelope"></span> kiko@chaves.com
            </p>
          </div>
          <div id="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.348027593642!2d-47.212041224606516!3d-23.084352344241278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4a4ea4f1a73%3A0x4845cecfce510db2!2sE.E.%20Prof%C2%AA%20Helena%20de%20Campos%20Camargo!5e0!3m2!1spt-BR!2sbr!4v1712022433792!5m2!1spt-BR!2sbr"
              width="480"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps location of Av. dos Salles 4878"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
