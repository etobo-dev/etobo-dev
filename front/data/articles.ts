export type Article = {
  id: string;
  title: string;
  snippet: string;
  date: string;
  readingTime: number;
  href: string;
  imageUrl: string;
};

export const articles: Article[] = [
  {
    id: "world-cup-ai-2026",
    title:
      "How Artificial Intelligence Is Used at the 2026 World Cup: Sensors, Computer Vision, Data, and Tactical Analysis",
    snippet:
      "How sensors, computer vision, and AI support refereeing, 3D recreations, and tactical analysis at the 2026 FIFA World Cup — without replacing referees or coaches.",
    date: "Jul 9, 2026",
    readingTime: 11,
    href: "https://articles.etobo.tech/how-artificial-intelligence-is-used-at-the-2026-world-cup-sensors-computer-vision-data-and-766d2f037d53",
    imageUrl:
      "https://miro.medium.com/v2/da:true/resize:fit:1200/0*Je0GldarhKn9Oeae",
  },
  {
    id: "aws-account-setup",
    title:
      "Getting Started with AWS: A Complete Beginner’s Guide to Creating Your AWS Account",
    snippet:
      "Step-by-step guide to create a free AWS account and access 200+ cloud services for tutorials and projects.",
    date: "Nov 5, 2025",
    readingTime: 4,
    href: "https://articles.etobo.tech/getting-started-with-aws-a-complete-beginners-guide-to-creating-your-aws-account-a7ce0093dfc4",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1024/1*uK5NAdBC_uFH1_HCF3J2Ng.png",
  },
  {
    id: "boto3-ec2",
    title:
      "Simple Guide to Managing AWS Services with Python and Boto3: Creating, Listing, and Deleting EC2 Instances",
    snippet:
      "Create, list, and delete EC2 instances programmatically with Boto3 — from setup to practical automation scripts.",
    date: "Feb 9, 2025",
    readingTime: 7,
    href: "https://articles.etobo.tech/simple-guide-to-managing-aws-services-with-python-and-boto3-creating-listing-and-deleting-ec2-80b9849fd969",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1024/1*DD3Hd27Mq75JFUs_gehSCQ.jpeg",
  },
  {
    id: "clf-practice-questions",
    title:
      "50 AWS Certified Cloud Practitioner Exam (CLF-C02) Practice Questions",
    snippet:
      "A full CLF-C02 practice set to test your knowledge before sitting the AWS Certified Cloud Practitioner exam.",
    date: "Jan 26, 2025",
    readingTime: 15,
    href: "https://articles.etobo.tech/50-aws-certified-cloud-practitioner-exam-clf-c02-practice-questions-6f54db63531e",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1024/1*fTx0F8jXqqg0FWHJRUeyZA.jpeg",
  },
  {
    id: "clf-quiz-answers",
    title: "AWS Certified Cloud Practitioner Quiz Answers.",
    snippet:
      "Answer key for the 50 CLF-C02 practice questions — useful for self-checking while you study.",
    date: "Jan 26, 2025",
    readingTime: 2,
    href: "https://articles.etobo.tech/aws-certified-cloud-practitioner-quiz-answers-a4b20b504e54",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1024/1*MTsLqhZiLuUnd3eqK8dNOg.jpeg",
  },
  {
    id: "amazon-s3",
    title: "Amazon S3 Explained: From Basics to Advanced Configurations",
    snippet:
      "Understand S3 fundamentals, storage classes, security, and advanced configurations for real-world workloads.",
    date: "Dec 24, 2024",
    readingTime: 11,
    href: "https://articles.etobo.tech/amazon-s3-explained-from-basics-to-advanced-configurations-14717d2e88b9",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1024/1*zW1idh3fIi2DoNYi7J6PBw.jpeg",
  },
  {
    id: "ec2-intro",
    title:
      "Introduction to EC2 explained step by step: Create your first server in the AWS cloud",
    snippet:
      "Launch and configure your first EC2 instance with a practical, step-by-step walkthrough.",
    date: "Nov 20, 2024",
    readingTime: 13,
    href: "https://articles.etobo.tech/introduction-to-ec2-explained-step-by-step-create-your-first-server-in-the-aws-cloud-12bddf1dcd3b",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1024/1*CB8Hg2yo7WvO5v2v0UxDTw.png",
  },
  {
    id: "clf-free-resources",
    title:
      "How to Pass the AWS Certified Cloud Practitioner Certification with Free Resources",
    snippet:
      "Study strategy, free resources, and readiness signals I used to pass the CLF certification.",
    date: "Nov 20, 2024",
    readingTime: 10,
    href: "https://articles.etobo.tech/how-to-pass-the-aws-certified-cloud-practitioner-certification-with-free-resources-342568406a31",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1024/1*IdH_JOTE7yw1YKSaGgPy8w.jpeg",
  },
  {
    id: "s3-static-website",
    title:
      "How to Deploy a Static Website on Amazon S3 Step-by-Step — [English version].",
    snippet:
      "Host a static site on S3 with bucket configuration, permissions, and deployment best practices.",
    date: "Nov 20, 2024",
    readingTime: 7,
    href: "https://articles.etobo.tech/how-to-deploy-a-static-website-on-amazon-s3-step-by-step-english-version-4aa376d6f404",
    imageUrl:
      "https://cdn-images-1.medium.com/max/700/0*P38ZdAMMssnlo_qC.jpeg",
  },
];

export function getLatestArticles(limit = 2): Article[] {
  return articles.slice(0, limit);
}
