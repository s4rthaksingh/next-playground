
export default function Home() {
  return (
    <main>
    <section className="flex flex-col justify-center items-center h-full gap-10">
      <div className="text-center text-3xl flex flex-col gap-6">
        <p>The best URL shortener in the world</p>
        <p>We are the most straightforward URL shortener in the world</p>
      </div>
      <div className=" flex gap-10">
      <input type="text" className="bg-gray-200 focus:border border-gray-800 rounded-lg p-2 px-4 text-2xl w-3/4 self-center focus:outline-0" placeholder="Enter a link"/>
      <button className="bg-purple-500 rounded-lg px-6 py-2 text-white font-medium hover:bg-purple-600"> Shorten</button>
      </div>
    </section>
  </main>
  );
}
