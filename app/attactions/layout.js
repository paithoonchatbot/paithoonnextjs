import Link from 'next/link';
import './style.css';

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
          <ul>
           <li>
                    <Link href="/attactions">Home</Link>
          </li>
          <li>
                   <Link href="/attactions/about">About</Link>
          </li>
          </ul>
      </nav>
 
      {children}
    </section>
  )
}