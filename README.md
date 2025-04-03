---

# **📜 Family Tree Project**  

## **📌 Overview**  
This project is part of the **Algorithm and Structural Foundations Assignment**. The goal was to build a **Family Tree** system in JavaScript, starting with a simple implementation and progressively improving its structure and testing.  

---

## **🛠️ Development Process**  

### **1️⃣ Initial Implementation**  
- Started with a **single `index.js` file**.  
- Created a `Person` constructor with:  
  - `addChild()` – To establish parent-child relationships.  
  - `updateDetails()` – To modify a person's details.  
- Built the `FamilyTree` constructor with:  
  - `addPerson()` – To add individuals.  
  - `defineParentChildRelationship()` – To connect parents and children.  
  - `updatePersonDetails()` – To modify stored information.  
  - `displayDescendants()` – To visualize family connections.  
- Added `displayPersonInfo()` to show an individual's details and link them with parent-child relationships.  

### **2️⃣ Refactoring & Modularization**  
- **Separated concerns** by creating `familyTree.js` and `person.js`.  
- Used **ES module imports** to link them to `index.js`.  
- Verified that everything still worked after refactoring.  

### **3️⃣ Structuring the Project**  
- Moved the core files into a **`/src` folder**.  
- Created a `/test` folder for unit testing.  
- Added `familyTree.test.js` to validate functionality.  

---

## **🧪 Testing with Mocha & Chai**  

### **Challenges Faced**  
- Testing was the **hardest part** since I hadn’t built structured tests before.  
- I wanted to keep tests **focused** and **effective**, choosing key unit tests that I was already performing manually.  

### **Solution & Approach**  
- Used **Mocha & Chai** for test assertions.  
- Struggled with **testing `console.log` output** but found a solution using **Sinon’s `consoleSpy`**.  
- Transitioning from **manual testing** in `index.js` to **automated unit tests** allowed me to **simplify `index.js` significantly**.  

---

## **🎯 Lessons Learned**  
- Modularizing code improves **maintainability** and **scalability**.  
- Writing tests **early** helps catch issues **before** they become complex.  
- **Sinon** makes testing console output much more **intuitive**.  

---

## **📂 Project Structure**  

```
/Family-Tree
│── /Src
│   ├── familyTree.js
│   ├── index.js
│   ├── person.js
│── /test
│   ├── familyTree.test.js
│── .gitignore
│── package-lock.json
│── package.json
│── README.md
```

---

## **📌 Final Thoughts**  
This project gave me valuable experience in **structuring a JavaScript project**, **implementing unit tests**, and **refactoring for better organization**. I also learned how to use **Sinon for testing console output**, which made the testing process much smoother.  