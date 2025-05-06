import { ContactUsForm } from "./_components/ContactUsForm";
import { Box } from "@mui/material";

const ContactUsPage = () => {
  return (
    <Box
      component='main'
      sx={{
        paddingY: 20,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#F5F5F5",
        textAlign: "center",
        flex: "1 0 auto"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "center",
          gap: 2
        }}
        component='section'
      >
        <ContactUsForm />
      </Box>
    </Box>
  );
};

export default ContactUsPage;
