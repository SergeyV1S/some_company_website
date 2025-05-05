import { CustomLink } from "@/components/CustomLink";
import { LandingCard } from "@/components/LandingCard";
import { Typography } from "@/components/Typography";
import { VideoPlayer } from "@/components/Video";
import { paths } from "@/constants";
import { Box, Container, Grid, Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Stack spacing={8} paddingTop={2} paddingBottom={4}>
      <Box component='section' padding={6} bgcolor='#F5F5F5'>
        <Container maxWidth='xl'>
          <Box display='flex' alignItems='center' gap={4}>
            <Box flexBasis='50%'>
              <Box display='flex' flexDirection='column' gap={2}>
                <Typography variant='h1'>Most important title on the page</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad praesentium,
                  voluptate voluptas possimus accusantium placeat! Illo tempora consectetur
                  voluptatum expedita praesentium unde sapiente, perferendis molestias ipsum est
                  quaerat doloribus?
                </Typography>
              </Box>
            </Box>

            <Box flexBasis='50%'>
              <VideoPlayer />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth='xl'>
        <Stack component='section' spacing={8}>
          <Typography variant='h2' textAlign='center'>
            Also very important title
          </Typography>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={8}>
            {Array(6)
              .fill(1)
              .map((_, index) => (
                <LandingCard key={index} />
              ))}
          </Grid>
          <CustomLink href={paths.conactUs}>Contact us</CustomLink>
        </Stack>
      </Container>

      <Box component='section' padding={6} borderColor='black' textAlign='center' bgcolor='#F5F5F5'>
        <Container maxWidth='xl'>
          <Stack spacing={4}>
            <Typography variant='h2'>Also very important title</Typography>
            <CustomLink href={paths.conactUs}>Contact us</CustomLink>
          </Stack>
        </Container>
      </Box>

      <Typography variant='h3' textAlign='center'>
        Igniz 2024
      </Typography>
    </Stack>
  );
};

export default HomePage;
