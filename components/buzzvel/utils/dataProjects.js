import comaOuLeve from "@/public/images/buzz-projects/coma-ou-leve.png";
import missCan from "@/public/images/buzz-projects/miss-can.png";
import thinkFeridas from "@/public/images/buzz-projects/think-feridas.png";
import viplant from "@/public/images/buzz-projects/viplant.png";

const defaultURL = "https://buzzvel.com/portfolio";

export const cards = [
  {
    id: 1,
    src: comaOuLeve,
    title: "Coma ou leve",
    url: `${defaultURL}/coma-ou-leve`,
    description: {
      challenge:
        "Coma ou Leve needed to automate its ordering process, especially during peak seasons like Christmas and New Year when orders can reach 1,000 per day. The goal was to streamline the system without compromising the customer experience.",
      solution:
        "Buzzvel has developed an in-house CRM platform, customized to meet the specific needs of Eat or Take, facilitating fast and efficient order processing, even during periods of high volume.",
    },
  },
  {
    id: 2,
    src: missCan,
    title: "Miss Can",
    url: `${defaultURL}/miss-can`,
    description: {
      challenge:
        "Miss Can needed an online store that would allow them to sell their products and expand into the international market, starting to export canned foods outside of Portugal.",
      solution:
        "In partnership with COMON, Buzzvel has developed a clean and intuitive online store, translated into three languages (Portuguese, English and French), facilitating access for an international audience.",
    },
  },
  {
    id: 3,
    src: thinkFeridas,
    title: "Think Feridas",
    url: `${defaultURL}/thinkferidas`,
    description: {
      challenge:
        "Create an intuitive, easy-to-navigate application to streamline wound care.",
      solution:
        "With a minimalist design, Think Feridas allows users to use the application without the need for training, integrating the knowledge of experts for efficient treatment.",
    },
  },
  {
    id: 4,
    src: viplant,
    title: "Viplant",
    url: `${defaultURL}/viplant`,
    description: {
      challenge:
        "The challenge was to go beyond an online sales solution, creating a virtual store that would provide customers with the same attention and dedication as VIPLANT physical stores.",
      solution:
        "A website focused on user experience was developed, with personalized offer packages and the VIPLANT Card, a loyalty program that offers exclusive conditions, in addition to access to online and in-person courses.",
    },
  },
];

export const textIntroduction =
  "Here are some of Buzzvel's best projects that not only have a significant impact on the market but also inspire my desire to contribute creative and efficient solutions. See how Buzzvel turns ideas into reality.".split(
    " "
  );
