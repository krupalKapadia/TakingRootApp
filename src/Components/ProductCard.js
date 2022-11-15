import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ProductCard= ({product}) => {

    return (
      <div className='container'>
            <Row lg={3}>
              <Col className="d-flex">
              <Card className="flex-fill" border="dark" style={{ width: '25rem' }}> 
        <Card.Img variant="top" src={product.images[0]} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text> {product.description} </Card.Text>
          <Card.Text>{`$ ${product.price}`}</Card.Text>
         <Link to={`/singleproductpage/${product.id}`}>More Info</Link> 
      </Card.Body>
      </Card> 
         </Col>
         </Row>

      </div>
       
    );
}

export default ProductCard;