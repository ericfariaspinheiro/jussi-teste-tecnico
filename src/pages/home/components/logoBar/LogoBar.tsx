import React from "react";
import "./LogoBar.css";

import brastempLogo from "../../../../assets/svgs/brastempLogo.svg";
import compraCertaLogo from "../../../../assets/svgs/compraCertaLogo.svg";
import consulLogo from "../../../../assets/svgs/consulLogo.svg";
import theBarLogo from "../../../../assets/svgs/theBarLogo.svg";

const LogoBar: React.FC = () => {
  return (
    <div className="logoBar">
      <div className="logoBarWrapper">
        <p className="logoBarText">Nossas principais lojas VTEX</p>
        <p className="logoBarText">→</p>
        <img src={brastempLogo} alt="Logo Brastemp" />
        <img src={compraCertaLogo} alt="Logo Compra Certa" />
        <img src={consulLogo} alt="Logo Consul" />
        <img src={theBarLogo} alt="Logo The Bar" />
      </div>
    </div>
  );
};

export default LogoBar;
