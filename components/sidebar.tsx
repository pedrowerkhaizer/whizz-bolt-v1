'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  PiggyBank, 
  CreditCard, 
  Calendar, 
  Settings, 
  MessageSquare,
  TrendingUp,
  User,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  {
    label: 'Dashboard',
    icon: Home,
    href: '/home',
  },
  {
    label: 'Orçamentos',
    icon: PiggyBank,
    href: '/budgets',
  },
  {
    label: 'Transações',
    icon: CreditCard,
    href: '/transactions',
  },
  {
    label: 'Recorrentes',
    icon: Calendar,
    href: '/recurrents',
  },
  {
    label: 'Bancos',
    icon: TrendingUp,
    href: '/banks',
  },
  {
    label: 'Configurações',
    icon: Settings,
    href: '/settings',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white border-r border-gray-200 fixed left-0 top-0 w-64 z-50">
      <div className="px-3 py-2 flex-1">
        <Link href="/home" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <MessageSquare className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold">Whizz</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-gray-900 hover:bg-gray-100 rounded-lg transition',
                pathname === route.href ? 'text-gray-900 bg-gray-100' : 'text-gray-600'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', pathname === route.href ? 'text-gray-900' : 'text-gray-600')} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="px-3 py-2">
        <div className="flex items-center justify-between p-3 border-t">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium">João Silva</p>
              <p className="text-xs text-gray-500">joao@email.com</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}