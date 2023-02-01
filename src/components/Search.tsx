import { useEffect, useState } from 'react'
import { Alojamiento, Botes, Traslados, Experiencias, Islas } from './buscadores/Index'
import { Row, Col, Container } from 'react-bootstrap'

import { types } from '../services/data.service'

interface itemMenuType {
  active: boolean,
  id: number,
  icon: string,
  name: string,
  show: boolean,
  new: boolean
}

export function Search () {
  const [itemsMenu, setItemsMenu] = useState<Array<itemMenuType>>([])
  const [itemActive, setItemActive] = useState(1)

  useEffect(() => {
    types().then((res) => {
      setItemsMenu(res.data)
    })
  }, [])

  const changeItemMenu = (id: number) => {
    const activo = itemsMenu.find((element) => element.active === true)
    const newActivo = itemsMenu.find((element) => element.id === id)

    if (activo.id !== newActivo.id) {
      let filtered = itemsMenu.filter((element) => element.id !== id)
      filtered = filtered.filter((element) => element.id !== activo.id)

      newActivo.active = true
      activo.active = false

      filtered.push(newActivo)
      filtered.push(activo)

      filtered.sort(function (a: itemMenuType, b: itemMenuType) {
        if (a.id > b.id) {
          return 1
        }
        if (a.id < b.id) {
          return -1
        }

        return 0
      })

      setItemsMenu(filtered)
      setItemActive(id)
    }
  }

  const form = () => {
    switch (itemActive) {
      case 1:
        return <Alojamiento />

      case 3:
        return <Islas />

      case 4:
        return <Botes />

      case 5:
        return <Traslados />

      case 6:
        return <Experiencias />

      case 7:
        return <Traslados />

      default:
        break
    }
  }

  return (
    <header className='masthead d-sm-none d-md-block'>
      <Container className='position-relative'>
        <Row className='justify-content-center p-3'>
          <Col xl={12} sm={12} className='bg-primary p-1 rounded'>
            <div className='p-2'>
              <ul className='nav py-3'>
                {
                  itemsMenu.map((element: itemMenuType, index: number) => {
                    return (
                      <li key={index} className={`nav-item mx-1 ${element.show ? '' : 'd-none'}`}>
                        <div
                          className={`btn rounded-pill ${element.active ? 'btn-warning text-white' : 'btn-light text-primary'}`}
                          onClick={() => changeItemMenu(element.id)}
                        >
                          <i className={element.icon}>&nbsp;</i>
                          {element.name} {element.new ? <span className='badge bg-warning rounded-pill'>New</span> : ''}
                        </div>
                      </li>
                    )
                  })
                }
              </ul>

              <div className='pt-3'>
                {
                  form()
                }
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
