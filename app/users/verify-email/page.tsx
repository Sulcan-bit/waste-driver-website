"use client";

import React, { useState, useEffect } from "react";

export default function VerifyEmailPage() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [resending, setResending] = useState(false);

  // Load email from localStorage (or your auth context later)
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    setEmail(storedEmail || null);
  }, []);

  const handleVerify = async () => {
    if (!email) {
      alert("Missing email — user is not logged in.");
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch("/api/users/verify-email/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      if (!res.ok) {
        alert("Invalid verification code.");
        return;
      }

      alert("Email verified successfully.");
      window.location.href = "/users/profile";
    } finally {
      setSubmitting(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      alert("Missing email — user is not logged in.");
      return;
    }

    try {
      setResending(true);

      const res = await fetch("/api/users/verify-email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        alert("Failed to resend verification email.");
        return;
      }

      alert("Verification email sent.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        Verify Your Email
      </h1>

      {email ? (
        <p style={{ marginBottom: 16 }}>
          A verification code was sent to:  
          <strong> {email} </strong>
        </p>
      ) : (
        <p style={{ marginBottom: 16, color: "red" }}>
          No email found — user may not be logged in.
        </p>
      )}

      <p style={{ marginBottom: 16 }}>
        Enter the 6‑digit code sent to your email.
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
        {submitting ? "Verifying..." : "Verify Email"}
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
        {resending ? "Sending..." : "Resend Verification Email"}
      </button>
    </div>
  );
}