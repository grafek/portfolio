import { ComponentType } from "react";
import { SectionHeading } from "../components/UI";

const SectionWrap = <T extends {}>(
  Component: ComponentType<T>,
  idName?: string,
  sectionName?: string,
  classsName?: string,
) =>
  function HOC(props: T) {
    return idName === "footer" ? (
      <footer id={idName} className={`relative ${classsName}`}>
        {sectionName ? <SectionHeading>{sectionName}</SectionHeading> : null}
        <Component {...props} />
      </footer>
    ) : (
      <section id={idName} className={`relative ${classsName}`}>
        {sectionName ? <SectionHeading>{sectionName}</SectionHeading> : null}
        <Component {...props} />
      </section>
    );
  };

export default SectionWrap;
