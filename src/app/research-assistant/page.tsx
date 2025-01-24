'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

type ResearchTopic = 'market_trends' | 'promotion_strategies' | 'fan_engagement' | 'revenue_streams' | 'industry_news';

interface SearchResult {
  title: string;
  url: string;
  content: string;
  score: number;
  published_date?: string;
}

export default function ResearchAssistant() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<ResearchTopic>('market_trends');
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState('');

  const topics = [
    { id: 'market_trends', label: 'Market Trends', icon: '📈' },
    { id: 'promotion_strategies', label: 'Promotion Strategies', icon: '🎯' },
    { id: 'fan_engagement', label: 'Fan Engagement', icon: '🎵' },
    { id: 'revenue_streams', label: 'Revenue Streams', icon: '💰' },
    { id: 'industry_news', label: 'Industry News', icon: '📰' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSearchResults([]);

    try {
      const response = await fetch('/api/research', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: selectedTopic,
          customQuery: query,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch research results');
      }

      const data = await response.json();
      setSearchResults(data.results);
      if (data.answer) {
        setSearchResults([
          {
            title: "Direct Answer",
            url: "",
            content: data.answer,
            score: 1,
            published_date: new Date().toISOString()
          },
          ...data.results
        ]);
      }
    } catch (error) {
      console.error('Error fetching research:', error);
      setError('Failed to fetch research results. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium text-center mb-6">
              Music Industry Research Assistant
            </h1>
            <p className="text-gray-600 text-center mb-12 text-lg">
              Get instant insights on music industry trends, strategies, and opportunities
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Topic Selection */}
            <div className="flex flex-wrap gap-3 justify-center">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedTopic(topic.id as ResearchTopic)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    selectedTopic === topic.id
                      ? 'bg-black text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <span>{topic.icon}</span>
                  <span className="text-sm font-medium">{topic.label}</span>
                </button>
              ))}
            </div>

            {/* Query Input */}
            <div>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-black focus:ring-0 transition-colors h-32 resize-none"
                placeholder="What would you like to research about the music industry?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="w-full bg-black text-white py-4 px-8 rounded-xl text-lg font-medium hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Researching...' : 'Research Now'}
            </button>
          </motion.form>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-4 bg-red-50 text-red-600 rounded-xl text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Results */}
          {searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8 space-y-6"
            >
              <h2 className="text-2xl font-medium mb-6">Research Results</h2>
              {searchResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-medium mb-2">
                    {result.url ? (
                      <a href={result.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        {result.title}
                      </a>
                    ) : (
                      result.title
                    )}
                  </h3>
                  {result.published_date && (
                    <p className="text-sm text-gray-500 mb-2">Published: {result.published_date}</p>
                  )}
                  <p className="text-gray-600">{result.content}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
} 