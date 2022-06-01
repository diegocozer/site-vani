import { useParams } from "react-router-dom";
import "react-awesome-lightbox/build/style.css";
import NavBar from "../NavBar";
import "./Fotos.css";
import Modal from '../Modal/Modal'


export default (props) => {
 
 
  const { id } = useParams();
  return (
    <div className="Foto-rota">
      <NavBar />
      <div className="foto-central">
        <h1 className="nome-casal">FERNANDA E MAURICIO</h1>
        <div className="conteiner-fotos">
          <div className="foto-centro">
          <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/9QuwP64EYAA?start=1" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style={{borderRadius: '20px', border: 'none'}}></iframe>
          </div>
          <div className="comentario">
            <h2 className="texto-casal">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              animi! Velit temporibus amet optio repellat laborum sint quibusdam
              deleniti non distinctio adipisci, beatae neque iure incidunt
              mollitia quidem modi itaque?"
            </h2>
            <div className="nome-data">
              <p className="data">22/05/2021</p>
              <h3 className="nome">{id}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="galeria-de-fotos">
      <Modal/>
       
      </div>
    </div>
  );
};
