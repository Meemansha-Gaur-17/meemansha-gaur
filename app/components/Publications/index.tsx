import ResponsiveView from "../ResponsiveView";
import PublicationsDesktop from "./index_desktop";
import PublicationsMobile from "./index_mobile";

export default function Publications() {
  return <ResponsiveView mobile={<PublicationsMobile />} desktop={<PublicationsDesktop />} />;
}
