import Home from "@/components/home/Home";

export default async function HomePage() {
  const res = await fetch(`http://localhost:3000/api/home`);
  const data = await res.json();

  return <Home {...data} />;
}
