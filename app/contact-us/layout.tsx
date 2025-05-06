import { Typography } from "@/components/ui";
import { Box, Stack } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Igniz | Contact Us",
  description: "Форма обратной связи для бизнес-запросов. Ответим в течение 2 рабочих часов.",

  keywords: [
    "IT решения",
    "сайт под ключ",
    "контакты Igniz",
    "техподдержка",
    "бизнес-запрос",
    "форма обратной связи"
  ],

  openGraph: {
    title: "Igniz | Contact Us",
    description:
      "Обсудите ваш проект с IT-специалистами Igniz. Заполните форму или напишите напрямую.",
    url: "https://some-company-website.vercel.app/contact-us",
    siteName: "Igniz Technologies",
    locale: "ru_RU",
    type: "website"
  },

  twitter: {
    title: "Igniz | Contact Us",
    description: "Форма для бизнес-запросов с гарантированным быстрым ответом",
    site: "@igniz_tech"
  },

  robots: {
    index: true,
    follow: true,
    nocache: false
  },
  alternates: {
    canonical: "https://some-company-website.vercel.app/contact-us"
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  }
};

const ContactUsLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Stack spacing={8} display='flex' flexDirection='column' minHeight='100vh'>
      {children}

      <Typography customVariant='h3' textAlign='center'>
        Igniz 2025
      </Typography>

      <Box component='footer' bgcolor='#2C2C2C' height='150px' flexShrink={0} />
    </Stack>
  );
};

export default ContactUsLayout;
