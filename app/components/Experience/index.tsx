import ResponsiveView from "../ResponsiveView";
import ExperienceDesktop from "./index_desktop";
import ExperienceMobile from "./index_mobile";

export default function Experience() {
  return <ResponsiveView mobile={<ExperienceMobile />} desktop={<ExperienceDesktop />} />;
}
