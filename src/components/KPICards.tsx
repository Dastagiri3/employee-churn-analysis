
import { Card, CardContent } from "@/components/ui/card";
import { Users, UserX, ArrowUp, ArrowDown } from "lucide-react";

export const KPICards = () => {
  const kpis = [
    {
      title: "Total Employees",
      value: "1,470",
      change: "+2.3%",
      changeType: "increase",
      icon: Users,
      color: "blue"
    },
    {
      title: "Attrition Rate",
      value: "16.1%",
      change: "-1.2%",
      changeType: "decrease",
      icon: UserX,
      color: "red"
    },
    {
      title: "Employees Left",
      value: "237",
      change: "+5.1%",
      changeType: "increase",
      icon: UserX,
      color: "orange"
    },
    {
      title: "Avg Monthly Income",
      value: "$6,503",
      change: "+3.7%",
      changeType: "increase",
      icon: Users,
      color: "green"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => {
        const IconComponent = kpi.icon;
        const isIncrease = kpi.changeType === "increase";
        
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-600 mb-1">
                    {kpi.title}
                  </p>
                  <p className="text-2xl font-bold text-slate-900">
                    {kpi.value}
                  </p>
                  <div className="flex items-center mt-2">
                    {isIncrease ? (
                      <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${
                      isIncrease ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {kpi.change}
                    </span>
                    <span className="text-sm text-slate-500 ml-1">vs last quarter</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-${kpi.color}-100`}>
                  <IconComponent className={`h-6 w-6 text-${kpi.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
