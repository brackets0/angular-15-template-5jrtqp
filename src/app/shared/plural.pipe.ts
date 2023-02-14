import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
})
export class PluralPipe implements PipeTransform {
  transform(word: string, count: number, pluralForm: string = 's'): string {
    let transformed;
    // 'ies' vs singular 'y' (city / cities)
    if (pluralForm === 'ies') {
      // replace y with ies
      transformed = count != 1 ? word.replace(/.$/, pluralForm) : word;
    } else {
      // default to plural 's' (applicant / applicants)
      transformed = count === 1 ? word : word + pluralForm;
    }

    // console.log(count, word, transformed);
    return transformed;
  }
}
