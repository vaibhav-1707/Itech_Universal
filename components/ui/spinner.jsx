import { cn } from "@/lib/utils";

const Spinner = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-4 border-muted border-t-primary h-6 w-6",
        className
      )}
      {...props}
    />
  );
};

export default Spinner;