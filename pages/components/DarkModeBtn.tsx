type DarkModeBtnProps<T extends React.ElementType> = {} & Component<T>;
import { tw } from "utils/tailwindMerge";

export function DarkModeBtn({
  children,
  className,
  ...restProps
}: DarkModeBtnProps<"button">) {
  return (
    <button className={tw("", className)} {...restProps}>
      {children}
    </button>
  );
}
