import React from 'react';

/**
 * Reusable Pill component for skills, tags, and technologies
 */
export function Pill({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className = '',
  icon: Icon
}) {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-xs sm:text-sm px-3 py-1.5',
    lg: 'text-sm px-4 py-2'
  };

  const variantClasses = {
    default:
      'bg-slate-900/90 text-slate-200 border border-slate-700/70 hover:border-accent/60 hover:text-white hover:bg-slate-800/80 transition-all shadow-sm',
    accent:
      'bg-accent-muted text-accent border border-accent/40 hover:bg-accent/20 hover:border-accent',
    highlight:
      'bg-emerald-950/40 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-900/30',
    secondary:
      'bg-secondary-muted text-secondary border border-secondary/40 hover:bg-secondary/20',
    outlined:
      'bg-transparent text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-200'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-200 ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.default} ${className}`}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      )}
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </span>
  );
}

export default Pill;
