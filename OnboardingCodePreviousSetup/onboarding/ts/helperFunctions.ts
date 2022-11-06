import * as global from "./globalVariables";
import * as elements from "./elements";
import { getStartFunction } from "./introCards";
import { previousInfoCard, nextInfoCard, createInfoCard } from "./infoCards";
import { removeFrame } from "./disableArea";
import { createGuidedTour, createDashboardExploration, createOnboardingOverlay } from "./onboarding";
import { createOnboardingEditing, saveOnboardingChanges } from "./authorMode";
import { createSettings } from "./createSettings";
import { addVisualTextarea } from "./listOfVisuals";
import { getInteractionText, removeInteractionCard, startInteractionExample } from "./interactionExample";
import { removeHintCard, removeShowChangesCard, showReportChanges } from "./showReportChanges";
import { getCardInfo, getSlicerInfo } from "./basicVisualContent";
import { getLineClusteredColumnComboChartInfo } from "./complexVisualContent";
import { getLineChartInfo } from "./lineChartVisualContent";
import { getClusteredBarChartInfo } from "./barChartVisualContent";
import { getFilterDescription } from "./filterInfoCards";

export function addContainerOffset(){
    var navbarHeight = document.getElementsByClassName("navbar")[0].clientHeight;
    var containerOffset = global.interactionCardHeight - navbarHeight;
    var container = document.getElementById("embed-container");
    container.style.marginTop = containerOffset + "px";
}

function backToVisual(){
    removeContainerOffset();
    global.setInteractionMode(false);
    removeOnboardingOverlay();

    removeInteractionCard();
    removeShowChangesCard();
    removeHintCard();
    createInfoCard(global.currentVisuals[global.currentVisualIndex]);
}

export function createBasicCardContent(description, parentId){
    let divAttributes = global.createDivAttributes();
    divAttributes.id = "basicCardContent";
    divAttributes.classes = "contentPlacementSmall";
    divAttributes.parentId = parentId;
    elements.createDiv(divAttributes);

    let spanAttributes = global.createSpanAttributes();
    spanAttributes.id = "basicContentText";
    spanAttributes.content = description;
    spanAttributes.parentId = "basicCardContent";
    elements.createSpan(spanAttributes);
}

export function createCard(id, style, classes){
    let attributes = global.createDivAttributes();
    attributes.id = id;
    attributes.style = style;
    attributes.classes = classes;
    attributes.parentId = "onboarding";
    elements.createDiv(attributes);
}

export function createCardButtons(leftButton, rightButton){
    let divAttributes = global.createDivAttributes();
    divAttributes.id = "cardButtons";
    divAttributes.parentId = "cardContent";
    elements.createDiv(divAttributes);

    if(leftButton != ""){
        let buttonAttributes = global.createButtonAttributes();
        buttonAttributes.classes = global.darkOutlineButtonClass;
        buttonAttributes.parentId = "cardButtons";
        switch(leftButton){
            case "skip":
                buttonAttributes.id = "skipButton";
                buttonAttributes.content = "Skip";
                buttonAttributes.function = removeOnboarding;
                break;
            case "back to visual":
                buttonAttributes.id = "backButton";
                buttonAttributes.content = "Back to visual";
                buttonAttributes.function = backToVisual;
                break;
            case "cancel":
                buttonAttributes.id = "cancelButton";
                buttonAttributes.content = "Cancel";
                buttonAttributes.function = removeOnboarding;
                break;
            default: 
                buttonAttributes.id = "previousButton";
                buttonAttributes.content = "Previous";
                buttonAttributes.function = previousInfoCard;
        }
        elements.createButton(buttonAttributes, false);
    }

    if(rightButton != ""){
        let buttonAttributes = global.createButtonAttributes();
        buttonAttributes.classes = global.darkOutlineButtonClass + " positionRight";
        buttonAttributes.parentId = "cardButtons";
        if(leftButton == ""){
            buttonAttributes.style += "margin-bottom: 20px;"
        }
        switch(rightButton){
            case "close":
                buttonAttributes.id = "endButton";
                buttonAttributes.content = "Close";
                buttonAttributes.function = removeOnboarding;
                break;
            case "start":
                buttonAttributes.id = "startButton";
                buttonAttributes.content = "Start";
                buttonAttributes.function = getStartFunction();
                break;
            case "back to visual":
                buttonAttributes.id = "backButton";
                buttonAttributes.content = "Back to visual";
                buttonAttributes.function = backToVisual;
                break;
            case "back to overview":
                buttonAttributes.id = "backToOverviewButton";
                buttonAttributes.content = "Back to overview";
                buttonAttributes.function = showReportChanges;
                break;
            case "save":
                buttonAttributes.id = "saveButton";
                buttonAttributes.content = "Save";
                buttonAttributes.function = saveOnboardingChanges;
                break;
            default:
                buttonAttributes.id = "nextButton";
                buttonAttributes.content = "Next";
                buttonAttributes.function = nextInfoCard;
        }
        elements.createButton(buttonAttributes, false);
    }
}

