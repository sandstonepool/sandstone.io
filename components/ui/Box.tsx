interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export function Box({ children, className = '' }: BoxProps) {
  return (
    <div className={`backdrop-blur-md bg-white/40 border border-white/60 rounded-xl hover:bg-white/50 hover:shadow-xl transition-all ${className}`}>
      {children}
    </div>
  )
}
