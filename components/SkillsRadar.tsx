
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { SKILLS } from '../constants';

const SkillsRadar: React.FC = () => {
  return (
    <div className="h-[400px] w-full flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsRadar;
