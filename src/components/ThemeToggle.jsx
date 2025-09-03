import {Sun, Moon} from "lucide-react";
import {useEffect, useState} from "react";
export const ThemeToggle = () => {

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
    }, []);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };
    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300 z-50"/> : <Moon className="h-6 w-6 text-black-300 z-50"/>}
        </button>
    );
}