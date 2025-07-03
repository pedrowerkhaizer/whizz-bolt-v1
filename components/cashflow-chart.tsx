'use client';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { date: '01/01', entrada: 3000, saida: 2400, saldo: 600 },
  { date: '02/01', entrada: 2800, saida: 2200, saldo: 1200 },
  { date: '03/01', entrada: 2600, saida: 2800, saldo: 1000 },
  { date: '04/01', entrada: 2900, saida: 2500, saldo: 1400 },
  { date: '05/01', entrada: 3200, saida: 2700, saldo: 1900 },
  { date: '06/01', entrada: 2700, saida: 2400, saldo: 2200 },
  { date: '07/01', entrada: 3100, saida: 2600, saldo: 2700 },
];

export function CashflowChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip 
          formatter={(value, name) => [
            `R$ ${value}`,
            name === 'entrada' ? 'Entrada' : name === 'saida' ? 'Saída' : 'Saldo'
          ]}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="entrada" 
          stroke="#10b981" 
          strokeWidth={2}
          name="Entrada"
        />
        <Line 
          type="monotone" 
          dataKey="saida" 
          stroke="#ef4444" 
          strokeWidth={2}
          name="Saída"
        />
        <Line 
          type="monotone" 
          dataKey="saldo" 
          stroke="#3b82f6" 
          strokeWidth={3}
          name="Saldo"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}