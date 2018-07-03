import { repository } from '@loopback/repository';
import { ProductRepository } from '../repositories/product.repository';
import { Product } from '../models/product.model';
import {
  
  requestBody,
  get,
} from '@loopback/rest';

export class ProductController {
  constructor(
    @repository(ProductRepository) protected userRepo: ProductRepository,
  ) {} 

  @get('/product')
  async productUser(@requestBody() Product: Product): Promise<Product> {
    return await this.ProductRepo.find();

  }
}