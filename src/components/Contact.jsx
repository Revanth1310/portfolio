import { useState } from "react";

// Same-origin call — on Vercel, /api/contact.js is deployed right alongside
// this static site, so no separate API URL is needed in prod. For local
// dev, run `vercel dev` (see README) so this route actually resolves.

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function sendMail(event) {
    event.preventDefault();
    const form = event.target;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error("Contact form send failed:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-16">
      <h1
        className="mb-8 text-center text-4xl font-bold text-accent-cyan"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Contact
      </h1>
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4 text-lg">
          <h3 className="text-2xl font-bold">Contact Info</h3>
          <a
            href="mailto:revanthchandika@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you."
            className="flex items-center gap-3 text-white hover:text-accent-cyan"
          >
            <img src="/images/email.png" alt="Email icon" className="h-8 w-8" />
            revanthchandika@gmail.com
          </a>
          <a href="tel:+916302321665" className="flex items-center gap-3 text-white hover:text-accent-cyan">
            <img src="/images/phone.png" alt="Phone icon" className="h-8 w-8" />
            +91 6302321665
          </a>
          <div className="flex items-center gap-3">
            <img src="/images/location.jpeg" alt="Location icon" className="h-8 w-8" />
            2-138, Chittipalem, Machilipatnam, Krishna, Andhra Pradesh, India - 521366
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-panel-from to-panel-to p-8 shadow-[0_4px_8px_rgba(255,255,255,0.15)]">
          <h3 className="mb-4 text-center text-2xl font-bold">Feedback Form</h3>
          <form onSubmit={sendMail} className="flex flex-col gap-3">
            <label htmlFor="name">Name:</label>
            <input id="name" name="name" type="text" required className="rounded-md border-2 border-white px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan" />

            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required className="rounded-md border-2 border-white px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan" />

            <label htmlFor="subject">Subject:</label>
            <input id="subject" name="subject" type="text" required className="rounded-md border-2 border-white px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4} required className="rounded-md border-2 border-white px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan" />

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 cursor-pointer rounded-md bg-accent-cyan px-5 py-2.5 font-bold text-black transition hover:brightness-110 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Submit"}
            </button>

            {status === "sent" && (
              <p className="text-center text-sm text-green-400">Message sent — thank you!</p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Something went wrong — please try again, or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
