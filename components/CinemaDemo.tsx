export default function CinemaDemo() {
  return (
    <section className="cinema-section" id="demo">
      <div className="cinema-letterbox-wrap">
        <div className="letterbox">
          <div className="glass-ring"></div>
          <div className="letterbox-inner">
            <div className="film-bars top"></div>
            <div className="film-bars bot"></div>
            <div className="cinema-bookend">
              <div className="live-dot"></div>
              <div className="live-text">REC · Live walkthrough</div>
            </div>
            <div className="cinema-play-mega"></div>
            <div className="cinema-overlay">
              <div className="left">
                <div className="title">
                  <em>The 92-Second Audit</em>
                </div>
                <div className="sub">
                  URL paste · AI scan · competitor teardown · branded PDF
                </div>
              </div>
              <div className="right">
                <div className="pill">▶ 01:32</div>
                <div className="pill">4K UHD</div>
                <div className="pill">No audio needed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
