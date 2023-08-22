export const Video = () => {
  return (
    <div>
      <div>
        <button style={{ backgroundColor: "white", color: "black" }}>
          button
        </button>
      </div>
      <iframe
        width="185"
        height="324"
        src="https://www.youtube.com/embed/xz6aeeeJR-g"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};
