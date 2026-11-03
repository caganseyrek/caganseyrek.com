interface ProjectProps {
  key: string;
  title: string;
  description: string;
  links:
    | { repository: string; website?: undefined }
    | { repository?: undefined; website: string }
    | { repository: string; website: string };
}

export const projects: ProjectProps[] = [
  {
    key: "1",
    title: "Uzun Mühendislik & Proje",
    description: "Gelibolu merkezli inşaat mühendisliği ofisi websitesi",
    links: {
      website: "https://uzunmuhendislikproje.com/",
    },
  },
  {
    key: "2",
    title: "İzmir Atlası",
    description: "İzmir'deki önemli, tarihi ve kültürel yerleri gösteren interaktif harita",
    links: {
      repository: "https://github.com/caganseyrek/izmir-atlasi",
      website: "https://atlas.caganseyrek.com/",
    },
  },
  {
    key: "3",
    title: "Johnson",
    description: "Sunucu grubu yönetimi için discovery ve proxy servisi",
    links: {
      repository: "https://github.com/caganseyrek/Johnson",
    },
  },
  // {
  //   key: "4",
  //   title: "",
  //   description: "",
  //   links: {
  //     repository: "",
  //   },
  // },
  // {
  //   key: "5",
  //   title: "",
  //   description: "",
  //   links: {
  //     repository: "",
  //   },
  // },
  // {
  //   key: "6",
  //   title: "",
  //   description: "",
  //   links: {
  //     repository: "",
  //   },
  // },
];
