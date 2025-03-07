function IntroVideo({ onVideoEnd }) {
    useEffect(() => {
      const timer = setTimeout(onVideoEnd, 5000);
      return () => clearTimeout(timer);
    }, [onVideoEnd]);
  
    return (
      <div className="video-container">
        <video autoPlay muted onEnded={onVideoEnd}>
          <source src={`${process.env.PUBLIC_URL}/calma.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  
  export default IntroVideo;
  