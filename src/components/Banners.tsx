import { Col, Row } from 'react-bootstrap'

export default function Banners () {
  return (
    <Row>
      <Col md={6} sm={12} className='p-2'>
        <img src='https://media.staticontent.com/media/pictures/5ddb4713-0173-4a19-99a9-07846cd999d8' alt='' className='w-100 h-100 rounded' />
      </Col>
      <Col md={3} sm={6} className='p-2'>
        <img src='https://media.staticontent.com/media/pictures/29394992-9a04-4a21-b9f4-fea2334cdf45' alt='' className='w-100 h-100 rounded' />
      </Col>
      <Col md={3} sm={6} className='p-2'>
        <img src='https://media.staticontent.com/media/pictures/7c1e6ce1-c1cc-4398-a7a3-1652040d599b' alt='' className='w-100 h-100 rounded' />
      </Col>
    </Row>
  )
}
