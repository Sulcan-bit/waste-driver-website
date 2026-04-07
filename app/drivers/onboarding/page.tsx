"use client";

import React, { useState } from "react";

export default function DriverOnboardingPage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const startOnboarding = async () => {
    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("/api/drivers/onboarding", {
        method: "POST",
      });

      if (!res.ok) {
        setErrorMessage("Unable to start Stripe onboarding.");
        setLoading(false);
        return;
      }

      const data = await res.json();
      window.location.href = data.url; // Redirect to Stripe Connect
    } catch (err) {
      console.error(err);
      setErrorMessage("Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        Driver Stripe Onboarding
      </h1>

      <p style={{ marginBottom: 16 }}>
        To receive payouts, you must complete Stripe Connect onboarding.
      </p>

      {errorMessage && (
        <p style={{ color: "red", marginBottom: 16 }}>{errorMessage}</p>
      )}

      <button
        onClick={startOnboarding}
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px 16px",
          background: loading ? "#999" : "#0070f3",
          color: "white",
          borderRadius: 6,
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          fontSize: 16,
        }}
      >
        {loading ? "Redirecting..." : "Start Stripe Onboarding"}
      </button>
    </div>
  );
}