"use client";

import { styled, Typography } from "@mui/material";

const StyledMarkdown = styled(Typography)`
text-decoration: none;
p a:link {
      color: var(--main-teal);
    }

    p a:visited {
      color: var(--main-darkblue);
    }

    p a:focus {
      color: var(--main-jasper);
    }

    p a:hover {
      color: var(--main-lavender);
      text-decoration: underline;
    }

    p a:active {
      color: var(--main-jasper);
    }

    p img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      outline: 3px double var(--main-lightgrey);
      border-right: 15px solid var(--main-yellow);
      border-left: 2px solid var(--main-yellow);
    }
`;

export const PostContents = ({ contents }: { contents: string }) => {
  return (
    <StyledMarkdown
      variant='body1'
      sx={{ fontSize: '1.2rem' }}
      dangerouslySetInnerHTML={contents ? { __html: contents } : undefined}
    />
  );
};
