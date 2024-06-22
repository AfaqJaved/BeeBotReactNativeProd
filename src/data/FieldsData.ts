import { FieldModel } from "../models/FieldsModel";
import { CONSTANTS } from "../constants/Contants";


import FarmImageMobile from "../assets/img/farm1_mobile.png";
import FarmImageTablet from "../assets/img/farm1_tablet_lg.png";
import FarmImageGridTabletLarge from '../assets/img/farm_desktop.jpg';

import BlockImage from "../assets/img/blocks.png";
import BlockImageGridTabletLarge from '../assets/img/shape_desktop.jpg';

import Street from "../assets/img/street.png";
import StreetImageGridTabletLarge from '../assets/img/street_desktop.jpg';

import FairyTale from "../assets/img/fairytale1.png";
import FairyTaleImageGridTabletLarge from '../assets/img/fairy_desktop.jpg';

import Beach from "../assets/img/beach1.png";
import BeachImageGridTabletLarge from '../assets/img/sea_desktop.jpg';

import TreasureIsland from "../assets/img/sea1.png";
import TreasureIslandGridTabletLarge from '../assets/img/island_desktop.jpg';

import Alphabet from "../assets/img/alphabet.png";
import AlphabetGridTabletLarge from '../assets/img/alphabet_desktop.jpg';

import RussianAlphabetStart from "../assets/img/alphabet.png";
import RussianAlphbetGridTabletLarge from '../assets/img/russian_alphabet.jpg';


import RussianAlphabetNext from "../assets/img/russian_alphabet_2.jpg";
import RussianAphabetNextGrid from '../assets/img/russian_alphabet_2.jpg';


import Animals from "../assets/img/animals.jpg";
import AnimalsGridImage from '../assets/img/animals.jpg';


import MapIcon from "../assets/img/map_icon.png";
import MapGridTabletLarge from "../assets/img/map_large_desktop.jpg";

import Proffesions from "../assets/img/professions.jpg";
import ProffesionsGridTablet from "../assets/img/professions.jpg";

import Birds from "../assets/img/birds.jpg";
import BirdsGridTablet from "../assets/img/birds.jpg";

import Fruits from "../assets/img/fruits.jpg";
import FruitsGridTablet from "../assets/img/fruits.jpg";


import Numbers from "../assets/img/numbers.jpg";
import NumberGridTablet from "../assets/img/numbers.jpg";

import Snakes from "../assets/img/snakes.jpg";
import SnakesGridTablet from "../assets/img/snakes.jpg";



import { getResponsiveResource } from "../utils/Utils";


