import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "~/routes/components/navbar/Navbar";
import Footer from "~/routes/components/footer/Footer";
import "./i18n/config"
import {useTranslation} from "react-i18next";
import { useEffect } from "react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY)

export function Layout({ children }: { children: React.ReactNode }) {
  // قراءة اللغة قبل الـ SSR من localStorage (لو ممكن)
  const lang = typeof window !== "undefined" ? localStorage.getItem('i18nextLng') || 'en' : 'en';
  const dir = lang.startsWith('ar') ? 'rtl' : 'ltr';

  return (
      <html lang={lang} dir={dir}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 1️⃣ السكربت لمنع الوميض */}
        <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
            }}
        />
        <Meta />
        <Links />
      </head>
      <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      </body>
      </html>
  );
}

export default function App() {
  // 📍 تحديد الصفحة الحالية
  const location = useLocation();
  const { i18n } = useTranslation(); // 👈 استخدام i18n

  // 2️⃣ مراقبة تغيير اللغة وتحديث الـ DOM
  useEffect(() => {
    const currentLang = i18n.language || 'en';
    const dir = currentLang.startsWith('ar') ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  // ⛔ الصفحات اللي مش عايز فيها Navbar و Footer
  const hideLayoutRoutes = ["/signIn"];

  const hideLayout = hideLayoutRoutes.some(route =>
      location.pathname.startsWith(route)
  );

  return (
      <>
        {/*<AuthProvider>*/}
          <div className="app">
            {!hideLayout && <Navbar />}
            <Outlet />
            {!hideLayout && <Footer />}
          </div>
        {/*</AuthProvider>*/}
      </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
