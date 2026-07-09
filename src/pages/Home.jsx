import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, ArrowUpRight, GraduationCap, ChevronLeft, ChevronRight, Clock, MapPin, Calendar } from 'lucide-react';
import { profileData } from '../data/profile';
import { fetchBlogs, fetchEvents } from '../utils/api';

const Home = () => {
  const { personalInfo, aboutMe, publications } = profileData;
  const [blogPosts, setBlogPosts] = useState(profileData.blogPosts);
  const [events, setEvents] = useState(profileData.events);
  const scrollContainerRef = useRef(null);
  const eventsScrollContainerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [activeEventsDot, setActiveEventsDot] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadCMSData = async () => {
      const cmsBlogs = await fetchBlogs();
      setBlogPosts(cmsBlogs);
      const cmsEvents = await fetchEvents();
      setEvents(cmsEvents);
    };
    loadCMSData();
  }, []);

  // Get latest blog posts (first 2)
  const latestBlogs = blogPosts.slice(0, 2);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll > 0) {
        const totalDots = isDesktop ? Math.max(aboutMe.researchInterests.length - 2, 1) : aboutMe.researchInterests.length;
        const newDot = direction === 'left'
          ? Math.max(activeDot - 1, 0)
          : Math.min(activeDot + 1, totalDots - 1);

        const targetScroll = (newDot / (totalDots - 1)) * maxScroll;
        scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
        setActiveDot(newDot);
      }
    }
  };

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll > 0) {
        const totalDots = isDesktop ? Math.max(aboutMe.researchInterests.length - 2, 1) : aboutMe.researchInterests.length;
        const targetScroll = (index / (totalDots - 1)) * maxScroll;
        scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
        setActiveDot(index);
      }
    }
  };

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const scrollWidth = e.target.scrollWidth;
    const clientWidth = e.target.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) return;

    const scrollPercent = scrollLeft / maxScroll;
    const totalDots = isDesktop ? Math.max(aboutMe.researchInterests.length - 2, 1) : aboutMe.researchInterests.length;
    const newIndex = Math.min(
      Math.round(scrollPercent * (totalDots - 1)),
      totalDots - 1
    );

    if (newIndex !== activeDot) {
      setActiveDot(newIndex);
    }
  };

  const scrollEvents = (direction) => {
    if (eventsScrollContainerRef.current) {
      const scrollWidth = eventsScrollContainerRef.current.scrollWidth;
      const clientWidth = eventsScrollContainerRef.current.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll > 0) {
        const totalDots = isDesktop ? Math.max(events.length - 1, 1) : events.length;
        const newDot = direction === 'left'
          ? Math.max(activeEventsDot - 1, 0)
          : Math.min(activeEventsDot + 1, totalDots - 1);

        const targetScroll = (newDot / (totalDots - 1)) * maxScroll;
        eventsScrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
        setActiveEventsDot(newDot);
      }
    }
  };

  const scrollToEventsCard = (index) => {
    if (eventsScrollContainerRef.current) {
      const scrollWidth = eventsScrollContainerRef.current.scrollWidth;
      const clientWidth = eventsScrollContainerRef.current.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll > 0) {
        const totalDots = isDesktop ? Math.max(events.length - 1, 1) : events.length;
        const targetScroll = (index / (totalDots - 1)) * maxScroll;
        eventsScrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
        setActiveEventsDot(index);
      }
    }
  };

  const handleEventsScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const scrollWidth = e.target.scrollWidth;
    const clientWidth = e.target.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) return;

    const scrollPercent = scrollLeft / maxScroll;
    const totalDots = isDesktop ? Math.max(events.length - 1, 1) : events.length;
    const newIndex = Math.min(
      Math.round(scrollPercent * (totalDots - 1)),
      totalDots - 1
    );

    if (newIndex !== activeEventsDot) {
      setActiveEventsDot(newIndex);
    }
  };

  return (
    <div className="relative pt-[70px] min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-gold/5 dark:bg-accent-gold/2 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="flex flex-col gap-6 animate-fade-up">
            <div className="inline-flex items-center gap-2">
              <span className="badge badge-accent">{personalInfo.institution}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Advancing <span className="text-gradient">Financial Research</span> & Education
            </h1>

            <p className="text-lg text-slate-650 dark:text-slate-300 max-w-xl font-sans font-light leading-relaxed">
              Hi, I'm <strong className="font-semibold text-slate-950 dark:text-white">{personalInfo.name}</strong>. {aboutMe.bio[0].replace(personalInfo.name + ' is', 'I am').replace('His work focus', 'My work focus')}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link to="/publications" className="btn btn-primary">
                <FileText size={18} />
                View Research
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Profile Image & Badges */}
          <div className="flex items-center justify-center relative animate-fade-up" style={{ animationDelay: '150ms' }}>
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer Decorative Rings */}
              <div
                className="absolute inset-0 rounded-full animate-[spin_60s_linear_infinite]"
                style={{ border: '1.5px dashed var(--accent-gold)' }}
              />
              <div className="absolute inset-4 rounded-full border border-slate-200 dark:border-slate-800" />

              {/* The Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-black">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full profile-image-fit transition-all duration-500"
                />
              </div>

              {/* Floated Stats Badge */}
              <div
                className="absolute bottom-4 right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg flex items-center gap-3"
                style={{ border: '1.5px solid var(--accent-gold)' }}
              >
                <div className="p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                  <GraduationCap className="text-accent-gold" size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Research Scope</div>
                  <div className="text-sm font-bold text-slate-800 dark:text-white">{publications.length} Publications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Research Interests Highlights */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/40 dark:border-slate-800/40">
        <div className="container flex flex-col gap-12">
          <div className="max-w-2xl mr-auto flex flex-col gap-3 items-start text-left">
            <h2 className="text-3xl font-serif font-bold text-slate-950 dark:text-white">
              Primary Research Areas
            </h2>
            <div className="h-[2px] w-20 bg-accent-gold rounded-full" />
            <p className="text-slate-500 text-sm">
              Investigating the operational and analytical factors governing business performance and corporate capital structure.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative w-full animate-fade-up">
            {/* Scrollable Track */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto pb-4 gap-6 scrollbar-none"
              style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {aboutMe.researchInterests.map((interest, i) => (
                <Link
                  key={i}
                  to="/publications"
                  className="shrink-0 bg-white dark:bg-slate-850 p-6 md:p-8 rounded-2xl card-border shadow-md hover:shadow-xl hover:-translate-y-1.5 hover:border-accent-gold/40 dark:hover:border-accent-gold/40 transition-all duration-300 flex flex-col gap-4 relative overflow-hidden group"
                  style={{ width: '360px', maxWidth: '100%', height: '230px' }}
                >
                  {/* Top gold bar */}
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-slate-100 dark:bg-slate-850 group-hover:bg-accent-gold transition-colors" />

                  {/* Header metadata row */}
                  <div className="flex justify-between items-center">
                    <span
                      className="badge badge-accent"
                      style={{ fontSize: '10px', padding: '0.2rem 0.65rem' }}
                    >
                      Research Area
                    </span>
                    <span className="text-xl font-serif font-black text-slate-200 dark:text-slate-800 group-hover:text-accent-gold/20 transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Content details */}
                  <div className="flex flex-col gap-2 flex-grow">
                    <h3 className="text-base md:text-lg font-sans font-bold text-slate-900 dark:text-white leading-snug group-hover:text-accent-gold transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light line-clamp-4">
                      {interest.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Carousel Controls (Arrows and Dots) */}
            <div className="flex items-center justify-center gap-6" style={{ marginTop: '28px' }}>
              <button
                onClick={() => scroll('left')}
                className="rounded-full bg-white dark:bg-slate-900 text-accent-gold hover:bg-accent-gold hover:text-slate-950 dark:hover:text-slate-950 transition-all duration-300 cursor-pointer shadow-md flex items-center justify-center border border-accent-gold/40 hover:border-accent-gold"
                style={{ width: '36px', height: '36px' }}
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2 select-none">
                {Array.from({ length: isDesktop ? Math.max(aboutMe.researchInterests.length - 2, 1) : aboutMe.researchInterests.length }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToCard(i)}
                    className="transition-all duration-300 cursor-pointer"
                    style={{
                      height: '8px',
                      width: activeDot === i ? '24px' : '8px',
                      borderRadius: '9999px',
                      backgroundColor: activeDot === i ? 'var(--accent-gold)' : 'rgba(156, 163, 175, 0.4)',
                      border: 'none',
                      outline: 'none',
                      padding: 0
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scroll('right')}
                className="rounded-full bg-white dark:bg-slate-900 text-accent-gold hover:bg-accent-gold hover:text-slate-950 dark:hover:text-slate-950 transition-all duration-300 cursor-pointer shadow-md flex items-center justify-center border border-accent-gold/40 hover:border-accent-gold"
                style={{ width: '36px', height: '36px' }}
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                  Recent Thoughts
                </h2>
                <Link to="/blog" className="text-xs font-semibold text-accent-gold hover:text-accent-gold-hover flex items-center gap-1">
                  Read Blog
                  <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className="h-[2px] w-20 bg-accent-gold rounded-full" />
              <p className="text-slate-500 text-sm max-w-2xl font-sans">
                Empirical research commentary, academic articles, and insights on corporate finance, working capital, and emerging financial markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.id}`}
                  className="bg-white dark:bg-slate-850 p-8 rounded-xl card-border shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent-gold/40 dark:hover:border-accent-gold/40 transition-all duration-300 flex flex-col gap-6 relative overflow-hidden group animate-fade-up"
                  style={{ gap: '24px' }}
                >
                  <div className="absolute top-0 left-0 w-[4px] h-full bg-accent-gold transition-colors" />
                  <div className="flex items-center gap-2.5 text-xs text-slate-400 font-semibold">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-sans font-bold text-slate-900 dark:text-white leading-snug group-hover:text-accent-gold transition-colors">
                    {blog.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {blog.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 flex-grow leading-relaxed">
                    {blog.summary}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-color dark:text-accent-gold group-hover:underline mt-2 self-start"
                  >
                    Read Full Post
                    <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="container flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                Corporate Connections
              </h2>
              <Link to="/events" className="text-xs font-semibold text-accent-gold hover:text-accent-gold-hover flex items-center gap-1">
                View All Connections
                <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="h-[2px] w-20 bg-accent-gold rounded-full" />
            <p className="text-slate-500 text-sm max-w-2xl font-sans">
              Key updates on campus masterclasses, business quiz competitions, and academic seminars at Sapthagiri NPS University.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative w-full animate-fade-up">
            {/* Scrollable Track */}
            <div
              ref={eventsScrollContainerRef}
              onScroll={handleEventsScroll}
              className="flex overflow-x-auto pb-4 gap-6 scrollbar-none"
              style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {events.map((ev) => (
                <Link
                  key={ev.id}
                  to="/events"
                  className="shrink-0 bg-white dark:bg-slate-850 rounded-xl card-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:h-[250px] group"
                  style={{ width: '480px', maxWidth: '100%' }}
                >
                  {/* Event Image */}
                  <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden bg-slate-950 shrink-0">
                    <img
                      src={ev.image || (ev.images && ev.images[0])}
                      alt={ev.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge badge-accent text-[10px] rounded-full px-2.5 py-0.5 bg-accent-gold text-slate-950 font-semibold border-none">
                        {ev.category}
                      </span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                        <Calendar size={13} className="text-accent-gold shrink-0" />
                        <span>{ev.date}</span>
                      </div>
                      <h3 className="text-base font-sans font-bold text-slate-900 dark:text-white leading-snug group-hover:text-accent-gold transition-colors line-clamp-2">
                        {ev.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed font-sans">
                        {ev.description}
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-col gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3 mt-auto">
                      {ev.time && (
                        <div className="flex items-center gap-1.5">
                          <Clock size={11} className="text-accent-gold shrink-0" />
                          <span className="line-clamp-1 font-sans"><strong>Time:</strong> {ev.time}</span>
                        </div>
                      )}
                      {ev.venue && (
                        <div className="flex items-center gap-1.5">
                          <MapPin size={11} className="text-accent-gold shrink-0" />
                          <span className="line-clamp-1 font-sans"><strong>Venue:</strong> {ev.venue}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Carousel Controls (Arrows and Dots) */}
            <div className="flex items-center justify-center gap-6" style={{ marginTop: '28px' }}>
              <button
                onClick={() => scrollEvents('left')}
                className="rounded-full bg-white dark:bg-slate-900 text-accent-gold hover:bg-accent-gold hover:text-slate-950 dark:hover:text-slate-950 transition-all duration-300 cursor-pointer shadow-md flex items-center justify-center border border-accent-gold/40 hover:border-accent-gold"
                style={{ width: '36px', height: '36px' }}
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2 select-none">
                {Array.from({ length: isDesktop ? Math.max(events.length - 1, 1) : events.length }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToEventsCard(i)}
                    className="transition-all duration-300 cursor-pointer"
                    style={{
                      height: '8px',
                      width: activeEventsDot === i ? '24px' : '8px',
                      borderRadius: '9999px',
                      backgroundColor: activeEventsDot === i ? 'var(--accent-gold)' : 'rgba(156, 163, 175, 0.4)',
                      border: 'none',
                      outline: 'none',
                      padding: 0
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scrollEvents('right')}
                className="rounded-full bg-white dark:bg-slate-900 text-accent-gold hover:bg-accent-gold hover:text-slate-950 dark:hover:text-slate-950 transition-all duration-300 cursor-pointer shadow-md flex items-center justify-center border border-accent-gold/40 hover:border-accent-gold"
                style={{ width: '36px', height: '36px' }}
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 bg-slate-900 text-white relative">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
              Looking for Academic Collaboration?
            </h2>
            <p className="text-slate-400 text-sm">
              I am open to research consulting, doctoral advising support, peer-reviews, and speaking engagements in empirical finance and analytics.
            </p>
          </div>
          <Link to="/contact" className="btn btn-gold shrink-0">
            Contact Me
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
