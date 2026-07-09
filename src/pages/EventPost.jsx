import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Award, Users, ArrowLeft } from 'lucide-react';
import { profileData } from '../data/profile';
import { fetchEvents } from '../utils/api';

const EventPost = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvent = async () => {
      setLoading(true);
      try {
        const cmsEvents = await fetchEvents();
        const found = cmsEvents.find((e) => e.id === id);
        setEvent(found || null);
      } catch (error) {
        console.error('Failed to load event:', error);
      } finally {
        setLoading(false);
      }
    };
    loadEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center">
        <div className="text-slate-500 dark:text-slate-400 font-sans text-sm animate-pulse">
          Loading event details...
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">
          Event Not Found
        </h2>
        <Link to="/events" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Corporate Connections
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-3xl flex flex-col gap-8 animate-fade-up">
        {/* Navigation back */}
        <div>
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Back to Corporate Connections
          </Link>
        </div>

        {/* Event Meta */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3.5 text-xs text-slate-400 font-semibold">
            <span className="badge badge-accent text-[10px]">
              {event.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar size={13} className="text-accent-gold" />
              {event.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
            {event.title}
          </h1>
        </div>

        {/* Event Poster / Image */}
        {(event.image || (event.images && event.images.length > 0)) && (
          <div className="w-full bg-slate-950 rounded-2xl overflow-hidden flex justify-center items-center shadow-sm border border-slate-200/50 dark:border-slate-800/50" style={{ maxHeight: '450px' }}>
            <img
              src={event.image || event.images[0]}
              alt={event.title}
              className="w-full h-auto object-cover max-h-[450px]"
            />
          </div>
        )}

        {/* Event Content Area */}
        <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-2xl border border-slate-200/65 dark:border-slate-850 shadow-sm prose dark:prose-invert max-w-none">
          {/* Description */}
          <div className="text-[15px] text-slate-600 dark:text-slate-350 leading-relaxed font-sans whitespace-pre-wrap">
            {event.description}
          </div>

          {/* Event Coordinates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800 pt-6 mt-6 text-sm text-slate-500 dark:text-slate-400 font-sans">
            {event.time && (
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-accent-gold shrink-0" />
                <span><strong>Time:</strong> {event.time}</span>
              </div>
            )}
            {event.venue && (
              <div className="flex items-center gap-2.5">
                <MapPin size={16} className="text-accent-gold shrink-0" />
                <span><strong>Venue:</strong> {event.venue}</span>
              </div>
            )}
            {event.speaker && (
              <div className="flex items-center gap-2.5">
                <Award size={16} className="text-accent-gold shrink-0" />
                <span><strong>Speaker:</strong> {event.speaker}</span>
              </div>
            )}
            {event.coordinator && (
              <div className="flex items-center gap-2.5">
                <Users size={16} className="text-accent-gold shrink-0" />
                <span><strong>Coordinator:</strong> {event.coordinator}</span>
              </div>
            )}
          </div>
        </div>

        {/* Quick Footer for Author */}
        <div className="mt-4 p-6 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
          <img
            src={profileData.personalInfo.avatar}
            alt={profileData.personalInfo.name}
            className="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-accent-gold"
          />
          <div className="flex flex-col gap-1">
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Organized by {profileData.personalInfo.name}
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

export default EventPost;
