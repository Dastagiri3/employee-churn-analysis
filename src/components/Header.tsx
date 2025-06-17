
import { Users, BarChart } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">HR Analytics</h1>
              <p className="text-sm text-slate-500">Employee Attrition Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-600">
            <BarChart className="h-5 w-5" />
            <span className="text-sm font-medium">IBM HR Dataset</span>
          </div>
        </div>
      </div>
    </header>
  );
};
