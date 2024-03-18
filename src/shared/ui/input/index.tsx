import { InputHTMLAttributes } from "react"
import "./style.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
   error?: string
}

const Input = ({className="", error="", placeholder="Введите текст...", ...attrs}:InputProps) => {
  return (
    <div className="input-wrapper">
      <input className={`input ${className} ${error && "error"}`} placeholder={placeholder} {...attrs} />
      <span className="input-error">{error}</span>
    </div>
  )
}

export default Input