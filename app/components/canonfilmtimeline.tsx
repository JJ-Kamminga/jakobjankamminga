import { filmData } from 'app/canon/film/filmData';
import React from 'react';
import { MediaTimelineItem } from './mediatimelineitem';
import { Container } from '@mui/material';

const FilmTimeline = ({ mediaData = filmData }) => {
  const sortedMedia = [...mediaData].sort((a, b) => a.year - b.year);

  return (
    <Container>
      {sortedMedia.map((media, index) => (
        <MediaTimelineItem
          key={media.title.substring(0, 10) + index}
          media={media}
          isLeft={index % 2 === 0}
          isLast={index === sortedMedia.length - 1}
        />
      ))}
    </Container>
  );
};

export default FilmTimeline;