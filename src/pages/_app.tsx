import { AppProps } from 'next/app'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{
        position: 'absolute',
        background: '#ffcb18',
        height: '150px',
        width: '150px',
        top: '0px',
        clipPath: 'polygon(0 0, 100% 100%, 100% 0)',
        right: '0px',
      }
      }>
        <img
          src="/assets/icons/owl.svg"
          alt="owl icon"
          style={{
            position: 'relative',
            right: '-65px',
            height: '57%'
          }}
        />

      </div>
      < Component {...pageProps} />
    </>
  )
}
