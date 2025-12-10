"use client"

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

`

export const PostContents = ({ contents }: { contents: string }) => {
  return (
    <StyledMarkdown
      variant='body1'
      sx={{ fontSize: '1.2rem' }}
      dangerouslySetInnerHTML={contents ? { __html: contents } : undefined}
    />
  );
};
