import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export default function Button({
  children,
  isLoading,
  variant = 'primary',
  className = '',
  ...rest
}: Props) {
  return (
    <button
      type="submit"
      className={`
        px-4 py-3 w-[100%] rounded-[8px] h-[60px]
        flex items-center justify-center relative
        whitespace-nowrap font-medium text-lg
        disabled:cursor-not-allowed
        disabled:bg-[#c7c7c7]
        disabled:text-black
        bg-[#066fde]
        text-white
        ${isLoading ? 'cursor-progress' : ''}
        ${variant === 'primary' ? 'bg-primary' : ''}
        ${variant === 'secondary' ? 'bg-secondary' : ''}
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}