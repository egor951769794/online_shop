import { useState, useEffect } from 'react';
import './Login.css';



type LoginProps = {
  
}


export default function Login(props: LoginProps) {

  const [windowState, setWindowState] = useState(0);
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const [registrationData, setRegistrationData] = useState(
    {
      username: '',
      password: '',
    }
  )

  const [authData, setAuthData] = useState(
    {
      username: '',
      password: '',
    }
  )

  useEffect(() => {
    setErrMsg('')
  }, [registrationData, authData])


  const handleReg = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({...registrationData, [event.target.name] : event.target.value})
  }

  const handleAuth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({...authData, [event.target.name] : event.target.value})
  }

  const handleRegSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

  }

  const handleAuthSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

  }

  return (
    <div className='login-container'>
      {windowState ?
      <form className='login-form' onSubmit={handleRegSubmit}>
        <input name='username' type='text' placeholder='Адрес эл.почты' value={registrationData.username} onChange={handleReg}/>
        <input name='password' type='password' placeholder='Пароль' value={registrationData.password} onChange={handleReg}/>
        <button type='submit' className='login-button'>Зарегистрироваться</button>
      </form>
      : 
      <form className='login-form' onSubmit={handleAuthSubmit}>
        <input name='username' type='text' placeholder='Адрес эл.почты' value={authData.username} onChange={handleAuth}/>
        <input name='password' type='password' placeholder='Пароль' value={authData.password} onChange={handleAuth}/>
        <button type='submit' className='login-button'>Войти</button>
      </form>}
      <div className='login-switch'>
        <div className={'login-switch-option'.concat(windowState? '' : ' selected')} onClick={() => setWindowState(0)}>Вход</div>
        <div className={'login-switch-option'.concat(windowState? ' selected' : '')} onClick={() => setWindowState(1)}>Регистрация</div>
      </div>
    </div>
  );
}