export const FIELD_MODELS: FieldModel[] = [
    {
        title: 'farm',
        imageSource: getResponsiveResource(FarmImageMobile,FarmImageTablet,FarmImageTablet),
        girdImageTablet : FarmImageGridTabletLarge,
        gridImage : FarmImageGridTabletLarge,
        artNo: "000 84210",
        backgroundColor: CONSTANTS.COLORS.RED,
        ratio : 0.9,
        content: [
            { heading: "FARM_FIELD.description", paragraph: "FARM_FIELD.description_content" },
            { heading: "FARM_FIELD.games", paragraph: "FARM_FIELD.games_content" },
            { heading: "FARM_FIELD.purpose", paragraph: "FARM_FIELD.purpose_content" },
            { heading: "FARM_FIELD.material", paragraph: "FARM_FIELD.material_content" },
            { heading: "FARM_FIELD.game_progress", paragraph: "FARM_FIELD.game_progress_content" },
        ]

    },
    {
        title: 'street',
        imageSource: Street,
        girdImageTablet : StreetImageGridTabletLarge,
        gridImage : StreetImageGridTabletLarge,
        artNo: "000 81769YL",
        ratio : 2.5/1,
        backgroundColor: CONSTANTS.COLORS.PURPLE,
        content: [
            { heading: "STREET_FIELD.description", paragraph: "STREET_FIELD.description_content" },
        ]

    },
     {
        title: 'fairy_tale',
        imageSource: FairyTale,
        girdImageTablet : FairyTaleImageGridTabletLarge,
        gridImage : FairyTaleImageGridTabletLarge,
        artNo: "000 81769",
        ratio : 2.5/1,
        backgroundColor: CONSTANTS.COLORS.SKY,
        content: [
            { heading: "FAIRY_TALE_FIELD.description", paragraph: "FAIRY_TALE_FIELD.description_content" },
        ]

    },
    {
        title: 'beach',
        imageSource: Beach,
        girdImageTablet : BeachImageGridTabletLarge,
        gridImage : BeachImageGridTabletLarge,
        artNo: "58600",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.GREEN,
        content: [
            { heading: "BEACH_FIELD.description", paragraph: "BEACH_FIELD.description_content" },
        ]

    },
     {
        title: 'island',
        imageSource: TreasureIsland,
        girdImageTablet : TreasureIslandGridTabletLarge,
        gridImage : TreasureIslandGridTabletLarge,
        artNo: "000 82791",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.YELLOW,
        content: [
            { heading: "TREASURE_FIELD.description", paragraph: "TREASURE_FIELD.description_content" },
        ]

    },
    {
        title: 'russian_alphabet',
        imageSource: RussianAlphabetStart,
        girdImageTablet : RussianAlphbetGridTabletLarge,
        gridImage : RussianAlphbetGridTabletLarge,
        artNo: "Letter #1",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.PINK,
        content: [
            { heading: "RUSSIAN_ALPHABET_START_FIELD.description", paragraph: "RUSSIAN_ALPHABET_START_FIELD.description_content" },
        ]
    },
    {
        title: 'russian_alphabet',
        imageSource: RussianAlphabetStart,
        girdImageTablet : RussianAphabetNextGrid,
        gridImage : RussianAphabetNextGrid,
        artNo: "Letter #2",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.PINK,
        content: [
            { heading: "RUSSIAN_ALPHABET_START_FIELD.description", paragraph: "RUSSIAN_ALPHABET_START_FIELD.description_content" },
        ]
    },
    {
        title: 'animals',
        imageSource: Animals,
        girdImageTablet : AnimalsGridImage,
        gridImage : AnimalsGridImage,
        artNo: "000 82793",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.PURPLE,
        content: [
            { heading: "ANIMALS_FIELD.description", paragraph: "ANIMALS_FIELD.description_content" },
        ]
    },
    {
        title: 'professions',
        imageSource: Proffesions,
        girdImageTablet : Proffesions,
        gridImage : Proffesions,
        artNo: "000 82743",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.GREEN,
        content: [
            { heading: "PROFESSIONS_FIELD.description", paragraph: "PROFESSIONS_FIELD.description_content" },
        ]
    },

    {
        title: 'birds',
        imageSource: Birds,
        girdImageTablet : BirdsGridTablet,
        gridImage : BirdsGridTablet,
        artNo: "000 82748",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.SKY,
        content: [
            { heading: "BIRDS_FIELD.description", paragraph: "BIRDS_FIELD.description_content" },
        ]
    },
    {
        title: 'fruits',
        imageSource: Fruits,
        girdImageTablet : FruitsGridTablet,
        gridImage : FruitsGridTablet,
        artNo: "000 82746",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.PURPLE,
        content: [
            { heading: "FRUITS_FIELD.description", paragraph: "FRUITS_FIELD.description_content" },
        ]
    },
    {
        title: 'numbers',
        imageSource: Numbers,
        girdImageTablet : NumberGridTablet,
        gridImage : NumberGridTablet,
        artNo: "000 82741",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.YELLOW,
        content: [
            { heading: "NUMBERS_FIELD.description", paragraph: "NUMBERS_FIELD.description_content" },
        ]
    },
     {
        title: 'snakes',
        imageSource: Snakes,
        girdImageTablet : SnakesGridTablet,
        gridImage : SnakesGridTablet,
        artNo: "000 82744",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.PURPLE,
        content: [
            { heading: "SNAKES_FIELD.description", paragraph: "SNAKES_FIELD.description_content" },
        ]
    },
    {
        title: 'blocks',
        imageSource: BlockImage,
        girdImageTablet : BlockImageGridTabletLarge,
        gridImage : BlockImageGridTabletLarge,
        artNo: "0000 2-1",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.GREEN,
        content: [
            { heading: "BLOCK_FIELD.description", paragraph: "BLOCK_FIELD.description_content" },
        ]
    },

    {
        title: 'alphabet',
        imageSource: Alphabet,
        girdImageTablet : AlphabetGridTabletLarge,
        gridImage : AlphabetGridTabletLarge,
        artNo: "000 81874",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.PINK,
        content: [
            { heading: "ALPHABET_FIELD.description", paragraph: "ALPHABET_FIELD.description_content" },
        ]

    },
    {
        title: 'map',
        imageSource: MapIcon,
        girdImageTablet : MapGridTabletLarge,
        gridImage : MapGridTabletLarge,
        artNo: "47795263",
        ratio : 0.9,
        backgroundColor: CONSTANTS.COLORS.RED,
        content: [
            { heading: "MAP_FIELD.description", paragraph: "MAP_FIELD.description_content" },
        ]

    },
]