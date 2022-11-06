import * as helpers from "./helperFunctions";
import * as global from "./globalVariables";
import * as elements from "./elements";
import { disableAll } from "./disableArea";
import { getInteractionText } from "./interactionExample";
import { createVisualsGroup, orderVisuals } from "./editVisuals";
import { createFiltersGroup } from "./editFilters";
import { createInteractionExampleGroup } from "./editInteractionExample";
import { createReportOffsetGroup } from "./editReportOffset";

export function createOnboardingEditing(){
    helpers.removeOnboarding();
    helpers.createOnboarding();

    helpers.toggleFilter(true);
    disableAll();

    let style = helpers.getCardStyle(global.editCardMargin, 0, global.editCardWidth, "") + `right:0;margin:auto;`;
    helpers.createCard("editCard", style, "");

    helpers.createCardContent("Edit Onboarding", "", "editCard");
    createEditForm();

    helpers.createCardButtons("cancel", "save");
}

async function createEditForm(){
    let divAttributes = global.createDivAttributes();
    divAttributes.id = "editOnbording";
    divAttributes.style = "margin: 10px;box-shadow: 5px 5px 5px gray,0px 5px 5px gray";
    divAttributes.parentId = "contentText";
    elements.createDiv(divAttributes);

    createVisualsGroup();
    createFiltersGroup();
    createInteractionExampleGroup();
    createReportOffsetGroup();
}

