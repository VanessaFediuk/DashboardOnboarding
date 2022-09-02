import * as helpers from "./helperFunctions";
import infoImg from "../assets/info.png";
import yAxisImg from "../assets/y-axis.png";
import xAxisImg from "../assets/x-axis.png";
import legendImg from "../assets/legend.png";
import lineGraphImg from "../assets/line-graph.png";
import elemClickImg from "../assets/element-click.png";
import axisClickImg from "../assets/axis-click.png";
import legendClickImg from "../assets/legend-click.png";

export async function getLineChartInfo(visual) {
    let axis = await helpers.getFieldColumn(visual, "Category");
    let dataName = await helpers.getFieldMeasure(visual, "Y");
    let legend = await helpers.getFieldColumn(visual, "Series");

    let hasYAxis = helpers.isVisible(visual, "categoryAxis");
    let hasXAxis = helpers.isVisible(visual, "valueAxis");
    let hasLegend = helpers.isVisible(visual, "legend");
    let hasTooltip = helpers.isVisible(visual, "tooltip");

    let generalImages = [];
    let generalInfos = [];
    let dataImages = [];
    let dataInfos =[];
    let interactionImages = [];
    let interactionInfos =[];
        
    generalImages.push(infoImg);
    generalInfos.push("This element is a line chart.");

    dataImages.push(infoImg);
    dataInfos.push("This chart displayes the " + dataName + ".");
    let lineInfo = "";
    if(axis){
        lineInfo += "The lines show the development of the " + dataName + " over the " + axis + ".<br>";
    }
    if(legend){
        lineInfo += "Each line represents a different " + legend + ", they are distinguishable by their color.";
    }
    dataImages.push(lineGraphImg);
    dataInfos.push(lineInfo);
    
    let interactionInfo = "With clicking on a line you can filter the report by ";
    if(axis && !legend){
        interactionInfo += axis + ".";
    } else if(!axis && legend){
        interactionInfo += legend + ".";
    }else{
        interactionInfo += axis + " and " + legend + ".";
    }  
    if(hasTooltip){
        interactionInfo += "</br>You can hover over a line to get detailed information about its data.";
    }
    interactionImages.push(elemClickImg);
    interactionInfos.push(interactionInfo);

    if(hasXAxis){
        generalImages.push(xAxisImg);
        generalInfos.push("The X-axis displayes the values of the " + axis + ".");
        interactionImages.push(axisClickImg);
        interactionInfos.push("When clicking on one of the x-axis-labels you can filter the report by " + axis + ".");
    }

    if(hasYAxis){
        generalImages.push(yAxisImg);
        generalInfos.push("The Y-axis displayes the values of the " + dataName + ".");
    }

    if(hasLegend){
        generalImages.push(legendImg);
        generalInfos.push("The legend displayes the values of the " + legend + " and its corresponding color.");
        interactionImages.push(legendClickImg);
        interactionInfos.push("When clicking on one of the labels in the legend you can filter the report by " + legend + ".");
    }

    return {generalImages, generalInfos, dataImages, dataInfos, interactionImages, interactionInfos};
}

export async function getLineChartInteractionExample(visual) {
    let axis = await helpers.getFieldColumn(visual, "Category");
    let axisValues = await helpers.getSpecificDataInfo(visual, axis);
    let legend = await helpers.getFieldColumn(visual, "Series");
    let legendValues = await helpers.getSpecificDataInfo(visual, legend);
   
    let middelOfAxisValues = Math.floor(axisValues.length/2);

    let interactionInfo = "Please click on the line";
    if(axisValues && legendValues){
        interactionInfo += " representing " + legendValues[0] + " at the area of " + axisValues[middelOfAxisValues] + ".";
    } else if(axisValues){
        interactionInfo += " at the area of " + axisValues[middelOfAxisValues] + ".";
    } else if(legendValues){
        interactionInfo += " representing " + legendValues[0] +".";
    } else {
        interactionInfo += ".";
    }

    return interactionInfo;
}