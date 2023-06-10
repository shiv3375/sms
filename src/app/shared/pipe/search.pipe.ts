import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  //items: it is the array of items to filter
  //searchText:it is the text to search for
  //fields:it is an array of field names  to be searched in the items.
  transform(items: any[] | null, searchText: string, fields: string[]): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      return fields.some((field) => {
        const fieldValue = this.extractFieldValue(item, field);
        return fieldValue.toLowerCase().includes(searchText);
      });
    });
  }

  /*
  The extractFieldValue() method takes an item and a field name as parameters. It splits the field name by dot ('.') to get the individual parts of the nested field path. It then iterates over the parts and accesses the corresponding properties of the item.
  */
  private extractFieldValue(item: any, field: string): string {
    const fieldParts = field.split('.');

    let fieldValue = item;
    for (const part of fieldParts) {
      fieldValue = fieldValue[part];
      if (!fieldValue) {
        break;
      }
    }
    return fieldValue ? fieldValue.toString() : '';
  }
}
