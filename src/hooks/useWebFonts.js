import { Typography } from "global/constants";
import { useEffect } from "react";
import WebFont from "webfontloader";

export const useWebFonts = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: Typography.FONT_FAMILIES,
      },
    });
  }, []);
};
