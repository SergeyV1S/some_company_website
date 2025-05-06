import { LandingCard } from "@/components/LandingCard";
import { Link, Typography, VideoPlayer } from "@/components/ui";
import { landingCards, paths } from "@/constants";
import { Box, Container, Grid, Stack } from "@mui/material";

const HomePage = () => (
  <Stack spacing={8} paddingTop={2} paddingBottom={4}>
    <Box component='section' padding={6} bgcolor='#F5F5F5'>
      <Container maxWidth='xl'>
        <Box
          display='flex'
          alignItems='center'
          gap={4}
          sx={{
            textAlign: { xs: "center", md: "start" },
            flexDirection: { xs: "column", md: "row" },
            "& > *": {
              flexBasis: { xs: "100%", md: "50%" }
            }
          }}
        >
          <Box>
            <Box display='flex' flexDirection='column' gap={2}>
              <Typography customVariant='h1'>
                Igniz — цифровые решения для трансформации бизнеса
              </Typography>
              <Typography>
                Разрабатываем индивидуальные программные продукты для автоматизации, анализа данных
                и цифровой трансформации. Технологии, которые работают на ваш результат.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              mt: { xs: 3, md: 0 },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              "& > div": {
                width: { xs: "100%", sm: "90%" }
              }
            }}
          >
            <VideoPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' />
          </Box>
        </Box>
      </Container>
    </Box>

    <Container maxWidth='xl'>
      <Stack component='section' spacing={8} display='flex' alignItems='center'>
        <Typography customVariant='h2' textAlign='center'>
          Наши ключевые решения
        </Typography>
        <Grid
          container
          columns={{ xs: 2, sm: 8, md: 12 }}
          sx={{ textAlign: { xs: "center", sm: "start" } }}
          spacing={8}
        >
          {landingCards.map((card) => (
            <LandingCard key={card.title} {...card} />
          ))}
        </Grid>
        <Link href={paths.conactUs} customVariant='button'>
          Связаться
        </Link>
      </Stack>
    </Container>

    <Box component='section' padding={6} borderColor='black' bgcolor='#F5F5F5'>
      <Container maxWidth='xl'>
        <Stack spacing={4} display='flex' alignItems='center'>
          <Typography customVariant='h2' textAlign='center'>
            Давайте обсудим ваш проект
          </Typography>
          <Link href={paths.conactUs} customVariant='button'>
            Связаться
          </Link>
        </Stack>
      </Container>
    </Box>

    <Typography customVariant='h3' marginY={4} textAlign='center'>
      Igniz 2025
    </Typography>
  </Stack>
);

export default HomePage;
