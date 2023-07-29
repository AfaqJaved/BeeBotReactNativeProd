import { t } from "i18next";
import { FieldModel } from "../models/FieldsModel";
import { CONSTANTS } from "../constants/Contants";


import FarmImage from "../assets/img/farm1.png";
import FarmImageGrid from '../assets/img/fieldfarm.png';

import BlockImage from "../assets/img/blocks.png";
import BlockImageGrid from '../assets/img/fieldblock1.png';


import Street from "../assets/img/street.png";
import StreetImageGrid from '../assets/img/streetfield.png';

import FairyTale from "../assets/img/fairytale1.png";
import FairyTaleImageGrid from '../assets/img/fairytaleField.png';

import Beach from "../assets/img/beach1.png";
import BeachImageGrid from '../assets/img/seafield.png';

import TreasureIsland from "../assets/img/sea1.png";
import TreasureIslandGrid from '../assets/img/treasureislandfield.png';

import Alphabet from "../assets/img/alphabet.png";
import AlphabetGrid from '../assets/img/alphabetfield.png';


export const FIELD_MODELS: FieldModel[] = [
    {
        title: 'farm',
        imageSource: FarmImage,
        gridImage : FarmImageGrid,
        artNo: "000 84210",
        backgroundColor: CONSTANTS.COLORS.RED,
        content: [
            { heading: "FARM_FIELD.description", paragraph: "FARM_FIELD.description_content" },
            { heading: "FARM_FIELD.games", paragraph: "FARM_FIELD.games_content" },
            { heading: "FARM_FIELD.purpose", paragraph: "FARM_FIELD.purpose_content" },
            { heading: "FARM_FIELD.material", paragraph: "FARM_FIELD.material_content" },
            { heading: "FARM_FIELD.game_progress", paragraph: "FARM_FIELD.game_progress_content" },
        ]

    },
    {
        title: 'blocks',
        imageSource: BlockImage,
        gridImage : BlockImageGrid,
        artNo: "0000 2-1",
        backgroundColor: CONSTANTS.COLORS.GREEN,
        content: [
            { heading: "BLOCK_FIELD.description", paragraph: "BLOCK_FIELD.description_content" },
        ]

    },
    {
        title: 'street',
        imageSource: Street,
        gridImage : StreetImageGrid,
        artNo: "000 81769YL",
        backgroundColor: CONSTANTS.COLORS.PURPLE,
        content: [
            { heading: "STREET_FIELD.description", paragraph: "STREET_FIELD.description_content" },
        ]

    },
    {
        title: 'fairy_tale',
        imageSource: FairyTale,
        gridImage : FairyTaleImageGrid,
        artNo: "000 81769",
        backgroundColor: CONSTANTS.COLORS.SKY,
        content: [
            { heading: "FAIRY_TALE_FIELD.description", paragraph: "FAIRY_TALE_FIELD.description_content" },
        ]

    },
    {
        title: 'beach',
        imageSource: Beach,
        gridImage : BeachImageGrid,
        artNo: "58600",
        backgroundColor: CONSTANTS.COLORS.GREEN,
        content: [
            { heading: "BEACH_FIELD.description", paragraph: "BEACH_FIELD.description_content" },
        ]

    },
    {
        title: 'island',
        imageSource: TreasureIsland,
        gridImage : TreasureIslandGrid,
        artNo: "000 82791",
        backgroundColor: CONSTANTS.COLORS.YELLOW,
        content: [
            { heading: "TREASURE_FIELD.description", paragraph: "TREASURE_FIELD.description_content" },
        ]

    },
    {
        title: 'alphabet',
        imageSource: Alphabet,
        gridImage : AlphabetGrid,
        artNo: "000 81874",
        backgroundColor: CONSTANTS.COLORS.PINK,
        content: [
            { heading: "ALPHABET_FIELD.description", paragraph: "ALPHABET_FIELD.description_content" },
        ]

    }
]