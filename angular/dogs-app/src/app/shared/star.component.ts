import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core'
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'star-component',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    @Input() rating: number;
    starWidth: number;
    faStar = faStar
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

    onClick() {
        this.ratingClicked.emit(`${ this.rating } was clicked!`)
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 90 / 5
    }
}