import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../home.service';
import axios from 'axios';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() id?:string;
  ser = inject(HomeService)
  ngOnInit(): void {
    console.log('ss',this.id);
    this.gat();

  }

 async  gat() {
  const data = await   axios.get('https://fakestoreapi.com/products');
  console.log('aa', data);
  
 }

}
