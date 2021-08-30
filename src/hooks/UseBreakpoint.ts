export const useBreakpoint = <T = undefined>(onMobile?: T, onDesktop?: T, onTablet?: T): T | undefined => {
    if (typeof window !== "undefined")
        if (window?.innerWidth <= 768) {
            return onMobile;
        } else if (window?.innerWidth >= 1200) {
            return onDesktop;
        } else {
            return onTablet;
        }
}

export default useBreakpoint;