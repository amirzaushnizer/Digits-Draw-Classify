import React from "react";
import { Bar } from "./bar";
import { Card } from "react-bootstrap";

export const Barchart = ({ results }) => {
  return (
    <Card className="res">
      {results.map((chance, index) => {
        return <Bar digit={index} chance={chance} />;
      })}
    </Card>
  );
};
