import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Search.css";

interface Product {
  id: string;
  permalink: string;
  thumbnail: string;
  title: string;
  original_price: number;
  price: number;
}

const SearchResults: React.FC = () => {
  const { searchTerm } = useParams<{ searchTerm: string }>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.mercadolibre.com/sites/MLB/search?q=${searchTerm}&limit=16`,
        );
        setProducts(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="searchResult">
      <div className="searchResultWrapper">
        <div className="searchResultTitle">
          <h4>Resultado para</h4>
          <h1>{searchTerm}</h1>
        </div>
        <div className="searchResultContent">
          <div className="searchResultFilters"></div>
          <div className="searchResultProducts">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.permalink}
                className="searchResultItem"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="searchResultItemImg"
                />
                <div className="searchResultItemInfo">
                  <h2 className="searchResultItemTitle">{product.title}</h2>
                  {product.original_price ? (
                    <p className="searchResultItemOriginalPrice">
                      {product.original_price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  ) : (
                    <></>
                  )}
                  <p className="searchResultItemPrice">
                    {product.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
