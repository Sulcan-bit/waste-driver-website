"use client";

import React, { useEffect, useState } from "react";
import { UserProfileFormValues } from "../../../../shared/userProfileValidation";

type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  hasPaymentMethod: boolean;
};

export default function UserProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Load user profile from backend
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await fetch("/api/users/me");

        if (!res.ok) {
          console.error("Failed to load profile");
          setLoading(false);
          return;
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleSubmit = async (values: UserProfileFormValues) => {
    try {
      setSubmitting(true);

      const res = await fetch("/api/users/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        console.error(await res.json());
        alert("Could not save profile.");
        return;
      }

      alert("Profile saved.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-xl mx-auto mt-20 p-6">
        <p className="text-slate-600">Loading profile…</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-xl mx-auto mt-20 p-6">
        <p className="text-red-600">Unable to load profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 space-y-10">
      <h1 className="text-3xl font-bold">Your Profile</h1>

      {/* TEMPORARY: Form removed because component does not exist */}
      <div className="p-4 border rounded-xl bg-yellow-50 text-yellow-800">
        Profile editing form is temporarily unavailable.
      </div>

      {/* Verification Status */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Verification</h2>

        <p>
          <strong>Email:</strong>{" "}
          {user.emailVerified ? (
            <span className="text-emerald-600 font-semibold">Verified</span>
          ) : (
            <a href="/users/verify-email" className="text-red-600 underline">
              Not verified — verify now
            </a>
          )}
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          {user.phoneVerified ? (
            <span className="text-emerald-600 font-semibold">Verified</span>
          ) : (
            <a href="/users/verify-phone" className="text-red-600 underline">
              Not verified — verify now
            </a>
          )}
        </p>
      </section>

      {/* Payment Method */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Payment Method</h2>

        {user.hasPaymentMethod ? (
          <p className="text-emerald-600 font-semibold">Card on file</p>
        ) : (
          <a href="/users/payment-method" className="text-red-600 underline">
            No card added — add payment method
          </a>
        )}
      </section>

      {/* CTA: Download App */}
      <section className="mt-10">
        <a
          href="/download"
          className="block w-full text-center rounded-xl bg-emerald-600 px-8 py-3 text-white font-semibold shadow hover:bg-emerald-700"
        >
          Download the Waste Driver App
        </a>
      </section>
    </div>
  );
}