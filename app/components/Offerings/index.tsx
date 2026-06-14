import ResponsiveView from "../ResponsiveView";
import type { OfferingsView } from "./interfaces";
import OfferingsDesktop from "./index_desktop";
import OfferingsMobile from "./index_mobile";

interface OfferingsProps {
  view: OfferingsView;
}

export default function Offerings({ view }: OfferingsProps) {
  return (
    <ResponsiveView
      mobile={<OfferingsMobile view={view} />}
      desktop={<OfferingsDesktop view={view} />}
    />
  );
}
