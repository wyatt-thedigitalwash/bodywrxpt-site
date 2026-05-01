import { forwardRef } from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "default" | "light";
  className?: string;
  target?: string;
  rel?: string;
}

const base =
  "inline-flex items-center justify-center min-h-[44px] px-7 py-3 text-[13px] font-medium uppercase tracking-[0.1em] border transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  default:
    "border-accent text-text hover:bg-accent hover:text-bg focus-visible:outline-accent",
  light:
    "border-bg/80 text-bg hover:bg-bg hover:text-ivory focus-visible:outline-bg",
};

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      href,
      onClick,
      type = "button",
      disabled = false,
      variant = "default",
      className = "",
      target,
      rel,
    },
    ref
  ) {
    const classes = `${base} ${variants[variant]} ${
      disabled ? "opacity-40 pointer-events-none cursor-not-allowed" : ""
    } ${className}`;

    if (href && !disabled) {
      // External link
      if (href.startsWith("http")) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            target={target}
            rel={rel}
          >
            {children}
          </a>
        );
      }

      // Internal link
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classes}
      >
        {children}
      </button>
    );
  }
);

export default Button;
