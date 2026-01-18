export const Typography = Object.freeze({
  FONT_FAMILIES: ["Plus Jakarta Sans:400,600,700", "JetBrains Mono"],
  DEFAULT_FONT: "Plus Jakarta Sans",
  MONOSPACE_FONT: "JetBrains Mono",
  TEXT_SHADOW: "0.2rem 0.2rem 2rem rgba(0, 0, 0, 0.2)",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  SECTION_TITLE_TAG: "h3",
  CARD_TITLE_TAG: "h5",
  SUBHEADING_TAG: "h4",
});

export const Style = Object.freeze({
  BORDER_RADIUS: ".5rem",
  BORDER_RADIUS_SM: ".25rem",
  TRANSITION_DURATION: ".3s",
  LIGHT_THEME: "light",
  DARK_THEME: "dark",
});

export const IconSize = Object.freeze({
  SIZE_SM: "1.25rem",
  SIZE_MD: "1.5rem",
  SIZE_LG: "2rem",
});

export const DeviceSize = {
  MOBILE_SM: 320,
  MOBILE_MD: 425,
  MOBILE_LG: 600,
  TABLET: 768,
  LAPTOP: 1024,
  LAPTOP_LG: 1440,
  DESKTOP: 2560,
};
export const Breakpoint = Object.freeze({
  MOBILE_S: `(max-width: ${DeviceSize.MOBILE_SM}px)`,
  MOBILE_MD: `(max-width: ${DeviceSize.MOBILE_MD}px)`,
  MOBILE_LG: `(max-width: ${DeviceSize.MOBILE_LG}px)`,
  TABLET: `(max-width: ${DeviceSize.TABLET}px)`,
  LAPTOP: `(max-width: ${DeviceSize.LAPTOP}px)`,
  LAPTOP_LG: `(max-width: ${DeviceSize.LAPTOP_LG}px)`,
  DESKTOP: `(max-width: ${DeviceSize.DESKTOP}px)`,
});

export const Layout = Object.freeze({
  CONTENT_MAX_WIDTH: `1400px`,
  GAP_SM: ".5rem",
  GAP_MD: "1.5rem",
  GAP_LG: "3rem",
  GAP_XL: "5rem",
  PADDING_XS: ".75rem",
  PADDING_SM: "1rem",
  PADDING_MD: "2rem",
  PADDING_LG: "3rem",
  PADDING_XL: "5rem",
  SECTION_PADDING: "3rem",
  SECTION_PADDING_SM: "1.5rem",
  CARD_PADDING: "1.5rem",
  HEADER_HEIGHT: "4.5rem",
  FOOTER_HEIGHT: "8rem",
});
