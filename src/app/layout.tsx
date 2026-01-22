import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.descomplicamedicina.com.br"),
  title: "Triagem Médica Inteligente para Saúde Pública com IA | Descomplica",
  description:
    "Reduz filas no SUS com triagem médica inteligente baseada em Inteligência Artificial e especialistas. Mais eficiência, menos desperdício. Agende uma demonstração.",
  keywords: [
    "triagem médica",
    "IA",
    "inteligência artificial",
    "SUS",
    "saúde pública",
    "descomplica",
    "medicina",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.descomplicamedicina.com.br",
    siteName: "Descomplica Medicina",
    title: "Triagem Médica Inteligente para Saúde Pública com IA | Descomplica",
    description:
      "Reduz filas no SUS com triagem médica inteligente baseada em Inteligência Artificial e especialistas. Mais eficiência, menos desperdício. Agende uma demonstração.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Descomplica Medicina - Triagem Inteligente",
      },
    ],
  },
  robots: "index, follow",
  authors: [{ name: "Descomplica" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5SYM0LL4VK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5SYM0LL4VK');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "teufrdx67u");
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WBP4V8DG');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBP4V8DG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
