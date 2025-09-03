import Link from "next/link";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await res.json();

  return (
    <>
      <h1 className="font-bold">Welcome to my home page</h1>
      <Link href="/about">Go to about page</Link>
      {post.title}
      {post.body}
    </>
  );
}
