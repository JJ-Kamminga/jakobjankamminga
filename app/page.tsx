import { Container } from '@mui/material'
import { AboutSection } from './components/aboutsection'
import Header from './components/header';

export default function Page() {
  return (
    <>
      <Header title='Jakob Jan Kamminga' />
      <section style={{
        borderTop: '4px double var(--main-darkgrey)'
      }}>
        <Container maxWidth='md'>
          <AboutSection />
        </Container>
      </section >
    </>
  )
};
