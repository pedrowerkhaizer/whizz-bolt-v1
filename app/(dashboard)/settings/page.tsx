'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Bell, 
  MessageSquare, 
  Shield, 
  CreditCard, 
  Smartphone,
  Save,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function SettingsPage() {
  const [isWhatsAppConnected, setIsWhatsAppConnected] = useState(false);
  const [notifications, setNotifications] = useState({
    budgetAlerts: true,
    dailySummary: true,
    goalProgress: true,
    transactionAlerts: false,
    weeklyReport: true
  });

  const [whatsappSettings, setWhatsappSettings] = useState({
    phone: '+55 11 99999-9999',
    verified: false,
    budgetThreshold: 80,
    summaryTime: '20:00'
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
        <p className="text-muted-foreground">
          Personalize sua experiência com o Whizz
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
          <TabsTrigger value="billing">Cobrança</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Informações Pessoais</span>
              </CardTitle>
              <CardDescription>
                Atualize suas informações pessoais
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" defaultValue="João" />
                </div>
                <div>
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" defaultValue="Silva" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="joao@email.com" />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" type="tel" defaultValue="+55 11 99999-9999" />
              </div>
              <div>
                <Label htmlFor="timezone">Fuso Horário</Label>
                <Select defaultValue="america/sao_paulo">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="america/sao_paulo">Brasília (UTC-3)</SelectItem>
                    <SelectItem value="america/rio_branco">Rio Branco (UTC-5)</SelectItem>
                    <SelectItem value="america/manaus">Manaus (UTC-4)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                <Save className="h-4 w-4 mr-2" />
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notificações</span>
              </CardTitle>
              <CardDescription>
                Configure quando e como receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Alertas de Orçamento</Label>
                    <p className="text-sm text-gray-500">Receba alertas quando estiver próximo do limite</p>
                  </div>
                  <Switch 
                    checked={notifications.budgetAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, budgetAlerts: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Resumo Diário</Label>
                    <p className="text-sm text-gray-500">Resumo das suas finanças todo dia</p>
                  </div>
                  <Switch 
                    checked={notifications.dailySummary}
                    onCheckedChange={(checked) => setNotifications({...notifications, dailySummary: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Progresso de Metas</Label>
                    <p className="text-sm text-gray-500">Notificações sobre suas metas financeiras</p>
                  </div>
                  <Switch 
                    checked={notifications.goalProgress}
                    onCheckedChange={(checked) => setNotifications({...notifications, goalProgress: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Alertas de Transação</Label>
                    <p className="text-sm text-gray-500">Notificação para cada nova transação</p>
                  </div>
                  <Switch 
                    checked={notifications.transactionAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, transactionAlerts: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Relatório Semanal</Label>
                    <p className="text-sm text-gray-500">Resumo semanal das suas finanças</p>
                  </div>
                  <Switch 
                    checked={notifications.weeklyReport}
                    onCheckedChange={(checked) => setNotifications({...notifications, weeklyReport: checked})}
                  />
                </div>
              </div>
              
              <Button className="bg-green-600 hover:bg-green-700">
                <Save className="h-4 w-4 mr-2" />
                Salvar Configurações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* WhatsApp Tab */}
        <TabsContent value="whatsapp" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp</span>
              </CardTitle>
              <CardDescription>
                Configure sua integração com o WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isWhatsAppConnected ? (
                <Alert className="border-yellow-200 bg-yellow-50">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>WhatsApp não conectado.</strong> Conecte seu WhatsApp para receber notificações e usar o chat financeiro.
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>WhatsApp conectado com sucesso!</strong> Você receberá notificações no número {whatsappSettings.phone}.
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="whatsapp-phone">Número do WhatsApp</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="whatsapp-phone"
                      type="tel"
                      value={whatsappSettings.phone}
                      onChange={(e) => setWhatsappSettings({...whatsappSettings, phone: e.target.value})}
                      disabled={isWhatsAppConnected}
                    />
                    <Button 
                      variant={isWhatsAppConnected ? "outline" : "default"}
                      onClick={() => setIsWhatsAppConnected(!isWhatsAppConnected)}
                    >
                      {isWhatsAppConnected ? "Desconectar" : "Conectar"}
                    </Button>
                  </div>
                  {isWhatsAppConnected && (
                    <p className="text-sm text-green-600 mt-2">
                      <CheckCircle className="h-4 w-4 inline mr-1" />
                      Número verificado
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="budget-threshold">Limite de Alerta (%)</Label>
                  <Select value={whatsappSettings.budgetThreshold.toString()} onValueChange={(value) => setWhatsappSettings({...whatsappSettings, budgetThreshold: parseInt(value)})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="70">70%</SelectItem>
                      <SelectItem value="80">80%</SelectItem>
                      <SelectItem value="90">90%</SelectItem>
                      <SelectItem value="95">95%</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500 mt-1">
                    Receba alertas quando atingir este percentual do orçamento
                  </p>
                </div>
                
                <div>
                  <Label htmlFor="summary-time">Horário do Resumo Diário</Label>
                  <Input
                    id="summary-time"
                    type="time"
                    value={whatsappSettings.summaryTime}
                    onChange={(e) => setWhatsappSettings({...whatsappSettings, summaryTime: e.target.value})}
                  />
                </div>
              </div>
              
              <Button className="bg-green-600 hover:bg-green-700">
                <Save className="h-4 w-4 mr-2" />
                Salvar Configurações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Segurança</span>
              </CardTitle>
              <CardDescription>
                Gerencie a segurança da sua conta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="current-password">Senha Atual</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div>
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div>
                  <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              
              <Button className="bg-green-600 hover:bg-green-700">
                <Save className="h-4 w-4 mr-2" />
                Alterar Senha
              </Button>
              
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Autenticação de Dois Fatores</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">2FA via SMS</Label>
                    <p className="text-sm text-gray-500">Adicione uma camada extra de segurança</p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Sessões Ativas</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium">Chrome em Windows</p>
                        <p className="text-xs text-gray-500">São Paulo, Brasil - Atual</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Atual</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Cobrança</span>
              </CardTitle>
              <CardDescription>
                Gerencie seu plano e pagamentos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-green-800">Plano Gratuito</h4>
                    <p className="text-sm text-green-600">Acesso completo durante o período beta</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Recursos Incluídos</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Conexão com bancos ilimitada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Orçamentos e categorias ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Notificações no WhatsApp</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Relatórios e análises</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
              </div>
              
              <Alert className="border-blue-200 bg-blue-50">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Aviso:</strong> Este é um período beta gratuito. Em breve, lançaremos planos pagos com recursos adicionais.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}