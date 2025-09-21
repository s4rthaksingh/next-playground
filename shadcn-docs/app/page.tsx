import { Button } from "@/components/ui/button";

async function getData() {
  const res = await fetch("/api/hello");
  return res.json();
}

export default async function Home() {
  const resultObject = await getData();
  return (
    <div className="flex justify-center items-center h-screen bg-background text-foreground">
      <div>
        {resultObject.message}
      </div>
    </div>
  );
}
