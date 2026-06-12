import type { Locale } from "@/lib/i18n";

export type Article = {
  id: string;
  title: Record<Locale, string>;
  snippet: Record<Locale, string>;
  date: Record<Locale, string>;
  readingTime: number;
  href: Record<Locale, string>;
  gradient: string;
};

const ES_PUBLICATION =
  "https://medium.com/aws-articles-versi%C3%B3n-en-espa%C3%B1ol";

export const articles: Article[] = [
  {
    id: "aws-account-setup",
    title: {
      en: "Getting Started with AWS: A Complete Beginner’s Guide to Creating Your AWS Account",
      es: "Primeros pasos con AWS: guía completa para crear tu cuenta",
    },
    snippet: {
      en: "Step-by-step guide to create a free AWS account and unlock 200+ cloud services for tutorials and projects.",
      es: "Guía paso a paso para crear una cuenta gratuita de AWS y acceder a más de 200 servicios en la nube.",
    },
    date: {
      en: "Nov 5, 2025",
      es: "5 nov 2025",
    },
    readingTime: 4,
    href: {
      en: "https://medium.com/aws-articles/getting-started-with-aws-a-complete-beginners-guide-to-creating-your-aws-account-a7ce0093dfc4",
      es: "https://medium.com/aws-articles/getting-started-with-aws-a-complete-beginners-guide-to-creating-your-aws-account-a7ce0093dfc4",
    },
    gradient: "from-terracotta/40 via-dusty-rose to-beige",
  },
  {
    id: "boto3-ec2",
    title: {
      en: "Simple Guide to Managing AWS Services with Python and Boto3",
      es: "Guía sencilla para gestionar AWS con Python y Boto3",
    },
    snippet: {
      en: "Create, list, and delete EC2 instances programmatically with Boto3 — from setup to practical automation scripts.",
      es: "Crea, lista y elimina instancias EC2 con Boto3, desde la configuración hasta scripts de automatización.",
    },
    date: {
      en: "Feb 9, 2025",
      es: "9 feb 2025",
    },
    readingTime: 7,
    href: {
      en: "https://medium.com/aws-articles/simple-guide-to-managing-aws-services-with-python-and-boto3-creating-listing-and-deleting-ec2-80b9849fd969",
      es: `${ES_PUBLICATION}/gu%C3%ADa-sencilla-para-gestionar-servicios-aws-con-python-y-boto3-crear-listar-y-eliminar-instancias-b49004283182`,
    },
    gradient: "from-charcoal/30 via-tan to-dusty-rose",
  },
  {
    id: "clf-practice-questions",
    title: {
      en: "50 AWS Certified Cloud Practitioner Exam (CLF-C02) Practice Questions",
      es: "50 preguntas de práctica para el examen AWS Cloud Practitioner (CLF-C02)",
    },
    snippet: {
      en: "A full CLF-C02 practice set to test your knowledge before sitting the AWS Certified Cloud Practitioner exam.",
      es: "Un set completo de práctica CLF-C02 para evaluar tu conocimiento antes del examen Cloud Practitioner.",
    },
    date: {
      en: "Jan 26, 2025",
      es: "26 ene 2025",
    },
    readingTime: 15,
    href: {
      en: "https://medium.com/aws-articles/50-aws-certified-cloud-practitioner-exam-clf-c02-practice-questions-6f54db63531e",
      es: "https://medium.com/aws-articles/50-aws-certified-cloud-practitioner-exam-clf-c02-practice-questions-6f54db63531e",
    },
    gradient: "from-terracotta/30 via-beige to-dusty-rose",
  },
  {
    id: "clf-quiz-answers",
    title: {
      en: "AWS Certified Cloud Practitioner Quiz Answers",
      es: "Respuestas del cuestionario AWS Cloud Practitioner",
    },
    snippet: {
      en: "Answer key for the 50 CLF-C02 practice questions — useful for self-checking while you study.",
      es: "Clave de respuestas para las 50 preguntas de práctica CLF-C02, ideal para autoevaluarte mientras estudias.",
    },
    date: {
      en: "Jan 26, 2025",
      es: "26 ene 2025",
    },
    readingTime: 2,
    href: {
      en: "https://medium.com/aws-articles/aws-certified-cloud-practitioner-quiz-answers-a4b20b504e54",
      es: "https://medium.com/aws-articles/aws-certified-cloud-practitioner-quiz-answers-a4b20b504e54",
    },
    gradient: "from-dusty-rose via-tan/80 to-beige",
  },
  {
    id: "amazon-s3",
    title: {
      en: "Amazon S3 Explained: From Basics to Advanced Configurations",
      es: "Amazon S3 explicado: de conceptos básicos a configuraciones avanzadas",
    },
    snippet: {
      en: "Understand S3 fundamentals, storage classes, security, and advanced configurations for real-world workloads.",
      es: "Fundamentos de S3, clases de almacenamiento, seguridad y configuraciones avanzadas para cargas reales.",
    },
    date: {
      en: "Dec 24, 2024",
      es: "24 dic 2024",
    },
    readingTime: 11,
    href: {
      en: "https://medium.com/aws-articles/amazon-s3-explained-from-basics-to-advanced-configurations-14717d2e88b9",
      es: `${ES_PUBLICATION}/amazon-s3-explicado-desde-conceptos-b%C3%A1sicos-hasta-configuraciones-avanzadas-f67af86f39ab`,
    },
    gradient: "from-charcoal/25 via-terracotta/20 to-beige",
  },
  {
    id: "ec2-intro",
    title: {
      en: "Introduction to EC2: Create Your First Server in the AWS Cloud",
      es: "Introducción a EC2: crea tu primer servidor en la nube de AWS",
    },
    snippet: {
      en: "Launch and configure your first EC2 instance with a practical, step-by-step walkthrough.",
      es: "Lanza y configura tu primera instancia EC2 con una guía práctica paso a paso.",
    },
    date: {
      en: "Nov 20, 2024",
      es: "20 nov 2024",
    },
    readingTime: 13,
    href: {
      en: "https://medium.com/aws-articles/introduction-to-ec2-explained-step-by-step-create-your-first-server-in-the-aws-cloud-12bddf1dcd3b",
      es: `${ES_PUBLICATION}/introducci%C3%B3n-a-ec2-explicado-paso-a-paso-crea-tu-primer-servidor-en-la-nube-de-aws-46ddc0705a49`,
    },
    gradient: "from-terracotta/35 via-dusty-rose to-tan",
  },
  {
    id: "clf-free-resources",
    title: {
      en: "How to Pass the AWS Certified Cloud Practitioner with Free Resources",
      es: "Cómo aprobar AWS Cloud Practitioner con recursos gratuitos",
    },
    snippet: {
      en: "Study strategy, free resources, and readiness signals I used to pass the CLF certification.",
      es: "Estrategia de estudio, recursos gratuitos y señales de preparación que usé para aprobar CLF.",
    },
    date: {
      en: "Nov 20, 2024",
      es: "20 nov 2024",
    },
    readingTime: 10,
    href: {
      en: "https://medium.com/aws-articles/how-to-pass-the-aws-certified-cloud-practitioner-certification-with-free-resources-342568406a31",
      es: `${ES_PUBLICATION}/c%C3%B3mo-aprobar-la-certificaci%C3%B3n-aws-certified-cloud-practitioner-con-recursos-gratuitos-9040f6fa2248`,
    },
    gradient: "from-beige via-dusty-rose to-terracotta/25",
  },
  {
    id: "s3-static-website",
    title: {
      en: "How to Deploy a Static Website on Amazon S3 Step-by-Step",
      es: "Cómo desplegar un sitio web estático en Amazon S3 paso a paso",
    },
    snippet: {
      en: "Host a static site on S3 with bucket configuration, permissions, and deployment best practices.",
      es: "Publica un sitio estático en S3 con configuración del bucket, permisos y buenas prácticas.",
    },
    date: {
      en: "Nov 20, 2024",
      es: "20 nov 2024",
    },
    readingTime: 7,
    href: {
      en: "https://medium.com/aws-articles/how-to-deploy-a-static-website-on-amazon-s3-step-by-step-english-version-4aa376d6f404",
      es: `${ES_PUBLICATION}/c%C3%B3mo-desplegar-un-sitio-web-est%C3%A1tico-en-amazon-s3-paso-a-paso-versi%C3%B3n-en-espa%C3%B1ol-30dea3ed8400`,
    },
    gradient: "from-tan via-beige to-dusty-rose",
  },
];

export function getLatestArticles(limit = 2): Article[] {
  return articles.slice(0, limit);
}
