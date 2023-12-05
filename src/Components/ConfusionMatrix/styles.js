import { styled } from "@mui/system";

export const TableContainer = styled("table")({
  color: "darkslategray",
  aspectRatio: "1/1",
  tableLayout: "fixed",
});

export const TableCell = styled("td")((props) => {
  const { backgroundColor, size } = props;

  return {
    backgroundColor: `rgb(20, 146, 230, ${backgroundColor})`,
    padding: 8,
    color: backgroundColor > 0.5 && "white",
    minWidth: "30px",
    minHeigth: "30px",
    width: "50px",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    roll: "gridcell",
    border: "1px solid gray",
  };
});

export const TableLabels = styled("td")({
  padding: "6px",
  maxWidth: "200px",
  border: "1px solid gray",
});

export const Scale = styled("div")({
  minWidth: "1rem",
  height: "100%",
  background: "linear-gradient(rgb(20, 146, 230, 1),rgb(20, 146, 230, 0))",
  marginLeft: "20px",
});
