import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: any[], filter: string): any {
    if(!tasks || !filter) {
      return tasks;
    }
    // To search values only of "name" variable of your object(item)
    //return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

    // To search in values of every variable of your object(item)
    return tasks.filter(task => JSON.stringify(task).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}
