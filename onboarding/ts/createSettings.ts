import * as helpers from "./helperFunctions";

export async function createSettings(){
    var settings = global.createSettingsObject();
    settings.reportOffset = setReportOffset();
    settings.visuals = await setVisualsInfo();
    settings.filterVisual = await setFilterInfo();
    settings.interactionExample = setInteractionExampleInfo();

    localStorage.setItem("settings", JSON.stringify(settings));
}

function setReportOffset(){
    let settingsReportOffset = global.createReportOffset();

    settingsReportOffset.top = 0;
    settingsReportOffset.bottom = 0;
    settingsReportOffset.left = 0;
    settingsReportOffset.right = 0;

    return settingsReportOffset;
}

async function setVisualsInfo(){
    var settingsVisuals = [];
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
  
    global.visuals.forEach(function (visual) {
        let settingsInteractableVisual = global.createInteractableVisual();
        settingsInteractableVisual.id = visual.name;
        settingsInteractableVisual.title = visual.title;

        let type = helpers.getTypeName(visual);
        switch(type){
            case 'Card':
                settingsInteractableVisual.clickInfosStatus = null;
                settingsInteractableVisual.changedClickInfo = null;
                settingsInteractableVisual.interactionChangedInfosStatus = "original";
                settingsInteractableVisual.changedInteractionChangedInfo = "";
                break;
            case 'Slicer':
                settingsInteractableVisual.clickInfosStatus = "origninal";
                settingsInteractableVisual.changedClickInfo = "";
                settingsInteractableVisual.interactionChangedInfosStatus = null;
                settingsInteractableVisual.changedInteractionChangedInfo = null;
                break;
            default:
                settingsInteractableVisual.clickInfosStatus = "original";
                settingsInteractableVisual.changedClickInfo = "";
                settingsInteractableVisual.interactionChangedInfosStatus = "original";
                settingsInteractableVisual.changedInteractionChangedInfo = "";
                break;
        }
 
        settingsInteractionExample.visuals.push(settingsInteractableVisual);
    });

    return settingsInteractionExample;
}