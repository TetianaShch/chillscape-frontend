import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={css.page}>
      <div className={css.formWrapper}>
        <h1 className={css.title}>Login</h1>

        <form className={css.form}>
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
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
