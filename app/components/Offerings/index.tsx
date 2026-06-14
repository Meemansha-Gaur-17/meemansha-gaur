import ResponsiveView from "../ResponsiveView";
import OfferingsDesktop from "./index_desktop";
import OfferingsMobile from "./index_mobile";

export default function Offerings() {
  return <ResponsiveView mobile={<OfferingsMobile />} desktop={<OfferingsDesktop />} />;
}
