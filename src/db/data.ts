import { faker } from "@faker-js/faker";

export interface dataType {
  id: string;
  title: string;
  content: string;
}

export const offset = 5;

const data: Array<dataType> = [
  { id: "1", title: "테스트1", content: "jdogjqpewio" },
  { id: "2", title: "테스트2", content: "jdogjqpewio" },
  { id: "3", title: "테스트3", content: "jdogjqpewio" },
  { id: "4", title: "테스트4", content: "jdogjqpewio" },
  { id: "5", title: "테스트5", content: "테스트1x 테스트4" },
  { id: "6", title: "테스트6", content: "jdogjqpewio" },
  { id: "7", title: "테스트7", content: "jdogjqpewio" },
  { id: "8", title: "테스트8", content: "jdogjqpewio" },
  { id: "9", title: "테스트9", content: "jdogjqpewio" },
  { id: "10", title: "테스트10", content: "jdogjqpewio" },
];

// for (let i = 0; i < 100; i++) {
//   data.push({
//     id: faker.string.nanoid(),
//     title: faker.commerce.product(),
//     content: faker.commerce.productDescription(),
//   });
// }

export default data;
