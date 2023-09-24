import React from "react";
import "./OurSolutions.css";

const OurSolutions: React.FC = () => {
  const cards = [
    {
      img: "P1",
      productName: "Nome do Produto #1",
      productDescription: "Descrição do produto #1",
      features: ["• Feature 1", "• Feature 2", "• Feature 3"],
    },
    {
      img: "P2",
      productName: "Nome do Produto #2",
      productDescription: "Descrição do produto #2",
      features: ["• Feature 1", "• Feature 2", "• Feature 3"],
    },
    {
      img: "P3",
      productName: "Nome do Produto #3",
      productDescription: "Descrição do produto #3",
      features: ["• Feature 1", "• Feature 2", "• Feature 3"],
    },
    {
      img: "P4",
      productName: "Nome do Produto #4",
      productDescription: "Descrição do produto #4",
      features: ["• Feature 1", "• Feature 2", "• Feature 3"],
    },
  ];

  return (
    <div className="ourSolutions">
      <div className="OurSolutionsWrapper">
        <strong className="OurSolutionsTitle">
          <span>//</span>Nossas soluções
        </strong>

        <div className="OurSolutionsCards">
          {cards.map((item) => {
            return (
              <div className="OurSolutionsCard">
                <div className="OurSolutionsImg">{item.img}</div>

                <div className="OurSolutionsCardInfo">
                  <p className="OurSolutionsCardName">{item.productName}</p>

                  <p className="OurSolutionsCardDescription">
                    {item.productDescription}
                  </p>

                  <ul className="OurSolutionsCardList">
                    {item.features.map((feature) => {
                      return <li>{feature}</li>;
                    })}
                  </ul>

                  <a href="/" className="OurSolutionsCardButton">
                    Ver solução
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
