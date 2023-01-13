type DarkModeBtnProps<T extends React.ElementType> = {} & Component<T>;
import { ChangeEventHandler, useLayoutEffect, useRef } from 'react';
import { tw } from 'utils/tailwindMerge';

export function DarkModeToggleBtn({ children, className, ...restProps }: DarkModeBtnProps<'label'>) {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    const isDarkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDarkMode);
    (inputRef.current as unknown as HTMLInputElement).checked = isDarkMode;
  }, []);

  const handleDarkModeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked } = e.target;
    localStorage.theme = checked ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', localStorage.theme === 'dark');
  };
  return (
    <label className={tw('relative inline-block h-[34px] w-[60px]', className)} {...restProps}>
      <input ref={inputRef} type="checkbox" className="peer h-0 w-0 opacity-0" onChange={handleDarkModeChange} />
      <span className="absolute inset-0 cursor-pointer rounded-[34px] bg-darkGray transition-all peer-checked:bg-lightGray"></span>
      <span className="absolute left-[4px] bottom-[4px] h-[26px] w-[26px] cursor-pointer rounded-full border-2 border-darkGray bg-white transition-all peer-checked:translate-x-[26px] peer-checked:bg-white "></span>
    </label>
  );
}
