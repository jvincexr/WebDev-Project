import React from 'react';

const YoutubeVid = () => {
  const videoId = 'dN6kly7i5is'; // Replace with the actual video ID

  return (
    <div className="youtube-video flex justify-center items-center mb-[-600px] md:mb-0 mt-[500px] md:mt-3 p-5 md:p-0">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </div>
  );
};

export default YoutubeVid;
