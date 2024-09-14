"use client";
import { useState } from "react";

export default function PasswordForm() {
  const [password, setPassword] = useState("");
  const handlePasswordSubmit = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      window.location.reload();
    } else {
      alert("Invalid password. Please try again.");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="p-2">Enter Password to Access</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 text-black"
      />
      <button
        onClick={handlePasswordSubmit}
        className="px-5 py-2 m-5 rounded-lg border border-yellow-100"
      >
        Submit
      </button>
    </div>
  );
}
