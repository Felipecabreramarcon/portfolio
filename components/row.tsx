import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export const Row = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(`flex items-center transition-all`, className)} {...props}>
      {children}
    </div>
  );
};
