"use client";

import Delivery from "./components/delivery";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Outreact from "./components/outreach";
import Programs from "./components/programs";
import Together from "./components/together";
import Values from "./components/values";
import Volunteer from "./components/volunteer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Outreact />
      <Values />
      <Programs />
      <Together />
      <Volunteer />
      <Delivery />
      <Footer />
    </main>
  );
}
