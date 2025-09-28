import Image from "next/image";

export default function Home() {
  return (
    <main>
    <section className="flex justify-center items-center h-full">
      <div className="text-center text-3xl flex flex-col gap-6">
        <p>The best URL shortener in the world</p>
        <p>We are the most straightforward URL shortener in the world</p>
        <input type="text" className="bg-gray-200 focus:border border-gray-800 rounded-lg p-2 px-4 text-2xl w-1/2 self-center focus:outline-0" placeholder="Enter a link"/>
      </div>
    </section>
  </main>
  );
}
