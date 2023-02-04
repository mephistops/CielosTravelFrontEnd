import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import { BaseLink, useRoute } from 'react-router5'

export function Header() {
  const { router } = useRoute()

  return (
    <Container className='text-dark bg-white'>
      <Row>
        <Col md={2} sm={7} xs={7} className=''>
          <img src='https://github.com/mephistops/CielosTravelFrontEnd/raw/master/src/assets/img/logo.png' width={200} />
        </Col>

        <Col md={2} sm={5} xs={5} className='offset-md-8'>
          <ul className='d-flex align-items-center rounded-pill mt-3' style={{ height: '48px', fontSize: '14px', padding: '0px 24px', boxSizing: 'border-box' }}>
            <li className='d-inline-flex'>
              <a href='#' className='text-decoration-none d-flex justify-content-between align-items-center' style={{ paddingRight: '20px' }}>
                <span className='d-inline-block overflow-hidden align-middle position-relative'>
                  <i className='fab fa-whatsapp d-flex' style={{ color: '#444' }}>&nbsp;</i>
                </span>
                <span className='' style={{ color: '#444' }}>Reservas</span>
              </a>
            </li>
            <li className='d-inline-flex'>
              <Dropdown>
                <Dropdown.Toggle variant='outline' id='dropdown-basic'>
                  <i className='bi bi-person' />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    Login
                  </Dropdown.Item>
                  <Dropdown.Item href='/action-2'>Registrarse</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
