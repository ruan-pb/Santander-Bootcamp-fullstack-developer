import { Course } from './Course';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html'
    
})
export class CourseListComponent implements OnInit{
    courses: Course [] = [];


    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: form ',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration:120,
                rating:5.4,
                releaseDate: '10/07'
            

            },
            {
            
                id: 2,
                name: 'Angular: HTTP ',
                imageUrl: '',
                price: 45.99,
                code: 'LKL-1094',
                duration:80,
                rating:4,
                releaseDate: '15/07'
            

            }
        ]
    }

    
}