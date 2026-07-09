import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { profileData } from '../data/profile';
import { fetchBlogs } from '../utils/api';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(profileData.blogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const loadBlogs = async () => {
      const cmsBlogs = await fetchBlogs();
      setBlogPosts(cmsBlogs);
    };
    loadBlogs();
  }, []);

  // Reset to first page when filtering/searching
  useEffect(() => {
    setCurrentPage(1);
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

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-4xl flex flex-col gap-12 animate-fade-up">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
            Thoughts & Analysis
          </span>
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Academic Blog
          </h1>
          <div className="h-[3px] w-24 bg-accent-gold rounded-full" />
        </div>

        {/* Search & Tag Clouds */}
        <div className="flex flex-col gap-6 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
          {/* Search */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search articles by title, keywords or summary..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedTag(null); // Reset tag cloud filter when searching
              }}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-accent-gold"
            />
          </div>

          {/* Tag cloud */}
          <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 dark:border-slate-850" style={{ paddingTop: '1.25rem' }}>
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mr-2">
              <Tag size={12} /> Filter by Tag:
            </span>
            
            <button
              onClick={() => {
                setSelectedTag(null);
                setSearchTerm(''); // Reset search term when selecting tag
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedTag === null
                  ? 'bg-accent-color text-white dark:bg-accent-gold dark:text-slate-950 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              All Tags
            </button>

            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  setSearchTerm(''); // Reset search term when selecting tag
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-accent-color text-white dark:bg-accent-gold dark:text-slate-950 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post List */}
        <div className="flex flex-col gap-8">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-slate-900 p-8 rounded-xl card-border shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col gap-4"
              >
                <div className="absolute top-0 left-0 w-[4px] h-full bg-slate-100 dark:bg-slate-800 group-hover:bg-accent-gold transition-colors" />

                <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-sans font-bold text-slate-900 dark:text-white group-hover:text-accent-color dark:group-hover:text-accent-gold transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-semibold text-slate-400 bg-slate-100 dark:bg-slate-950 border border-slate-200/10 px-2.5 py-0.5 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans mt-1">
                  {post.summary}
                </p>

                <div className="border-t border-slate-100 dark:border-slate-850 flex justify-between items-center" style={{ paddingTop: '16px', marginTop: '16px' }}>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-color dark:text-accent-gold hover:underline group-hover:gap-2.5 transition-all"
                  >
                    Read Full Article
                    <ArrowRight size={15} />
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg border text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                  currentPage === page
                    ? 'bg-accent-color border-accent-color text-white dark:bg-accent-gold dark:border-accent-gold dark:text-slate-950'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
