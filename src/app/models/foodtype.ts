export class FoodType {
    $key: string;

    uuid: string;
    name: string;
    isMainMenu:boolean = true;
    imageUrl: string;
    isSpecial:boolean = true;
    isActive: boolean = true;
    file: File;
    progress:number;
  }
