import Tabs from "@/shared/ui/tabs"
import "./styles.scss"
import Login from "./Login"
import Register from "./Register"

const AuthPage = () => {
  const tabsData = [
    {
      title: "Login",
      content: <Login className="auth__form" />
    },
    {
      title: "Register",
      content: <Register className="auth__form" />
    }
  ]

  return (
  <main className="auth">
    <div className="auth-inner">
      <Tabs tabsData={tabsData} />
    </div>
  </main>
)
}

export default AuthPage