

export interface Months {
    isactive : boolean,
    month : string,
    isTopicsVisible : boolean
    topics : string[]
}

export interface LessonsModel {
    accordianImage : any,
    accordianTitle : string,
    accordianBackgroundColor : string,
    isAccordianBodyVisible : boolean,
    months : Months[];
}