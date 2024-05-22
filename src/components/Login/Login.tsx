import { useState, useEffect } from 'react';
import './Login.css';

import axios from 'src/utils/axios'
const reg_url = '/users'
const auth_url = 'users/login'


type LoginProps = {
  
}


export default function Login(props: LoginProps) {

  const [windowState, setWindowState] = useState(0);
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const [registrationData, setRegistrationData] = useState(
    {
      login: '',
      password: '',
    }
  )

  const [authData, setAuthData] = useState(
    {
      login: '',
      password: '',
    }
  )

  const [regDisabled, setRegDisabled] = useState(true)
  const [authDisabled, setAuthDisabled] = useState(true)

  useEffect(() => {
    setErrMsg('')
  }, [registrationData, authData])

  useEffect(() => {
    setRegistrationData({login: '', password: ''})
    setAuthData({login: '', password: ''})
    setAuthDisabled(true)
    setRegDisabled(true)
  }, [windowState])

  const handleRegLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({...registrationData, login : event.target.value})
    setRegDisabled(event.target.value.length < 5 || registrationData.password.length < 5)
  }

  const handleRegPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({...registrationData, password : event.target.value})
    setRegDisabled(event.target.value.length < 5 || registrationData.login.length < 5)
  }

  const handleAuthLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({...authData, login : event.target.value})
    setAuthDisabled(event.target.value.length < 5 || authData.password.length < 5)
  }

  const handleAuthPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({...authData, password : event.target.value})
    setAuthDisabled(event.target.value.length < 5 || authData.login.length < 5)
  }

  const handleRegSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await axios.post(reg_url,
      registrationData,
      {
        headers: { 'Content-Type' : 'application/json' },
        withCredentials: true
      }
    ).then((response) => {
      setRegistrationData({login: '', password: ''})
      setErrMsg('Пользователь успешно создан')
    })
    .catch((error) => {console.log(error)})
  }

  const handleAuthSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(authData)

    await axios.post(auth_url,
      authData,
      {
        headers: { 'Content-Type' : 'application/json' },
        withCredentials: true
      }
    ).then((response) => {setSuccess(response.data)})
    .catch((error) => setErrMsg(error.response.data))
  }

  return (
    <div className='login-container'>
      {windowState ?
      <form className='login-form' onSubmit={handleRegSubmit}>
        <input name='login' type='text' placeholder='Адрес эл.почты' value={registrationData.login} onChange={handleRegLogin}/>
        <input name='password' type='password' placeholder='Пароль' value={registrationData.password} onChange={handleRegPassword}/>
        <button disabled={regDisabled} type='submit' className={regDisabled? 'login-button disabled' : 'login-button'}>Зарегистрироваться</button>
      </form>
      : 
      <form className='login-form' onSubmit={handleAuthSubmit}>
        <input name='login' type='text' placeholder='Логин' value={authData.login} onChange={handleAuthLogin}/>
        <input name='password' type='password' placeholder='Пароль' value={authData.password} onChange={handleAuthPassword}/>
        <button disabled={authDisabled} type='submit' className={authDisabled? 'login-button disabled' : 'login-button'}>Войти</button>
      </form>}
      <div className='login-switch'>
        <div>{errMsg}</div>
        <div className={'login-switch-option'.concat(windowState? '' : ' selected')} onClick={() => setWindowState(0)}>Вход</div>
        <div className={'login-switch-option'.concat(windowState? ' selected' : '')} onClick={() => setWindowState(1)}>Регистрация</div>
      </div>
    </div>
  );
}
