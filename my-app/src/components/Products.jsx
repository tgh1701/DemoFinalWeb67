import styled from "styled-components";
import Product from "./Product";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({categories, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let url = "http://localhost:8080/api/products";
        if (categories) {
          url += `?category=${categories}`;
        }
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [categories]);

  useEffect(() => {
    categories &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, categories, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "increase") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => parseInt(a.price) - parseInt(b.price))
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => parseInt(b.price) - parseInt(a.price))
      );
    }
  }, [sort]);

  return (
    <Container>
      {categories
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
