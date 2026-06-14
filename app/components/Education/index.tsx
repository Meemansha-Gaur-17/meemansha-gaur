import ResponsiveView from "../ResponsiveView";
import EducationDesktop from "./index_desktop";
import EducationMobile from "./index_mobile";

export default function Education() {
  return <ResponsiveView mobile={<EducationMobile />} desktop={<EducationDesktop />} />;
}
