import * as helpers from "./helperFunctions";
import * as global from "./globalVariables";
import * as disable from "./disableArea";
import { getCardChanges,  getChartChanges } from "./basicVisualContent";
import { getLineClusteredColumnComboChartChanges } from "./complexVisualContent";
import { showReportChanges } from "./showReportChanges";

export async function showVisualChanges(selectedVisual) {
    let visualData = helpers.getDataOfVisual(selectedVisual);

    if(visualData.interactionChangedInfosStatus != global.infoStatus.deleted){
        disable.disableFrame();
        disable.createDisabledArea(selectedVisual);

        let position = helpers.getVisualCardPos(selectedVisual, global.infoCardWidth, global.infoCardMargin);

        let style = helpers.getCardStyle(position.y, position.x, global.infoCardWidth, "");
        if(position.pos === "left"){
            helpers.createCard("showChangesCard", style, "rectLeftBig");
            helpers.createCloseButton("closeButton", "closeButtonPlacementBig positionLeft", helpers.removeOnboarding, "showChangesCard");
        }else{
            helpers.createCard("showChangesCard", style, "rectRightBig");
            helpers.createCloseButton("closeButton", "closeButtonPlacementBig", helpers.removeOnboarding, "showChangesCard");
        }

        helpers.createCardContent(global.settings.interactionExample.title, "", "showChangesCard");
        await createShowVisualChangesInfo(selectedVisual);

        helpers.createCardButtons("back to visual", "back to overview");
    } else {
        showReportChanges();
    }
}

async function createShowVisualChangesInfo(visual){
    let visualData = helpers.getDataOfInteractionVisual(visual);
    let visualChangeInfo;

    switch(visualData.interactionChangedInfosStatus){
        case global.infoStatus.original:
            visualChangeInfo = await getShowVisualChangesText(visual);
            break;
        case global.infoStatus.changed:
        case global.infoStatus.added:
            visualChangeInfo = visualData.changedInteractionChangedInfo;
            break;
        default:
            break;
    }

    document.getElementById("contentText").innerHTML += visualChangeInfo;
}

export async function getShowVisualChangesText(visual){
    let allTargets = global.selectedTargets.map(({ equals }) => equals);
    let allTargetsString = helpers.dataToString(allTargets);
    let visualChangeInfo = "You can see that this visual was filtered by " + allTargetsString + ".<br>";

    let type = helpers.getTypeName(visual);

    switch(type){
        case 'Card':
            visualChangeInfo += await getCardChanges(visual);
            break;
        case 'Line Clustered Column Combo Chart':
            visualChangeInfo += await getLineClusteredColumnComboChartChanges(visual);
            visualChangeInfo += displayCanFilterInfo();
            break;
        case 'Line Chart':
            visualChangeInfo += await getChartChanges(visual);
            visualChangeInfo += displayCanFilterInfo();
            break;
        case 'Clustered Bar Chart':
            visualChangeInfo += await getChartChanges(visual);
            visualChangeInfo += displayCanFilterInfo();
            break;
        default:
            break;
    }

    return visualChangeInfo;
}

function displayCanFilterInfo(){
    return "<br>You can also change the report filters by selecting a new element of this visual.";
}