import React from "react";
import { useOutletContext } from "react-router-dom";

interface ChartProps {
  coinId: string;
}

const Chart = () => {
  const { coinId } = useOutletContext<ChartProps>();
  return <div>Chart</div>;
};

export default Chart;
