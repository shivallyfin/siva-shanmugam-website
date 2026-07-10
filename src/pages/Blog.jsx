import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { profileData } from '../data/profile';
import { fetchBlogs } from '../utils/api';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(profileData.blogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const loadBlogs = async () => {
      const cmsBlogs = await fetchBlogs();
      setBlogPosts(cmsBlogs);
    };
    loadBlogs();
  }, []);

  // Reset limit when filtering/searching
  useEffect(() => {
    setVisibleCount(5);
  }, [searchTerm, selectedTag]);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );

  // Filter blog posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const currentPosts = filteredPosts.slice(0, visibleCount);

  return (
    <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-4xl flex flex-col gap-10 animate-fade-up">
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
            Publications & Insights
          </span>
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Academic Blog
          </h1>
          <div className="h-[3px] w-24 bg-accent-gold rounded-full" />
        </div>

        {/* Search and Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Search Bar */}
          <div className="md:col-span-2 relative">
            <input
              type="text"
              placeholder="Search posts by title, summary, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm font-sans placeholder:text-slate-400 focus:outline-none focus:border-accent-gold transition-all"
            />
            <Search className="absolute left-4 top-3.5 text-slate-400" size={16} />
          </div>

          {/* Tags Dropdown/Select */}
          <div className="relative">
            <select
              value={selectedTag || ''}
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 text-sm font-sans focus:outline-none focus:border-accent-gold transition-all text-slate-700 dark:text-slate-300"
            >
              <option value="">All Tags / Topics</option>
              {allTags.map((tag, idx) => (
                <option key={idx} value={tag}>
                  #{tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Posts List */}
        <div className="flex flex-col gap-8">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl card-border shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col gap-4"
              >
                <div className="absolute top-0 left-0 w-[4px] h-full bg-slate-100 dark:bg-slate-800 group-hover:bg-accent-gold transition-colors" />
                
                {/* Meta details */}
                <div className="flex items-center gap-3.5 text-xs text-slate-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-accent-gold" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-accent-gold" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-sans font-bold text-slate-900 dark:text-white leading-snug group-hover:text-accent-gold transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>

                {/* Summary */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-3">
                  {post.summary}
                </p>

                {/* Footer Tags & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        onClick={() => setSelectedTag(tag)}
                        className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border transition-all cursor-pointer ${
                          selectedTag === tag
                            ? 'bg-accent-gold/20 border-accent-gold text-accent-gold'
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200/50 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent-color dark:text-accent-gold group-hover:underline"
                  >
                    Read Full Article <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
              <p className="text-slate-500">No blog posts found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > visibleCount && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setVisibleCount((prev) => prev + 5)}
              className="px-6 py-2.5 rounded-xl bg-accent-color hover:bg-accent-color-hover text-white dark:bg-accent-gold dark:hover:bg-accent-gold/85 dark:text-slate-950 font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md hover:shadow-lg flex items-center gap-1.5 border-none"
            >
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
