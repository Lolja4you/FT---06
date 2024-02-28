const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function show_menu() {
    const menu = `
        1) add_mark
        2) del_all_marks_in_subject
        3) show_all_marks

        'exit' to exit

        Enter 1-3 or exit:
    `;
    console.log(menu);
}

function user_choose(callback) {
    rl.question("--> ", choose => {
        switch (choose) {
            case "1":       add_mark();                 break;
            case "2":       del_all_marks_in_subject(); break;
            case "3":       show_all_marks();           break;
            case "4":       add_student();              break;
            case "5":       add_subject();              break;
            case "exit":    rl.close();                 break;
            default:        console.log("Invalid choice. Please try again.");break;
        }

        // Call the callback function after the action is executed
        callback();
    });
}

function add_mark() {
    rl.question("Enter mark_pk: ", mark_pk => {
        rl.question("Enter subject_pk: ", subject_pk => {
            rl.question("Enter width: ", width => {
                const student = students[studentIndex];
                student.marks.push(new Mark(mark_pk, subject_pk, width));
                user_choose();
            });
        });
    });
}



function del_all_marks_in_subject() {
    rl.question("Enter subject name or subject_pk: ", subject => {
        let subject_pk;
        if (typeof subject === "string") {
            for (let i = 0; i < created_subject.length; i++) {
                const createdSubject = created_subject[i];
                if (createdSubject.name === subject) {
                    subject_pk = createdSubject.subject_pk;
                    break;
                }
            }
        } else {
            subject_pk = subject;
        }
        for (let i = 0; i < students.length; i++) {
            const student = students[i];
            for (let j = 0; j < student.marks.length; j++) {
                if (student.marks[j].subject_pk === subject_pk) {
                    student.marks.splice(j, 1);
                    j--;
                }
            }
        }
        user_choose();
    });
}

function show_all_marks() {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        console.log(`Student ${i + 1}:`);
        for (let j = 0; j < student.marks.length; j++) {
            const mark = student.marks[j];
            console.log(`Mark ${j + 1}: mark_pk=${mark.mark_pk}, subject_pk=${mark.subject_pk}, width=${mark.width}`);
        }
    }
}

function add_student(){
    rl.question("Enter first_name: ", first_name => {
        rl.question("Enter second_name: ", second_name => {
            students.push(new Student(first_name, second_name));
            user_choose();
        });
    });
}

function add_subject(){
    rl.question("Enter subject_pk: ", subject_pk => {
        rl.question("Enter name: ", name => {
            created_subject.push(new Subject(subject_pk, name));
            user_choose();
        });
    });
}

class Student {
    constructor(first_name, second_name) {
        this.first_name = first_name;
        this.second_name = second_name;
        this.marks = [];
    }
}

class Mark {
    constructor(mark_pk, subject_pk, width) {
        this.mark_pk = mark_pk;
        this.subject_pk = subject_pk;
        this.width = width;
    }
}

class Subject {
    constructor(subject_pk, name) {
        this.subject_pk = subject_pk;
        this.name = name;
    }
}

const created_subject = [];
const students = [];

rl.on('close', () => {
    console.log("Exiting...");
    process.exit(0);
});

function start_menu() {
    show_menu();
    user_choose(start_menu);
}

start_menu();