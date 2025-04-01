import { ListAlt, MusicNoteOutlined, PlaylistPlayOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const MusicPostIcon = ({ type }: { type: string | undefined }) => {

  return (
    <Typography sx={{ color: 'var(--main-dimgrey)' }}>
      {type === undefined && (
        <MusicNoteOutlined />
      )}
      {type === 'playlist' && (
        <PlaylistPlayOutlined />
      )
      }
      {type === 'list' && (
        <ListAlt />
      )}
    </Typography>
  );
};