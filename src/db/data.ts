import { faker } from "@faker-js/faker";

export interface dataType {
  id: string;
  title: string;
  content: string;
}

export const offset = 5;

const data: Array<dataType> = [];

for (let i = 0; i < 100; i++) {
  data.push({
    id: faker.string.nanoid(),
    title: faker.commerce.product(),
    content: faker.commerce.productDescription(),
  });
}

export default data;
