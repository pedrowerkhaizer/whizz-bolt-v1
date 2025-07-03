'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Plus, RefreshCw, AlertCircle, CheckCircle, XCircle, Building2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const connections = [
  {
    id: '1',
    pluggyItemId: 'item_bank_001',
    bankName: 'Banco do Brasil',
    bankLogo: '🏦',
    status: 'active',
    lastSync: '2025-01-15T10:30:00Z',
    accountsCount: 2,
    transactionsCount: 145,
    connection_health: 95
  },
  {
    id: '2',
    pluggyItemId: 'item_bank_002',
    bankName: 'Nubank',
    bankLogo: '💜',
    status: 'active',
    lastSync: '2025-01-15T09:15:00Z',
    accountsCount: 1,
    transactionsCount: 89,
    connection_health: 100
  },
  {
    id: '3',
    pluggyItemId: 'item_bank_003',
    bankName: 'Itaú',
    bankLogo: '🔶',
    status: 'error',
    lastSync: '2025-01-10T14:20:00Z',
    accountsCount: 1,
    transactionsCount: 234,
    connection_health: 45,
    error_message: 'Credenciais expiradas. Renovação necessária.'
  },
  {
    id: '4',
    pluggyItemId: 'item_bank_004',
    bankName: 'Santander',
    bankLogo: '🔴',
    status: 'inactive',
    lastSync: '2025-01-05T16:45:00Z',
    accountsCount: 1,
    transactionsCount: 67,
    connection_health: 0,
    error_message: 'Conexão desativada pelo usuário'
  }
];

const supportedBanks = [
  { name: 'Banco do Brasil', logo: '🏦' },
  { name: 'Nubank', logo: '💜' },
  { name: 'Itaú', logo: '🔶' },
  { name: 'Santander', logo: '🔴' },
  { name: 'Bradesco', logo: '🟡' },
  { name: 'Caixa', logo: '🏛️' },
  { name: 'BTG Pactual', logo: '⚫' },
  { name: 'Inter', logo: '🟠' },
  { name: 'C6 Bank', logo: '⚪' },
  { name: 'Original', logo: '🟢' }
];

export default function BanksPage() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);

  const handleConnect = async (bankName: string) => {
    setIsConnecting(true);
    setSelectedBank(bankName);
    
    // Simulate Pluggy Connect flow
    setTimeout(() => {
      setIsConnecting(false);
      setSelectedBank(null);
      // Here you would redirect to Pluggy Connect or handle the connection
    }, 2000);
  };

  const handleReconnect = async (connection: any) => {
    // Handle reconnection logic
    console.log('Reconnecting to:', connection.bankName);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800">Erro</Badge>;
      case 'inactive':
        return <Badge className="bg-gray-100 text-gray-800">Inativo</Badge>;
      default:
        return <Badge variant="outline">Desconhecido</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-600" />;
      case 'inactive':
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const activeConnections = connections.filter(c => c.status === 'active').length;
  const errorConnections = connections.filter(c => c.status === 'error').length;
  const totalTransactions = connections.reduce((sum, c) => sum + c.transactionsCount, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Conexões Bancárias</h2>
          <p className="text-muted-foreground">
            Gerencie suas conexões com bancos via Open Finance
          </p>
        </div>
        <Button 
          className="bg-green-600 hover:bg-green-700"
          onClick={() => handleConnect('Novo Banco')}
        >
          <Plus className="h-4 w-4 mr-2" />
          Conectar Banco
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Bancos Conectados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {connections.length}
            </div>
            <p className="text-xs text-muted-foreground">
              {activeConnections} ativos
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Conexões Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {activeConnections}
            </div>
            <p className="text-xs text-muted-foreground">
              Sincronizando automaticamente
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Problemas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {errorConnections}
            </div>
            <p className="text-xs text-muted-foreground">
              Requerem atenção
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Transações Importadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalTransactions}
            </div>
            <p className="text-xs text-muted-foreground">
              Este mês
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Error Alert */}
      {errorConnections > 0 && (
        <Alert className="border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Atenção:</strong> {errorConnections} conexão(ões) com problema. 
            Verifique as conexões abaixo para manter seus dados atualizados.
          </AlertDescription>
        </Alert>
      )}

      {/* Connections List */}
      <div className="grid gap-4 md:grid-cols-2">
        {connections.map((connection) => (
          <Card key={connection.id} className={`${connection.status === 'error' ? 'border-red-200' : connection.status === 'inactive' ? 'border-gray-200' : 'border-green-200'}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{connection.bankLogo}</div>
                  <div>
                    <CardTitle className="text-lg">{connection.bankName}</CardTitle>
                    <CardDescription className="flex items-center space-x-2 mt-1">
                      {getStatusIcon(connection.status)}
                      {getStatusBadge(connection.status)}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  {connection.status === 'error' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleReconnect(connection)}
                    >
                      Reconectar
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {connection.status === 'error' && connection.error_message && (
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm text-red-800">{connection.error_message}</p>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Contas</p>
                  <p className="font-medium">{connection.accountsCount}</p>
                </div>
                <div>
                  <p className="text-gray-500">Transações</p>
                  <p className="font-medium">{connection.transactionsCount}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Saúde da Conexão</span>
                  <span className="font-medium">{connection.connection_health}%</span>
                </div>
                <Progress value={connection.connection_health} className="h-2" />
              </div>
              
              <div className="text-xs text-gray-500">
                Última sincronização: {new Date(connection.lastSync).toLocaleString('pt-BR')}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Supported Banks */}
      <Card>
        <CardHeader>
          <CardTitle>Bancos Suportados</CardTitle>
          <CardDescription>
            Conecte-se com mais de 200 instituições financeiras
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {supportedBanks.map((bank) => (
              <Button
                key={bank.name}
                variant="outline"
                className="flex items-center space-x-2 h-auto p-4 justify-start"
                onClick={() => handleConnect(bank.name)}
                disabled={isConnecting && selectedBank === bank.name}
              >
                <span className="text-2xl">{bank.logo}</span>
                <span className="text-sm">{bank.name}</span>
                {isConnecting && selectedBank === bank.name && (
                  <RefreshCw className="h-4 w-4 animate-spin ml-auto" />
                )}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}