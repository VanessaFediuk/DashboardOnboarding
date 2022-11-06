import * as helpers from "./helperFunctions";
import * as global from "./globalVariables";

export async function createSettings(){
    let settings = global.createSettingsObject();
    settings.visuals = await setVisualsInfo();
    settings.filterVisual = await setFilterInfo();
    settings.interactionExample = setInteractionExampleInfo();

    global.setSettings(settings);

    localStorage.setItem("settings", JSON.stringify(global.settings));
}

async function setVisualsInfo(){
    var settingsVisuals = [] as global.SettingsVisual[];
    for (const visual of global.currentVisuals) {
        let settingsVisual = global.createVisual();
        settingsVisual.id = visual.name;
        settingsVisual.title = visual.title;
        
        var visualInfos = await helpers.getVisualInfos(visual);

        for (let i = 0; i < visualInfos.generalInfos.length; ++i) {
            settingsVisual.generalInfosStatus.push("original");
            settingsVisual.changedGeneralInfos.push("");
        }
        for (let i = 0; i < visualInfos.dataInfos.length; ++i) {
            settingsVisual.dataInfosStatus.push("original");
            settingsVisual.changedDataInfos.push("");
        }
        for (let i = 0; i < visualInfos.interactionInfos.length; ++i) {
            settingsVisual.interactionInfosStatus.push("original");
            settingsVisual.changedInteractionInfos.push("");
        }
 
        settingsVisuals.push(settingsVisual);
    };

    return settingsVisuals;
}

async function setFilterInfo(){
    let settingsFilterVisual = global.createFilterVisual();
    settingsFilterVisual.title = "Filters";
    settingsFilterVisual.generalInformation = "This page has following filters:";

    let filters = await global.page.getFilters();
    for (let i = 0; i < filters.length; ++i) {
        settingsFilterVisual.filterInfosStatus.push("original");
        settingsFilterVisual.changedFilterInfos.push("");
    }

    return settingsFilterVisual;
}

function setInteractionExampleInfo(){
    var settingsInteractionExample = global.createInteractionExample();
    settingsInteractionExample.title = "Interaction Example";
    settingsInteractionExample.generalInfoStatus = "original";
    settingsInteractionExample.changedGeneralInfo = "";
    settingsInteractionExample.nextVisualHint = "Can you see how this visual changed?";
  
    for (const visual of global.currentVisuals) {
        let type = helpers.getTypeName(visual);
        switch(type){
            case 'Card':
                let settingsInteractableVisualCard = global.createInteractableVisualCard();
                settingsInteractableVisualCard.id = visual.name;
                settingsInteractableVisualCard.title = visual.title;

                settingsInteractableVisualCard.clickInfosStatus = null;
                settingsInteractableVisualCard.changedClickInfo = null;
                settingsInteractableVisualCard.interactionChangedInfosStatus = "original";
                settingsInteractableVisualCard.changedInteractionChangedInfo = "";

                settingsInteractionExample.visuals.push(settingsInteractableVisualCard);
                break;
            case 'Slicer':
                let settingsInteractableVisualSlicer = global.createInteractableVisualSlicer();
                settingsInteractableVisualSlicer.id = visual.name;
                settingsInteractableVisualSlicer.title = visual.title;

                settingsInteractableVisualSlicer.clickInfosStatus = "origninal";
                settingsInteractableVisualSlicer.changedClickInfo = "";
                settingsInteractableVisualSlicer.interactionChangedInfosStatus = null;
                settingsInteractableVisualSlicer.changedInteractionChangedInfo = null;

                settingsInteractionExample.visuals.push(settingsInteractableVisualSlicer);
                break;
            default:
                let settingsInteractableVisual = global.createInteractableVisual();
                settingsInteractableVisual.id = visual.name;
                settingsInteractableVisual.title = visual.title;

                settingsInteractableVisual.clickInfosStatus = "original";
                settingsInteractableVisual.changedClickInfo = "";
                settingsInteractableVisual.interactionChangedInfosStatus = "original";
                settingsInteractableVisual.changedInteractionChangedInfo = "";

                settingsInteractionExample.visuals.push(settingsInteractableVisual);
                break;
        }
    };

    return settingsInteractionExample;
}