import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Student } from '../domain/student';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {
    
    constructor(private http: HttpClient) {}
    
    getStudentsServer() {
        return this.http.get<any>('http://39.106.203.163:80/students')
            .toPromise()
            .then(res => <Student[]> res.data)
            .then(data => data);
    }

    updateStudent(student: Student){
        // var url = "http://127.0.0.1:3000/students/1/info";
        // var url = "http://127.0.0.1:3000/students/1/info?id=" + student.id;
        var url = "http://39.106.203.163:80/students/1/info?id=" + student.id;
        url = url + "&sid='" + student.sid + "'";
        url = url + "&name='" + student.name + "'";
        url = url + "&department='" + student.department + "'";
        url = url + "&post='" + student.post + "'";
        url = url + "&phone='" + student.phone + "'";
        url = url + "&qq='" + student.qq + "'";
        url = url + "&remark='" + student.remark + "'";

        const httpOptions = {
            headers: new HttpHeaders()
        };
        this.http.post(url, null, httpOptions)
            .toPromise()
            .then(res => {
                console.log("res " + res)
            });
    }

    getStudentsSmall() {
        return this.http.get<any>('assets/data/cars-small.json')
            .toPromise()
            .then(res => <Student[]> res.data)
            .then(data => data);
    }
}
