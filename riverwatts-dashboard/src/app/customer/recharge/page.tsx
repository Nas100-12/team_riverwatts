'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { 
  CreditCard, 
  Zap, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Receipt,
  History,
  Wallet,
  Plus,
  ArrowRight,
  Copy,
  Download
} from 'lucide-react';

export default function RechargePage() {
  const [tokenInput, setTokenInput] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(247.50);

  const quickAmounts = [10, 25, 50, 100, 200, 500];
  
  const recentTransactions = [
    { id: 'TXN001', amount: 50.00, token: 'RW-ABC123-DEF456', date: '2024-01-15', status: 'completed', type: 'recharge' },
    { id: 'TXN002', amount: -12.30, token: '', date: '2024-01-14', status: 'completed', type: 'usage' },
    { id: 'TXN003', amount: 100.00, token: 'RW-XYZ789-GHI012', date: '2024-01-12', status: 'completed', type: 'recharge' },
    { id: 'TXN004', amount: -8.75, token: '', date: '2024-01-11', status: 'completed', type: 'usage' },
    { id: 'TXN005', amount: 25.00, token: 'RW-MNO345-PQR678', date: '2024-01-10', status: 'completed', type: 'recharge' }
  ];

  const handleTokenSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenInput.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      const tokenValue = Math.floor(Math.random() * 100) + 10;
      setCurrentBalance(prev => prev + tokenValue);
      setShowSuccess(true);
      setTokenInput('');
      setIsProcessing(false);
      
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  const handleQuickRecharge = (amount: number) => {
    setSelectedAmount(amount);
    // Generate mock token for demo
    const mockToken = `RW-${Math.random().toString(36).substr(2, 6).toUpperCase()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    setTokenInput(mockToken);
  };

  const formatToken = (token: string) => {
    // Format token with dashes for better readability
    return token.replace(/(.{2})/g, '$1-').slice(0, -1);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Recharge Account
        </h1>
        <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg">
          <Wallet className="h-5 w-5" />
          <span className="font-semibold">${currentBalance.toFixed(2)}</span>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3 animate-slide-up">
          <CheckCircle className="h-6 w-6 text-green-600" />
          <div>
            <h3 className="font-semibold text-green-800">Recharge Successful!</h3>
            <p className="text-green-700 text-sm">Your account has been recharged successfully.</p>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Token Entry Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white rounded-xl shadow-lg border border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <CreditCard className="h-6 w-6" />
                <span>Enter Recharge Token</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleTokenSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Recharge Token
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={tokenInput}
                      onChange={(e) => setTokenInput(e.target.value.toUpperCase())}
                      placeholder="RW-ABC123-DEF456"
                      className="w-full px-4 py-4 text-lg font-mono border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      disabled={isProcessing}
                    />
                    {tokenInput && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(tokenInput)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-slate-500 hover:text-blue-600 transition-colors"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mt-2">
                    Enter your 20-character recharge token (format: RW-XXXXXX-XXXXXX)
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={!tokenInput.trim() || isProcessing}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Zap className="h-5 w-5" />
                      <span>Recharge Account</span>
                    </div>
                  )}
                </Button>
              </form>

              {/* Quick Recharge Amounts */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Recharge</h3>
                <div className="grid grid-cols-3 gap-3">
                  {quickAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleQuickRecharge(amount)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedAmount === amount
                          ? 'border-blue-500 bg-blue-50 text-blue-800'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <div className="text-lg font-bold">${amount}</div>
                      <div className="text-xs text-slate-600">~{amount * 10} kWh</div>
                    </button>
                  ))}
                </div>
                <p className="text-sm text-slate-600 mt-3">
                  Click any amount to generate a demo token for testing
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">How Recharge Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Purchase Token</h4>
                  <p className="text-blue-700 text-sm">Buy recharge tokens from authorized vendors or online</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Enter Token</h4>
                  <p className="text-blue-700 text-sm">Input your 20-character token in the field above</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Instant Credit</h4>
                  <p className="text-blue-700 text-sm">Your account is credited immediately upon validation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Balance & History Sidebar */}
        <div className="space-y-6">
          {/* Current Balance */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-800">
                <Wallet className="h-5 w-5" />
                <span>Account Balance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-800 mb-2">
                  ${currentBalance.toFixed(2)}
                </div>
                <p className="text-green-700 text-sm mb-4">
                  ≈ {Math.floor(currentBalance * 10)} kWh available
                </p>
                <div className="bg-green-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min((currentBalance / 500) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-green-600">
                  {currentBalance < 50 ? 'Low balance - consider recharging' : 'Good balance level'}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-white rounded-xl shadow-lg border border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-slate-800">
                <History className="h-5 w-5" />
                <span>Recent Transactions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'recharge' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {transaction.type === 'recharge' ? (
                          <Plus className="h-4 w-4" />
                        ) : (
                          <Zap className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <div className={`font-semibold ${
                          transaction.amount > 0 ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                        </div>
                        <div className="text-xs text-slate-600">{transaction.date}</div>
                      </div>
                    </div>
                    <Badge className={
                      transaction.status === 'completed' ? 'badge--success' : 'badge--warning'
                    }>
                      {transaction.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 focus-ring">
                <Receipt className="h-4 w-4 mr-2" />
                View All Transactions
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white rounded-xl shadow-lg border border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-800">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start focus-ring">
                <Download className="h-4 w-4 mr-2" />
                Download Statement
              </Button>
              <Button variant="outline" className="w-full justify-start focus-ring">
                <AlertCircle className="h-4 w-4 mr-2" />
                Set Low Balance Alert
              </Button>
              <Button variant="outline" className="w-full justify-start focus-ring">
                <Clock className="h-4 w-4 mr-2" />
                Auto-Recharge Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}