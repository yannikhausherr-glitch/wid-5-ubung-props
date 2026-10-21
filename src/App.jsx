import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Tabelle from "./Tabelle";
import Header from "./Header";

function App() {
  const [suchbegriff, setSuchbegriff] = useState("");
  const [serviceTypAuswahl, setServiceTypAuswahl] = useState("");
  const [kantonAuswahl, setKantonAuswahl] = useState("");
  console.log("Suchbegriff:", suchbegriff);
  console.log("ServiceTyp:", serviceTypAuswahl);
  console.log("Kanton:", kantonAuswahl);

  // Erzeugt eine Liste aller im Datensatz vorkommenden Kantone für das Auswahlmenü

  return (
    <div className="App">
      <Header
        suchbegriff={suchbegriff}
        setSuchbegriff={setSuchbegriff}
        serviceTypAuswahl={serviceTypAuswahl}
        setServiceTypAuswahl={setServiceTypAuswahl}
        kantonAuswahl={kantonAuswahl}
        setKantonAuswahl={setKantonAuswahl}
      />
      {/* Tabelle Start */}
      <Tabelle
        suchbegriff={suchbegriff}
        kantonAuswahl={kantonAuswahl}
        serviceTypAuswahl={serviceTypAuswahl}
      />
      {/* Tabelle Ende */}
      {/* Footer Start */}
      <Footer
        setSuchbegriff={setSuchbegriff}
        setKantonAuswahl={setKantonAuswahl}
        setServiceTypAuswahl={setServiceTypAuswahl}
      />
      {/* Footer Ende */}
    </div>
  );
}

export default App;
