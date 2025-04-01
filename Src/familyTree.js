import { Person } from './person.js';

//FamilyTree constructor
export class FamilyTree {
    constructor() {
        this.members = {};
    }
    //adds person to new family tree
    addPerson(name, birthdate, details = {}) {
        //ensures no duplicates
        if (!this.members[name]) {
            //creates new person instance and stores in this.members
            this.members[name] = new Person(name, birthdate, details);
        }
    }
    //defines parent-child relationship between two family members
    defineParentChildRelationship(parentName, childName) {
        //ensures both members exist in family tree
        if (this.members[parentName] && this.members[childName]) {
            //calls addChild method to parent object from person.js
            this.members[parentName].addChild(this.members[childName]);
        }
    }
    //updates or adds a detail for a named member
    updatePersonDetails(name, key, value) {
        //ensures member exist in family tree
        if (this.members[name]) {
            //calls updateDetails method to persons object from person.js
            this.members[name].updateDetails(key, value);
        }
    }
    //displays the descendants of a named member
    displayDescendants(name) {
        //ensures member exist in family tree
        if (!this.members[name]) {
            console.log("Person not found in family tree.");
            return;
        }
        //traverse recursive function
        const traverse = (person, level = 0) => {
            //prints indentation for each level of the tree
            console.log("  ".repeat(level) + person.name);
            //recursively calls traverse function for each child increasing level by 1 each generation
            person.children.forEach(child => traverse(child, level + 1));
        };
        //calls traverse function for named person whcih is the root
        traverse(this.members[name]);
    }
    //displays all of a named persons information
    displayPersonInfo(name) {
        const person = this.members[name];
        //ensures member exist in family tree
        if (!person) {
            console.log("Person not found in family tree.");
            return;
        }
        //displays name and birthdate
        console.log(`Name: ${person.name}`);
        console.log(`Birthdate: ${person.birthdate}`);
        //displays additional details if they exist
        if (Object.keys(person.details).length > 0) {
            console.log("Details:");
            for (const [key, value] of Object.entries(person.details)) {
                console.log(`  ${key}: ${value}`);
            }
        }
        //displays persons parents if any
        if (person.parents.length > 0) {
            console.log("Parents: " + person.parents.map(p => p.name).join(", "));
        }
        //displays persons children if any
        if (person.children.length > 0) {
            console.log("Children: " + person.children.map(c => c.name).join(", "));
        }
    }
}