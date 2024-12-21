import Container from "./container";
import cn from "classnames";

interface Props {
  preview?: boolean;
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview
            ? (
              <>
                This page is a preview.{" "}
                <a
                  href="/api/exit-preview"
                  className="underline hover:text-teal-300 duration-200 transition-colors"
                >
                  Click here
                </a>{" "}
                to exit preview mode.
              </>
            )
            : (
              <div className='relative z-50'>
                Welcome to my rebuilt site. It&apos;s still barebones at the moment, while it&apos;s being built you can find the old site
                {" "}
                <a
                  href={"https://jakobjankamminga-hugo.netlify.app/"}
                  className="underline hover:text-blue-600 duration-200 transition-colors"
                >here
                </a>
                .
              </div>
            )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
