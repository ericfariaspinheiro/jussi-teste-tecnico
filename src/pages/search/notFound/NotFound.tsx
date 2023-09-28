import React from "react";
import "./NotFound.css";

interface NotFoundProps {
  searchTerm: string;
}

const NotFound: React.FC<NotFoundProps> = ({ searchTerm }) => {
  return (
    <div className="searcNotFound">
      <div className="searcNotFoundWrapper">
        <strong className="searcNotFoundTitle">
          Não encontramos nenhum resultado para "{searchTerm}”.
        </strong>

        <p className="searcNotFoundSubtitle">O que você pode fazer:</p>
        <ul className="searcNotFoundList">
          <li>Veja se os termos digitados estão corretos.</li>
          <li>Tente utilizar uma única palavra.</li>
          <li>Seja menos específico.</li>
          <li>Utilize outros sinônimos e palavaras similares.</li>
        </ul>

        <a href="/jussi-teste-tecnico" className="searcNotFoundLink">
          Ir para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
