export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  created_at: string;
}

export interface Connection {
  id: string;
  user_id: string;
  bank_name: string;
  status: 'active' | 'inactive' | 'error';
  created_at: string;
}

export interface Category {
  id: number;
  name: string;
  color: string;
}

export interface Budget {
  id: string;
  user_id: string;
  category_id: number;
  category?: Category;
  month: string;
  daily_base: number;
  rollover: number;
}

export interface Recurrent {
  id: string;
  user_id: string;
  description: string;
  amount: number;
  schedule_cron: string;
  next_run?: string;
}

export interface Transaction {
  id: string;
  user_id: string;
  category_id?: number;
  category?: Category;
  date: string;
  amount: number;
  description?: string;
  source: 'manual' | 'recurrent';
}

export interface CashflowData {
  id: number;
  date: string;
  valor: number;
  tipo: 'Entrada' | 'Saída';
  descricao: string;
  categoria: string;
  saldo_acumulado: number;
}

export interface BudgetSummary {
  category: string;
  spent: number;
  budget: number;
  remaining: number;
  percentage: number;
}