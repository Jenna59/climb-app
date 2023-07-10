'use client'

export function Registration() {
  return (
    <form name="register" method="POST" data-netlify="true" className="flex flex-col">
      <input type="hidden" name="register" value="register" /> 

      <h1>Join Us For a Good Climb!</h1>

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="password">Password</label>
      <input type="text" name="password" id="password" />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="text" name="confirmPassword" id="confirmPassword" />

      <button type="submit">Join!</button>
    </form>
  )
}