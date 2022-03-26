import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

interface IForm {
  email: string
  password: string
}

const SignIn: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [formData, setFormData] = useState<IForm>({
    email: '',
    password: '',
  })

  const { email, password } = formData

  return <div>Sign-In</div>
}

export default SignIn
