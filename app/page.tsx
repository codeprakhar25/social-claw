'use cache'

import Image from "next/image";
import {
  FaArrowRight,
  FaBoltLightning,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRedditAlien,
  FaSliders,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

const WAITLIST_URL = "https://form.typeform.com/to/XwHNQMkD";
const DEMO_EMBED_URL = "https://www.youtube.com/embed/s4gznPnVL-4";

const platforms = [
  { name: "X (Twitter)", icon: FaXTwitter },
  { name: "LinkedIn", icon: FaLinkedinIn },
  { name: "Reddit", icon: FaRedditAlien },
  { name: "Instagram", icon: FaInstagram },
  { name: "Facebook", icon: FaFacebookF },
];

const valueItems = [
  {
    title: "Post from Telegram in seconds",
    description:
      "Trigger single or multi-platform publishing without opening five different dashboards.",
    icon: FaTelegram,
  },
  {
    title: "Flexible control with OpenClaw",
    description:
      "Write once, adapt per channel, and schedule in the format your audience expects.",
    icon: FaSliders,
  },
  {
    title: "Save founder and team time",
    description:
      "Batch your content flow and ship consistently while staying focused on product work.",
    icon: FaBoltLightning,
  },
];

export default async function Home() {
  return (
    <div className="landing-grid min-h-screen py-8 md:py-12">
      <main className="shell space-y-10 md:space-y-16">
        <section className="glass-card overflow-hidden p-7 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="reveal flex flex-wrap items-center gap-2">
                <div className="inline-flex h-10 w-fit items-center gap-2 rounded-full border border-[#1e223033] bg-white px-3">
                  <Image
                    src="/social-claw-mark.svg"
                    alt="Social Claw logo"
                    width={24}
                    height={24}
                  />
                  <span className="display text-sm font-semibold leading-none tracking-wide">
                    Social Claw
                  </span>
                </div>
                <p className="inline-flex h-10 w-fit items-center rounded-full border border-[#1e223033] bg-[#fff6e8] px-4 text-xs font-semibold uppercase leading-none tracking-[0.17em] text-[#313542]">
                  Launching Soon
                </p>
              </div>
              <h1
                className="display reveal max-w-2xl text-4xl leading-[1.05] tracking-tight md:text-6xl"
                data-delay="1"
              >
                Control your social media from Telegram with OpenClaw
              </h1>
              <p className="reveal max-w-xl text-base leading-relaxed text-[#2f3442] md:text-lg" data-delay="2">
                Plan, customize, and post across platforms from one chat flow.
                Built to save you time while giving full flexibility over your
                content output.
              </p>
              <div className="reveal flex flex-wrap gap-3 pt-1" data-delay="3">
                <a
                  href={WAITLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1d202b] bg-white px-6 py-3 text-sm font-semibold text-[#1d202b] transition hover:-translate-y-0.5 hover:bg-[#ec5d2a]"
                >
                  Join Waitlist <FaArrowRight aria-hidden="true" />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center rounded-full border border-[#1d202b33] bg-white px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-[#1d202b]"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            <div className="reveal relative" data-delay="2">
              <div className="float-hero glass-card relative mx-auto max-w-md overflow-hidden p-4">
                <Image
                  src="/hero-social.svg"
                  alt="Illustration showing connected social media publishing workflows"
                  width={940}
                  height={540}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="glass-card p-5 md:p-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="display text-2xl md:text-3xl">Demo Showcase</h2>
            {/* <span className="rounded-full border border-[#1d202b33] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
               Placeholder Embed
             </span> */}
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-[#1d202b22] bg-black">
            <div className="aspect-video w-full">
              <iframe
                src={DEMO_EMBED_URL}
                title="OpenClaw social manager demo"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card p-6 md:p-8">
            <h2 className="display text-2xl md:text-3xl">Supported Platforms</h2>
            <p className="mt-2 max-w-2xl text-sm text-[#313542] md:text-base">
              Publish content from one Telegram workflow to these channels today.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {platforms.map(({ name, icon: Icon }) => (
                <article
                  key={name}
                  className="group rounded-2xl border border-[#1d202b22] bg-white px-4 py-4 transition hover:-translate-y-1 hover:border-[#1d202b66]"
                >
                  <div className="mb-3 inline-flex rounded-xl border border-[#1d202b22] bg-[#f0eedd] p-3">
                    <Icon className="text-xl text-[#1d202b]" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold">{name}</h3>
                </article>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            <h2 className="display text-2xl">Coming Soon</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#313542] md:text-base">
              More social destinations and advanced automation hooks are on the
              roadmap as we roll out.
            </p>
            <div className="mt-5 rounded-2xl border border-dashed border-[#1d202b44] bg-white p-4 text-sm">
              Next up: broader channel support, richer scheduling windows, and
              smarter publishing templates.
            </div>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h2 className="display text-2xl md:text-3xl">Why teams pick this</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {valueItems.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#1d202b22] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_34px_-24px_#1e223099]"
              >
                <span className="mb-3 inline-flex rounded-xl border border-[#1d202b22] bg-[#f0eedd] p-2.5">
                  <Icon className="text-lg text-[#1d202b]" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#313542]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-card p-6 text-center md:p-10">
          <h2 className="display text-3xl md:text-4xl">
            Launch with consistent social output, not context switching
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#313542] md:text-base">
            We are in launch mode and accepting early users now.
          </p>
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1d202b] bg-[#ec5d2a] px-7 py-3 text-sm font-semibold text-[#111318] transition hover:-translate-y-0.5 hover:bg-[#ffc05f]"
          >
            Join Waitlist <FaArrowRight aria-hidden="true" />
          </a>
        </section>
      </main>
    </div>
  );
}
