/*
Output should be: Failed if they scored 6 or less Insufficient if they scored > 6 but less than 9. (9 included) Good if they scored > 9 but less than 14. (14 included) Excellent if they scored 15. Error if participants enter a negative number or a number outside the range supported (outside 0 - 15)
*/


function gradeLabel(grade) {
    if (grade <= 6 && grade > 0) {
        console.log("Failed");
    }

    if (grade > 6 && grade <= 9) {
        console.log("Insufficient");
    }

    if (grade > 9 && grade <= 14) {
        console.log("Good");
    }

    if (grade == 15) {
        console.log("Good");
    }
    
    if (grade <= 0 || grade > 15) {
        console.log("Error, outside of bounds");
    }
}
gradeLabel(15);