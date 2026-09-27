"use client";

import { FormEvent, useState } from "react";

export default function AdmissionForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      e.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-[30px] bg-white p-7 soft-shadow md:grid-cols-2">
      <input name="fullName" required className="form-control" placeholder="Full Name" />
      <input name="fatherName" className="form-control" placeholder="Father's Name" />
      <input name="email" required className="form-control" type="email" placeholder="Email ID" />
      <input name="phone" required className="form-control" placeholder="Mobile Number" />
      <select name="programType" className="form-control" defaultValue="">
        <option value="" disabled>Program Type</option><option>Undergraduate</option><option>Postgraduate</option><option>Doctoral</option>
      </select>
      <input name="courseName" className="form-control" placeholder="Preferred Course" />
      <input name="state" className="form-control" placeholder="State" />
      <input name="district" className="form-control" placeholder="District" />
      <button disabled={status === "loading"} className="btn-maroon md:col-span-2">{status === "loading" ? "Submitting..." : "Submit Application"}</button>
      {status === "success" && <p className="md:col-span-2 text-sm font-semibold text-green-700">Application received successfully.</p>}
      {status === "error" && <p className="md:col-span-2 text-sm font-semibold text-red-700">Could not submit. Check database configuration and try again.</p>}
    </form>
  );
}
