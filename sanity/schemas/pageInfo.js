export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "FirstName",
      type: "string",
    },
    {
      name: "lastName",
      title: "LastName",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "aboutImage",
      title: "AboutImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "aboutInfo",
      title: "AboutInfo",
      type: "string",
    },
    {
      name: "heroShortDescription",
      title: "HeroShortDescription",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
   
  ],
};
