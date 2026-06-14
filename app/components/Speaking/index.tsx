import ResponsiveView from "../ResponsiveView";
import SpeakingDesktop from "./index_desktop";
import SpeakingMobile from "./index_mobile";

export default function Speaking() {
  return <ResponsiveView mobile={<SpeakingMobile />} desktop={<SpeakingDesktop />} />;
}
