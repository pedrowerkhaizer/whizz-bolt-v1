'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Plus, 
  Search, 
  Filter, 
  Download,
  ShoppingCart, 
  Car, 
  Coffee, 
  Home, 
  Heart,
  TrendingUp,
  TrendingDown,
  Calendar,
  DollarSign
} from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const categories = [
  { id: 1, name: 'Alimentação', icon: ShoppingCart, color: 'bg-red-500' },
  { id: 2, name: 'Transporte', icon: Car, color: 'bg-yellow-500' },
  { id: 3, name: 'Lazer', icon: Coffee, color: 'bg-green-500' },
  { id: 4, name: 'Farmácia', icon: Heart, color: 'bg-blue-500' },
  { id: 5, name: 'Contas', icon: Home, color: 'bg-purple-500' },
  { id: 6, name: 'Renda', icon: TrendingUp, color: 'bg-emerald-500' },
];

const transactions = [
  {
    id: '1',
    description: 'Supermercado Extra',
    amount: -145.50,
    categoryId: 1,
    category: 'Alimentação',
    date: '2025-01-15',
    source: 'open_finance' as const,
    icon: ShoppingCart,
    color: 'bg-red-500'
  },
  {
    id: '2',
    description: 'Salário Janeiro',
    amount: 3500.00,
    categoryId: 6,
    category: 'Renda',
    date: '2025-01-15',
    source: 'open_finance' as const,
    icon: TrendingUp,
    color: 'bg-emerald-500'
  },
  {
    id: '3',
    description: 'Uber Centro',
    amount: -25.80,
    categoryId: 2,
    category: 'Transporte',
    date: '2025-01-14',
    source: 'open_finance' as const,
    icon: Car,
    color: 'bg-yellow-500'
  },
  {
    id: '4',
    description: 'Starbucks Shopping',
    amount: -18.90,
    categoryId: 1,
    category: 'Alimentação',
    date: '2025-01-14',
    source: 'manual' as const,
    icon: Coffee,
    color: 'bg-red-500'
  },
  {
    id: '5',
    description: 'Conta de Luz CEMIG',
    amount: -230.45,
    categoryId: 5,
    category: 'Contas',
    date: '2025-01-13',
    source: 'recurrent' as const,
    icon: Home,
    color: 'bg-purple-500'
  },
  {
    id: '6',
    description: 'Farmácia Droga Raia',
    amount: -85.20,
    categoryId: 4,
    category: 'Farmácia',
    date: '2025-01-13',
    source: 'manual' as const,
    icon: Heart,
    color: 'bg-blue-500'
  },
];

export default function TransactionsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterSource, setFilterSource] = useState('all');

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || transaction.categoryId.toString() === filterCategory;
    const matchesSource = filterSource === 'all' || transaction.source === filterSource;
    
    return matchesSearch && matchesCategory && matchesSource;
  });

  const totalIncome = transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Transações</h2>
          <p className="text-muted-foreground">
            Gerencie todas as suas movimentações financeiras
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Nova Transação
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nova Transação</DialogTitle>
                <DialogDescription>
                  Adicione uma nova transação manualmente
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="description">Descrição</Label>
                  <Input
                    id="description"
                    placeholder="Ex: Compra no supermercado"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="amount">Valor (R$)</Label>
                    <Input
                      id="amount"
                      type="number"
                      step="0.01"
                      placeholder="100.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Data</Label>
                    <Input
                      id="date"
                      type="date"
                      defaultValue={new Date().toISOString().split('T')[0]}
                    />
                  </div>
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
                <div>
                  <Label htmlFor="notes">Observações</Label>
                  <Textarea
                    id="notes"
                    placeholder="Observações adicionais (opcional)"
                    rows={3}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Adicionar
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
              Total de Entradas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {totalIncome.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Este mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingDown className="h-4 w-4 mr-2 text-red-600" />
              Total de Saídas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              R$ {totalExpense.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Este mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
              Saldo Líquido
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${totalIncome - totalExpense >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              R$ {(totalIncome - totalExpense).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Este mês
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <Label>Buscar</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar transações..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label>Categoria</Label>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as categorias</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id.toString()}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Origem</Label>
              <Select value={filterSource} onValueChange={setFilterSource}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as origens</SelectItem>
                  <SelectItem value="open_finance">Open Finance</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                  <SelectItem value="recurrent">Recorrente</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setFilterCategory('all');
                  setFilterSource('all');
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <CardTitle>Transações ({filteredTransactions.length})</CardTitle>
          <CardDescription>
            Lista de todas as suas transações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className={transaction.color}>
                    <transaction.icon className="h-6 w-6 text-white" />
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{transaction.description}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`font-bold text-lg ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2)}
                      </span>
                      {transaction.amount > 0 ? (
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {transaction.category}
                      </Badge>
                      <Badge 
                        variant={transaction.source === 'open_finance' ? 'default' : 
                                transaction.source === 'manual' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {transaction.source === 'open_finance' ? 'Open Finance' : 
                         transaction.source === 'manual' ? 'Manual' : 'Recorrente'}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(transaction.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}