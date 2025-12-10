import { Typography } from "@mui/material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SchemaIcon from '@mui/icons-material/Schema';
import Link from "next/link";

/** Palette
 * #ffcb18, #8a7560, #3891a6, #41333b, #e2afde
 */
const Sentence = ({ children, accent }: { children: React.ReactNode, accent: 'left' | 'right' }) => {
  return (
    <Typography variant='body1' className='sentence' component='div' sx={{
      padding: '10px',
      fontSize: '1.5rem',
      background: 'var(--main-lightgrey)',
      borderLeft: accent == 'left' ? '4px solid var(--main-teal)' : undefined,
      borderRight: accent == 'right' ? '4px solid var(--main-teal)' : undefined,
    }}>
      {children}
    </Typography>
  );
};

const PipelineGraph = () => {
  return (
    <div style={{}}>
      <span style={{
        display: 'inline-block',
        width: '80%',
        background: 'var(--main-teal)',
        transform: 'SkewX(-20deg)',
        textAlign: 'center',
        paddingTop: '10px'
      }}>
        <QuestionAnswerIcon fontSize="large" sx={{ color: 'var(--main-lightgrey)' }} />
      </span>
      <span style={{
        display: 'inline-block',
        width: '20%',
        background: 'var(--main-yellow)',
        transform: 'SkewX(-20deg)',
        textAlign: 'center',
        paddingTop: '10px'
      }}>
        <SchemaIcon fontSize="large" sx={{ color: 'var(--main-darkgrey)' }} />
      </span>
    </div>
  );
};
const Spacer = () => {
  return (
    <div style={{ height: '40px' }} />
  );
};

export const AboutSection = () => {
  return (
    <p style={{ fontSize: '2rem' }}>
      <>
        <Sentence accent="left">
          If you&apos;ve worked in software development,<br />
          you probably know what everyone is chasing; <i>to deliver value</i>.
        </Sentence>
      </>
      <Spacer />
      <>
        <Sentence accent="right">
          If you&apos;ve studied philosophy,<br />
          you probably see where this is going.
        </Sentence>
      </>
      <Spacer />
      <Spacer />
      <Typography variant="body1" sx={{ fontSize: '3rem', textAlign: 'center' }}>
        I help teams build better software.
      </Typography>
      <Spacer />
      <Spacer />
      <Typography style={{ textAlign: 'left', fontSize: '2.5rem' }}>80% asking questions.</Typography>
      <PipelineGraph />
      <Typography style={{ textAlign: 'right', fontSize: '1.5rem' }}>20% writing code and CI/CD pipelines.</Typography>
      <Spacer />
      <Typography variant="body1" sx={{ fontSize: '2rem', textAlign: 'center' }}>
        <Link target="_blank" href='https://www.linkedin.com/in/jakobjankamminga/'>Get in touch</Link>
      </Typography>
    </p >
  );
};