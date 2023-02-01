import httpCommon from '../http-common'

export function loginUser (data: any) {
  return httpCommon.post('/login', data)
}

export function types () {
  return httpCommon.get('/types')
}

export function typeById (id: number) {
  return httpCommon.get('/type/' + id)
}

export function getProducts () {
  return httpCommon.get('/products')
}
