'use client'

export function Login() {
  return (
    <form className="flex flex-col">

      <h1>Login to Find Some New Climbing Friends!</h1>

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="password">Password</label>
      <input type="text" name="password" id="password" />

      <button type="submit">Login!</button>
    </form>
  )
}