import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  id: string;
  title: string;
  // Add more fields as needed
}

const SearchResults: React.FC = () => {
  const { searchTerm } = useParams<{ searchTerm: string }>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`
        );
        setProducts(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <h1>Search Results for "{searchTerm}"</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
