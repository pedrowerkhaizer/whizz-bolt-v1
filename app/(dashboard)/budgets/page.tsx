'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit2, Trash2, AlertTriangle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const categories = [
  { id: 1, name: 'Alimentação', color: 'bg-red-500' },
  { id: 2, name: 'Transporte', color: 'bg-yellow-500' },
  { id: 3, name: 'Lazer', color: 'bg-green-500' },
  { id: 4, name: 'Farmácia', color: 'bg-blue-500' },
  { id: 5, name: 'Contas', color: 'bg-purple-500' },
  { id: 6, name: 'Outros', color: 'bg-gray-500' },
];

const budgets = [
  { 
    id: '1', 
    category: 'Alimentação', 
    categoryId: 1,
    month: '2025-01',
    dailyBase: 10.00,
    rollover: 45.50,
    spent: 280.00,
    budget: 300.00,
    color: 'bg-red-500'
  },
  { 
    id: '2', 
    category: 'Transporte', 
    categoryId: 2,
    month: '2025-01',
    dailyBase: 6.67,
    rollover: 25.30,
    spent: 150.00,
    budget: 200.00,
    color: 'bg-yellow-500'
  },
  { 
    id: '3', 
    category: 'Lazer', 
    categoryId: 3,
    month: '2025-01',
    dailyBase: 5.00,
    rollover: 15.80,
    spent: 80.00,
    budget: 150.00,
    color: 'bg-green-500'
  },
  { 
    id: '4', 
    category: 'Farmácia', 
    categoryId: 4,
    month: '2025-01',
    dailyBase: 3.33,
    rollover: 8.20,
    spent: 45.00,
    budget: 100.00,
    color: 'bg-blue-500'
  },
  { 
    id: '5', 
    category: 'Contas', 
    categoryId: 5,
    month: '2025-01',
    dailyBase: 30.00,
    rollover: 125.00,
    spent: 850.00,
    budget: 900.00,
    color: 'bg-purple-500'
  },
];

export default function BudgetsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBudget, setEditingBudget] = useState<any>(null);

  const handleEdit = (budget: any) => {
    setEditingBudget(budget);
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setEditingBudget(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Orçamentos</h2>
          <p className="text-muted-foreground">
            Gerencie seus orçamentos por categoria
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Novo Orçamento
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingBudget ? 'Editar Orçamento' : 'Novo Orçamento'}
              </DialogTitle>
              <DialogDescription>
                {editingBudget ? 'Atualize as informações do orçamento' : 'Crie um novo orçamento para uma categoria'}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="category">Categoria</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id.toString()}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dailyBase">Valor Diário (R$)</Label>
                <Input
                  id="dailyBase"
                  type="number"
                  step="0.01"
                  placeholder="10.00"
                  defaultValue={editingBudget?.dailyBase}
                />
              </div>
              <div>
                <Label htmlFor="month">Mês</Label>
                <Input
                  id="month"
                  type="month"
                  defaultValue={editingBudget?.month || '2025-01'}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  {editingBudget ? 'Atualizar' : 'Criar'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Budget Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Orçado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.650,00</div>
            <p className="text-xs text-muted-foreground">
              Para este mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Gasto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">R$ 1.405,00</div>
            <p className="text-xs text-muted-foreground">
              85% do orçamento
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Restante</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ 245,00</div>
            <p className="text-xs text-muted-foreground">
              15% ainda disponível
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Rollover Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">R$ 219,80</div>
            <p className="text-xs text-muted-foreground">
              Saldo acumulado
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Budget Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.budget) * 100;
          const isOverBudget = percentage > 100;
          const isNearLimit = percentage > 80;
          const dailyRemaining = budget.dailyBase + (budget.rollover / 31);
          
          return (
            <Card key={budget.id} className={`${isOverBudget ? 'border-red-200' : isNearLimit ? 'border-yellow-200' : 'border-gray-200'}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${budget.color}`} />
                    <CardTitle className="text-lg">{budget.category}</CardTitle>
                  </div>
                  <div className="flex space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(budget)}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {isOverBudget && (
                  <div className="flex items-center space-x-2 text-red-600">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="text-sm font-medium">Orçamento Excedido</span>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Gasto</span>
                    <span className="font-medium">
                      R$ {budget.spent.toFixed(2)} / R$ {budget.budget.toFixed(2)}
                    </span>
                  </div>
                  <Progress 
                    value={Math.min(percentage, 100)} 
                    className={`h-2 ${isOverBudget ? 'bg-red-100' : isNearLimit ? 'bg-yellow-100' : 'bg-green-100'}`}
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{percentage.toFixed(0)}% usado</span>
                    <span>R$ {(budget.budget - budget.spent).toFixed(2)} restante</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Label className="text-xs text-gray-500">Diário Base</Label>
                    <div className="font-medium">R$ {budget.dailyBase.toFixed(2)}</div>
                  </div>
                  <div>
                    <Label className="text-xs text-gray-500">Rollover</Label>
                    <div className="font-medium text-blue-600">R$ {budget.rollover.toFixed(2)}</div>
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Disponível hoje</span>
                    <Badge variant={dailyRemaining > 0 ? 'default' : 'destructive'}>
                      R$ {dailyRemaining.toFixed(2)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}