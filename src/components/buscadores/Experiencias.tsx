import { Button, Row, Col, FloatingLabel, Form, InputGroup } from 'react-bootstrap'

export function Experiencias () {
  return (
    <form className='form-subscribe' style={{ color: '#444' }}>
      <Row>
        <Col md={10} sm={12}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text className='bg-white border-0'>
              <i className='fas fa-location-dot' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='DESTINO O PUNTO DE INTERÉS'
              className='fw-bold small'
            >
              <Form.Control className='bg-white border-0' size='lg' placeholder='DESTINO' />
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
