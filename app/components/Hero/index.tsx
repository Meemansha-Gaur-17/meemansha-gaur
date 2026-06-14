import ResponsiveView from "../ResponsiveView";
import HeroDesktop from "./index_desktop";
import HeroMobile from "./index_mobile";

export default function Hero() {
  return <ResponsiveView mobile={<HeroMobile />} desktop={<HeroDesktop />} />;
}
