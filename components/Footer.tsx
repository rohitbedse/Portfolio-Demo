export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Rohit Bedse. Built with Next.js 14 & Tailwind CSS.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-xs text-gray-600">
          <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
