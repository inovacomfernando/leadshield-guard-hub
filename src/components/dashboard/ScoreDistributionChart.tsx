
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts";

interface ScoreDistributionChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
}

const ScoreDistributionChart: React.FC<ScoreDistributionChartProps> = ({ data }) => {
  return (
    <Card className="glass-card hover-scale">
      <CardHeader>
        <CardTitle>Lead Score Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} leads`, 'Count']} 
                labelFormatter={() => ''}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreDistributionChart;
