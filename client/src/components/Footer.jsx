
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} CivicVoice. Built for better communities.
        </p>
        <p>Report responsibly. Track transparently.</p>
      </div>
    </footer>
  );
}
