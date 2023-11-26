
export interface Content {
    heading: string,
    paragraph: string
}


export interface FieldModel {
    title: string,
    imageSource: any,
    gridImage : any,
    girdImageTablet : any
    artNo: string,
    backgroundColor : string,
    content: Content[]
    ratio : number,
}