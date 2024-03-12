import './Login.sass'
import { useState } from 'react'
import { Input } from '../../utils/input/Input'

export const Login = props => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   return <div className='login'>
      <div className='login_header'>Войти</div>
      <Input type='text' value={email} setValue={setEmail} placeholder='Email' />
      <Input type='password' value={password} setValue={setPassword} placeholder='Password' />
      <button className="login_btn">Войти</button>
   </div>
}