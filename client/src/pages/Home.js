import { useContext } from "react";
import { Box } from "@material-ui/core";
import { useQuery } from "react-apollo";
import { Card } from "../components";
import { GET_PRODUCTS } from "../graphql";
import UserContext from "../context/UserContext";

export default function Home({ className, style }) {
  const { data, loading } = useQuery(GET_PRODUCTS);
  const { isAuth } = useContext(UserContext);

  return (
    <div className={className} style={style}>
      {!loading && data && (
        <Box
          component="section"
          display="flex"
          padding="20px 24px"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {data.products.map(({ id, name, description, price, img }) => {
            return (
              <Card
                key={id}
                name={name}
                price={isAuth ? price : null}
                description={description}
                img={img}
              />
            );
          })}
        </Box>
      )}
    </div>
  );
}
