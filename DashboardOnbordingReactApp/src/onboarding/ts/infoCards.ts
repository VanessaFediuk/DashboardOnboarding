import * as helpers from "./helperFunctions";
import * as global from "./globalVariables";
import * as elements from "./elements";
import * as disable from "./disableArea";
import { createIntroCard } from "./introCards";
import { createFilterInfoCard } from "./filterInfoCards";
import { createVisualInfo } from "./visualInfo";

export async function createInfoCard(visual: any){
    disable.disableFrame();
    disable.createDisabledArea(visual);

    let position = helpers.getVisualCardPos(visual, global.infoCardWidth, global.infoCardMargin);

    let style = helpers.getCardStyle(position.y, position.x, global.infoCardWidth, "");
    if(position.pos === "left"){
        helpers.createCard("infoCard", style, "rectLeftBig");
        helpers.createCloseButton("closeButton", "closeButtonPlacementBig", "float: left;", helpers.getCloseFunction(), "infoCard");
    }else{
        helpers.createCard("infoCard", style, "rectRightBig");
        helpers.createCloseButton("closeButton", "closeButtonPlacementBig", "", helpers.getCloseFunction(), "infoCard");
    }

    let visualData = helpers.getDataOfVisual(visual);
    helpers.createCardContent(visualData?.title, "", "infoCard");
    createVisualInfo(visual);

    helpers.createCardButtons("previous", "next");
}

export function removeInfoCard(){
    elements.removeElement("infoCard");
    elements.removeElement("disabledUpper");
    elements.removeElement("disabledLower");
    elements.removeElement("disabledRight");
    elements.removeElement("disabledLeft");
    disable.removeFrame();
}

export function nextInfoCard(){
    if(global.currentVisualIndex == global.currentVisuals.length -1) {
        global.setCurrentVisualIndex(global.currentVisualIndex + 1);
        removeInfoCard();
        createFilterInfoCard();
    } else{
        if(!global.isGuidedTour && global.currentVisualIndex == global.currentVisuals.length){
            global.setCurrentVisualIndex(0);
        }else{
            global.setCurrentVisualIndex(global.currentVisualIndex + 1);
        }
        removeInfoCard();
        createInfoCard(global.currentVisuals[global.currentVisualIndex]);
    }
}

export function previousInfoCard(){
    if(global.currentVisualIndex == 0){
        removeInfoCard();
        if(global.isGuidedTour){
           createIntroCard(); 
        }else{
            global.setCurrentVisualIndex(global.currentVisuals.length);
            createFilterInfoCard();
        }      
    }else{
        if(global.isGuidedTour && global.currentVisualIndex == global.currentVisuals.length){
            disable.disableFilter();
        }
        global.setCurrentVisualIndex(global.currentVisualIndex - 1);
        removeInfoCard();
        createInfoCard(global.currentVisuals[global.currentVisualIndex]); 
    }   
}