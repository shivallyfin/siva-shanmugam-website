import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle, Award, Users, Building, Globe } from 'lucide-react';
import { profileData } from '../data/profile';

const About = () => {
  const { personalInfo, aboutMe, education, coreCompetencies, scholarlyGuidance, industryAssociations, professionalMemberships } = profileData;

  return (
    <div className="pt-[110px] pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-4xl flex flex-col gap-16 animate-fade-up">
        {/* Header Block */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
            Executive Profile & Academic Leadership
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
            About {personalInfo.name}
          </h1>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="badge badge-accent">{personalInfo.subtitle}</span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {personalInfo.institution}
            </span>
          </div>
          <div className="h-[3px] w-24 bg-accent-gold rounded-full mt-1" />
        </div>

        {/* Academic Background & Vision Section */}
        <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              Academic Background & Vision
            </h2>
            <div className="h-[2px] w-16 bg-accent-gold rounded-full" />
          </div>

          {/* Vision Paragraphs */}
          <div className="flex flex-col gap-4">
            {aboutMe.bio.map((paragraph, i) => (
              <p key={i} className="text-slate-650 dark:text-slate-300 font-sans leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Core Leadership Competencies */}
          <div className="flex flex-col gap-3 pt-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
              Core Leadership Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {(coreCompetencies || []).map((comp, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60 transition-colors"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Key Leadership Contributions & Achievements */}
          <div className="flex flex-col gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <Award className="text-accent-gold" size={22} />
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                Key Leadership Contributions & Achievements
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-1">
              {(aboutMe.keyAchievements || []).map((achievement, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800/60 hover:border-accent-gold/40 transition-colors"
                >
                  <CheckCircle className="text-accent-gold shrink-0 mt-0.5" size={17} />
                  <span className="text-xs md:text-sm text-slate-650 dark:text-slate-300 leading-snug font-sans">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Leadership Experience (Professional Journey) */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Briefcase className="text-accent-gold" size={28} />
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                Academic Leadership Experience
              </h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Professional journey serving as Professor, Dean, Director, and Head of Department across premier institutions.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-6 md:ml-12 pl-6 md:pl-8 flex flex-col gap-10">
            {aboutMe.timeline.map((item, i) => (
              <div key={i} className="relative group">
                {/* Timeline node */}
                <div 
                  className="absolute bg-slate-50 dark:bg-slate-950 rounded-full border-2 border-accent-gold transition-transform group-hover:scale-125 duration-300"
                  style={{
                    left: '-39px',
                    top: '6px',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0
                  }}
                >
                  <Calendar size={13} className="text-accent-gold" />
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-accent-gold bg-amber-50 dark:bg-amber-950/20 px-2.5 py-1 rounded">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-sans font-bold text-slate-900 dark:text-white mt-3">
                    {item.role}
                  </h3>
                  
                  <div className="text-sm font-semibold text-accent-color dark:text-accent-gold mt-1">
                    {item.institution}
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 font-sans leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-1.5 list-none pl-0">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <span className="text-accent-gold font-bold font-mono">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Credentials Section */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-accent-gold" size={32} />
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              Educational Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col justify-between gap-3 hover:border-accent-gold/40 transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-semibold text-accent-gold font-mono bg-amber-50 dark:bg-amber-950/20 px-2 py-0.5 rounded">
                      {edu.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-sans font-bold text-slate-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-650 dark:text-slate-300">
                    {edu.institution}
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3 mt-1">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Research & Scholarly Guidance */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Users className="text-accent-gold" size={28} />
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              Research & Scholarly Guidance
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col gap-6">
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-2xl font-bold font-serif text-accent-color dark:text-accent-gold text-center">
                  {scholarlyGuidance.phdGuidance}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">Ph.D. Scholars Guided</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-2xl font-bold font-serif text-accent-color dark:text-accent-gold text-center">
                  {scholarlyGuidance.mphilGuidance}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">M.Phil. Scholars Guided</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-2xl font-bold font-serif text-accent-color dark:text-accent-gold text-center">
                  {scholarlyGuidance.pgProjects}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">PG Projects Guided</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-2xl font-bold font-serif text-accent-color dark:text-accent-gold text-center">
                  {scholarlyGuidance.hIndex}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">H-Index Citation Impact</div>
              </div>
            </div>

            {/* Doctoral Board */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-sans font-bold text-slate-900 dark:text-white">
                Doctoral Evaluation Board Member:
              </h3>
              <div className="flex flex-wrap gap-2">
                {scholarlyGuidance.doctoralBoards.map((univ, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-650 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60"
                  >
                    {univ}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industry & Professional Associations */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Building className="text-accent-gold" size={28} />
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              Industry & Professional Associations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industryAssociations.map((assoc, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col justify-between gap-3 hover:border-accent-gold/40 transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold font-sans text-slate-900 dark:text-white">
                      {assoc.organization}
                    </h3>
                    <span className="text-xs font-mono font-bold text-accent-gold bg-amber-50 dark:bg-amber-950/20 px-2.5 py-1 rounded">
                      {assoc.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {assoc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Globe className="text-accent-gold" size={28} />
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              Professional Memberships & Affiliations
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professionalMemberships.map((membership, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800/60 hover:border-accent-gold/40 transition-colors"
                >
                  <div className="p-2 bg-amber-50 dark:bg-amber-950/20 rounded-lg shrink-0">
                    <Award className="text-accent-gold" size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-accent-color dark:text-accent-gold font-mono">
                      {membership.title}
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white font-sans">
                      {membership.organization}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
