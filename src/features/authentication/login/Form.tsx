import { Button } from 'antd'
import React from 'react'
import FacebookLogo from 'assets/facebook-logo.png'

interface Props {}

const FormLogin = (props: Props) => {
  return (
    <div className='login-form d-flex justify-content-center align-items-center'>
      <div className='login-form__content'>
        <h3>Đăng nhập</h3>
        <p>
          Chào mừng bạn đến với TAB! <br />
          Hãy cùng đăng nhập và trải nhiệm nào
        </p>
        <Button>Đăng nhập bằng tài khoản Google</Button>
        <Button>Đăng nhập bằng tài khoản Facebook</Button>
        <p className='text-center fw-bold'>Đăng nhập bằng tài khoản</p>
        <input type='text' placeholder='Tên đăng nhập hoặc gmail của bạn...' />
        <input type='password' placeholder='Mật khẩu  của bạn...' />
      </div>
    </div>
  )
}

export default FormLogin
