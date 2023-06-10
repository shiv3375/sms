import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acromym'
})
export class AcromymPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    const words = value.split(' ');
    
    if(words.length>1){
    const acronym = words
      .map((word) => word.charAt(0))
      .join('');

    return acronym.toUpperCase();
  }
  else{
    const res=words[0];
    return res;
  }
}
}
