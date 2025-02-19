'use client';

interface MainCardProps {
  children: React.ReactNode;
}

export default function MainCard({ children }: MainCardProps) {
  return (
    <div className="max-w-7xl mx-auto px-8">
      {/* Main White Card Container */}
      <div className="relative mt-2 bg-white rounded-3xl shadow-soft overflow-hidden">
        {/* Content */}
        <div className="relative z-10 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
} 