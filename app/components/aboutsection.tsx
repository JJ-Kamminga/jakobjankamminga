import { Divider, Typography } from "@mui/material"

/** Palette
 * #ffcb18, #8a7560, #3891a6, #41333b, #e2afde
 */
const Sentence = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant='body1' component='div' sx={{
      padding: '10px',
      textAlign: 'center',
      fontSize: '1.5rem',
    }}>
      {children}
    </Typography>
  )
}

const Spacer = () => {
  return (
    <div style={{ height: '80px' }} />
  )
}

export const AboutSection = () => {
  return (
    <p style={{ fontSize: '2rem' }}>
      {/* <Typography variant='subtitle1'>Quality engineer <i>by trade</i></Typography>
        {/* <Typography variant='subtitle1'>Quality engineer <i>by trade</i></Typography>
          <Typography variant='subtitle1'>Music enthusiast <i>by heart</i></Typography>
          <Typography variant='subtitle1'>Philosopher <i>whether I want it or not</i> (but also by MA degree)</Typography> */}
      <>
        <Sentence>
          If you&apos;ve worked in software development,
        </Sentence>
        <Sentence>
          you probably know that everyone dreams of one thing: <i>to deliver value</i>.
        </Sentence>
      </>
      <Spacer />
      <>
        <Sentence>
          If you&apos;ve studied philosophy,
        </Sentence>
        <Sentence>
          you probably know where this is going.
        </Sentence>
      </>
      <Spacer />
      <>
        <Sentence>
          I help teams build better software.
        </Sentence>
        <Sentence>
          80% asking questions.
        </Sentence>
        <Sentence>
          20% writing code and CI/CD pipelines.
        </Sentence>
      </>
    </p >
  )
}