"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const manager = {
  name: "Arun Dutta",
  title: "Manager Saab",
  role: "Manager / Motivation Officer",
  hobby: "Demanding unlimited halftime chai",
  quote: "Give me chai, I will give you tactics.",
  image: "/images/arun.png",
  strengths: ["Motivation", "Team bonding", "Sponsor hunting"],
};

const players = [
  {
    name: "Suman",
    title: "Captain Fantastic",
    role: "Captain / Midfield General",
    hobby: "Creating strategies during chai breaks",
    quote: "Pressure is temporary, captaincy is permanent.",
    image: "/images/suman.png",
    strengths: ["Leadership", "Passing", "Calm under pressure"],
  },
  {
    name: "Tintin",
    title: "Adventure Mode",
    role: "Winger / Dribble Department",
    hobby: "Inventing new ways to nutmeg defenders",
    quote: "Why pass when you can dribble?",
    image: "/images/tintin.png",
    strengths: ["Dribbling", "Creativity", "Fearlessness"],
  },
  {
    name: "Shrish",
    title: "Goal Magnet",
    role: "Striker / Finishing School",
    hobby: "Practising celebrations more than shots",
    quote: "Goals are my love language.",
    image: "/images/shrish.png",
    strengths: ["Finishing", "Movement", "Confidence"],
  },
  {
    name: "Abesh",
    title: "Energy Spark",
    role: "Forward / Speed Department",
    hobby: "Outrunning defenders before they realise",
    quote: "If in doubt, sprint it out.",
    image: "/images/abesh.png",
    strengths: ["Pace", "Stamina", "Finishing"],
  },
  {
    name: "Raika",
    title: "Pace Specialist",
    role: "Winger / Speed Lane",
    hobby: "Counting how many defenders he leaves behind",
    quote: "Catch me if you can.",
    image: "/images/raika.png",
    strengths: ["Acceleration", "Crossing", "Dribbling"],
  },
  {
    name: "Debasmit",
    title: "Set Piece Wizard",
    role: "Midfield / Free Kick Department",
    hobby: "Drawing invisible lines around the wall",
    quote: "Give me a free kick, I will give you a goal.",
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
    role: "Midfield / Engine Room",
    hobby: "Running the full 90 and asking for extra time",
    quote: "Tired is just a state of mind.",
    image: "/images/subhrangsu.png",
    strengths: ["Stamina", "Box-to-box", "Work rate"],
  },
  {
    name: "Sumit",
    title: "Tactical Think Tank",
    role: "Midfield / Strategy Department",
    hobby: "Planning formations that only he understands",
    quote: "We do not park the bus. We decorate it.",
    image: "/images/sumit.png",
    strengths: ["Vision", "Team talk", "Long-range hope"],
  },
  {
    name: "Arindom",
    title: "Style Master",
    role: "Midfield / Flair Department",
    hobby: "Dribble first, think later",
    quote: "Football is art. I am the brush.",
    image: "/images/arindom.png",
    strengths: ["Dribbling", "Flair", "First touch"],
  },
  {
    name: "Sandipan",
    title: "Cool Anchor",
    role: "Defender / Composure Department",
    hobby: "Reading the game like a Sunday newspaper",
    quote: "Calm wins games.",
    image: "/images/sandipan.png",
    strengths: ["Positioning", "Reading the game", "Aerial duels"],
  },
];

const sponsor = {
  name: "Bahar",
  title: "Sponsor Legend",
  role: "Official Sponsor / Jersey Department",
  tagline: "Proudly supporting jerseys, team confidence, and the belief that good looks can add at least 10% performance.",
  quote: "Jersey first, trophy next.",
};

const matches = [
  {
    name: "Group Match",
    opponent: "TBD Warriors",
    date: "May 9, 2026",
    time: "3 PM Onwards",
    venue: "Saikat Soccer League Ground",
  },
  {
    name: "Final Match",
    opponent: "TBD",
    date: "May 9, 2026",
    time: "4 PM Onwords",
    venue: "Saikat Soccer League Ground",
  },
];

const fanTalk = [
  "Chomkaitala SC is not just a team, it is an emotion.",
  "Manager Arun needs only chai and belief.",
  "This squad has depth, drama, and dangerous confidence.",
];

