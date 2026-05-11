"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TeamMember = {
  name: string;
  title: string;
  role: string;
  hobby: string;
  quote: string;
  image: string;
  strengths: string[];
};

const teamManagement: TeamMember[] = [
  {
    name: "Arun Dutta",
    title: "Manager",
    role: "Manager",
    hobby: "Acting, community support, and occasional sideline drama",
   quote: "If you need help, just say the word — I’ve got you",
    image: "/images/arun.png",
    strengths: ["Motivation", "Team bonding", "Sponsor hunting"],
  },
  {
    name: "Shantanu Sinha",
    title: "The Mastermind",
    role: "Technical Director",
    hobby: "Political debates, motivating young players, and cooking for the squad",
    quote: "First I win the argument, then I win the hearts, then I win the kitchen 🍳",
    image: "/images/shantanu.png",
    strengths: ["Game analysis", "Tactical setup", "Recruitment"],
  },
  {
    name: "Diya Chowdhury",
    title: "Recovery Queen",
    role: "Physiotherapist",
    hobby: "Motherhood and movie marathons",
quote: "Raising stars at home and watching stars on screen 🎬",
    image: "/images/diya.png",
    strengths: ["Recovery", "Injury prevention", "Mobility"],
  },
  {
    name: "Riyon",
    title: "The Crowd Magnet",
    role: "Brand Ambassador",
    hobby: "Charming cameras and rallying the fanbase",
    quote: "Show up, smile, and let the team do the rest.",
    image: "/images/riyon.png",
    strengths: ["Public presence", "Fan engagement", "Brand storytelling"],
  },
];

const manager = teamManagement[0];

const players: TeamMember[] = [
  {
    name: "Suman",
    title: "Captain Fantastic",
    role: "Captain / Midfield General",
    hobby: "Playing soccer, cricket, and breaking down strategies",
    quote: "Every move has a plan — and every plan wins matches",
    image: "/images/suman.png",
    strengths: ["Leadership", "Passing", "Calm under pressure"],
  },
  {
    name: "Tintin",
    title: "Adventure Mode",
    role: "Winger / Dribble Department",
    hobby: "Building robots and singing like a rockstar",
    quote: "I code my moves like a robot and freestyle like a song",
    image: "/images/tintin.png",
    strengths: ["Dribbling", "Creativity", "Fearlessness"],
  },
  {
    name: "Shrish",
    title: "The Anchor",
    role: "Midfielder / Shield Department",
    hobby: "Math puzzles and music sessions",
    quote: "I solve equations off the field and problems on it",
    image: "/images/shrish.png",
    strengths: ["Positioning", "Interceptions", "Composure"],
},
  {
    name: "Abesh",
    title: "Energy Spark",
    role: "Forward / Speed Department",
    hobby: "Playing soccer and jamming on the tabla",
    quote: "I run to my own beat — fast feet, faster rhythm 🥁⚽",
    image: "/images/abesh.png",
    strengths: ["Pace", "Stamina", "Finishing"],
},
  {
    name: "Raika",
    title: "Pace Specialist",
    role: "Winger / Speed Lane",
    hobby: "Playing soccer and following the game passionately",
  quote: "Football isn’t just a game — it’s part of who I am",
    image: "/images/raika.png",
    strengths: ["Acceleration", "Crossing", "Dribbling"],
  },
  {
    name: "Debasmit",
    title: "Set Piece Wizard",
    role: "Midfield / Free Kick Department",
    hobby: "Following Manchester United and practicing set pieces",
quote: "Red at heart, deadly on set pieces",
    image: "/images/debasmit.png",
    strengths: ["Free kicks", "Crossing", "Vision"],
  },
  {
    name: "Barun",
    title: "The Wall",
    role: "Defender / Backline Boss",
    hobby: "Saying no to strikers, politely",
    quote: "They shall not pass.",
    image: "/images/barun.png",
    strengths: ["Tackling", "Heading", "Composure"],
  },
  {
    name: "Subhrangsu",
    title: "Stamina King",
    role: "Defender / Engine Room",
    hobby: "Running the full 90 and asking for extra time",
    quote: "Tired is just a state of mind.",
    image: "/images/subhrangsu.png",
    strengths: ["Stamina", "Box-to-box", "Work rate"],
  },
  {
    name: "Sumit",
    title: "Tactical Think Tank",
    role: "Defender / Strategy Department",
    hobby: "Planning formations that only he understands",
    quote: "We do not park the bus. We decorate it.",
    image: "/images/sumit.png",
    strengths: ["Vision", "Team talk", "Long-range hope"],
  },
  {
    name: "Arindom",
    title: "Style Master",
    role: "Defender / Flair Department",
    hobby: "Cooking and perfecting his signature biryani",
quote: "I add flair on the field and flavor in the kitchen",
    image: "/images/arindom.png",
    strengths: ["Dribbling", "Flair", "First touch"],
  },
  {
  name: "Sandipan",
  title: "Ice-Cold Finisher",
  role: "Striker / Finishing Department",
  hobby: "Finding space and timing runs to perfection",
  quote: "Stay calm, strike sharp.",
  image: "/images/sandipan.png",
  strengths: ["Finishing", "Positioning", "Composure"],
},
  {
    name: "Sourav",
    title: "Mystery Man",
    role: "Utility Player / Everywhere Needed",
    hobby: "Posing like a pro after every match",
    quote: "Earlier you missed the photo… now don’t miss the moment.",
    image: "/images/sourav.jpeg",
    strengths: ["Surprise factor", "Team spirit", "Match-day presence"],
  },
  {
    name: "Rajdeep",
    title: "Silent Striker",
    role: "Forward / Box Specialist",
    hobby: "Scoring goals and keeping it cool",
    quote: "Less talk, more goals.",
    image: "/images/rajdeep.png",
    strengths: ["Finishing", "Off-the-ball runs", "Composure"],
  },
];

