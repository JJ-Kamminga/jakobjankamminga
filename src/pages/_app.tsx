import { AppProps } from "next/app";
import "../styles/index.css";
import Image from "next/image";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{
        position: "absolute",
        background: "#ffcb18",
        height: "150px",
        width: "150px",
        top: "0px",
        clipPath: "polygon(0 0, 100% 100%, 100% 0)",
        right: "0px",
      }
      }>
        <Image
          src="/assets/icons/owl-white.svg"
          alt="owl icon"
          height={85.5}
          width={85.5}
          style={{
            position: "relative",
            right: "-65px",
          }}
        />

      </div>
      < Component {...pageProps} />
    </>
  );
}
