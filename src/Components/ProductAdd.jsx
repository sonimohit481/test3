import React from "react";

export const ProductAdd = () => {
  let initial = {
    brand: "",
    title: "",
    image: "",
    category: "",
    price: "",
  };
  const [data, Setdata] = React.useState(initial);
  const { brand, title, image, category, price } = data;
  const hangle = (e) => {
    const { name, value } = e.target;
    Setdata((pre) => ({ ...pre, [name]: value }));
  };
  const handleadd = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3002/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    Setdata(initial);
  };
  return (
    <div>
      <form onSubmit={handleadd}>
        brand :
        <input
          type="text"
          onChange={hangle}
          placeholder={"brand"}
          name="brand"
          value={brand}
        />
        <br />
        title :
        <input
          type="text"
          onChange={hangle}
          placeholder={"title"}
          name="title"
          value={title}
        />
        <br />
        image src :
        <input
          type="text"
          onChange={hangle}
          placeholder={"image"}
          name="image"
          value={image}
        />
        <br />
        product category :
        <input
          type="text"
          onChange={hangle}
          placeholder={"category"}
          name="category"
          value={category}
        />
        <br />
        Price:
        <input
          type="number"
          onChange={hangle}
          placeholder={"price"}
          name="price"
          value={price}
          min={400}
          max={10000}
        />
        <br />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};
