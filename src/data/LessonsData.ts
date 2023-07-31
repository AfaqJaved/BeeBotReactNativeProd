import { CONSTANTS } from "../constants/Contants";
import { LessonsModel } from "../models/LessonsModel";

import Bear from "../assets/img/bear.png";
import Salut from "../assets/img/salut.png";
import Bag from "../assets/img/bag.png";

import { MONTH_TOPICS_BEAR } from "../constants/MonthsTopicsBear";
import { MONTH_TOPICS_HOLIDAYS } from "../constants/MonthTopicsHoldiays";



export const LESSONS_MODELS: LessonsModel[] = [
    {
        accordianBackgroundColor: CONSTANTS.COLORS.GREEN,
        accordianTitle: "lessons_1",
        accordianImage: Bear,
        isAccordianBodyVisible: false,
        months: MONTH_TOPICS_BEAR
    },
    {
        accordianBackgroundColor: CONSTANTS.COLORS.PURPLE,
        accordianTitle: "lessons_2",
        isAccordianBodyVisible: false,
        accordianImage: Salut,
        months: MONTH_TOPICS_HOLIDAYS
    }
];