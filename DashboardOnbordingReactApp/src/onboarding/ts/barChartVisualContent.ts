import * as helpers from "./helperFunctions";
import infoImg from "../assets/info.png";
import yAxisImg from "../assets/y-axis.png";
import xAxisImg from "../assets/x-axis.png";
import legendImg from "../assets/legend.png";
import barChartImg from "../assets/bar-chart.png";
import elemClickImg from "../assets/element-click.png";
import axisClickImg from "../assets/axis-click.png";
import legendClickImg from "../assets/legend-click.png";

export async function getClusteredBarChartInfo(visual: any) {
    let axis = await helpers.getFieldColumn(visual, "Category");
    let dataName = await helpers.getFieldMeasure(visual, "Y");
    let legend = await helpers.getFieldColumn(visual, "Series");

    let hasYAxis = await helpers.isVisible(visual, "categoryAxis");
    let hasXAxis = await helpers.isVisible(visual, "valueAxis");
    let hasLegend = await helpers.isVisible(visual, "legend");
    let hasTooltip = await helpers.isVisible(visual, "tooltip");

    let generalImages = [];
    let generalInfos = [];
    let dataImages = [];
    let dataInfos =[];
    let interactionImages = [];
    let interactionInfos =[];
       
    generalImages.push(infoImg);
    generalInfos.push("This element is a clusterd bar chart.");

    dataImages.push(infoImg);
    dataInfos.push("This chart displayes the " + dataName + ".");
    let barInfo = "";
    if(axis){
        barInfo += "The bars are separated vertically by "+ axis + ".<br>";
    }
    if(legend){
        barInfo += "Each " + axis + " has more than one bar. This bars represent the " + legend + " and are distinguishable by their color.";
    }
    dataImages.push(barChartImg);
    dataInfos.push(barInfo);

    let interactionInfo = "With clicking on a bar you can filter the report by ";
    if(axis && !legend){
        interactionInfo += axis + ".";
    } else if(!axis && legend){
        interactionInfo += legend + ".";
    }else{
        interactionInfo += axis + " and " + legend + ".";
    }  
    if(hasTooltip){
        interactionInfo += "</br>You can hover over a bar to get detailed information about its data.";
    }
    interactionImages.push(elemClickImg);
    interactionInfos.push(interactionInfo);
   
    if(hasYAxis){
        generalImages.push(yAxisImg);
        generalInfos.push("The Y-axis displayes the values of the " + axis + ".");
        interactionImages.push(axisClickImg);
        interactionInfos.push("When clicking on one of the y-axis-labels you can filter the report by " + axis + ".");
    }
    if(hasXAxis){
        generalImages.push(xAxisImg);
        generalInfos.push("The X-axis displayes the values of the " + dataName + ".");
    }
    if(hasLegend){
        generalImages.push(legendImg);
        generalInfos.push("The legend displayes the values of the " + legend + " and its corresponding color.");
        interactionImages.push(legendClickImg);
        interactionInfos.push("When clicking on one of the labels in the legend you can filter the report by " + legend + ".");
    }

    return {generalImages, generalInfos, dataImages, dataInfos, interactionImages, interactionInfos};
}

export async function getBarChartInteractionExample(visual: any) {
    let axis = await helpers.getFieldColumn(visual, "Category");
    let axisValues = await helpers.getSpecificDataInfo(visual, axis);
    let dataName = await helpers.getFieldMeasure(visual, "Y");
    let legend = await helpers.getFieldColumn(visual, "Series");
    let legendValues = await helpers.getSpecificDataInfo(visual, legend);

    let middelOfAxisValues = Math.floor(axisValues.length/2);

    let interactionInfo = "Please click on the bar representing the " + dataName;
    if(axisValues && legendValues){
        interactionInfo += " for " + axisValues[middelOfAxisValues] + " and "+ legendValues[0] + ".";
    } else if(axisValues){
        interactionInfo += " for " + axisValues[middelOfAxisValues] + ".";
    } else if(legendValues){
        interactionInfo += " for " + legendValues[0] + ".";
    } else {
        interactionInfo += ".";
    }

    return interactionInfo;
}