export default function ChomkaitalaSCFanPortal() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [fanName, setFanName] = useState("");
  const [fanMessage, setFanMessage] = useState("");
  const [messages, setMessages] = useState(fanTalk);

  const totalPlayers = useMemo(() => players.length, []);

  function submitFanTalk(e) {
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,27,59,0.9),_transparent_35%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(115deg,_transparent_0%,_rgba(250,204,21,0.18)_45%,_transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <p className="mb-3 inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-200 shadow-[0_0_25px_rgba(250,204,21,0.18)]">
                Official Unofficial Fan Zone
              </p>
              <h1 className="text-4xl font-black tracking-tight md:text-7xl">
                Chomkaitala <span className="text-yellow-300">Sporting Club</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-200 md:text-xl">
                One team. One dream. Unlimited chai. Welcome to the home of players, fans, sponsors, match drama, and tactical confidence.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <Stat icon="🎩" label="Manager" value="1" />
                <Stat icon="👥" label="Squad" value={`${totalPlayers}`} />
                <Stat icon="🏆" label="Target" value="Champion" />
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="overflow-hidden rounded-[2rem] border border-yellow-400/30 bg-[#061126]/70 shadow-[0_0_40px_rgba(250,204,21,0.18)] backdrop-blur"
            >
              <div className="relative h-72 overflow-hidden bg-black md:h-96">
                <img
                  src="/images/Jersey.jpeg"
                  alt="Chomkaitala SC official jersey"
                  className="h-full w-full object-contain"
                />
                <div className="absolute left-4 top-4 rounded-full border border-yellow-400/40 bg-black/60 px-3 py-1 text-xs font-black uppercase tracking-[0.3em] text-yellow-200">
                  Official Jersey
                </div>
              </div>
              <div className="rounded-b-[2rem] bg-black/70 p-6">
                <h2 className="text-2xl font-black text-yellow-300 md:text-3xl">CSC Match Day Mission</h2>
                <p className="mt-3 text-slate-200">
                  Play hard, support louder, respect everyone, and make sure the jersey looks good in every team photo.
                </p>
                <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-100">
                  Manager: <strong>{manager.name}</strong> · Sponsor: <strong>{sponsor.name}</strong>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-12">
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
          <SectionHeader title="The Manager" subtitle="The brain, the chai-runner, the motivation department." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <motion.button
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPlayer(manager)}
              className="group overflow-hidden rounded-[1.75rem] border border-yellow-400/25 bg-[#071a3f]/65 text-left shadow-xl backdrop-blur transition hover:border-yellow-300/60 hover:shadow-[0_0_35px_rgba(250,204,21,0.2)]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={manager.image}
                  alt={manager.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black">{manager.name}</h3>
                  <p className="text-sm font-semibold text-yellow-200">{manager.title}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-200">{manager.role}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-yellow-500/80">Tap for details</p>
              </div>
            </motion.button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-[2rem] border border-yellow-400/25 bg-[#071a3f]/65 p-6 shadow-xl backdrop-blur">
            <SectionHeader title="Match Schedule" subtitle="Only two matches. Full pressure. Full entertainment." compact />
            <div className="space-y-4">
              {matches.map((match) => (
                <div key={match.name} className="rounded-3xl border border-yellow-400/20 bg-black/70 p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">{match.name}</p>
                  <h3 className="mt-2 text-2xl font-black">CSC vs {match.opponent}</h3>
                  <p className="mt-3 text-slate-200">{match.date} · {match.time}</p>
                  <p className="text-yellow-200/80">{match.venue}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-yellow-400/25 bg-[#071a3f]/65 p-6 shadow-xl backdrop-blur">
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
        </div>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-yellow-400/30 bg-gradient-to-br from-yellow-400/15 via-[#071a3f]/70 to-black p-6 shadow-[0_0_40px_rgba(250,204,21,0.18)] sm:p-8">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-200 sm:text-sm">Sponsor Spotlight</p>
              <h2 className="mt-2 text-2xl font-black text-yellow-300 sm:text-3xl md:text-4xl">{sponsor.name} — {sponsor.title}</h2>
              <p className="mt-1 text-sm font-semibold text-yellow-100/80">{sponsor.role}</p>
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
    </div>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-3xl border border-yellow-400/25 bg-[#071a3f]/60 p-5 backdrop-blur shadow-[0_0_25px_rgba(250,204,21,0.08)]">
      <div className="mb-3 text-3xl">{icon}</div>
      <p className="text-3xl font-black text-yellow-300">{value}</p>
      <p className="text-sm text-yellow-200/80">{label}</p>
    </div>
  );
}

function SectionHeader({ title, subtitle, compact = false }) {
  return (
    <div className={compact ? "mb-6" : "mb-8"}>
      <h2 className="text-3xl font-black text-yellow-300 md:text-4xl">{title}</h2>
      <p className="mt-2 text-slate-300">{subtitle}</p>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-yellow-400/20 bg-black/50 p-5">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-500/80">{label}</p>
      <p className="mt-3 text-slate-200">{value}</p>
    </div>
  );
}
