import { useEffect, useState } from "react";

function AutoDismissAlert({ message, type = "success", duration = 3000, onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!show) return null;

  return (
    <div
      className="toast show align-items-center text-white border-2"
      role="alert"
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1060,
        minHeight:"50px",
        minWidth: "250px",
        fontFamily: "monospace",
        backgroundColor: type === "success" ? "#72fa92ff" : "#ee4152ff",
      }}
    >
      <div className="d-flex">
        <div className="toast-body text-center fw-normal text-muted fs-4">{message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          onClick={() => {
            setShow(false);
            if (onClose) onClose();
          }}
        ></button>
      </div>
    </div>
  );
}

export default AutoDismissAlert;
