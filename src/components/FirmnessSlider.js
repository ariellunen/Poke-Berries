import Slider from "@mui/material/Slider";

const firmnessColors = {
  "very-soft": "#f48fb1",
  soft: "#81d4fa",
  medium: "#ffd54f",
  hard: "#a5d6a7",
  "very-hard": "#ce93d8",
  "super-hard": "#ffcc80",
};

const FirmnessSlider = ({
  marks,
  onFirmnessChange,
  selectedFirmness,
  counts,
}) => {
  const color = firmnessColors[selectedFirmness] || "#1976d2"; // default

  return (
    <Slider
      orientation="vertical"
      min={0}
      max={marks.length - 1}
      step={null}
      marks={marks.map((m) => ({
        ...m,
        label: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
              {m.label}
            </span>
            <span style={{ fontSize: "0.75rem", color: "#999" }}>
              {m.label === "All" ? counts.total : counts[m.label] || 0}
            </span>
          </div>
        ),
      }))}
      valueLabelDisplay="off"
      sx={{
        // paddingTop: "12px",
        paddingBottom: "12px",
        height: "85%",
        color: color,
        "& .MuiSlider-thumb": { backgroundColor: color },
        "& .MuiSlider-track": { backgroundColor: color },
        "& .MuiSlider-rail": { opacity: 0.3 },
        "& .MuiSlider-markLabel": {
          lineHeight: 1.2,
        },
      }}
      onChange={(e, val) => {
        const selected = marks.find((m) => m.value === val);
        if (selected) {
          if (selected.label === "All") {
            onFirmnessChange(null);
          } else {
            onFirmnessChange(selected.label);
          }
        }
      }}
    />
  );
};

export default FirmnessSlider;
