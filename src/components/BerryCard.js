export default function BerryCard({ berry }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px 15px",
        backgroundColor: "#fff",
      }}
    >
      {/* Left: image */}
      <img
        src={berry.image}
        alt={berry.name}
        width={40}
        height={40}
        style={{ marginRight: "12px" }}
      />

      {/* Middle: name + firmness */}
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 4px", textTransform: "capitalize" }}>
          {berry.name}
        </h3>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
          Firmness: {berry.firmness}
        </p>
      </div>

      {/* Right: flavors */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          flexWrap: "wrap",
          maxWidth: "40%",
          justifyContent: "flex-end",
        }}
      >
        {berry.flavors.map((f) => (
          <span
            key={f}
            style={{
              backgroundColor: "#eee",
              padding: "4px 8px",
              borderRadius: "12px",
              fontSize: "0.75rem",
            }}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}
