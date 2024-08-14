const VideoSection = () => {
    return (
      <div className="video-section">
        <h2>Procesul Meu Creativ</h2>
        <video controls>
          <source src="path-to-video.mp4" type="video/mp4" />
          Browser-ul tău nu suportă vizualizarea videoclipului.
        </video>
      </div>
    );
  };
  
  export default VideoSection;
  