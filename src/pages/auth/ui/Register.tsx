import Input from "@/shared/ui/input"

const Register = ({className}:{className:string}) => {
  return (
    <form className={`register ${className}`}>
      <Input placeholder="Имя" />
      <Input placeholder="Фамилия" />
      <Input placeholder="Почта" />
      <Input placeholder="Телефон" />
      <Input placeholder="Придумайте пароль" />
      <button type="submit">Зарегистрироваться</button>
    </form>
  )
}

export default Register