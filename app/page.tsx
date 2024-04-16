import Image from "next/image";
import Header from "./home/page";
import ShowCase from "./home/ShowCase";

export default function Home() {
  return (
    <main className="">
      <Header />
      <ShowCase />
    </main>
  );
}
