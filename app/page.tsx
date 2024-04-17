import Image from "next/image";
import Header from "./components/home/Home";
import ShowCase from "./components/home/ShowCase";
import FeaturedCategory from "./components/home/FeaturedCat";
import Faq from "./components/faq";

export default function Home() {
  return (
    <main className="">
      <Header />
      <ShowCase />
      <FeaturedCategory />
      <Faq />
    </main>
  );
}
