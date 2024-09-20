import Image from "next/image";
import Navbar from "./components/Navbar";
import Divider from "./components/ui/Divider";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Divider />
      <main></main>
    </div>
  );
}
