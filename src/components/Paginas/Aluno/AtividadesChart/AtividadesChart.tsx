import { AgGauge } from 'ag-charts-react';
import { AgLinearGaugeOptions } from "ag-charts-enterprise";

const atividades = [
  { nome: "Apresentação AC 1", nota: 100 },
  { nome: "Fórum 1", nota: 100 },
  { nome: "Fórum 3", nota: 50 },
  { nome: "Avaliação Presencial", nota: 70 },
];

const GaugeBar = ({ label, value }: { label: string; value: number; }) => {
  const options: AgLinearGaugeOptions = {
    type: "linear-gauge",
    direction: "horizontal",
    padding: { left: 5, right: 10, top: 0 },
    value,
    thickness: 25,
    scale: { min: 0, max: 100 },
    bar: {
      fill: "#374DAA", 
      thickness: 25,
    },
    cornerRadius: 5,
    cornerMode: "container",
    height: 75,
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          fontFamily: "Poppins",
          fontWeight: 500,
        }}
      >
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div style={{ height: 90 }}>
        <AgGauge options={options} />
      </div>
    </div>
  );
};

const AtividadesChart = () => {
  return (
    <div
      style={{
        background: "#fff",
        padding: 0,
        maxWidth: 475,
        width: "100%",
        maxHeight: 225,
      }}
    >
      {atividades.map((a, i) => (
        <GaugeBar key={i} label={a.nome} value={a.nota} />
      ))}
    </div>
  );
};

export default AtividadesChart;
