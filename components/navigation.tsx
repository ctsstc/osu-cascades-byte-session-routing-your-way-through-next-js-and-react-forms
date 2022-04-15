import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">User</Link>
        </li>
        <li>
          <Link href="/users/123">User 123</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
