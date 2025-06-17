
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { income: 2094, satisfaction: 4, attrition: "Yes" },
  { income: 5993, satisfaction: 2, attrition: "No" },
  { income: 2909, satisfaction: 3, attrition: "Yes" },
  { income: 3468, satisfaction: 3, attrition: "No" },
  { income: 1389, satisfaction: 2, attrition: "Yes" },
  { income: 9991, satisfaction: 4, attrition: "No" },
  { income: 2180, satisfaction: 1, attrition: "Yes" },
  { income: 6142, satisfaction: 4, attrition: "No" },
  { income: 1333, satisfaction: 1, attrition: "Yes" },
  { income: 5390, satisfaction: 3, attrition: "No" },
  { income: 4193, satisfaction: 2, attrition: "No" },
  { income: 8484, satisfaction: 4, attrition: "No" },
  { income: 2993, satisfaction: 1, attrition: "Yes" },
  { income: 7075, satisfaction: 3, attrition: "No" },
  { income: 1639, satisfaction: 2, attrition: "Yes" }
];

export const IncomeAnalysis = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-slate-800">Income vs Job Satisfaction</CardTitle>
        <p className="text-sm text-slate-600">Correlation between monthly income and job satisfaction levels</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              type="number" 
              dataKey="income" 
              name="Monthly Income"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <YAxis 
              type="number" 
              dataKey="satisfaction" 
              name="Job Satisfaction"
              domain={[0.5, 4.5]}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value, name) => [
                name === "income" ? `$${value.toLocaleString()}` : value,
                name === "income" ? "Monthly Income" : "Job Satisfaction"
              ]}
            />
            <Scatter name="Employees" data={data} fill="#3b82f6">
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.attrition === "Yes" ? "#ef4444" : "#10b981"}
                  fillOpacity={0.7}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
        <div className="flex justify-center mt-4 space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-slate-600">Retained</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-sm text-slate-600">Attrited</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
