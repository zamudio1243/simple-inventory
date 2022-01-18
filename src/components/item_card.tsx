import { Grid, Card, Text, Row } from "@nextui-org/react";


const ItemCard = () => {
    const list = [
        {
          title: 'Pistones',
          img: 'img-1.png',
          price: '$5.50'
        },
        {
          title: 'Aceite de transmisión',
          img: 'img-2.png',
          price: '$3.00'
        },
        {
          title: 'Balata',
          img: 'img-3.png',
          price: '$10.00'
        },
        {
          title: 'Solenoide',
          img: 'img-4.png',
          price: '$5.30'
        },
        {
          title: 'Sensor de temperatura',
          img: 'img-1.png',
          price: '$15.70'
        },
        {
          title: 'Liquido de frenos',
          img: 'img-2.png',
          price: '$8.00'
        },
        
    ];
    return (
        <Grid.Container gap={2} justify="flex-start">
          {list.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card hoverable clickable >
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    objectFit="cover"
                    src={item.img}
                    width='100%'
                    height={140}
                    alt={item.title}
                  />
                </Card.Body>
                <Card.Footer >
                  <Row justify="space-between">
                    <Text b>
                      {item.title}
                    </Text>
                    <Text  style={{ opacity: 0.6 }}>
                      {item.price}
                    </Text>
                  </Row>        
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
        );
}

export default ItemCard;