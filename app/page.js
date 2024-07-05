import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Banner from "@/components/sections/home1/Banner";
import Story from "@/components/sections/home1/Story";
import News from "@/components/sections/home1/News";

import Menu from "@/components/sections/home1/Menu";
import Shop from "@/components/sections/home1/Shop";
import Gallery from "@/components/sections/home1/Gallery";
import Promotion from "@/components/sections/home1/Promotion";
import Cta from "@/components/sections/home1/Cta";
import Order from "@/components/sections/home1/Order";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <About />
        <Story />
        <Menu />
        <Shop />
        <Gallery />
        <Promotion />
        <Cta />
        <News />
        <Order />
      </Layout>
    </>
  );
}
