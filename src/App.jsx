import useLocalStorage from "use-local-storage";
import {
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaApple,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");


  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <>
      <section className="app" data-theme={theme}>
        <div className="login">
          <h1> Login </h1>
          <div className="container">
            <div className="top">
              <FaGoogle className="icons" />
              <FaFacebook className="icons"/>
              <FaLinkedin className="icons"/>
              <FaApple className="icons"/>
            </div>
            <p className="divider">
              <span>Or</span>
            </p>
            <form>
              <label htmlFor="">E-mail</label>
              <input type="email" name="" placeholder="email" />
              <label htmlFor="">Password</label>
              <input type="password" name="" placeholder="password" />
              <div className="remember">
                <input type="checkbox" checked="checked" />
                <p>Remember Me</p>
              </div>
              <button>Login</button>
            </form>
            <div className="bottom">
              <p>Forget your password?</p>
              <a href="/">Reset Password</a>
            </div>
            <p className="create">Create Account</p>
          </div>
          <div className="theme-toggle">
            <h2>Light Theme</h2>
            <FaToggleOn className="icon" onClick={changeTheme} />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