const galleryImages = Array.from({ length: 29 }, (_, i) => `/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpeg`);

const sponsor = {
  name: "BAHAR Indian Restaurant & Catering",
  title: "Sponsor Legend",
  role: "Official Sponsor / Jersey Department",
  tagline: "Proudly supporting jerseys, team confidence, and the belief that good looks can add at least 10% performance.",
  quote: "Jersey first, trophy next.",
};

const announcements = [
  {
    icon: "🎉",
    tag: "Chomkaitala Presents",
    title: "SSL Success Party",
    body: "Date and Venue: TBD — stay tuned, details dropping soon!",
  },
];

const matches = [
  {
    name: "Group Match",
    opponent: "Old Monk",
    date: "May 9, 2026",
    time: "4:15 PM",
    venue: "Doyle Park",
    address: "8175 Regents Rd, San Diego, CA 92122",
    result: {
      summary: "CSC 3 - 0 Old Monk",
      outcome: "Won",
      scorers: "Suman ⚽⚽ · Shrish ⚽",
    },
  },
  {
    name: "Final Match",
    opponent: "TBD",
    date: "May 9, 2026",
    time: "5:20 PM",
    venue: "Doyle Park",
    address: "8175 Regents Rd, San Diego, CA 92122",
    result: {
      summary: "0 - 0 (Goalless Draw)",
      outcome: "Joint Winners",
      scorers: "EC declared both teams as winners",
    },
  },
];

const fanTalk = [
  "Chomkaitala SC is not just a team, it is an emotion.",
  "Manager Arun and TD Shantanu already decorate the strategies with their vision.",
  "This squad has depth, drama, and dangerous confidence, but fitness is missing ",
];

