import { Injectable, PipeTransform } from '@angular/core';


@Injectable()
export class FullTextSearchService {

 transform( sea: string, data: any): any {
	 console.log(data);
	return (typeof data !== 'undefined') ? data.filter((item) => {
      return item.name.startsWith(sea) || item.firstname.startsWith(sea);
	}) : true;
 }

  transformSolo( data: any, sea: string): any {
    return (typeof data !== 'undefined') ? data.filter((item) => item.name.startsWith(sea)) : true;
  }
}