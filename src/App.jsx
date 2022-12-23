import {
  Navbar,
  Hero,
  Stats,
  CardDeal,
  Billings,
  Business,
  Clients,
  CTA,
  FeedbackCard,
  GetStarted,
  Testimonials,
  Footer,
} from "./components/index";

import styles from "./style";

const App = () => (
  <div className="w-full overflow-hidden bg-primary">
    {/* Navbar */}
    <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    {/* Hero */}
    <div className={`bg-primary ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    {/* Sections */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />

        <Business />

        <Billings />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);
export default App;
