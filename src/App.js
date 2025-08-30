import { useEffect, useState } from "react";
import BerryCard from "./components/BerryCard";
import FirmnessSlider from "./components/FirmnessSlider";
import SearchBar from "./components/SearchBar";

function App() {
  const [berries, setBerries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFirmness, setSelectedFirmness] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBerries = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/berry");
        const data = await res.json();

        const detailed = await Promise.all(
          data.results.map(async (berry) => {
            const resBerry = await fetch(berry.url);
            const berryData = await resBerry.json();

            const resItem = await fetch(berryData.item.url);
            const itemData = await resItem.json();

            return {
              name: berryData.name,
              firmness: berryData.firmness.name,
              flavors: berryData.flavors
                .filter((f) => f.potency > 0)
                .map((f) => f.flavor.name),
              image: itemData.sprites.default,
            };
          })
        );

        setBerries(detailed);
      } catch (err) {
        console.error("Error fetching berries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBerries();
  }, []);

  if (loading) return <p>Loading...</p>;

  const firmnessOrder = [
    "very-soft",
    "soft",
    "medium",
    "hard",
    "very-hard",
    "super-hard",
  ];

  const marks = [
    { value: 0, label: "All" },
    ...firmnessOrder
      .filter((f) => berries.some((b) => b.firmness === f))
      .map((f, i) => ({ value: i + 1, label: f })),
  ];

  const counts = {
    total: berries.length,
  };
  firmnessOrder.forEach((f) => {
    counts[f] = berries.filter((b) => b.firmness === f).length;
  });

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Left: Slider */}
      <div
        style={{
          flex: 1,
          borderRight: "1px solid #ddd",
          paddingRight: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FirmnessSlider
          marks={marks}
          onFirmnessChange={setSelectedFirmness}
          selectedFirmness={selectedFirmness}
          counts={counts}
        />
      </div>

      {/* Right: Header + Search + Rows */}
      <div
        style={{
          flex: 5,
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          overflow: "hidden",
        }}
      >
        {/* Project Header */}
        <div style={{ marginBottom: "20px" }}>
          <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}>
            Berries Pokédex
          </h1>
          <p style={{ margin: 0, color: "#777" }}>
            Explore Pokémon berries by firmness and flavor
          </p>
        </div>

        {/* Search bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "250px" }}>
            <SearchBar
              berries={berries}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>
        </div>

        {/* List of BerryCards */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            paddingRight: "10px",
          }}
        >
          {berries
            .filter(
              (b) =>
                (!selectedFirmness || b.firmness === selectedFirmness) &&
                b.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((berry) => (
              <BerryCard key={berry.name} berry={berry} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
