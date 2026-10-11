const Footer = () => {
  return (
   <footer className="border-t border-slate-200 bg-slate-100 px-6 py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

        <div>
         <p className="font-semibold text-slate-900 dark:text-white">
            Cyber<span className="text-cyan-400">Safe</span>
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Cybersecurity Awareness Training Platform
          </p>
        </div>

        <p className="text-sm text-slate-500">
          Learn. Identify. Protect.
        </p>

      </div>
    </footer>
  );
};

export default Footer;