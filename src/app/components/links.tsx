'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul className='flex flex-row justify-end gap-x-5 active:border-s-yellow-100'>
        <li className={`link ${pathname === '/' ? ' border-blue-300' : ''} border border-slate-300 px-2 py-1 rounded hover:border-slate-500`}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={`link ${pathname === '/posts' ? ' border-blue-300' : ''} border border-slate-300 px-2 py-1 rounded hover:border-slate-500`}>
          <Link
            href="/posts"
          >
            Post
          </Link>
        </li>
      </ul>
    </nav>
  )
}