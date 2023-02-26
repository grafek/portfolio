import { SectionHeading } from "../components/UI";

const SectionWrap = (Component, idName, sectionName, classsName) =>
  function HOC(props) {
    return (
      <section
        id={idName}
        className={`snap-center h-screen min-h-screen relative overflow-hidden ${classsName}`}
      >
        {sectionName ? <SectionHeading>{sectionName}</SectionHeading> : null}
        <Component {...props} />
      </section>
    );
  };

export default SectionWrap;
