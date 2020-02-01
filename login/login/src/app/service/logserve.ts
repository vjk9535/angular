import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';// import 'rxjs/add/operator/map'
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
@Injectable()

export class Logserve {
    
    constructor(private http: HttpClient) { }
signup(username: string, password: string){
    const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        })
        };
        
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('userName',username);
        urlSearchParams.append('userPass',password);
        
        let body = urlSearchParams.toString();
    
         return this.http.post('http://localhost:8080/',body,httpOptions);
        
    }
}
