import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  leftIcon,
  rightIcon,
  isLoading = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amethyst-500/50 select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "relative text-white bg-gradient-to-r from-amethyst-600 via-amethyst-500 to-violet-royal hover:from-amethyst-500 hover:to-amethyst-700 shadow-amethyst-glow hover:shadow-amethyst-glow-lg border border-white/25 hover:border-white/40 overflow-hidden",
    secondary:
      "text-violet-royal dark:text-pearl-100 bg-white/70 dark:bg-violet-deep/80 hover:bg-white dark:hover:bg-violet-royal/90 border border-amethyst-500/25 hover:border-amethyst-500/50 backdrop-blur-md shadow-sm",
    outline:
      "text-violet-royal dark:text-pearl-100 bg-transparent hover:bg-amethyst-500/10 border border-silver-border dark:border-silver-muted hover:border-amethyst-400",
    ghost:
      "text-violet-royal dark:text-pearl-100 bg-transparent hover:bg-amethyst-500/10 dark:hover:bg-amethyst-500/20",
  };

  const disabledStyles = disabled || isLoading ? "opacity-60 cursor-not-allowed pointer-events-none" : "";

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
