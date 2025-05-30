import React, { useState, useEffect } from 'react';
import { Users, Mail, Phone, Calendar, RefreshCw, TrendingUp } from 'lucide-react';

const QuizUsersDashboard = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_QUIZ}/api/users`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setUsers(data.users || []);
      setCount(data.count || 0);
      setLastUpdated(new Date());
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatEmail = (email) => {
    if (email.length > 25) {
      return email.substring(0, 22) + '...';
    }
    return email;
  };

  return (
    <div className="min-h-screen mt-16 text-white p-4 md:p-8">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Quiz Dashboard
          </h1>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center space-x-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                    {loading ? '...' : count.toLocaleString()}
                  </h2>
                  <p className="text-xl text-gray-300">Total Quiz Participants</p>
                </div>
              </div>
              
              <button
                onClick={fetchData}
                disabled={loading}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
            
            {lastUpdated && (
              <div className="mt-4 text-sm text-gray-400">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            )}
          </div>
        </div>

        {error && (
          <div className="mb-8 bg-red-500/20 border border-red-500/50 rounded-2xl p-6 text-center">
            <p className="text-red-300 text-lg">Error: {error}</p>
            <button
              onClick={fetchData}
              className="mt-4 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        <div className="grid gap-6 md:gap-8">
          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-800/50 rounded-2xl p-6 animate-pulse">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-700 rounded"></div>
                    <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : users.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {users.map((user, index) => (
                <div
                  key={user._id}
                  className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                        {user.email.charAt(0).toUpperCase()}
                      </div>
                      <div className="text-2xl font-bold text-gray-400">
                        #{index + 1}
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group-hover:text-blue-300 transition-colors">
                      <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="font-medium truncate" title={user.email}>
                        {formatEmail(user.email)}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-3 group-hover:text-purple-300 transition-colors">
                      <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="font-medium">{user.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 group-hover:text-green-300 transition-colors">
                      <Calendar className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-400">
                        {formatDate(user.createdAt)}
                      </span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Users className="w-24 h-24 text-gray-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No participants yet</h3>
              <p className="text-gray-500">Quiz participants will appear here once they start taking the quiz.</p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400 bg-gray-800/50 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live Data • Auto-refreshes every 30s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizUsersDashboard;