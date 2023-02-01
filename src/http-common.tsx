import axios from 'axios'

export default axios.create({
  baseURL: 'https://gfytzo.deta.dev',
  headers: {
    'Content-type': 'application/json'
  }
})
