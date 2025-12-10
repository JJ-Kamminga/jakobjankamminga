import { Typography } from "@mui/material";
export const PostContents = ({ contents }: { contents: string }) => {
  return (
    <Typography
      variant='body1'
      sx={{ fontSize: '1.2rem' }}
      dangerouslySetInnerHTML={contents ? { __html: contents } : undefined}
    />
  );
};