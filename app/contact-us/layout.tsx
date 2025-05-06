import { Typography } from "@/components/ui";
import { Box, Stack } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Igniz | Contact us",
  description: "Contact us page"
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
