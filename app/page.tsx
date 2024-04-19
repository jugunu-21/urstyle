import Hero from "@/components/home/hero/Hero";
import Pairing from "@/components/home/pairing/Pairing";
import Benefits from "@/components/home/benefits/Benefit";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pairing />
      <Benefits/>
    </main>

  );
}
