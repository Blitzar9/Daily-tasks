import { Component } from '@angular/core';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})

export class EmployeesComponent{
    title="Employee Management"
    employee = {name: 'rajesh', age: 20, address: 'Chennai'}
        
}