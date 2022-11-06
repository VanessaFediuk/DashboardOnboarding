import * as helpers from "./helperFunctions";
import * as global from "./globalVariables";
import { Visual } from "powerbi-client";
import infoImg from "../assets/info.png";
import elemClickImg from "../assets/element-click.png";

export async function getCardInfo(visual: any) {
    let dataName = await helpers.getFieldMeasure(visual, "Values");
    let dataValue = await helpers.getSpecificDataInfo(visual, dataName);

    let generalImages = [];
    let generalInfos = [];
    let dataImages = [];
    let dataInfos =[];
    let interactionImages: any[] = [];
    let interactionInfos: string[] =[];

    generalImages.push(infoImg);
    generalInfos.push("This element is a card. Cards display the most important facts of a report.");
    dataImages.push(infoImg);
    dataInfos.push("This card shows the current value of "
        + dataName + ", which is " + dataValue[0] + ".");
    
    return {generalImages, generalInfos, dataImages, dataInfos, interactionImages, interactionInfos};
}

export async function getCardChanges(visual: any) {
    let dataName = await helpers.getFieldMeasure(visual, "Values");
    let dataValue = await helpers.getSpecificDataInfo(visual, dataName);

    let visualInteractionInfo = "The displayed data is now " + dataValue[0] + ".";
    
    return visualInteractionInfo;
}

export async function getSlicerInfo(visual: any) {
    let filterName = await helpers.getFieldColumn(visual, "Values");

    let generalImages = [];
    let generalInfos = [];
    let dataImages: any[] = [];
    let dataInfos: string[] =[];
    let interactionImages = [];
    let interactionInfos =[];

    generalImages.push(infoImg);
    generalInfos.push("This element is a slicer. Slicers act as filters for the report. With this one you can filter by " + filterName + ".");
    interactionImages.push(elemClickImg);
    interactionInfos.push("With clicking on one element of the list you can filter the report by " + filterName + ".");

    return {generalImages, generalInfos, dataImages, dataInfos, interactionImages, interactionInfos};
}

export async function getSlicerInteractionExample(visual: any) {
    let filterName = await helpers.getFieldColumn(visual, "Values");
    let dataValues = await helpers.getSpecificDataInfo(visual, filterName);

    let middelOfDataValues = Math.floor(dataValues.length/2);

    let interactionInfo = "Please click on the list element " + dataValues[middelOfDataValues] + ".";

    return interactionInfo;
}

export async function getChartChanges(visual: any) {
    let axis = await helpers.getFieldColumn(visual, "Category");
    let axisValues = await helpers.getSpecificDataInfo(visual, axis);
    let dataName = await helpers.getFieldMeasure(visual, "Y");
    let legend = await helpers.getFieldColumn(visual, "Series");
    let legendValues = await helpers.getSpecificDataInfo(visual, legend);

    let additionalFilters = global.selectedTargets.filter(function (selectedData: global.Target) {
        return selectedData.target.column != axis && selectedData.target.column != legend;
    });

    let visualInteractionInfo = helpers.getGeneralInteractionInfo(additionalFilters, dataName);

    if(axisValues && legendValues){
        visualInteractionInfo += helpers.getTargetInteractionFilter(axis);
        visualInteractionInfo += " and ";
        visualInteractionInfo += helpers.getTargetInteractionFilter(legend);
    } else if(axisValues){
        visualInteractionInfo += helpers.getTargetInteractionFilter(axis);
    } else if(legendValues){
        visualInteractionInfo += helpers.getTargetInteractionFilter(legend);
    }
    visualInteractionInfo += ".";

    return visualInteractionInfo;
}