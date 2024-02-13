import { HeroSec } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Navbar />
      <HeroSec />
    </main>
  );
}
