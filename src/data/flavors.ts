export interface Flavor {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const flavors: Flavor[] = [
  {
    label: "Signature Series",
    title: "Weligama Salt Caramel",
    description:
      "Small-farm sea salt folded into deep, burnt sugar cream. A tribute to the southern tides.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida/ADBb0uic5R_2kMlEeNf96dXMn3pmjneDTWOqwggfE9QupgoDDMXWjhJeYcxyDPPz1ow1cFgYolFKYjmaHw5iTp5BAuK8kkO1YXAzfabo4V6OUkbE6SAoQket7-fVQQy5COHAlZiQtfa_pmugli__D0BC1fj27IBVkZ4oiHHcSw3201f_0v-xNJ7byRKOnDlC9PYuEPykmxuiAG9PwLOei_tPsK_G23UjRw_r3rx0EnZWmHgIWU1Z4FpUn63OLrS6vZpEfzFCFq1l2at5fNE",
    imageAlt:
      "a perfect scoop of salted caramel gelato in a ceramic bowl with large sea salt flakes and a drizzle of amber syrup",
  },
  {
    label: "Island Blend",
    title: "Pandan & Coconut Shore",
    description:
      "Organic coconut milk infused with aromatic pandan leaves. Subtle, earthy, and cool.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida/ADBb0ugDs4TQHhqG7ra4zX8YLsNB9kmtz4Q8BxxIDnP1ty4X52fItpqidhejfEUvOEAhMcVfCuyYGxYmjAnT-dcgEldJZVJ4WuLg-u3aM2rkeEQFiPwmvcG43VMzHw9ln1ZHChxnQO7dtNlxpn0U4RMGOCJXUyrlJdzbkMIIrHYGWrERGwFCCn26N8LHTqKAKLysxA3hsasi-PqlUG98fmt2lWwY2pNIJFXY-slzT62jvaOxX5VNr1HQPKhCvRgsi_iMTEaV5DN2m7dekGk",
    imageAlt:
      "vibrant green pandan and coconut gelato served on a fresh banana leaf with toasted coconut shavings",
  },
  {
    label: "Seasonal Batch",
    title: "Jaffna Mango Chilli",
    description:
      "Sun-ripened Jaffna mangoes with a whisper of local heat. A bold, tropical finish.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida/ADBb0ujx9Sumz6sydDuNHzbDl4-LS9k0MjlHb7CSqsEYHc9tLg1lA28lzKxXz46EY7y1N0_LOWhyn5hq-q9EKmjkiptQCNcE9c7BSqgnYgy6f_lFtDjsLWuKu1FSR9P5pwxoBRYOFddwNA2ezzBgsWQ-M4zTMlT-FdaPrV3VmsGc36GZIxMMEMLIcuibW-grqEKxhCyMUFot-K3Gw49pyiTasLU1Y97cq-6q6qsMUuapgGgp6MMXu5cwH_SewTgDP9ZeF-jo1XcswMsrPQE",
    imageAlt:
      "bright yellow mango sorbet in a glass dish garnished with a tiny red chili and lime zest",
  },
];
