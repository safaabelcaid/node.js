const readline = require('readline-sync');

// Create an array to store contacts
const contacts = [];

// Function to add a contact
function addContact() {
  const name = readline.question('Enter the name: ');
  const phoneNumber = readline.question('Enter the phone number: ');

  contacts.push({ name, phoneNumber });
  console.log('Contact added successfully!');
}

// Function to view all contacts
function viewContacts() {
  if (contacts.length === 0) {
    console.log('No contacts found.');
  } else {
    console.log('Contacts:');
    contacts.forEach((contact, index) => {
      console.log(`${index + 1}. Name: ${contact.name}, Phone: ${contact.phoneNumber}`);
    });
  }
}

// Function to search for a contact
function searchContact() {
  const searchName = readline.question('Enter the name to search: ');

  const foundContact = contacts.find(contact => contact.name === searchName);

  if (foundContact) {
    console.log(`Contact found - Name: ${foundContact.name}, Phone: ${foundContact.phoneNumber}`);
  } else {
    console.log('Contact not found.');
  }
}

// Main application loop
while (true) {
  console.log('\nContact Manager');
  console.log('1. Add a contact');
  console.log('2. View all contacts');
  console.log('3. Search for a contact');
  console.log('4. Exit');

  const choice = readline.question('Enter your choice (1/2/3/4): ');

  switch (choice) {
    case '1':
      addContact();
      break;
    case '2':
      viewContacts();
      break;
    case '3':
      searchContact();
      break;
    case '4':
      console.log('Exiting the application.');
      process.exit(0);
    default:
      console.log('Invalid choice. Please try again.');
  }
}
