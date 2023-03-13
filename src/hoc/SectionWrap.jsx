import { SectionHeading } from "../components/UI";

const SectionWrap = (Component, idName, sectionName, classsName) =>
  function HOC(props) {
    return (
      <section
        id={idName}
        className={`snap-start h-[100dvh] relative flex flex-col overflow-hidden ${classsName}`}
      >
        {sectionName ? <SectionHeading>{sectionName}</SectionHeading> : null}
        <div className="h-full flex flex-col justify-center">
          <Component {...props} />
        </div>
      </section>
    );
  };

export default SectionWrap;
