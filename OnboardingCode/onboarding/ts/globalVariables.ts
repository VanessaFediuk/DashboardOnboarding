export const footerHeight = 37;
export const filterClosedWidth = 32;
export const filterOpenedWidth = 248;

export const guidedTourButtonWidth = 150;
export const explorationModeButtonWidth = 250;
export const darkOutlineButtonClass = "btn btn-outline-dark";
export const onboardingButtonStyle =  "margin:10px;float:right;";

export const infoCardMargin = 10;
export const infoCardWidth = 400;
export const introCardMargin = 60;
export const introCardWidth = 500;
export const interactionCardWidth = 500;
export const interactionCardHeight = 240;
export const hintCardMargin = 5;
export const hintCardWidth = 200;
export const editCardMargin = 0;
export const editCardWidth = 500;

export let settings;
export let report;
export let currentVisuals;
export let allVisuals;
export let page;
export let selectedTargets;

export let explorationMode = false;
export let isGuidedTour = false;
export let interactionMode = false;

export let currentVisualIndex: number;

export let containerPaddingTop: number;
export let containerPaddingLeft: number;

export let draggableElement;
export let posX = 0;
export let posY = 0;
export let placeholderElement;
export let draggingStarted = false;

export enum infoStatus {
    original = "original",
    changed = "changed",
    added = "added",
    deleted = "deleted",
}

export function createReportOffset(){
    return {
        top: undefined,
        bottom: undefined,
        left: undefined,
        right: undefined,
    }
}

export function createVisual(){
    return {
        id: "",
        title: "",
        disabled: false,
        generalInfosStatus: [],
        dataInfosStatus: [],
        interactionInfosStatus: [],
        changedGeneralInfos: [],
        changedDataInfos: [],
        changedInteractionInfos: []
    }
}

export function createFilterVisual(){
    return {
        title: "",
        generalInformation: "",
        filterInfosStatus: [],
        changedFilterInfos: []
    }
}

export function createInteractableVisual(){
    return {
        id: "",
        title: "",
        clickInfosStatus: "",
        changedClickInfos: "",
        changesInfosStatus: "",
        changedChangesInfos: ""
    }
}

export function createInteractionExample(){
   return {
        title: "",
        generalInfoStatus: "",
        changedGeneralInfo: "",
        nextVisualHint: "",
        visuals: []
   }
}

export function createSettingsObject(){
    return {
        reportOffset: undefined,
        visuals: [],
        filterVisual: undefined,
        interactionExample: undefined
    }
}

export function setSettings(newSettings){
    settings = newSettings;
}

export function setReport(newReport){
    report = newReport;
}
export function setVisuals(newCurrentVisuals){
    currentVisuals = newCurrentVisuals;
}
export function setAllVisuals(newAllVisuals){
    allVisuals = newAllVisuals;
}
export function setPage(newPage){
    page = newPage;
}
export function setSelectedTargets(newSelectedTargets){
    selectedTargets = newSelectedTargets;
}

export function setExplorationMode(newExplorationMode){
    explorationMode = newExplorationMode;
}
export function setIsGuidedTour(newIsGuidedTour){
    isGuidedTour = newIsGuidedTour;
}
export function setInteractionMode(newInteractionMode){
    interactionMode = newInteractionMode;
}

export function setCurrentVisualIndex(newCurrentVisualIndex){
    currentVisualIndex = newCurrentVisualIndex;
}

export function setContainerPaddingTop(newContainerPaddingTop){
    containerPaddingTop = newContainerPaddingTop;
}
export function setContainerPaddingLeft(newContainerPaddingLeft){
    containerPaddingLeft = newContainerPaddingLeft;
}

export function setDraggableElement(newDraggableElement){
    draggableElement = newDraggableElement;
}
export function setPosX(newPosX){
    posX = newPosX;
}
export function setPosY(newPosY){
    posY = newPosY;
}
export function setPlaceholderElement(newPlaceholderElement){
    placeholderElement = newPlaceholderElement;
}
export function setDraggingStarted(newDraggingStarted){
    draggingStarted = newDraggingStarted;
}

export function createDivAttributes(){
    return { 
        id: "",
        style: "",
        classes: "",
        content: "",
        role: "",
        label: "",
        clickable: false,
        selectedTargets: "",
        eventType: "",
        eventFunction: undefined,
        parentId: ""
    };
}

export function createButtonAttributes(){
    return { 
        id: "",
        content: "",
        style: "",
        classes:  "",
        function: undefined,
        parentId: ""
    };
}

export function createSpanAttributes(){
    return { 
        id: "",
        content: "",
        hidden: "false",
        parentId: ""
    };
}

export function createH1Attributes(){
    return { 
        id: "",
        content: "",
        style: "",
        parentId: ""
    }
}

export function createH2Attributes(){
    return { 
        id: "",
        content: "",
        style: "",
        parentId: ""
    }
}

export function createULAttributes(){
    return { 
        id: "",
        classes: "",
        role: "",
        parentId: ""
    }
}

export function createLIAttributes(){
    return { 
        id: "",
        classes: "",
        parentId: ""
    }
}

export function createAnchorAttributes(){
    return { 
        id: "",
        classes: "",
        href: "",
        content: "",
        selected: "",
        controles: "",
        toggle: "",
        role: "",
        parentId: ""
    }
}

export function createTabAnchorAttributes(){
    return { 
        id: "",
        href: "",
        content: "",
        parentId: ""
    }
}

export function createLabelAttributes(){
    return { 
        id: "",
        for: "",
        style: "",
        content: "",
        parentId: ""
    }
}

export function createSmallAttributes(){
    return { 
        id: "",
        style: "",
        content: "",
        parentId: ""
    }
}

export function createInputAttributes(){
    return { 
        id: "",
        type: "",
        style: "",
        value: "",
        parentId: ""
    }
}

export function createTextareaAttributes(){
    return { 
        id: "",
        class: "",
        style: "",
        value: "",
        parentId: ""
    }
}



