import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DestinationCard from "./components/DestinationCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section>
          <h2>Popular Destinations</h2>

          <DestinationCard
            name="Taj Mahal"
            location="Agra, India"
            description="Explore one of India's most iconic historical landmarks."
          />

          <DestinationCard
            name="Goa"
            location="India"
            description="Enjoy beautiful beaches, nature and coastal experiences."
          />

          <DestinationCard
            name="Paris"
            location="France"
            description="Discover art, culture, architecture and iconic landmarks."
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;