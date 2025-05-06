import { Grid, Typography } from "@mui/material";

interface ILandingCardProps {
  title: string;
  description: string;
}

export const LandingCard = ({ description, title }: ILandingCardProps) => (
  <Grid size={{ xs: 2, sm: 4, md: 4 }}>
    <Typography fontSize={20} fontWeight={600}>
      {title}
    </Typography>
    <Typography sx={{ opacity: "70%" }}>{description}</Typography>
  </Grid>
);
