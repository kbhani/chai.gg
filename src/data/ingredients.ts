export interface RituInfo {
  id: string; // Simple ID for routing and matching
  name: string; // Sanskrit name with diacritics
  color: string;
  description: string;
  startMonth: number;
  endMonth: number;
  ingredients: string[];
  specialNote: string;
}

export const ritus: RituInfo[] = [
  {
    id: "shishira",
    name: "Śiśira (शिशिर)",
    color: "#A8D1E7", // Winter - ice blue
    description: "Śiśira (Winter) chai is the most robust blend of the year. This deeply warming concoction features cardamom, black pepper, ginger, and long pepper, creating a powerful and aromatic brew. Sweetened with jaggery or honey, it provides the perfect warmth during the coldest months.",
    startMonth: 1,
    endMonth: 2,
    ingredients: [
      "Tea leaves",
      "Milk",
      "Water",
      "Crushed Green Cardamom",
      "Crushed Black Pepper",
      "Crushed Ginger",
      "Crushed Long Pepper",
      "Tiny pinch of salt",
      "Gud/Jaggery or Honey",
    ],
    specialNote: "When preparing milk or tea, add gud (jaggery) only after removing it from the heat source. This helps prevent coagulation. Additionally, note that honey becomes toxic when heated above 50 degrees, as per Ayurvedic principles.",
  },
  {
    id: "vasanta",
    name: "Vasanta (वसन्त)",
    color: "#7FD1AE", // Spring - fresh green
    description: "Vasanta (Spring) chai embodies the essence of renewal with its light and refreshing blend. This seasonal preparation features cardamom and a single Tulsi leaf, creating a delicate and aromatic brew. Perfect for the spring months, it can be sweetened with thread mishri, khaand, or carefully added honey or jaggery.",
    startMonth: 3,
    endMonth: 4,
    ingredients: [
      "Tea leaves",
      "Milk",
      "Water",
      "Crushed Green Cardamom",
      "A single Tulsi leaf",
      "Tiny pinch of salt",
      "Appropriate amount of thread mishri or Khaand or Gud/Jaggery or honey",
    ],
    specialNote: "When preparing milk or tea, add gud (jaggery) only after removing it from the heat source. This helps prevent coagulation. Additionally, note that honey becomes toxic when heated above 50 degrees, as per Ayurvedic principles.",
  },
  {
    id: "grishma",
    name: "Grīṣma (ग्रीष्म)",
    color: "#FFCC66", // Summer - warm yellow
    description: "Grīṣma (Summer) chai is crafted to balance the intense summer heat. This cooling blend combines cardamom with the sacred Tulsi leaf, creating a refreshing experience. Sweetened with thread mishri or khaand, this preparation helps maintain equilibrium during the hottest months.",
    startMonth: 5,
    endMonth: 6,
    ingredients: [
      "Tea leaves",
      "Milk",
      "Water",
      "Crushed Green Cardamom",
      "A single Tulsi leaf",
      "Tiny pinch of salt",
      "Appropriate amount of thread mishri or Khaand",
    ],
    specialNote: "When preparing milk or tea, add gud (jaggery) only after removing it from the heat source. This helps prevent coagulation. Additionally, note that honey becomes toxic when heated above 50 degrees, as per Ayurvedic principles.",
  },
  {
    id: "varsha",
    name: "Varṣa (वर्षा)",
    color: "#5DA9E9", // Monsoon - blue
    description: "Varṣa (Monsoon) chai is a robust blend perfect for rainy days. This warming preparation combines cardamom, black pepper, ginger, and long pepper, creating a deeply aromatic experience. The carefully balanced spices help ward off seasonal discomfort while providing comfort during monsoon months.",
    startMonth: 7,
    endMonth: 8,
    ingredients: [
      "Tea leaves",
      "Milk",
      "Water",
      "Crushed Green Cardamom",
      "Crushed Black Pepper",
      "Crushed Ginger",
      "Crushed Long Pepper",
      "Tiny pinch of salt",
      "Appropriate amount of thread mishri or Khaand or Gud/Jaggery or honey",
    ],
    specialNote: "When preparing milk or tea, add gud (jaggery) only after removing it from the heat source. This helps prevent coagulation. Additionally, note that honey becomes toxic when heated above 50 degrees, as per Ayurvedic principles.",
  },
  {
    id: "sharada",
    name: "Śarada (शरद)",
    color: "#FF9F6B", // Autumn - orange
    description: "Śarada (Autumn) chai captures the transition of seasons with warm, grounding spices. This balanced blend features cardamom, ginger, and cinnamon, creating a golden brew that's both energizing and soothing. Its moderate spice profile makes it versatile for any time of day during the harvest season.",
    startMonth: 9,
    endMonth: 10,
    ingredients: [
      "Tea leaves",
      "Milk",
      "Water",
      "Crushed Green Cardamom",
      "Crushed Ginger",
      "Tiny piece of Cinnamon",
      "Tiny pinch of salt",
      "Appropriate amount of thread mishri or Khaand or Gud/Jaggery or honey",
    ],
    specialNote: "When preparing milk or tea, add gud (jaggery) only after removing it from the heat source. This helps prevent coagulation. Additionally, note that honey becomes toxic when heated above 50 degrees, as per Ayurvedic principles.",
  },
  {
    id: "hemanta",
    name: "Hemanta (हेमन्त)",
    color: "#B690E3", // Pre-winter - purple
    description: "Hemanta (Pre-winter) chai is a warming preparation for the approaching cold. This hearty blend incorporates cardamom and black pepper in perfect proportion, creating a spicy-sweet profile. Sweetened with mishri, khaand, jaggery, or honey, it provides comfort as winter approaches.",
    startMonth: 11,
    endMonth: 12,
    ingredients: [
      "Tea leaves",
      "Milk",
      "Water",
      "Crushed Green Cardamom",
      "1/3 teaspoon of Crushed Black Pepper",
      "Appropriate amount of thread mishri or Khaand",
      "Tiny pinch of salt",
      "Appropriate amount of Gud/Jaggery or honey",
    ],
    specialNote: "When preparing milk or tea, add gud (jaggery) only after removing it from the heat source. This helps prevent coagulation. Additionally, note that honey becomes toxic when heated above 50 degrees, as per Ayurvedic principles.",
  },
]; 