
import { Component }  from '@angular/core';

@Component({
    selector: 'gallery-page',
    templateUrl: 'gallery.component.html',
    styleUrls: ['gallery.component.css']
})


export class GalleryComponent{

    myFunc(){
    console.log("function called");
    }
}
