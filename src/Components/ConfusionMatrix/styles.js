import { styled } from "@mui/system";

export const TableContainer = styled("table")({
  color: "darkslategray",
});

export const TableCell = styled("td")((props) => {
  const { backgroundColor, size } = props;

  return {
    backgroundColor: `rgb(33, 56, 243, ${backgroundColor})`,
    padding: 8,
    color: backgroundColor > 0.5 && "white",
    minWidth: "10px",
    minHeigth: "10px",
    width: size,
    height: size,
  };
});

export const TableLabels = styled("td")({
  backgroundColor: "rgba(112, 112, 112, 0.64)",
  minWidth: "30px",
  height: "30px",
});

export const Scale = styled("div")({
  minWidth: "1rem",
  height: "100%",
  background: "linear-gradient(rgb(33, 56, 243, 1),rgb(33, 56, 243, 0))",
  marginLeft: "20px",
});
