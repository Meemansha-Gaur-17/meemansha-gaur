import ResponsiveView from "../ResponsiveView";
import AboutDesktop from "./index_desktop";
import AboutMobile from "./index_mobile";

export default function About() {
  return <ResponsiveView mobile={<AboutMobile />} desktop={<AboutDesktop />} />;
}
