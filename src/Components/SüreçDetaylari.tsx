import React from "react";
import { IData } from "../Data";
import Dashboard from "./Dashboard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Box, Container } from "@mui/material";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

const getIconForMeasurementUnit = (unit: string) => {
  switch (unit.toLowerCase()) {
    case "yüzde":
      return <PercentOutlinedIcon style={{ margin: "0px 0px -5px 5px" }} />;
    case "zaman":
      return (
        <HourglassTopOutlinedIcon style={{ margin: "0px 0px -5px 5px" }} />
      );
    case "para":
      return <AttachMoneyOutlinedIcon style={{ margin: "0px 0px -5px 5px" }} />;
    case "ses":
      return <VolumeUpOutlinedIcon style={{ margin: "0px 0px -5px 5px" }} />;
    case "ton":
      return <ScaleOutlinedIcon style={{ margin: "0px 0px -5px 5px" }} />;
    case "sayı":
      return <NumbersOutlinedIcon style={{ margin: "0px 0px -5px 5px" }} />;
    default:
      return null;
  }
};

const SurecDetaylari: React.FC<{ processData: IData[] }> = ({
  processData,
}) => (
  <Box sx={{ display: "flex" }}>
    <Dashboard />
    <Container>
      {processData.map((item, index) => {
        const temp = item["Yön"].toString().slice(0, 5);

        return (
          <Card key={index} style={{ marginBottom: 16 }}>
            <CardHeader title={item["Gösterge Adı"]} />
            <CardContent>
              <p>
                Yön: {item["Yön"]}
                <>
                  {temp != "artma" ? (
                    <ArrowDownwardOutlinedIcon
                      style={{ margin: "0px 0px -5px 5px" }}
                    />
                  ) : (
                    <ArrowUpwardOutlinedIcon
                      style={{ margin: "0px 0px -5px 5px" }}
                    />
                  )}
                </>
              </p>
              <p>
                Ölçüm Birimi: {item["Ölçüm Birimi"]}
                {getIconForMeasurementUnit(item["Ölçüm Birimi"])}
              </p>
              <p>Süreç: {item.Süreç}</p>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  </Box>
);

export default SurecDetaylari;
