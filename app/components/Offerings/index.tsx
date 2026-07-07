import ResponsiveView from "../ResponsiveView";
import type { OfferingsView } from "./interfaces";
import OfferingsDesktop from "./index_desktop";
import OfferingsMobile from "./index_mobile";
import { configForView } from "./constants";

interface OfferingsProps {
  view: OfferingsView;
}

export default function Offerings({ view }: OfferingsProps) {
  const { heading } = configForView(view);

  return (
    <>
      <h1 className="sr-only">{heading}</h1>
      <ResponsiveView
        mobile={<OfferingsMobile view={view} />}
        desktop={<OfferingsDesktop view={view} />}
      />
    </>
  );
}
