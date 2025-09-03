import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-bold">Welcome to my home page</h1>
      <Link href="/about">Go to about page</Link>
    </>
  );
}
