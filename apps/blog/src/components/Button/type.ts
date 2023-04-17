import type { CSSProperties, ButtonHTMLAttributes } from "react";

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
  title: string;
  onClick: () => void;
  block: boolean;
  size: "sm" | "md" | "lg";
  color: "default" | "danger";
  spanClassName: string;
}

type ButtonProps = Partial<ButtonProperties> & CustomComponentProps;
type CustomComponentProps = Partial<ComponentCommonProps>;
interface ComponentCommonProps {
  className: string;
  style: CSSProperties;
}

export type { ButtonProps };
