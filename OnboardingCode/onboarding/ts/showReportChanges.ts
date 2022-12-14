import * as helpers from "./helperFunctions";
import * as global from "./globalVariables";
import * as disable from "./disableArea";
import * as elements from "./elements";
import { removeInteractionCard } from "./interactionExample";

export function showReportChanges(){
    disable.removeFrame();
    removeInteractionCard();
    removeShowChangesCard();
    removeHintCard()

    createInteractionOverlay();
    createHintCard();

    let style = `overflow: auto;position:fixed;top:10px;left:50%;margin-left:` + -(global.interactionCardWidth/2) + `px;width:`+ global.interactionCardWidth + `px;height:` + global.interactionCardHeight + `px;pointer-events:auto;border-radius:10px;background-color:lightsteelblue;z-index: 99 !important;`;
    helpers.createCard("showChangesCard", style, "");

    helpers.addContainerOffset();

    helpers.createCloseButton("closeButton", "closeButtonPlacementBig", helpers.removeOnboarding, "showChangesCard");

    helpers.createCardContent(global.settings.interactionExample.title, createShowReportChangesInfo(), "showChangesCard");

    helpers.createCardButtons("", "back to visual");
}

function createShowReportChangesInfo(){
    let reportChangesInfo;

    switch(global.settings.interactionExample.generalInfoStatus){
        case global.infoStatus.original:
            reportChangesInfo = getShowReportChangesText();
            break;
        case global.infoStatus.changed:
        case global.infoStatus.added:
            reportChangesInfo = global.settings.interactionExample.changedGeneralInfo;
            break;
        case global.infoStatus.deleted:
            reportChangesInfo = "You can now click on one of the cards or graphs to get detailed information about its changes.";
            break;
        default:
            break;
    }
    return reportChangesInfo;
}

export function getShowReportChangesText(){
    let allTargets = global.selectedTargets.map(({ equals }) => equals);
    let allTargetsString = helpers.dataToString(allTargets);
    return "Can you see how the whole report changed?<br>All the visualizations were filtered by "+ allTargetsString
    + ".<br>You can now click on one of the cards or graphs to get detailed information about its changes.";
}

export function createInteractionOverlay(){
    let visuals = global.currentVisuals.filter(function (visual) {
        return visual.type !== "slicer"
    });
    visuals.forEach(function (visual) {
        createInteractionVisualOverlay(visual);
    });
}

export function createInteractionVisualOverlay(visual){
    let style = helpers.getClickableStyle(visual.layout.y, visual.layout.x, visual.layout.width, visual.layout.height);
    var attributes = global.createDivAttributes();
    attributes.id = visual.name;
    attributes.style = style;
    attributes.clickable = true;
    attributes.selectedTargets = global.selectedTargets;
    attributes.parentId = "onboarding";
    elements.createDiv(attributes);
}


function createHintCard(){
    if(global.settings.interactionExample.nextVisualHint != ""){
        var nextVisual = helpers.getNextVisual();

        var visualWithBorder = document.getElementById(nextVisual.name);
        visualWithBorder.className += ` greenBorder`;
        
        let position = helpers.getVisualCardPos(nextVisual, global.hintCardWidth, global.hintCardMargin);
    
        let style = helpers.getClickableStyle(position.y, position.x, global.hintCardWidth, "") + `border-radius:10px;background-color:lightgreen;opacity: 0.85;z-index: 99 !important;`;
        if(position.pos === "left"){
            helpers.createCard("hintCard", style, "rectLeftSmall");
            helpers.createCloseButton("hintCloseButton", "closeButtonPlacementSmall positionLeft", removeHintCard , "hintCard");
        }else{
            helpers.createCard("hintCard", style, "rectRightSmall");
            helpers.createCloseButton("hintCloseButton", "closeButtonPlacementSmall", removeHintCard, "hintCard");
        }
    
        helpers.createBasicCardContent(global.settings.interactionExample.nextVisualHint, "hintCard");
    }
}

export function removeShowChangesCard(){
    elements.removeElement("showChangesCard");
}

export function removeHintCard(){
    var visualsWithBorder = document.getElementsByClassName("greenBorder");
    if (visualsWithBorder.length != 0){
        visualsWithBorder[0].className += " noBorder";
    }
    elements.removeElement("hintCard");
}