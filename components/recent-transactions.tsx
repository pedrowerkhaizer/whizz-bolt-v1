'use client';

import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  ShoppingCart, 
  Car, 
  Coffee, 
  Home, 
  Heart,
  TrendingUp,
  TrendingDown 
} from 'lucide-react';

const transactions = [
  {
    id: '1',
    description: 'Supermercado Extra',
    amount: -145.50,
    category: 'Alimentação',
    date: '2025-01-15',
    icon: ShoppingCart,
    color: 'bg-red-500'
  },
  {
    id: '2',
    description: 'Salário',
    amount: 3500.00,
    category: 'Renda',
    date: '2025-01-15',
    icon: TrendingUp,
    color: 'bg-green-500'
  },
  {
    id: '3',
    description: 'Uber',
    amount: -25.80,
    category: 'Transporte',
    date: '2025-01-14',
    icon: Car,
    color: 'bg-yellow-500'
  },
  {
    id: '4',
    description: 'Starbucks',
    amount: -18.90,
    category: 'Alimentação',
    date: '2025-01-14',
    icon: Coffee,
    color: 'bg-red-500'
  },
  {
    id: '5',
    description: 'Conta de Luz',
    amount: -230.45,
    category: 'Contas',
    date: '2025-01-13',
    icon: Home,
    color: 'bg-blue-500'
  },
  {
    id: '6',
    description: 'Farmácia',
    amount: -85.20,
    category: 'Farmácia',
    date: '2025-01-13',
    icon: Heart,
    color: 'bg-purple-500'
  },
];

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <Avatar className="h-10 w-10">
            <AvatarFallback className={transaction.color}>
              <transaction.icon className="h-5 w-5 text-white" />
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{transaction.description}</h4>
              <div className="flex items-center space-x-2">
                <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2)}
                </span>
                {transaction.amount > 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <Badge variant="outline" className="text-xs">
                {transaction.category}
              </Badge>
              <span>{new Date(transaction.date).toLocaleDateString('pt-BR')}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}