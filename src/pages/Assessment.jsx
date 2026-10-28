import { useState } from "react";

import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

import assessmentCategories from "../data/questions";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const Assessment = () => {
  const { language } = useLanguage();

  const t = translations[language].assessment;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = selectedCategory?.questions ?? [];
  const question = questions[currentQuestion];

  const questionText = question?.question[language];
  const options = question?.options[language];
  const explanation = question?.explanation[language];

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setSubmitted(true);

    if (selectedAnswer === question.answer) {
      setScore((previous) => previous + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((previous) => previous + 1);
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  const restartAssessment = () => {
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setScore(0);
    setFinished(false);
  };

  const percentage = Math.round(
    (score / (questions.length || 1)) * 100
  );

  const getPerformance = () => {
    if (percentage >= 80) {
      return {
        title: t.excellent,
        message:
          language === "hi"
            ? "आपको सामान्य साइबर खतरों और धोखाधड़ी की अच्छी समझ है।"
            : "You have a strong understanding of common cyber threats and fraud techniques.",
      };
    }

    if (percentage >= 60) {
      return {
        title: t.good,
        message:
          language === "hi"
            ? "आपको कई सामान्य खतरों की जानकारी है, लेकिन कुछ क्षेत्रों में सुधार की आवश्यकता है।"
            : "You understand many common threats, but there are still some areas you should improve.",
      };
    }

    return {
      title: t.improve,
      message:
        language === "hi"
          ? "आपको सामान्य साइबर धोखाधड़ी तकनीकों के बारे में और सीखना चाहिए।"
          : "Your score shows that you should spend more time learning about common cyber fraud techniques.",
    };
  };

  /* ================= RESULT ================= */

  if (!selectedCategory) {
    return (
      <div className="min-h-screen px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
              {t.badge}
            </p>
            <h1 className="mt-3 text-3xl font-black sm:text-4xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
              {t.chooseCategory}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {assessmentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentQuestion(0);
                  setSelectedAnswer(null);
                  setSubmitted(false);
                  setScore(0);
                  setFinished(false);
                }}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                  <ShieldCheck size={23} />
                </span>
                <h2 className="mt-5 text-lg font-bold">
                  {category.name[language]}
                </h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {category.questions.length} {t.questions}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const performance = getPerformance();

    return (
      <div className="min-h-screen px-6 py-16">

        <div className="mx-auto max-w-3xl">

          <div className="mb-8 text-center">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">
              <Trophy
                size={42}
                className="text-cyan-400"
              />
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
              {t.complete}
            </p>

            <h1 className="mt-3 text-4xl font-black sm:text-5xl">
              {performance.title}
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-slate-500 dark:text-slate-400">
              {performance.message}
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl dark:border-slate-800 dark:bg-slate-900/60">

            <div className="text-7xl font-black text-cyan-500">
              {score}/{questions.length}
            </div>

            <p className="mt-2 text-lg text-slate-500">
              {percentage}% {t.score}
            </p>

            <div className="mx-auto mt-8 h-3 max-w-md overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">

              <div
                className="h-full rounded-full bg-cyan-500 transition-all"
                style={{
                  width: `${percentage}%`,
                }}
              />

            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800/70">

                <p className="text-2xl font-bold text-green-500">
                  {score}
                </p>

                <p className="text-sm text-slate-500">
                  {t.correctLabel}
                </p>

              </div>

              <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800/70">

                <p className="text-2xl font-bold text-red-500">
                  {questions.length - score}
                </p>

                <p className="text-sm text-slate-500">
                  {t.incorrectLabel}
                </p>

              </div>

              <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800/70">

                <p className="text-2xl font-bold text-cyan-500">
                  {questions.length}
                </p>

                <p className="text-sm text-slate-500">
                  {t.questions}
                </p>

              </div>

            </div>

            <button
              onClick={restartAssessment}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <RotateCcw size={18} />
              {t.tryAgain}
            </button>

          </div>

        </div>

      </div>
    );
  }

  /* ================= ASSESSMENT ================= */

  return (
    <div className="min-h-screen px-6 py-12">

      <div className="mx-auto max-w-4xl">

        {/* HEADER */}

        <div className="mb-8">

          <div className="flex flex-wrap items-center justify-between gap-4">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
                {t.badge}
              </p>

              <h1 className="mt-2 text-3xl font-black sm:text-4xl">
                {t.title}
              </h1>

            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">

              <ShieldCheck
                size={18}
                className="text-cyan-400"
              />

              {currentQuestion + 1} / {questions.length}

            </div>

          </div>

          {/* PROGRESS */}

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">

            <div
              className="h-full rounded-full bg-cyan-500 transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    questions.length) *
                  100
                }%`,
              }}
            />

          </div>

        </div>

        {/* QUESTION CARD */}

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/60 sm:p-8">

          {/* CATEGORY */}

          <div className="flex flex-wrap items-center justify-between gap-3">

            <span className="rounded-full bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-500">
              {selectedCategory.name[language]}
            </span>

           <span
  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
    question.difficulty === "Easy"
      ? "bg-green-500/10 text-green-500"
      : question.difficulty === "Medium"
      ? "bg-yellow-500/10 text-yellow-500"
      : "bg-red-500/10 text-red-500"
  }`}
>
  {question.difficulty === "Easy"
    ? t.easy
    : question.difficulty === "Medium"
    ? t.medium
    : t.hard}
</span>

          </div>

          {/* QUESTION */}

          <h2 className="mt-7 text-xl font-bold leading-8 sm:text-2xl">
            {questionText}
          </h2>

          {/* OPTIONS */}

          <div className="mt-8 space-y-3">

            {options.map((option, index) => {

              const isSelected =
                selectedAnswer === index;

              const isCorrect =
                index === question.answer;

              const isWrong =
                submitted &&
                isSelected &&
                index !== question.answer;

              let optionStyle =
                "border-slate-200 hover:border-cyan-400 dark:border-slate-700 dark:hover:border-cyan-500";

              if (!submitted && isSelected) {
                optionStyle =
                  "border-cyan-500 bg-cyan-500/10 ring-1 ring-cyan-500";
              }

              if (submitted && isCorrect) {
                optionStyle =
                  "border-green-500 bg-green-500/10";
              }

              if (isWrong) {
                optionStyle =
                  "border-red-500 bg-red-500/10";
              }

              return (
                <button
                  key={index}
                  disabled={submitted}
                  onClick={() =>
                    setSelectedAnswer(index)
                  }
                  className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${optionStyle}`}
                >

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                      submitted && isCorrect
                        ? "bg-green-500 text-white"
                        : isWrong
                        ? "bg-red-500 text-white"
                        : isSelected
                        ? "bg-cyan-500 text-slate-950"
                        : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    }`}
                  >
                    {String.fromCharCode(
                      65 + index
                    )}
                  </span>

                  <span className="flex-1 pt-1 text-sm leading-6">
                    {option}
                  </span>

                  {submitted && isCorrect && (
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-green-500"
                    />
                  )}

                  {isWrong && (
                    <XCircle
                      size={20}
                      className="mt-1 shrink-0 text-red-500"
                    />
                  )}

                </button>
              );
            })}

          </div>

          {/* FEEDBACK */}

          {submitted && (

            <div
              className={`mt-6 rounded-2xl border p-5 ${
                selectedAnswer === question.answer
                  ? "border-green-500/30 bg-green-500/5"
                  : "border-red-500/30 bg-red-500/5"
              }`}
            >

              <div className="flex items-start gap-3">

                {selectedAnswer === question.answer ? (

                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-green-500"
                    size={21}
                  />

                ) : (

                  <AlertTriangle
                    className="mt-0.5 shrink-0 text-red-500"
                    size={21}
                  />

                )}

                <div>

                  <h3
                    className={`font-bold ${
                      selectedAnswer === question.answer
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {selectedAnswer === question.answer
                      ? t.correct
                      : t.incorrect}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {explanation}
                  </p>

                </div>

              </div>

            </div>
          )}

          {/* ACTION */}

          <div className="mt-8 flex justify-end">

            {!submitted ? (

              <button
                disabled={selectedAnswer === null}
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t.submit}

                <ArrowRight size={18} />

              </button>

            ) : (

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >

                {currentQuestion === questions.length - 1
                  ? t.result
                  : t.next}

                <ArrowRight size={18} />

              </button>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Assessment;