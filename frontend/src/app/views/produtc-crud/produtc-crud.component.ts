import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtc-crud',
  templateUrl: './produtc-crud.component.html',
  styleUrls: ['./produtc-crud.component.css']
})
export class ProdutcCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate() {
    this.router.navigate(['/product/create'])
  }
}
