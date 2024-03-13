import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Container,
  Box,
} from "@mui/material";
import { IData } from "../Data";

interface SüreçlerProps {
  data: IData[];
}

const Süreçler: React.FC<SüreçlerProps> = ({ data }) => {
  const [selectedProcess, setSelectedProcess] = useState<string | null>(null);

  const handleProcessChange = (value: string | null) => {
    setSelectedProcess(value === selectedProcess ? null : value);
  };

  const handleShowAllProcesses = () => {
    setSelectedProcess(selectedProcess === "All" ? null : "All");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Süreçler</h1>
        <FormControlLabel
          value="All"
          control={
            <Radio
              disabled={selectedProcess !== null && selectedProcess !== "All"}
              checked={selectedProcess === "All"}
              onChange={() => handleShowAllProcesses()}
            />
          }
          label={
            <Link
              to={`/process/All`}
              onClick={handleShowAllProcesses}
              style={{ color: "white", textDecoration: "none", width: "100%" }}
            >
              <Box sx={{ width: "100%" }}>Hepsini Getir</Box>
            </Link>
          }
        />
      </Box>

      <FormControl component="fieldset">
        <RadioGroup
          aria-label="process"
          name="process"
          value={selectedProcess || ""}
          onChange={(event) => handleProcessChange(event.target.value)}
          role="link"
        >
          {Array.from(new Set(data.map((item) => item.Süreç))).map(
            (uniqueProcess, index) => (
              <FormControlLabel
                key={index}
                value={uniqueProcess}
                control={<Radio />}
                checked={selectedProcess === uniqueProcess}
                label={
                  <Link
                    to={`/process/${uniqueProcess}`}
                    onClick={() => handleProcessChange(uniqueProcess)}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>{uniqueProcess}</Box>
                  </Link>
                }
              />
            )
          )}
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default Süreçler;
