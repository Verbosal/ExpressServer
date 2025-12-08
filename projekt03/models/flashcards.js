import { DatabaseSync } from "node:sqlite";

const db_path = "./db.sqlite";
const db = new DatabaseSync(db_path);

db.exec(
  `CREATE TABLE IF NOT EXISTS polls (
    id            INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name          TEXT NOT NULL,
    public        BOOL NOT NULL,
    creationTimestamp DATE NOT NULL,
    durationHours INTEGER NOT NULL
  ) STRICT;

  CREATE TABLE IF NOT EXISTS votes (
    id            INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    pollId        INTEGER
  ) STRICT;
  `
);

const db_ops = {
  makePoll: db.prepare(
    "INSERT INTO polls (name, public, creationTimestamp, durationHours) VALUES (?, ?, ?, ?) RETURNING name, public, creationTimestamp, durationHours;"
  ),
  deletePoll: db.prepare(
    ";"
  ),
  vote: db.prepare(
    "INSERT INTO votes (pollId) VALUES (?);"
  ),
  getPolls: db.prepare(
    `SELECT name, public, creationTimestamp, durationHours
    FROM polls;`
  ),
  getVotes: db.prepare(
    `SELECT pollId
    FROM votes
    WHERE pollId = ?;`
  ),
};

export function makePoll(name, publicBool, creationTimestamp, durationHours) {
  return db_ops.makePoll.run(
    name,
    publicBool,
    creationTimestamp,
    durationHours
  );
}

export function makePoll(name, publicBool, creationTimestamp, durationHours) {
  return db_ops.makePoll.run(
    name,
    publicBool,
    creationTimestamp,
    durationHours
  );
}

// export function updateCard(card) {
//   return db_ops.update_card_by_id.get(card.front, card.back, card.id);
// }

// export function deleteCardById(cardId) {
//   return db_ops.delete_card_by_id.run(cardId);
// }

// export function addCategory(categoryId, name) {
//   return db_ops.insert_category.get(categoryId, name);
// }

// export function updateCategory(categoryId, newCategoryId, name) {
//   return db_ops.update_category_by_id.get({
//     $category_id: categoryId,
//     $new_category_id: newCategoryId,
//     $name: name,
//   });
// }

// export function validateCardData(card) {
//   var errors = [];
//   var fields = ["front", "back"];
//   for (let field of fields) {
//     if (!card.hasOwnProperty(field)) errors.push(`Missing field '${field}'`);
//     else {
//       if (typeof card[field] != "string")
//         errors.push(`'${field}' expected to be string`);
//       else {
//         if (card[field].length < 1 || card[field].length > 500)
//           errors.push(`'${field}' expected length: 1-500`);
//       }
//     }
//   }
//   return errors;
// }
// export function validateCategoryName(name) {
//   var errors = [];
//   if (typeof name != "string") {
//     errors.push("Category name should be a string");
//   } else {
//     if (name.length < 3 || name.length > 100) {
//       errors.push("Category name should have 3-100 characters");
//     }
//   }

//   return errors;
// }

// export function generateCategoryId(name) {
//   const categoryId = name
//     .toLowerCase()
//     .replace(/(\s|[.-])+/g, "-")
//     .replace(/[^a-z0-9.-]/g, "");

//   return categoryId;
// }

export default {
  getCategorySummaries,
  hasCard,
  hasCategory,
  getCategory,
  addCard,
  updateCard,
  deleteCardById,
  addCategory,
  updateCategory,
  validateCardData,
  validateCategoryName,
  generateCategoryId,
};
