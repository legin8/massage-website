import Link from "next/image";

export default function Register() {
  const page = "flex flex-col text-center w-screem h-screen";
  const heading = "text-center text-6xl pb-5";
  const form = "flex flex-col w-full h-screen";
  const formSection = "flex h-3/4 content-between justify-evenly flex-col";
  const inputs = "flex justify-center gap-20";
  const linkButton = "text-2xl p-2 border-2 border-solid border-purple-call rounded-xl w-20";

  return (
    <div className={page}>
      <a href="/" className={linkButton} >Home</a>
      <h1 className={heading}>Registered Massage People Apply</h1>
      <p>Register here if you are a registered Massage Person.</p>

      <form className={form}>
        <div className={formSection}>
          <h3>Contact Details</h3>
          <label className={inputs}>First Name
            <input type="text" />
          </label>
          <label className={inputs}>Last Name
            <input type="text" />
          </label>
        </div>
        <div className={formSection}>
        <h3>Where are you</h3>
          <label className={inputs}>City
            <input type="text" />
          </label>
        </div>
        <div className={formSection}>
          <h3>Register</h3>
          <label className={inputs}>Email
            <input type="email" />
          </label>
          <label className={inputs}>Password
            <input type="password" />
          </label>
          <label className={inputs}>Confirme Password
            <input type="password" />
          </label>
        </div>
      </form>
    </div>
  )
}