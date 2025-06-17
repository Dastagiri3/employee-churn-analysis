
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KPICards } from "@/components/KPICards";
import { AttritionByDepartment } from "@/components/AttritionByDepartment";
import { AgeDistribution } from "@/components/AgeDistribution";
import { IncomeAnalysis } from "@/components/IncomeAnalysis";
import { SatisfactionMatrix } from "@/components/SatisfactionMatrix";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Employee Attrition Analysis
          </h1>
          <p className="text-slate-600 text-lg">
            Comprehensive analytics to understand and reduce employee turnover
          </p>
        </div>

        <KPICards />

        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="compensation">Compensation</TabsTrigger>
            <TabsTrigger value="satisfaction">Satisfaction</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AttritionByDepartment />
              <AgeDistribution />
            </div>
          </TabsContent>

          <TabsContent value="demographics" className="mt-6">
            <AgeDistribution />
          </TabsContent>

          <TabsContent value="compensation" className="mt-6">
            <IncomeAnalysis />
          </TabsContent>

          <TabsContent value="satisfaction" className="mt-6">
            <SatisfactionMatrix />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
