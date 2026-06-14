import ResponsiveView from "../ResponsiveView";
import SkillsDesktop from "./index_desktop";
import SkillsMobile from "./index_mobile";

export default function Skills() {
  return <ResponsiveView mobile={<SkillsMobile />} desktop={<SkillsDesktop />} />;
}
