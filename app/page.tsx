import { Container, Divider, Typography } from '@mui/material'
import { BlogPosts } from 'app/components/posts'
import Header from './components/header'
import { AboutSection } from './components/aboutsection'

export default function Page() {
  return (
    <>
      <Header />
      <section>
        <Container maxWidth='md' sx={{
          background: 'white',
          border: '2px solid #41333B',
        }}
        >
          <AboutSection />
          <BlogPosts />
        </Container>
      </section>
    </>
  )
}
