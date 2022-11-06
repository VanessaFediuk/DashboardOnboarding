import * as helpers from "./helperFunctions";
import * as global from "./globalVariables";
import { createFilterDisabledArea } from "./disableArea";

export async function createFilterInfoCard(){
    createFilterDisabledArea();
  
    let style = helpers.getCardStyle(global.infoCardMargin, global.page.defaultSize.width - global.infoCardMargin - global.infoCardWidth, global.infoCardWidth, "");
    helpers.createCard("infoCard", style, "rectLeftBig")

    helpers.createCloseButton("closeButton", "closeButtonPlacementBig positionLeft", helpers.getCloseFunction(), "infoCard");

    helpers.createCardContent(global.settings.filterVisual.title, global.settings.filterVisual.generalInformation, "infoCard");
    let filters = await getFilterInfos();
    createFilterList(filters, "contentText");
    
    if(global.isGuidedTour){
        helpers.createCardButtons("previous", "close");
    }else{
        helpers.createCardButtons("previous", "next");
    }
}

export function createFilterList(list, parentId){
    let ul = document.createElement('ul');
    document.getElementById(parentId).appendChild(ul);

    for (let i = 0; i < list.length; ++i) {
        let li = document.createElement('li');
        li.innerHTML =  list[i];
        ul.appendChild(li);
    }
}

export function getFilterDescription(filter){
    let valueText = "";
    if(filter.values.length != 0){
        valueText = " Its current value is " + filter.values[0] + ".";
    }
    return filter.target.column + ": It filters the data " + filter.target.column + "." + valueText;
}

async function getFilterInfos(){
    let filterInfos = await helpers.getFilterInfo();

    let newFilters = [];
    for (let i = 0; i < global.settings.filterVisual.filterInfosStatus.length; ++i) {
        switch(global.settings.filterVisual.filterInfosStatus[i]){
            case global.infoStatus.original:
                newFilters.push(filterInfos[i]);
                break;
            case global.infoStatus.changed:
            case global.infoStatus.added:
                newFilters.push(global.settings.filterVisual.changedFilterInfos[i]);
                break;
            default:
                break;
       }
    }
    return newFilters;
}