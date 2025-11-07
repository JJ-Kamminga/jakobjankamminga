import { Container } from '@mui/material';
import { AboutSection } from './components/aboutsection';
import Header from './components/header';
import { Portfolio } from './components/portfolio';

export default function Page() {
  return (
    <>
      <Header title='Jakob Jan Kamminga' />
      <section style={{
        borderTop: '4px double var(--main-darkgrey)',
      }}>
        <Container maxWidth='md'>
          <AboutSection />
        </Container>
      </section >
      <section style={{
        borderTop: '4px double var(--main-darkgrey)',
      }}>
        <Container maxWidth='md'>
          <Portfolio />
        </Container>
      </section>
    </>
  );
};
