import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'after-1'; 
  
  

  usuarios: Usuario[]= [ 
    new Usuario( 
               1,
              'aaaa@gfdkdffd.com',
               'Santiago',
               'Perez',
              'https://reqres.in/img/faces/7-image.jpg', 
              true,
    ), 
    new Usuario( 
               2,
              'kfdkdfk@gfddfkmfd.com',
              'Manuel',
              'Gonzalez',
              'https://reqres.in/img/faces/7-image.jpg', 
               false,
), 
new Usuario( 
               3,
              'dksnsdmnds@gkgfl.com',
              'Alejo',
              'Gutierrez',
              'https://reqres.in/img/faces/7-image.jpg', 
              true,
),  
  ]; 
  
} 

