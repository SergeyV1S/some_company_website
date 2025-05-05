import { Grid, Typography } from "@mui/material";

export const LandingCard = () => (
  <Grid size={{ xs: 2, sm: 4, md: 4 }}>
    <Typography fontSize={20} fontWeight={600}>
      Title
    </Typography>
    <Typography sx={{ opacity: "70%" }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam repellendus voluptatem
      possimus itaque minus necessitatibus accusantium, ea magni, ullam vel esse?
    </Typography>
  </Grid>
);
