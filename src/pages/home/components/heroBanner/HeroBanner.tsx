import React from "react";
import "./HeroBanner.css";

import refrigerator from "../../../../assets/imgs/refrigerator.png";
import standMixer from "../../../../assets/imgs/standMixer.png";
import liquorBottle from "../../../../assets/imgs/liquorBottle.png";

const HeroBanner: React.FC = () => {
  return (
    <div className="heroBanner">
      <div className="heroBannerWrapper">
        <div className="heroBannerInfo">
          <h1 className="heroBannerTitle">Criamos lojas que vendem mais.</h1>
          <p className="heroBannerSubtitle">
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </p>
          <a href="/" className="heroBannerLink">
            Veja nossas soluções
          </a>
        </div>

        <div className="heroBannerCards">
          <div className="heroBannerCard heroBannerCardRefrigerator">
            <img src={refrigerator} alt="Imagem de Geladeira" />
            <a href="/" className="heroBannerCardLink">
              Mais Detalhes
            </a>
          </div>
          <div className="heroBannerCard heroBannerCardStandMixer">
            <img src={standMixer} alt="Imagem de Batedeira" />
            <a href="/" className="heroBannerCardLink">
              Comprar em 12x
            </a>
          </div>
          <div className="heroBannerCard heroBannerCardLiquorBottle">
            <img src={liquorBottle} alt="Imagem de Garrafa Black Label" />
            <a href="/" className="heroBannerCardLink">
              Adicionar à sacola
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
