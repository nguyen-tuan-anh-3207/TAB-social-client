import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Checkbox } from 'antd'
import { validate } from 'constants/validate'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface Props {}

interface IFormInputs {
  email: string
  password: string
  remember: boolean
}

const loginSchema = yup.object().shape({
  email: yup.string().required().email('Invalid email'),
  password: yup
    .string()
    .required()
    .min(
      validate.MIN_LENGTH_PASSWORD,
      `Password must be least ${validate.MIN_LENGTH_PASSWORD} characters`
    )
})

const FormLogin = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = (data: IFormInputs) => console.log(data)
  return (
    <div className='login-form d-flex justify-content-center'>
      <div className='login-form__content'>
        <h3>Đăng nhập</h3>
        <p>
          Chào mừng bạn đến với TAB! <br />
          Hãy cùng đăng nhập và trải nhiệm nào
        </p>
        <Button>Đăng nhập bằng tài khoản Google</Button>
        <Button>Đăng nhập bằng tài khoản Facebook</Button>
        <p className='text-center fw-bold'>Đăng nhập bằng tài khoản</p>

        <form onSubmit={handleSubmit(onSubmit)} className='login-form__main'>
          <input
            {...register('email')}
            placeholder='Tên đăng nhập hoặc email của bạn...'
          />
          <ErrorMessage
            errors={errors}
            name='email'
            render={({ message }) => <p className='error'>{message}</p>}
          />
          <input {...register('password')} placeholder='Mật khẩu của bạn...' />
          <ErrorMessage
            errors={errors}
            name='password'
            render={({ message }) => <p className='error'>{message}</p>}
          />
          <div className='d-flex justify-content-between'>
            <Checkbox {...register('remember')} name='remember'>
              Remember me
            </Checkbox>
            <a href='#'>Forgot password</a>
          </div>
          <button type='submit' className='login-form__button'>
            Log in
          </button>
        </form>
        <p className='text-center'>
          <a href='#'>Register</a> if you don't have an account
        </p>
      </div>
    </div>
  )
}

export default FormLogin
