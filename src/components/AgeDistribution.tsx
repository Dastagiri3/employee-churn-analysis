
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { ageGroup: "18-25", total: 95, attrited: 38, retained: 57 },
  { ageGroup: "26-35", total: 543, attrited: 112, retained: 431 },
  { ageGroup: "36-45", total: 469, attrited: 51, retained: 418 },
  { ageGroup: "46-55", total: 263, attrited: 25, retained: 238 },
  { ageGroup: "55+", total: 100, attrited: 11, retained: 89 }
];

export const AgeDistribution = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-slate-800">Age Group Analysis</CardTitle>
        <p className="text-sm text-slate-600">Distribution of employees and attrition by age groups</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="ageGroup" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="retained"
              stackId="1"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.6}
              name="Retained"
            />
            <Area
              type="monotone"
              dataKey="attrited"
              stackId="1"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.6}
              name="Attrited"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
