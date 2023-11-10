import { styled } from "@mui/system";

export const TableContainer = styled("table")({
  color: "darkslategray",
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
  };
});

export const TableLabels = styled("td")({
  backgroundColor: "#ddd",
  minWidth: "30px",
  height: "30px",
});

export const Scale = styled("div")({
  minWidth: "1rem",
  height: "100%",
  background: "linear-gradient(rgb(20, 146, 230, 1),rgb(20, 146, 230, 0))",
  marginLeft: "20px",
});
