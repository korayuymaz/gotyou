import Image from "next/image";
import Navbar from "./components/Navbar";
import Divider from "./components/ui/Divider";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Divider />
      <Main />
    </div>
  );
}
