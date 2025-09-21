import { useContext } from "react";
import ThemeContext from "./ThemeContext";  // ✅ default import

// Custom hook for consuming ThemeContext
export const useTheme = () => useContext(ThemeContext);
