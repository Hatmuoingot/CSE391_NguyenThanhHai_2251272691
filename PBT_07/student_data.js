const students = [
    { name: "Nguyễn Thanh Hải", age: 43, grade: 9.0 },
    { name: "Trần Minh Đức", age: 20, grade: 4.5 },
    { name: "Lê Thị Hương", age: 21, grade: 7.5 },
    { name: "Phạm Hoàng Nam", age: 19, grade: 3.5 },
    { name: "Vũ Minh Khuê", age: 22, grade: 8.0 }
];

console.log("--- Danh sách họ tên sinh viên ---");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

const passedStudents = students.filter(function(student) {
    return student.grade > 5.0;
});

console.log("\n--- Sinh viên đạt yêu cầu (Điểm > 5.0) ---");
console.log(passedStudents);