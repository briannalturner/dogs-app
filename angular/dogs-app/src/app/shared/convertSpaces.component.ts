import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'ConvertSpaces'
})

export class ConvertSpaces implements PipeTransform {

    transform(value: string, character:string): string {
        return value.replace(character, ' ');
    }

} 