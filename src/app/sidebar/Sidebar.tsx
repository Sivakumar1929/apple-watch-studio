import Link from "next/link";

export default function Sidebar({ isOpen }: { isOpen: boolean; toggleSidebar: () => void }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:static md:translate-x-0`}
    >
      <div className="p-6 text-lg font-bold border-b border-gray-700">Apple Watch Studio</div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li>
            <Link href="/" className="block p-3 rounded hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/custompreview" className="block p-3 rounded hover:bg-gray-700">
              Custom Preview
            </Link>
          </li>
          <li>
            <Link href="/customize" className="block p-3 rounded hover:bg-gray-700">
              Customize
            </Link>
          </li>
          <li>
            <Link href="/about" className="block p-3 rounded hover:bg-gray-700">
              About Us
            </Link>
          </li>
          <li>
            <a href="/contact" className="block p-3 rounded hover:bg-gray-700">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
