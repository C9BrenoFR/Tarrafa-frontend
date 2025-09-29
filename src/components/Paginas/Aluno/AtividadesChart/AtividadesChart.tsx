import { AgGauge } from 'ag-charts-react';
import { AgLinearGaugeOptions } from "ag-charts-enterprise";

const atividades = [
  { nome: "Apresentação AC 1", nota: 100, cor: "#7B61FF" },
  { nome: "Fórum 1", nota: 100, cor: "#888888" },
  { nome: "Fórum 3", nota: 50, cor: "#888888" },
  { nome: "Avaliação Presencial", nota: 70, cor: "#888888" },
];

const GaugeBar = ({ label, value, color }: { label: string; value: number; color: string }) => {
  const options: AgLinearGaugeOptions = {
    type: "linear-gauge",
    direction: "horizontal",
    padding: { left: 0, right: 0 },
    value,
    scale: { min: 0, max: 100 },
    bar: { fill: color },
    cornerRadius: 5,
    cornerMode: "container",
  };

  return (
    <div>
      {/* Título e porcentagem lado a lado */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 14,
        }}
      >
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      {/* Container do gauge */}
      <div style={{ height: 200, width: "100%" }}>
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
        borderRadius: 12,
        padding: 24,
        maxWidth: 500,
        width: "100%",
      }}
    >
      {/* Lista de barras */}
      {atividades.map((a, i) => (
        <GaugeBar key={i} label={a.nome} value={a.nota} color={a.cor} />
      ))}
    </div>
  );
};

export default AtividadesChart;
