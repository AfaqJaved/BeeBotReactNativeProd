import { t } from "i18next";
import { FieldModel } from "../models/FieldsModel";
import { CONSTANTS } from "../constants/Contants";


import FarmImage from "../assets/img/farm1.png";
import FarmImageGridMobile from '../assets/img/farm_mobile.png';
import FarmImageGridTablet from '../assets/img/farm_tablet.png';
import FarmImageGridTabletLarge from '../assets/img/farm_tabletlg.png';

import BlockImage from "../assets/img/blocks.png";
import BlockImageGridMobile from '../assets/img/block_mobile.png';
import BlockImageGridTablet from '../assets/img/block_tablet.png';
import BlockImageGridTabletLarge from '../assets/img/block_tabletlg.png';


import Street from "../assets/img/street.png";
import StreetImageGridMobile from '../assets/img/street_mobile.png';
import StreetImageGridTablet from '../assets/img/street_tablet.png';
import StreetImageGridTabletLarge from '../assets/img/street_tabletlg.png';

import FairyTale from "../assets/img/fairytale1.png";
import FairyTaleImageGridMobile from '../assets/img/fairytale_mobile.png';
import FairyTaleImageGridTablet from '../assets/img/fairytale_tablet.png';
import FairyTaleImageGridTabletLarge from '../assets/img/fairytale_tabletlg.png';

import Beach from "../assets/img/beach1.png";
import BeachImageGridMobile from '../assets/img/sea_mobile.png';
import BeachImageGridTablet from '../assets/img/sea_tablet.png';
import BeachImageGridTabletLarge from '../assets/img/sea_tabletlg.png';

import TreasureIsland from "../assets/img/sea1.png";
import TreasureIslandGridMobile from '../assets/img/treasure_mobile.png';
import TreasureIslandGridTablet from '../assets/img/treasure_tablet.png';
import TreasureIslandGridTabletLarge from '../assets/img/trasure_tabletlg.png';

import Alphabet from "../assets/img/alphabet.png";
import AlphabetGridMobile from '../assets/img/alphabet_mobile.png';
import AlphabetGridTablet from '../assets/img/alphabet_tablet.png';
import AlphabetGridTabletLarge from '../assets/img/alphabet_tabletlg.png';

import { getResponsiveResource } from "../utils/Utils";


export const FIELD_MODELS: FieldModel[] = [
    {
        title: 'farm',
        imageSource: FarmImage,
        girdImageTablet : FarmImageGridTabletLarge,
        gridImage : getResponsiveResource(FarmImageGridMobile,FarmImageGridTablet,FarmImageGridTablet),
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
        girdImageTablet : BlockImageGridTabletLarge,
        gridImage : getResponsiveResource(BlockImageGridMobile,BlockImageGridTablet,BlockImageGridTablet),
        artNo: "0000 2-1",
        backgroundColor: CONSTANTS.COLORS.GREEN,
        content: [
            { heading: "BLOCK_FIELD.description", paragraph: "BLOCK_FIELD.description_content" },
        ]

    },
    {
        title: 'street',
        imageSource: Street,
        girdImageTablet : StreetImageGridTabletLarge,
        gridImage : getResponsiveResource(StreetImageGridMobile,StreetImageGridTablet,StreetImageGridTablet),
        artNo: "000 81769YL",
        backgroundColor: CONSTANTS.COLORS.PURPLE,
        content: [
            { heading: "STREET_FIELD.description", paragraph: "STREET_FIELD.description_content" },
        ]

    },
    {
        title: 'fairy_tale',
        imageSource: FairyTale,
        girdImageTablet : FairyTaleImageGridTabletLarge,
        gridImage : getResponsiveResource(FairyTaleImageGridMobile,FairyTaleImageGridTablet,FairyTaleImageGridTablet),
        artNo: "000 81769",
        backgroundColor: CONSTANTS.COLORS.SKY,
        content: [
            { heading: "FAIRY_TALE_FIELD.description", paragraph: "FAIRY_TALE_FIELD.description_content" },
        ]

    },
    {
        title: 'beach',
        imageSource: Beach,
        girdImageTablet : BeachImageGridTabletLarge,
        gridImage : getResponsiveResource(BeachImageGridMobile,BeachImageGridTablet,BeachImageGridTablet),
        artNo: "58600",
        backgroundColor: CONSTANTS.COLORS.GREEN,
        content: [
            { heading: "BEACH_FIELD.description", paragraph: "BEACH_FIELD.description_content" },
        ]

    },
    {
        title: 'island',
        imageSource: TreasureIsland,
        girdImageTablet : TreasureIslandGridTabletLarge,
        gridImage : getResponsiveResource(TreasureIslandGridMobile,TreasureIslandGridTablet,TreasureIslandGridTablet),
        artNo: "000 82791",
        backgroundColor: CONSTANTS.COLORS.YELLOW,
        content: [
            { heading: "TREASURE_FIELD.description", paragraph: "TREASURE_FIELD.description_content" },
        ]

    },
    {
        title: 'alphabet',
        imageSource: Alphabet,
        girdImageTablet : AlphabetGridTabletLarge,
        gridImage : getResponsiveResource(AlphabetGridMobile,AlphabetGridTablet,AlphabetGridTablet),
        artNo: "000 81874",
        backgroundColor: CONSTANTS.COLORS.PINK,
        content: [
            { heading: "ALPHABET_FIELD.description", paragraph: "ALPHABET_FIELD.description_content" },
        ]

    }
]