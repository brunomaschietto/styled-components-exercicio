import { EstilizandoCard, ImagemAlterada } from "./CardEstilizado";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <EstilizandoCard>
      <ImagemAlterada src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
      </EstilizandoCard>
    </div>
  );
}

export default CardVideo;
