const tagDeleteStyle = {
  borderRadius: "0",
  background: "none",
  height: "100%",
  width: "16px",
  margin: "0px",
  px: "3px",
  boxSizing: "content-box",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "red", // Change background color on hover
    color: "white", // Change text color on hover
  },
};

const autoCompleteDeleteStyle = {
  borderRadius: "0",
  background: "none",
  height: "16px",
  width: "16px",
  boxSizing: "content-box",
  color: 'red',
  cursor: "pointer",
};
const autoCompletePopupStyle = {
  borderRadius: "0",
  background: "none",
  height: "22px",
  width: "22px",
  boxSizing: "content-box",
  color: 'gray',
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "none", // Change background color on hover
  },
};

export { tagDeleteStyle, autoCompleteDeleteStyle, autoCompletePopupStyle };
