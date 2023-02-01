import { useState } from 'react'
import { loginUser } from '../services/data.service'
import Cookies from 'universal-cookie'
import { redirect } from 'react-router-dom'

export default function Login () {
  const cookie = new Cookies()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      loginUser({ user: username, pwd: password }).then((result) => {
        cookie.set('token', result.data.access_token, { path: '/' })
        cookie.set('logged', true, { path: '/' })
        redirect('/dashboard')
      }).catch((err) => {
        console.error('error: ', err.response.data.detail)
      })
    }
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-7 col-lg-5 mt-5'>
          <div className='wrap shadow-lg'>
            <div className='p-4 p-md-5'>
              <div className='is-flex'>
                <div className='w-100'>
                  <h3 className='mb-4'>Login</h3>
                </div>
              </div>

              <div>
                <div className='mt-3'>
                  <input type='text' onChange={(e) => { setUsername(e.target.value) }} className='form-control' placeholder='Username' />
                </div>

                <div className='mt-3'>
                  <input type='password' onChange={(e) => { setPassword(e.target.value) }} className='form-control' placeholder='Password' />
                </div>

                <div className='my-3'>
                  <div className='col-sm-12 d-grid'>
                    <button id='btn-login' onClick={handleLogin} className='btn btn-success'>Login  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
