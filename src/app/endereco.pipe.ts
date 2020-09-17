import { Pipe, PipeTransform } from '@angular/core';
import {Endereco} from './models/eventos'

@Pipe({
  name: 'endereco'
})
export class EnderecoPipe implements PipeTransform {

  transform(value: Endereco): string {
    
    return `${value.address}, ${value.city}, ${value.country}`;

  }

}
