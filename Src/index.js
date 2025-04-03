import { FamilyTree } from './familyTree.js';

//create new family tree
const family = new FamilyTree();
//adding a person with name and birthdate
family.addPerson("John Doe", "1980-01-01");
family.addPerson("Jane Doe", "1982-03-15");
family.addPerson("Alex Doe", "2005-06-10");
family.addPerson("Emily Doe", "2010-08-20");

//adding parent to child replationship ("Parent", "Child")
family.defineParentChildRelationship("John Doe", "Alex Doe");
family.defineParentChildRelationship("Jane Doe", "Alex Doe");
family.defineParentChildRelationship("John Doe", "Emily Doe");
family.defineParentChildRelationship("Jane Doe", "Emily Doe");

//displays the descendants of the person named
console.log("John's Descendants:");
family.displayDescendants("John Doe");

//added spacing for formating
console.log(" ")

//updates the details list with a persons "name", "key for new detail", "value"
family.updatePersonDetails("Emily Doe", "Occupation", "Nurse");
console.log("Updated Emily Doe info:");
//shows updated information after new details added
family.displayPersonInfo("Emily Doe");