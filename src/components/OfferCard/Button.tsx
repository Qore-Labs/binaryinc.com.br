import { Icons } from "../UI/Icons";

interface ButtonProps {
  label: string;
  hasIcon?: boolean;
  onClick: VoidFunction;
}

export const Button = ({ label, hasIcon = false, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer flex items-center-safe justify-start gap-6 mt-4 text-(--blue) transition-all hover:brightness-70 text-lg font-semibold"
    >
      {label}
      {hasIcon && <Icons.Default.ArrowRight width={12} height={12} />}
    </button>
  );
};
