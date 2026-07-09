import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Award, Users, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { profileData } from '../data/profile';
import { fetchEvents } from '../utils/api';

// Sub-component for individual event card to manage its own image slide state
const EventCard = ({ ev }) => {
  const images = ev.images || (ev.image ? [ev.image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl card-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full animate-fade-up">
      {/* Poster/Image Carousel Frame */}
      <div
        className="relative w-full bg-slate-950 dark:bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-850 shrink-0 select-none"
        style={{ height: '360px' }}
      >
        {images.length === 0 ? (
          <span className="text-xs text-slate-500">No media available</span>
        ) : (
          <img
            src={images[currentIndex]}
            alt={`${ev.title} - Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain transition-all duration-500"
          />
        )}

        {/* Carousel UI Elements (only rendered if there is more than 1 picture) */}
        {images.length > 1 && (
          <>
            {/* Left navigation arrow */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-full text-white z-10 cursor-pointer transition-colors border border-white/10"
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              className="p-2 rounded-full text-white z-10 cursor-pointer transition-colors border border-white/10"
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>

            {/* Dot Indicators */}
            <div
              className="flex gap-1.5 z-10 select-none"
              style={{
                position: 'absolute',
                bottom: '14px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className="rounded-full cursor-pointer transition-all"
                  style={{
                    width: currentIndex === idx ? '14px' : '6px',
                    height: '6px',
                    backgroundColor: currentIndex === idx ? '#c89b3c' : 'rgba(255, 255, 255, 0.4)',
                    border: 'none',
                    outline: 'none',
                    padding: 0
                  }}
                  aria-label={`Show slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Event Details Panel */}
      <div className="p-6 flex flex-col justify-between flex-grow gap-4 bg-white dark:bg-slate-900">
        <div className="flex flex-col gap-3">
          {/* Category & Date */}
          <div className="flex justify-between items-center flex-wrap gap-2">
            <span className="badge badge-accent text-[10px]">{ev.category}</span>
            <div className="flex items-center gap-1 text-[11px] text-slate-400 font-semibold font-sans">
              <Calendar size={11} className="text-accent-gold" />
              <span>{ev.date}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base font-sans font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
            {ev.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-3">
            {ev.description}
          </p>
        </div>

        {/* Event Coordinates */}
        <div className="flex flex-col gap-2.5 text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 font-sans" style={{ paddingTop: '16px', marginTop: '16px' }}>
          {ev.time && (
            <div className="flex items-center gap-2">
              <Clock size={12} className="text-accent-gold shrink-0" />
              <span className="line-clamp-1"><strong>Time:</strong> {ev.time}</span>
            </div>
          )}
          {ev.venue && (
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-accent-gold shrink-0" />
              <span className="line-clamp-1"><strong>Venue:</strong> {ev.venue}</span>
            </div>
          )}
          {ev.speaker && (
            <div className="flex items-center gap-2">
              <Award size={12} className="text-accent-gold shrink-0" />
              <span className="line-clamp-1"><strong>Speaker:</strong> {ev.speaker}</span>
            </div>
          )}
          {ev.coordinator && (
            <div className="flex items-center gap-2">
              <Users size={12} className="text-accent-gold shrink-0" />
              <span className="line-clamp-1"><strong>Coordinator:</strong> {ev.coordinator}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CorporateConnections = () => {
  const [events, setEvents] = useState(profileData.events);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      const cmsEvents = await fetchEvents();
      setEvents(cmsEvents);
    };
    loadEvents();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedEvent]);

  const categories = ['All', 'Seminar', 'Expo', 'Competition', 'Academic', 'Activity'];

  const filteredEvents = events.filter((ev) => {
    if (activeFilter === 'All') return true;
    return ev.category === activeFilter;
  });

  return (
    <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container flex flex-col gap-10 animate-fade-up">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
            Campus Life & Activities
          </span>
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Corporate Connections
          </h1>
          <div className="h-[3px] w-24 bg-accent-gold rounded-full" />
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200/60 dark:border-slate-800/60" style={{ paddingBottom: '1.25rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${activeFilter === cat
                ? 'bg-accent-color text-white dark:bg-accent-gold dark:text-slate-950 font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {cat === 'All' ? 'All Activities' : `${cat}s`}
            </button>
          ))}
        </div>

        {/* Events Grid (3 in a Row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredEvents.map((ev) => (
            <div 
              key={ev.id} 
              onClick={() => setSelectedEvent(ev)} 
              className="cursor-pointer h-full hover:-translate-y-1 transition-transform duration-300"
            >
              <EventCard ev={ev} />
            </div>
          ))}
        </div>
      </div>

      {/* Event Detail Popup Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ zIndex: 999999 }}
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-200/50 dark:border-slate-800/50 flex flex-col gap-6 p-6 md:p-8 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer border-none"
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            {/* Event Poster / Image */}
            <div className="w-full bg-slate-950 rounded-xl overflow-hidden flex justify-center items-center" style={{ minHeight: '300px' }}>
              <img 
                src={selectedEvent.image || (selectedEvent.images && selectedEvent.images[0])} 
                alt={selectedEvent.title} 
                className="max-w-full max-h-[500px] object-contain"
              />
            </div>

            {/* Title & Category */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="badge badge-accent text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent-gold text-slate-950 border-none">
                  {selectedEvent.category}
                </span>
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <Calendar size={12} className="text-accent-gold" />
                  {selectedEvent.date}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-sans font-bold text-slate-900 dark:text-white leading-snug">
                {selectedEvent.title}
              </h2>
            </div>

            {/* Description */}
            <div className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-sans whitespace-pre-wrap border-t border-slate-100 dark:border-slate-800 pt-4">
              {selectedEvent.description}
            </div>

            {/* Event Coordinates (Time, Venue, Speaker, Coordinator) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800 pt-4 text-xs text-slate-500 dark:text-slate-400 font-sans">
              {selectedEvent.time && (
                <div className="flex items-center gap-2.5">
                  <Clock size={14} className="text-accent-gold shrink-0" />
                  <span><strong>Time:</strong> {selectedEvent.time}</span>
                </div>
              )}
              {selectedEvent.venue && (
                <div className="flex items-center gap-2.5">
                  <MapPin size={14} className="text-accent-gold shrink-0" />
                  <span><strong>Venue:</strong> {selectedEvent.venue}</span>
                </div>
              )}
              {selectedEvent.speaker && (
                <div className="flex items-center gap-2.5">
                  <Award size={14} className="text-accent-gold shrink-0" />
                  <span><strong>Speaker:</strong> {selectedEvent.speaker}</span>
                </div>
              )}
              {selectedEvent.coordinator && (
                <div className="flex items-center gap-2.5">
                  <Users size={14} className="text-accent-gold shrink-0" />
                  <span><strong>Coordinator:</strong> {selectedEvent.coordinator}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CorporateConnections;
