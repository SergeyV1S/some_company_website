import "./globals.css";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import type { Metadata } from "next";
import { Lora } from "next/font/google";

const loraFont = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora"
});

export const metadata: Metadata = {
  title: "Igniz | Digital transformation of business",
  description:
    "Разрабатываем корпоративное ПО для автоматизации, AI-аналитики и интеграции систем. 12+ лет опыта, 150+ успешных проектов.",

  keywords: [
    "IT решения",
    "разработка ПО",
    "искусственный интеллект",
    "ERP системы",
    "бизнес-аналитика",
    "корпоративное ПО"
  ],

  openGraph: {
    title: "Igniz | Digital transformation of business",
    description:
      "Внедряем AI, блокчейн и облачные решения. Повышаем эффективность предприятий через цифровизацию процессов.",
    url: "https://some-company-website.vercel.app",
    siteName: "Igniz Technologies",
    locale: "ru_RU",
    type: "website"
  },

  twitter: {
    title: "Igniz | Digital transformation of business",
    description: "От концепции до внедрения: полный цикл разработки IT-решений",
    site: "@igniz_tech",
    creator: "@igniz_ceo"
  },

  alternates: {
    canonical: "https://some-company-website.vercel.app"
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  },
  themeColor: "#2C2C2C",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large"
    }
  },
  authors: [
    {
      name: "Igniz Team"
    }
  ],
  category: "technology"
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ru' className={loraFont.className}>
      <body style={{ height: "100%" }}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
