'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ResponsivePie = dynamic(
  () => import('@nivo/pie').then(mod => mod.ResponsivePie),
  { ssr: false }
);

interface PieData {
  id: string;
  label: string;
  value: number;
  color: string;
}

interface GraficoNivoProps {
  legenda: PieData[];
}

const GraficoComp: React.FC<GraficoNivoProps> = ({ legenda }) => {
  const total = legenda.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div style={{ height: 400 }}>
      {legenda.length > 0 ? (
        <ResponsivePie
        data={legenda}
        margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
        padAngle={0}
        cornerRadius={0}
        enableArcLabels={true}
        sortByValue={true}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#ffffff"
        arcLabel={(d) => `${((d.value / total) * 100).toFixed(0)}%`}
        colors={legenda.map(item => item.color)}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0]] }}
        enableArcLinkLabels={false}
        
        theme={{
          labels: {
            text: {
              fontSize: 20,
              fill: '#ffffff',
            },
          },
        }}
      />
      
      ) : (
        <p>Carregando gráfico...</p>
      )}
    </div>
  );
};

export default GraficoComp;
