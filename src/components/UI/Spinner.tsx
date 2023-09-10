function Spinner() {
  return (
    <div
      role="status"
      className="relative inline-block h-20 w-20 [&>div]:absolute  [&>div]:box-border [&>div]:block [&>div]:h-20 [&>div]:w-20 [&>div]:rounded-full [&>div]:border-[3px] [&>div]:border-transparent [&>div]:border-t-blue-600"
    >
      <div className="animate-[spin_1.3s_cubic-bezier(0.5,0,0.5,0.1)_infinite]" />
      <div className="animate-[spin_1.3s_cubic-bezier(0.5,0,0.5,0.1)_infinite_-450ms]" />
      <div className="animate-[spin_1.3s_cubic-bezier(0.5,0,0.5,0.1)_infinite_-300ms]" />
      <div className="animate-[spin_1.3s_cubic-bezier(0.5,0,0.5,0.1)_infinite_-150ms]" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
