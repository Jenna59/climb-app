export function UserProfile() {
  return (
    <form className="flex flex-col outline-4 outline-red-400 outline-dashed">

      <h1>User Profile</h1>

      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />

      <fieldset>
        <legend>{"I'm interested in:"}</legend>

        <label htmlFor="bouldering">Bouldering</label>
        <input type="checkbox" name="bouldering" id="bouldering" />

        <label htmlFor="toprope">Top Rope</label>
        <input type="checkbox" name="toprope" id="toprope" />

        <label htmlFor="lead">Lead/Sport</label>
        <input type="checkbox" name="lead" id="lead" />
      </fieldset>

      <fieldset>
        <legend>My bouldering experience level is:</legend>

        <label htmlFor="beginner">Easy (V0 - V2)</label>
        <input type="radio" name="beginner" id="beginner" value="beginner"/>

        <label htmlFor="intermediate">Intermediate (V3 - V6)</label>
        <input type="radio" name="intermediate" id="intermediate" value="intermediate"/>

        <label htmlFor="advanced">Advanced (V7 - V10)</label>
        <input type="radio" name="advanced" id="advanced" value="advanced"/>

        <label htmlFor="pro">Pro (V11 and above)</label>
        <input type="radio" name="pro" id="pro" value="pro"/>

      </fieldset>

      <fieldset>
        <legend>My top rope experience level is:</legend>

        <label htmlFor="easy">Easy (5.0 - 5.4)</label>
        <input type="radio" name="easy" id="easy" value="easy"/>

        <label htmlFor="intermediate">Intermediate (5.5 - 5.8)</label>
        <input type="radio" name="intermediate" id="intermediate" value="intermediate"/>

        <label htmlFor="hard">Hard (5.9 - 5.10)</label>
        <input type="radio" name="hard" id="hard" value="hard"/>

        <label htmlFor="hardtodiff">Hard to Difficult (5.11 - 5.12)</label>
        <input type="radio" name="hardtodiff" id="hardtodiff" value="hardtodiff"/>

        <label htmlFor="verydiff">Very Difficult (5.13 and above)</label>
        <input type="radio" name="verydiff" id="verydiff" value="verydiff"/>

      </fieldset>

      <fieldset>

        <legend>My lead/sport experience level is:</legend>

        <label htmlFor="easy">Easy (5.0 - 5.4)</label>
        <input type="radio" name="easy" id="easy" value="easy"/>

        <label htmlFor="intermediate">Intermediate (5.5 - 5.8)</label>
        <input type="radio" name="intermediate" id="intermediate" value="intermediate"/>

        <label htmlFor="hard">Hard (5.9 - 5.10)</label>
        <input type="radio" name="hard" id="hard" value="hard"/>

        <label htmlFor="hardtodiff">Hard to Difficult (5.11 - 5.12)</label>
        <input type="radio" name="hardtodiff" id="hardtodiff" value="hardtodiff"/>

        <label htmlFor="verydiff">Very Difficult (5.13 and above)</label>
        <input type="radio" name="verydiff" id="verydiff" value="verydiff"/>

      </fieldset>

      <label htmlFor="bio">Bio</label>
      <textarea type="text" name="bio" id="bio" />

      <label htmlFor="avatar">Choose an avatar</label>
      <input type="file" name="avatar" id="avatar" />

      <button type="submit">Save Profile</button>
    </form>
  )
}