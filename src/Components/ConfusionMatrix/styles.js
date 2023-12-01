import { styled } from "@mui/system";

export const TableContainer = styled("table")({
  color: "darkslategray",
  aspectRatio: "1/1",
  tableLayout: "fixed",
  width: "100%",
});

export const TableCell = styled("td")((props) => {
  const { backgroundColor, size } = props;

  return {
    backgroundColor: `rgb(20, 146, 230, ${backgroundColor})`,
    padding: 8,
    color: backgroundColor > 0.5 && "white",
    minWidth: "10px",
    minHeigth: "10px",
    width: size,
    height: size,
    justifyContent: "center",
    alignItems: "center",
    roll: "gridcell",
  };
});

export const TableLabels = styled("td")({
  border: "1px solid gray",
  padding: "6px",
  // width: "150px",
});

export const Scale = styled("div")({
  minWidth: "1rem",
  height: "100%",
  background: "linear-gradient(rgb(20, 146, 230, 1),rgb(20, 146, 230, 0))",
  marginLeft: "20px",
});
