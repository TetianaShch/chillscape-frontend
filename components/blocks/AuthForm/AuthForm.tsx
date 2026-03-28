'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { loginUser, registerUser } from '@/lib/clientApi';
import css from './AuthForm.module.css';

type AuthMode = 'login' | 'signup';

interface AuthFormProps {
  mode: AuthMode;
}

const loginSchema = Yup.object({
  email: Yup.string().email('Невірний формат пошти').required("Обов'язкове поле"),
  password: Yup.string().min(8, 'Мінімум 8 символів').required("Обов'язкове поле"),
});

const signupSchema = Yup.object({
  name: Yup.string().min(2, 'Мінімум 2 символи').required("Обов'язкове поле"),
  email: Yup.string().email('Невірний формат пошти').required("Обов'язкове поле"),
  password: Yup.string().min(8, 'Мінімум 8 символів').required("Обов'язкове поле"),
});

export default function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === 'login';
  const router = useRouter();

  const formik = useFormik({
    initialValues: isLogin ? { email: '', password: '' } : { name: '', email: '', password: '' },
    validationSchema: isLogin ? loginSchema : signupSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        if (isLogin) {
          await loginUser({ email: values.email, password: values.password });
        } else {
          await registerUser({
            name: (values as Record<string, string>).name,
            email: values.email,
            password: values.password,
          });
        }
        router.push('/profile');
      } catch (err: unknown) {
        const msg =
          (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
          'Щось пішло не так';
        iziToast.error({ title: 'Помилка', message: msg, position: 'topRight' });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className={css.card}>
      <div className={css.tabs} role="tablist" aria-label="Вкладки автентифікації">
        <Link
          href="/signup"
          className={`${css.tab} ${!isLogin ? css.tabActive : css.tabInactive}`}
          aria-selected={!isLogin}
        >
          Реєстрація
        </Link>
        <Link
          href="/login"
          className={`${css.tab} ${isLogin ? css.tabActive : css.tabInactive}`}
          aria-selected={isLogin}
        >
          Вхід
        </Link>
      </div>

      <h1 className={css.title}>{isLogin ? 'Вхід' : 'Реєстрація'}</h1>

      <form className={css.form} onSubmit={formik.handleSubmit} noValidate>
        {!isLogin && (
          <div className={css.field}>
            <label className={css.fieldLabel} htmlFor="name">
              Ім&apos;я*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={css.input}
              placeholder="Ваше ім'я"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={(formik.values as Record<string, string>).name ?? ''}
            />
            {formik.touched.name && (formik.errors as Record<string, string>).name && (
              <span className={css.error}>{(formik.errors as Record<string, string>).name}</span>
            )}
          </div>
        )}

        <div className={css.field}>
          <label className={css.fieldLabel} htmlFor="email">
            Пошта*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={css.input}
            placeholder="hello@relaxmap.ua"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span className={css.error}>{formik.errors.email}</span>
          )}
        </div>

        <div className={css.field}>
          <label className={css.fieldLabel} htmlFor="password">
            Пароль*
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className={css.input}
            placeholder="********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <span className={css.error}>{formik.errors.password}</span>
          )}
        </div>

        <button type="submit" className={css.submit} disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Зачекайте...' : isLogin ? 'Увійти' : 'Зареєструватись'}
        </button>
      </form>
    </div>
  );
}
