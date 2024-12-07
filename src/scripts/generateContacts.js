/*1. створити контакти
2. додати in previe
3. записати  їх у файл бaзи даних
*/

import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
// 1 etap
const contactList =await readContacts();
//create new contacts
const newContact = Array(number).fill(0).map(createFakeContact);
const newContactList = [...contactList, ...newContact];
//perezap
await writeContacts(newContactList);


};

generateContacts(5);
