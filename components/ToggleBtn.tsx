import { useTheme } from "./ThemeProvider";
import DarkIcon from "@/app/Icons/DarkIcon";
import LightIcon from "@/app/Icons/LightIcon";

const ToggleBtn = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
      <div
        className="tgl-btn-inner relative flex items-center bg-white px-2 py-1 rounded-[20px] cursor-pointer"
        onClick={toggleTheme}
      >
        {[
          { code: "light", icon: DarkIcon },
          { code: "dark", icon: LightIcon },
        ].map((ModeIcon) => (
          <div
            key={ModeIcon.code}
            className={`tbi-box flex items-center justify-center w-6 h-6 rounded-full transition-all ${
              theme === ModeIcon.code ? "bg-[#870303] text-white" : "text-gray-500"
            }`}
          >
            <ModeIcon.icon width={18} height={18} color={theme === ModeIcon.code ? "#FFF" : "#870303"} />
          </div>
        ))}
      </div>
  );
};

export default ToggleBtn;
