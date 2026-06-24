import { Icons } from "../UI/Icons";

interface ButtonProps {
  label: string;
  hasIcon?: boolean;
}

export const Button = ({ label, hasIcon = false }: ButtonProps) => {
  return (
    <button className="cursor-pointer flex items-center-safe justify-start gap-6 mt-4 text-(--blue) transition-all hover:brightness-70 text-lg font-semibold">
      {label}
      {hasIcon && <Icons.ArrowRight width={12} height={12} />}
    </button>
  );
};
