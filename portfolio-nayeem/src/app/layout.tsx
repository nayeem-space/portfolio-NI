import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import { profile } from "@/content/portfolio";
import "./globals.css";

const dmSans = localFont({
  src: "../../public/fonts/dm-sans.woff2",
  variable: "--font-dm-sans",
  weight: "400 800",
  display: "swap",
});

const description =
  "Islam Nayeemul’s portfolio in software development and machine learning.";

export const metadata: Metadata = {
  title: { default: profile.name, template: `%s | ${profile.name}` },
  description,
  openGraph: {
    title: profile.name,
    description,
    type: "website",
    siteName: profile.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${dmSans.variable} motion-safe:scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { if (localStorage.getItem("portfolio-theme") === "dark") document.documentElement.dataset.theme = "dark"; } catch {}`,
          }}
        />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
