"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["home", "about", "projects", "experience", "contact"];

export default function Nav() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0.2 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkCls = (id: string) =>
    `px-3 py-1 rounded-md transition ${
      active === id ? "bg-white/30 text-yellow-200" : "hover:text-yellow-200"
    }`;

  return (
    <nav className="space-x-2">
      {SECTIONS.map((id) => (
        <a key={id} href={`#${id}`} className={linkCls(id)}>
          {id[0].toUpperCase() + id.slice(1)}
        </a>
      ))}
    </nav>
  );
}
