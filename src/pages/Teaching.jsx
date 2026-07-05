import React, { useState } from 'react';
import { BookOpen, Users, ChevronDown, ChevronUp, GraduationCap, Clock } from 'lucide-react';
import { profileData } from '../data/profile';

const Teaching = () => {
  const { teaching } = profileData;
  const [expandedCourse, setExpandedCourse] = useState({});

  const toggleCourse = (code) => {
    setExpandedCourse((prev) => ({ ...prev, [code]: !prev[code] }));
  };

  return (
    <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-4xl flex flex-col gap-16 animate-fade-up">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
            Courses & Advising
          </span>
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Teaching & Mentorship
          </h1>
          <div className="h-[3px] w-24 bg-accent-gold rounded-full" />
        </div>

        {/* Section 1: Course list */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <BookOpen className="text-accent-gold" size={28} />
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              Courses Taught
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {teaching.courses.map((course) => (
              <div
                key={course.code}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleCourse(course.code)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50/50 dark:hover:bg-slate-850/50 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col gap-2.5 pr-4">
                    <div className="flex items-center gap-2">
                      <span 
                        className="badge badge-accent"
                        style={{ fontSize: '10px', padding: '0.2rem 0.65rem' }}
                      >
                        {course.code}
                      </span>
                      <span className="text-xs font-sans font-medium text-slate-400">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-sans font-bold text-slate-900 dark:text-white">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                      <Clock size={12} className="text-accent-gold" />
                      <span>{course.term}</span>
                    </div>
                  </div>
                  <div className="text-slate-400">
                    {expandedCourse[course.code] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {expandedCourse[course.code] && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-850 text-sm animate-fade-up">
                    <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed font-sans">
                      {course.description}
                    </p>
                    
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                      Syllabus Modules
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-none pl-0">
                      {course.outline.map((topic, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-slate-500 dark:text-slate-400 py-1">
                          <span className="text-accent-gold font-bold font-mono">0{index + 1}.</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Advising list */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Users className="text-accent-gold" size={28} />
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              Student Advising & Mentorship
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Active Students */}
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-serif font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                Active Research Scholars
              </h3>
              
              <div className="flex flex-col gap-4">
                {teaching.students.active.map((student, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex gap-3.5"
                  >
                    <div className="p-2.5 bg-amber-50 dark:bg-amber-950/20 rounded-lg self-start shrink-0">
                      <GraduationCap className="text-accent-gold" size={20} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-sans font-bold text-slate-900 dark:text-white">
                        {student.name}
                      </h4>
                      <div className="text-xs font-semibold text-accent-color dark:text-accent-gold">
                        {student.degree} Candidate • {student.timeline}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans italic leading-snug">
                        "{student.topic}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed Students */}
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-serif font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                Graduated Alumni
              </h3>
              
              <div className="flex flex-col gap-4">
                {teaching.students.completed.map((student, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex gap-3.5"
                  >
                    <div className="p-2.5 bg-amber-50 dark:bg-amber-950/20 rounded-lg self-start shrink-0">
                      <GraduationCap className="text-accent-gold" size={20} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-sans font-bold text-slate-900 dark:text-white">
                        {student.name}
                      </h4>
                      <div className="text-xs font-semibold text-accent-color dark:text-accent-gold">
                        {student.degree} Supervised • {student.timeline.split(' (')[0]}
                      </div>
                      {student.timeline.includes('Current Placement:') && (
                        <div className="text-[11px] font-sans font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                          {student.timeline.split('Current Placement: ')[1]?.replace(')', '')}
                        </div>
                      )}
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans italic leading-snug">
                        "{student.topic}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
