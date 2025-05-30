"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  if (!imagesLoaded.tea) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="text-white min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Title */}
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Buy Me A Chai</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            A cozy platform where creators get funded directly by fans — one cup of chai at a time.
          </p>
        </section>

        <div className="bg-white h-1 opacity-15" />

        {/* Why Chai */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <Image
            src="/tea.gif"
            alt="Chai Cup"
            width={300}
            height={300}
            onLoad={() => setImagesLoaded(true)}
            className="rounded-lg object-contain"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-3">Why Chai?</h2>
            <p className="leading-relaxed">
              Chai is more than a drink. It&apos;s a symbol of warmth, connection, and support in many cultures.
              <br />Our platform is built on that spirit — allowing supporters to show their love in the simplest, most heartwarming way.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="max-w-3xl mx-auto leading-relaxed">
            We aim to empower creators to focus on their passion while fans support their journey. No ads. No complicated campaigns. Just genuine help — one small cup at a time.
          </p>
        </section>

        <div className="bg-white h-1 opacity-15" />

        {/* Timeline Section */}
        <section className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-center mb-10">Our Journey</h2>
          <div className="space-y-6 border-l border-purple-500 pl-6">
            {[
              { year: "2022", event: "Idea for 'Buy Me A Chai' was born over late-night coding and tea." },
              { year: "2023", event: "Prototype launched and received great feedback from indie creators." },
              { year: "2024", event: "Public launch with support for payments, fan pages, and video embeds." },
              { year: "2025", event: "Now empowering thousands of creators around the world." },
            ].map(({ year, event }, i) => (
              <div key={i}>
                <p className="font-semibold text-purple-400">{year}</p>
                <p>{event}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-white h-1 opacity-15" />

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-3">Get In Touch</h2>
          <p className="mb-4">
            We&apos;d love to hear from you — whether you&apos;re a creator, supporter, or someone with a brilliant idea.
          </p>
          <a
            href="mailto:support@buymeachai.com"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
          >
            Email Us: support@buymeachai.com
          </a>
        </section>
      </div>
    </div>
  );
}