export async function saveOnboardingChanges(){
    global.settings.reportOffset.top = helpers.saveIntInput("topOffsetInput");
    global.settings.reportOffset.bottom = helpers.saveIntInput("bottomOffsetInput");
    global.settings.reportOffset.left = helpers.saveIntInput("leftOffsetInput");
    global.settings.reportOffset.right = helpers.saveIntInput("rightOffsetInput");

    global.setContainerPaddingTop(global.report.iframe.offsetTop + global.settings.reportOffset.top);
    global.setContainerPaddingLeft(global.report.iframe.offsetLeft + global.settings.reportOffset.left);

    orderVisuals();

    for (const visual of global.allVisuals) {
        let visualData = helpers.getDataOfVisual(visual);
        if(!visualData){
            return;
        }

        let titleInput = document.getElementById("titleInput" + visual.name) as HTMLInputElement | null;
        visualData.title = titleInput?.value;

        var visualInfos = await helpers.getVisualInfos(visual);

        let generalInfosTextareas = document.getElementsByClassName("generalInfos" + visual.name);
        for (let i = 0; i < generalInfosTextareas.length; ++i) {
            let textarea = generalInfosTextareas[i] as HTMLTextAreaElement | null;
            let newGeneralInfo = textarea?.value.replaceAll('\n', "<br>");
            if(newGeneralInfo == "" || newGeneralInfo == null){
                visualData.generalInfosStatus[i] = "deleted";
                visualData.changedGeneralInfos[i] = "";
            } else if(i >= visualData.generalInfosStatus.length){
                visualData.generalInfosStatus.push("added");
                visualData.changedGeneralInfos.push(newGeneralInfo);  
            } else if(newGeneralInfo == visualInfos.generalInfos[i]){
                visualData.generalInfosStatus[i] = "original";
                visualData.changedGeneralInfos[i] = "";
            } else {
                visualData.generalInfosStatus[i] = "changed";
                visualData.changedGeneralInfos[i] = newGeneralInfo;
            }
        }

        let dataInfosTextareas = document.getElementsByClassName("dataInfos" + visual.name);
        for (let i = 0; i < dataInfosTextareas.length; ++i) {
            let textarea = dataInfosTextareas[i] as HTMLTextAreaElement | null;
            let newDataInfo = textarea?.value.replaceAll('\n', "<br>"); 
            if(newDataInfo == ""  || newDataInfo == null){
                visualData.dataInfosStatus[i] = "deleted";
                visualData.changedDataInfos[i] = "";
            } else if(i >= visualData.dataInfosStatus.length){
                visualData.dataInfosStatus.push("added");
                visualData.changedDataInfos.push(newDataInfo);
            } else if(newDataInfo == visualInfos.dataInfos[i]){
                visualData.dataInfosStatus[i] = "original";
                visualData.changedDataInfos[i] = "";
            } else {
                visualData.dataInfosStatus[i] = "changed";
                visualData.changedDataInfos[i] = newDataInfo;
            }
        }

        let interactionInfosTextareas = document.getElementsByClassName("interactionInfos" + visual.name);
        for (let i = 0; i < interactionInfosTextareas.length; ++i) {
            let textarea = interactionInfosTextareas[i] as HTMLTextAreaElement | null;
            let newInteractionInfo = textarea?.value.replaceAll('\n', "<br>");
            if(newInteractionInfo == "" || newInteractionInfo == null){
                visualData.interactionInfosStatus[i] = "deleted";
                visualData.changedInteractionInfos[i] = "";
            } else if(i >= visualData.interactionInfosStatus.length){
                visualData.interactionInfosStatus.push("added");
                visualData.changedInteractionInfos.push(newInteractionInfo);
            } else if(newInteractionInfo == visualInfos.interactionInfos[i]){
                visualData.interactionInfosStatus[i] = "original";
                visualData.changedInteractionInfos[i] = "";
            } else {
                visualData.interactionInfosStatus[i] = "changed";
                visualData.changedInteractionInfos[i] = newInteractionInfo;
            }
        }
    }

    let filterInfos = await helpers.getFilterInfo();

    let filterTitleInput = document.getElementById("titleInputFilter") as HTMLInputElement | null;
    global.settings.filterVisual.title = filterTitleInput?.value;

    let filterGeneralInfoInput = document.getElementById("generalInfoInputFilter") as HTMLInputElement | null;
    global.settings.filterVisual.generalInformation = filterGeneralInfoInput?.value;

    let filterInfosTextareas = document.getElementsByClassName("filterInfos");
    for (let i = 0; i < filterInfosTextareas.length; ++i) {
        let textarea = filterInfosTextareas[i] as HTMLTextAreaElement | null;
        let newFilterInfo = textarea?.value.replaceAll('\n', "<br>");
        if(newFilterInfo == "" || newFilterInfo == null){
            global.settings.filterVisual.filterInfosStatus[i] = "deleted";
            global. settings.filterVisual.changedFilterInfos[i] = "";
        } else if(i >=  global.settings.filterVisual.filterInfosStatus.length){
            global.settings.filterVisual.filterInfosStatus.push("added");
            global.settings.filterVisual.changedFilterInfos.push(newFilterInfo);
        } else if(newFilterInfo == filterInfos[i]){
            global.settings.filterVisual.filterInfosStatus[i] = "original";
            global.settings.filterVisual.changedFilterInfos[i] = "";
        } else {
            global.settings.filterVisual.filterInfosStatus[i] = "changed";
            global.settings.filterVisual.changedFilterInfos[i] = newFilterInfo;
        }
    }
    
    let interactionExampleTitleInput = document.getElementById("titleInputInteractionExample") as HTMLInputElement | null;
    global.settings.interactionExample.title = interactionExampleTitleInput?.value;

    let generalInfosTextarea = document.getElementById("generalInfoInputInteractionExample") as HTMLTextAreaElement | null;
    let newGeneralInfo = generalInfosTextarea?.value.replaceAll('\n', "<br>");
    let compareNewGeneralInfo = newGeneralInfo?.replaceAll(/\s+/g, "");
    let originalGeneralInfo = helpers.getGeneralInfoInteractionExampleText().replaceAll('\n', "<br>").replaceAll(/\s+/g, "");
    if(newGeneralInfo == "" || newGeneralInfo == null){
        global.settings.interactionExample.generalInfoStatus = "deleted";
        global.settings.interactionExample.changedGeneralInfo = ""; 
    } else if( originalGeneralInfo == compareNewGeneralInfo){
        global.settings.interactionExample.generalInfoStatus = "original";
        global.settings.interactionExample.changedGeneralInfo = "";
    } else {
        global.settings.interactionExample.generalInfoStatus = "changed";
        global.settings.interactionExample.changedGeneralInfo = newGeneralInfo;
    }

    let hintInput = document.getElementById("hintInputInteractionExample") as HTMLInputElement | null;
    global.settings.interactionExample.nextVisualHint = hintInput?.value;
  
    for (const visual of global.allVisuals) {
        let visualData = helpers.getDataOfInteractionVisual(visual);
        if(!visualData){
            return;
        }

        if(visualData.clickInfosStatus){
            let clickInfosTextarea = document.getElementById("interactionExampleInteractionInfosTextarea" + visual.name)as HTMLTextAreaElement | null;
            let newClickInfo = clickInfosTextarea?.value.replaceAll('\n', "<br>");
            let clickInfo = await getInteractionText(visual);
            if(newClickInfo == "" || newClickInfo == null){
                visualData.clickInfosStatus = "deleted";
                visualData.changedClickInfo = ""; 
            } else if(newClickInfo == clickInfo){
                visualData.clickInfosStatus = "original";
                visualData.changedClickInfo = "";
            } else {
                visualData.clickInfosStatus = "changed";
                visualData.changedClickInfo = newClickInfo;
            }
        }

        if(visualData.interactionChangedInfosStatus){
            let changedInfosTextarea = document.getElementById("interactionExampleChangedInfosTextarea" + visual.name)as HTMLTextAreaElement | null;
            let newChangedInfo = changedInfosTextarea?.value.replaceAll('\n', "<br>");
            let changedInfo = await helpers.getInteractionExampleChangesText(visual);
            if(newChangedInfo == "" || newChangedInfo == null){
                visualData.interactionChangedInfosStatus = "deleted";
                visualData.changedInteractionChangedInfo = ""; 
            } else if(newChangedInfo == changedInfo){
                visualData.interactionChangedInfosStatus = "original";
                visualData.changedInteractionChangedInfo = "";
            } else {
                visualData.interactionChangedInfosStatus = "changed";
                visualData.changedInteractionChangedInfo = newChangedInfo;
            }
        }
    }

    localStorage.setItem('settings', JSON.stringify(global.settings));

    helpers.removeOnboarding();
}