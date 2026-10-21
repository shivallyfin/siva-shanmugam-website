import React, { useState } from 'react';
import { BookOpen, Users, ChevronDown, ChevronUp, Clock, Award } from 'lucide-react';
import { profileData } from '../data/profile';

const Teaching = () => {
  const { teaching, scholarlyGuidance } = profileData;
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
            Pedagogy & Mentorship
          </span>
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Teaching & Mentorship
          </h1>
          <div className="h-[3px] w-24 bg-accent-gold rounded-full" />
        </div>

        {/* Section 1: Course list */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <BookOpen className="text-accent-gold" size={28} />
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                Industry-Integrated Courses Taught
              </h2>
            </div>
            <div className="h-[2px] w-20 bg-accent-gold rounded-full" />
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Innovative curricula designed with outcome-based education, laboratory-integrated financial modeling, and corporate partnerships with EY, NISM, and NSE.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {teaching.courses.map((course) => (
              <div
                key={course.code}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm overflow-hidden hover:shadow-md hover:border-accent-gold/30 dark:hover:border-accent-gold/30 transition-all duration-300"
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
                  <div className="px-6 pb-6 pt-6 border-t border-slate-100 dark:border-slate-850 text-sm animate-fade-up">
                    <p className="text-slate-600 dark:text-slate-300 mb-5 leading-relaxed font-sans">
                      {course.description}
                    </p>
                    
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                      Syllabus Modules & Key Competencies
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

        {/* Section 2: Research & Scholarly Advising */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Users className="text-accent-gold" size={28} />
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                Research Guidance & Mentorship
              </h2>
            </div>
            <div className="h-[2px] w-20 bg-accent-gold rounded-full" />
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Supervising doctoral scholars, master's dissertations, and postgraduate research projects in corporate finance and management.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col gap-8">
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200/60 dark:border-slate-800/60 flex flex-col items-center justify-center text-center">
                <div className="text-3xl font-bold font-serif text-accent-color dark:text-accent-gold text-center">
                  {scholarlyGuidance.phdGuidance}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium text-center">Ph.D. Guidance</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200/60 dark:border-slate-800/60 flex flex-col items-center justify-center text-center">
                <div className="text-3xl font-bold font-serif text-accent-color dark:text-accent-gold text-center">
                  {scholarlyGuidance.mphilGuidance}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium text-center">M.Phil. Guidance</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200/60 dark:border-slate-800/60 flex flex-col items-center justify-center text-center">
                <div className="text-3xl font-bold font-serif text-accent-color dark:text-accent-gold text-center">
                  {scholarlyGuidance.pgProjects}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium text-center">PG Projects Guided</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200/60 dark:border-slate-800/60 flex flex-col items-center justify-center text-center">
                <div className="text-3xl font-bold font-serif text-accent-color dark:text-accent-gold text-center">
                  {scholarlyGuidance.hIndex}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium text-center">H-Index Citations</div>
              </div>
            </div>

            {/* Doctoral Evaluation Board Section */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="text-accent-gold" size={20} />
                <h3 className="text-base font-sans font-bold text-slate-900 dark:text-white">
                  Doctoral Evaluation Board Member
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Serving as doctoral thesis external examiner, evaluation committee member, and viva voce board member across premier Indian and international institutions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                {scholarlyGuidance.doctoralBoards.map((univ, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-650 dark:text-slate-300 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                    <span>{univ}</span>
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
