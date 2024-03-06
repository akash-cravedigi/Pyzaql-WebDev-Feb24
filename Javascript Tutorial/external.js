const student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    grade: "Junior",
    major: "Computer Science",
    courses: ["Introduction to Programming", "Data Structures", "Algorithms"],
    GPA: 3.7,
    isGraduating: false,
    address: {
      street: "123 Main Street",
      city: "Anytown",
      state: "CA",
      zipCode: "12345"
    },
    displayInfo: function() {
      console.log(`Name: ${this.firstName} ${this.lastName}`);
      console.log(`Age: ${this.age}`);
      console.log(`Grade: ${this.grade}`);
      console.log(`Major: ${this.major}`);
      console.log(`GPA: ${this.GPA}`);
      console.log(`Address: ${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zipCode}`);
    },
    enrollCourse: function(courseName) {
      this.courses.push(courseName);
      console.log(`${courseName} has been added to ${this.firstName}'s courses.`);
    },
    graduate: function() {
      this.isGraduating = true;
      console.log(`${this.firstName} is now graduating.`);
    }
  };
  
  // Accessing properties and methods
  console.log(student.firstName); // John
  console.log(student.age); // 20
  student.enrollCourse("Operating Systems"); // Operating Systems has been added to John's courses.
  student.displayInfo(); // Displays all student info
  