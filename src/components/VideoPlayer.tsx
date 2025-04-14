import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <>
      <ReactPlayer url={url} controls={true} width="100%" height="100%" />
    </>
  );
};

export default VideoPlayer;
