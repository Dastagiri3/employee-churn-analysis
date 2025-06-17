
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    department: "Sales",
    totalEmployees: 446,
    attrition: 92,
    attritionRate: 20.6
  },
  {
    department: "Research & Development",
    totalEmployees: 961,
    attrition: 133,
    attritionRate: 13.8
  },
  {
    department: "Human Resources",
    totalEmployees: 63,
    attrition: 12,
    attritionRate: 19.0
  }
];

export const AttritionByDepartment = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-slate-800">Attrition by Department</CardTitle>
        <p className="text-sm text-slate-600">Employee turnover rates across different departments</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="department" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value, name) => [
                name === 'attritionRate' ? `${value}%` : value,
                name === 'attritionRate' ? 'Attrition Rate' : 'Employees Left'
              ]}
            />
            <Bar dataKey="attrition" fill="#ef4444" name="attrition" radius={[4, 4, 0, 0]} />
            <Bar dataKey="attritionRate" fill="#3b82f6" name="attritionRate" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
