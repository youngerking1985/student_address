import {Component, OnInit} from '@angular/core';
import { Student } from './domain/student';
import { StudentService} from './services/studentservice';
import { TestserviceService} from './services/testservice.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [StudentService]
})
export class AppComponent implements OnInit{
    
    displayDialog: boolean;
    
    student: Student = new PrimeStudent();
    
    selectedStudent: Student;
    
    newStudent: boolean;
    
    students: Student[];

    cols: any[];
    
    constructor(private studentService: StudentService, private testService: TestserviceService) {
        console.log("AppComponent component");
    }
    
    ngOnInit() {
        this.studentService.getStudentsServer().then(students => this.students = students);

        this.cols = [
            { field: 'grade', header: '所在年级' },
            { field: 'sid', header: '学号' },
            { field: 'name', header: '姓名' },
            { field: 'department', header: '工作/学习单位' },
            { field: 'post', header: '职务' },
            { field: 'phone', header: '联系电话' },
            { field: 'qq', header: 'QQ号码' },
            { field: 'remark', header: '备注' }
        ];
    }
    
    showDialogToAdd() {
        this.newStudent = true;
        this.student = new PrimeStudent();
        this.displayDialog = true;
    }

    showComponent(){

    }
    
    save() {
        this.studentService.updateStudent(this.student);
        const students = [...this.students];
        if (this.newStudent) {
            students.push(this.student);
        } else {
            students[this.findSelectedStudentIndex()] = this.student;
        }
        this.students = students;
        this.student = null;
        this.displayDialog = false;
    }

    close() {
        this.student = null;
        this.displayDialog = false;
    }
    
    onRowSelect(event) {
        this.newStudent = false;
        this.student = this.cloneStudent(event.data);
        this.displayDialog = true;
    }
    
    cloneStudent(c: Student): Student {
        const student = new PrimeStudent();
        for (const prop in c) {
            student[prop] = c[prop];
        }
        return student;
    }
    
    findSelectedStudentIndex(): number {
        return this.students.indexOf(this.selectedStudent);
    }
}

export class PrimeStudent implements Student {
    
    constructor(public id?, public sid?, public name?, public department?, public post?, public phone?, public qq?, public remark?) {}
}
