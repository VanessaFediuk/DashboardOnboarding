import * as helpers from "./helperFunctions";
import * as global from "./globalVariables";
import infoImg from "../assets/info.png";
import yAxisImg from "../assets/y-axis.png";
import xAxisImg from "../assets/x-axis.png";
import legendImg from "../assets/legend.png";
import barChartImg from "../assets/bar-chart.png";
import lineGraphImg from "../assets/line-graph.png";
import elemClickImg from "../assets/element-click.png";
import axisClickImg from "../assets/axis-click.png";
import legendClickImg from "../assets/legend-click.png";

export async function getLineClusteredColumnComboChartInfo(visual) {
    let axis = await helpers.getFieldColumn(visual, "Category");
    let columnSeries = await helpers.getFieldMeasures(visual, "Series");
    let columnValues = await helpers.getFieldMeasures(visual, "Y");
    let lineValues = await helpers.getFieldMeasures(visual, "Y2");

    let columnData = columnSeries.concat(columnValues);
    let allData = columnData.concat(lineValues);
    if(allData.length == 0){
        return;
    }

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
    generalInfos.push("This element is a line clustered column combo chart. It can combine lines and bars in one chart.");

    if(columnData.length != 0){
        let barInfo = "This graph contains bars.<br>";
        if(axis){
            barInfo += "The bars are separated horizotally by "+ axis + ".<br>";
        }
        if(columnData.length == 1){
            barInfo += "The bars of this chart represents " + columnData[0] + ".";
        }else{
            let dataString = helpers.dataToString(columnData);
            barInfo += "Each " + axis + " has more than one bar. The bars of this chart represent " + dataString + ". They are distinguishable by their color.";
        }
        dataImages.push(barChartImg);
        dataInfos.push(barInfo);
    }

    if(lineValues.length != 0){
        let lineInfo = "This graph contains lines.<br>";
        if(axis){
            lineInfo += "The lines show the development of their data over the " + axis + ".<br>";
        }
        if(lineValues.length == 1){
            lineInfo += "The line represents the data of " + lineValues[0] + ".<br>";
        }else{
            let dataString = helpers.dataToString(lineValues);
            lineInfo += "This chart has more than one line. The lines represent " + dataString + ". They are distinguishable by their color.<br>";
        }
        dataImages.push(lineGraphImg);
        dataInfos.push(lineInfo);
    }

    interactionImages.push(elemClickImg);
    let interactionInfo = "When clicking on a line or bar you can filter the report by " + axis + ".";
    if(hasTooltip){
        interactionInfo += "</br>You can hover over a bar to get detailed information about its data.";
    }
    interactionInfos.push(interactionInfo);

    if(hasXAxis){
        generalImages.push(xAxisImg);
        generalInfos.push("The X-axis displayes the values of the " + axis + ".");
        interactionImages.push(axisClickImg);
        interactionInfos.push("When clicking on one of the x-axis-labels you can filter the report by " + axis + ".");
    }
    if(hasYAxis){
        let dataString = helpers.dataToString(allData);
        generalImages.push(yAxisImg);
        generalInfos.push("The Y-axes display the values of the " + dataString + ".");
    }
    if(hasLegend){
        generalImages.push(legendImg);
        generalInfos.push("The legend displayes, which data is represented by the bars and lines of this chart. It also shows the corresponding color.");
        interactionImages.push(legendClickImg);
        interactionInfos.push("When clicking on one of the labels in the legend you can filter the report by this data.");
    }

    return {generalImages, generalInfos, dataImages, dataInfos, interactionImages, interactionInfos};
}

export async function getLineClusteredColumnComboChartInteractionExample(visual) {
    let axis = await helpers.getFieldColumn(visual, "Category");
    let axisValues = await helpers.getSpecificDataInfo(visual, axis);
    let columnSeries = await helpers.getFieldMeasures(visual, "Series");
    let columnValues = await helpers.getFieldMeasures(visual, "Y");
    let lineValues = await helpers.getFieldMeasures(visual, "Y2");
    
    let columnData = columnSeries.concat(columnValues);

    let middelOfAxisValues = Math.floor(axisValues.length/2);

    var interactionInfo;
    if(lineValues.length != 0 && columnData.length == 0){
        interactionInfo = "Please click on the line";
        if(axisValues && lineValues){
            interactionInfo += " representing " + lineValues[0] + " at the area of " + axisValues[middelOfAxisValues] + ".";
        } else if(axisValues){
            interactionInfo += " at the area of " + axisValues[middelOfAxisValues] + ".";
        } else if(lineValues.length == 0){
            interactionInfo += " representing " + lineValues[0] +".";
        } else {
            interactionInfo += ".";
        }
    } else {
        interactionInfo = "Please click on the bar representing the ";
        if(axisValues && columnData.length != 0){
            interactionInfo += columnData[0] + " for "+ axisValues[middelOfAxisValues] + ".";
        } else if(axisValues){
            interactionInfo += " data for " + axisValues[middelOfAxisValues] + ".";
        } else if(columnData.length != 0){
            interactionInfo += columnData[0] + ".";
        } else {
            interactionInfo += ".";
        }
    }

    return interactionInfo;
}

export async function getLineClusteredColumnComboChartChanges(visual) {
    let axis = await helpers.getFieldColumn(visual, "Category");
    let axisValues = await helpers.getSpecificDataInfo(visual, axis);
    let lineValues = await helpers.getFieldMeasures(visual, "Y2");
    let columnValues = await helpers.getFieldMeasures(visual, "Y");
    let columnSeries = await helpers.getFieldMeasures(visual, "Series");

    let columnData = columnSeries.concat(columnValues);
    let allData = columnData.concat(lineValues);
    let allDataString = helpers.dataToString(allData);

    let additionalFilters = global.selectedTargets.filter(function (data) {
        return data.target.column != axis && !allData.includes(data.target.column);
    });

    let visualInteractionInfo = helpers.getGeneralInteractionInfo(additionalFilters, allDataString);

    if(axisValues){
        visualInteractionInfo += helpers.getTargetInteractionFilter(axis);
    }
    visualInteractionInfo += ".";  

    return visualInteractionInfo;
}