import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-24">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="dark:invert"
          width={60}
          height={60}
          priority
        />
      </Link>
    </header>
  );
}
