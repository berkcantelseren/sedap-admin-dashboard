import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      {/* Message on SM Screens*/}
      <div className="2xl:hidden flex h-screen items-center justify-center text-center p-4">
        <p className="text-xl font-semibold text-gray-700">
          "Please look at this website on a larger screen for the best
          experience.{" "}
          <a
            href="https://www.linkedin.com/in/berkcantelseren/"
            className="text-orange-500 underline underline-offset-4"
          >
            brkcntlsrn
          </a>{" "}
          is working on making this website fully responsive. Come back later!"
          1- Zoom out if you using %110 or some other thing site may noy be
          visible or might be errors around.
        </p>
      </div>

      {/* Main content (only visible on 2xl and larger) */}
      <div className="hidden 2xl:block">
        <Navbar />
        <Sidebar />
        <Hero />
      </div>
    </>
  );
}
