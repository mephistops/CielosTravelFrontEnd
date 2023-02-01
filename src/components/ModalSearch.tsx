import { Button, Col, FloatingLabel, Form, InputGroup, Modal } from 'react-bootstrap'

interface modalOptions {
  show: boolean,
  setShow: (show: boolean) => void
}

export function ModalSearch (props: modalOptions) {
  const handleClose = () => props.setShow(false)

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Selecciona la acomodación</Modal.Title>
      </Modal.Header>
      <Modal.Body className='row'>
        <Col xs={12} sm={12} md={6}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text>
              <i className='fas fa-person' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='ADULTOS'
              className='fw-bold small'
            >
              <Form.Control size='sm' placeholder='ADULTOS' type='number' />
            </FloatingLabel>
          </InputGroup>
        </Col>

        <Col xs={12} sm={12} md={6}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text>
              <i className='fas fa-bed' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='CAMAS'
              className='fw-bold small'
            >
              <Form.Control size='sm' placeholder='CAMAS' type='number' />
            </FloatingLabel>
          </InputGroup>
        </Col>

        <Col xs={12} sm={12} md={6}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text>
              <i className='fas fa-children' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='NIÑOS'
              className='fw-bold small'
            >
              <Form.Control size='sm' placeholder='NIÑOS' type='number' />
            </FloatingLabel>
          </InputGroup>
        </Col>

        <Col xs={12} sm={12} md={6}>
          <InputGroup className='mb-3' size='lg'>
            <InputGroup.Text>
              <i className='fas fa-bed' style={{ color: '#444' }} />
            </InputGroup.Text>
            <FloatingLabel
              controlId='floatingInput'
              label='CAMAS'
              className='fw-bold small'
            >
              <Form.Control size='sm' placeholder='CAMAS' type='number' />
            </FloatingLabel>
          </InputGroup>
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={handleClose}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
