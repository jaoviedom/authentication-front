import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

const LoginPage = () => {

let { loginUser } = useContext(AuthContext)

  return (
    <div>
      <div className="container p-3">
      <div className="card">
        <div className="card-body">
          <h1 className="text-center mb-5">Ingreso</h1>
          <div className='col-md-6 mx-auto'>
            <form method="POST" onSubmit={loginUser}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="username" name='username' placeholder="email" maxLength="50" autoFocus required />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="password" name='password' placeholder="password" maxLength="50" autoFocus required />
                <label htmlFor="password">Password</label>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className='btn btn-primary'>Ingresar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
    </div>
  )
}

export default LoginPage