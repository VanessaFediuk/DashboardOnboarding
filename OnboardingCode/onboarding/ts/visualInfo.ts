import * as helpers from "./helperFunctions";
import * as global from "./globalVariables";
import * as elements from "./elements";
import * as info from "./visualInfo";
import bulletpointImg from "../assets/dot.png";

export async function createVisualInfo(visual){
    let visualInfos = await helpers.getVisualInfos(visual);
    info.createTabsWithContent(visual, visualInfos);
}

export function createTabsWithContent(visual, visualInfos){
    let hasDataInfo = false;
    let hasInteractionInfo = false;
    const visualData = helpers.getDataOfVisual(visual);

    let generalImages = [];
    let generalInfos = [];
    let dataImages = [];
    let dataInfos = [];
    let interactionImages = [];
    let interactionInfos = [];

    for (let i = 0; i < visualData.generalInfosStatus.length; ++i) {
       switch(visualData.generalInfosStatus[i]){
            case global.infoStatus.original:
                generalImages.push(visualInfos.generalImages[i]);
                generalInfos.push(visualInfos.generalInfos[i]);
                break;
            case global.infoStatus.changed:
            case global.infoStatus.added:
                generalImages.push(bulletpointImg);
                generalInfos.push(visualData.changedGeneralInfos[i]);
                break;
            default:
                break;
       }
    }

    for (let i = 0; i < visualData.dataInfosStatus.length; ++i) {
        switch(visualData.dataInfosStatus[i]){
            case global.infoStatus.original:
                dataImages.push(visualInfos.dataImages[i]);
                dataInfos.push(visualInfos.dataInfos[i]);
                break;
            case global.infoStatus.changed:
            case global.infoStatus.added:
                dataImages.push(bulletpointImg);
                dataInfos.push(visualData.changedDataInfos[i]);
                break;
            default:
                break;
        }
    }

    for (let i = 0; i < visualData.interactionInfosStatus.length; ++i) {
        switch(visualData.interactionInfosStatus[i]){
            case global.infoStatus.original:
                interactionImages.push(visualInfos.interactionImages[i]);
                interactionInfos.push(visualInfos.interactionInfos[i]);
                break;
            case global.infoStatus.changed:
            case global.infoStatus.added:
                interactionImages.push(bulletpointImg);
                interactionInfos.push(visualData.changedInteractionInfos[i]);
                break;
            default:
                break;
        }
    }

    if(dataInfos.length != 0){
        hasDataInfo = true;
    }
    if(interactionInfos.length != 0){
        hasInteractionInfo = true;
    }
    createTabs(hasDataInfo, hasInteractionInfo);

    createInfoList(generalImages, generalInfos, "generalTab");
    if(hasDataInfo){
        createInfoList(dataImages, dataInfos, "dataTab");
    }
    if(hasInteractionInfo){
        createInfoList(interactionImages, interactionInfos, "interactionTab");
        helpers.createInteractionExampleButton("interactionTab", visual);
    }
}

function createTabs(hasDataInfo, hasInteractionInfo){
    let divAttributes = global.createDivAttributes();
    divAttributes.id = "visualInfoTabs";
    divAttributes.parentId = "contentText";
    elements.createDiv(divAttributes);

    let ulAttributes = global.createULAttributes();
    ulAttributes.id = "pillsTab";
    ulAttributes.role = "tablist";
    ulAttributes.classes = "nav nav-pills nav-fill";
    ulAttributes.parentId = "visualInfoTabs";
    elements.createUL(ulAttributes);

    let ids = ["generalPill"];
    let attributes = [];

    if(hasDataInfo){
        ids.push("dataPill");
    }

    if(hasInteractionInfo){
        ids.push("interactionPill");
    }

    let aAttributes = global.createTabAnchorAttributes();
    aAttributes.id = "generalLink";
    aAttributes.content = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up mb-1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/></svg>  General';
    aAttributes.href = "generalTab";
    aAttributes.parentId = "generalPill";
    attributes.push(aAttributes);

    if(hasDataInfo){
        aAttributes = global.createTabAnchorAttributes();
        aAttributes.id = "dataLink";
        aAttributes.content = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-data mb-1" viewBox="0 0 16 16"><path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/><path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/><path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z"/></svg>  Data';
        aAttributes.href = "dataTab";
        aAttributes.parentId = "dataPill";
        attributes.push(aAttributes);
    }

    if(hasInteractionInfo){
        aAttributes = global.createTabAnchorAttributes();
        aAttributes.id = "interactionLink";
        aAttributes.content = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-thumb mb-1" viewBox="0 0 16 16"><path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"/></svg> Interaction';
        aAttributes.href = "interactionTab";
        aAttributes.parentId = "interactionPill";
        attributes.push(aAttributes);
    }

    createTabPills(ids, attributes);

    divAttributes = global.createDivAttributes();
    divAttributes.id = "pillsTabContent";
    divAttributes.classes = "tab-content";
    divAttributes.parentId = "visualInfoTabs";
    elements.createDiv(divAttributes);

    ids = ["generalTab"];
    let tabPills = ["generalLink"];

    if(hasDataInfo){
        ids.push("dataTab");
        tabPills.push("dataLink");
    }

    if(hasInteractionInfo){
        ids.push("interactionTab");
        tabPills.push("interactionLink");
    }

    createTabContent(ids, tabPills);
}

function createTabPills(ids, attributes){
    ids.forEach((id, index) => {
        let liAttributes = global.createLIAttributes();
        liAttributes.id = id;
        liAttributes.classes = "nav-item";
        liAttributes.parentId ="pillsTab";
        elements.createLI(liAttributes);

        let aAttributes = global.createAnchorAttributes();
        aAttributes.id = attributes[index].id;
        if(index == 0){
            aAttributes.classes = "nav-link active";
            aAttributes.selected = "true";   
        }else{
            aAttributes.classes = "nav-link";
            aAttributes.selected = "false";   
        }
        aAttributes.controles = attributes[index].href;
        aAttributes.content = attributes[index].content;
        aAttributes.toggle = "pill";
        aAttributes.role = "tab";
        aAttributes.href = "#" + attributes[index].href;
        aAttributes.parentId = attributes[index].parentId;
        elements.createAnchor(aAttributes, true);
    });
}

function createTabContent(ids, tabPills){
    ids.forEach((id, index) => {
        let attributes = global.createDivAttributes();
        attributes.id =  id;
        attributes.role = "tabpanel";
        attributes.label = tabPills[index];
        if(index == 0){
            attributes.classes = "tab-pane fade show active";
        }else{
            attributes.classes = "tab-pane fade";
        }
        attributes.parentId = "pillsTabContent";
        elements.createDiv(attributes);
    });
}

export function createInfoList(images, infos, parentId){
    for (let i = 0; i < images.length; ++i) {
        let ul = document.createElement('ul');
        ul.style.listStyleImage = "url("+ images[i] + ")";
        document.getElementById(parentId).appendChild(ul);

        let li = document.createElement('li');
        li.innerHTML =  infos[i];
        ul.appendChild(li);
    }
}