import { useState, useEffect } from "react";

// Components
import { Grid } from "@mui/material";

// Styles
import { TableContainer, TableCell, TableLabels, Scale } from "./styles";

const ConfusionMatrix = (props) => {
  const { labels, data } = props;

  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);

  useEffect(() => {
    let max = 0;
    let min = 0;
    if (data.length > 0 && data[0].length > 0) {
      data.forEach((row) => {
        row.forEach((col) => {
          if (col > max) max = col;
          if (col < min) min = col;
        });
      });
    }
    setMaxValue(max);
    setMinValue(min);
  }, [data]);

  return (
    <Grid
      container
      sx={{
        padding: "1rem",
      }}
    >
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <TableContainer>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <TableLabels>{labels[rowIndex]}</TableLabels>
                {row.map((col, colIndex) => (
                  <TableCell key={colIndex} backgroundColor={col / maxValue}>
                    {col}
                  </TableCell>
                ))}
              </tr>
            ))}
            <tr>
              <td />
              {labels.map((col, colIndex) => (
                <TableLabels key={colIndex}>{col}</TableLabels>
              ))}
            </tr>
          </tbody>
        </TableContainer>
        <Scale />
        <Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "start", height: "50%" }}
          >
            Max: {maxValue}
          </Grid>
          <Grid item sx={{ display: "flex", alignItems: "end", height: "50%" }}>
            Min: {minValue}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ConfusionMatrix;
