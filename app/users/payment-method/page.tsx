"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

function PaymentMethodForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    setSubmitting(true);
    setErrorMessage(null);

    try {
      // 1. Create SetupIntent
      const siRes = await fetch("/api/payments/setup-intent", {
        method: "POST",
      });

      if (!siRes.ok) {
        setErrorMessage("Failed to create SetupIntent.");
        setSubmitting(false);
        return;
      }

      const { clientSecret } = await siRes.json();

      // 2. Confirm card setup
      const card = elements.getElement(CardElement);
      const result = await stripe.confirmCardSetup(clientSecret, {
        payment_method: { card: card! },
      });

      if (result.error) {
        setErrorMessage(result.error.message || "Card setup failed.");
        setSubmitting(false);
        return;
      }

      // 3. Attach payment method to customer
      const attachRes = await fetch("/api/payments/attach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethodId: result.setupIntent.payment_method,
        }),
      });

      if (!attachRes.ok) {
        setErrorMessage("Failed to attach payment method.");
        setSubmitting(false);
        return;
      }

      alert("Payment method saved successfully.");
      window.location.href = "/users/profile";
    } catch (err) {
      console.error(err);
      setErrorMessage("Unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        Add Payment Method
      </h1>

      <p style={{ marginBottom: 16 }}>
        Your card will be securely stored with Stripe.
      </p>

      <div
        style={{
          padding: 12,
          borderRadius: 6,
          border: "1px solid #ccc",
          marginBottom: 16,
        }}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#32325d",
              },
            },
          }}
        />
      </div>

      {errorMessage && (
        <p style={{ color: "red", marginBottom: 16 }}>{errorMessage}</p>
      )}

      <button
        onClick={handleSubmit}
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
        }}
      >
        {submitting ? "Saving..." : "Save Card"}
      </button>
    </div>
  );
}

export default function PaymentMethodPage() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentMethodForm />
    </Elements>
  );
}