import { DeviceSize } from "constants/layout";
import { useResize } from "./useResize";

export function useIsMobile() {
  const { width } = useResize();
  const isMobile = width <= DeviceSize.MOBILE_LG;

  return { isMobile };
}
