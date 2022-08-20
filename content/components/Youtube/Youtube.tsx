import * as React from "react";

interface Props {
  embed_id: string;
  title: string;
}

export const YoutubeEmbed = (props:Props) => (
  
  <div className="react-live-wrapper">
    <iframe
      src={`https://www.youtube.com/embed/${props.embed_id}`}
      width="100%"
      height="500"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={props.title}
    />
  </div>

);
export default YoutubeEmbed;

