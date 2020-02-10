import { Injectable, PipeTransform } from '@angular/core';


@Injectable()
export class FullTextSearchService {

 transform( sea: string, data: any): any {
  console.log(data);
  return (typeof data !== 'undefined') ? data.filter((item) => {
      return item.name.toUpperCase().startsWith(sea.toUpperCase()) || item.firstname.toUpperCase().startsWith(sea.toUpperCase());
  }) : true;
 }

  transformSolo( data: any, sea: string): Array<any> {
    return (typeof data !== 'undefined') ? data.filter((item) => item.name.toUpperCase().startsWith(sea.toUpperCase())) : true;
  }
}