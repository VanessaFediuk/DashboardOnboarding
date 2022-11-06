import * as helpers from "./helperFunctions";
import * as global from "./globalVariables";
import { createFilterDisabledArea } from "./disableArea";
import { IBasicFilter, IFilterColumnTarget } from "powerbi-models";

export async function createFilterInfoCard(){
    createFilterDisabledArea();
  
    let style = helpers.getCardStyle(global.infoCardMargin, global.page.defaultSize.width! - global.infoCardMargin - global.infoCardWidth, global.infoCardWidth, "");
    helpers.createCard("infoCard", style, "rectLeftBig")

    helpers.createCloseButton("closeButton", "closeButtonPlacementBig", "float: left;", helpers.getCloseFunction(), "infoCard");

    helpers.createCardContent(global.settings.filterVisual.title, global.settings.filterVisual.generalInformation, "infoCard");
    let filters = await getFilterInfos();
    createFilterList(filters, "contentText");
    
    if(global.isGuidedTour){
        helpers.createCardButtons("previous", "close");
    }else{
        helpers.createCardButtons("previous", "next");
    }
}

export function createFilterList(list: string | any[], parentId: string){
    let ul = document.createElement('ul');
    document.getElementById(parentId)?.appendChild(ul);

    for (let i = 0; i < list.length; ++i) {
        let li = document.createElement('li');
        li.innerHTML =  list[i];
        ul.appendChild(li);
    }
}

export function getFilterDescription(filter: IBasicFilter){
    let valueText = "";
    if(filter.values.length != 0){
        valueText = " Its current value is " + filter.values[0] + ".";
    }
    let target = filter.target as IFilterColumnTarget;
    return target.column + ": It filters the data " + target.column + "." + valueText;
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