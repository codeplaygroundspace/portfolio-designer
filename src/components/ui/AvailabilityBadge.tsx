import React from "react";

interface AvailabilityBadgeProps {
  text: string;
  variant?: "default" | "compact";
  className?: string;
}

const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({
  text,
  variant = "default",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full border transition-all duration-200";
  const variantClasses = {
    default: "px-4 py-2 text-sm font-medium",
    compact: "px-3 py-1.5 text-xs font-medium",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} bg-green-50 border-green-200 text-green-800 hover:bg-green-100 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-900/30 ${className}`}
    >
      <div className="relative">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
      </div>
      <span>{text}</span>
    </div>
  );
};

export default AvailabilityBadge;
