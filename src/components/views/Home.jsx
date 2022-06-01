import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "./Footer";
import "./Home.css";

export default () => {

  function chamarWpp(){
  window.open('http://wa.me/5547984274224?text=Olá, gostaria de mais informações sobre a fazenda!')
  }
  function abrirInstagram(){
    window.open('https://www.instagram.com/fazendabenficasc/')
  }
  function abrirFacebook(){
    window.open('https://www.facebook.com/Fazenda-Benfica-116185271075234')
  }


  return (
    <div className="conteudo-home">
      <NavBar />
      <main className="fotos-menu">
        <div className="quadro">
          <div className="bem-vindo"></div>
        </div>
      </main>
      <section className="section-fotos">
        <div className="texto-secao" id="texto-secao">
          <h2 className="sobre">Sobre nós</h2>
        </div>
        <div className="informacoes">
          <div className="casamento casamento1">
            <img
              src="../../../icons/diamante.png"
              alt=""
              className="icon-casamento"
            />
            <h4 className="texto-casamento">Casamentos</h4>
            <p className="info-casamento">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              tenetur impedit necessitatibus cum soluta, quaerat praesentium
              facilis quas molestiae, distinctio autem atque eum obcaecati
              porro. Qui deserunt commodi pariatur nesciunt.
            </p>
          </div>
          <div className="casamento casamento2">
            <img
              src="../../../icons/evento.png"
              alt=""
              className="icon-casamento"
            />
            <h4 className="texto-eventos">Eventos</h4>
            <p className="info-casamento">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              tenetur impedit necessitatibus cum soluta, quaerat praesentium
              facilis quas molestiae, distinctio autem atque eum obcaecati
              porro. Qui deserunt commodi pariatur nesciunt.
            </p>
          </div>
          <div className="casamento casamento3">
            <img
              src="../../../icons/cavalo.png"
              alt=""
              className="icon-casamento"
            />
            <h4 className="texto-casamento">Cavalos</h4>
            <p className="info-casamento">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              tenetur impedit necessitatibus cum soluta, quaerat praesentium
              facilis quas molestiae, distinctio autem atque eum obcaecati
              porro. Qui deserunt commodi pariatur nesciunt.
            </p>
          </div>
        </div>
      </section>

      <div className="fotos-eventos-menu">
        <div className="responsivo">

        <Link to="/fotos/casamento/pedro-roberta">
          <div className="fotos-eventos">
            <div className="info-noivos">
              <h4 className="noivos">Nome dos noivos</h4>
              <p className="data-casamento">26/05/2022</p>
            </div>
          </div>
        </Link>
        </div>
        <div className="responsivo">

        <Link to="/fotos/casamento/pedro-roberta">
          <div className="fotos-eventos">
            <div className="info-noivos">
              <h4 className="noivos">Nome dos noivos</h4>
              <p className="data-casamento">26/05/2022</p>
            </div>
          </div>
        </Link>
        </div>
        <div className="responsivo">

        <Link to="/fotos/casamento/pedro-roberta">
          <div className="fotos-eventos">
            <div className="info-noivos">
              <h4 className="noivos">Nome dos noivos</h4>
              <p className="data-casamento">26/05/2022</p>
            </div>
          </div>
        </Link>
        </div>
        <div className="responsivo">

        <Link to="/fotos/casamento/pedro-roberta">
          <div className="fotos-eventos">
            <div className="info-noivos">
              <h4 className="noivos">Nome dos noivos</h4>
              <p className="data-casamento">26/05/2022</p>
            </div>
          </div>
        </Link>
        </div>
        <div className="responsivo">

        <Link to="/fotos/casamento/pedro-roberta">
          <div className="fotos-eventos">
            <div className="info-noivos">
              <h4 className="noivos">Nome dos noivos</h4>
              <p className="data-casamento">26/05/2022</p>
            </div>
          </div>
        </Link>
        </div>
        <div className="responsivo">

        <Link to="/fotos/casamento/pedro-roberta">
          <div className="fotos-eventos">
            <div className="info-noivos">
              <h4 className="noivos">Nome dos noivos</h4>
              <p className="data-casamento">26/05/2022</p>
            </div>
          </div>
        </Link>
        </div>
      
       
      </div>
      <main className="contato-info">
        <div className="contato" id="contato">
          <h2 className="contato-texto">Contato</h2>
          <h3 className="fale-conosco-texto-footer">Fale conosco</h3>
          <p className="telefone">
            Telefone: <strong>(47) 98828-2047</strong>
          </p>
          <p className="email">
            E-mail: <strong>email@email.com.br</strong>
          </p>
          <button className="btn-wpp" onClick={chamarWpp}>Fale conosco pelo whatsapp</button>

          <div className="redes-sociais">
            <img
            onClick={chamarWpp}
              className="facebook"
              src="../../../icons/whatsapp.png"
              alt=""
            />
            <img
            onClick={abrirInstagram}
              className="instagram"
              src="../../../icons/instagram.png"
              alt=""
            />
            <img
            onClick={abrirFacebook}
              className="facebook"
              src="../../../icons/facebook.png"
              alt=""
            />
          </div>
        </div>
        <div className="endereco">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1814834.4973751318!2d-50.524065194516155!3d-27.32574744455733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-26.9259079!2d-49.073169!4m5!1s0x9520736a14d77869%3A0xa13e15431da62d79!2sfazenda%20benfica!3m2!1d-27.7366654!2d-49.665257499999996!5e0!3m2!1spt-BR!2sbr!4v1653653875585!5m2!1spt-BR!2sbr"
            style={{
              height: "300px",
              width: "100%",
              borderRadius: "20px",
              margin: "10px",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2 className="endereco-texto">
            Endereço: <strong>Bom retiro - SC - 88680-000</strong>{" "}
          </h2>
        </div>
      </main>
     <Footer/>
    </div>
  );
};
