import React, { useState } from "react";
import { AgGauge } from "ag-charts-react";
import { AgRadialGaugeOptions } from "ag-charts-enterprise";
import "ag-charts-enterprise";

const GaugeChart = () => {
  const [options, setOptions] = useState<AgRadialGaugeOptions>({
    type: "radial-gauge",

    value: 85,
    scale: {
      min: 0,
      max: 100,
      fill: '#e7e5e4',
    },
    bar: {
      fill: '#374DAA',
    },
    cornerRadius: 99,
    cornerMode: "container",
  });

  return <AgGauge options={options} />;
};

export { GaugeChart };