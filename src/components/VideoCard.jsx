import { Play, CheckCircle, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const VideoCard = ({
  video,
  completed,
  onClick,
}) => {
  const { language } = useLanguage();

  const title = video.title[language];
  const description = video.description[language];

  const difficulty =
    video.difficulty === "Easy"
      ? language === "hi"
        ? "आसान"
        : "Easy"
      : video.difficulty === "Medium"
      ? language === "hi"
        ? "मध्यम"
        : "Medium"
      : language === "hi"
      ? "कठिन"
      : "Hard";

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60">
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        {video.thumbnail && (
          <img
            src={video.thumbnail}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 opacity-0 transition group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-slate-950 shadow-lg">
            <Play size={24} fill="currentColor" />
          </div>
        </div>

        <div className="absolute left-3 top-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {video.category}
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-slate-950/80 px-2 py-1 text-xs text-white">
          <Clock size={13} />
          {video.duration}
        </div>

        {completed && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
            <CheckCircle size={13} />
            {language === "hi" ? "पूरा हुआ" : "Completed"}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500">
            {difficulty}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>

        <button
          onClick={onClick}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          <Play size={17} fill="currentColor" />

          {language === "hi" ? "वीडियो देखें" : "Watch Video"}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;