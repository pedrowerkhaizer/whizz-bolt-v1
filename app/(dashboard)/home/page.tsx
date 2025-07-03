import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PiggyBank, 
  AlertTriangle,
  CheckCircle,
  Plus
} from 'lucide-react';
import { CashflowChart } from '@/components/cashflow-chart';
import { BudgetOverview } from '@/components/budget-overview';
import { RecentTransactions } from '@/components/recent-transactions';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Visão geral das suas finanças
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Nova Transação
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Saldo Atual
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ 2.350,00</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Gastos do Mês
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.847,00</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+8%</span> desde o mês passado
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Orçamento Restante
            </CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 503,00</div>
            <p className="text-xs text-muted-foreground">
              21% do orçamento mensal
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Metas Atingidas
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/5</div>
            <p className="text-xs text-muted-foreground">
              60% das metas do mês
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Budget Alert */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <CardTitle className="text-orange-800">Atenção aos Gastos</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-orange-700">
            Você está próximo do limite em <strong>Alimentação</strong>. 
            Gastou R$ 280 de R$ 300 este mês.
          </p>
          <Progress value={93} className="mt-2" />
        </CardContent>
      </Card>

      {/* Charts and Data */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Fluxo de Caixa</CardTitle>
            <CardDescription>
              Projeção dos próximos 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <Suspense fallback={<div>Carregando gráfico...</div>}>
              <CashflowChart />
            </Suspense>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Orçamentos</CardTitle>
            <CardDescription>
              Progresso por categoria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Carregando orçamentos...</div>}>
              <BudgetOverview />
            </Suspense>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Transações Recentes</CardTitle>
          <CardDescription>
            Suas últimas movimentações financeiras
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Carregando transações...</div>}>
            <RecentTransactions />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}