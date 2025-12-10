'use client';

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const ThoughtsMasonry = ({ children }) => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2 }}
    >
      <Masonry>
        {children}
      </Masonry>
    </ResponsiveMasonry>
  );
};