// ThemeToggle.tsx
import * as React from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-toggle p-2 rounded"
    >
      {theme === "light" ? "🌙" : "🌤️"}
    </button>
  );
};

export default ThemeToggle;
