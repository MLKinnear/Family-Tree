import { expect } from "chai";
//using sinon to spy on console logs
import sinon from "sinon";
import { FamilyTree } from "../Src/familyTree.js";

describe("FamilyTree", function () {
    let family;
    //builds new family tree with data using addPerson and defineParentChildRelactionship
    this.beforeEach(() => {
        family = new FamilyTree();
        family.addPerson("John Doe", "1980-01-01");
        family.addPerson("Jane Doe", "1982-03-15");
        family.addPerson("Alex Doe", "2005-06-10");
        family.addPerson("Emily Doe", "2010-08-20");
        family.addPerson("David Smith", "2008-10-02");
        family.addPerson("Tom Smith", "2028-02-18");
        family.addPerson("Mary Smith", "2029-09-23");

        family.defineParentChildRelationship("John Doe", "Alex Doe");
        family.defineParentChildRelationship("Jane Doe", "Alex Doe");
        family.defineParentChildRelationship("John Doe", "Emily Doe");
        family.defineParentChildRelationship("Jane Doe", "Emily Doe");
        family.defineParentChildRelationship("Emily Doe", "Tom Smith");
        family.defineParentChildRelationship("David Smith", "Tom Smith");
        family.defineParentChildRelationship("Emily Doe", "Mary Smith");
        family.defineParentChildRelationship("David Smith", "Mary Smith");
    });
    //ensures console log displays correct information
    it("should display person info correctly", function () {
        const consoleSpy = sinon.spy(console, "log");

        family.displayPersonInfo("Emily Doe");

        expect(consoleSpy.calledWithMatch("Name: Emily Doe")).to.be.true;
        expect(consoleSpy.calledWithMatch("Birthdate: 2010-08-20")).to.be.true;

        consoleSpy.restore();
    });
    //ensures info is updated and displays correctly
    it("should update person details correctly", function(){
        family.updatePersonDetails("Emily Doe", "Occupation", "Nurse");
        family.updatePersonDetails("Emily Doe", "Married", "Yes");

        const consoleSpy = sinon.spy(console, "log");

        family.displayPersonInfo("Emily Doe");

        expect(consoleSpy.calledWithMatch("Occupation: Nurse")).to.be.true;
        expect(consoleSpy.calledWithMatch("Married: Yes")).to.be.true;

        consoleSpy.restore();
    });
    //ensures console log displays descendants when "John Doe" is named including grandchildren
    it("should correctly display descendants", function(){
        const consoleSpy = sinon.spy(console, "log");

        family.displayDescendants("John Doe");

        expect(consoleSpy.calledWithMatch("Alex Doe")).to.be.true;
        expect(consoleSpy.calledWithMatch("Emily Doe")).to.be.true;

        consoleSpy.restore();
    });

});