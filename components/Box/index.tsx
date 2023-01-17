import { tw } from 'utils/tailwindMerge';

type BoxProps<T extends React.ElementType> = {} & Component<T>;

export function Box({ children, className, ...restProps }: BoxProps<'div'>) {
  return (
    <div className={tw('bg-light-fg dark:bg-dark-fg rounded px-4 py-2', className)} {...restProps}>
      {children}
    </div>
  );
}
