import { Container, Row, Grid, Input } from '@nextui-org/react';
import ItemCard from '../components/item_card';

const Index = () => {
  return (
    <Container>
      <Input fullWidth={true} bordered labelPlaceholder="Buscar producto" color="default" />
      <Row justify="center" align="center">
        <ItemCard/>
      </Row>
    </Container>  
  )
}

export default Index;