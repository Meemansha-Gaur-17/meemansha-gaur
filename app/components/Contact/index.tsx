import ResponsiveView from "../ResponsiveView";
import ContactDesktop from "./index_desktop";
import ContactMobile from "./index_mobile";

export default function Contact() {
  return <ResponsiveView mobile={<ContactMobile />} desktop={<ContactDesktop />} />;
}
