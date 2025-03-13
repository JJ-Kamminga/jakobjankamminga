import { Container, Divider, Typography, useMediaQuery } from '@mui/material'
import { BlogPosts } from 'app/components/posts'
import Header from './components/header'

export default function Page() {
  return (
    <>
      <Header />
      <section>
        <Container maxWidth='sm'>
          {/* <Typography variant='subtitle1'>Quality engineer <i>by trade</i></Typography>
          <Typography variant='subtitle1'>Music enthusiast <i>by heart</i></Typography>
          <Typography variant='subtitle1'>Philosopher <i>whether I want it or not</i> (but also by MA degree)</Typography> */}
          <Typography variant='body1' sx={{ padding: '10px' }} >
            <Typography component='div' sx={{ backgroundColor: 'white' }}>If you&apos;ve worked in software development,</Typography>
            you probably know that everyone dreams of one thing: <i>to deliver value</i>.
            <br />
          </Typography>
          <Typography variant='body1' sx={{ padding: '10px' }}>
            <Typography component='div' sx={{ backgroundColor: 'white' }}>
              If you&apos;ve studied philosophy,
            </Typography>
            you probably know where this is going.
            <br />
          </Typography>
          <Typography variant='body1' sx={{ padding: '10px' }} >
            I help teams build better software.
            <div>
              80% asking questions.
            </div>
            <Divider />
            <div>
              20% writing code and CI/CD pipelines.
            </div>
          </Typography>
          <div>
            <BlogPosts />
          </div>
        </Container>
      </section>
    </>
  )
}
