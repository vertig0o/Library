import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Container,
} from "@mui/material";
import { IData } from "../Data";

interface SüreçlerProps {
  data: IData[];
}

const Süreçler: React.FC<SüreçlerProps> = ({ data }) => {
  const [selectedProcess, setSelectedProcess] = useState<string | null>(null);

  const handleProcessChange = (value: string) => {
    setSelectedProcess(value);
  };

  return (
    <Container>
      <h1 style={{ color: "white" }}>Süreçler</h1>

      <FormControl component="fieldset">
        <RadioGroup
          aria-label="process"
          name="process"
          value={selectedProcess || ""}
          onChange={(event) => handleProcessChange(event.target.value)}
        >
          {Array.from(new Set(data.map((item) => item.Süreç))).map(
            (uniqueProcess, index) => (
              <FormControlLabel
                key={index}
                value={uniqueProcess}
                control={<Radio />}
                label={
                  <Link
                    to={`/process/${uniqueProcess}`}
                    onClick={() => handleProcessChange(uniqueProcess)}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {uniqueProcess}
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
