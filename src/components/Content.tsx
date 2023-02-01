import { Col, Container, Row } from 'react-bootstrap'
import { getProducts } from '../services/data.service'
import { useState, useEffect } from 'react'
import CardProduct from './CardProduct'
import Banners from './Banners'

interface product {
  rank: number,
  price_in: number,
  price_out: number,
  discount: number,
  dir_1: string,
  dir_2: string,
  type: number,
  name: string,
  photo_url: string,
  options: string
}

export default function Content () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((res: { data: any }) => {
      setProducts(res.data)
    })
  }, [])

  return (
    <Container fluid className='my-4 p-5'>
      <Banners />

      <Row className='mt-5'>
        <Col md={12} className='p-1'>
          <h1 className='text-secondary'>Destinos Populares</h1>
        </Col>
      </Row>

      <Row>
        {products.map((element: product, index: number) => {
          return (
            <Col key={index} md={3} sm={6} className='p-2'>
              <CardProduct rank={element.rank} price_in={element.price_in} price_out={element.price_out} discount={element.discount} dir_2={element.dir_2} dir_1={element.dir_1} type={element.type} name={element.name} photo_url={element.photo_url} options={element.options} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
