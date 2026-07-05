import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { profileData } from '../data/profile';

const BlogPost = () => {
  const { id } = useParams();
  const { blogPosts } = profileData;

  const post = blogPosts.find((p) => p.id === id);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">
          Article Not Found
        </h2>
        <Link to="/blog" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  // Simple, robust Markdown parser that transforms raw string blocks into JSX elements
  const renderContent = (rawText) => {
    if (!rawText) return null;

    // Split by paragraphs or key structural changes
    const blocks = rawText.split('\n\n');
    let inCode = false;
    let codeContent = [];
    let codeLang = '';

    const elements = [];

    blocks.forEach((block, index) => {
      const trimmed = block.trim();

      // Handle Code Block ending
      if (inCode && trimmed.startsWith('```')) {
        inCode = false;
        elements.push(
          <div key={`code-${index}`} className="my-6 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="bg-slate-100 dark:bg-slate-950 px-4 py-2 text-xs font-mono text-slate-500 border-b border-slate-200 dark:border-slate-800 flex justify-between uppercase">
              <span>{codeLang || 'code'}</span>
            </div>
            <pre className="bg-slate-950 text-slate-200 p-4 overflow-x-auto font-mono text-xs leading-relaxed">
              <code>{codeContent.join('\n\n')}</code>
            </pre>
          </div>
        );
        codeContent = [];
        return;
      }

      // Handle Code Block content
      if (inCode) {
        codeContent.push(block);
        return;
      }

      // Handle Code Block starting
      if (trimmed.startsWith('```')) {
        inCode = true;
        codeLang = trimmed.substring(3).trim();
        return;
      }

      // Handle horizontal rule
      if (trimmed === '---') {
        elements.push(<hr key={`hr-${index}`} className="my-8 border-slate-200 dark:border-slate-800" />);
        return;
      }

      // Handle headers
      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl font-sans font-bold text-slate-900 dark:text-white mt-8 mb-4">
            {trimmed.substring(4)}
          </h3>
        );
        return;
      }
      if (trimmed.startsWith('#### ')) {
        elements.push(
          <h4 key={`h4-${index}`} className="text-lg font-sans font-bold text-slate-900 dark:text-white mt-6 mb-3">
            {trimmed.substring(5)}
          </h4>
        );
        return;
      }

      // Handle blockquote
      if (trimmed.startsWith('> ')) {
        const text = trimmed.substring(2);
        // Look for bold text inside blockquote
        elements.push(
          <blockquote key={`quote-${index}`} className="my-6 pl-4 border-l-4 border-accent-gold text-slate-600 dark:text-slate-400 italic bg-amber-50/10 dark:bg-amber-950/5 py-3 pr-4 rounded-r-lg font-sans">
            {text.replace(/\*\*(.*?)\*\*/g, '$1')}
          </blockquote>
        );
        return;
      }

      // Handle unordered lists (lines starting with * )
      if (trimmed.startsWith('* ')) {
        const items = trimmed.split('\n').map(line => line.trim().substring(2));
        elements.push(
          <ul key={`ul-${index}`} className="list-disc pl-6 my-4 space-y-2 text-slate-600 dark:text-slate-400 font-sans text-sm">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        return;
      }

      // Handle ordered lists (lines starting with number. )
      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed.split('\n').map(line => {
          const match = line.trim().match(/^\d+\.\s(.*)/);
          return match ? match[1] : line;
        });
        elements.push(
          <ol key={`ol-${index}`} className="list-decimal pl-6 my-4 space-y-3 text-slate-600 dark:text-slate-400 font-sans text-sm">
            {items.map((item, idx) => (
              <li key={idx} className="pl-1">{item}</li>
            ))}
          </ol>
        );
        return;
      }

      // Default paragraph (supports inline code `code`)
      const parts = trimmed.split('`');
      if (parts.length > 1) {
        const inlineElements = parts.map((part, pIdx) => {
          if (pIdx % 2 === 1) {
            return (
              <code key={pIdx} className="bg-slate-100 dark:bg-slate-950 text-accent-gold px-1.5 py-0.5 rounded text-xs font-mono">
                {part}
              </code>
            );
          }
          return part;
        });
        elements.push(
          <p key={`p-${index}`} className="text-slate-600 dark:text-slate-350 leading-relaxed font-sans text-[15px] mb-4">
            {inlineElements}
          </p>
        );
      } else {
        elements.push(
          <p key={`p-${index}`} className="text-slate-600 dark:text-slate-350 leading-relaxed font-sans text-[15px] mb-4">
            {trimmed}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-3xl flex flex-col gap-8 animate-fade-up">
        {/* Navigation back */}
        <div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Back to Articles
          </Link>
        </div>

        {/* Article Meta */}
        <div className="flex flex-col gap-4">
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

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mt-1">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-semibold text-slate-400 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 px-2.5 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content Area */}
        <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-200/65 dark:border-slate-850 shadow-sm prose dark:prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Quick Footer for Author */}
        <div className="mt-8 p-6 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 flex items-center gap-4">
          <img
            src={profileData.personalInfo.avatar}
            alt={profileData.personalInfo.name}
            className="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-accent-gold"
          />
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Written by {profileData.personalInfo.name}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {profileData.personalInfo.subtitle} at {profileData.personalInfo.institution}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
