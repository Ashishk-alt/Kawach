import { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  PlayCircle,
  BrainCircuit,
  Bot,
  LockKeyhole,
  TriangleAlert,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const h = t.home;

  // -----------------------------
  // TRAINING PROGRESS
  // -----------------------------
  const [completedVideos, setCompletedVideos] = useState(0);

  useEffect(() => {
    const loadProgress = () => {
      const completed = JSON.parse(
        localStorage.getItem("completedVideos") || "[]"
      );

      setCompletedVideos(completed.length);
    };

    loadProgress();

    window.addEventListener("storage", loadProgress);

    return () => {
      window.removeEventListener("storage", loadProgress);
    };
  }, []);

  const totalVideos = 12;

  const progress = Math.min(
    Math.round((completedVideos / totalVideos) * 100),
    100
  );

  return (
    <div className="overflow-hidden">
      {/* ========================================= */}
      {/* HERO */}
      {/* ========================================= */}

      <section className="relative min-h-[calc(100vh-73px)] flex items-center">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute right-10 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
          {/* ========================================= */}
          {/* HERO CONTENT */}
          {/* ========================================= */}

          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-500 dark:text-cyan-400">
              <ShieldCheck size={16} />
              {h.badge}
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {h.title}

              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {h.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              {h.subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/awareness"
                className="group flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                <PlayCircle size={19} />

                {h.startLearning}

                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/assessment"
                className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3.5 font-semibold transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:hover:border-cyan-500 dark:hover:text-cyan-400"
              >
                <BrainCircuit size={19} />

                {h.takeAssessment}
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-500">
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  12+
                </p>

                {h.awarenessVideos}
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  30+
                </p>

                {h.cyberChallenges}
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  2
                </p>

                {h.languages}
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* SECURITY VISUAL */}
          {/* ========================================= */}

          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-lg">
              {/* Outer Circle */}
              <div className="absolute inset-10 rounded-full border border-cyan-500/20" />

              {/* Inner Circle */}
              <div className="absolute inset-20 rounded-full border border-blue-500/20" />

              {/* Center Shield */}
              <div className="absolute inset-32 flex items-center justify-center rounded-3xl border border-cyan-500/30 bg-cyan-500/10 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
                <ShieldCheck
                  size={110}
                  strokeWidth={1.2}
                  className="text-cyan-400"
                />
              </div>

              {/* Lock */}
              <div className="absolute left-2 top-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <LockKeyhole className="text-cyan-400" />
              </div>

              {/* Warning */}
              <div className="absolute right-2 top-1/3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <TriangleAlert className="text-yellow-400" />
              </div>

              {/* Bot */}
              <div className="absolute bottom-20 left-12 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <Bot className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* TRAINING PROGRESS */}
      {/* ========================================= */}

      <section className="border-t border-slate-200 py-16 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 p-8 shadow-xl dark:border-cyan-500/10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* LEFT SIDE */}
              <div className="max-w-xl">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                    <ShieldCheck
                      className="text-cyan-400"
                      size={22}
                    />
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
                    {language === "hi"
                      ? "आपकी प्रशिक्षण प्रगति"
                      : "Your Training Progress"}
                  </p>
                </div>

                <h2 className="text-2xl font-bold sm:text-3xl">
                  {language === "hi"
                    ? "अपनी साइबर सुरक्षा सीखना जारी रखें"
                    : "Keep building your cyber awareness"}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {language === "hi"
                    ? `${completedVideos} में से ${totalVideos} वीडियो पूरे किए गए हैं।`
                    : `${completedVideos} of ${totalVideos} awareness videos completed.`}
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full max-w-md">
                {/* Progress Header */}
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-600 dark:text-slate-300">
                    {language === "hi" ? "प्रगति" : "Progress"}
                  </span>

                  <span className="font-bold text-cyan-500">
                    {progress}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>

                {/* Bottom Info */}
                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {completedVideos}
                    </span>{" "}
                    {language === "hi" ? "पूरे" : "completed"}
                  </div>

                  <Link
                    to="/awareness"
                    className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    {language === "hi"
                      ? "सीखना जारी रखें"
                      : "Continue Learning"}

                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Completion Message */}
            {progress === 100 && (
              <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                🎉{" "}
                {language === "hi"
                  ? "बधाई हो! आपने सभी साइबर सुरक्षा प्रशिक्षण वीडियो पूरे कर लिए हैं।"
                  : "Congratulations! You have completed all cybersecurity awareness videos."}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* FEATURES */}
      {/* ========================================= */}

      <section className="border-t border-slate-200 py-20 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Heading */}
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-500">
              {h.featuresBadge}
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              {h.featuresTitle}
            </h2>

            <p className="mt-4 text-slate-500 dark:text-slate-400">
              {h.featuresSubtitle}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* ========================================= */}
            {/* AWARENESS */}
            {/* ========================================= */}

            <Link
              to="/awareness"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <PlayCircle />
              </div>

              <h3 className="text-xl font-bold">
                {h.awarenessTitle}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {h.awarenessDescription}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-500">
                {h.startWatching}

                <ArrowRight size={15} />
              </span>
            </Link>

            {/* ========================================= */}
            {/* CHALLENGES */}
            {/* ========================================= */}

            <Link
              to="/challenges"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <BrainCircuit />
              </div>

              <h3 className="text-xl font-bold">
                {h.challengeTitle}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {h.challengeDescription}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-500">
                {h.takeChallenge}

                <ArrowRight size={15} />
              </span>
            </Link>

            {/* ========================================= */}
            {/* AI ASSISTANT */}
            {/* ========================================= */}

            <Link
              to="/chatbot"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-purple-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Bot />
              </div>

              <h3 className="text-xl font-bold">
                {h.aiTitle}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {h.aiDescription}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-500">
                {h.askAI}

                <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;