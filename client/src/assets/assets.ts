interface Description {
  srNo: string;
  heading: string;
  description: string;
}

export const navData: string[] = [
  "All Products",
  "Serum",
  "Sunscreen",
  "Bundle",
];

export const navIcon: string[] = [
  "./src/assets/bag.svg",
  "./src/assets/heart.svg",
  "./src/assets/user.svg",
];

export const descriptionData: Description[] = [
  {
    srNo: "01",
    heading: "Bio Ingredients",
    description:
      "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
  },
  {
    srNo: "02",
    heading: "Everything Natural",
    description:
      "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
  },
  {
    srNo: "03",
    heading: "All Handmade",
    description:
      "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
  },
];
