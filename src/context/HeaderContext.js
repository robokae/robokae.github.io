import { useIsMobile } from "hooks/useIsMobile";
import { delay } from "lodash";
import { createContext, useContext, useEffect, useState } from "react";
import { useThemeContext } from "./ThemeContext";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(null);
  const [isPreviouslyTransparent, setIsPreviouslyTransparent] = useState(false);
  const [transition, setTransition] = useState(true);
  const { isMobile } = useIsMobile();
  const { theme } = useThemeContext();

  const delayTransition = () => {
    setTransition(false);
    delay(() => setTransition(true), 300);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    delayTransition();
  };

  /*
   * Close the menu if it's open when the screen is being resized and its width
   * is greater than that of which the menu supports.
   */
  useEffect(() => {
    setIsMenuOpen(false);
    delayTransition();
  }, [isMobile]);

  /*
   * Delay the header transition when the page is refreshed and when the theme
   * changes.
   */
  useEffect(() => {
    delayTransition();
  }, [theme]);

  /* Return the header transparency to the way it was when the menu is closed.
   * For example, if the menu is opened in the middle of the page, then the
   * header would initially be opaque, therefore the header should return to
   * being opaque and not transparent when the menu is closed. */
  useEffect(() => {
    if (isMenuOpen) {
      setIsPreviouslyTransparent(isTransparent);
      setIsTransparent(false);
      return;
    }
    isPreviouslyTransparent && setIsTransparent(isPreviouslyTransparent);
  }, [isMenuOpen]);

  return (
    <HeaderContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        isTransparent,
        setIsTransparent,
        transition,
        handleLinkClick,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }

  return context;
};
