import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

import logoJussiGreen from "../../assets/svgs/logoJussiGreen.svg";
import searchIcon from "../../assets/svgs/searchIcon.svg";
import shoppingCartIcon from "../../assets/svgs/shoppingCartIcon.svg";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerLeft">
          <a href="/" className="headerLogo">
            <img src={logoJussiGreen} alt="Logo Jussi" />
          </a>

          <a href="/nossas-solucoes" className="headerLink">
            Nossas soluções
          </a>

          <a href="/conheca-a-jussi" className="headerLink">
            Conheça a Jüssi
          </a>
        </div>
        <div className="headerRight">
          <div className="searchBar">
            <input
              type="text"
              placeholder="Buscar"
              className="searchBarInput"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button className="searchBarButton" onClick={handleSearch}>
              <img src={searchIcon} alt="Ícone de Busca" />
            </button>
          </div>

          <a href="/login" className="headerLink">
            Login
          </a>

          <button className="cartButton">
            <img src={shoppingCartIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
