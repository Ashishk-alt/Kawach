import {
  Bot,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Chatbot = () => {
  const { language } = useLanguage();

  const isHindi = language === "hi";

  return (
    <div className="relative min-h-[calc(100vh-73px)] overflow-hidden">

      {/* BACKGROUND EFFECTS */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center justify-center px-6 py-16">

        <div className="w-full max-w-3xl text-center">

          {/* ICON */}

          <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">

            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-500/30 bg-cyan-500/10 shadow-2xl shadow-cyan-500/10">
              <Bot
                size={52}
                strokeWidth={1.4}
                className="text-cyan-400"
              />
            </div>

            <div className="absolute -right-2 -top-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <Sparkles
                size={15}
                className="text-purple-400"
              />
            </div>

          </div>

          {/* BADGE */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-500 dark:text-cyan-400">

            <ShieldCheck size={16} />

            {isHindi
              ? "AI सुरक्षा सहायक"
              : "AI SECURITY ASSISTANT"}

          </div>

          {/* TITLE */}

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">

            {isHindi
              ? "AI सुरक्षा सहायक"
              : "Your AI Security Assistant"}

          </h1>

          <h2 className="mt-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">

            {isHindi
              ? "जल्द आ रहा है"
              : "Coming Soon"}

          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">

            {isHindi
              ? "हमारा AI सुरक्षा सहायक जल्द ही आपके साइबर सुरक्षा सवालों का जवाब देने, खतरों को समझने और सुरक्षित ऑनलाइन व्यवहार सीखने में आपकी मदद करेगा।"
              : "Our AI security assistant is being integrated to help you answer cybersecurity questions, understand online threats, and learn safer digital practices."}

          </p>

          {/* FEATURE CARDS */}

          <div className="mt-10 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400 dark:border-slate-800 dark:bg-slate-900/50">

              <MessageCircle
                size={24}
                className="mx-auto text-cyan-400"
              />

              <h3 className="mt-3 font-bold">

                {isHindi
                  ? "साइबर सवाल"
                  : "Cyber Questions"}

              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">

                {isHindi
                  ? "साइबर सुरक्षा से जुड़े सवाल पूछें।"
                  : "Ask questions about cybersecurity."}

              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900/50">

              <ShieldCheck
                size={24}
                className="mx-auto text-blue-400"
              />

              <h3 className="mt-3 font-bold">

                {isHindi
                  ? "खतरे पहचानें"
                  : "Identify Threats"}

              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">

                {isHindi
                  ? "ऑनलाइन खतरों को बेहतर समझें।"
                  : "Understand common online threats."}

              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-purple-400 dark:border-slate-800 dark:bg-slate-900/50">

              <Sparkles
                size={24}
                className="mx-auto text-purple-400"
              />

              <h3 className="mt-3 font-bold">

                {isHindi
                  ? "AI मार्गदर्शन"
                  : "AI Guidance"}

              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">

                {isHindi
                  ? "व्यक्तिगत सुरक्षा सुझाव प्राप्त करें।"
                  : "Get personalized security guidance."}

              </p>

            </div>

          </div>

          {/* BACK BUTTON */}

          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:hover:border-cyan-500 dark:hover:text-cyan-400"
          >

            <ArrowLeft size={17} />

            {isHindi
              ? "होम पर वापस जाएँ"
              : "Back to Home"}

          </Link>

        </div>

      </div>
    </div>
  );
};

export default Chatbot;