import * as global from "./globalVariables";
import { toggleVisability } from "./listOfVisuals";

export function mouseDownHandler(event) {
    if(event.target.classList.contains('disableVisualButton') || event.target.parentNode.classList.contains('disableVisualButton')){
        toggleVisability(event.target.closest(".draggable"));  
    }
    if(event.target.nodeName == "BUTTON" || event.target.parentNode.nodeName == "BUTTON" || event.target.closest(".collapseForm")){
        return;
    }
    global.setDraggableElement(event.target.closest(".draggable"));

    const visualPos = global.draggableElement.getBoundingClientRect();
    global.setPosX(event.pageX - visualPos.left);
    global.setPosY(event.pageY - visualPos.top);

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

function mouseMoveHandler(event) {
    const visualPos = global.draggableElement.getBoundingClientRect();

    if (!global.draggingStarted) {
        global.setDraggingStarted(true);

        global.setPlaceholderElement(document.createElement('div'));
        global.placeholderElement.classList.add('placeholder');
        global.draggableElement.parentNode.insertBefore(
            global.placeholderElement,
            global.draggableElement.nextSibling
        );

        global.placeholderElement.style.height = `${visualPos.height}px`;
    }

    global.draggableElement.style.position = 'fixed';
    global.draggableElement.style.width = `${visualPos.width}px`;
    global.draggableElement.style.top = `${event.pageY - global.posY}px`;
    global.draggableElement.style.left = `${event.pageX - global.posX}px`;

    const previousElement = global.draggableElement.previousElementSibling;
    const nextElement = global.placeholderElement.nextElementSibling;

    if (previousElement && isBefore(global.draggableElement, previousElement)) {
        swapListElements(global.placeholderElement, global.draggableElement);
        swapListElements(global.placeholderElement, previousElement);
        return;
    }
    if (nextElement && isBefore(nextElement, global.draggableElement)) {
        swapListElements(nextElement, global.placeholderElement);
        swapListElements(nextElement, global.draggableElement);
    }
};

function mouseUpHandler() {
    if( global.placeholderElement){
        global.placeholderElement.parentNode.removeChild(global.placeholderElement);
        global.setDraggingStarted(false);
    }

    global.draggableElement.style.removeProperty('top');
    global.draggableElement.style.removeProperty('left');
    global.draggableElement.style.removeProperty('position');

    global.setPosX(null);
    global.setPosY(null);
    global.setDraggableElement(null);

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

function isBefore(nodeA, nodeB) {
    const PosA = nodeA.getBoundingClientRect();
    const PosB = nodeB.getBoundingClientRect();

    return PosA.top + PosA.height / 2 < PosB.top + PosB.height / 2;
};

function swapListElements(nodeA, nodeB) {
    let siblingOfA;
    if(nodeA.nextSibling == nodeB){
        siblingOfA = nodeA;
    }else{
        siblingOfA = nodeA.nextSibling;
    }

    nodeB.parentNode.insertBefore(nodeA, nodeB);
    nodeA.parentNode.insertBefore(nodeB, siblingOfA);
};