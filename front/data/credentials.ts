export type CredentialType = "certification" | "course";

export type Credential = {
  id: string;
  type: CredentialType;
  title: string;
  issuer: string;
  date: string;
  href: string;
  imageUrl: string;
};

/** Links verified via LinkedIn, Credly, Udemy, and issuer portals. */
export const credentials: Credential[] = [
  {
    id: "udemy-langchain-langgraph-agents",
    type: "certification",
    title: "Curso Completo: LangChain, LangGraph y Agentes IA con Python",
    issuer: "Udemy",
    date: "Jul 2026",
    href: "https://www.udemy.com/certificate/UC-2b2dcbb3-a36d-4a73-ac55-96f2d7e293b7/",
    imageUrl:
      "https://import.cdn.thinkific.com/967498/custom_site_themes/id/c5pEwJslQAuMpkpx5BKz_Light-rounded%20corners-2x.png",
  },
  {
    id: "aws-ai-practitioner",
    type: "certification",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "Mar 2026",
    href: "https://www.credly.com/badges/a6b3bb1c-3330-4051-9619-6c78f1f3146d/public_url",
    imageUrl:
      "https://images.credly.com/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
  },
  {
    id: "cscrb",
    type: "certification",
    title: "Certified Security Code Review Beginners (CSCRB)",
    issuer: "Red Team Leaders",
    date: "Sep 2025",
    href: "https://courses.redteamleaders.com/exam-completion/7563923b97ada415",
    imageUrl:
      "https://images.coursestack.com/394acfd1-4fc9-46e4-9741-d3d88066d0e3",
  },
  {
    id: "lfd121-secure-software",
    type: "certification",
    title: "LFD121: Developing Secure Software",
    issuer: "The Linux Foundation",
    date: "Aug 2024",
    href: "https://www.credly.com/badges/2ae89f83-0cf9-4638-beac-99190db046c5/public_url",
    imageUrl:
      "https://images.credly.com/images/ee986187-6637-45e9-8184-8382dc117432/blob",
  },
  {
    id: "aws-cloud-practitioner",
    type: "certification",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Aug 2024",
    href: "https://www.credly.com/badges/45c85a66-219e-4606-8abe-a1ca9d09adc5/public_url",
    imageUrl:
      "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
  },
  {
    id: "ef-set",
    type: "certification",
    title: "EF SET English Certificate — 56/100 (B2 Upper Intermediate)",
    issuer: "EF Standard English Test (EF SET)",
    date: "Sep 2022",
    href: "https://efset.org/cert/SLhE6g",
    imageUrl:
      "https://a.storyblok.com/f/79503/103x24/3d8037116f/ef-set-logo-nav.svg",
  },
  {
    id: "platzi-openai-api",
    type: "course",
    title: "Curso de OpenAI API",
    issuer: "Platzi",
    date: "Feb 2025",
    href: "https://platzi.com/p/elvertobo2017/curso/11458-openai-api/diploma/detalle/",
    imageUrl: "/credentials/openai.svg",
  },
  {
    id: "platzi-dynamodb",
    type: "course",
    title: "Amazon DynamoDB",
    issuer: "Platzi",
    date: "Aug 2023",
    href: "https://platzi.com/p/elvertobo2017/curso/6142-dynamodb/diploma/detalle/",
    imageUrl:
      "https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg",
  },
  {
    id: "platzi-algorithms",
    type: "course",
    title: "Complejidad Algorítmica con Python",
    issuer: "Platzi",
    date: "Apr 2023",
    href: "https://platzi.com/p/elvertobo2017/curso/1775-algoritmos-python/diploma/detalle/",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    id: "platzi-python",
    type: "course",
    title: "Python",
    issuer: "Platzi",
    date: "Dec 2022",
    href: "https://platzi.com/p/elvertobo2017/curso/2397-python-profesional/diploma/detalle/",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    id: "platzi-redshift",
    type: "course",
    title: "AWS Redshift para Manejo de Big Data",
    issuer: "Platzi",
    date: "Oct 2022",
    href: "https://platzi.com/p/elvertobo2017/curso/1983-redshift-big-data/diploma/detalle/",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Amazon-Redshift-Logo.svg",
  },
  {
    id: "linkedin-databases",
    type: "course",
    title: "Bases de datos",
    issuer: "LinkedIn",
    date: "May 2020",
    href: "https://www.linkedin.com/learning/certificates/056f2b5722c82b766de268bc9ae1e5e71b9f0b62070a6516d75f0dad7966051c",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
];

export function getCredentialsByType(type: CredentialType): Credential[] {
  return credentials.filter((item) => item.type === type);
}
