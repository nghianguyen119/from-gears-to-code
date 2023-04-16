import crust from "@site/static/img/portfolio/crust.png";
import switchswap from "@site/static/img/portfolio/switchswap.png";
import react from "@site/static/img/icon/react.png";
import vue from "@site/static/img/icon/vue.png";
import typescript from "@site/static/img/icon/typescript.png";
import tailwindcss from "@site/static/img/icon/tailwindcss.png";
import vite from "@site/static/img/icon/vite.png";
import vercel from "@site/static/img/icon/vercel.png";

export enum StackType {
  React = "React",
  Vue = "Vue",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  NodeJS = "Node.js",
  TailwindCSS = "TailwindCSS",
  Docusaurus = "Docusaurus",
  Express = "Express",
  NextJS = "Next.js",
  PostgreSQL = "PostgreSQL",
  Prisma = "Prisma",
  Vite = "Vite",
  Vercel = "Vercel",
  Azure = "Azure",
}

export type TagType = {
  readonly name?: string;
  readonly bgColor?: string;
  readonly iconSrc?: any;
};

type DevelopmentStatusType =
  | "In Development"
  | "In Production"
  | "Archived"
  | "Long-term Support";

export interface PortfolioType {
  readonly name?: string;
  readonly status?: DevelopmentStatusType;
  readonly siteLink?: string;
  readonly repoLink?: string;
  readonly src?: any;
  readonly stackTags?: Array<TagType>;
  readonly description?: string;
}

const portfolioListData: Array<PortfolioType> = [
  {
    name: "Crustnft",
    status: "Archived",
    repoLink: "https://github.com/crustnft",
    src: crust,
    stackTags: [
      {
        name: StackType.React,
        bgColor:
          "linear-gradient(90deg, rgba(211,244,255,1) 0%, rgba(180,244,255,1) 25%, rgba(164,232,251,1) 50%, rgba(137,230,255,1) 75%, rgba(97,218,251,1) 100%)",
        iconSrc: react,
      },
      {
        name: StackType.TypeScript,
        bgColor:
          "linear-gradient(90deg, rgba(183,203,227,1) 0%, rgba(122,162,204,1) 25%, rgba(99,154,214,1) 50%, rgba(78,143,214,1) 75%, rgba(49,120,198,1) 100%)",
        iconSrc: typescript,
      },
      {
        name: StackType.TailwindCSS,
        bgColor:
          "linear-gradient(90deg, rgba(194,232,249,1) 0%, rgba(158,225,255,1) 25%, rgba(107,210,255,1) 50%, rgba(76,194,247,1) 75%, rgba(56,189,248,1) 100%)",
        iconSrc: tailwindcss,
      },
      {
        name: StackType.Vite,
        bgColor: "linear-gradient( 120deg, #bd34fe 30%, #41d1ff )",
        iconSrc: vite,
      },
      {
        name: StackType.Vercel,
        bgColor:
          "linear-gradient(90deg, rgba(208,208,208,1) 0%, rgba(148,148,148,1) 25%, rgba(98,98,98,1) 50%, rgba(47,47,47,1) 75%, rgba(0,0,0,1) 100%)",
        iconSrc: vercel,
      },
    ],
    description:
      "Crustnft gives creators full control over the entire NFT creation workflow.",
  },
  {
    name: "Switchswap",
    status: "Archived",
    siteLink: "https://www.youtube.com/watch?v=Lg5JNUarRac",
    repoLink: "https://github.com/switchswapbox",
    src: switchswap,
    stackTags: [
      {
        name: StackType.Vue,
        bgColor:
          "linear-gradient(315deg, rgb(100,126,255), rgb(66,211,146) 25%)",
        iconSrc: vue,
      },
      {
        name: StackType.TypeScript,
        bgColor:
          "linear-gradient(90deg, rgba(183,203,227,1) 0%, rgba(122,162,204,1) 25%, rgba(99,154,214,1) 50%, rgba(78,143,214,1) 75%, rgba(49,120,198,1) 100%)",
        iconSrc: typescript,
      },
      {
        name: StackType.TailwindCSS,
        bgColor:
          "linear-gradient(90deg, rgba(194,232,249,1) 0%, rgba(158,225,255,1) 25%, rgba(107,210,255,1) 50%, rgba(76,194,247,1) 75%, rgba(56,189,248,1) 100%)",
        iconSrc: tailwindcss,
      },
      {
        name: StackType.Vite,
        bgColor: "linear-gradient( 120deg, #bd34fe 30%, #41d1ff )",
        iconSrc: vite,
      },
      {
        name: StackType.Vercel,
        bgColor:
          "linear-gradient(90deg, rgba(208,208,208,1) 0%, rgba(148,148,148,1) 25%, rgba(98,98,98,1) 50%, rgba(47,47,47,1) 75%, rgba(0,0,0,1) 100%)",
        iconSrc: vercel,
      },
    ],
    description: "Create QR Card NFT.",
  },
];

export { portfolioListData };
