'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ResponsiveBar = dynamic(
    () => import('@nivo/bar').then(mod => mod.ResponsiveBar),
    { ssr: false }
  );
  
const data = [
  { categoria: 'Aprovados', valor: 75 },
  { categoria: 'Reprovados por nota', valor: 20 },
  { categoria: 'Reprovados por infrequência', valor: 5 },
];

const Grafico = () => (
  <div style={{ height: 400 }}>
    <ResponsiveBar
      data={data}
      keys={['valor']}
      indexBy="categoria"
      margin={{ top: 50, right: 30, bottom: 10, left: 50 }}
      padding={0.4}
      layout="vertical"
      axisBottom={{
        tickSize: 5,
        tickPadding: 10,
        legendPosition: 'middle',
        legendOffset: 40,
        tickRotation: 20,  
      }}
      
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors="#4C6CA8"
      borderRadius={6}
      enableGridY={true}
      isInteractive={true} //tooltip
      axisLeft={{
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      
      labelTextColor="#ffffff"
      labelSkipWidth={20}
      labelSkipHeight={20}
      theme={{
        labels: {
          text: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        },
        tooltip: {
          container: {
            fontSize: '14px',
          },
        },
      }}
      
    />
  </div>
);

export default Grafico;
