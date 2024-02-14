import { HeroSec } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Navbar />
      <div className="flex flex-col gap-4">
        <HeroSec />
        <Projects />
      </div>
    </main>
  );
}
