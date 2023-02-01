import { useState } from 'react'
import { Button, Col, Row, FloatingLabel, Form, InputGroup } from 'react-bootstrap'
import { ModalSearch } from '../ModalSearch'

export function Alojamiento () {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)

  return (
    <form className='form-subscribe' style={{ color: '#444' }}>
      <ModalSearch show={show} setShow={setShow} />
      <Row>
        <Col xs={12} sm={12} md={3}>
          <InputGroup className='mb-3' size='lg'>
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
        <Col xs={12} sm={12} md={4}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text className='bg-white border-0'>
              <i className='fas fa-calendar-days' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='ENTRADA'
              className='fw-bold small'
            >
              <Form.Control className='bg-white border-0' size='lg' placeholder='ENTRADA' />
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingInput'
              label='SALIDA'
              className='fw-bold small'
            >
              <Form.Control className='bg-white border-0' size='lg' placeholder='SALIDA' />
            </FloatingLabel>
          </InputGroup>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text className='bg-white border-0'>
              <i className='fas fa-bed' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='HABITACIONES'
              className='fw-bold small'
            >
              <Form.Control type='text' onClick={handleShow} className='bg-white border-0' size='lg' min={1} placeholder='HABITACIONES' />
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
