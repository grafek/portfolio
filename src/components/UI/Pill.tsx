type PillProps = { children: React.ReactNode; className?: string };

const Pill: React.FC<PillProps> = ({ children, className }) => {
  return (
    <span
      className={`${className} inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold transition-colors dark:bg-darkBg`}
    >
      {children}
    </span>
  );
};

export default Pill;
