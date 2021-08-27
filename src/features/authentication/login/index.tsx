import React from 'react'
import FormLogin from './Form'
import LoginLogo from 'assets/image-login.png'

interface Props {}

const Login = (props: Props) => {
  return (
    <div className='row login-page'>
      <div className='col-6 login-page__logo d-flex justify-content-center align-items-center'>
        <img src={LoginLogo} alt='logo login' />
      </div>
      <div className='col-6 login-page__form d-flex justify-content-center align-items-center'>
        <FormLogin />
      </div>
    </div>
  )
}

export default Login
