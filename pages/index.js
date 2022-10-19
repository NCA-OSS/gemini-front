import Head from 'next/head'
import Image from 'next/image'
import LoginForm from '../component/login/loginFrom'
import {InputFieldLogin,InputFieldStandard} from '../component/shared/inputField'
import  {ButtonLogin,ButtonSubmit}  from '../component/shared/button'

export default function Home() {
  return (
    <div>
      <LoginForm />

      <table>
        <tr>
          <td><InputFieldStandard/></td>
          <td><InputFieldLogin/></td>
        </tr>
        <tr>
            <td><ButtonLogin/></td>
            <td><ButtonSubmit/></td>
        </tr>
        
      </table>
    </div>
  )
}
