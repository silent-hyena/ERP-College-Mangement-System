import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function TopProgressBar({ loading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (loading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0; // reset to 0 after 100
          return prev + 5; // increment by 5%
        });
      }, 25); // ~0.5s to reach 100% (100 / 5 * 25ms = 500ms)
    } else {
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div
      className="position-fixed top-0 start-0 w-100"
      style={{ zIndex: 2000 }}
    >
      {loading && (
        <div className="progress" style={{ height: "4px", backgroundColor:"gray" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${progress}%`,
              transition: "width 25ms linear",
              backgroundColor:"#00CAFF",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
