import React from 'react';

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({ icon, title, description, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl p-4 text-left transition-all duration-300 hover:scale-105 hover:shadow-xl ${color}`}
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="w-12 h-12 mb-3 text-white/90">
          {icon}
        </div>
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </button>
  );
};
