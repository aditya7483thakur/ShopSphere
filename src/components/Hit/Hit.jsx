import Product from "../Product/Product";

export const Hit = ({ hit }) => {
  {
    console.log(hit.length);
  }
  return <Product item={hit} />;
};
