import Link from "next/link";
import { PROJETC_NAME } from "../../constants";

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Link href={"/"}>
      <h1 className="text:lg hidden md:block md:text-xl font-bold  dark:bg-linear-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-black dark:text-transparent">{PROJETC_NAME.toLocaleUpperCase()}</h1>
    </Link>
  )
}
