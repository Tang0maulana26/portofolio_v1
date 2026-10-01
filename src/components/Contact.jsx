import "./Contact.css";
import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

const WEB3FORMS_ACCESS_KEY = "d3875108-ea60-4e82-9272-309f50226333";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    setStatus("submitting");
    setNotice("Mengirim pesan…");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setNotice("Pesan belum terkirim. Coba lagi beberapa saat.");
        return;
      }

      form.reset();
      setStatus("success");
      setNotice("Pesan berhasil dikirim. Terima kasih sudah menghubungi saya!");
    } catch {
      setStatus("error");
      setNotice("Tidak dapat terhubung. Periksa koneksi lalu coba lagi.");
    }
  }

  return (
    <section id="contact" className="section-shell section-pad">
      <div className="contact-panel">
        <div>
          <span className="eyebrow">05 / GET IN TOUCH</span>
          <h2>
            Have an idea?
            <br />
            <em>Let's make it happen.</em>
          </h2>
          <p className="muted-copy">
            Punya pertanyaan, ide proyek, atau sekadar ingin menyapa? Mulai
            percakapan di sini.
          </p>
          {profile.email ? (
            <a className="contact-email" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>
          ) : (
            <p className="contact-note">
              <Mail size={18} /> Kirim pesan melalui formulir berikut.
            </p>
          )}
          <div className="button-row">
            {profile.github && (
              <a
                href={profile.github}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                placeholder="Nama kamu"
                required
                maxLength={100}
                autoComplete="name"
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                placeholder="kamu@email.com"
                required
                maxLength={254}
                autoComplete="email"
              />
            </label>
          </div>
          <label>
            What's on your mind?
            <input
              name="subject"
              placeholder="Kolaborasi, ide proyek, atau halo!"
              required
              maxLength={150}
            />
          </label>
          <label>
            Your message
            <textarea
              name="message"
              placeholder="Ceritakan sedikit tentang idemu…"
              rows={4}
              required
              maxLength={3000}
            />
          </label>
          <button
            className="button-primary"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Mengirim…" : "Send message"}
            <ArrowUpRight size={18} />
          </button>
          {notice && (
            <p className="form-status" role="status" aria-live="polite">
              {notice}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
