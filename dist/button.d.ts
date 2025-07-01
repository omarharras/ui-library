import { default as React } from 'react';
type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
