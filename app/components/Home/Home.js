import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Hero />
    </div>
  );
}
