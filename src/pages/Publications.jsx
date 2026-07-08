import React, { useState } from 'react';
import { Search, FileText, ExternalLink, Quote, Clipboard, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { profileData } from '../data/profile';

const Publications = () => {
  const { publications } = profileData;

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [expandedAbstract, setExpandedAbstract] = useState({});
  const [expandedBibtex, setExpandedBibtex] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const tabs = ['All', 'Journal', 'Conference'];

  // Toggle abstract
  const toggleAbstract = (id) => {
    setExpandedAbstract((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle bibtex citation
  const toggleBibtex = (id) => {
    setExpandedBibtex((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Copy BibTeX to clipboard
  const copyToClipboard = (id, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Filter Publications
  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTab = activeTab === 'All' || pub.category === activeTab;

    return matchesSearch && matchesTab;
  });

  return (
    <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-4xl flex flex-col gap-12 animate-fade-up">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
            Academic Contributions
          </span>
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Research Publications
          </h1>
          <div className="h-[3px] w-24 bg-accent-gold rounded-full" />
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
          {/* Tab switches */}
          <div className="flex gap-1.5 w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${activeTab === tab
                    ? 'bg-accent-color text-white dark:bg-accent-gold dark:text-slate-950 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                {tab === 'All' ? 'All' : `${tab}s`}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search title, co-author, journal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-accent-gold"
            />
          </div>
        </div>

        {/* Publications List */}
        <div className="flex flex-col gap-6">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub) => (
              <div
                key={pub.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden"
              >
                {/* Horizontal side marker */}
                <div className="absolute top-0 left-0 w-[4px] h-full bg-slate-100 dark:bg-slate-800 group-hover:bg-accent-gold transition-colors" />

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="badge badge-accent">{pub.category}</span>
                    <span className="text-xs font-mono font-medium text-slate-400">{pub.year}</span>
                  </div>

                  <h3 className="text-lg font-sans font-bold text-slate-900 dark:text-white leading-snug group-hover:text-accent-color dark:group-hover:text-accent-gold transition-colors">
                    {pub.title}
                  </h3>

                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-semibold">{pub.authors}</span>
                  </div>

                  <div className="text-xs italic text-slate-400">
                    {pub.journal} {pub.volume && `, Vol. ${pub.volume}`} {pub.issue && `, No. ${pub.issue}`} {pub.pages && `, pp. ${pub.pages}`}
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap gap-4 mt-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent-color dark:text-accent-gold hover:underline"
                    >
                      <ExternalLink size={14} />
                      DOI Reference
                    </a>

                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                    >
                      {expandedAbstract[pub.id] ? (
                        <>
                          <ChevronUp size={14} /> Hide Abstract
                        </>
                      ) : (
                        <>
                          <ChevronDown size={14} /> View Abstract
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => toggleBibtex(pub.id)}
                      className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                    >
                      <Quote size={14} />
                      {expandedBibtex[pub.id] ? 'Hide Citation' : 'Cite (BibTeX)'}
                    </button>
                  </div>

                  {/* Collapsible Abstract */}
                  {expandedAbstract[pub.id] && (
                    <div className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed animate-fade-up">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">Abstract</h4>
                      {pub.abstract}
                    </div>
                  )}

                  {/* Collapsible BibTeX */}
                  {expandedBibtex[pub.id] && (
                    <div className="mt-4 p-4 rounded-lg bg-slate-950 text-slate-300 border border-slate-900 text-xs font-mono relative animate-fade-up">
                      <div className="absolute top-2.5 right-2.5 flex items-center">
                        <button
                          onClick={() => copyToClipboard(pub.id, pub.bibtex)}
                          className="p-1 rounded hover:bg-slate-800 transition-colors text-slate-400 hover:text-white cursor-pointer"
                          title="Copy to Clipboard"
                        >
                          {copiedId === pub.id ? <Check size={14} className="text-emerald-500" /> : <Clipboard size={14} />}
                        </button>
                      </div>
                      <pre className="overflow-x-auto pr-8">{pub.bibtex}</pre>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
              <FileText className="mx-auto text-slate-300 mb-4" size={48} />
              <p className="text-slate-500">No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;
