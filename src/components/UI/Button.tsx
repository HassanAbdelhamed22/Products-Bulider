import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} p-2 text-white rounded-lg mt-2 transition duration-300 font-medium`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
