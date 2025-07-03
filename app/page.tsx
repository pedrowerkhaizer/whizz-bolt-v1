import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, PiggyBank, TrendingUp, Shield, Smartphone, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">Whizz</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/home">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link href="/home">
              <Button className="bg-green-600 hover:bg-green-700">
                Começar Grátis
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="secondary" className="mb-6">
          🚀 Lançamento Beta - Acesso Gratuito
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Seu Coach Financeiro
          <span className="text-green-600 block">Inteligente</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Gerencie seus gastos, controle orçamentos e receba alertas inteligentes. 
          Transforme sua relação com o dinheiro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/home">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Começar Agora - É Grátis
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Ver Como Funciona
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tudo que você precisa para controlar suas finanças
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Alertas Inteligentes</CardTitle>
              <CardDescription>
                Receba alertas, resumos e dicas para manter suas finanças em dia
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <PiggyBank className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Orçamento Inteligente</CardTitle>
              <CardDescription>
                Sistema de envelopes com rollover automático e controle diário
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Análise Completa</CardTitle>
              <CardDescription>
                Dashboard com análises detalhadas e projeções financeiras
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Pare de se preocupar com dinheiro
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Alertas Inteligentes</h4>
                    <p className="text-gray-600">Seja notificado antes de estourar o orçamento</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Automação Total</h4>
                    <p className="text-gray-600">Gastos recorrentes e categorização automática</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Visão Completa</h4>
                    <p className="text-gray-600">Dashboard com cashflow e projeções</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-8 w-8 text-green-600" />
                  <div className="flex-1">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <p className="text-sm">⚠️ Você estourou o limite de Alimentação em R$ 45,00. Gastou R$ 345/R$ 300.</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                  <div className="flex-1">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <p className="text-sm">📊 Resumo de hoje: saldo R$ 1.250,00, sobra R$ 125,00.</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-8 w-8 text-purple-600" />
                  <div className="flex-1">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <p className="text-sm">🏆 Meta "Viagem" alcançou 75%. Faltam R$ 500!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">
          Pronto para transformar suas finanças?
        </h3>
        <p className="text-xl text-gray-600 mb-8">
          Junte-se a milhares de pessoas que já controlam melhor seu dinheiro
        </p>
        <Link href="/home">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Começar Agora - É Grátis
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="h-8 w-8" />
                <span className="text-xl font-bold">Whizz</span>
              </div>
              <p className="text-gray-400">
                Seu coach financeiro inteligente
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Funcionalidades</li>
                <li>Preços</li>
                <li>Segurança</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Central de Ajuda</li>
                <li>Contato</li>
                <li>Status</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre</li>
                <li>Privacidade</li>
                <li>Termos</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Whizz. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}