"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export function QrCard() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;
    QRCode.toCanvas(canvas.current, "https://martaogmarius.github.io/", {
      width: 180,
      margin: 1,
      color: { dark: "#a52319", light: "#fff0f5" },
    });
  }, []);

  function download() {
    const link = document.createElement("a");
    link.download = "qr-kode-marius-og-marta.png";
    link.href = canvas.current?.toDataURL("image/png") || "";
    link.click();
  }

  return (
    <div className="qr-card qr-download-card">
      <p className="kicker">Til invitasjonen</p>
      <button className="qr-download" onClick={download} aria-label="Last ned QR-koden">
        <canvas ref={canvas} aria-label="QR-kode til bryllupsnettsiden" />
      </button>
    </div>
  );
}
