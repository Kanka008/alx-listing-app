// Import ButtonProps type
import { ButtonProps } from '../../interfaces';

const Button = ({ text, onClick, variant = 'primary' }: ButtonProps) => {
  // Base button classes (always applied)
  const baseClasses = "py-2 px-4 rounded font-bold";
  
  // Different styles based on 'variant'
  const variantClasses = variant === 'primary' 
    ? "bg-blue-500 hover:bg-blue-700 text-white" 
    : "bg-gray-300 hover:bg-gray-400 text-gray-800";

  return (
    <button 
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;