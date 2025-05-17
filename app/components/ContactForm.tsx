"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    if (status !== "idle") {
      setStatus("idle");
      setError("");
    }
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all fields.");
      setStatus("error");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulated async submission
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <motion.form
      className="space-y-6"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {["name", "email", "subject"].map((field) => (
        <div key={field}>
          <label
            htmlFor={field}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === "email" ? "email" : "text"}
            id={field}
            required
            placeholder={`Enter your ${field}`}
            value={form[field as keyof typeof form]}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      ))}

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          placeholder="Enter your message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none overflow-hidden"
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = `${target.scrollHeight}px`;
          }}
        ></textarea>
      </div>

      {/* Status Message */}
      {status === "error" && (
        <p className="text-red-600 text-sm font-medium">{error}</p>
      )}
      {status === "success" && (
        <p className="text-green-600 text-sm font-medium">
          Thank you! Your message has been sent successfully.
        </p>
      )}

      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        disabled={status === "loading"}
        className={`w-full ${
          status === "loading" ? "bg-blue-400" : "bg-blue-700 hover:bg-blue-800"
        } text-white font-bold py-3 px-6 rounded-lg shadow transition`}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
}
