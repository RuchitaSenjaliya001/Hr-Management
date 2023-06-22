import Navbar from "@/components/MainNavigation/Navbar";
import Sidebar from "@/components/MainNavigation/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex relative">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
