import { Button, Row, Col, FloatingLabel, Form, InputGroup } from 'react-bootstrap'

export function Botes () {
  return (
    <form className='form-subscribe' style={{ color: '#444' }}>
      <Row>
        <Col xs={12} sm={12} md={3}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text className='bg-white border-0'>
              <i className='fas fa-sailboat' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='TIPO'
              className='fw-bold small'
            >
              <Form.Select aria-label='Default select example' style={{ color: '#444' }} className='bg-white border-0 small fw-bold' size='sm' placeholder='TIPO'>
                <option value='1'>BOTE</option>
                <option value='2'>CATAMARÁN</option>
                <option value='3'>YATE</option>
              </Form.Select>
            </FloatingLabel>
          </InputGroup>
        </Col>

        <Col xs={12} sm={12} md={2}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text className='bg-white border-0'>
              <i className='fas fa-person' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='ADULTOS'
              className='fw-bold small'
            >
              <Form.Control className='bg-white border-0' size='sm' placeholder='ADULTOS' type='number' />
            </FloatingLabel>
          </InputGroup>
        </Col>

        <Col xs={12} sm={12} md={2}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text className='bg-white border-0'>
              <i className='fas fa-children' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='NIÑOS'
              className='fw-bold small'
            >
              <Form.Control className='bg-white border-0' size='sm' placeholder='NIÑOS' type='number' />
            </FloatingLabel>
          </InputGroup>
        </Col>

        <Col xs={12} sm={12} md={3}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text className='bg-white border-0'>
              <i className='fas fa-calendar-days' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='FECHA'
              className='fw-bold small'
            >
              <Form.Control type='number' className='bg-white border-0' size='sm' min={1} placeholder='FECHA' />
            </FloatingLabel>
          </InputGroup>
        </Col>
        <Col xs={12} sm={12} md={2}>
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
