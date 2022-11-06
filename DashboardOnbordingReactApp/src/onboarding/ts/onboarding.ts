import * as helpers from "./helperFunctions";
import * as global from "./globalVariables";
import * as elements from "./elements";
import { createIntroCard, removeIntroCard } from "./introCards";
import { createInfoCard, removeInfoCard } from "./infoCards";
import { removeFrame } from "./disableArea";
import { removeInteractionCard } from "./interactionExample";
import { createSettings } from "./createSettings";
import { showReportChanges } from "./showReportChanges";

export async function onLoadReport(){
    await helpers.getActivePage();
    await helpers.getVisuals();
    await helpers.getSettings();
    
    helpers.createEditOnboardingButtons();
    helpers.createOnboardingButtons();

    helpers.resizeEmbed(global.filterClosedWidth);

    global.setContainerPaddingTop(global.report.iframe.offsetTop + global.settings.reportOffset.top);
    global.setContainerPaddingLeft(global.report.iframe.offsetLeft + global.settings.reportOffset.left);
    
    elements.addStylesheet("/onboarding/css/onboarding.css");

    createGuidedTour();
}

export async function onReloadReport() {
    let oldPage = global.page.name;
    await helpers.getActivePage();

    if(global.page.name !== oldPage && global.page.displayName !== "Info"){
        await helpers.getVisuals();
        await createSettings();
        helpers.resizeEmbed(global.filterClosedWidth);
    }
}

export async function onDataSelected(event: { detail: { dataPoints: any[]; }; }) {
    if(global.interactionMode){
        let selectedData = event.detail.dataPoints[0];
        if(selectedData){
            global.setSelectedTargets(selectedData.identity);
            showReportChanges();
        } 
    }else{
        helpers.recreateInteractionExampleButton();
    }
}

export function createGuidedTour(){
    helpers.removeOnboarding();
    helpers.toggleFilter(true);

    global.setIsGuidedTour(true);
    helpers.createOnboarding();
    createIntroCard();
}

export function createDashboardExploration(){
    if(global.explorationMode){
        helpers.removeOnboarding();
    }else{
        helpers.removeOnboarding();
        helpers.toggleFilter(true);
        
        helpers.startExplorationMode();
        helpers.createOnboarding();
        createIntroCard();
    }
}

export function startGuidedTour(){
    global.setCurrentVisualIndex(0);
    removeIntroCard();
    createInfoCard(global.currentVisuals[global.currentVisualIndex]);
}

 export function createOnboardingOverlay(){
    global.setInteractionMode(false);
    removeFrame();
    removeIntroCard();
    removeInfoCard();
    removeInteractionCard();

    global.currentVisuals.forEach(function (visual: any) {
        let style = helpers.getClickableStyle(visual.layout.y, visual.layout.x, visual.layout.width, visual.layout.height);
        createOverlay(visual.name, style);
    });

    let style = helpers.getClickableStyle(-global.settings.reportOffset.top, global.page.defaultSize.width!, global.filterOpenedWidth, global.page.defaultSize.height!);
    createOverlay("filter", style);
}

function createOverlay(id: string, style: string){
    var attributes = global.createDivAttributes();
    attributes.id = id;
    attributes.style = style;
    attributes.clickable = true;
    attributes.parentId = "onboarding";
    elements.createDiv(attributes);
}