import Image from "next/image";
import Header from "./home/page";
import ShowCase from "./home/ShowCase";
import FeaturedCategory from "./home/FeaturedCat";
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
