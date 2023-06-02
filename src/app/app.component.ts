import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = signal('angular-16');
  
  update(event: any): void {
    this.title.set(event.target.value)
  }
}

export function getContact(this: any): any {
   
  return 'ree'
}

