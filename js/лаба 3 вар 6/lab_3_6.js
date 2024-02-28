class Student {
    constructor(first_name, second_name){
        this.first_name = first_name
        this.second_name = second_name
        this.marks = []
    }

    add_mark(mark_pk, subject_pk, width) {
       this.marks.push(Mark(mark_pk, subject_pk, width)) 
    }
    
    del_all_marks_in_subject(subject){
        let subject_pk
        if ((typeof subject) == 'string'){
            for (let i = 0; i < created_subject.length; i++) {
                let subject = created_subject[i];
                if(subject.name == subject){
                    subject_pk = subject.subject_pk
                }
              }
        } else {
            subject_pk = subject
        }
        for (let i = 0; i < this.marks.length; i++){
            if (this.marks[i].subject_pk == subject_pk){
                this.marks.splice(i)
            }
        }
    }
}

class Mark {
    constructor(mark_pk, subject_pk, width){
        this.mark_pk = mark_pk
        this.subject_pk = subject_pk
        this.width = width
    }
}

class Subject {
    constructor(subject_pk, name){
        this.subject_pk = subject_pk
        this.name = name
    }
}


let created_subject = []
let students = []

