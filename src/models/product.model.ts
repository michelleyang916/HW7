import { Entity, property, model } from '@loopback/repository';

@model()
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  detail: string;

  @property({
    type: 'string',
    required: true,
  })
  storage: number;

  @property({
    type: 'string',
    required: true,
  })
  quantity: number;

  getId() {
    return this.id;
  }
}