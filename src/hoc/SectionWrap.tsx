import { ComponentType } from 'react';
import { SectionHeading } from '../components/UI';

const SectionWrap = <T extends {}>(
  Component: ComponentType<T>,
  idName?: string,
  sectionName?: string,
  classsName?: string
) =>
  function HOC(props: T) {
    return (
      <section
        id={idName}
        className={`relative flex h-[100dvh] snap-start flex-col overflow-hidden ${classsName}`}
      >
        {sectionName ? <SectionHeading>{sectionName}</SectionHeading> : null}
        <div className="flex h-full flex-col justify-center pl-3 pr-5">
          <Component {...props} />
        </div>
      </section>
    );
  };

export default SectionWrap;