export default function ChomkaitalaSCFanPortal() {
  const [selectedPlayer, setSelectedPlayer] = useState<TeamMember | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [cloudPhotos, setCloudPhotos] = useState<string[]>([]);
  const [pendingUploads, setPendingUploads] = useState<{ url: string; file: File }[]>([]);
  const [uploadStatus, setUploadStatus] = useState<{ text: string; tone: "info" | "warn" | "success" } | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/gallery")
      .then((r) => r.json())
      .then((data: { urls?: string[] }) => {
        if (!cancelled && Array.isArray(data.urls)) {
          setCloudPhotos(data.urls);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);
  const [fanName, setFanName] = useState("");
  const [fanMessage, setFanMessage] = useState("");
  const [messages, setMessages] = useState(fanTalk);
  const [showIntro, setShowIntro] = useState(true);

  const allPhotos = [...galleryImages, ...cloudPhotos];

  function downscaleImage(file: File, maxDim = 1600): Promise<{ url: string; file: File }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const longest = Math.max(img.width, img.height);
          if (longest <= maxDim) {
            resolve({ url: URL.createObjectURL(file), file });
            return;
          }
          const scale = maxDim / longest;
          const w = Math.round(img.width * scale);
          const h = Math.round(img.height * scale);
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("canvas context unavailable"));
            return;
          }
          ctx.drawImage(img, 0, 0, w, h);
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("toBlob failed"));
                return;
              }
              const shrunk = new File([blob], file.name.replace(/\.[^.]+$/, "") + ".jpg", { type: "image/jpeg" });
              resolve({ url: URL.createObjectURL(blob), file: shrunk });
            },
            "image/jpeg",
            0.88,
          );
        };
        img.onerror = () => reject(new Error("image load failed"));
        img.src = ev.target?.result as string;
      };
      reader.onerror = () => reject(new Error("reader failed"));
      reader.readAsDataURL(file);
    });
  }

  async function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setIsUploading(true);
    setUploadStatus(null);

    let skippedHeic = 0;
    let skippedTooBig = 0;
    let skippedOther = 0;
    const accepted: { url: string; file: File }[] = [];
    const MAX_BYTES = 25 * 1024 * 1024;

    for (const file of Array.from(files)) {
      const name = file.name.toLowerCase();
      const isHeic = name.endsWith(".heic") || name.endsWith(".heif") || file.type === "image/heic" || file.type === "image/heif";
      if (isHeic) {
        skippedHeic++;
        continue;
      }
      if (!file.type.startsWith("image/")) {
        skippedOther++;
        continue;
      }
      if (file.size > MAX_BYTES) {
        skippedTooBig++;
        continue;
      }
      try {
        accepted.push(await downscaleImage(file));
      } catch {
        skippedOther++;
      }
    }

    if (accepted.length > 0) {
      setPendingUploads(accepted);
    }

    const skippedTotal = skippedHeic + skippedTooBig + skippedOther;
    if (skippedTotal > 0) {
      const parts: string[] = [];
      if (skippedHeic > 0) parts.push(`${skippedHeic} HEIC (share as JPEG/PNG)`);
      if (skippedTooBig > 0) parts.push(`${skippedTooBig} over 25MB`);
      if (skippedOther > 0) parts.push(`${skippedOther} unsupported`);
      setUploadStatus({ text: `Skipped: ${parts.join(" · ")}`, tone: "warn" });
      setTimeout(() => setUploadStatus(null), 5000);
    }

    setIsUploading(false);
    e.target.value = "";
  }

  function removePending(index: number) {
    setPendingUploads((prev) => {
      const item = prev[index];
      if (item) URL.revokeObjectURL(item.url);
      return prev.filter((_, i) => i !== index);
    });
  }

  async function confirmPending() {
    if (pendingUploads.length === 0 || isPublishing) return;
    setIsPublishing(true);

    const newCloudUrls: string[] = [];
    let failed = 0;

    for (const item of pendingUploads) {
      const fd = new FormData();
      fd.append("file", item.file);
      try {
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (res.ok && data.url) {
          newCloudUrls.push(data.url);
        } else {
          failed++;
          console.warn("Upload rejected:", data?.error);
        }
      } catch {
        failed++;
      }
    }

    pendingUploads.forEach((p) => URL.revokeObjectURL(p.url));
    setPendingUploads([]);

    if (newCloudUrls.length > 0) {
      setCloudPhotos((prev) => [...prev, ...newCloudUrls]);
    }

    if (newCloudUrls.length > 0 && failed === 0) {
      setUploadStatus({
        text: `Published ${newCloudUrls.length} photo${newCloudUrls.length > 1 ? "s" : ""} — visible to everyone now ✓`,
        tone: "success",
      });
    } else if (newCloudUrls.length > 0 && failed > 0) {
      setUploadStatus({ text: `Published ${newCloudUrls.length}, ${failed} failed`, tone: "warn" });
    } else {
      setUploadStatus({ text: `Upload failed. Service may not be configured yet.`, tone: "warn" });
    }
    setTimeout(() => setUploadStatus(null), 6000);
    setIsPublishing(false);
  }

  function cancelPending() {
    if (isPublishing) return;
    pendingUploads.forEach((p) => URL.revokeObjectURL(p.url));
    setPendingUploads([]);
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  function dismissIntro() {
    setShowIntro(false);
  }

  function submitFanTalk(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cleanName = fanName.trim();
    const cleanMessage = fanMessage.trim();
    if (!cleanName || !cleanMessage) return;
    setMessages((current) => [`${cleanName}: ${cleanMessage}`, ...current]);
    setFanName("");
    setFanMessage("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061126] via-[#071a3f] to-black text-white">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={dismissIntro}
            className="fixed inset-0 z-[60] flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#061126] via-[#0a1f4a] to-black"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0.35),_transparent_55%)]"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 opacity-40">
              {Array.from({ length: 18 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ y: -50, x: `${(i * 53) % 100}%`, opacity: 0, rotate: 0 }}
                  animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: 360 }}
                  transition={{ duration: 2.6 + (i % 5) * 0.3, delay: i * 0.08, ease: "easeIn", repeat: Infinity, repeatDelay: 0.6 }}
                  className="absolute text-2xl"
                >
                  {["🎉", "✨", "💛", "🏆", "⚽"][i % 5]}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.1 }}
              className="relative z-10"
            >
              <ClubLogo className="h-28 w-28 sm:h-36 sm:w-36" />
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="relative z-10 mt-6 text-xs font-black uppercase tracking-[0.5em] text-yellow-200 sm:text-sm"
            >
              🏆 SSL 2026 · Champions
            </motion.p>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.55 }}
              className="relative z-10 mt-3 px-6 text-center text-4xl font-black leading-tight sm:text-6xl md:text-7xl"
            >
              <span className="text-white">Chomkaitala </span>
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                SC
              </span>
              <span className="mt-3 block text-lg font-bold tracking-[0.3em] text-yellow-200/90 sm:text-2xl">
                SSL WINNER · 2026
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="relative z-10 mt-4 max-w-xl px-6 text-center text-base text-slate-200 sm:text-lg"
            >
              Fan favorite. SSL winner. Champions of Doyle Park. 💛
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.4 }}
              className="absolute bottom-6 z-10 text-xs uppercase tracking-[0.3em] text-yellow-200/70"
            >
              Tap anywhere to continue
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,27,59,0.9),_transparent_35%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(115deg,_transparent_0%,_rgba(250,204,21,0.18)_45%,_transparent_70%)]" />

        <div className="relative mx-auto max-w-5xl px-5 py-16 text-center md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <ClubLogo className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32" />
            <p className="mt-5 inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-200 shadow-[0_0_25px_rgba(250,204,21,0.18)] sm:text-sm">
              🏆 SSL Champions · 2026
            </p>
            <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Chomkaitala <span className="text-yellow-300">SC</span>
              <span className="block text-yellow-200/90 text-xl font-bold tracking-[0.2em] sm:text-2xl md:text-3xl mt-3">
                SSL WINNER · 2026
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-slate-200 sm:text-lg md:text-2xl">
              Just soccer, just fun, just good times.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-12">
        {announcements.length > 0 && (
          <div className="mb-12 grid gap-4">
            {announcements.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-[1.75rem] border border-yellow-400/40 bg-gradient-to-br from-yellow-400/20 via-[#071a3f]/80 to-black p-5 shadow-[0_0_35px_rgba(250,204,21,0.18)] sm:p-6"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl"
                  aria-hidden
                />
                <div className="relative flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-yellow-400/40 bg-yellow-400/10 text-2xl">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-300 sm:text-xs">
                      {item.tag}
                    </p>
                    <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-slate-200 sm:text-base">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <section className="mb-12 rounded-[2rem] border border-yellow-400/30 bg-[#071a3f]/65 p-6 shadow-[0_0_35px_rgba(250,204,21,0.18)] sm:p-8">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-200 sm:text-sm">Score Update</p>
            <h2 className="mt-2 text-2xl font-black text-yellow-300 sm:text-3xl md:text-4xl">
              Match Day Results
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              Latest from the pitch — group stage to the final.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {matches.map((match) => (
              <div key={match.name} className="rounded-3xl border border-yellow-400/20 bg-black/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">{match.name}</p>
                  {match.result && (
                    <span className="rounded-full border border-yellow-400/40 bg-yellow-400/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-yellow-200">
                      {match.result.outcome}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-2xl font-black">CSC vs {match.opponent}</h3>
                {match.result && (
                  <div className="mt-3 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-3">
                    <p className="text-xl font-black text-yellow-200">{match.result.summary}</p>
                    <p className="mt-1 text-sm text-slate-200">{match.result.scorers}</p>
                  </div>
                )}
                <p className="mt-3 text-slate-200">{match.date} · {match.time}</p>
                <p className="text-yellow-200/80">{match.venue}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${match.venue}, ${match.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-slate-300 underline-offset-2 hover:text-yellow-200 hover:underline"
                >
                  {match.address}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[2rem] border border-yellow-400/30 bg-[#071a3f]/65 p-6 shadow-[0_0_35px_rgba(250,204,21,0.18)] sm:p-8">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-200 sm:text-sm">Photo Gallery</p>
            <h2 className="mt-2 text-2xl font-black text-yellow-300 sm:text-3xl md:text-4xl">
              Moments from Match Day 📸
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              Snapshots straight from the pitch, the sidelines, and the celebrations.
            </p>
          </div>

          <div className="mt-5 flex flex-col items-center gap-2">
            <label
              className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-black text-black shadow-[0_0_25px_rgba(250,204,21,0.35)] transition sm:text-base ${
                isUploading
                  ? "cursor-wait bg-yellow-300/70"
                  : "cursor-pointer bg-yellow-400 hover:bg-yellow-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.5)]"
              }`}
            >
              {isUploading ? (
                <>
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                  Processing…
                </>
              ) : (
                <>
                  <span aria-hidden>📸</span> Upload your photo
                </>
              )}
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                multiple
                disabled={isUploading}
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
            <p className="text-[10px] text-slate-400 sm:text-xs">
              JPEG / PNG / WebP / GIF · auto-resized · max 25 MB each · this visit only.
            </p>
            {uploadStatus && (
              <p
                className={`mt-1 rounded-full border px-3 py-1 text-xs font-bold ${
                  uploadStatus.tone === "success"
                    ? "border-green-400/40 bg-green-400/10 text-green-200"
                    : "border-amber-400/40 bg-amber-400/10 text-amber-200"
                }`}
              >
                {uploadStatus.text}
              </p>
            )}
          </div>

          <div className="mt-5 max-h-[60vh] overflow-y-auto rounded-2xl border border-yellow-400/15 bg-black/20 p-3 [scrollbar-color:rgba(250,204,21,0.5)_transparent] [scrollbar-width:thin] sm:max-h-[65vh]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {allPhotos.map((src, i) => {
                const isFanUpload = i >= galleryImages.length;
                return (
                  <button
                    key={`${src}-${i}`}
                    type="button"
                    onClick={() => setSelectedPhoto(i)}
                    className="group relative aspect-square overflow-hidden rounded-2xl border border-yellow-400/20 bg-black/40 transition hover:border-yellow-300/60 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  >
                    <img
                      src={src}
                      alt={isFanUpload ? `Fan upload ${i - galleryImages.length + 1}` : `CSC moment ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    {isFanUpload && (
                      <span className="absolute left-1.5 top-1.5 rounded-full bg-yellow-400 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-black">
                        Fan
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">
            {allPhotos.length} photos · scroll inside to see them all
            {cloudPhotos.length > 0 && (
              <> · <span className="text-yellow-300">{cloudPhotos.length} from fans</span></>
            )}
          </p>
        </section>

        <SectionHeader title="Meet the Squad" subtitle="Click any player photo to open the player card." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {players.map((player) => (
            <motion.button
              key={player.name}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPlayer(player)}
              className="group overflow-hidden rounded-[1.75rem] border border-yellow-400/25 bg-[#071a3f]/65 text-left shadow-xl backdrop-blur transition hover:border-yellow-300/60 hover:shadow-[0_0_35px_rgba(250,204,21,0.2)]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={player.image}
                  alt={player.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black">{player.name}</h3>
                  <p className="text-sm font-semibold text-yellow-200">{player.title}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-200">{player.role}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-yellow-500/80">Tap for details</p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeader title="Team Management" subtitle="Coach, technical director, and the recovery desk." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamManagement.map((member) => (
              <motion.button
                key={member.name}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedPlayer(member)}
                className="group overflow-hidden rounded-[1.75rem] border border-yellow-400/25 bg-[#071a3f]/65 text-left shadow-xl backdrop-blur transition hover:border-yellow-300/60 hover:shadow-[0_0_35px_rgba(250,204,21,0.2)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black">{member.name}</h3>
                    <p className="text-sm font-semibold text-yellow-200">{member.title}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-200">{member.role}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.25em] text-yellow-500/80">Tap for details</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <section className="mt-16 rounded-[2rem] border border-yellow-400/25 bg-[#071a3f]/65 p-6 shadow-xl backdrop-blur">
          <SectionHeader title="Fan Talk" subtitle="Fans can leave their messages here." compact />
          <form onSubmit={submitFanTalk} className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr_auto]">
            <input
              value={fanName}
              onChange={(e) => setFanName(e.target.value)}
              placeholder="Your name"
              className="rounded-2xl border border-yellow-400/25 bg-black/70 px-4 py-3 text-white outline-none focus:border-yellow-300"
            />
            <input
              value={fanMessage}
              onChange={(e) => setFanMessage(e.target.value)}
              placeholder="Say something for CSC"
              className="rounded-2xl border border-yellow-400/25 bg-black/70 px-4 py-3 text-white outline-none focus:border-yellow-300"
            />
            <button className="rounded-2xl bg-yellow-400 px-5 py-3 font-black text-black transition hover:bg-yellow-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.35)]">
              Post
            </button>
          </form>
          <div className="mt-5 space-y-3">
            {messages.map((message, index) => (
              <div key={`${message}-${index}`} className="flex gap-3 rounded-2xl border border-yellow-400/15 bg-black/70 p-4 text-slate-200">
                <span className="mt-1 shrink-0 text-lg">💬</span>
                <p>{message}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-yellow-400/30 bg-gradient-to-br from-yellow-400/15 via-[#071a3f]/70 to-black p-6 shadow-[0_0_40px_rgba(250,204,21,0.18)] sm:p-8">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-200 sm:text-sm">Sponsor Spotlight</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-yellow-300 sm:text-3xl md:text-4xl">{sponsor.name}</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-100/80 sm:text-base">Official Sponsor</p>
              <p className="mt-4 text-slate-200">{sponsor.tagline}</p>
              <p className="mt-4 text-yellow-100/90">“{sponsor.quote}”</p>
            </div>
            <div className="relative mx-auto w-full max-w-xs md:max-w-none">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-yellow-400/40 via-amber-300/30 to-yellow-300/40 blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-yellow-400/60 bg-gradient-to-br from-[#fdf6d5] via-[#fbe98c] to-[#f4cf3d] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.45)] sm:p-7">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-900/70 sm:text-xs">
                    Powered By
                  </span>
                  <img
                    src="/images/baharLogo.jpeg"
                    alt={`${sponsor.name} logo`}
                    className="h-auto max-h-28 w-auto object-contain sm:max-h-36 md:max-h-44"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 border-t border-yellow-400/20 pt-6 sm:flex-row sm:gap-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-yellow-400/30 bg-black sm:h-24 sm:w-24">
              <img
                src="/images/Jersey.jpeg"
                alt="Chomkaitala SC official jersey"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-200 sm:text-xs">Official Jersey</p>
              <p className="mt-1 text-sm text-slate-200">
                {sponsor.name} proudly powers our match-day kit.
              </p>
            </div>
          </div>
        </section>

      </main>

      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setSelectedPlayer(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] border border-yellow-400/30 bg-gradient-to-br from-[#061126] via-[#071a3f] to-black shadow-[0_0_45px_rgba(250,204,21,0.22)]"
            >
              <button
                onClick={() => setSelectedPlayer(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/70 px-3 py-1 text-2xl leading-none text-white hover:bg-black"
              >
                ×
              </button>
              <img src={selectedPlayer.image} alt={selectedPlayer.name} className="h-80 w-full object-cover" />
              <div className="p-7">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-300">{selectedPlayer.title}</p>
                <h2 className="mt-2 text-4xl font-black">{selectedPlayer.name}</h2>
                <p className="mt-2 text-xl text-slate-200">{selectedPlayer.role}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <InfoCard label="Hobby" value={selectedPlayer.hobby} />
                  <InfoCard label="Famous Quote" value={`“${selectedPlayer.quote}”`} />
                </div>
                <div className="mt-6">
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-yellow-500/80">Strengths</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedPlayer.strengths.map((strength) => (
                      <span key={strength} className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-200">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {pendingUploads.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={cancelPending}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] border border-yellow-400/30 bg-gradient-to-br from-[#061126] via-[#071a3f] to-black p-6 shadow-[0_0_45px_rgba(250,204,21,0.22)] sm:p-7"
            >
              <div className="text-center">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-200 sm:text-sm">Preview</p>
                <h2 className="mt-2 text-2xl font-black text-yellow-300 sm:text-3xl">
                  Check before adding
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-slate-300">
                  Tap × on any photo to drop it. Hit <strong className="text-yellow-200">Add to gallery</strong> when you&apos;re happy.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {pendingUploads.map((item, i) => (
                  <div
                    key={item.url}
                    className="relative aspect-square overflow-hidden rounded-2xl border border-yellow-400/25 bg-black/40"
                  >
                    <img src={item.url} alt={`Pending upload ${i + 1}`} className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePending(i)}
                      disabled={isPublishing}
                      aria-label="Remove this photo"
                      className="absolute right-1.5 top-1.5 grid h-7 w-7 place-items-center rounded-full bg-black/80 text-lg leading-none text-white shadow-lg hover:bg-red-500 disabled:opacity-40"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={cancelPending}
                  disabled={isPublishing}
                  className="rounded-2xl border border-yellow-400/30 bg-black/60 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-yellow-300 hover:text-white disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmPending}
                  disabled={isPublishing}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black text-black shadow-[0_0_25px_rgba(250,204,21,0.35)] transition ${
                    isPublishing
                      ? "cursor-wait bg-yellow-300/70"
                      : "bg-yellow-400 hover:bg-yellow-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.5)]"
                  }`}
                >
                  {isPublishing ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                      Publishing…
                    </>
                  ) : (
                    <>Publish {pendingUploads.length} to gallery</>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto((p) => (p === null ? null : (p - 1 + allPhotos.length) % allPhotos.length));
              }}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 px-4 py-2 text-2xl leading-none text-white hover:bg-black sm:left-8"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto((p) => (p === null ? null : (p + 1) % allPhotos.length));
              }}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 px-4 py-2 text-2xl leading-none text-white hover:bg-black sm:right-8"
            >
              ›
            </button>
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full bg-black/70 px-3 py-1 text-2xl leading-none text-white hover:bg-black"
            >
              ×
            </button>
            <motion.img
              key={selectedPhoto}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              src={allPhotos[selectedPhoto]}
              alt={selectedPhoto >= galleryImages.length ? `Fan upload ${selectedPhoto - galleryImages.length + 1}` : `CSC moment ${selectedPhoto + 1}`}
              className="max-h-[90vh] max-w-[95vw] rounded-2xl border border-yellow-400/30 object-contain shadow-[0_0_45px_rgba(250,204,21,0.22)]"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-1 text-xs font-bold text-yellow-200">
              {selectedPhoto + 1} / {allPhotos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ClubLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative grid place-items-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 p-[3px] shadow-[0_0_45px_rgba(250,204,21,0.55)] ${className}`}
    >
      <div
        className="relative grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-[#061126] via-[#0a1f4a] to-black"
        style={{ containerType: "size" }}
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden focusable="false">
          <defs>
            <path id="csc-arc-top" d="M 14 50 A 36 36 0 0 1 86 50" fill="none" />
          </defs>
          <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(250,204,21,0.55)" strokeWidth="0.7" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(250,204,21,0.25)" strokeWidth="0.4" />
          <text fill="#fde68a" fontSize="8.5" fontWeight="900" letterSpacing="1.6">
            <textPath href="#csc-arc-top" startOffset="50%" textAnchor="middle">
              CHOMKAITALA SC
            </textPath>
          </text>
          <polygon points="20,50 24,48 22,52" fill="#facc15" />
          <polygon points="80,50 76,48 78,52" fill="#facc15" />
          <polygon points="50,82 47,76 53,76" fill="#facc15" />
        </svg>
        <div className="relative flex flex-col items-center">
          <span
            className="bg-gradient-to-b from-yellow-200 via-yellow-300 to-amber-400 bg-clip-text font-black leading-none tracking-tight text-transparent drop-shadow-[0_2px_6px_rgba(250,204,21,0.45)]"
            style={{ fontSize: "28cqh" }}
          >
            CSC
          </span>
          <span className="mt-[5%] h-[1px] w-[28%] bg-yellow-400/70" />
          <span
            className="mt-[3%] font-bold uppercase tracking-[0.25em] text-yellow-200"
            style={{ fontSize: "8cqh" }}
          >
            Estd · 2026
          </span>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle, compact = false }: { title: string; subtitle: string; compact?: boolean }) {
  return (
    <div className={compact ? "mb-6" : "mb-8"}>
      <h2 className="text-3xl font-black text-yellow-300 md:text-4xl">{title}</h2>
      <p className="mt-2 text-slate-300">{subtitle}</p>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-yellow-400/20 bg-black/50 p-5">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-500/80">{label}</p>
      <p className="mt-3 text-slate-200">{value}</p>
    </div>
  );
}
