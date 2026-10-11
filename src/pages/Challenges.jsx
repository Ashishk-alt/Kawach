import {
  ShieldAlert,
  ArrowRight,
  Target,
  Zap,
  Brain,
  LockKeyhole,
} from "lucide-react";
import { Link } from "react-router-dom";

const Challenges = () => {
  const challenges = [
    {
      icon: ShieldAlert,
      title: "Spot the Phishing",
      description:
        "Identify suspicious emails, messages and links before they steal your information.",
      difficulty: "Easy",
      color: "cyan",
    },
    {
      icon: Zap,
      title: "Beat the Scam",
      description:
        "Face realistic UPI, OTP and payment fraud scenarios and choose the safest action.",
      difficulty: "Medium",
      color: "yellow",
    },
    {
      icon: LockKeyhole,
      title: "Protect Your Account",
      description:
        "Test your knowledge of passwords, account security and identity protection.",
      difficulty: "Medium",
      color: "blue",
    },
    {
      icon: Brain,
      title: "Cyber Expert Challenge",
      description:
        "Take the complete assessment and test your ability to recognize multiple types of cyber threats.",
      difficulty: "Hard",
      color: "purple",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* HEADER */}

      <section className="border-b border-slate-200 py-16 dark:border-slate-800">

        <div className="mx-auto max-w-7xl px-6">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
            Practice
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Cybersecurity Challenges
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-400">
            Don't just learn about cyber threats. Practice identifying them
            through realistic fraud and scam situations.
          </p>

        </div>

      </section>

      {/* CHALLENGES */}

      <section className="py-16">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 md:grid-cols-2">

            {challenges.map((challenge) => {

              const Icon = challenge.icon;

              return (
                <div
                  key={challenge.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Icon size={24} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800">
                      {challenge.difficulty}
                    </span>

                  </div>

                  <h2 className="mt-6 text-xl font-bold">
                    {challenge.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {challenge.description}
                  </p>

                  <Link
                    to="/assessment"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 transition group-hover:gap-3"
                  >
                    Start Challenge
                    <ArrowRight size={16} />
                  </Link>

                </div>
              );
            })}

          </div>

          {/* CTA */}

          <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center">

            <Target
              size={36}
              className="mx-auto text-cyan-400"
            />

            <h2 className="mt-4 text-2xl font-bold">
              Ready to test yourself?
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
              Take the complete cybersecurity assessment and find out how
              prepared you are against common online scams.
            </p>

            <Link
              to="/assessment"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Start Full Assessment
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Challenges;