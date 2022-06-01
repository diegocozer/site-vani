import ModalImage, { Lightbox } from "react-modal-image-responsive";
import "./Modal.css";
import foto1 from "../casamento/foto1.jpg";
import foto2 from "../casamento/foto2.jpg";
import foto3 from "../casamento/foto3.jpg";
import foto4 from "../casamento/foto4.jpg";
import foto5 from "../casamento/foto5.jpg";
import foto6 from "../casamento/foto6.jpg";
import foto7 from "../casamento/foto7.jpg";

// ...
export default function Modal() {
  return (
    <div className="conteudo-modal">
      <ModalImage
        className="modal-galeria"
        large={foto1}
        small={foto1}
        hideZoom={true}
        imageBackgroundColor={false}
      ></ModalImage>
        <ModalImage
          className="modal-galeria"
          large={foto7}
          small={foto7}
          hideDownload={true}
        ></ModalImage>
      <ModalImage
        className="modal-galeria"
        large={foto2}
        small={foto2}
      ></ModalImage>
      <ModalImage
        className="modal-galeria"
        large={foto3}
        small={foto3}
      ></ModalImage>
      <ModalImage
        className="modal-galeria"
        large={foto4}
        small={foto4}
      ></ModalImage>
      <ModalImage
        className="modal-galeria"
        large={foto5}
        small={foto5}
      ></ModalImage>
      <ModalImage
        className="modal-galeria"
        large={foto6}
        small={foto6}
      ></ModalImage>
    </div>
  );
}
