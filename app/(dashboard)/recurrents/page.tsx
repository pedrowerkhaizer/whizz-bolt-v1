'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit2, Trash2, Calendar, Clock, DollarSign } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const recurrents = [
  {
    id: '1',
    description: 'Aluguel',
    amount: -1200.00,
    scheduleCron: '0 0 5 * *',
    scheduleText: 'Todo dia 5 do mês',
    nextRun: '2025-02-05',
    isActive: true,
    category: 'Contas'
  },
  {
    id: '2',
    description: 'Salário',
    amount: 3500.00,
    scheduleCron: '0 0 1 * *',
    scheduleText: 'Todo dia 1 do mês',
    nextRun: '2025-02-01',
    isActive: true,
    category: 'Renda'
  },
  {
    id: '3',
    description: 'Plano de Saúde',
    amount: -450.00,
    scheduleCron: '0 0 10 * *',
    scheduleText: 'Todo dia 10 do mês',
    nextRun: '2025-02-10',
    isActive: true,
    category: 'Contas'
  },
  {
    id: '4',
    description: 'Academia',
    amount: -89.90,
    scheduleCron: '0 0 15 * *',
    scheduleText: 'Todo dia 15 do mês',
    nextRun: '2025-02-15',
    isActive: true,
    category: 'Lazer'
  },
  {
    id: '5',
    description: 'Spotify',
    amount: -16.90,
    scheduleCron: '0 0 20 * *',
    scheduleText: 'Todo dia 20 do mês',
    nextRun: '2025-02-20',
    isActive: false,
    category: 'Lazer'
  },
  {
    id: '6',
    description: 'Seguro do Carro',
    amount: -180.00,
    scheduleCron: '0 0 25 * *',
    scheduleText: 'Todo dia 25 do mês',
    nextRun: '2025-02-25',
    isActive: true,
    category: 'Transporte'
  },
];

const schedulePresets = [
  { value: '0 0 1 * *', label: 'Todo dia 1 do mês' },
  { value: '0 0 5 * *', label: 'Todo dia 5 do mês' },
  { value: '0 0 10 * *', label: 'Todo dia 10 do mês' },
  { value: '0 0 15 * *', label: 'Todo dia 15 do mês' },
  { value: '0 0 20 * *', label: 'Todo dia 20 do mês' },
  { value: '0 0 25 * *', label: 'Todo dia 25 do mês' },
  { value: '0 0 * * 1', label: 'Toda segunda-feira' },
  { value: '0 0 * * 0', label: 'Todo domingo' },
];

const categories = [
  { id: 1, name: 'Alimentação' },
  { id: 2, name: 'Transporte' },
  { id: 3, name: 'Lazer' },
  { id: 4, name: 'Farmácia' },
  { id: 5, name: 'Contas' },
  { id: 6, name: 'Renda' },
];

export default function RecurrentsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingRecurrent, setEditingRecurrent] = useState<any>(null);

  const handleEdit = (recurrent: any) => {
    setEditingRecurrent(recurrent);
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setEditingRecurrent(null);
  };

  const activeRecurrents = recurrents.filter(r => r.isActive);
  const totalMonthlyIncome = activeRecurrents.filter(r => r.amount > 0).reduce((sum, r) => sum + r.amount, 0);
  const totalMonthlyExpenses = activeRecurrents.filter(r => r.amount < 0).reduce((sum, r) => sum + Math.abs(r.amount), 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Recorrentes</h2>
          <p className="text-muted-foreground">
            Gerencie suas receitas e despesas recorrentes
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Nova Recorrente
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingRecurrent ? 'Editar Recorrente' : 'Nova Recorrente'}
              </DialogTitle>
              <DialogDescription>
                {editingRecurrent ? 'Atualize as informações da recorrente' : 'Crie uma nova receita ou despesa recorrente'}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  placeholder="Ex: Aluguel, Salário, Plano de Saúde"
                  defaultValue={editingRecurrent?.description}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="amount">Valor (R$)</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    placeholder="1200.00"
                    defaultValue={editingRecurrent?.amount ? Math.abs(editingRecurrent.amount) : ''}
                  />
                </div>
                <div>
                  <Label htmlFor="type">Tipo</Label>
                  <Select defaultValue={editingRecurrent?.amount > 0 ? 'income' : 'expense'}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">Receita</SelectItem>
                      <SelectItem value="expense">Despesa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="schedule">Frequência</Label>
                <Select defaultValue={editingRecurrent?.scheduleCron}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a frequência" />
                  </SelectTrigger>
                  <SelectContent>
                    {schedulePresets.map((preset) => (
                      <SelectItem key={preset.value} value={preset.value}>
                        {preset.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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
              <div className="flex items-center space-x-2">
                <Switch id="active" defaultChecked={editingRecurrent?.isActive !== false} />
                <Label htmlFor="active">Ativo</Label>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  {editingRecurrent ? 'Atualizar' : 'Criar'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total de Receitas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {totalMonthlyIncome.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Por mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total de Despesas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              R$ {totalMonthlyExpenses.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Por mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Saldo Líquido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${totalMonthlyIncome - totalMonthlyExpenses >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              R$ {(totalMonthlyIncome - totalMonthlyExpenses).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Por mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Recorrentes Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activeRecurrents.length}
            </div>
            <p className="text-xs text-muted-foreground">
              De {recurrents.length} total
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recurrents List */}
      <div className="grid gap-4 md:grid-cols-2">
        {recurrents.map((recurrent) => (
          <Card key={recurrent.id} className={`${!recurrent.isActive ? 'opacity-60' : ''}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <span>{recurrent.description}</span>
                    {!recurrent.isActive && (
                      <Badge variant="secondary" className="text-xs">
                        Inativo
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {recurrent.category}
                    </Badge>
                  </CardDescription>
                </div>
                <div className="flex space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(recurrent)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Valor</span>
                </div>
                <span className={`font-bold ${recurrent.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {recurrent.amount > 0 ? '+' : ''}R$ {Math.abs(recurrent.amount).toFixed(2)}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Frequência</span>
                </div>
                <span className="text-sm font-medium">{recurrent.scheduleText}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Próxima execução</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {new Date(recurrent.nextRun).toLocaleDateString('pt-BR')}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}