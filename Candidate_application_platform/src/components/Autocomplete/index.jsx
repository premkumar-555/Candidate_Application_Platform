import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Text from "../Text";
// import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { autoCompleteDeleteStyle, autoCompletePopupStyle, tagDeleteStyle } from "./style";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

const TagDeleteIcon = (props) => (
  <CloseIcon {...props} className="transition" sx={tagDeleteStyle}/>
);

const AutoCompleteDeleteIcon = () => <CloseIcon sx={autoCompleteDeleteStyle} />;

const AutoCompletePopUpIcon = () => (
  <KeyboardArrowDownSharpIcon sx={autoCompletePopupStyle} />
);

export default function CustomAutoComplete({ minWidth, placeholder }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleDelete = (optionToDelete) => () => {
    console.log(optionToDelete)
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((option) => option.title !== optionToDelete.title)
    );
  };

  const handleChange = (event, newValue) => {
    console.log('newValue', newValue);
    setSelectedOptions((pre) => (newValue));
  };

  const isOptionEqualToValue = (option, value) => {
    // Custom comparison logic
    return option?.title === value?.title;
  };

  return (
    <Stack spacing={0} sx={{ width: "auto", minWidth: minWidth }}>
      <Text
        txt={placeholder}
        variant="caption"
        display="block"
        gutterBottom
        sx={{ m: "0", lineHeight: "1.6", fontWeight: "bold" }}
      />
      <Autocomplete
        multiple
        autoHighlight={false}
        id="size-small-outlined"
        size="small"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        value={selectedOptions}
        isOptionEqualToValue={isOptionEqualToValue}
        filterSelectedOptions
        onChange={handleChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              size="small"
              key={index}
              label={option.title}
              {...getTagProps({ index })}
              sx={{ borderRadius: "0", padding: "0" }}
              deleteIcon={<TagDeleteIcon onClick={() => handleDelete(option)}  />}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            id="outlined-basic"
            fontSize="13px"
          />
        )}
        clearIcon={<AutoCompleteDeleteIcon />}
        popupIcon={<AutoCompletePopUpIcon />}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
