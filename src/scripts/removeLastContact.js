import { getAllContacts } from '../scripts/getAllContacts.js';
import { updateContacts } from './updateContacts.js';

export const removeLastContact = async () => {
  const contactList = await getAllContacts();
  contactList.pop();
  await updateContacts(contactList);
};

removeLastContact();
