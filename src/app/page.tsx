import Image from "next/image";
import { HeroParallaxDemo } from "@/components/wrappers/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden p-24">
      <HeroParallaxDemo />
    </main>
  );
}
