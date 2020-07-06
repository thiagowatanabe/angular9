import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-produtc-crud',
  templateUrl: './produtc-crud.component.html',
  styleUrls: ['./produtc-crud.component.css']
})
export class ProdutcCrudComponent implements OnInit {

  constructor(private router: Router,private headerService: HeaderService) { 

    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate() {
    this.router.navigate(['/product/create'])
  }
}