export function createCardContent(headline, description, parentId){
    let divAttributes = global.createDivAttributes();
    divAttributes.id = "cardContent";
    divAttributes.classes = "contentPlacementBig";
    divAttributes.parentId = parentId;
    elements.createDiv(divAttributes);

    let h1Attributes = global.createH1Attributes();
    h1Attributes.id = "cardHeadline";
    h1Attributes.content = headline;
    h1Attributes.parentId = "cardContent";
    elements.createH1(h1Attributes);

    let spanAttributes = global.createSpanAttributes();
    spanAttributes.id = "contentText";
    spanAttributes.content = description;
    spanAttributes.parentId = "cardContent";
    elements.createSpan(spanAttributes);
}

export function createCloseButton(buttonId, buttonClasses, functionName, parentId){
    let buttonAttributes = global.createButtonAttributes();
    buttonAttributes.id = buttonId;
    buttonAttributes.classes = "close " + buttonClasses;
    buttonAttributes.function = functionName;
    buttonAttributes.parentId = parentId;
    elements.createButton(buttonAttributes, false);

    let spanAttributes = global.createSpanAttributes();
    spanAttributes.id = "";
    spanAttributes.content = "&times;";
    spanAttributes.hidden = "true";
    spanAttributes.parentId = buttonId;
    elements.createSpan(spanAttributes);
}

export function createCollapseButton(Id, parentId){
    let buttonAttributes = global.createButtonAttributes();
    buttonAttributes.id = Id;
    buttonAttributes.content = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down mb-1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>`;;
    buttonAttributes.style =  "padding-top: 0px;padding-bottom: 0px;"
    buttonAttributes.classes = "btn " + Id + " positionRight";
    buttonAttributes.parentId = parentId;
    elements.createButton(buttonAttributes, false);

    let collapseButton = document.getElementById(Id);
    collapseButton.setAttribute("data-toggle", "collapse");
    collapseButton.setAttribute("data-target", "#collapseForm" + parentId);
    collapseButton.setAttribute("aria-expanded", "false");
    collapseButton.setAttribute("aria-controls", "collapseForm" + parentId);
}

export function createDisableButton(parentId){
    let attributes = global.createButtonAttributes();
    attributes.style =  "padding-top: 0px;padding-bottom: 0px;";
    attributes.classes = "btn disableVisualButton";
    attributes.content = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye mb-2" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>`;
    attributes.parentId = parentId;
    elements.createButton(attributes, false);
}

export function createEditOnboardingButtons(){
    let attributes = global.createButtonAttributes();
    attributes.id = "editOnboarding";
    attributes.content = "Edit Dashboard Onboarding";
    attributes.style =  global.onboardingButtonStyle;
    attributes.classes = global.darkOutlineButtonClass;
    attributes.function = createOnboardingEditing;
    attributes.parentId = "embed-container";
    elements.createButton(attributes, true);
}

export function createEnableButton(parentId){
    let attributes = global.createButtonAttributes();
    attributes.style =  "padding-top: 0px;padding-bottom: 0px;";
    attributes.classes = "btn disableVisualButton";
    attributes.content = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash mb-2" viewBox="0 0 16 16"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/><path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/></svg>`;
    attributes.parentId = parentId;
    elements.createButton(attributes, false);
}

