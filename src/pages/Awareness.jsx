import { useState } from "react";
import { Search, X, CheckCircle2 } from "lucide-react";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const getYouTubeEmbedUrl = (videoUrl) => {
  try {
    const url = new URL(videoUrl);
    const host = url.hostname.replace(/^www\./, "");
    let videoId;

    if (host === "youtu.be") {
      videoId = url.pathname.slice(1).split("/")[0];
    } else if (
      ["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)
    ) {
      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v");
      } else {
        videoId = url.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1];
      }
    }

    return videoId && /^[\w-]{11}$/.test(videoId)
      ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`
      : null;
  } catch {
    return null;
  }
};

const readCompletedVideos = () => {
  if (typeof window === "undefined" || !window.localStorage) {
    return [];
  }

  try {
    const savedVideos = window.localStorage.getItem("completedVideos");
    return savedVideos ? JSON.parse(savedVideos) : [];
  } catch {
    return [];
  }
};

const Awareness = () => {
  const [search, setSearch] = useState("");
  const { language } = useLanguage();

  const [category, setCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [completed, setCompleted] = useState(() => readCompletedVideos());

  const t = translations[language].awareness;

  const categoryTranslations = {
    Phishing: {
      en: "Phishing",
      hi: "फिशिंग",
    },
    "OTP Fraud": {
      en: "OTP Fraud",
      hi: "OTP धोखाधड़ी",
    },
    "Banking Fraud": {
      en: "Banking Fraud",
      hi: "बैंकिंग धोखाधड़ी",
    },
    "UPI Fraud": {
      en: "UPI Fraud",
      hi: "UPI धोखाधड़ी",
    },
    Passwords: {
      en: "Passwords",
      hi: "पासवर्ड",
    },
    "Social Engineering": {
      en: "Social Engineering",
      hi: "सोशल इंजीनियरिंग",
    },
    "Fake Websites": {
      en: "Fake Websites",
      hi: "नकली वेबसाइट",
    },
    "Shopping Fraud": {
      en: "Shopping Fraud",
      hi: "शॉपिंग धोखाधड़ी",
    },
    "Network Security": {
      en: "Network Security",
      hi: "नेटवर्क सुरक्षा",
    },
    "Job Scams": {
      en: "Job Scams",
      hi: "जॉब स्कैम",
    },
    "QR Scams": {
      en: "QR Scams",
      hi: "QR स्कैम",
    },
    "Social Media": {
      en: "Social Media",
      hi: "सोशल मीडिया",
    },
    Malware: {
      en: "Malware",
      hi: "मैलवेयर",
    },
  };

  const getCategoryLabel = (categoryName) => {
    if (categoryName === "All") {
      return t.all;
    }

    return (
      categoryTranslations[categoryName]?.[language] ||
      categoryName
    );
  };

  const categories = [
    "All",
    ...new Set(videos.map((video) => video.category)),
  ];

  const filteredVideos = videos.filter((video) => {
    const title = video.title[language].toLowerCase();
    const description =
      video.description[language].toLowerCase();

    const query = search.toLowerCase();

    const matchesSearch =
      title.includes(query) ||
      description.includes(query);

    const matchesCategory =
      category === "All" ||
      category === video.category;

    return matchesSearch && matchesCategory;
  });

  const markCompleted = (id) => {
    const updated = completed.includes(id)
      ? completed
      : [...completed, id];

    setCompleted(updated);

    if (typeof window !== "undefined" && window.localStorage) {
      try {
        window.localStorage.setItem(
          "completedVideos",
          JSON.stringify(updated)
        );
      } catch {
        // Ignore storage errors so the app still works in restricted environments.
      }
    }
  };

  // ================= PROGRESS =================

  const totalVideos = videos.length;

  const completedVideos = completed.filter((id) =>
    videos.some((video) => video.id === id)
  ).length;

  const progress =
    totalVideos === 0
      ? 0
      : Math.round(
          (completedVideos / totalVideos) * 100
        );

  const isTrainingComplete =
    completedVideos === totalVideos && totalVideos > 0;
  const selectedVideoEmbedUrl = selectedVideo
    ? getYouTubeEmbedUrl(selectedVideo.video)
    : null;

  return (
    <div className="min-h-screen">

      {/* ================= HEADER ================= */}

      <section className="border-b border-slate-200 py-16 dark:border-slate-800">

        <div className="mx-auto max-w-7xl px-6">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
            {t.badge}
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            {t.title}
          </h1>

          <p className="mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
            {t.subtitle}
          </p>

          {/* ================= SEARCH ================= */}

          <div className="mt-8 flex max-w-xl items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">

            <Search
              size={19}
              className="shrink-0 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder={t.search}
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-slate-400 transition hover:text-slate-700 dark:hover:text-white"
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}

          </div>

          {/* ================= CATEGORY FILTER ================= */}

          <div className="mt-5 flex flex-wrap gap-2">

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  category === item
                    ? "bg-cyan-500 text-slate-950 shadow-sm"
                    : "border border-slate-200 text-slate-600 hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-400 dark:hover:border-cyan-500 dark:hover:text-cyan-400"
                }`}
              >
                {getCategoryLabel(item)}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* ================= TRAINING PROGRESS ================= */}

      <section className="border-b border-slate-200 py-8 dark:border-slate-800">

        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">

            <div className="flex flex-wrap items-center justify-between gap-4">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <CheckCircle2 size={24} />
                </div>

                <div>

                  <h2 className="font-bold">
                    {language === "hi"
                      ? "आपकी प्रशिक्षण प्रगति"
                      : "Your Training Progress"}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">

                    {completedVideos} / {totalVideos}{" "}
                    {language === "hi"
                      ? "वीडियो पूरे हुए"
                      : "videos completed"}

                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="text-3xl font-black text-cyan-500">
                  {progress}%
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">

                  {language === "hi"
                    ? "पूर्ण"
                    : "Complete"}

                </p>

              </div>

            </div>

            {/* PROGRESS BAR */}

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700 ease-out"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            {/* COMPLETION MESSAGE */}

            {isTrainingComplete && (
              <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-500">

                ✓{" "}
                {language === "hi"
                  ? "बधाई हो! आपने सभी साइबर सुरक्षा प्रशिक्षण वीडियो पूरे कर लिए हैं।"
                  : "Congratulations! You have completed all cybersecurity awareness videos."}

              </div>
            )}

          </div>

        </div>

      </section>

      {/* ================= VIDEO LIBRARY ================= */}

      <section className="py-16">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

            <div>

              <h2 className="text-2xl font-bold">
                {t.trainingLibrary}
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {filteredVideos.length}{" "}
                {t.learningResources}
              </p>

            </div>

            <div className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">

              {completedVideos}/{totalVideos}{" "}
              {t.completedText}

            </div>

          </div>

          {/* ================= NO RESULTS ================= */}

          {filteredVideos.length === 0 ? (

            <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900">

                <Search
                  size={24}
                  className="text-slate-400"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold">
                {t.noResults}
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {t.noResultsText}
              </p>

            </div>

          ) : (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredVideos.map((video) => (

                <VideoCard
                  key={video.id}
                  video={video}
                  completed={completed.includes(
                    video.id
                  )}
                  onClick={() =>
                    setSelectedVideo(video)
                  }
                />

              ))}

            </div>

          )}

        </div>

      </section>

      {/* ================= VIDEO MODAL ================= */}

      {selectedVideo && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedVideo(null);
            }
          }}
        >

          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-950">

            {/* CLOSE */}

            <button
              onClick={() =>
                setSelectedVideo(null)
              }
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
              aria-label="Close video"
            >
              <X size={18} />
            </button>

            {/* VIDEO */}

            <div className="aspect-video bg-black">

              {selectedVideoEmbedUrl ? (
                <iframe
                  src={selectedVideoEmbedUrl}
                  title={selectedVideo.title[language]}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <video
                  src={selectedVideo.video}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                  onEnded={() =>
                    markCompleted(
                      selectedVideo.id
                    )
                  }
                />
              )}

            </div>

            {/* DETAILS */}

            <div className="p-6">

              <div className="flex flex-wrap items-center gap-2">

                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500">

                  {getCategoryLabel(
                    selectedVideo.category
                  )}

                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">

                  {selectedVideo.duration}

                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">

                  {selectedVideo.difficulty ===
                  "Easy"
                    ? language === "hi"
                      ? "आसान"
                      : "Easy"
                    : selectedVideo.difficulty ===
                      "Medium"
                    ? language === "hi"
                      ? "मध्यम"
                      : "Medium"
                    : language === "hi"
                    ? "कठिन"
                    : "Hard"}

                </span>

              </div>

              <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">

                {selectedVideo.title[language]}

              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">

                {selectedVideo.description[language]}

              </p>

              {/* COMPLETION BUTTON */}

              <div className="mt-5">

                {completed.includes(
                  selectedVideo.id
                ) ? (

                  <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-500">

                    <CheckCircle2 size={17} />

                    {language === "hi"
                      ? "वीडियो पूरा हुआ"
                      : "Video Completed"}

                  </div>

                ) : (

                  <button
                    onClick={() => {
                      markCompleted(
                        selectedVideo.id
                      );
                      setSelectedVideo(null);
                    }}
                    className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >

                    {t.complete}

                  </button>

                )}

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Awareness;