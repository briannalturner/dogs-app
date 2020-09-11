import { Component, OnInit, OnChanges } from '@angular/core';
import { IProduct } from './product'
import { ProductService } from './product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  constructor(private productService: ProductService) {
  }

  pageTitle: string = 'Product List:';

  showImage: boolean = false;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  errorMessage: string;
  products: IProduct[] = []

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.listFilter = ''
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnChanges(): void {
    console.log('changes!')
  }

  toggleImage(): void {
     this.showImage = !this.showImage
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ${message}`
  }
}
