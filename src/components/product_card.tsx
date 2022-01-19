import { Grid, Text, Container, Row } from "@nextui-org/react";
import Product, { productExample } from "../models/product";

const ProductCard = ({ product = productExample }) => {
  return (
    <Container color={'primary'} alignContent={'flex-start'}>
      <Row gap={2} justify="center" >
        <Grid xs={1} >
          <img src={product.image}></img>
        </Grid>
        <Text h6 color="primary" >
          {product.productName}
        </Text>
        <Text h6 color="primary">
          {product.stockItems}
        </Text>
        <Text h6 color="primary">
          {product.price}
        </Text>
      </Row>
    </Container>
  );
};

export default ProductCard;
