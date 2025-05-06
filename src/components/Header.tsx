import { Link } from "./ui/Link";
import { paths } from "@/constants";
import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      component='header'
      sx={{
        padding: "24px",
        borderBottom: "1px solid lightgray"
      }}
    >
      <Box component='nav' display='flex' alignItems='center' justifyContent='space-between'>
        <Link href={paths.main}>
          <Typography fontSize={20}>Igniz</Typography>
        </Link>
        <Link href={paths.conactUs} customVariant='button'>
          <Typography color='white'>Связаться</Typography>
        </Link>
      </Box>
    </Box>
  );
};
