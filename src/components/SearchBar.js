import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function SearchBar({ berries, searchTerm, setSearchTerm }) {
  return (
    <Autocomplete
      freeSolo
      options={berries.map((b) => b.name)}
      value={searchTerm}
      onInputChange={(event, newValue) => setSearchTerm(newValue)}
      renderInput={(params) => (
        <TextField {...params} size="small" label="Search" variant="outlined" />
      )}
    />
  );
}
