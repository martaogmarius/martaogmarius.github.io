"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export function QrCard() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;
    QRCode.toCanvas(canvas.current, window.location.origin, {
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
    <div className="qr-card">
      <canvas ref={canvas} aria-label="QR-kode til bryllupsnettsiden" />
      <div>
        <p className="kicker">Til invitasjonen</p>
        <h3>QR-koden er klar</h3>
        <p>Koden peker alltid til denne siden og kan lastes ned som bildefil.</p>
        <button className="text-button" onClick={download}>Last ned QR-kode</button>
      </div>
    </div>
  );
}
