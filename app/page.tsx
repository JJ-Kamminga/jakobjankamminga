import { Container } from '@mui/material'
import Header from './components/header'
import { AboutSection } from './components/aboutsection'

export default function Page() {
  return (
    <>
      <Header />
      <section style={{
        borderTop: '4px double var(--main-darkgrey)'
      }}>
        <Container maxWidth='md'>
          <AboutSection />
          {/* <BlogPosts /> */}
        </Container>
      </section>
    </>
  )
}
