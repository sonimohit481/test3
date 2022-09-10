import React from "react";
import { Grid, GridItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Home = () => {
  const [data, Setdata] = React.useState([]);
  React.useEffect(() => {
    fetchandupdate();
  }, []);
  const fetchandupdate = () => {
    fetch(`http://localhost:3002/products`)
      .then((response) => response.json())
      .then((res) => Setdata(res));
  };
  const hanedledelete = (id) => {
    fetch(`http://localhost:3002/products/${id}`, {
      method: "DELETE",
    }).then(() => fetchandupdate());
  };
  return (
    <div>
      <Link to={"/product/add"}>ADD product</Link>
      <hr />
      <Grid
        templateColumns={"repeat(3, 1fr)"}
        templateRows={"repeat(10, fit)"}
        gap={6}
      >
        {data.map((ele) => {
          return (
            <GridItem
              key={ele.id}
              w="100%"
              h="auto"
              border={"2px solid Black"}
              alignContent={"center"}
            >
              <p>{ele.id}</p>
              <p>{ele.brand}</p>
              <p>{ele.title}</p>
              <img src={ele.image} alt={ele.title} />
              <p>{ele.category}</p>
              <p>{ele.price}</p>
              <Button colorScheme="teal" variant="outline" mx={"10px"}>
                Edit
              </Button>
              <Button colorScheme="teal" variant="outline" mx={"10px"}>
                <Link to={`product/${ele.id}`}>View</Link>
              </Button>
              <Button
                colorScheme="teal"
                variant="outline"
                mx={"10px"}
                onClick={() => hanedledelete(ele.id)}
              >
                Delete
              </Button>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};
