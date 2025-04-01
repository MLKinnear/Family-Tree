//Person constructor
export class Person {
    constructor(name, birthdate, details = {}) {
        this.name = name;
        this.birthdate = birthdate;
        this.details = details;
        this.children = [];
        this.parents = [];
    }
    //establishes parent-child replationship
    addChild(child) {
        //pushes to parents children array
        this.children.push(child);
        //pushes to childs parents array
        child.parents.push(this);
    }

    updateDetails(key, value) {
        //adds or updates key-value pair to details object
        this.details[key] = value;
    }
}