export function createInfoForm(infoType, visualID, Infos){
    let infoTitle = firstLetterToUpperCase(infoType);

    let labelAttributes = global.createLabelAttributes();
    labelAttributes.id = infoType + "InfosLabel" + visualID;
    labelAttributes.for = infoType + "InfosTextarea" + visualID;
    labelAttributes.style = "display: block;margin-left: 10px;";
    labelAttributes.content = infoTitle + " Information:";
    labelAttributes.parentId = "collapseForm" + visualID;
    elements.createLabel(labelAttributes);

    for (let i = 0; i < Infos.length; ++i) {
        let Info = Infos[i].replaceAll("<br>", '\r\n');
        let textareaAttributes = global.createTextareaAttributes();
        textareaAttributes.id = i + infoType+ "InfosTextarea" + visualID;
        textareaAttributes.class = infoType+ "Infos" + visualID;
        textareaAttributes.value = Info;
        textareaAttributes.style = "display: block;width: 95%;margin-bottom: 5px;margin-left: 10px;background-color: lightsteelblue;";
        textareaAttributes.parentId = "collapseForm" + visualID;
        elements.createTextarea(textareaAttributes, false);
    }

    let addButtonAttributes = global.createButtonAttributes();
    addButtonAttributes.id = "add"+ infoTitle + "Info" + visualID;
    addButtonAttributes.content = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg> Add`;
    addButtonAttributes.style =  "margin: auto;display: block;";
    addButtonAttributes.classes = global.darkOutlineButtonClass;
    addButtonAttributes.function = function(){
        addVisualTextarea(infoType, visualID);
    };
    addButtonAttributes.parentId = "collapseForm" + visualID;
    elements.createButton(addButtonAttributes, false);
}

export async function createInteractionExampleButton(parentId, visual){
    try{
        await getVisualData(visual);  
    }catch{
         return; 
    }
    
    let attributes = global.createButtonAttributes();
    attributes.id = "interactionExample";
    attributes.content = "Try it out";
    attributes.style =  "display:block;margin:0 auto;margin-top:10px;margin-bottom:10px;";
    attributes.classes = global.darkOutlineButtonClass;
    attributes.function = startInteractionExample;
    attributes.parentId = parentId;
    elements.createButton(attributes, false);
}

export function createOnboarding(){
    let style = getDisabledStyle(global.containerPaddingTop, global.containerPaddingLeft, global.page.defaultSize.width, global.page.defaultSize.height);
    
    let attributes = global.createDivAttributes();
    attributes.id = "onboarding";
    attributes.style = style;
    attributes.parentId = "embed-container";
    elements.createDiv(attributes);
}

export function createOnboardingButtons(){
    let attributes = global.createButtonAttributes();
    attributes.id = "guidedTour";
    attributes.content = "Start Guided Tour";
    attributes.style =  global.onboardingButtonStyle;
    attributes.classes = global.darkOutlineButtonClass;
    attributes.function = createGuidedTour;
    attributes.parentId = "embed-container";
    elements.createButton(attributes, true);

    attributes = global.createButtonAttributes();
    attributes.id = "dashboardExploration";
    attributes.content = "Start Dashboard Exploration";
    attributes.style =  global.onboardingButtonStyle;
    attributes.classes = global.darkOutlineButtonClass;
    attributes.function = createDashboardExploration;
    attributes.parentId = "embed-container";
    elements.createButton(attributes, true);
}

export function createTitleForm(ID, title){
    let labelAttributes = global.createLabelAttributes();
    labelAttributes.id = "titleLabel" + ID;
    labelAttributes.for = "titleInput" + ID;
    labelAttributes.style = "margin-left: 10px;margin-right: 10px;";
    labelAttributes.content = "Title:";
    labelAttributes.parentId = "collapseForm" + ID;
    elements.createLabel(labelAttributes);

    let inputAttributes = global.createInputAttributes();
    inputAttributes.id = "titleInput" + ID;
    inputAttributes.type = "string";
    inputAttributes.value = title;
    inputAttributes.style = "margin-right: 20px;background-color:lightsteelblue;";
    inputAttributes.parentId = "collapseForm" + ID;
    elements.createInput(inputAttributes);
}

export function dataToString(dataArray){
    let dataString = "";
    for(let i = 0; i < dataArray.length; i++){
        dataString += dataArray[i];
        if(i != dataArray.length -1){
            dataString += " and ";
        }
    }
    return dataString;
}

function endExplorationMode(){
    global.setExplorationMode(false);
    let button = document.getElementById("dashboardExploration");
    button.innerHTML = "Start Dashboard Exploration";
}

export function firstLetterToUpperCase(str){
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

export async function getActivePage(){
    let pages = await global.report.getPages();
    let page = pages.filter(function(page) {
            return page.isActive
    })[0];
    global.setPage(page);
}

export function getCardStyle(top, left, width, height){
    return  getClickableStyle(top, left, width, height) +`border-radius:10px;background-color:lightsteelblue;z-index: 99 !important;`;
}

export function getClickableStyle(top, left, width, height){
    return `position:absolute;pointer-events:auto;top:${top}px;left:${left}px;width:${width}px;height:${height}px;`;
}

export function getCloseFunction(){
    if(global.isGuidedTour){
        return removeOnboarding;
    }else{
        return createOnboardingOverlay;
    }
}

export function getDataOfInteractionVisual(visual){
    const visualsData =  global.settings.interactionExample.visuals;
    let visualData = visualsData.find(function (data) {
        return data.id == visual.name;
    });

    return visualData;
}

export function getDataOfVisual(visual){
    const visualsData = global.settings.visuals;
    let visualData = visualsData.find(function (data) {
        return data.id == visual.name;
    });

    return visualData;
}

export function getDataWithId(ID){
    const visuals = global.settings.visuals;
    let visualData = visuals.find(function (visual) {
        return visual.id == ID;
    });

    return visualData;
}

function getDisabledStyle(top, left, width, height){
    return `position:absolute;pointer-events:none;top:${top}px;left:${left}px;width:${width}px;height:${height}px;`;
}

export async function getFieldColumn(visual, fieldName){
    let column: string;
    let fields = await visual.getDataFields(fieldName);
    if(fields.length != 0){
        column = fields[0].column;
    }
    return column;
}

export async function getFieldMeasure(visual, fieldName){
    let measure: string;
    let fields = await visual.getDataFields(fieldName);
    if(fields.length != 0){
        measure = fields[0].measure;
    }
    return measure;
}

export async function getFieldMeasures(visual, fieldName){
    let measures = [];
    let fields = await visual.getDataFields(fieldName);
    for(let i = 0; i < fields.length; i++){
        measures.push(fields[i].measure);
    }
    return measures;
}

export async function getFilterInfo(){
    let filters = await global.page.getFilters();
    let filterInfos = [];
    for (let i = 0; i < filters.length; ++i) {
        filterInfos.push(getFilterDescription(filters[i]));
    }

    return filterInfos;
}

export function getGeneralInfoInteractionExampleText(){
    let generalInfo = `Can you see how the whole report changed?<br>All the visualizations were filtered by "all report filters".<br>You can now click on one of the cards or graphs to get detailed information about its changes.`;
    generalInfo = generalInfo.replaceAll("<br>", '\r\n');
    return generalInfo;
}

export function getGeneralInteractionInfo(additionalFilters, filterString){
    let visualInteractionInfo = "The highlighted data includes ";

    if(additionalFilters.length != 0){
        let dataString = "";
        for(let i = 0; i < additionalFilters.length; i++){
            dataString += additionalFilters[i].target.column + " " + additionalFilters[i].equals;
            if(i != additionalFilters.length -1){
                dataString += " and ";
            }
        }
        visualInteractionInfo += " the " + filterString + " of " + dataString;
    } else {
        visualInteractionInfo += "all " + filterString;
    }

    return visualInteractionInfo;
}

export async function getInteractionExampleChangedInfo(visual, visualData){
    let changedInfoStatus = visualData.interactionChangedInfosStatus;
    let changedInfo;
    switch(changedInfoStatus){
        case global.infoStatus.original:
            changedInfo = await getInteractionExampleChangesText(visual);
            changedInfo = changedInfo.replaceAll("<br>", '\r\n');
            break;
        case global.infoStatus.changed:
        case global.infoStatus.added:
            changedInfo = visualData.changedInteractionChangedInfo;
            break;
        default:
            changedInfo = "";
            break;
    }

    return changedInfo;
}

export async function getInteractionExampleChangesText(visual){
    let visualChangeInfo = `You can see that this visual was filtered by "Filter".<br>`;

    let type = getTypeName(visual);

    switch(type){
        case 'Card':
            visualChangeInfo += `The displayed data is now "DataValue".`;
            break;
        case 'Line Clustered Column Combo Chart':
        case 'Line Chart':
        case 'Clustered Bar Chart':
            visualChangeInfo += `The highlighted data includes "AllHighlitedData".`;
            visualChangeInfo += "<br>You can also change the report filters by selecting a new element of this visual.";
            break;
        default:
            break;
    }

    return visualChangeInfo;
}

export function getInteractionExampleGeneralInfo(){
    let generalInfo = global.settings.interactionExample.generalInfoStatus;
    switch(generalInfo){
        case global.infoStatus.original:
            return getGeneralInfoInteractionExampleText();
        case global.infoStatus.changed:
        case global.infoStatus.added:
            return global.settings.interactionExample.changedGeneralInfo.replaceAll("<br>", '\r\n');
        default:
            return "";
    }
}

export async function getInteractionExampleInteractionInfo(visual, visualData){
    let clickInfoStatus = visualData.clickInfosStatus;
    let interactionInfo;
    switch(clickInfoStatus){
        case global.infoStatus.original:
            interactionInfo = await getInteractionText(visual);
            interactionInfo = interactionInfo.replaceAll("<br>", '\r\n');
            break;
        case global.infoStatus.changed:
        case global.infoStatus.added:
            interactionInfo = visualData.changedClickInfo;
            break;
        default:
            interactionInfo = "";
            break;
    }

    return interactionInfo;
}

export function getNextVisual(){
    var nextVisual;
    let visuals = global.currentVisuals.filter(function (visual) {
        return visual.type !== "slicer"
    });

    if(global.currentVisualIndex >= visuals.length - 1){
        nextVisual = visuals[0]; 
    }else{
       nextVisual = visuals[global.currentVisualIndex + 1]; 
    }
    return nextVisual;
}

export function getNotSupportedInfo() {
    let defaultInfo = "Sadly we do not support this type of visual :(";
    document.getElementById("contentText").innerHTML = defaultInfo;
}

export async function getSettings(){
    if (localStorage.getItem("settings") == null){
        await createSettings();
    }
    global.setSettings(JSON.parse(localStorage.getItem("settings")));
}

export async function getSpecificDataInfo(visual, dataName){
    try{
        var dataMap = await getVisualData(visual);  
    }catch{
        return "";
    }
    
    if(!dataName){
        return "";
    }

    return dataMap.get(dataName);
}

export function getTargetInteractionFilter(target){
    let visualInteractionInfo = "";
    let filter = global.selectedTargets.filter(function (data) {
        return data.target.column == target;
    });
    if(filter.length == 0){
        visualInteractionInfo += " for all " + target + "s"; 
    }else{
        visualInteractionInfo += " for " + filter[0].equals;   
    }
    return visualInteractionInfo;
}

export function getVisualCardPos(visual, cardWidth, offset){
    let leftDistance = visual.layout.x;
    let rightX = leftDistance + visual.layout.width;
    let rightDistance = global.page.defaultSize.width - rightX;

    var position = {
        x: 0,
        y: 0,
        pos: ""
    };

    if (rightDistance > leftDistance) {
        position.x = offset + rightX;
        position.pos = "right";
    }else{
        position.x = leftDistance - offset - cardWidth;
        position.pos = "left";
    }
    position.y = offset + visual.layout.y
    
    return position;
}

export async function getVisualData(visual){
    let visualData = await visual.exportData();
    visualData = visualData.data;
    const headers = visualData.slice(0, visualData.indexOf('\r')).split(',');
    const rows = visualData.slice(visualData.indexOf('\n') + 1).split(/\r?\n/);
    rows.pop();
    visualData = new Map<string, string[]>();
    for (let i = 0; i < rows.length; i++) {
        let values = rows[i].split(',');
        for (let j = 0; j < headers.length; j++) {
            let dataArray = visualData.get(headers[j]) ?? [];
            dataArray.push(values[j]);
            visualData.set(headers[j], dataArray);
        }
    }

    for (let i = 0; i < headers.length; i++) {
        var dataArray = visualData.get(headers[i]);
        if(!isNaN(Number(dataArray[0]))){
            dataArray = dataArray.map(str => {
                return Number(str);
            });

            let intArray = [];
            intArray.push(Math.min(...dataArray));
            intArray.push(Math.max(...dataArray));
            dataArray = intArray;
        }

        dataArray = Array.from(new Set(dataArray));

        visualData.set(headers[i], dataArray);
    }

    return visualData
}

export function getVisualIndex(name){
    let index = global.currentVisuals.findIndex(function(visual) {
        return visual.name == name;
    });
    return index;
}

export async function getVisualInfos(visual){
    let type = getTypeName(visual);
    var visualInfos = {generalImages:[],generalInfos:[],dataImages:[],dataInfos:[],interactionImages:[],interactionInfos:[]};

    switch(type){
        case 'Card':
            visualInfos = await getCardInfo(visual);
            break;
        case 'Line Clustered Column Combo Chart':
            visualInfos = await getLineClusteredColumnComboChartInfo(visual);
            break;
        case 'Line Chart':
            visualInfos = await getLineChartInfo(visual);
            break;
        case 'Clustered Bar Chart':
            visualInfos = await getClusteredBarChartInfo(visual);
            break;
        case 'Slicer':
            visualInfos = await getSlicerInfo(visual);
            break;
        default:
            break;
    }

    return visualInfos;
}

export async function getVisuals(){
    let visuals = await global.page.getVisuals();
    global.setVisuals(visuals);
    sortVisuals();
    removeDesignVisuals();
    global.setAllVisuals(global.currentVisuals);
}

export function getVisualTitle(visual){
    let title = visual.title;
    if (title){
        return title;
    }else{
        return getTypeName(visual);
    }
}

export function getTypeName(visual){
    let typeName =  visual.type.replaceAll(/([A-Z])/g, ' $1').trim();
    typeName = firstLetterToUpperCase(typeName);
    return typeName;
}

export async function isVisible(visual, selectorObject){
    let selector = { 
        objectName: selectorObject,
        propertyName: "visible"
    };
    let visible = await visual.getProperty(selector);
    return visible.value;
}

export function orderSettingsVisuals(allVisuals){
    let visDatas = global.settings.visuals;
    global.settings.visuals = [];
    for (const visual of allVisuals) {
        var visData = visDatas.filter(function (element) { 
            return element.id === visual.name;
        });
        global.settings.visuals.push(visData[0]);
    }
}

export function recreateInteractionExampleButton(){
    let interactionButton = document.getElementById("interactionExample");
    if(!interactionButton){
        let visual = global.currentVisuals[global.currentVisualIndex]
        let parent = document.getElementById("visualInfoTabs");
        if(parent){
            createInteractionExampleButton("interactionTab", visual);
        }
        parent = document.getElementById("visualInfo");
        if(parent){
            createInteractionExampleButton("visualInfo", visual);
        }
    }
}

export function removeContainerOffset(){
    var container = document.getElementById("embed-container");
    container.style.marginTop = "0px";
}

function removeDesignVisuals(){
    let visuals = global.currentVisuals.filter(function (visual) {
        return visual.type !== "shape" && visual.type !== "basicShape";
    });
    global.setVisuals(visuals);
}

export function removeOnboarding(){
    removeContainerOffset();

    global.setInteractionMode(false);
    global.setIsGuidedTour(false);
    toggleFilter(false);
    endExplorationMode();

    elements.removeElement("onboarding");
    removeFrame();
}

export function removeOnboardingOverlay(){
    global.currentVisuals.forEach(function (visual) {
        elements.removeElement(visual.name);
    });
    elements.removeElement("filter");
}

export function resizeEmbed(filterWidth){
    document.getElementById("embed-container").style.cssText = `top:0px;left:0px;width:${global.page.defaultSize.width + filterWidth}px;height:${global.page.defaultSize.height + global.settings.reportOffset.top + global.footerHeight}px;`;
}

export function saveIntInput(inputId){
    let value;
    let input = document.getElementById(inputId) as HTMLInputElement | null;
    if(!input?.value){
        value = 0;
    }else{
        value = parseInt(input?.value);  
    }

    return value;
}

function sortVisuals(){
    global.currentVisuals.sort(function(a, b){
        if(a.layout.x < b.layout.x){
            return -1;
        } else if(a.layout.x > b.layout.x){
            return 1;
        } else {
            if(a.layout.y < b.layout.y){
                return -1;
            } else {
                return 1;
            }
        }
    });
}

export function startExplorationMode(){
    global.setExplorationMode(true);
    let button = document.getElementById("dashboardExploration");
    button.innerHTML = "End Dashboard Exploration";
}

export function toggleFilter(open){
    let newSettings = {
        panes: {
            filters: {
                expanded: open,
                visible: true
            },
            pageNavigation: {
                visible: true
            }
        }
    };    
    global.report.updateSettings(newSettings);

    if(open){
        resizeEmbed(global.filterOpenedWidth);
    } else {
        resizeEmbed(global.filterClosedWidth);
    }
    
}