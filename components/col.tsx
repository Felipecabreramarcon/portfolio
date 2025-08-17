import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const Col = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(`flex flex-col transition-all`, className)} {...props}>
      {children}
    </div>
  );
};
