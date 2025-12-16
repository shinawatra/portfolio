import {
  useModeAnimation,
  ThemeAnimationType,
} from 'react-theme-switch-animation';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeButton() {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    animationType: ThemeAnimationType.BLUR_CIRCLE, // Options: CIRCLE,        BLUR_CIRCLE, QR_SCAN
    // For BLUR_CIRCLE: Add blurAmount: 4, duration: 1000
    // For QR_SCAN: Add duration: 500
    duration: 750,
    easing: 'ease-in-out',
  });

  return (
    <>
      <button
        ref={ref}
        onClick={toggleSwitchTheme}
        className="p-2 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors absolute top-6 right-6 cursor-pointer"
      >
        {isDarkMode ? (
          <FaMoon className="text-[#9fb6b3] hover:text-white" />
        ) : (
          <FaSun className="text-[#333] hover:text-[#666]" />
        )}
      </button>
    </>
  );
}

export default ThemeButton;
