import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { profileData } from '../data/profile';

const About = () => {
  const { personalInfo, aboutMe, education } = profileData;

  return (
    <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-4xl flex flex-col gap-16 animate-fade-up">
        {/* Header Block */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
            Biography & CV
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
            About {personalInfo.name}
          </h1>
          <div className="h-[3px] w-24 bg-accent-gold rounded-full" />
        </div>

        {/* Detailed Biography Block */}
        <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col gap-6">
          <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
            Academic Background & Vision
          </h2>
          {aboutMe.bio.map((paragraph, i) => (
            <p key={i} className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Career Timeline Section */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Briefcase className="text-accent-gold" size={28} />
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              Professional Journey
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-12 pl-8 flex flex-col gap-10">
            {aboutMe.timeline.map((item, i) => (
              <div key={i} className="relative group">
                {/* Timeline node */}
                <div 
                  className="absolute bg-slate-50 dark:bg-slate-950 rounded-full border-2 border-accent-gold transition-transform group-hover:scale-125 duration-300"
                  style={{
                    left: '-48px',
                    top: '6px',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0
                  }}
                >
                  <Calendar size={14} className="text-accent-gold" />
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-xs font-mono font-bold text-accent-gold bg-amber-50 dark:bg-amber-950/20 px-2.5 py-1 rounded">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-sans font-bold text-slate-900 dark:text-white mt-3">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {item.institution}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-accent-gold" size={32} />
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              Education Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col gap-3"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    Year: {edu.year}
                  </span>
                </div>
                <h3 className="text-lg font-sans font-bold text-slate-900 dark:text-white leading-snug">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-accent-color dark:text-accent-gold">
                  {edu.institution}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
