import { useState } from "react";

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 max-w-6xl mx-auto px-6 py-12">
    <div className="mb-6">
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
    </div>
    {children}
  </section>
);

export default function App() {
  const [open, setOpen] = useState(false);
  const nav = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "media", label: "Media" },
    { id: "memo", label: "Justification Memo" },
    { id: "contact", label: "Contact" },
  ];
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold">Boda Huo — Engineering Portfolio</div>
          <div className="hidden md:flex items-center gap-6">
            {nav.map(n => (
              <button key={n.id} onClick={() => go(n.id)} className="text-sm hover:underline">
                {n.label}
              </button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
            ☰
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t">
            <div className="max-w-6xl mx-auto px-6 py-3 grid gap-2">
              {nav.map(n => (
                <button key={n.id} onClick={() => go(n.id)} className="text-left py-2">
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* About */}
      <Section id="about" title="About Me" subtitle="Short intro + targeted skills.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 rounded-2xl border shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-2">Hi, I’m [Boda Huo]</h3>
            <p className="text-sm leading-relaxed">
              One or two tight paragraphs that position your skills and impact. Call out your core stack
              and the problems you solve.
            </p>
            <div className="flex flex-wrap gap-2 mt-3 text-xs">
              <span className="px-2 py-1 rounded-full bg-gray-100">Robotics</span>
              <span className="px-2 py-1 rounded-full bg-gray-100">Computer Vision</span>
              <span className="px-2 py-1 rounded-full bg-gray-100">ML</span>
              <span className="px-2 py-1 rounded-full bg-gray-100">Controls</span>
              <span className="px-2 py-1 rounded-full bg-gray-100">Prototyping</span>
            </div>
          </div>
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="grid gap-2 text-sm">
              <a className="underline" href="mailto:bodah@andrew.cmu.edu">Email</a>
              <a className="underline" href="https://github.com/" target="_blank">GitHub</a>
              <a className="underline" href="https://linkedin.com/" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Use IMRD/IDEC; state your contribution + value.">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Vision–Tactile Robot Arm",
            "GenAI Audio→Audio Music Generator",
            "Humanoid in Isaac Sim (Safety)",
            "Sensor Fusion Benchmark",
            "Grasp Planner Prototype",
            "Hardware Test Rig",
          ].map((title, i) => (
            <div key={i} className="p-6 rounded-2xl border shadow-sm bg-white">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">Intro/Problem — 1–2 sentences.</p>
              <p className="mt-2 text-sm font-medium">Methods / Design</p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                <li>Stack, datasets, hardware, or algorithms</li>
                <li>Your unique contribution</li>
              </ul>
              <p className="mt-2 text-sm font-medium">Results</p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                <li>Metrics or qualitative outcomes</li>
                <li>Link to demo/video</li>
              </ul>
              <p className="mt-2 text-sm font-medium">Discussion</p>
              <p className="text-sm text-gray-600">
                Use one concession if helpful (e.g., “Although data were limited, the model generalized to unseen inputs.”)
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Resume */}
      <Section id="resume" title="Resume" subtitle="Upload a one-page PDF.">
        <div className="p-6 rounded-2xl border shadow-sm bg-white text-sm">
          Place your hosted PDF link here: <a className="underline" href="/assets/resume.pdf">/assets/resume.pdf</a>
        </div>
      </Section>

      {/* Media */}
      <Section id="media" title="Media" subtitle="Images and clips of your work.">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-video rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500">
              Media {i + 1}
            </div>
          ))}
        </div>
      </Section>

      {/* Justification Memo */}
      <Section id="memo" title="Justification Memo" subtitle="Addressed to Professor Wolfe; explain choices and audience fit.">
        <div className="p-6 rounded-2xl border shadow-sm bg-white text-sm space-y-2">
          <p><strong>To:</strong> Professor Wolfe &nbsp; <strong>From:</strong> [Boda Huo] &nbsp; <strong>Subject:</strong> Portfolio Design Rationale</p>
          <p><strong>Target Employers:</strong> Roles + valued skills.</p>
          <p><strong>Content Choices:</strong> Why these projects; what they demonstrate.</p>
          <p><strong>Tailoring:</strong> How headings, keywords, and media highlight required skills.</p>
          <p><strong>Design Principles:</strong> Clear known→new flow, concise language, zero errors.</p>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="p-6 rounded-2xl border shadow-sm bg-white text-sm">
          Email: <a className="underline" href="mailto:you@example.com">you@example.com</a>
        </div>
      </Section>

      <footer className="border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Boda Huo</span>
          <span>Built with Vite + React + Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
