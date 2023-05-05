// By:- Dynamax and Playing Guy

// Define the game object
const game = {
  name: "Dillusioners Coding Game",
  version: "1.0",
  // Define test cases as an array of functions
  testCases: [
    function() {
      // Test case 1: Check if player can move left
      const player = new Player();
      const initialX = player.x;
      player.moveLeft();
      if (player.x !== initialX - 1) {
        console.error("Test case 1 failed: Player can't move left!");
        return false;
      }
      console.log("Test case 1 passed!");
      return true;
    },
    function() {
      // Test case 2: Check if player can jump
      const player = new Player();
      const initialY = player.y;
      player.jump();
      if (player.y <= initialY) {
        console.error("Test case 2 failed: Player can't jump!");
        return false;
      }
      console.log("Test case 2 passed!");
      return true;
    },
    function() {
      // Test case 2: Check if player can jump
      const player = new Player();
      const initialX = player.x;
      player.moveRight();
      if (player.x !== initialX + 1) {
        console.error("Test case 3 failed: Player can't move right!");
        return false;
      }
      console.log("Test case 3 passed!");
      return true;
    }
  ],
  // Define a bug tracker object
  bugTracker: {
    bugs: [],
    // Add a new bug to the bug list
    addBug: function(description) {
      this.bugs.push({ description: description });
    },
    // Print all bugs in the bug list
    printBugs: function() {
      console.log("Bug List:");
      this.bugs.forEach((bug, index) => {
        console.log(`${index + 1}. ${bug.description}`);
      });
    }
  },
  // Run all test cases and track bugs
  runTests: function() {
    console.log(`Running tests for ${this.name} v${this.version}!\n`);
    let passedTests = 0;
    let failedTests = 0;
    this.testCases.forEach((testCase, index) => {
      const result = testCase();
      if (result) {
        passedTests++;
      } else {
        failedTests++;
        this.bugTracker.addBug(`Test case ${index + 1} failed.`);
      }
    });
    console.log(`\n \n ${passedTests} test(s) passed.`);
    console.log(`${failedTests} test(s) failed.\n`);
    if (failedTests > 0) {
      this.bugTracker.printBugs();
    }
  }
};

// Define a Player class
class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.random = Math.floor(Math.random() * 11);
  }

  moveLeft() {
    if(this.random % 2 == 0){
        this.x -= 1;   
    }
    else{
        this.x -= 0;
    }
  }

  moveRight() {
    if(this.random % 2 != 0){
        this.x += 1;   
    }
    else{
        this.x += 0;
    }
  }

  jump() {
    if(this.random <= 5){
        this.y += 1;   
    }
    else{
        this.y += 0;
    }
  }
}

// Run the tests
game.runTests();
