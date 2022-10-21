import Card from "./UI/Card";
import SectionHeading from "./UI/SectionHeading";

export default function Qualities() {
  return (
    <>
      <SectionHeading title={"My Qualities"} />
      <section className="mx-auto grid grid-flow-row auto-cols-auto py-10 gap-14 xl:grid-cols-2 ">
        <Card
          title={"Restaurant landing page"}
          tags={["#react", "#tailwind"]}
          img={"/pizza.jpg"}
          hasBackdrop={true}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries,
        </Card>
        <Card
          title={"Restaurant landing page"}
          tags={["#react", "#tailwind"]}
          img={"/pizza.jpg"}
          url={'"https://stackoverflow.com/"'}
          hasBackdrop={true}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries,
        </Card>
        <Card title={"Card Header"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries,
        </Card>
        <Card title={"Card Header"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries,
        </Card>
        <Card title={"Card Header"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting Lorem
          Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&apos;s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
        </Card>
        <Card title={"Card Header"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting Lorem
          Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&apos;s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          to make a type specimen book. It has survived not only five centuries,
          to make a type specimen book. It has survived not only five centuries,
          to make a type specimen book. It has survived not only five centuries,
          to make a type specimen book. It has survived not only five centuries,
          to make a type specimen book. It has survived not only five centuries,
        </Card>
        <Card title={"Card Header"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting Lorem
          Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&apos;s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
        </Card>
      </section>
    </>
  );
}
