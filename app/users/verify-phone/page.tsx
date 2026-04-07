"use client";

import React, { useState, useEffect } from "react";

export default function VerifyPhonePage() {
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [resending, setResending] = useState(false);

  // Load phone from localStorage (or your auth context later)
  useEffect(() => {
    const storedPhone = localStorage.getItem("userPhone");
    setPhone(storedPhone || null);
  }, []);

  const handleVerify = async () => {
    if (!phone) {
      alert("Missing phone number — user is not logged in.");
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch("/api/users/verify-phone/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, code }),
      });

      if (!res.ok) {
        alert("Invalid verification code.");
        return;
      }

      alert("Phone number verified successfully.");
      window.location.href = "/users/profile";
    } finally {
      setSubmitting(false);
    }
  };

  const handleResend = async () => {
    if (!phone) {
      alert("Missing phone number — user is not logged in.");
      return;
    }

    try {
      setResending(true);

      const res = await fetch("/api/users/verify-phone/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      if (!res.ok) {
        alert("Failed to resend SMS verification code.");
        return;
      }

      alert("Verification code sent via SMS.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        Verify Your Phone Number
      </h1>

      {phone ? (
        <p style={{ marginBottom: 16 }}>
          A verification code was sent to:  
          <strong> {phone} </strong>
        </p>
      ) : (
        <p style={{ marginBottom: 16, color: "red" }}>
          No phone number found — user may not be logged in.
        </p>
      )}

      <p style={{ marginBottom: 16 }}>
        Enter the 6‑digit code sent to your phone.
      </p>

      <input
        type="text"
        placeholder="Verification code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          borderRadius: 6,
          border: "1px solid #ccc",
          marginBottom: 20,
          fontSize: 16,
        }}
      />

      <button
        onClick={handleVerify}
        disabled={submitting}
        style={{
          width: "100%",
          padding: "12px 16px",
          background: submitting ? "#999" : "#0070f3",
          color: "white",
          borderRadius: 6,
          border: "none",
          cursor: submitting ? "not-allowed" : "pointer",
          fontSize: 16,
          marginBottom: 12,
        }}
      >
        {submitting ? "Verifying..." : "Verify Phone"}
      </button>

      <button
        onClick={handleResend}
        disabled={resending}
        style={{
          width: "100%",
          padding: "10px 16px",
          background: resending ? "#999" : "#444",
          color: "white",
          borderRadius: 6,
          border: "none",
          cursor: resending ? "not-allowed" : "pointer",
          fontSize: 14,
        }}
      >
        {resending ? "Sending..." : "Resend SMS Code"}
      </button>
    </div>
  );
}