import { Col, Row, Card, ListGroup, Badge } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { typeById } from '../services/data.service'
import { Icon } from './Icon'

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

interface detailsType  {
  icon: string,
  name: string,
}

export default function CardProduct (props: product) {
  const [typeDetail, setTypeDetail] = useState<detailsType>({} as detailsType)
  const [iconos, setIconos] = useState<string[]>([])

  useEffect(() => {
    typeById(props.type).then((res) => {
      setTypeDetail(res.data)
    })

    setIconos(props.options.split(','))
  }, [])
  return (
    <Card>
      <Card.Img variant='top' src={props.photo_url} />

      <Card.Body>
        <span className='small fw-bold text-secondary' style={{ textTransform: 'uppercase' }}>
          <i className={typeDetail.icon} />&nbsp; {typeDetail.name}
        </span>
        <Card.Title style={{ color: '#444444' }}>{props.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={12}>
              <label className='small'>{props.dir_1}</label>
            </Col>
            <Col md={12}>
              <label className='small'>{props.dir_2}</label>
            </Col>
            <Col md={12}>
              <Row>
                <Col md={7} sm={7}>
                  <Badge bg='success'>{props.rank}</Badge>
                  &nbsp;
                  <Icon icon='fas fa-star' color='text-warning' />
                  <Icon icon='fas fa-star' color='text-warning' />
                  <Icon icon='fas fa-star' color='text-warning' />
                  <Icon icon='fas fa-star' color='text-warning' />
                  <Icon icon='fas fa-star' color='text-warning' />
                </Col>

                {iconos.map((icon, index) => {
                  return (
                    <Col key={index} md={1} sm={1}>
                      <Icon icon={icon} color='text-body' />
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroup.Item>
          <Row>
            <Col md={12}>
              <label className='small'>Precio por noche con impuestos desde</label>
            </Col>
            <Col md={12}>
              <label className='h6 text-decoration-line-through'>COP${props.price_in}</label>
            </Col>
            <Col md={8} sm={8}>
              <label className='h4'><small className='h6'>COP$</small>{props.price_out}</label>
            </Col>
            <Col md={4} sm={4}>
              <h4>
                <Badge bg='warning'>- {props.discount}%</Badge>
              </h4>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item className='small'>Pago con tarjeta</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}
