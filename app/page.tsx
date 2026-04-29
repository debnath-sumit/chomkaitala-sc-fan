"use client";

import React, { useState } from "react";
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
    role: "Squad Member / Photo Pending",
    hobby: "Avoiding the team photographer",
    quote: "Picture loading… performance already delivered.",
    image: "/images/unknown.png",
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

const supportInfo = {
  paypalHandle: "Sdebnath007",
  paypalEmail: "debnath_sumit@outlook.com",
  suggestedAmounts: [5, 10, 25],
  currencySymbol: "$",
};

const sponsor = {
  name: "BAHAR Indian Restaurant & Catering",
  title: "Sponsor Legend",
  role: "Official Sponsor / Jersey Department",
  tagline: "Proudly supporting jerseys, team confidence, and the belief that good looks can add at least 10% performance.",
  quote: "Jersey first, trophy next.",
};

const announcements = [
  {
    icon: "📣",
    tag: "Fan Perk",
    title: "Special Discount from Bahar",
    body: "Show your CSC fan support and unlock an exclusive discount from our official sponsor Bahar.",
    endsOn: "May 8, 2026",
  },
];

const matches = [
  {
    name: "Group Match",
    opponent: "Old Monk",
    date: "May 9, 2026",
    time: "3 PM Onwards",
    venue: "Doyle Park",
    address: "8175 Regents Rd, San Diego, CA 92122",
  },
  {
    name: "Final Match",
    opponent: "TBD",
    date: "May 9, 2026",
    time: "4 PM Onwords",
    venue: "Doyle Park",
    address: "8175 Regents Rd, San Diego, CA 92122",
  },
];

const fanTalk = [
  "Chomkaitala SC is not just a team, it is an emotion.",
  "Manager Arun and TD Shantanu already decorate the strategies with their vision.",
  "This squad has depth, drama, and dangerous confidence, but fitness is missing ",
];

export default function ChomkaitalaSCFanPortal() {
  const [selectedPlayer, setSelectedPlayer] = useState<TeamMember | null>(null);
  const [fanName, setFanName] = useState("");
  const [fanMessage, setFanMessage] = useState("");
  const [messages, setMessages] = useState(fanTalk);

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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,27,59,0.9),_transparent_35%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(115deg,_transparent_0%,_rgba(250,204,21,0.18)_45%,_transparent_70%)]" />

        <div className="relative mx-auto max-w-5xl px-5 py-16 text-center md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-200 shadow-[0_0_25px_rgba(250,204,21,0.18)] sm:text-sm">
              Official Unofficial Fan Zone
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
              Chomkaitala <span className="text-yellow-300">Sporting Club</span>
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
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
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
                  <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-bold text-yellow-100 sm:self-auto">
                    <span aria-hidden>⏳</span> Offer ends <strong className="text-yellow-300">{item.endsOn}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

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

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-yellow-400/30 bg-gradient-to-br from-[#071a3f]/80 via-[#061126]/80 to-black p-6 shadow-[0_0_40px_rgba(250,204,21,0.18)] sm:p-8">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-200 sm:text-sm">Support the Squad</p>
              <h2 className="mt-2 text-2xl font-black text-yellow-300 sm:text-3xl md:text-4xl">
                Show some support to the team 💛
              </h2>
              <p className="mt-4 max-w-xl text-slate-200">
                Every fan contribution goes towards jerseys, footballs, halftime snacks, and the team&apos;s growing chai bill. Send a small thank-you through PayPal in seconds.
              </p>
              <p className="mt-4 text-sm text-slate-400">
                PayPal email:{" "}
                <a
                  href={`mailto:${supportInfo.paypalEmail}`}
                  className="font-mono text-yellow-200 underline-offset-2 hover:underline"
                >
                  {supportInfo.paypalEmail}
                </a>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`https://www.paypal.com/paypalme/${supportInfo.paypalHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 text-base font-black text-black shadow-[0_0_25px_rgba(250,204,21,0.35)] transition hover:bg-yellow-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.5)] sm:text-lg"
              >
                <span aria-hidden>💛</span> Support on PayPal
              </a>
              <div className="grid grid-cols-3 gap-2">
                {supportInfo.suggestedAmounts.map((amount) => (
                  <a
                    key={amount}
                    href={`https://www.paypal.com/paypalme/${supportInfo.paypalHandle}/${amount}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-yellow-400/40 bg-black/60 py-3 text-center font-bold text-yellow-200 transition hover:border-yellow-300 hover:bg-black"
                  >
                    {supportInfo.currencySymbol}{amount}
                  </a>
                ))}
              </div>
              <p className="text-center text-xs text-slate-400">
                Amounts in USD · Powered by PayPal
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
