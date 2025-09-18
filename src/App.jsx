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
            {nav.map((n) => (
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
              {nav.map((n) => (
                <button key={n.id} onClick={() => go(n.id)} className="text-left py-2">
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* About */}
      <Section id="about" title="About Me" subtitle="Robotics + ML engineer focused on safe, human-aware manipulation and creative AI.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 rounded-2xl border shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-2">Hi, I’m Boda Huo</h3>
            <p className="text-sm leading-relaxed">
              I build practical robotics and AI systems: tactile/vision sensor fusion for contact-aware manipulation,
              physics-based simulation for safety testing, and generative audio ML for creative applications.
              I like turning research ideas into robust demos with clean interfaces, measured results, and a clear
              sim-to-real path.
            </p>
            <div className="flex flex-wrap gap-2 mt-3 text-xs">
              <span className="px-2 py-1 rounded-full bg-gray-100">Robotics</span>
              <span className="px-2 py-1 rounded-full bg-gray-100">Computer Vision</span>
              <span className="px-2 py-1 rounded-full bg-gray-100">Machine Learning</span>
              <span className="px-2 py-1 rounded-full bg-gray-100">Controls</span>
              <span className="px-2 py-1 rounded-full bg-gray-100">Prototyping</span>
              <span className="px-2 py-1 rounded-full bg-gray-100">Simulation (Isaac Sim)</span>
            </div>
          </div>
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="grid gap-2 text-sm">
              <a className="underline" href="mailto:bodah@andrew.cmu.edu">bodah@andrew.cmu.edu</a>
              <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a className="underline" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="IMRD structure; my role and the value of the work.">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Vision–Tactile Robot Arm */}
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h3 className="text-lg font-semibold">Vision–Tactile Robot Arm</h3>
            <p className="mt-2 text-sm text-gray-600"><strong>Intro.</strong> Enable contact-aware manipulation with a 6-DoF arm by fusing gripper tactile data with RGB vision for grasp state estimation.</p>
            <p className="mt-2 text-sm font-medium">Methods / Design</p>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              <li>Mounted tactile skin; per-panel zero/scale calibration; hand–eye camera calibration.</li>
              <li>Built a first-pass fusion estimator (contact area + image features) with confidence thresholds and slip heuristic.</li>
              <li>Ring-buffer timestamp alignment; safety caps and abort conditions.</li>
            </ul>
            <p className="mt-2 text-sm font-medium">Results</p>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              <li>Stable pick–place on three object classes; “gentle press” demo with force limits.</li>
              <li>Although occasional latency spikes occur, the integrated pipeline already supports reliable pickups on the current set.</li>
            </ul>
            <p className="mt-2 text-sm font-medium">Discussion</p>
            <p className="text-sm text-gray-600">Next: expand to deformables/glossy items; add polarization; thermal model for tactile drift; slip-recovery behavior.</p>
          </div>

          {/* GenAI Audio→Audio Music Generator */}
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h3 className="text-lg font-semibold">GenAI Audio→Audio Music Generator</h3>
            <p className="mt-2 text-sm text-gray-600"><strong>Intro.</strong> Creative ML system that transforms input audio motifs into stylistically varied music clips.</p>
            <p className="mt-2 text-sm font-medium">Methods / Design</p>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              <li>Pipeline: feature extraction → conditioning → generative model inference → post-processing.</li>
              <li>My role: model wiring, prompt/conditioning design, and evaluation harness.</li>
            </ul>
            <p className="mt-2 text-sm font-medium">Results</p>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              <li>Produces recognizable stylistic variants from short seeds with consistent loudness and duration.</li>
              <li>Although training data were limited, the model generalized to unseen inputs in pilot tests.</li>
            </ul>
            <p className="mt-2 text-sm font-medium">Discussion</p>
            <p className="text-sm text-gray-600">Future work: longer-form structure, finer control over timbre/tempo, and human-in-the-loop curation tools.</p>
          </div>

          {/* Humanoid in Isaac Sim (Safety) */}
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h3 className="text-lg font-semibold">Humanoid in Isaac Sim (Safety)</h3>
            <p className="mt-2 text-sm text-gray-600"><strong>Intro.</strong> Simulation testbed for safety and locomotion with an off-the-shelf humanoid policy.</p>
            <p className="mt-2 text-sm font-medium">Methods / Design</p>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              <li>Generated terrains and random obstacle assets (desks, chairs, boxes).</li>
              <li>Integrated Unitree G1 baseline; trained and deployed locomotion policy in Isaac Sim.</li>
            </ul>
            <p className="mt-2 text-sm font-medium">Results</p>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              <li>Humanoid walks straight and maintains balance across varied terrains.</li>
              <li>Although realistic human assets are challenging and perception is limited, the setup is ready for sensor integration (LiDAR, camera, tactile).</li>
            </ul>
            <p className="mt-2 text-sm font-medium">Discussion</p>
            <p className="text-sm text-gray-600">Next: add perception, safety buffers, and customer-provided robot models for HRI scenarios.</p>
          </div>

          {/* Literature-Review & Writing Workflow */}
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h3 className="text-lg font-semibold">Research Summary Workflow</h3>
            <p className="mt-2 text-sm text-gray-600"><strong>Intro.</strong> Standardized “paper summary” process to produce accurate, reusable literature notes.</p>
            <p className="mt-2 text-sm font-medium">Methods / Design</p>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              <li>Prompt pack + checklist (problem, approach, findings, caveats) and a citation/quote pass.</li>
              <li>Lightweight QA gate derived from prior feedback (“not factually correct” → pre-submit checks).</li>
            </ul>
            <p className="mt-2 text-sm font-medium">Results</p>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              <li>Fewer corrections post-handoff; clearer acceptance criteria; faster reviewer turnaround.</li>
              <li>Knowledge index for reuse across projects.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Resume */}
      <Section id="resume" title="Resume" subtitle="One-page PDF.">
        <div className="p-6 rounded-2xl border shadow-sm bg-white text-sm">
          {/* Put your PDF in /public; on Pages use the repo base path */}
          <a className="underline" href="/web-portfolio/resume.pdf">Download my resume (PDF)</a>
          <p className="mt-2 text-gray-500">If your repo name changes, update this path.</p>
        </div>
      </Section>

      {/* Media */}
      <Section id="media" title="Media" subtitle="Images and clips of my work.">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-video rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500">
              Media {i + 1}
            </div>
          ))}
        </div>
      </Section>

      {/* Justification Memo */}
      <Section id="memo" title="Justification Memo" subtitle="Addressed to Professor Wolfe; audience fit and design choices.">
        <div className="p-6 rounded-2xl border shadow-sm bg-white text-sm space-y-2">
          <p><strong>To:</strong> Professor Wolfe &nbsp; <strong>From:</strong> Boda Huo &nbsp; <strong>Subject:</strong> Portfolio Design Rationale</p>
          <p><strong>Target employers:</strong> robotics/ML teams focused on manipulation, safety, and creative AI tools.</p>
          <p><strong>Why these projects:</strong> they show (1) sensor fusion + controls for safe manipulation; (2) creative ML pipeline design; (3) simulation for safety/HRI; and (4) my writing workflow for reliable research communication.</p>
          <p><strong>Audience fit:</strong> sections use skim-friendly headings, short lists, and outcome-focused language employers scan for (methods, metrics, risks, next steps).</p>
          <p><strong>Design principles:</strong> clear navigation, consistent typography, Tailwind utility styling, and concessive statements to de-emphasize limitations without hiding them.</p>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="p-6 rounded-2xl border shadow-sm bg-white text-sm">
          Email: <a className="underline" href="mailto:bodah@andrew.cmu.edu">bodah@andrew.cmu.edu</a>
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
