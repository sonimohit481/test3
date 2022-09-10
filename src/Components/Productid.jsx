import React from "react";
import { useParams } from "react-router-dom";

export const Productid = () => {
  const { id } = useParams();
  const [productdetail, setproductdetails] = React.useState({});
  React.useEffect(() => {
    fetch(`http://localhost:3002/products/${id}`)
      .then((res) => res.json())
      .then((res) => setproductdetails(res));
  }, [id]);
  return <div>{JSON.stringify(productdetail)}</div>;
};
