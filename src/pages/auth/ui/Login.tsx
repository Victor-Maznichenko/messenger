import Input from "@/shared/ui/input"

const Login = ({className}:{className:string}) => {
  return (
    <form className={`login ${className}`}>
      <Input placeholder="Почта или телефон" />
      <Input placeholder="Пароль" />
      <button type="submit">Ввойти</button>
    </form>
  )
}

export default Login