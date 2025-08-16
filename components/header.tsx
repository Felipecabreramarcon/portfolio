import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-secondary-foreground/50 text-secondary">
      <h1 className="text-lg font-bold">My Portfolio</h1>
      <AnimatedThemeToggler />
    </header>
  );
}
