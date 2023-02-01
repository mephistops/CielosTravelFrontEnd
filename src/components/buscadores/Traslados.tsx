import { Button, Row, Col, FloatingLabel, Form, InputGroup } from 'react-bootstrap'

export function Traslados () {
  return (
    <form className='form-subscribe' style={{ color: '#444' }}>
      <Row>
        <Col md={5} sm={12}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text className='bg-white border-0'>
              <i className='fas fa-location-dot' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='ORIGEN'
              className='fw-bold small'
            >
              <Form.Control className='bg-white border-0' size='lg' placeholder='ORIGEN' />
            </FloatingLabel>
            <InputGroup.Text className='bg-white border-0'>
              <i className='fas fa-location-dot' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='DESTINO'
              className='fw-bold small'
            >
              <Form.Control className='bg-white border-0' size='lg' placeholder='DESTINO' />
            </FloatingLabel>

          </InputGroup>
        </Col>

        <Col md={3} sm={12}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text className='bg-white border-0'>
              <i className='fas fa-person' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='NUMERO DE PERSONAS'
              className='fw-bold small'
            >
              <Form.Control className='bg-white border-0' size='lg' placeholder='NUMERO DE PERSONAS' />
            </FloatingLabel>
          </InputGroup>
        </Col>

        <Col md={2} sm={12}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text className='bg-white border-0'>
              <i className='fas fa-calendar-days' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='FECHA'
              className='fw-bold small'
            >
              <Form.Control className='bg-white border-0' size='lg' placeholder='FECHA' />
            </FloatingLabel>
          </InputGroup>
        </Col>
        <Col md={2} sm={12}>
          <div className='d-grid'>
            <Button size='lg' className='rounded-pill' style={{ backgroundColor: '#da291c' }}>
              <i className='fas fa-search small' /> Buscar
            </Button>
          </div>
        </Col>
      </Row>
    </form>
  )
}
