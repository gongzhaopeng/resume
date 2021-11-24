import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export function ScrollToTopAnyway() {
    useEffect(() => {
        console.log("Scrolling to top...")
        window.scrollTo(0, 0);
    });

    return null;
}

export function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop
