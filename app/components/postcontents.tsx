"use client";

export const PostContents = ({ contents }: { contents: String }) => {
  return (
    <p dangerouslySetInnerHTML={{ __html: contents }}>
    </p>
  )
}