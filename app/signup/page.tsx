import css from './SignUpPage.module.css';

export default function SignUpPage() {
  return (
    <div className={css.page}>
      <div className={css.formWrapper}>
        <h1 className={css.title}>Sign Up</h1>

        <form className={css.form}>
          <div className={css.field}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <input className={css.input} id="name" type="text" name="name" />
          </div>

          <div className={css.field}>
            <label className={css.label} htmlFor="email">
              Email
            </label>
            <input className={css.input} id="email" type="email" name="email" />
          </div>

          <div className={css.field}>
            <label className={css.label} htmlFor="password">
              Password
            </label>
            <input className={css.input} id="password" type="password" name="password" />
          </div>

          <button className={css.button} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
