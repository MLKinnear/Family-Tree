import { FamilyTree } from './familyTree.js';

//create new family tree
const family = new FamilyTree();
//adding a person with name and birthdate
family.addPerson("John Doe", "1980-01-01");
family.addPerson("Jane Doe", "1982-03-15");
family.addPerson("Alex Doe", "2005-06-10");
family.addPerson("Emily Doe", "2010-08-20");
family.addPerson("David Smith", "2008-10-02");
family.addPerson("Tom Smith", "2028-02-18");
family.addPerson("Mary Smith", "2029-09-23");

//adding parent to child replationship ("Parent", "Child")
family.defineParentChildRelationship("John Doe", "Alex Doe");
family.defineParentChildRelationship("Jane Doe", "Alex Doe");
family.defineParentChildRelationship("John Doe", "Emily Doe");
family.defineParentChildRelationship("Jane Doe", "Emily Doe");
family.defineParentChildRelationship("Emily Doe", "Tom Smith");
family.defineParentChildRelationship("David Smith", "Tom Smith");
family.defineParentChildRelationship("Emily Doe", "Mary Smith");
family.defineParentChildRelationship("David Smith", "Mary Smith");

//displays the descendants of the person named
family.displayDescendants("John Doe");
//"---" logged for terminal viewing
console.log ("---");
family.displayDescendants("David Smith");
console.log ("---");
//displays the information of the person named
family.displayPersonInfo("Emily Doe");
console.log ("---");
//updates the details list with a persons "name", "key for new detail", "value"
family.updatePersonDetails("Emily Doe", "Occupation", "Nurse");
family.updatePersonDetails("Emily Doe", "Married", "Yes");
//shows updated information after new details added
family.displayPersonInfo("Emily Doe");
console.log ("---");
family.displayPersonInfo("David Smith");