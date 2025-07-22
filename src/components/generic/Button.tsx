type Props = {
  children: any
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'flat';
  className?: string
}

type Variant = {
    primary: string
    secondary: string,
    outline: string,
    flat: string
}

const Button = ({ children, onClick, href, variant = 'primary', className = '', ...props } : Props) => {
  const base = `px-4 py-2 rounded transition font-semibold text-sm cursor-pointer`;

  const variants : Variant = {
    primary: `bg-blue-700 text-white hover:bg-blue-900 dark:bg-blue-700 dark:text-white hover:dark:bg-blue-900 border-2`,
    secondary: `bg-gray-100 text-gray-800 hover:bg-gray-200`,
    outline: `border border-gray-400`,
    flat: ""
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={"button"} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
