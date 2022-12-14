import * as global from "./globalVariables";
import { getVisualIndex, removeContainerOffset, removeOnboardingOverlay } from "./helperFunctions";
import { createFilterInfoCard } from "./filterInfoCards";
import { createInfoCard } from "./infoCards";
import { removeHintCard, removeShowChangesCard } from "./showReportChanges";
import { showVisualChanges } from "./showVisualsChanges";

export function addStylesheet(URL: string){
    let style = document.createElement('link');
    style.rel = "stylesheet";
    style.href= URL;

    document.head.appendChild(style)
}

export function createDiv(attributes: { id: any; style: any; classes: any; content: any; role: any; label: any; clickable: any; selectedTargets?: any; eventType: any; eventFunction: any; parentId: any; }){
    let div = document.createElement('div');
    div.id = attributes.id;
    div.style.cssText = attributes.style;
    div.className = attributes.classes;
    div.innerHTML = attributes.content;
    div.setAttribute("role", attributes.role);
    div.setAttribute("aria-labelledby", attributes.label);
    div.addEventListener(attributes.eventType, attributes.eventFunction);
    if(attributes.clickable){
        div.onclick = function(){
            if(global.interactionMode){
                removeContainerOffset();
                removeOnboardingOverlay();
                removeShowChangesCard();
                removeHintCard();

                let selectedVisual = global.currentVisuals[getVisualIndex(attributes.id)];
                showVisualChanges(selectedVisual);
            }else{
                removeOnboardingOverlay();
                if(attributes.id === "filter"){
                    global.setCurrentVisualIndex(global.currentVisuals.length);
                    createFilterInfoCard();
                }else{
                    global.setCurrentVisualIndex(getVisualIndex(attributes.id));
                    createInfoCard(global.currentVisuals[global.currentVisualIndex]);
                }  
            }
        }  
    }

    document.getElementById(attributes.parentId)?.appendChild(div);
}

export function createButton(attributes: { id: any; content: any; style: any; classes: any; function: any; parentId: any; }, insertBeforeParent: boolean){
    let button = document.createElement('button');
    button.id = attributes.id;
    button.type = "button";
    button.className = attributes.classes;
    button.innerHTML = attributes.content;
    button.style.cssText = attributes.style;
    button.onclick = attributes.function;

    let parent = document.getElementById(attributes.parentId);
    if(insertBeforeParent){
        parent?.parentNode?.insertBefore(button, parent);
    } else {
        parent?.appendChild(button);
    } 
}

export function createSpan(attributes: { id: any; content: any; hidden: any; parentId: any; }){
    let span = document.createElement('span');
    span.id = attributes.id;
    span.innerHTML = attributes.content;
    span.setAttribute("aria-hidden", attributes.hidden);

    document.getElementById(attributes.parentId)?.appendChild(span);
}

export function createH1(attributes: { id: any; content: any; style: any; parentId: any; }){
    let h1 = document.createElement('h1');
    h1.id = attributes.id;
    h1.innerHTML = attributes.content;
    h1.style.cssText = attributes.style;

    document.getElementById(attributes.parentId)?.appendChild(h1);
}

export function createH2(attributes: { id: any; content: any; style: any; parentId: any; }){
    let h2 = document.createElement('h2');
    h2.id = attributes.id;
    h2.innerHTML = attributes.content;
    h2.style.cssText = attributes.style;

    document.getElementById(attributes.parentId)?.appendChild(h2);
}

export function createUL(attributes: { id: any; classes: any; role: any; parentId: any; }){
    let ul = document.createElement('ul');
    ul.id = attributes.id;
    ul.className = attributes.classes;
    if(attributes.role){
        ul.setAttribute("role", attributes.role);
    }

    document.getElementById(attributes.parentId)?.appendChild(ul);
}

export function createLI(attributes: { id: any; classes: any; parentId: any; }){
    let li = document.createElement('li');
    li.id = attributes.id;
    li.className = attributes.classes;

    document.getElementById(attributes.parentId)?.appendChild(li);
}

export function createAnchor(attributes: { id: any; classes: any; href: any; content: any; selected: any; controles: any; toggle: any; role?: string; parentId: any; tab?: any; }, isTab: boolean){
    let a = document.createElement('a');
    a.id = attributes.id;
    a.className = attributes.classes;
    a.href = attributes.href;
    a.innerHTML = attributes.content;
    if(isTab){
        a.setAttribute("aria-selected", attributes.selected);
        a.setAttribute("aria-controls", attributes.controles);
        a.setAttribute("data-toggle", attributes.toggle);
        a.setAttribute("role", attributes.tab);
    }

    document.getElementById(attributes.parentId)?.appendChild(a);
}

export function createLabel(attributes: { id: any; for: any; style: any; content: any; parentId: any; }){
    let label = document.createElement('label');
    label.id = attributes.id;
    label.setAttribute("for", attributes.for);
    label.style.cssText = attributes.style;
    label.innerHTML = attributes.content;
    
    document.getElementById(attributes.parentId)?.appendChild(label);
}

export function createSmall(attributes: { id: any; style: any; content: any; parentId: any; }){
    let small = document.createElement('small');
    small.id = attributes.id;
    small.className = "form-text text-muted";
    small.style.cssText = attributes.style;
    small.innerHTML = attributes.content;
    
    document.getElementById(attributes.parentId)?.appendChild(small);
}

export function createInput(attributes: { id: any; type: any; style: any; value: any; parentId: any; }){
    let input = document.createElement('input');
    input.id = attributes.id;
    input.style.cssText = attributes.style;
    input.value = attributes.value;
    input.type = attributes.type; 
    document.getElementById(attributes.parentId)?.appendChild(input);
}

export function createTextarea(attributes: { id: any; class: any; style: any; value: any; parentId: any; }, insertBeforeParent: boolean){
    let textarea = document.createElement('textarea');
    textarea.id = attributes.id;
    textarea.className = attributes.class;
    textarea.style.cssText = attributes.style;
    textarea.value = attributes.value;

    let parent = document.getElementById(attributes.parentId);
    if(insertBeforeParent){
        parent?.parentNode?.insertBefore(textarea, parent);
    } else {
        parent?.appendChild(textarea);
    } 
}

export function removeElement(id: string){
    let elem = document.getElementById(id);
    if (elem){
        elem.parentNode?.removeChild(elem);
    }    
}

export function removeAllElementsOfClass(elementClass: string){
    const elements = document.querySelectorAll('.' + elementClass);
    elements.forEach(elem => {
        elem.remove();
    });
}