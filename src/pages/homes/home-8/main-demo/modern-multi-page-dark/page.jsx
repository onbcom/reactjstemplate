import Footer2 from "@/components/footers/Footer2";

import Header8 from "@/components/headers/Header8";
import Home8 from "@/components/homes/home-8";
import Hero1 from "@/components/homes/home-8/heros/Hero1";
import { modernMultipageDark } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 8 Main Demo MultiPage Dark || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home8MainDemoMultiPageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-modern">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header8 links={modernMultipageDark} />
            </nav>
            <main id="main">
              <section
                className="home-section bg-dark-1 light-content parallax-mousemove-scene scrollSpysection"
                id="home"
              >
                <Hero1 />
              </section>

              <Home8 dark />
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer2 />
            </footer>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
