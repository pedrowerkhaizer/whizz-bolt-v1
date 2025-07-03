'use client';

import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const budgets = [
  { category: 'Alimentação', spent: 280, budget: 300, color: 'bg-red-500' },
  { category: 'Transporte', spent: 150, budget: 200, color: 'bg-yellow-500' },
  { category: 'Lazer', spent: 80, budget: 150, color: 'bg-green-500' },
  { category: 'Farmácia', spent: 45, budget: 100, color: 'bg-blue-500' },
  { category: 'Contas', spent: 850, budget: 900, color: 'bg-orange-500' },
];

export function BudgetOverview() {
  return (
    <div className="space-y-4">
      {budgets.map((budget) => {
        const percentage = (budget.spent / budget.budget) * 100;
        const isOverBudget = percentage > 100;
        const isNearLimit = percentage > 80;
        
        return (
          <div key={budget.category} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${budget.color}`} />
                <span className="text-sm font-medium">{budget.category}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  R$ {budget.spent} / R$ {budget.budget}
                </span>
                {isOverBudget && (
                  <Badge variant="destructive" className="text-xs">
                    Excedido
                  </Badge>
                )}
                {isNearLimit && !isOverBudget && (
                  <Badge variant="outline" className="text-xs">
                    Atenção
                  </Badge>
                )}
              </div>
            </div>
            <Progress 
              value={Math.min(percentage, 100)} 
              className={`h-2 ${isOverBudget ? 'bg-red-100' : isNearLimit ? 'bg-yellow-100' : 'bg-green-100'}`}
            />
          </div>
        );
      })}
    </div>
  );
}