export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="flex flex-col gap-5 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-white/82">Abhijeet Kashide</p>
          <p className="mt-1">Built with React and Framer Motion</p>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/abhiinyou" className="transition hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/abhijeet-kashide" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:abhiinyou.dev@gmail.com" className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
