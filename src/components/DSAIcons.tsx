import React from 'react';

export const TreeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="20" r="12" fill="currentColor" opacity="0.9"/>
    <circle cx="25" cy="50" r="10" fill="currentColor" opacity="0.7"/>
    <circle cx="75" cy="50" r="10" fill="currentColor" opacity="0.7"/>
    <circle cx="12" cy="80" r="8" fill="currentColor" opacity="0.5"/>
    <circle cx="38" cy="80" r="8" fill="currentColor" opacity="0.5"/>
    <circle cx="62" cy="80" r="8" fill="currentColor" opacity="0.5"/>
    <circle cx="88" cy="80" r="8" fill="currentColor" opacity="0.5"/>
    <line x1="50" y1="32" x2="25" y2="40" stroke="currentColor" strokeWidth="2"/>
    <line x1="50" y1="32" x2="75" y2="40" stroke="currentColor" strokeWidth="2"/>
    <line x1="25" y1="60" x2="12" y2="72" stroke="currentColor" strokeWidth="2"/>
    <line x1="25" y1="60" x2="38" y2="72" stroke="currentColor" strokeWidth="2"/>
    <line x1="75" y1="60" x2="62" y2="72" stroke="currentColor" strokeWidth="2"/>
    <line x1="75" y1="60" x2="88" y2="72" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const GraphIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="30" r="10" fill="currentColor" opacity="0.8"/>
    <circle cx="80" cy="20" r="10" fill="currentColor" opacity="0.8"/>
    <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.9"/>
    <circle cx="25" cy="80" r="10" fill="currentColor" opacity="0.6"/>
    <circle cx="75" cy="75" r="10" fill="currentColor" opacity="0.7"/>
    <line x1="28" y1="35" x2="42" y2="45" stroke="currentColor" strokeWidth="2"/>
    <line x1="58" y1="45" x2="72" y2="25" stroke="currentColor" strokeWidth="2"/>
    <line x1="55" y1="58" x2="70" y2="68" stroke="currentColor" strokeWidth="2"/>
    <line x1="45" y1="58" x2="30" y2="72" stroke="currentColor" strokeWidth="2"/>
    <line x1="35" y1="80" x2="65" y2="75" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const StackIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="70" width="60" height="15" rx="3" fill="currentColor" opacity="0.5"/>
    <rect x="20" y="50" width="60" height="15" rx="3" fill="currentColor" opacity="0.65"/>
    <rect x="20" y="30" width="60" height="15" rx="3" fill="currentColor" opacity="0.8"/>
    <rect x="20" y="10" width="60" height="15" rx="3" fill="currentColor" opacity="0.95"/>
    <path d="M85 25 L95 15 L95 35 Z" fill="currentColor" opacity="0.6"/>
  </svg>
);

export const ArrayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="35" width="18" height="30" rx="2" fill="currentColor" opacity="0.6"/>
    <rect x="26" y="35" width="18" height="30" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="47" y="35" width="18" height="30" rx="2" fill="currentColor" opacity="0.8"/>
    <rect x="68" y="35" width="18" height="30" rx="2" fill="currentColor" opacity="0.9"/>
    <text x="14" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">1</text>
    <text x="35" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">2</text>
    <text x="56" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
    <text x="77" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">4</text>
  </svg>
);

export const LinkedListIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="50" r="10" fill="currentColor" opacity="0.7"/>
    <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.8"/>
    <circle cx="85" cy="50" r="10" fill="currentColor" opacity="0.9"/>
    <path d="M25 50 L35 50 M35 45 L40 50 L35 55" stroke="currentColor" strokeWidth="2"/>
    <path d="M60 50 L70 50 M70 45 L75 50 L70 55" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const SortIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="70" width="12" height="20" rx="2" fill="currentColor" opacity="0.5"/>
    <rect x="27" y="55" width="12" height="35" rx="2" fill="currentColor" opacity="0.6"/>
    <rect x="44" y="40" width="12" height="50" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="61" y="25" width="12" height="65" rx="2" fill="currentColor" opacity="0.8"/>
    <rect x="78" y="10" width="12" height="80" rx="2" fill="currentColor" opacity="0.9"/>
  </svg>
);

export const HashIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="10" x2="20" y2="90" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    <line x1="70" y1="10" x2="60" y2="90" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    <line x1="10" y1="35" x2="90" y2="35" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    <line x1="10" y1="65" x2="90" y2="65" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

export const BotIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="8" cy="14" r="2" fill="currentColor"/>
    <circle cx="16" cy="14" r="2" fill="currentColor"/>
    <path d="M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="4" r="1.5" fill="currentColor"/>
    <path d="M3 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M23 12h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
