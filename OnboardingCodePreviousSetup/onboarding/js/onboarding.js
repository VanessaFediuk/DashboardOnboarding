/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./AppOwnsData/wwwroot/js/embed.js":
/*!*****************************************!*\
  !*** ./AppOwnsData/wwwroot/js/embed.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "report": () => (/* binding */ report)
/* harmony export */ });
let report;

$(document).ready(function() {

    // 1 - get DOM object for div that is report container 
    var models = window["powerbi-client"].models;

    var reportContainer = document.getElementById("embed-container");
  
    // 2 - get report embedding data from view model
    var reportId = window.viewModel.reportId;
    var embedUrl = window.viewModel.embedUrl;
    var token = window.viewModel.token
  
    // 3 - embed report using the Power BI JavaScript API.
  
    var config = {
      type: 'report',
      id: reportId,
      embedUrl: embedUrl,
      accessToken: token,
      permissions: models.Permissions.All,
      tokenType: models.TokenType.Aad,
      viewMode: models.ViewMode.View,
      settings: {
        visualRenderedEvents: true,
        panes: {
            filters: {
                visible: true
            },
            pageNavigation: {
                visible: true
            }
        }
    }
    };
  
    // Embed the report and display it within the div container.
    report = window.powerbi.embed(reportContainer, config);
});

/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/assets/axis-click.png":
/*!**************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/assets/axis-click.png ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "axis-click.png");

/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/assets/bar-chart.png":
/*!*************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/assets/bar-chart.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "bar-chart.png");

/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/assets/dot.png":
/*!*******************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/assets/dot.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "dot.png");

/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/assets/element-click.png":
/*!*****************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/assets/element-click.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "element-click.png");

/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/assets/info.png":
/*!********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/assets/info.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "info.png");

/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/assets/legend-click.png":
/*!****************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/assets/legend-click.png ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "legend-click.png");

/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/assets/legend.png":
/*!**********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/assets/legend.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "legend.png");

/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/assets/line-graph.png":
/*!**************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/assets/line-graph.png ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "line-graph.png");

/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/assets/x-axis.png":
/*!**********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/assets/x-axis.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "x-axis.png");

/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/assets/y-axis.png":
/*!**********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/assets/y-axis.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "y-axis.png");

/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/authorMode.ts":
/*!*********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/authorMode.ts ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./disableArea */ "./AppOwnsData/wwwroot/onboarding/ts/disableArea.ts"), __webpack_require__(/*! ./interactionExample */ "./AppOwnsData/wwwroot/onboarding/ts/interactionExample.ts"), __webpack_require__(/*! ./editVisuals */ "./AppOwnsData/wwwroot/onboarding/ts/editVisuals.ts"), __webpack_require__(/*! ./editFilters */ "./AppOwnsData/wwwroot/onboarding/ts/editFilters.ts"), __webpack_require__(/*! ./editInteractionExample */ "./AppOwnsData/wwwroot/onboarding/ts/editInteractionExample.ts"), __webpack_require__(/*! ./editReportOffset */ "./AppOwnsData/wwwroot/onboarding/ts/editReportOffset.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, elements, disableArea_1, interactionExample_1, editVisuals_1, editFilters_1, editInteractionExample_1, editReportOffset_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.saveOnboardingChanges = exports.createOnboardingEditing = void 0;
    function createOnboardingEditing() {
        helpers.removeOnboarding();
        helpers.createOnboarding();
        helpers.toggleFilter(true);
        (0, disableArea_1.disableAll)();
        var style = helpers.getCardStyle(global.editCardMargin, 0, global.editCardWidth, "") + "right:0;margin:auto;";
        helpers.createCard("editCard", style, "");
        helpers.createCardContent("Edit Onboarding", "", "editCard");
        createEditForm();
        helpers.createCardButtons("cancel", "save");
    }
    exports.createOnboardingEditing = createOnboardingEditing;
    function createEditForm() {
        return __awaiter(this, void 0, void 0, function () {
            var divAttributes;
            return __generator(this, function (_a) {
                divAttributes = global.createDivAttributes();
                divAttributes.id = "editOnbording";
                divAttributes.style = "margin: 10px;box-shadow: 5px 5px 5px gray,0px 5px 5px gray";
                divAttributes.parentId = "contentText";
                elements.createDiv(divAttributes);
                (0, editVisuals_1.createVisualsGroup)();
                (0, editFilters_1.createFiltersGroup)();
                (0, editInteractionExample_1.createInteractionExampleGroup)();
                (0, editReportOffset_1.createReportOffsetGroup)();
                return [2];
            });
        });
    }
    function saveOnboardingChanges() {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, visual, visualData, titleInput, visualInfos, generalInfosTextareas, i, textarea, newGeneralInfo_1, dataInfosTextareas, i, textarea, newDataInfo, interactionInfosTextareas, i, textarea, newInteractionInfo, filterInfos, filterTitleInput, filterGeneralInfoInput, filterInfosTextareas, i, textarea, newFilterInfo, interactionExampleTitleInput, generalInfosTextarea, newGeneralInfo, compareNewGeneralInfo, originalGeneralInfo, hintInput, _loop_1, _b, _c, visual;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        global.settings.reportOffset.top = helpers.saveIntInput("topOffsetInput");
                        global.settings.reportOffset.bottom = helpers.saveIntInput("bottomOffsetInput");
                        global.settings.reportOffset.left = helpers.saveIntInput("leftOffsetInput");
                        global.settings.reportOffset.right = helpers.saveIntInput("rightOffsetInput");
                        global.setContainerPaddingTop(global.report.iframe.offsetTop + global.settings.reportOffset.top);
                        global.setContainerPaddingLeft(global.report.iframe.offsetLeft + global.settings.reportOffset.left);
                        (0, editVisuals_1.orderVisuals)();
                        _i = 0, _a = global.allVisuals;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 4];
                        visual = _a[_i];
                        visualData = helpers.getDataOfVisual(visual);
                        titleInput = document.getElementById("titleInput" + visual.name);
                        visualData.title = titleInput === null || titleInput === void 0 ? void 0 : titleInput.value;
                        return [4, helpers.getVisualInfos(visual)];
                    case 2:
                        visualInfos = _d.sent();
                        generalInfosTextareas = document.getElementsByClassName("generalInfos" + visual.name);
                        for (i = 0; i < generalInfosTextareas.length; ++i) {
                            textarea = generalInfosTextareas[i];
                            newGeneralInfo_1 = textarea.value.replaceAll('\n', "<br>");
                            if (newGeneralInfo_1 == "") {
                                visualData.generalInfosStatus[i] = "deleted";
                                visualData.changedGeneralInfos[i] = "";
                            }
                            else if (i >= visualData.generalInfosStatus.length) {
                                visualData.generalInfosStatus.push("added");
                                visualData.changedGeneralInfos.push(newGeneralInfo_1);
                            }
                            else if (newGeneralInfo_1 == visualInfos.generalInfos[i]) {
                                visualData.generalInfosStatus[i] = "original";
                                visualData.changedGeneralInfos[i] = "";
                            }
                            else {
                                visualData.generalInfosStatus[i] = "changed";
                                visualData.changedGeneralInfos[i] = newGeneralInfo_1;
                            }
                        }
                        dataInfosTextareas = document.getElementsByClassName("dataInfos" + visual.name);
                        for (i = 0; i < dataInfosTextareas.length; ++i) {
                            textarea = dataInfosTextareas[i];
                            newDataInfo = textarea.value.replaceAll('\n', "<br>");
                            if (newDataInfo == "") {
                                visualData.dataInfosStatus[i] = "deleted";
                                visualData.changedDataInfos[i] = "";
                            }
                            else if (i >= visualData.dataInfosStatus.length) {
                                visualData.dataInfosStatus.push("added");
                                visualData.changedDataInfos.push(newDataInfo);
                            }
                            else if (newDataInfo == visualInfos.dataInfos[i]) {
                                visualData.dataInfosStatus[i] = "original";
                                visualData.changedDataInfos[i] = "";
                            }
                            else {
                                visualData.dataInfosStatus[i] = "changed";
                                visualData.changedDataInfos[i] = newDataInfo;
                            }
                        }
                        interactionInfosTextareas = document.getElementsByClassName("interactionInfos" + visual.name);
                        for (i = 0; i < interactionInfosTextareas.length; ++i) {
                            textarea = interactionInfosTextareas[i];
                            newInteractionInfo = textarea.value.replaceAll('\n', "<br>");
                            if (newInteractionInfo == "") {
                                visualData.interactionInfosStatus[i] = "deleted";
                                visualData.changedInteractionInfos[i] = "";
                            }
                            else if (i >= visualData.interactionInfosStatus.length) {
                                visualData.interactionInfosStatus.push("added");
                                visualData.changedInteractionInfos.push(newInteractionInfo);
                            }
                            else if (newInteractionInfo == visualInfos.interactionInfos[i]) {
                                visualData.interactionInfosStatus[i] = "original";
                                visualData.changedInteractionInfos[i] = "";
                            }
                            else {
                                visualData.interactionInfosStatus[i] = "changed";
                                visualData.changedInteractionInfos[i] = newInteractionInfo;
                            }
                        }
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [4, helpers.getFilterInfo()];
                    case 5:
                        filterInfos = _d.sent();
                        filterTitleInput = document.getElementById("titleInputFilter");
                        global.settings.filterVisual.title = filterTitleInput === null || filterTitleInput === void 0 ? void 0 : filterTitleInput.value;
                        filterGeneralInfoInput = document.getElementById("generalInfoInputFilter");
                        global.settings.filterVisual.generalInformation = filterGeneralInfoInput === null || filterGeneralInfoInput === void 0 ? void 0 : filterGeneralInfoInput.value;
                        filterInfosTextareas = document.getElementsByClassName("filterInfos");
                        for (i = 0; i < filterInfosTextareas.length; ++i) {
                            textarea = filterInfosTextareas[i];
                            newFilterInfo = textarea.value.replaceAll('\n', "<br>");
                            if (newFilterInfo == "") {
                                global.settings.filterVisual.filterInfosStatus[i] = "deleted";
                                global.settings.filterVisual.changedFilterInfos[i] = "";
                            }
                            else if (i >= global.settings.filterVisual.filterInfosStatus.length) {
                                global.settings.filterVisual.filterInfosStatus.push("added");
                                global.settings.filterVisual.changedFilterInfos.push(newFilterInfo);
                            }
                            else if (newFilterInfo == filterInfos[i]) {
                                global.settings.filterVisual.filterInfosStatus[i] = "original";
                                global.settings.filterVisual.changedFilterInfos[i] = "";
                            }
                            else {
                                global.settings.filterVisual.filterInfosStatus[i] = "changed";
                                global.settings.filterVisual.changedFilterInfos[i] = newFilterInfo;
                            }
                        }
                        interactionExampleTitleInput = document.getElementById("titleInputInteractionExample");
                        global.settings.interactionExample.title = interactionExampleTitleInput === null || interactionExampleTitleInput === void 0 ? void 0 : interactionExampleTitleInput.value;
                        generalInfosTextarea = document.getElementById("generalInfoInputInteractionExample");
                        newGeneralInfo = generalInfosTextarea.value.replaceAll('\n', "<br>");
                        compareNewGeneralInfo = newGeneralInfo.replaceAll(/\s+/g, "");
                        originalGeneralInfo = helpers.getGeneralInfoInteractionExampleText().replaceAll('\n', "<br>").replaceAll(/\s+/g, "");
                        if (newGeneralInfo == "") {
                            global.settings.interactionExample.generalInfoStatus = "deleted";
                            global.settings.interactionExample.changedGeneralInfo = "";
                        }
                        else if (originalGeneralInfo == compareNewGeneralInfo) {
                            global.settings.interactionExample.generalInfoStatus = "original";
                            global.settings.interactionExample.changedGeneralInfo = "";
                        }
                        else {
                            global.settings.interactionExample.generalInfoStatus = "changed";
                            global.settings.interactionExample.changedGeneralInfo = newGeneralInfo;
                        }
                        hintInput = document.getElementById("hintInputInteractionExample");
                        global.settings.interactionExample.nextVisualHint = hintInput === null || hintInput === void 0 ? void 0 : hintInput.value;
                        _loop_1 = function (visual) {
                            var visualData, clickInfosTextarea, newClickInfo, clickInfo, changedInfosTextarea, newChangedInfo, changedInfo;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        visualData = global.settings.interactionExample.visuals.find(function (visualData) {
                                            return visualData.id == visual.name;
                                        });
                                        if (!visualData.clickInfosStatus) return [3, 2];
                                        clickInfosTextarea = document.getElementById("interactionExampleInteractionInfosTextarea" + visual.name);
                                        newClickInfo = clickInfosTextarea.value.replaceAll('\n', "<br>");
                                        return [4, (0, interactionExample_1.getInteractionText)(visual)];
                                    case 1:
                                        clickInfo = _e.sent();
                                        if (newClickInfo == "") {
                                            visualData.clickInfosStatus = "deleted";
                                            visualData.changedClickInfo = "";
                                        }
                                        else if (newClickInfo == clickInfo) {
                                            visualData.clickInfosStatus = "original";
                                            visualData.changedClickInfo = "";
                                        }
                                        else {
                                            visualData.clickInfosStatus = "changed";
                                            visualData.changedClickInfo = newClickInfo;
                                        }
                                        _e.label = 2;
                                    case 2:
                                        if (!visualData.interactionChangedInfosStatus) return [3, 4];
                                        changedInfosTextarea = document.getElementById("interactionExampleChangedInfosTextarea" + visual.name);
                                        newChangedInfo = changedInfosTextarea.value.replaceAll('\n', "<br>");
                                        return [4, helpers.getInteractionExampleChangesText(visual)];
                                    case 3:
                                        changedInfo = _e.sent();
                                        if (newChangedInfo == "") {
                                            visualData.interactionChangedInfosStatus = "deleted";
                                            visualData.changedInteractionChangedInfo = "";
                                        }
                                        else if (newChangedInfo == changedInfo) {
                                            visualData.interactionChangedInfosStatus = "original";
                                            visualData.changedInteractionChangedInfo = "";
                                        }
                                        else {
                                            visualData.interactionChangedInfosStatus = "changed";
                                            visualData.changedInteractionChangedInfo = newChangedInfo;
                                        }
                                        _e.label = 4;
                                    case 4: return [2];
                                }
                            });
                        };
                        _b = 0, _c = global.allVisuals;
                        _d.label = 6;
                    case 6:
                        if (!(_b < _c.length)) return [3, 9];
                        visual = _c[_b];
                        return [5, _loop_1(visual)];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8:
                        _b++;
                        return [3, 6];
                    case 9:
                        localStorage.setItem('settings', JSON.stringify(global.settings));
                        helpers.removeOnboarding();
                        return [2];
                }
            });
        });
    }
    exports.saveOnboardingChanges = saveOnboardingChanges;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/barChartVisualContent.ts":
/*!********************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/barChartVisualContent.ts ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ../assets/info.png */ "./AppOwnsData/wwwroot/onboarding/assets/info.png"), __webpack_require__(/*! ../assets/y-axis.png */ "./AppOwnsData/wwwroot/onboarding/assets/y-axis.png"), __webpack_require__(/*! ../assets/x-axis.png */ "./AppOwnsData/wwwroot/onboarding/assets/x-axis.png"), __webpack_require__(/*! ../assets/legend.png */ "./AppOwnsData/wwwroot/onboarding/assets/legend.png"), __webpack_require__(/*! ../assets/bar-chart.png */ "./AppOwnsData/wwwroot/onboarding/assets/bar-chart.png"), __webpack_require__(/*! ../assets/element-click.png */ "./AppOwnsData/wwwroot/onboarding/assets/element-click.png"), __webpack_require__(/*! ../assets/axis-click.png */ "./AppOwnsData/wwwroot/onboarding/assets/axis-click.png"), __webpack_require__(/*! ../assets/legend-click.png */ "./AppOwnsData/wwwroot/onboarding/assets/legend-click.png")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, info_png_1, y_axis_png_1, x_axis_png_1, legend_png_1, bar_chart_png_1, element_click_png_1, axis_click_png_1, legend_click_png_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getBarChartInteractionExample = exports.getClusteredBarChartInfo = void 0;
    function getClusteredBarChartInfo(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var axis, dataName, legend, hasYAxis, hasXAxis, hasLegend, hasTooltip, generalImages, generalInfos, dataImages, dataInfos, interactionImages, interactionInfos, barInfo, interactionInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldColumn(visual, "Category")];
                    case 1:
                        axis = _a.sent();
                        return [4, helpers.getFieldMeasure(visual, "Y")];
                    case 2:
                        dataName = _a.sent();
                        return [4, helpers.getFieldColumn(visual, "Series")];
                    case 3:
                        legend = _a.sent();
                        hasYAxis = helpers.isVisible(visual, "categoryAxis");
                        hasXAxis = helpers.isVisible(visual, "valueAxis");
                        hasLegend = helpers.isVisible(visual, "legend");
                        hasTooltip = helpers.isVisible(visual, "tooltip");
                        generalImages = [];
                        generalInfos = [];
                        dataImages = [];
                        dataInfos = [];
                        interactionImages = [];
                        interactionInfos = [];
                        generalImages.push(info_png_1.default);
                        generalInfos.push("This element is a clusterd bar chart.");
                        dataImages.push(info_png_1.default);
                        dataInfos.push("This chart displayes the " + dataName + ".");
                        barInfo = "";
                        if (axis) {
                            barInfo += "The bars are separated vertically by " + axis + ".<br>";
                        }
                        if (legend) {
                            barInfo += "Each " + axis + " has more than one bar. This bars represent the " + legend + " and are distinguishable by their color.";
                        }
                        dataImages.push(bar_chart_png_1.default);
                        dataInfos.push(barInfo);
                        interactionInfo = "With clicking on a bar you can filter the report by ";
                        if (axis && !legend) {
                            interactionInfo += axis + ".";
                        }
                        else if (!axis && legend) {
                            interactionInfo += legend + ".";
                        }
                        else {
                            interactionInfo += axis + " and " + legend + ".";
                        }
                        if (hasTooltip) {
                            interactionInfo += "</br>You can hover over a bar to get detailed information about its data.";
                        }
                        interactionImages.push(element_click_png_1.default);
                        interactionInfos.push(interactionInfo);
                        if (hasYAxis) {
                            generalImages.push(y_axis_png_1.default);
                            generalInfos.push("The Y-axis displayes the values of the " + axis + ".");
                            interactionImages.push(axis_click_png_1.default);
                            interactionInfos.push("When clicking on one of the y-axis-labels you can filter the report by " + axis + ".");
                        }
                        if (hasXAxis) {
                            generalImages.push(x_axis_png_1.default);
                            generalInfos.push("The X-axis displayes the values of the " + dataName + ".");
                        }
                        if (hasLegend) {
                            generalImages.push(legend_png_1.default);
                            generalInfos.push("The legend displayes the values of the " + legend + " and its corresponding color.");
                            interactionImages.push(legend_click_png_1.default);
                            interactionInfos.push("When clicking on one of the labels in the legend you can filter the report by " + legend + ".");
                        }
                        return [2, { generalImages: generalImages, generalInfos: generalInfos, dataImages: dataImages, dataInfos: dataInfos, interactionImages: interactionImages, interactionInfos: interactionInfos }];
                }
            });
        });
    }
    exports.getClusteredBarChartInfo = getClusteredBarChartInfo;
    function getBarChartInteractionExample(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var axis, axisValues, dataName, legend, legendValues, middelOfAxisValues, interactionInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldColumn(visual, "Category")];
                    case 1:
                        axis = _a.sent();
                        return [4, helpers.getSpecificDataInfo(visual, axis)];
                    case 2:
                        axisValues = _a.sent();
                        return [4, helpers.getFieldMeasure(visual, "Y")];
                    case 3:
                        dataName = _a.sent();
                        return [4, helpers.getFieldColumn(visual, "Series")];
                    case 4:
                        legend = _a.sent();
                        return [4, helpers.getSpecificDataInfo(visual, legend)];
                    case 5:
                        legendValues = _a.sent();
                        middelOfAxisValues = Math.floor(axisValues.length / 2);
                        interactionInfo = "Please click on the bar representing the " + dataName;
                        if (axisValues && legendValues) {
                            interactionInfo += " for " + axisValues[middelOfAxisValues] + " and " + legendValues[0] + ".";
                        }
                        else if (axisValues) {
                            interactionInfo += " for " + axisValues[middelOfAxisValues] + ".";
                        }
                        else if (legendValues) {
                            interactionInfo += " for " + legendValues[0] + ".";
                        }
                        else {
                            interactionInfo += ".";
                        }
                        return [2, interactionInfo];
                }
            });
        });
    }
    exports.getBarChartInteractionExample = getBarChartInteractionExample;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/basicVisualContent.ts":
/*!*****************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/basicVisualContent.ts ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ../assets/info.png */ "./AppOwnsData/wwwroot/onboarding/assets/info.png"), __webpack_require__(/*! ../assets/element-click.png */ "./AppOwnsData/wwwroot/onboarding/assets/element-click.png")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, info_png_1, element_click_png_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getChartChanges = exports.getSlicerInteractionExample = exports.getSlicerInfo = exports.getCardChanges = exports.getCardInfo = void 0;
    function getCardInfo(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var dataName, dataValue, generalImages, generalInfos, dataImages, dataInfos, interactionImages, interactionInfos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldMeasure(visual, "Values")];
                    case 1:
                        dataName = _a.sent();
                        return [4, helpers.getSpecificDataInfo(visual, dataName)];
                    case 2:
                        dataValue = _a.sent();
                        generalImages = [];
                        generalInfos = [];
                        dataImages = [];
                        dataInfos = [];
                        interactionImages = [];
                        interactionInfos = [];
                        generalImages.push(info_png_1.default);
                        generalInfos.push("This element is a card. Cards display the most important facts of a report.");
                        dataImages.push(info_png_1.default);
                        dataInfos.push("This card shows the current value of "
                            + dataName + ", which is " + dataValue[0] + ".");
                        return [2, { generalImages: generalImages, generalInfos: generalInfos, dataImages: dataImages, dataInfos: dataInfos, interactionImages: interactionImages, interactionInfos: interactionInfos }];
                }
            });
        });
    }
    exports.getCardInfo = getCardInfo;
    function getCardChanges(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var dataName, dataValue, visualInteractionInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldMeasure(visual, "Values")];
                    case 1:
                        dataName = _a.sent();
                        return [4, helpers.getSpecificDataInfo(visual, dataName)];
                    case 2:
                        dataValue = _a.sent();
                        visualInteractionInfo = "The displayed data is now " + dataValue[0] + ".";
                        return [2, visualInteractionInfo];
                }
            });
        });
    }
    exports.getCardChanges = getCardChanges;
    function getSlicerInfo(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var filterName, generalImages, generalInfos, dataImages, dataInfos, interactionImages, interactionInfos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldColumn(visual, "Values")];
                    case 1:
                        filterName = _a.sent();
                        generalImages = [];
                        generalInfos = [];
                        dataImages = [];
                        dataInfos = [];
                        interactionImages = [];
                        interactionInfos = [];
                        generalImages.push(info_png_1.default);
                        generalInfos.push("This element is a slicer. Slicers act as filters for the report. With this one you can filter by " + filterName + ".");
                        interactionImages.push(element_click_png_1.default);
                        interactionInfos.push("With clicking on one element of the list you can filter the report by " + filterName + ".");
                        return [2, { generalImages: generalImages, generalInfos: generalInfos, dataImages: dataImages, dataInfos: dataInfos, interactionImages: interactionImages, interactionInfos: interactionInfos }];
                }
            });
        });
    }
    exports.getSlicerInfo = getSlicerInfo;
    function getSlicerInteractionExample(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var filterName, dataValues, middelOfDataValues, interactionInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldColumn(visual, "Values")];
                    case 1:
                        filterName = _a.sent();
                        return [4, helpers.getSpecificDataInfo(visual, filterName)];
                    case 2:
                        dataValues = _a.sent();
                        middelOfDataValues = Math.floor(dataValues.length / 2);
                        interactionInfo = "Please click on the list element " + dataValues[middelOfDataValues] + ".";
                        return [2, interactionInfo];
                }
            });
        });
    }
    exports.getSlicerInteractionExample = getSlicerInteractionExample;
    function getChartChanges(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var axis, axisValues, dataName, legend, legendValues, additionalFilters, visualInteractionInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldColumn(visual, "Category")];
                    case 1:
                        axis = _a.sent();
                        return [4, helpers.getSpecificDataInfo(visual, axis)];
                    case 2:
                        axisValues = _a.sent();
                        return [4, helpers.getFieldMeasure(visual, "Y")];
                    case 3:
                        dataName = _a.sent();
                        return [4, helpers.getFieldColumn(visual, "Series")];
                    case 4:
                        legend = _a.sent();
                        return [4, helpers.getSpecificDataInfo(visual, legend)];
                    case 5:
                        legendValues = _a.sent();
                        additionalFilters = global.selectedTargets.filter(function (selectedData) {
                            return selectedData.target.column != axis && selectedData.target.column != legend;
                        });
                        visualInteractionInfo = helpers.getGeneralInteractionInfo(additionalFilters, dataName);
                        if (axisValues && legendValues) {
                            visualInteractionInfo += helpers.getTargetInteractionFilter(axis);
                            visualInteractionInfo += " and ";
                            visualInteractionInfo += helpers.getTargetInteractionFilter(legend);
                        }
                        else if (axisValues) {
                            visualInteractionInfo += helpers.getTargetInteractionFilter(axis);
                        }
                        else if (legendValues) {
                            visualInteractionInfo += helpers.getTargetInteractionFilter(legend);
                        }
                        visualInteractionInfo += ".";
                        return [2, visualInteractionInfo];
                }
            });
        });
    }
    exports.getChartChanges = getChartChanges;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/complexVisualContent.ts":
/*!*******************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/complexVisualContent.ts ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ../assets/info.png */ "./AppOwnsData/wwwroot/onboarding/assets/info.png"), __webpack_require__(/*! ../assets/y-axis.png */ "./AppOwnsData/wwwroot/onboarding/assets/y-axis.png"), __webpack_require__(/*! ../assets/x-axis.png */ "./AppOwnsData/wwwroot/onboarding/assets/x-axis.png"), __webpack_require__(/*! ../assets/legend.png */ "./AppOwnsData/wwwroot/onboarding/assets/legend.png"), __webpack_require__(/*! ../assets/bar-chart.png */ "./AppOwnsData/wwwroot/onboarding/assets/bar-chart.png"), __webpack_require__(/*! ../assets/line-graph.png */ "./AppOwnsData/wwwroot/onboarding/assets/line-graph.png"), __webpack_require__(/*! ../assets/element-click.png */ "./AppOwnsData/wwwroot/onboarding/assets/element-click.png"), __webpack_require__(/*! ../assets/axis-click.png */ "./AppOwnsData/wwwroot/onboarding/assets/axis-click.png"), __webpack_require__(/*! ../assets/legend-click.png */ "./AppOwnsData/wwwroot/onboarding/assets/legend-click.png")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, info_png_1, y_axis_png_1, x_axis_png_1, legend_png_1, bar_chart_png_1, line_graph_png_1, element_click_png_1, axis_click_png_1, legend_click_png_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getLineClusteredColumnComboChartChanges = exports.getLineClusteredColumnComboChartInteractionExample = exports.getLineClusteredColumnComboChartInfo = void 0;
    function getLineClusteredColumnComboChartInfo(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var axis, columnSeries, columnValues, lineValues, columnData, allData, hasYAxis, hasXAxis, hasLegend, hasTooltip, generalImages, generalInfos, dataImages, dataInfos, interactionImages, interactionInfos, barInfo, dataString, lineInfo, dataString, interactionInfo, dataString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldColumn(visual, "Category")];
                    case 1:
                        axis = _a.sent();
                        return [4, helpers.getFieldMeasures(visual, "Series")];
                    case 2:
                        columnSeries = _a.sent();
                        return [4, helpers.getFieldMeasures(visual, "Y")];
                    case 3:
                        columnValues = _a.sent();
                        return [4, helpers.getFieldMeasures(visual, "Y2")];
                    case 4:
                        lineValues = _a.sent();
                        columnData = columnSeries.concat(columnValues);
                        allData = columnData.concat(lineValues);
                        if (allData.length == 0) {
                            return [2];
                        }
                        hasYAxis = helpers.isVisible(visual, "categoryAxis");
                        hasXAxis = helpers.isVisible(visual, "valueAxis");
                        hasLegend = helpers.isVisible(visual, "legend");
                        hasTooltip = helpers.isVisible(visual, "tooltip");
                        generalImages = [];
                        generalInfos = [];
                        dataImages = [];
                        dataInfos = [];
                        interactionImages = [];
                        interactionInfos = [];
                        generalImages.push(info_png_1.default);
                        generalInfos.push("This element is a line clustered column combo chart. It can combine lines and bars in one chart.");
                        if (columnData.length != 0) {
                            barInfo = "This graph contains bars.<br>";
                            if (axis) {
                                barInfo += "The bars are separated horizotally by " + axis + ".<br>";
                            }
                            if (columnData.length == 1) {
                                barInfo += "The bars of this chart represents " + columnData[0] + ".";
                            }
                            else {
                                dataString = helpers.dataToString(columnData);
                                barInfo += "Each " + axis + " has more than one bar. The bars of this chart represent " + dataString + ". They are distinguishable by their color.";
                            }
                            dataImages.push(bar_chart_png_1.default);
                            dataInfos.push(barInfo);
                        }
                        if (lineValues.length != 0) {
                            lineInfo = "This graph contains lines.<br>";
                            if (axis) {
                                lineInfo += "The lines show the development of their data over the " + axis + ".<br>";
                            }
                            if (lineValues.length == 1) {
                                lineInfo += "The line represents the data of " + lineValues[0] + ".<br>";
                            }
                            else {
                                dataString = helpers.dataToString(lineValues);
                                lineInfo += "This chart has more than one line. The lines represent " + dataString + ". They are distinguishable by their color.<br>";
                            }
                            dataImages.push(line_graph_png_1.default);
                            dataInfos.push(lineInfo);
                        }
                        interactionImages.push(element_click_png_1.default);
                        interactionInfo = "When clicking on a line or bar you can filter the report by " + axis + ".";
                        if (hasTooltip) {
                            interactionInfo += "</br>You can hover over a bar to get detailed information about its data.";
                        }
                        interactionInfos.push(interactionInfo);
                        if (hasXAxis) {
                            generalImages.push(x_axis_png_1.default);
                            generalInfos.push("The X-axis displayes the values of the " + axis + ".");
                            interactionImages.push(axis_click_png_1.default);
                            interactionInfos.push("When clicking on one of the x-axis-labels you can filter the report by " + axis + ".");
                        }
                        if (hasYAxis) {
                            dataString = helpers.dataToString(allData);
                            generalImages.push(y_axis_png_1.default);
                            generalInfos.push("The Y-axes display the values of the " + dataString + ".");
                        }
                        if (hasLegend) {
                            generalImages.push(legend_png_1.default);
                            generalInfos.push("The legend displayes, which data is represented by the bars and lines of this chart. It also shows the corresponding color.");
                            interactionImages.push(legend_click_png_1.default);
                            interactionInfos.push("When clicking on one of the labels in the legend you can filter the report by this data.");
                        }
                        return [2, { generalImages: generalImages, generalInfos: generalInfos, dataImages: dataImages, dataInfos: dataInfos, interactionImages: interactionImages, interactionInfos: interactionInfos }];
                }
            });
        });
    }
    exports.getLineClusteredColumnComboChartInfo = getLineClusteredColumnComboChartInfo;
    function getLineClusteredColumnComboChartInteractionExample(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var axis, axisValues, columnSeries, columnValues, lineValues, columnData, middelOfAxisValues, interactionInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldColumn(visual, "Category")];
                    case 1:
                        axis = _a.sent();
                        return [4, helpers.getSpecificDataInfo(visual, axis)];
                    case 2:
                        axisValues = _a.sent();
                        return [4, helpers.getFieldMeasures(visual, "Series")];
                    case 3:
                        columnSeries = _a.sent();
                        return [4, helpers.getFieldMeasures(visual, "Y")];
                    case 4:
                        columnValues = _a.sent();
                        return [4, helpers.getFieldMeasures(visual, "Y2")];
                    case 5:
                        lineValues = _a.sent();
                        columnData = columnSeries.concat(columnValues);
                        middelOfAxisValues = Math.floor(axisValues.length / 2);
                        if (lineValues.length != 0 && columnData.length == 0) {
                            interactionInfo = "Please click on the line";
                            if (axisValues && lineValues) {
                                interactionInfo += " representing " + lineValues[0] + " at the area of " + axisValues[middelOfAxisValues] + ".";
                            }
                            else if (axisValues) {
                                interactionInfo += " at the area of " + axisValues[middelOfAxisValues] + ".";
                            }
                            else if (lineValues.length == 0) {
                                interactionInfo += " representing " + lineValues[0] + ".";
                            }
                            else {
                                interactionInfo += ".";
                            }
                        }
                        else {
                            interactionInfo = "Please click on the bar representing the ";
                            if (axisValues && columnData.length != 0) {
                                interactionInfo += columnData[0] + " for " + axisValues[middelOfAxisValues] + ".";
                            }
                            else if (axisValues) {
                                interactionInfo += " data for " + axisValues[middelOfAxisValues] + ".";
                            }
                            else if (columnData.length != 0) {
                                interactionInfo += columnData[0] + ".";
                            }
                            else {
                                interactionInfo += ".";
                            }
                        }
                        return [2, interactionInfo];
                }
            });
        });
    }
    exports.getLineClusteredColumnComboChartInteractionExample = getLineClusteredColumnComboChartInteractionExample;
    function getLineClusteredColumnComboChartChanges(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var axis, axisValues, lineValues, columnValues, columnSeries, columnData, allData, allDataString, additionalFilters, visualInteractionInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldColumn(visual, "Category")];
                    case 1:
                        axis = _a.sent();
                        return [4, helpers.getSpecificDataInfo(visual, axis)];
                    case 2:
                        axisValues = _a.sent();
                        return [4, helpers.getFieldMeasures(visual, "Y2")];
                    case 3:
                        lineValues = _a.sent();
                        return [4, helpers.getFieldMeasures(visual, "Y")];
                    case 4:
                        columnValues = _a.sent();
                        return [4, helpers.getFieldMeasures(visual, "Series")];
                    case 5:
                        columnSeries = _a.sent();
                        columnData = columnSeries.concat(columnValues);
                        allData = columnData.concat(lineValues);
                        allDataString = helpers.dataToString(allData);
                        additionalFilters = global.selectedTargets.filter(function (data) {
                            return data.target.column != axis && !allData.includes(data.target.column);
                        });
                        visualInteractionInfo = helpers.getGeneralInteractionInfo(additionalFilters, allDataString);
                        if (axisValues) {
                            visualInteractionInfo += helpers.getTargetInteractionFilter(axis);
                        }
                        visualInteractionInfo += ".";
                        return [2, visualInteractionInfo];
                }
            });
        });
    }
    exports.getLineClusteredColumnComboChartChanges = getLineClusteredColumnComboChartChanges;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/createSettings.ts":
/*!*************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/createSettings.ts ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createSettings = void 0;
    function createSettings() {
        return __awaiter(this, void 0, void 0, function () {
            var settings, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        settings = __webpack_require__.g.createSettingsObject();
                        settings.reportOffset = setReportOffset();
                        _a = settings;
                        return [4, setVisualsInfo()];
                    case 1:
                        _a.visuals = _c.sent();
                        _b = settings;
                        return [4, setFilterInfo()];
                    case 2:
                        _b.filterVisual = _c.sent();
                        settings.interactionExample = setInteractionExampleInfo();
                        localStorage.setItem("settings", JSON.stringify(settings));
                        return [2];
                }
            });
        });
    }
    exports.createSettings = createSettings;
    function setReportOffset() {
        var settingsReportOffset = __webpack_require__.g.createReportOffset();
        settingsReportOffset.top = 0;
        settingsReportOffset.bottom = 0;
        settingsReportOffset.left = 0;
        settingsReportOffset.right = 0;
        return settingsReportOffset;
    }
    function setVisualsInfo() {
        return __awaiter(this, void 0, void 0, function () {
            var settingsVisuals, _i, _a, visual, settingsVisual, visualInfos, i, i, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        settingsVisuals = [];
                        _i = 0, _a = __webpack_require__.g.currentVisuals;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 4];
                        visual = _a[_i];
                        settingsVisual = __webpack_require__.g.createVisual();
                        settingsVisual.id = visual.name;
                        settingsVisual.title = visual.title;
                        return [4, helpers.getVisualInfos(visual)];
                    case 2:
                        visualInfos = _b.sent();
                        for (i = 0; i < visualInfos.generalInfos.length; ++i) {
                            settingsVisual.generalInfosStatus.push("original");
                            settingsVisual.changedGeneralInfos.push("");
                        }
                        for (i = 0; i < visualInfos.dataInfos.length; ++i) {
                            settingsVisual.dataInfosStatus.push("original");
                            settingsVisual.changedDataInfos.push("");
                        }
                        for (i = 0; i < visualInfos.interactionInfos.length; ++i) {
                            settingsVisual.interactionInfosStatus.push("original");
                            settingsVisual.changedInteractionInfos.push("");
                        }
                        settingsVisuals.push(settingsVisual);
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4:
                        ;
                        return [2, settingsVisuals];
                }
            });
        });
    }
    function setFilterInfo() {
        return __awaiter(this, void 0, void 0, function () {
            var settingsFilterVisual, filters, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        settingsFilterVisual = __webpack_require__.g.createFilterVisual();
                        settingsFilterVisual.title = "Filters";
                        settingsFilterVisual.generalInformation = "This page has following filters:";
                        return [4, __webpack_require__.g.page.getFilters()];
                    case 1:
                        filters = _a.sent();
                        for (i = 0; i < filters.length; ++i) {
                            settingsFilterVisual.filterInfosStatus.push("original");
                            settingsFilterVisual.changedFilterInfos.push("");
                        }
                        return [2, settingsFilterVisual];
                }
            });
        });
    }
    function setInteractionExampleInfo() {
        var settingsInteractionExample = __webpack_require__.g.createInteractionExample();
        settingsInteractionExample.title = "Interaction Example";
        settingsInteractionExample.generalInfoStatus = "original";
        settingsInteractionExample.changedGeneralInfo = "";
        settingsInteractionExample.nextVisualHint = "Can you see how this visual changed?";
        __webpack_require__.g.visuals.forEach(function (visual) {
            var settingsInteractableVisual = __webpack_require__.g.createInteractableVisual();
            settingsInteractableVisual.id = visual.name;
            settingsInteractableVisual.title = visual.title;
            var type = helpers.getTypeName(visual);
            switch (type) {
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
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/disableArea.ts":
/*!**********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/disableArea.ts ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, global, elements, helperFunctions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createFilterDisabledArea = exports.createDisabledArea = exports.removeFrame = exports.disableLeftOffset = exports.disableFooter = exports.disableFilter = exports.disableTop = exports.disableFrame = exports.disableAll = void 0;
    function disableAll() {
        var attributes = global.createDivAttributes();
        attributes.id = "disabledPage";
        attributes.style = getGrayDivStyle(0, 0, global.page.defaultSize.width, global.page.defaultSize.height);
        attributes.parentId = "onboarding";
        elements.createDiv(attributes);
        disableFrame();
    }
    exports.disableAll = disableAll;
    function disableFrame() {
        removeFrame();
        disableTop();
        disableFilter();
        disableFooter();
        disableLeftOffset();
    }
    exports.disableFrame = disableFrame;
    function disableTop() {
        var attributes = global.createDivAttributes();
        attributes.id = "disabledTop";
        attributes.style = getGrayDivStyle(global.containerPaddingTop - global.settings.reportOffset.top, global.containerPaddingLeft - global.settings.reportOffset.left, global.page.defaultSize.width + global.settings.reportOffset.left, global.settings.reportOffset.top);
        attributes.parentId = "embed-container";
        elements.createDiv(attributes);
    }
    exports.disableTop = disableTop;
    function disableFilter() {
        var attributes = global.createDivAttributes();
        attributes.id = "disabledFilter";
        attributes.style = getGrayDivStyle(global.containerPaddingTop - global.settings.reportOffset.top, global.page.defaultSize.width + global.containerPaddingLeft, global.filterOpenedWidth + global.settings.reportOffset.right, global.page.defaultSize.height + global.settings.reportOffset.top);
        attributes.parentId = "embed-container";
        elements.createDiv(attributes);
    }
    exports.disableFilter = disableFilter;
    function disableFooter() {
        var attributes = global.createDivAttributes();
        attributes.id = "disabledFooter";
        attributes.style = getGrayDivStyle(global.page.defaultSize.height + global.containerPaddingTop, global.containerPaddingLeft, global.page.defaultSize.width + global.settings.reportOffset.right + global.filterOpenedWidth, global.footerHeight + global.settings.reportOffset.bottom);
        attributes.parentId = "embed-container";
        elements.createDiv(attributes);
    }
    exports.disableFooter = disableFooter;
    function disableLeftOffset() {
        var attributes = global.createDivAttributes();
        attributes.id = "disabledLeftOffset";
        attributes.style = getGrayDivStyle(global.containerPaddingTop, global.containerPaddingLeft - global.settings.reportOffset.left, global.settings.reportOffset.left, global.page.defaultSize.height + global.footerHeight + global.settings.reportOffset.bottom);
        attributes.parentId = "embed-container";
        elements.createDiv(attributes);
    }
    exports.disableLeftOffset = disableLeftOffset;
    function removeFrame() {
        elements.removeElement("disabledTop");
        elements.removeElement("disabledFilter");
        elements.removeElement("disabledFooter");
        elements.removeElement("disabledLeftOffset");
    }
    exports.removeFrame = removeFrame;
    function createDisabledArea(visual) {
        var rightX = visual.layout.x + visual.layout.width;
        var lowerY = visual.layout.y + visual.layout.height;
        var lowerDistance = global.page.defaultSize.height - lowerY;
        var rightDistance = global.page.defaultSize.width - rightX;
        var attributes = global.createDivAttributes();
        attributes.id = "disabledUpper";
        attributes.style = getGrayDivStyle(0, 0, global.page.defaultSize.width, visual.layout.y);
        attributes.parentId = "onboarding";
        elements.createDiv(attributes);
        attributes = global.createDivAttributes();
        attributes.id = "disabledLower";
        attributes.style = getGrayDivStyle(lowerY, 0, global.page.defaultSize.width, lowerDistance);
        attributes.parentId = "onboarding";
        elements.createDiv(attributes);
        attributes = global.createDivAttributes();
        attributes.id = "disabledRight";
        attributes.style = getGrayDivStyle(visual.layout.y, rightX, rightDistance, visual.layout.height);
        attributes.parentId = "onboarding";
        elements.createDiv(attributes);
        attributes = global.createDivAttributes();
        attributes.id = "disabledLeft";
        attributes.style = getGrayDivStyle(visual.layout.y, 0, visual.layout.x, visual.layout.height);
        attributes.parentId = "onboarding";
        elements.createDiv(attributes);
    }
    exports.createDisabledArea = createDisabledArea;
    function createFilterDisabledArea() {
        elements.removeElement("disabledFilter");
        disableTop();
        disableFooter();
        disableLeftOffset();
        var attributes = global.createDivAttributes();
        attributes.id = "disabledLeft";
        attributes.style = getGrayDivStyle(0, 0, global.page.defaultSize.width, global.page.defaultSize.height);
        attributes.parentId = "onboarding";
        elements.createDiv(attributes);
    }
    exports.createFilterDisabledArea = createFilterDisabledArea;
    function getGrayDivStyle(top, left, width, height) {
        return (0, helperFunctions_1.getClickableStyle)(top, left, width, height) + "background-color:rgb(77, 77, 77);opacity:0.8;";
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/draggableList.ts":
/*!************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/draggableList.ts ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./listOfVisuals */ "./AppOwnsData/wwwroot/onboarding/ts/listOfVisuals.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, global, listOfVisuals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.mouseDownHandler = void 0;
    function mouseDownHandler(event) {
        if (event.target.classList.contains('disableVisualButton') || event.target.parentNode.classList.contains('disableVisualButton')) {
            (0, listOfVisuals_1.toggleVisability)(event.target.closest(".draggable"));
        }
        if (event.target.nodeName == "BUTTON" || event.target.parentNode.nodeName == "BUTTON" || event.target.closest(".collapseForm")) {
            return;
        }
        global.setDraggableElement(event.target.closest(".draggable"));
        var visualPos = global.draggableElement.getBoundingClientRect();
        global.setPosX(event.pageX - visualPos.left);
        global.setPosY(event.pageY - visualPos.top);
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    exports.mouseDownHandler = mouseDownHandler;
    ;
    function mouseMoveHandler(event) {
        var visualPos = global.draggableElement.getBoundingClientRect();
        if (!global.draggingStarted) {
            global.setDraggingStarted(true);
            global.setPlaceholderElement(document.createElement('div'));
            global.placeholderElement.classList.add('placeholder');
            global.draggableElement.parentNode.insertBefore(global.placeholderElement, global.draggableElement.nextSibling);
            global.placeholderElement.style.height = "".concat(visualPos.height, "px");
        }
        global.draggableElement.style.position = 'fixed';
        global.draggableElement.style.width = "".concat(visualPos.width, "px");
        global.draggableElement.style.top = "".concat(event.pageY - global.posY, "px");
        global.draggableElement.style.left = "".concat(event.pageX - global.posX, "px");
        var previousElement = global.draggableElement.previousElementSibling;
        var nextElement = global.placeholderElement.nextElementSibling;
        if (previousElement && isBefore(global.draggableElement, previousElement)) {
            swapListElements(global.placeholderElement, global.draggableElement);
            swapListElements(global.placeholderElement, previousElement);
            return;
        }
        if (nextElement && isBefore(nextElement, global.draggableElement)) {
            swapListElements(nextElement, global.placeholderElement);
            swapListElements(nextElement, global.draggableElement);
        }
    }
    ;
    function mouseUpHandler() {
        if (global.placeholderElement) {
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
    }
    ;
    function isBefore(nodeA, nodeB) {
        var PosA = nodeA.getBoundingClientRect();
        var PosB = nodeB.getBoundingClientRect();
        return PosA.top + PosA.height / 2 < PosB.top + PosB.height / 2;
    }
    ;
    function swapListElements(nodeA, nodeB) {
        var siblingOfA;
        if (nodeA.nextSibling == nodeB) {
            siblingOfA = nodeA;
        }
        else {
            siblingOfA = nodeA.nextSibling;
        }
        nodeB.parentNode.insertBefore(nodeA, nodeB);
        nodeA.parentNode.insertBefore(nodeB, siblingOfA);
    }
    ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/editFilters.ts":
/*!**********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/editFilters.ts ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, global, elements, helperFunctions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createFiltersGroup = void 0;
    function createFiltersGroup() {
        return __awaiter(this, void 0, void 0, function () {
            var divAttributes, h2Attributes, buttonAttributes, smallAttributes, labelAttributes, inputAttributes, filterInfos, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        divAttributes = global.createDivAttributes();
                        divAttributes.id = "filterGroup";
                        divAttributes.style = "padding: 10px;border: 1px solid black;";
                        divAttributes.parentId = "editOnbording";
                        elements.createDiv(divAttributes);
                        h2Attributes = global.createH2Attributes();
                        h2Attributes.id = "filterLabel";
                        h2Attributes.style = "display: inline-block;margin-bottom: 0px;";
                        h2Attributes.content = "Filter Information:";
                        h2Attributes.parentId = "filterGroup";
                        elements.createH2(h2Attributes);
                        (0, helperFunctions_1.createCollapseButton)("collapseButtonFilterGroup", "filterGroup");
                        buttonAttributes = global.createButtonAttributes();
                        buttonAttributes.id = "resetFilterInfo";
                        buttonAttributes.content = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-counterclockwise mb-1\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z\"/><path d=\"M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z\"/></svg> Reset";
                        buttonAttributes.style = "display: inline-block;";
                        buttonAttributes.classes = global.darkOutlineButtonClass + " positionRight";
                        buttonAttributes.function = resetFilterInfo;
                        buttonAttributes.parentId = "filterGroup";
                        elements.createButton(buttonAttributes, false);
                        smallAttributes = global.createSmallAttributes();
                        smallAttributes.id = "filterHelp";
                        smallAttributes.style = "margin-bottom: 10px;";
                        smallAttributes.content = "Here you can change the information about the report filters.";
                        smallAttributes.parentId = "filterGroup";
                        elements.createSmall(smallAttributes);
                        divAttributes = global.createDivAttributes();
                        divAttributes.id = "collapseFormfilterGroup";
                        divAttributes.classes = "collapse collapseForm";
                        divAttributes.parentId = "filterGroup";
                        elements.createDiv(divAttributes);
                        labelAttributes = global.createLabelAttributes();
                        labelAttributes.id = "titleLabelFilter";
                        labelAttributes.for = "titleInputFilter";
                        labelAttributes.style = "margin-left: 10px;margin-right: 10px;";
                        labelAttributes.content = "Title:";
                        labelAttributes.parentId = "collapseFormfilterGroup";
                        elements.createLabel(labelAttributes);
                        inputAttributes = global.createInputAttributes();
                        inputAttributes.id = "titleInputFilter";
                        inputAttributes.type = "string";
                        inputAttributes.value = global.settings.filterVisual.title;
                        inputAttributes.style = "margin-right: 20px;background-color:lightsteelblue;";
                        inputAttributes.parentId = "collapseFormfilterGroup";
                        elements.createInput(inputAttributes);
                        labelAttributes = global.createLabelAttributes();
                        labelAttributes.id = "generalInfoLabelFilter";
                        labelAttributes.for = "generalInfoInputFilter";
                        labelAttributes.style = "display: block;margin-left: 10px;";
                        labelAttributes.content = "General Information:";
                        labelAttributes.parentId = "collapseFormfilterGroup";
                        elements.createLabel(labelAttributes);
                        inputAttributes = global.createInputAttributes();
                        inputAttributes.id = "generalInfoInputFilter";
                        inputAttributes.type = "string";
                        inputAttributes.value = global.settings.filterVisual.generalInformation;
                        inputAttributes.style = "display: block;width: 95%;margin-left: 10px;background-color:lightsteelblue;";
                        inputAttributes.parentId = "collapseFormfilterGroup";
                        elements.createInput(inputAttributes);
                        labelAttributes = global.createLabelAttributes();
                        labelAttributes.id = "filterInfosLabel";
                        labelAttributes.for = "filterInfosTextarea";
                        labelAttributes.style = "display: block;margin-left: 10px;";
                        labelAttributes.content = "Filter Information:";
                        labelAttributes.parentId = "collapseFormfilterGroup";
                        elements.createLabel(labelAttributes);
                        return [4, getFilterInfos()];
                    case 1:
                        filterInfos = _a.sent();
                        for (i = 0; i < filterInfos.length; ++i) {
                            createFilterTextfield(filterInfos, i);
                        }
                        createFilterAddButton();
                        return [2];
                }
            });
        });
    }
    exports.createFiltersGroup = createFiltersGroup;
    function getFilterInfos() {
        return __awaiter(this, void 0, void 0, function () {
            var filterStatus, changedFilterInfos, originalFilterInfos, filterInfos, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filterStatus = global.settings.filterVisual.filterInfosStatus;
                        changedFilterInfos = global.settings.filterVisual.changedFilterInfos;
                        return [4, (0, helperFunctions_1.getFilterInfo)()];
                    case 1:
                        originalFilterInfos = _a.sent();
                        filterInfos = [];
                        for (i = 0; i < filterStatus.length; ++i) {
                            switch (filterStatus[i]) {
                                case global.infoStatus.original:
                                    filterInfos.push(originalFilterInfos[i]);
                                    break;
                                case global.infoStatus.changed:
                                case global.infoStatus.added:
                                    filterInfos.push(changedFilterInfos[i]);
                                    break;
                                default:
                                    break;
                            }
                        }
                        return [2, filterInfos];
                }
            });
        });
    }
    function addFilterTextarea() {
        var textareaAttributes = global.createTextareaAttributes();
        textareaAttributes.class = "filterInfos";
        textareaAttributes.style = "display: block;width: 95%;margin-bottom: 5px;margin-left: 10px;background-color: lightsteelblue;";
        textareaAttributes.parentId = "addFilterInfo";
        elements.createTextarea(textareaAttributes, true);
    }
    function resetFilterInfo() {
        return __awaiter(this, void 0, void 0, function () {
            var titleInputFilter, generalInfoInputFilter, filterInfos, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        titleInputFilter = document.getElementById("titleInputFilter");
                        titleInputFilter.value = "Filters";
                        global.settings.filterVisual.title = "Filters";
                        generalInfoInputFilter = document.getElementById("generalInfoInputFilter");
                        generalInfoInputFilter.value = "This page has following filters:";
                        global.settings.filterVisual.generalInformation = "This page has following filters:";
                        return [4, (0, helperFunctions_1.getFilterInfo)()];
                    case 1:
                        filterInfos = _a.sent();
                        elements.removeElement("addFilterInfo");
                        elements.removeAllElementsOfClass("filterInfos");
                        for (i = 0; i < global.settings.filterVisual.filterInfosStatus.length; ++i) {
                            if (i < filterInfos.length) {
                                createFilterTextfield(filterInfos, i);
                                global.settings.filterVisual.filterInfosStatus[i] = "original";
                                global.settings.filterVisual.changedFilterInfos[i] = "";
                            }
                            else {
                                global.settings.filterVisual.filterInfosStatus.splice(i, 1);
                                global.settings.filterVisual.changedFilterInfos.splice(i, 1);
                            }
                        }
                        createFilterAddButton();
                        return [2];
                }
            });
        });
    }
    function createFilterAddButton() {
        var addButtonAttributes = global.createButtonAttributes();
        addButtonAttributes.id = "addFilterInfo";
        addButtonAttributes.content = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus-circle\" viewBox=\"0 0 16 16\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/><path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/></svg> Add";
        addButtonAttributes.style = "margin: auto;display: block;";
        addButtonAttributes.classes = global.darkOutlineButtonClass;
        addButtonAttributes.function = addFilterTextarea;
        addButtonAttributes.parentId = "collapseFormfilterGroup";
        elements.createButton(addButtonAttributes, false);
    }
    function createFilterTextfield(filterInfos, index) {
        var filterInfo = filterInfos[index].replaceAll("<br>", '\r\n');
        var textareaAttributes = global.createTextareaAttributes();
        textareaAttributes.id = index + "filterInfosTextarea";
        textareaAttributes.class = "filterInfos";
        textareaAttributes.value = filterInfo;
        textareaAttributes.style = "display: block;width: 95%;margin-bottom: 5px;margin-left: 10px;background-color: lightsteelblue;";
        textareaAttributes.parentId = "collapseFormfilterGroup";
        elements.createTextarea(textareaAttributes, false);
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/editInteractionExample.ts":
/*!*********************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/editInteractionExample.ts ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./interactionExample */ "./AppOwnsData/wwwroot/onboarding/ts/interactionExample.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, elements, interactionExample_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createInteractionExampleGroup = void 0;
    function createInteractionExampleGroup() {
        return __awaiter(this, void 0, void 0, function () {
            var divAttributes, h2Attributes, buttonAttributes, smallAttributes, labelAttributes, inputAttributes, textareaAttributes;
            return __generator(this, function (_a) {
                divAttributes = global.createDivAttributes();
                divAttributes.id = "interactionExampleGroup";
                divAttributes.style = "padding: 10px;border: 1px solid black;";
                divAttributes.parentId = "editOnbording";
                elements.createDiv(divAttributes);
                h2Attributes = global.createH2Attributes();
                h2Attributes.id = "interactionExampleLabel";
                h2Attributes.style = "display: inline-block;margin-bottom: 0px;";
                h2Attributes.content = "Interaction Example:";
                h2Attributes.parentId = "interactionExampleGroup";
                elements.createH2(h2Attributes);
                helpers.createCollapseButton("collapseButtonInteractionExampleGroup", "interactionExampleGroup");
                buttonAttributes = global.createButtonAttributes();
                buttonAttributes.id = "resetInteractionExampleInfo";
                buttonAttributes.content = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-counterclockwise mb-1\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z\"/><path d=\"M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z\"/></svg> Reset";
                buttonAttributes.style = "display: inline-block;";
                buttonAttributes.classes = global.darkOutlineButtonClass + " positionRight";
                buttonAttributes.function = resetInteractionExampleInfo;
                buttonAttributes.parentId = "interactionExampleGroup";
                elements.createButton(buttonAttributes, false);
                smallAttributes = global.createSmallAttributes();
                smallAttributes.id = "interactionExampleHelp";
                smallAttributes.style = "margin-bottom: 10px;";
                smallAttributes.content = "Here you can change the information of the interaction example.";
                smallAttributes.parentId = "interactionExampleGroup";
                elements.createSmall(smallAttributes);
                divAttributes = global.createDivAttributes();
                divAttributes.id = "collapseForminteractionExampleGroup";
                divAttributes.classes = "collapse collapseForm";
                divAttributes.parentId = "interactionExampleGroup";
                elements.createDiv(divAttributes);
                labelAttributes = global.createLabelAttributes();
                labelAttributes.id = "titleLabelInteractionExample";
                labelAttributes.for = "titleInputInteractionExample";
                labelAttributes.style = "margin-left: 10px;margin-right: 10px;";
                labelAttributes.content = "Title:";
                labelAttributes.parentId = "collapseForminteractionExampleGroup";
                elements.createLabel(labelAttributes);
                inputAttributes = global.createInputAttributes();
                inputAttributes.id = "titleInputInteractionExample";
                inputAttributes.type = "string";
                inputAttributes.value = global.settings.interactionExample.title;
                inputAttributes.style = "margin-right: 20px;background-color:lightsteelblue;";
                inputAttributes.parentId = "collapseForminteractionExampleGroup";
                elements.createInput(inputAttributes);
                labelAttributes = global.createLabelAttributes();
                labelAttributes.id = "generalInfoLabelInteractionExample";
                labelAttributes.for = "generalInfoInputInteractionExample";
                labelAttributes.style = "display: block;margin-left: 10px;";
                labelAttributes.content = "General Information:";
                labelAttributes.parentId = "collapseForminteractionExampleGroup";
                elements.createLabel(labelAttributes);
                textareaAttributes = global.createTextareaAttributes();
                textareaAttributes.id = "generalInfoInputInteractionExample";
                textareaAttributes.value = helpers.getInteractionExampleGeneralInfo();
                textareaAttributes.style = "display: block;width: 95%;margin-left: 10px;background-color:lightsteelblue;";
                textareaAttributes.parentId = "collapseForminteractionExampleGroup";
                elements.createTextarea(textareaAttributes, false);
                labelAttributes = global.createLabelAttributes();
                labelAttributes.id = "hintLabelInteractionExample";
                labelAttributes.for = "hintInputInteractionExample";
                labelAttributes.style = "display: block;margin-left: 10px;";
                labelAttributes.content = "Hint for the changes of the next visual:";
                labelAttributes.parentId = "collapseForminteractionExampleGroup";
                elements.createLabel(labelAttributes);
                inputAttributes = global.createInputAttributes();
                inputAttributes.id = "hintInputInteractionExample";
                inputAttributes.type = "string";
                inputAttributes.value = global.settings.interactionExample.nextVisualHint;
                inputAttributes.style = "display: block;width: 95%;margin-left: 10px;background-color:lightsteelblue;";
                inputAttributes.parentId = "collapseForminteractionExampleGroup";
                elements.createInput(inputAttributes);
                labelAttributes = global.createLabelAttributes();
                labelAttributes.id = "interactionExampleVisualsInfoLabel";
                labelAttributes.for = "interactionExampleInfosTextarea";
                labelAttributes.style = "display: block;margin-left: 10px;";
                labelAttributes.content = "Interaction informations for all visuals:";
                labelAttributes.parentId = "collapseForminteractionExampleGroup";
                elements.createLabel(labelAttributes);
                global.allVisuals.forEach(function (visual) {
                    var divAttributes = global.createDivAttributes();
                    divAttributes.id = "interactionExample" + visual.name;
                    divAttributes.style = "padding: 5px;border: 1px solid black;border-radius: 5px";
                    divAttributes.content = helpers.getVisualTitle(visual);
                    divAttributes.parentId = "collapseForminteractionExampleGroup";
                    elements.createDiv(divAttributes);
                    createInteractionExampleCollapseForm(visual);
                });
                return [2];
            });
        });
    }
    exports.createInteractionExampleGroup = createInteractionExampleGroup;
    function resetInteractionExampleInfo() {
        return __awaiter(this, void 0, void 0, function () {
            var titleInput, generalInfosTextarea, originalGeneralInfo, nextHintInput, _i, _a, visual, visualData, clickInfosTextarea, clickInfo, changedInfosTextarea, changedInfo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        titleInput = document.getElementById("titleInputInteractionExample");
                        titleInput.value = "Interaction Example";
                        global.settings.interactionExample.title = "Interaction Example";
                        generalInfosTextarea = document.getElementById("generalInfoInputInteractionExample");
                        originalGeneralInfo = helpers.getGeneralInfoInteractionExampleText();
                        generalInfosTextarea.value = originalGeneralInfo;
                        global.settings.interactionExample.generalInfoStatus = "original";
                        global.settings.interactionExample.changedGeneralInfo = "";
                        nextHintInput = document.getElementById("hintInputInteractionExample");
                        nextHintInput.value = "Can you see how this visual changed?";
                        global.settings.interactionExample.nextVisualHint = "Can you see how this visual changed?";
                        _i = 0, _a = global.allVisuals;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 6];
                        visual = _a[_i];
                        visualData = helpers.getDataOfInteractionVisual(visual);
                        if (!visualData.clickInfosStatus) return [3, 3];
                        clickInfosTextarea = document.getElementById("interactionExampleInteractionInfosTextarea" + visual.name);
                        return [4, (0, interactionExample_1.getInteractionText)(visual)];
                    case 2:
                        clickInfo = _b.sent();
                        clickInfosTextarea.value = clickInfo;
                        visualData.clickInfosStatus = "original";
                        visualData.changedClickInfo = "";
                        _b.label = 3;
                    case 3:
                        if (!visualData.interactionChangedInfosStatus) return [3, 5];
                        changedInfosTextarea = document.getElementById("interactionExampleChangedInfosTextarea" + visual.name);
                        return [4, helpers.getInteractionExampleChangesText(visual)];
                    case 4:
                        changedInfo = _b.sent();
                        changedInfosTextarea.value = changedInfo;
                        visualData.interactionChangedInfosStatus = "original";
                        visualData.changedInteractionChangedInfo = "";
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3, 1];
                    case 6: return [2];
                }
            });
        });
    }
    function createInteractionExampleCollapseForm(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var visualData, divAttributes, labelAttributes, interactionInfo, textareaAttributes, labelAttributes, changedInfo, textareaAttributes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        visualData = helpers.getDataOfInteractionVisual(visual);
                        helpers.createCollapseButton("collapseButtonInteractionExample" + visual.name, "interactionExample" + visual.name);
                        divAttributes = global.createDivAttributes();
                        divAttributes.id = "collapseForminteractionExample" + visual.name;
                        divAttributes.classes = "collapse collapseForm";
                        divAttributes.style = "margin-top: 5px;padding: 10px;border: 1px solid black;border-radius: 5px;box-shadow: 5px 5px 5px gray,0px 5px 5px gray";
                        divAttributes.parentId = "interactionExample" + visual.name;
                        elements.createDiv(divAttributes);
                        if (!visualData.clickInfosStatus) return [3, 2];
                        labelAttributes = global.createLabelAttributes();
                        labelAttributes.id = "interactionExampleInteractionInfosLabel" + visual.name;
                        labelAttributes.for = "interactionExampleInteractionInfosTextarea" + visual.name;
                        labelAttributes.style = "display: block;margin-left: 10px;";
                        labelAttributes.content = "Interaction information to click:";
                        labelAttributes.parentId = "collapseForminteractionExample" + visual.name;
                        elements.createLabel(labelAttributes);
                        return [4, helpers.getInteractionExampleInteractionInfo(visual, visualData)];
                    case 1:
                        interactionInfo = _a.sent();
                        textareaAttributes = global.createTextareaAttributes();
                        textareaAttributes.id = "interactionExampleInteractionInfosTextarea" + visual.name;
                        textareaAttributes.class = "interactionExampleInteractionInfos" + visual.name;
                        textareaAttributes.value = interactionInfo;
                        textareaAttributes.style = "display: block;width: 95%;margin-bottom: 5px;margin-left: 10px;background-color: lightsteelblue;";
                        textareaAttributes.parentId = "collapseForminteractionExample" + visual.name;
                        elements.createTextarea(textareaAttributes, false);
                        _a.label = 2;
                    case 2:
                        if (!visualData.interactionChangedInfosStatus) return [3, 4];
                        labelAttributes = global.createLabelAttributes();
                        labelAttributes.id = "interactionExampleChangedInfosLabel" + visual.name;
                        labelAttributes.for = "interactionExampleChangedInfosTextarea" + visual.name;
                        labelAttributes.style = "display: block;margin-left: 10px;";
                        labelAttributes.content = "Changed interaction information:";
                        labelAttributes.parentId = "collapseForminteractionExample" + visual.name;
                        elements.createLabel(labelAttributes);
                        return [4, helpers.getInteractionExampleChangedInfo(visual, visualData)];
                    case 3:
                        changedInfo = _a.sent();
                        textareaAttributes = global.createTextareaAttributes();
                        textareaAttributes.id = "interactionExampleChangedInfosTextarea" + visual.name;
                        textareaAttributes.class = "interactionExampleChangedInfos" + visual.name;
                        textareaAttributes.value = changedInfo;
                        textareaAttributes.style = "display: block;width: 95%;margin-bottom: 5px;margin-left: 10px;background-color: lightsteelblue;";
                        textareaAttributes.parentId = "collapseForminteractionExample" + visual.name;
                        elements.createTextarea(textareaAttributes, false);
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/editReportOffset.ts":
/*!***************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/editReportOffset.ts ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, global, elements, helperFunctions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createReportOffsetGroup = void 0;
    function createReportOffsetGroup() {
        var divAttributes = global.createDivAttributes();
        divAttributes.id = "offsetGroup";
        divAttributes.style = "padding: 10px;border: 1px solid black;";
        divAttributes.parentId = "editOnbording";
        elements.createDiv(divAttributes);
        var h2Attributes = global.createH2Attributes();
        h2Attributes.id = "offsetLabel";
        h2Attributes.style = "display: inline-block;margin-bottom: 0px;";
        h2Attributes.content = "Report Offset:";
        h2Attributes.parentId = "offsetGroup";
        elements.createH2(h2Attributes);
        (0, helperFunctions_1.createCollapseButton)("collapseButtonOffsetGroup", "offsetGroup");
        var smallAttributes = global.createSmallAttributes();
        smallAttributes.id = "offsetHelp";
        smallAttributes.style = "margin-bottom: 10px;";
        smallAttributes.content = "If our report has some padding please set these values. So that the onboarding can fitt ontop of the report.";
        smallAttributes.parentId = "offsetGroup";
        elements.createSmall(smallAttributes);
        divAttributes = global.createDivAttributes();
        divAttributes.id = "collapseFormoffsetGroup";
        divAttributes.classes = "collapse collapseForm";
        divAttributes.parentId = "offsetGroup";
        elements.createDiv(divAttributes);
        createOffsetInput("top", global.settings.reportOffset.top);
        createOffsetInput("bottom", global.settings.reportOffset.bottom);
        createOffsetInput("left", global.settings.reportOffset.left);
        createOffsetInput("right", global.settings.reportOffset.right);
    }
    exports.createReportOffsetGroup = createReportOffsetGroup;
    function createOffsetInput(type, offsetSetting) {
        var labelAttributes = global.createLabelAttributes();
        labelAttributes.id = type + "OffsetLabel";
        labelAttributes.for = type + "OffsetInput";
        labelAttributes.style = "margin-left: 10px;margin-right: 10px;";
        labelAttributes.content = (0, helperFunctions_1.firstLetterToUpperCase)(type) + ":";
        labelAttributes.parentId = "collapseFormoffsetGroup";
        elements.createLabel(labelAttributes);
        var inputAttributes = global.createInputAttributes();
        inputAttributes.id = type + "OffsetInput";
        inputAttributes.type = "number";
        inputAttributes.value = offsetSetting.toString();
        inputAttributes.style = "margin-right: 20px;width: 100px;background-color:lightsteelblue;";
        inputAttributes.parentId = "collapseFormoffsetGroup";
        elements.createInput(inputAttributes);
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/editVisuals.ts":
/*!**********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/editVisuals.ts ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./listOfVisuals */ "./AppOwnsData/wwwroot/onboarding/ts/listOfVisuals.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, elements, listOfVisuals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.orderVisuals = exports.createVisualsGroup = void 0;
    function createVisualsGroup() {
        var divAttributes = global.createDivAttributes();
        divAttributes.id = "visualsGroup";
        divAttributes.style = "padding: 10px;border: 1px solid black;";
        divAttributes.parentId = "editOnbording";
        elements.createDiv(divAttributes);
        var h2Attributes = global.createH2Attributes();
        h2Attributes.id = "visualsLabel";
        h2Attributes.style = "display: inline-block;margin-bottom: 0px;";
        h2Attributes.content = "Visuals:";
        h2Attributes.parentId = "visualsGroup";
        elements.createH2(h2Attributes);
        var buttonAttributes = global.createButtonAttributes();
        buttonAttributes.id = "resetVisualsInfo";
        buttonAttributes.content = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-counterclockwise mb-1\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z\"/><path d=\"M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z\"/></svg> Reset";
        buttonAttributes.style = "display: inline-block;";
        buttonAttributes.classes = global.darkOutlineButtonClass + " positionRight";
        buttonAttributes.function = resetVisualsInfo;
        buttonAttributes.parentId = "visualsGroup";
        elements.createButton(buttonAttributes, false);
        var smallAttributes = global.createSmallAttributes();
        smallAttributes.id = "visualsHelp";
        smallAttributes.style = "margin-bottom: 10px;";
        smallAttributes.content = "Here you can change the properies of the visuals. You can change the order of the visuals by moving the list elements up and down. It is possible to skip visuals in the onboarding and edit the content of the info bubbles.";
        smallAttributes.parentId = "visualsGroup";
        elements.createSmall(smallAttributes);
        divAttributes = global.createDivAttributes();
        divAttributes.id = "visualsList";
        divAttributes.parentId = "visualsGroup";
        elements.createDiv(divAttributes);
        (0, listOfVisuals_1.createListOfVisuals)();
    }
    exports.createVisualsGroup = createVisualsGroup;
    function resetVisualsInfo() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                elements.removeAllElementsOfClass("draggable");
                global.allVisuals.forEach(function (visual) {
                    return __awaiter(this, void 0, void 0, function () {
                        var visualData, visualInfos, i, i, i;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    visualData = helpers.getDataOfVisual(visual);
                                    visualData.title = visual.title;
                                    visualData.disabled = false;
                                    return [4, helpers.getVisualInfos(visual)];
                                case 1:
                                    visualInfos = _a.sent();
                                    for (i = 0; i < visualData.generalInfosStatus.length; ++i) {
                                        if (i < visualInfos.generalInfos.length) {
                                            visualData.generalInfosStatus[i] = "original";
                                            visualData.changedGeneralInfos[i] = "";
                                        }
                                        else {
                                            visualData.generalInfosStatus.splice(i, 1);
                                            visualData.changedGeneralInfos.splice(i, 1);
                                        }
                                    }
                                    for (i = 0; i < visualData.dataInfosStatus.length; ++i) {
                                        if (i < visualInfos.dataInfos.length) {
                                            visualData.dataInfosStatus[i] = "original";
                                            visualData.changedDataInfos[i] = "";
                                        }
                                        else {
                                            visualData.dataInfosStatus.splice(i, 1);
                                            visualData.changedDataInfos.splice(i, 1);
                                        }
                                    }
                                    for (i = 0; i < visualData.interactionInfosStatus.length; ++i) {
                                        if (i < visualInfos.interactionInfos.length) {
                                            visualData.interactionInfosStatus[i] = "original";
                                            visualData.changedInteractionInfos[i] = "";
                                        }
                                        else {
                                            visualData.interactionInfosStatus.splice(i, 1);
                                            visualData.changedInteractionInfos.splice(i, 1);
                                        }
                                    }
                                    return [2];
                            }
                        });
                    });
                });
                helpers.orderSettingsVisuals(global.allVisuals);
                (0, listOfVisuals_1.createListOfVisuals)();
                return [2];
            });
        });
    }
    function orderVisuals() {
        var newOrderVisuals = [];
        var draggables = document.getElementsByClassName("draggable");
        [].forEach.call(draggables, function (draggable) {
            var visual = global.allVisuals.find(function (visual) {
                return visual.name == draggable.id;
            });
            var visualData = global.settings.visuals.find(function (visualData) {
                return visualData.id == visual.name;
            });
            if (!visualData.disabled) {
                newOrderVisuals.push(visual);
            }
        });
        global.setVisuals(newOrderVisuals);
        var allVisuals = __spreadArray([], global.allVisuals, true);
        allVisuals.sort(function (a, b) {
            return global.currentVisuals.indexOf(a) - global.currentVisuals.indexOf(b);
        });
        helpers.orderSettingsVisuals(allVisuals);
    }
    exports.orderVisuals = orderVisuals;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts":
/*!*******************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/elements.ts ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./filterInfoCards */ "./AppOwnsData/wwwroot/onboarding/ts/filterInfoCards.ts"), __webpack_require__(/*! ./infoCards */ "./AppOwnsData/wwwroot/onboarding/ts/infoCards.ts"), __webpack_require__(/*! ./showReportChanges */ "./AppOwnsData/wwwroot/onboarding/ts/showReportChanges.ts"), __webpack_require__(/*! ./showVisualsChanges */ "./AppOwnsData/wwwroot/onboarding/ts/showVisualsChanges.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, global, helperFunctions_1, filterInfoCards_1, infoCards_1, showReportChanges_1, showVisualsChanges_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.removeAllElementsOfClass = exports.removeElement = exports.createTextarea = exports.createInput = exports.createSmall = exports.createLabel = exports.createAnchor = exports.createLI = exports.createUL = exports.createH2 = exports.createH1 = exports.createSpan = exports.createButton = exports.createDiv = exports.addStylesheet = void 0;
    function addStylesheet(URL) {
        var style = document.createElement('link');
        style.rel = "stylesheet";
        style.href = URL;
        document.head.appendChild(style);
    }
    exports.addStylesheet = addStylesheet;
    function createDiv(attributes) {
        var div = document.createElement('div');
        div.id = attributes.id;
        div.style.cssText = attributes.style;
        div.className = attributes.classes;
        div.innerHTML = attributes.content;
        div.setAttribute("role", attributes.role);
        div.setAttribute("aria-labelledby", attributes.label);
        div.addEventListener(attributes.eventType, attributes.eventFunction);
        if (attributes.clickable) {
            div.onclick = function () {
                if (global.interactionMode) {
                    (0, helperFunctions_1.removeContainerOffset)();
                    (0, helperFunctions_1.removeOnboardingOverlay)();
                    (0, showReportChanges_1.removeShowChangesCard)();
                    (0, showReportChanges_1.removeHintCard)();
                    var selectedVisual = global.currentVisuals[(0, helperFunctions_1.getVisualIndex)(attributes.id)];
                    (0, showVisualsChanges_1.showVisualChanges)(selectedVisual);
                }
                else {
                    (0, helperFunctions_1.removeOnboardingOverlay)();
                    if (attributes.id === "filter") {
                        global.setCurrentVisualIndex(global.currentVisuals.length);
                        (0, filterInfoCards_1.createFilterInfoCard)();
                    }
                    else {
                        global.setCurrentVisualIndex((0, helperFunctions_1.getVisualIndex)(attributes.id));
                        (0, infoCards_1.createInfoCard)(global.currentVisuals[global.currentVisualIndex]);
                    }
                }
            };
        }
        document.getElementById(attributes.parentId).appendChild(div);
    }
    exports.createDiv = createDiv;
    function createButton(attributes, insertBeforeParent) {
        var button = document.createElement('button');
        button.id = attributes.id;
        button.type = "button";
        button.className = attributes.classes;
        button.innerHTML = attributes.content;
        button.style.cssText = attributes.style;
        button.onclick = attributes.function;
        var parent = document.getElementById(attributes.parentId);
        if (insertBeforeParent) {
            parent.parentNode.insertBefore(button, parent);
        }
        else {
            parent.appendChild(button);
        }
    }
    exports.createButton = createButton;
    function createSpan(attributes) {
        var span = document.createElement('span');
        span.id = attributes.id;
        span.innerHTML = attributes.content;
        span.ariaHidden = attributes.hidden;
        document.getElementById(attributes.parentId).appendChild(span);
    }
    exports.createSpan = createSpan;
    function createH1(attributes) {
        var h1 = document.createElement('h1');
        h1.id = attributes.id;
        h1.innerHTML = attributes.content;
        h1.style.cssText = attributes.style;
        document.getElementById(attributes.parentId).appendChild(h1);
    }
    exports.createH1 = createH1;
    function createH2(attributes) {
        var h2 = document.createElement('h2');
        h2.id = attributes.id;
        h2.innerHTML = attributes.content;
        h2.style.cssText = attributes.style;
        document.getElementById(attributes.parentId).appendChild(h2);
    }
    exports.createH2 = createH2;
    function createUL(attributes) {
        var ul = document.createElement('ul');
        ul.id = attributes.id;
        ul.className = attributes.classes;
        if (attributes.role) {
            ul.setAttribute("role", attributes.role);
        }
        document.getElementById(attributes.parentId).appendChild(ul);
    }
    exports.createUL = createUL;
    function createLI(attributes) {
        var li = document.createElement('li');
        li.id = attributes.id;
        li.className = attributes.classes;
        document.getElementById(attributes.parentId).appendChild(li);
    }
    exports.createLI = createLI;
    function createAnchor(attributes, isTab) {
        var a = document.createElement('a');
        a.id = attributes.id;
        a.className = attributes.classes;
        a.href = attributes.href;
        a.innerHTML = attributes.content;
        if (isTab) {
            a.ariaSelected = attributes.selected;
            a.setAttribute("aria-controls", attributes.controles);
            a.setAttribute("data-toggle", attributes.toggle);
            a.setAttribute("role", attributes.tab);
        }
        document.getElementById(attributes.parentId).appendChild(a);
    }
    exports.createAnchor = createAnchor;
    function createLabel(attributes) {
        var label = document.createElement('label');
        label.id = attributes.id;
        label.setAttribute("for", attributes.for);
        label.style.cssText = attributes.style;
        label.innerHTML = attributes.content;
        document.getElementById(attributes.parentId).appendChild(label);
    }
    exports.createLabel = createLabel;
    function createSmall(attributes) {
        var small = document.createElement('small');
        small.id = attributes.id;
        small.className = "form-text text-muted";
        small.style.cssText = attributes.style;
        small.innerHTML = attributes.content;
        document.getElementById(attributes.parentId).appendChild(small);
    }
    exports.createSmall = createSmall;
    function createInput(attributes) {
        var input = document.createElement('input');
        input.id = attributes.id;
        input.style.cssText = attributes.style;
        input.value = attributes.value;
        input.type = attributes.type;
        document.getElementById(attributes.parentId).appendChild(input);
    }
    exports.createInput = createInput;
    function createTextarea(attributes, insertBeforeParent) {
        var textarea = document.createElement('textarea');
        textarea.id = attributes.id;
        textarea.className = attributes.class;
        textarea.style.cssText = attributes.style;
        textarea.value = attributes.value;
        var parent = document.getElementById(attributes.parentId);
        if (insertBeforeParent) {
            parent.parentNode.insertBefore(textarea, parent);
        }
        else {
            parent.appendChild(textarea);
        }
    }
    exports.createTextarea = createTextarea;
    function removeElement(id) {
        var elem = document.getElementById(id);
        if (elem) {
            elem.parentNode.removeChild(elem);
        }
    }
    exports.removeElement = removeElement;
    function removeAllElementsOfClass(elementClass) {
        var elements = document.querySelectorAll('.' + elementClass);
        elements.forEach(function (elem) {
            elem.remove();
        });
    }
    exports.removeAllElementsOfClass = removeAllElementsOfClass;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/filterInfoCards.ts":
/*!**************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/filterInfoCards.ts ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./disableArea */ "./AppOwnsData/wwwroot/onboarding/ts/disableArea.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, disableArea_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getFilterDescription = exports.createFilterList = exports.createFilterInfoCard = void 0;
    function createFilterInfoCard() {
        return __awaiter(this, void 0, void 0, function () {
            var style, filters;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, disableArea_1.createFilterDisabledArea)();
                        style = helpers.getCardStyle(global.infoCardMargin, global.page.defaultSize.width - global.infoCardMargin - global.infoCardWidth, global.infoCardWidth, "");
                        helpers.createCard("infoCard", style, "rectLeftBig");
                        helpers.createCloseButton("closeButton", "closeButtonPlacementBig positionLeft", helpers.getCloseFunction(), "infoCard");
                        helpers.createCardContent(global.settings.filterVisual.title, global.settings.filterVisual.generalInformation, "infoCard");
                        return [4, getFilterInfos()];
                    case 1:
                        filters = _a.sent();
                        createFilterList(filters, "contentText");
                        if (global.isGuidedTour) {
                            helpers.createCardButtons("previous", "close");
                        }
                        else {
                            helpers.createCardButtons("previous", "next");
                        }
                        return [2];
                }
            });
        });
    }
    exports.createFilterInfoCard = createFilterInfoCard;
    function createFilterList(list, parentId) {
        var ul = document.createElement('ul');
        document.getElementById(parentId).appendChild(ul);
        for (var i = 0; i < list.length; ++i) {
            var li = document.createElement('li');
            li.innerHTML = list[i];
            ul.appendChild(li);
        }
    }
    exports.createFilterList = createFilterList;
    function getFilterDescription(filter) {
        var valueText = "";
        if (filter.values.length != 0) {
            valueText = " Its current value is " + filter.values[0] + ".";
        }
        return filter.target.column + ": It filters the data " + filter.target.column + "." + valueText;
    }
    exports.getFilterDescription = getFilterDescription;
    function getFilterInfos() {
        return __awaiter(this, void 0, void 0, function () {
            var filterInfos, newFilters, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFilterInfo()];
                    case 1:
                        filterInfos = _a.sent();
                        newFilters = [];
                        for (i = 0; i < global.settings.filterVisual.filterInfosStatus.length; ++i) {
                            switch (global.settings.filterVisual.filterInfosStatus[i]) {
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
                        return [2, newFilters];
                }
            });
        });
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts":
/*!**************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createTextareaAttributes = exports.createInputAttributes = exports.createSmallAttributes = exports.createLabelAttributes = exports.createTabAnchorAttributes = exports.createAnchorAttributes = exports.createLIAttributes = exports.createULAttributes = exports.createH2Attributes = exports.createH1Attributes = exports.createSpanAttributes = exports.createButtonAttributes = exports.createDivAttributes = exports.setDraggingStarted = exports.setPlaceholderElement = exports.setPosY = exports.setPosX = exports.setDraggableElement = exports.setContainerPaddingLeft = exports.setContainerPaddingTop = exports.setCurrentVisualIndex = exports.setInteractionMode = exports.setIsGuidedTour = exports.setExplorationMode = exports.setSelectedTargets = exports.setPage = exports.setAllVisuals = exports.setVisuals = exports.setReport = exports.setSettings = exports.createSettingsObject = exports.createInteractionExample = exports.createInteractableVisual = exports.createFilterVisual = exports.createVisual = exports.createReportOffset = exports.infoStatus = exports.draggingStarted = exports.placeholderElement = exports.posY = exports.posX = exports.draggableElement = exports.containerPaddingLeft = exports.containerPaddingTop = exports.currentVisualIndex = exports.interactionMode = exports.isGuidedTour = exports.explorationMode = exports.selectedTargets = exports.page = exports.allVisuals = exports.currentVisuals = exports.report = exports.settings = exports.editCardWidth = exports.editCardMargin = exports.hintCardWidth = exports.hintCardMargin = exports.interactionCardHeight = exports.interactionCardWidth = exports.introCardWidth = exports.introCardMargin = exports.infoCardWidth = exports.infoCardMargin = exports.onboardingButtonStyle = exports.darkOutlineButtonClass = exports.explorationModeButtonWidth = exports.guidedTourButtonWidth = exports.filterOpenedWidth = exports.filterClosedWidth = exports.footerHeight = void 0;
    exports.footerHeight = 37;
    exports.filterClosedWidth = 32;
    exports.filterOpenedWidth = 248;
    exports.guidedTourButtonWidth = 150;
    exports.explorationModeButtonWidth = 250;
    exports.darkOutlineButtonClass = "btn btn-outline-dark";
    exports.onboardingButtonStyle = "margin:10px;float:right;";
    exports.infoCardMargin = 10;
    exports.infoCardWidth = 400;
    exports.introCardMargin = 60;
    exports.introCardWidth = 500;
    exports.interactionCardWidth = 500;
    exports.interactionCardHeight = 240;
    exports.hintCardMargin = 5;
    exports.hintCardWidth = 200;
    exports.editCardMargin = 0;
    exports.editCardWidth = 500;
    exports.explorationMode = false;
    exports.isGuidedTour = false;
    exports.interactionMode = false;
    exports.posX = 0;
    exports.posY = 0;
    exports.draggingStarted = false;
    var infoStatus;
    (function (infoStatus) {
        infoStatus["original"] = "original";
        infoStatus["changed"] = "changed";
        infoStatus["added"] = "added";
        infoStatus["deleted"] = "deleted";
    })(infoStatus = exports.infoStatus || (exports.infoStatus = {}));
    function createReportOffset() {
        return {
            top: undefined,
            bottom: undefined,
            left: undefined,
            right: undefined,
        };
    }
    exports.createReportOffset = createReportOffset;
    function createVisual() {
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
        };
    }
    exports.createVisual = createVisual;
    function createFilterVisual() {
        return {
            title: "",
            generalInformation: "",
            filterInfosStatus: [],
            changedFilterInfos: []
        };
    }
    exports.createFilterVisual = createFilterVisual;
    function createInteractableVisual() {
        return {
            id: "",
            title: "",
            clickInfosStatus: "",
            changedClickInfos: "",
            changesInfosStatus: "",
            changedChangesInfos: ""
        };
    }
    exports.createInteractableVisual = createInteractableVisual;
    function createInteractionExample() {
        return {
            title: "",
            generalInfoStatus: "",
            changedGeneralInfo: "",
            nextVisualHint: "",
            visuals: []
        };
    }
    exports.createInteractionExample = createInteractionExample;
    function createSettingsObject() {
        return {
            reportOffset: undefined,
            visuals: [],
            filterVisual: undefined,
            interactionExample: undefined
        };
    }
    exports.createSettingsObject = createSettingsObject;
    function setSettings(newSettings) {
        exports.settings = newSettings;
    }
    exports.setSettings = setSettings;
    function setReport(newReport) {
        exports.report = newReport;
    }
    exports.setReport = setReport;
    function setVisuals(newCurrentVisuals) {
        exports.currentVisuals = newCurrentVisuals;
    }
    exports.setVisuals = setVisuals;
    function setAllVisuals(newAllVisuals) {
        exports.allVisuals = newAllVisuals;
    }
    exports.setAllVisuals = setAllVisuals;
    function setPage(newPage) {
        exports.page = newPage;
    }
    exports.setPage = setPage;
    function setSelectedTargets(newSelectedTargets) {
        exports.selectedTargets = newSelectedTargets;
    }
    exports.setSelectedTargets = setSelectedTargets;
    function setExplorationMode(newExplorationMode) {
        exports.explorationMode = newExplorationMode;
    }
    exports.setExplorationMode = setExplorationMode;
    function setIsGuidedTour(newIsGuidedTour) {
        exports.isGuidedTour = newIsGuidedTour;
    }
    exports.setIsGuidedTour = setIsGuidedTour;
    function setInteractionMode(newInteractionMode) {
        exports.interactionMode = newInteractionMode;
    }
    exports.setInteractionMode = setInteractionMode;
    function setCurrentVisualIndex(newCurrentVisualIndex) {
        exports.currentVisualIndex = newCurrentVisualIndex;
    }
    exports.setCurrentVisualIndex = setCurrentVisualIndex;
    function setContainerPaddingTop(newContainerPaddingTop) {
        exports.containerPaddingTop = newContainerPaddingTop;
    }
    exports.setContainerPaddingTop = setContainerPaddingTop;
    function setContainerPaddingLeft(newContainerPaddingLeft) {
        exports.containerPaddingLeft = newContainerPaddingLeft;
    }
    exports.setContainerPaddingLeft = setContainerPaddingLeft;
    function setDraggableElement(newDraggableElement) {
        exports.draggableElement = newDraggableElement;
    }
    exports.setDraggableElement = setDraggableElement;
    function setPosX(newPosX) {
        exports.posX = newPosX;
    }
    exports.setPosX = setPosX;
    function setPosY(newPosY) {
        exports.posY = newPosY;
    }
    exports.setPosY = setPosY;
    function setPlaceholderElement(newPlaceholderElement) {
        exports.placeholderElement = newPlaceholderElement;
    }
    exports.setPlaceholderElement = setPlaceholderElement;
    function setDraggingStarted(newDraggingStarted) {
        exports.draggingStarted = newDraggingStarted;
    }
    exports.setDraggingStarted = setDraggingStarted;
    function createDivAttributes() {
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
    exports.createDivAttributes = createDivAttributes;
    function createButtonAttributes() {
        return {
            id: "",
            content: "",
            style: "",
            classes: "",
            function: undefined,
            parentId: ""
        };
    }
    exports.createButtonAttributes = createButtonAttributes;
    function createSpanAttributes() {
        return {
            id: "",
            content: "",
            hidden: "false",
            parentId: ""
        };
    }
    exports.createSpanAttributes = createSpanAttributes;
    function createH1Attributes() {
        return {
            id: "",
            content: "",
            style: "",
            parentId: ""
        };
    }
    exports.createH1Attributes = createH1Attributes;
    function createH2Attributes() {
        return {
            id: "",
            content: "",
            style: "",
            parentId: ""
        };
    }
    exports.createH2Attributes = createH2Attributes;
    function createULAttributes() {
        return {
            id: "",
            classes: "",
            role: "",
            parentId: ""
        };
    }
    exports.createULAttributes = createULAttributes;
    function createLIAttributes() {
        return {
            id: "",
            classes: "",
            parentId: ""
        };
    }
    exports.createLIAttributes = createLIAttributes;
    function createAnchorAttributes() {
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
        };
    }
    exports.createAnchorAttributes = createAnchorAttributes;
    function createTabAnchorAttributes() {
        return {
            id: "",
            href: "",
            content: "",
            parentId: ""
        };
    }
    exports.createTabAnchorAttributes = createTabAnchorAttributes;
    function createLabelAttributes() {
        return {
            id: "",
            for: "",
            style: "",
            content: "",
            parentId: ""
        };
    }
    exports.createLabelAttributes = createLabelAttributes;
    function createSmallAttributes() {
        return {
            id: "",
            style: "",
            content: "",
            parentId: ""
        };
    }
    exports.createSmallAttributes = createSmallAttributes;
    function createInputAttributes() {
        return {
            id: "",
            type: "",
            style: "",
            value: "",
            parentId: ""
        };
    }
    exports.createInputAttributes = createInputAttributes;
    function createTextareaAttributes() {
        return {
            id: "",
            class: "",
            style: "",
            value: "",
            parentId: ""
        };
    }
    exports.createTextareaAttributes = createTextareaAttributes;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts":
/*!**************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./introCards */ "./AppOwnsData/wwwroot/onboarding/ts/introCards.ts"), __webpack_require__(/*! ./infoCards */ "./AppOwnsData/wwwroot/onboarding/ts/infoCards.ts"), __webpack_require__(/*! ./disableArea */ "./AppOwnsData/wwwroot/onboarding/ts/disableArea.ts"), __webpack_require__(/*! ./onboarding */ "./AppOwnsData/wwwroot/onboarding/ts/onboarding.ts"), __webpack_require__(/*! ./authorMode */ "./AppOwnsData/wwwroot/onboarding/ts/authorMode.ts"), __webpack_require__(/*! ./createSettings */ "./AppOwnsData/wwwroot/onboarding/ts/createSettings.ts"), __webpack_require__(/*! ./listOfVisuals */ "./AppOwnsData/wwwroot/onboarding/ts/listOfVisuals.ts"), __webpack_require__(/*! ./interactionExample */ "./AppOwnsData/wwwroot/onboarding/ts/interactionExample.ts"), __webpack_require__(/*! ./showReportChanges */ "./AppOwnsData/wwwroot/onboarding/ts/showReportChanges.ts"), __webpack_require__(/*! ./basicVisualContent */ "./AppOwnsData/wwwroot/onboarding/ts/basicVisualContent.ts"), __webpack_require__(/*! ./complexVisualContent */ "./AppOwnsData/wwwroot/onboarding/ts/complexVisualContent.ts"), __webpack_require__(/*! ./lineChartVisualContent */ "./AppOwnsData/wwwroot/onboarding/ts/lineChartVisualContent.ts"), __webpack_require__(/*! ./barChartVisualContent */ "./AppOwnsData/wwwroot/onboarding/ts/barChartVisualContent.ts"), __webpack_require__(/*! ./filterInfoCards */ "./AppOwnsData/wwwroot/onboarding/ts/filterInfoCards.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, global, elements, introCards_1, infoCards_1, disableArea_1, onboarding_1, authorMode_1, createSettings_1, listOfVisuals_1, interactionExample_1, showReportChanges_1, basicVisualContent_1, complexVisualContent_1, lineChartVisualContent_1, barChartVisualContent_1, filterInfoCards_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.toggleFilter = exports.startExplorationMode = exports.saveIntInput = exports.resizeEmbed = exports.removeOnboardingOverlay = exports.removeOnboarding = exports.removeContainerOffset = exports.recreateInteractionExampleButton = exports.orderSettingsVisuals = exports.isVisible = exports.getTypeName = exports.getVisualTitle = exports.getVisuals = exports.getVisualInfos = exports.getVisualIndex = exports.getVisualData = exports.getVisualCardPos = exports.getTargetInteractionFilter = exports.getSpecificDataInfo = exports.getSettings = exports.getNotSupportedInfo = exports.getNextVisual = exports.getInteractionExampleInteractionInfo = exports.getInteractionExampleGeneralInfo = exports.getInteractionExampleChangesText = exports.getInteractionExampleChangedInfo = exports.getGeneralInteractionInfo = exports.getGeneralInfoInteractionExampleText = exports.getFilterInfo = exports.getFieldMeasures = exports.getFieldMeasure = exports.getFieldColumn = exports.getDataWithId = exports.getDataOfVisual = exports.getDataOfInteractionVisual = exports.getCloseFunction = exports.getClickableStyle = exports.getCardStyle = exports.getActivePage = exports.firstLetterToUpperCase = exports.dataToString = exports.createTitleForm = exports.createOnboardingButtons = exports.createOnboarding = exports.createInteractionExampleButton = exports.createInfoForm = exports.createEnableButton = exports.createEditOnboardingButtons = exports.createDisableButton = exports.createCollapseButton = exports.createCloseButton = exports.createCardContent = exports.createCardButtons = exports.createCard = exports.createBasicCardContent = exports.addContainerOffset = void 0;
    function addContainerOffset() {
        var navbarHeight = document.getElementsByClassName("navbar")[0].clientHeight;
        var containerOffset = global.interactionCardHeight - navbarHeight;
        var container = document.getElementById("embed-container");
        container.style.marginTop = containerOffset + "px";
    }
    exports.addContainerOffset = addContainerOffset;
    function backToVisual() {
        removeContainerOffset();
        global.setInteractionMode(false);
        removeOnboardingOverlay();
        (0, interactionExample_1.removeInteractionCard)();
        (0, showReportChanges_1.removeShowChangesCard)();
        (0, showReportChanges_1.removeHintCard)();
        (0, infoCards_1.createInfoCard)(global.currentVisuals[global.currentVisualIndex]);
    }
    function createBasicCardContent(description, parentId) {
        var divAttributes = global.createDivAttributes();
        divAttributes.id = "basicCardContent";
        divAttributes.classes = "contentPlacementSmall";
        divAttributes.parentId = parentId;
        elements.createDiv(divAttributes);
        var spanAttributes = global.createSpanAttributes();
        spanAttributes.id = "basicContentText";
        spanAttributes.content = description;
        spanAttributes.parentId = "basicCardContent";
        elements.createSpan(spanAttributes);
    }
    exports.createBasicCardContent = createBasicCardContent;
    function createCard(id, style, classes) {
        var attributes = global.createDivAttributes();
        attributes.id = id;
        attributes.style = style;
        attributes.classes = classes;
        attributes.parentId = "onboarding";
        elements.createDiv(attributes);
    }
    exports.createCard = createCard;
    function createCardButtons(leftButton, rightButton) {
        var divAttributes = global.createDivAttributes();
        divAttributes.id = "cardButtons";
        divAttributes.parentId = "cardContent";
        elements.createDiv(divAttributes);
        if (leftButton != "") {
            var buttonAttributes = global.createButtonAttributes();
            buttonAttributes.classes = global.darkOutlineButtonClass;
            buttonAttributes.parentId = "cardButtons";
            switch (leftButton) {
                case "skip":
                    buttonAttributes.id = "skipButton";
                    buttonAttributes.content = "Skip";
                    buttonAttributes.function = removeOnboarding;
                    break;
                case "back to visual":
                    buttonAttributes.id = "backButton";
                    buttonAttributes.content = "Back to visual";
                    buttonAttributes.function = backToVisual;
                    break;
                case "cancel":
                    buttonAttributes.id = "cancelButton";
                    buttonAttributes.content = "Cancel";
                    buttonAttributes.function = removeOnboarding;
                    break;
                default:
                    buttonAttributes.id = "previousButton";
                    buttonAttributes.content = "Previous";
                    buttonAttributes.function = infoCards_1.previousInfoCard;
            }
            elements.createButton(buttonAttributes, false);
        }
        if (rightButton != "") {
            var buttonAttributes = global.createButtonAttributes();
            buttonAttributes.classes = global.darkOutlineButtonClass + " positionRight";
            buttonAttributes.parentId = "cardButtons";
            if (leftButton == "") {
                buttonAttributes.style += "margin-bottom: 20px;";
            }
            switch (rightButton) {
                case "close":
                    buttonAttributes.id = "endButton";
                    buttonAttributes.content = "Close";
                    buttonAttributes.function = removeOnboarding;
                    break;
                case "start":
                    buttonAttributes.id = "startButton";
                    buttonAttributes.content = "Start";
                    buttonAttributes.function = (0, introCards_1.getStartFunction)();
                    break;
                case "back to visual":
                    buttonAttributes.id = "backButton";
                    buttonAttributes.content = "Back to visual";
                    buttonAttributes.function = backToVisual;
                    break;
                case "back to overview":
                    buttonAttributes.id = "backToOverviewButton";
                    buttonAttributes.content = "Back to overview";
                    buttonAttributes.function = showReportChanges_1.showReportChanges;
                    break;
                case "save":
                    buttonAttributes.id = "saveButton";
                    buttonAttributes.content = "Save";
                    buttonAttributes.function = authorMode_1.saveOnboardingChanges;
                    break;
                default:
                    buttonAttributes.id = "nextButton";
                    buttonAttributes.content = "Next";
                    buttonAttributes.function = infoCards_1.nextInfoCard;
            }
            elements.createButton(buttonAttributes, false);
        }
    }
    exports.createCardButtons = createCardButtons;
    function createCardContent(headline, description, parentId) {
        var divAttributes = global.createDivAttributes();
        divAttributes.id = "cardContent";
        divAttributes.classes = "contentPlacementBig";
        divAttributes.parentId = parentId;
        elements.createDiv(divAttributes);
        var h1Attributes = global.createH1Attributes();
        h1Attributes.id = "cardHeadline";
        h1Attributes.content = headline;
        h1Attributes.parentId = "cardContent";
        elements.createH1(h1Attributes);
        var spanAttributes = global.createSpanAttributes();
        spanAttributes.id = "contentText";
        spanAttributes.content = description;
        spanAttributes.parentId = "cardContent";
        elements.createSpan(spanAttributes);
    }
    exports.createCardContent = createCardContent;
    function createCloseButton(buttonId, buttonClasses, functionName, parentId) {
        var buttonAttributes = global.createButtonAttributes();
        buttonAttributes.id = buttonId;
        buttonAttributes.classes = "close " + buttonClasses;
        buttonAttributes.function = functionName;
        buttonAttributes.parentId = parentId;
        elements.createButton(buttonAttributes, false);
        var spanAttributes = global.createSpanAttributes();
        spanAttributes.id = "";
        spanAttributes.content = "&times;";
        spanAttributes.hidden = "true";
        spanAttributes.parentId = buttonId;
        elements.createSpan(spanAttributes);
    }
    exports.createCloseButton = createCloseButton;
    function createCollapseButton(Id, parentId) {
        var buttonAttributes = global.createButtonAttributes();
        buttonAttributes.id = Id;
        buttonAttributes.content = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-down mb-1\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\"/></svg>";
        ;
        buttonAttributes.style = "padding-top: 0px;padding-bottom: 0px;";
        buttonAttributes.classes = "btn " + Id + " positionRight";
        buttonAttributes.parentId = parentId;
        elements.createButton(buttonAttributes, false);
        var collapseButton = document.getElementById(Id);
        collapseButton.setAttribute("data-toggle", "collapse");
        collapseButton.setAttribute("data-target", "#collapseForm" + parentId);
        collapseButton.setAttribute("aria-expanded", "false");
        collapseButton.setAttribute("aria-controls", "collapseForm" + parentId);
    }
    exports.createCollapseButton = createCollapseButton;
    function createDisableButton(parentId) {
        var attributes = global.createButtonAttributes();
        attributes.style = "padding-top: 0px;padding-bottom: 0px;";
        attributes.classes = "btn disableVisualButton";
        attributes.content = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-eye mb-2\" viewBox=\"0 0 16 16\"><path d=\"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z\"/><path d=\"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z\"/></svg>";
        attributes.parentId = parentId;
        elements.createButton(attributes, false);
    }
    exports.createDisableButton = createDisableButton;
    function createEditOnboardingButtons() {
        var attributes = global.createButtonAttributes();
        attributes.id = "editOnboarding";
        attributes.content = "Edit Dashboard Onboarding";
        attributes.style = global.onboardingButtonStyle;
        attributes.classes = global.darkOutlineButtonClass;
        attributes.function = authorMode_1.createOnboardingEditing;
        attributes.parentId = "embed-container";
        elements.createButton(attributes, true);
    }
    exports.createEditOnboardingButtons = createEditOnboardingButtons;
    function createEnableButton(parentId) {
        var attributes = global.createButtonAttributes();
        attributes.style = "padding-top: 0px;padding-bottom: 0px;";
        attributes.classes = "btn disableVisualButton";
        attributes.content = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-eye-slash mb-2\" viewBox=\"0 0 16 16\"><path d=\"M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z\"/><path d=\"M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z\"/><path d=\"M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z\"/></svg>";
        attributes.parentId = parentId;
        elements.createButton(attributes, false);
    }
    exports.createEnableButton = createEnableButton;
    function createInfoForm(infoType, visualID, Infos) {
        var infoTitle = firstLetterToUpperCase(infoType);
        var labelAttributes = global.createLabelAttributes();
        labelAttributes.id = infoType + "InfosLabel" + visualID;
        labelAttributes.for = infoType + "InfosTextarea" + visualID;
        labelAttributes.style = "display: block;margin-left: 10px;";
        labelAttributes.content = infoTitle + " Information:";
        labelAttributes.parentId = "collapseForm" + visualID;
        elements.createLabel(labelAttributes);
        for (var i = 0; i < Infos.length; ++i) {
            var Info = Infos[i].replaceAll("<br>", '\r\n');
            var textareaAttributes = global.createTextareaAttributes();
            textareaAttributes.id = i + infoType + "InfosTextarea" + visualID;
            textareaAttributes.class = infoType + "Infos" + visualID;
            textareaAttributes.value = Info;
            textareaAttributes.style = "display: block;width: 95%;margin-bottom: 5px;margin-left: 10px;background-color: lightsteelblue;";
            textareaAttributes.parentId = "collapseForm" + visualID;
            elements.createTextarea(textareaAttributes, false);
        }
        var addButtonAttributes = global.createButtonAttributes();
        addButtonAttributes.id = "add" + infoTitle + "Info" + visualID;
        addButtonAttributes.content = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus-circle\" viewBox=\"0 0 16 16\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/><path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/></svg> Add";
        addButtonAttributes.style = "margin: auto;display: block;";
        addButtonAttributes.classes = global.darkOutlineButtonClass;
        addButtonAttributes.function = function () {
            (0, listOfVisuals_1.addVisualTextarea)(infoType, visualID);
        };
        addButtonAttributes.parentId = "collapseForm" + visualID;
        elements.createButton(addButtonAttributes, false);
    }
    exports.createInfoForm = createInfoForm;
    function createInteractionExampleButton(parentId, visual) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, attributes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, getVisualData(visual)];
                    case 1:
                        _b.sent();
                        return [3, 3];
                    case 2:
                        _a = _b.sent();
                        return [2];
                    case 3:
                        attributes = global.createButtonAttributes();
                        attributes.id = "interactionExample";
                        attributes.content = "Try it out";
                        attributes.style = "display:block;margin:0 auto;margin-top:10px;margin-bottom:10px;";
                        attributes.classes = global.darkOutlineButtonClass;
                        attributes.function = interactionExample_1.startInteractionExample;
                        attributes.parentId = parentId;
                        elements.createButton(attributes, false);
                        return [2];
                }
            });
        });
    }
    exports.createInteractionExampleButton = createInteractionExampleButton;
    function createOnboarding() {
        var style = getDisabledStyle(global.containerPaddingTop, global.containerPaddingLeft, global.page.defaultSize.width, global.page.defaultSize.height);
        var attributes = global.createDivAttributes();
        attributes.id = "onboarding";
        attributes.style = style;
        attributes.parentId = "embed-container";
        elements.createDiv(attributes);
    }
    exports.createOnboarding = createOnboarding;
    function createOnboardingButtons() {
        var attributes = global.createButtonAttributes();
        attributes.id = "guidedTour";
        attributes.content = "Start Guided Tour";
        attributes.style = global.onboardingButtonStyle;
        attributes.classes = global.darkOutlineButtonClass;
        attributes.function = onboarding_1.createGuidedTour;
        attributes.parentId = "embed-container";
        elements.createButton(attributes, true);
        attributes = global.createButtonAttributes();
        attributes.id = "dashboardExploration";
        attributes.content = "Start Dashboard Exploration";
        attributes.style = global.onboardingButtonStyle;
        attributes.classes = global.darkOutlineButtonClass;
        attributes.function = onboarding_1.createDashboardExploration;
        attributes.parentId = "embed-container";
        elements.createButton(attributes, true);
    }
    exports.createOnboardingButtons = createOnboardingButtons;
    function createTitleForm(ID, title) {
        var labelAttributes = global.createLabelAttributes();
        labelAttributes.id = "titleLabel" + ID;
        labelAttributes.for = "titleInput" + ID;
        labelAttributes.style = "margin-left: 10px;margin-right: 10px;";
        labelAttributes.content = "Title:";
        labelAttributes.parentId = "collapseForm" + ID;
        elements.createLabel(labelAttributes);
        var inputAttributes = global.createInputAttributes();
        inputAttributes.id = "titleInput" + ID;
        inputAttributes.type = "string";
        inputAttributes.value = title;
        inputAttributes.style = "margin-right: 20px;background-color:lightsteelblue;";
        inputAttributes.parentId = "collapseForm" + ID;
        elements.createInput(inputAttributes);
    }
    exports.createTitleForm = createTitleForm;
    function dataToString(dataArray) {
        var dataString = "";
        for (var i = 0; i < dataArray.length; i++) {
            dataString += dataArray[i];
            if (i != dataArray.length - 1) {
                dataString += " and ";
            }
        }
        return dataString;
    }
    exports.dataToString = dataToString;
    function endExplorationMode() {
        global.setExplorationMode(false);
        var button = document.getElementById("dashboardExploration");
        button.innerHTML = "Start Dashboard Exploration";
    }
    function firstLetterToUpperCase(str) {
        str = str.charAt(0).toUpperCase() + str.slice(1);
        return str;
    }
    exports.firstLetterToUpperCase = firstLetterToUpperCase;
    function getActivePage() {
        return __awaiter(this, void 0, void 0, function () {
            var pages, page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, global.report.getPages()];
                    case 1:
                        pages = _a.sent();
                        page = pages.filter(function (page) {
                            return page.isActive;
                        })[0];
                        global.setPage(page);
                        return [2];
                }
            });
        });
    }
    exports.getActivePage = getActivePage;
    function getCardStyle(top, left, width, height) {
        return getClickableStyle(top, left, width, height) + "border-radius:10px;background-color:lightsteelblue;z-index: 99 !important;";
    }
    exports.getCardStyle = getCardStyle;
    function getClickableStyle(top, left, width, height) {
        return "position:absolute;pointer-events:auto;top:".concat(top, "px;left:").concat(left, "px;width:").concat(width, "px;height:").concat(height, "px;");
    }
    exports.getClickableStyle = getClickableStyle;
    function getCloseFunction() {
        if (global.isGuidedTour) {
            return removeOnboarding;
        }
        else {
            return onboarding_1.createOnboardingOverlay;
        }
    }
    exports.getCloseFunction = getCloseFunction;
    function getDataOfInteractionVisual(visual) {
        var visualsData = global.settings.interactionExample.visuals;
        var visualData = visualsData.find(function (data) {
            return data.id == visual.name;
        });
        return visualData;
    }
    exports.getDataOfInteractionVisual = getDataOfInteractionVisual;
    function getDataOfVisual(visual) {
        var visualsData = global.settings.visuals;
        var visualData = visualsData.find(function (data) {
            return data.id == visual.name;
        });
        return visualData;
    }
    exports.getDataOfVisual = getDataOfVisual;
    function getDataWithId(ID) {
        var visuals = global.settings.visuals;
        var visualData = visuals.find(function (visual) {
            return visual.id == ID;
        });
        return visualData;
    }
    exports.getDataWithId = getDataWithId;
    function getDisabledStyle(top, left, width, height) {
        return "position:absolute;pointer-events:none;top:".concat(top, "px;left:").concat(left, "px;width:").concat(width, "px;height:").concat(height, "px;");
    }
    function getFieldColumn(visual, fieldName) {
        return __awaiter(this, void 0, void 0, function () {
            var column, fields;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, visual.getDataFields(fieldName)];
                    case 1:
                        fields = _a.sent();
                        if (fields.length != 0) {
                            column = fields[0].column;
                        }
                        return [2, column];
                }
            });
        });
    }
    exports.getFieldColumn = getFieldColumn;
    function getFieldMeasure(visual, fieldName) {
        return __awaiter(this, void 0, void 0, function () {
            var measure, fields;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, visual.getDataFields(fieldName)];
                    case 1:
                        fields = _a.sent();
                        if (fields.length != 0) {
                            measure = fields[0].measure;
                        }
                        return [2, measure];
                }
            });
        });
    }
    exports.getFieldMeasure = getFieldMeasure;
    function getFieldMeasures(visual, fieldName) {
        return __awaiter(this, void 0, void 0, function () {
            var measures, fields, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        measures = [];
                        return [4, visual.getDataFields(fieldName)];
                    case 1:
                        fields = _a.sent();
                        for (i = 0; i < fields.length; i++) {
                            measures.push(fields[i].measure);
                        }
                        return [2, measures];
                }
            });
        });
    }
    exports.getFieldMeasures = getFieldMeasures;
    function getFilterInfo() {
        return __awaiter(this, void 0, void 0, function () {
            var filters, filterInfos, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, global.page.getFilters()];
                    case 1:
                        filters = _a.sent();
                        filterInfos = [];
                        for (i = 0; i < filters.length; ++i) {
                            filterInfos.push((0, filterInfoCards_1.getFilterDescription)(filters[i]));
                        }
                        return [2, filterInfos];
                }
            });
        });
    }
    exports.getFilterInfo = getFilterInfo;
    function getGeneralInfoInteractionExampleText() {
        var generalInfo = "Can you see how the whole report changed?<br>All the visualizations were filtered by \"all report filters\".<br>You can now click on one of the cards or graphs to get detailed information about its changes.";
        generalInfo = generalInfo.replaceAll("<br>", '\r\n');
        return generalInfo;
    }
    exports.getGeneralInfoInteractionExampleText = getGeneralInfoInteractionExampleText;
    function getGeneralInteractionInfo(additionalFilters, filterString) {
        var visualInteractionInfo = "The highlighted data includes ";
        if (additionalFilters.length != 0) {
            var dataString = "";
            for (var i = 0; i < additionalFilters.length; i++) {
                dataString += additionalFilters[i].target.column + " " + additionalFilters[i].equals;
                if (i != additionalFilters.length - 1) {
                    dataString += " and ";
                }
            }
            visualInteractionInfo += " the " + filterString + " of " + dataString;
        }
        else {
            visualInteractionInfo += "all " + filterString;
        }
        return visualInteractionInfo;
    }
    exports.getGeneralInteractionInfo = getGeneralInteractionInfo;
    function getInteractionExampleChangedInfo(visual, visualData) {
        return __awaiter(this, void 0, void 0, function () {
            var changedInfoStatus, changedInfo, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        changedInfoStatus = visualData.interactionChangedInfosStatus;
                        _a = changedInfoStatus;
                        switch (_a) {
                            case global.infoStatus.original: return [3, 1];
                            case global.infoStatus.changed: return [3, 3];
                            case global.infoStatus.added: return [3, 3];
                        }
                        return [3, 4];
                    case 1: return [4, getInteractionExampleChangesText(visual)];
                    case 2:
                        changedInfo = _b.sent();
                        changedInfo = changedInfo.replaceAll("<br>", '\r\n');
                        return [3, 5];
                    case 3:
                        changedInfo = visualData.changedInteractionChangedInfo;
                        return [3, 5];
                    case 4:
                        changedInfo = "";
                        return [3, 5];
                    case 5: return [2, changedInfo];
                }
            });
        });
    }
    exports.getInteractionExampleChangedInfo = getInteractionExampleChangedInfo;
    function getInteractionExampleChangesText(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var visualChangeInfo, type;
            return __generator(this, function (_a) {
                visualChangeInfo = "You can see that this visual was filtered by \"Filter\".<br>";
                type = getTypeName(visual);
                switch (type) {
                    case 'Card':
                        visualChangeInfo += "The displayed data is now \"DataValue\".";
                        break;
                    case 'Line Clustered Column Combo Chart':
                    case 'Line Chart':
                    case 'Clustered Bar Chart':
                        visualChangeInfo += "The highlighted data includes \"AllHighlitedData\".";
                        visualChangeInfo += "<br>You can also change the report filters by selecting a new element of this visual.";
                        break;
                    default:
                        break;
                }
                return [2, visualChangeInfo];
            });
        });
    }
    exports.getInteractionExampleChangesText = getInteractionExampleChangesText;
    function getInteractionExampleGeneralInfo() {
        var generalInfo = global.settings.interactionExample.generalInfoStatus;
        switch (generalInfo) {
            case global.infoStatus.original:
                return getGeneralInfoInteractionExampleText();
            case global.infoStatus.changed:
            case global.infoStatus.added:
                return global.settings.interactionExample.changedGeneralInfo.replaceAll("<br>", '\r\n');
            default:
                return "";
        }
    }
    exports.getInteractionExampleGeneralInfo = getInteractionExampleGeneralInfo;
    function getInteractionExampleInteractionInfo(visual, visualData) {
        return __awaiter(this, void 0, void 0, function () {
            var clickInfoStatus, interactionInfo, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        clickInfoStatus = visualData.clickInfosStatus;
                        _a = clickInfoStatus;
                        switch (_a) {
                            case global.infoStatus.original: return [3, 1];
                            case global.infoStatus.changed: return [3, 3];
                            case global.infoStatus.added: return [3, 3];
                        }
                        return [3, 4];
                    case 1: return [4, (0, interactionExample_1.getInteractionText)(visual)];
                    case 2:
                        interactionInfo = _b.sent();
                        interactionInfo = interactionInfo.replaceAll("<br>", '\r\n');
                        return [3, 5];
                    case 3:
                        interactionInfo = visualData.changedClickInfo;
                        return [3, 5];
                    case 4:
                        interactionInfo = "";
                        return [3, 5];
                    case 5: return [2, interactionInfo];
                }
            });
        });
    }
    exports.getInteractionExampleInteractionInfo = getInteractionExampleInteractionInfo;
    function getNextVisual() {
        var nextVisual;
        var visuals = global.currentVisuals.filter(function (visual) {
            return visual.type !== "slicer";
        });
        if (global.currentVisualIndex >= visuals.length - 1) {
            nextVisual = visuals[0];
        }
        else {
            nextVisual = visuals[global.currentVisualIndex + 1];
        }
        return nextVisual;
    }
    exports.getNextVisual = getNextVisual;
    function getNotSupportedInfo() {
        var defaultInfo = "Sadly we do not support this type of visual :(";
        document.getElementById("contentText").innerHTML = defaultInfo;
    }
    exports.getNotSupportedInfo = getNotSupportedInfo;
    function getSettings() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(localStorage.getItem("settings") == null)) return [3, 2];
                        return [4, (0, createSettings_1.createSettings)()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        global.setSettings(JSON.parse(localStorage.getItem("settings")));
                        return [2];
                }
            });
        });
    }
    exports.getSettings = getSettings;
    function getSpecificDataInfo(visual, dataName) {
        return __awaiter(this, void 0, void 0, function () {
            var dataMap, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, getVisualData(visual)];
                    case 1:
                        dataMap = _b.sent();
                        return [3, 3];
                    case 2:
                        _a = _b.sent();
                        return [2, ""];
                    case 3:
                        if (!dataName) {
                            return [2, ""];
                        }
                        return [2, dataMap.get(dataName)];
                }
            });
        });
    }
    exports.getSpecificDataInfo = getSpecificDataInfo;
    function getTargetInteractionFilter(target) {
        var visualInteractionInfo = "";
        var filter = global.selectedTargets.filter(function (data) {
            return data.target.column == target;
        });
        if (filter.length == 0) {
            visualInteractionInfo += " for all " + target + "s";
        }
        else {
            visualInteractionInfo += " for " + filter[0].equals;
        }
        return visualInteractionInfo;
    }
    exports.getTargetInteractionFilter = getTargetInteractionFilter;
    function getVisualCardPos(visual, cardWidth, offset) {
        var leftDistance = visual.layout.x;
        var rightX = leftDistance + visual.layout.width;
        var rightDistance = global.page.defaultSize.width - rightX;
        var position = {
            x: 0,
            y: 0,
            pos: ""
        };
        if (rightDistance > leftDistance) {
            position.x = offset + rightX;
            position.pos = "right";
        }
        else {
            position.x = leftDistance - offset - cardWidth;
            position.pos = "left";
        }
        position.y = offset + visual.layout.y;
        return position;
    }
    exports.getVisualCardPos = getVisualCardPos;
    function getVisualData(visual) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var visualData, headers, rows, i, values, j, dataArray_1, i, dataArray, intArray;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, visual.exportData()];
                    case 1:
                        visualData = _b.sent();
                        visualData = visualData.data;
                        headers = visualData.slice(0, visualData.indexOf('\r')).split(',');
                        rows = visualData.slice(visualData.indexOf('\n') + 1).split(/\r?\n/);
                        rows.pop();
                        visualData = new Map();
                        for (i = 0; i < rows.length; i++) {
                            values = rows[i].split(',');
                            for (j = 0; j < headers.length; j++) {
                                dataArray_1 = (_a = visualData.get(headers[j])) !== null && _a !== void 0 ? _a : [];
                                dataArray_1.push(values[j]);
                                visualData.set(headers[j], dataArray_1);
                            }
                        }
                        for (i = 0; i < headers.length; i++) {
                            dataArray = visualData.get(headers[i]);
                            if (!isNaN(Number(dataArray[0]))) {
                                dataArray = dataArray.map(function (str) {
                                    return Number(str);
                                });
                                intArray = [];
                                intArray.push(Math.min.apply(Math, dataArray));
                                intArray.push(Math.max.apply(Math, dataArray));
                                dataArray = intArray;
                            }
                            dataArray = Array.from(new Set(dataArray));
                            visualData.set(headers[i], dataArray);
                        }
                        return [2, visualData];
                }
            });
        });
    }
    exports.getVisualData = getVisualData;
    function getVisualIndex(name) {
        var index = global.currentVisuals.findIndex(function (visual) {
            return visual.name == name;
        });
        return index;
    }
    exports.getVisualIndex = getVisualIndex;
    function getVisualInfos(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var type, visualInfos, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        type = getTypeName(visual);
                        visualInfos = { generalImages: [], generalInfos: [], dataImages: [], dataInfos: [], interactionImages: [], interactionInfos: [] };
                        _a = type;
                        switch (_a) {
                            case 'Card': return [3, 1];
                            case 'Line Clustered Column Combo Chart': return [3, 3];
                            case 'Line Chart': return [3, 5];
                            case 'Clustered Bar Chart': return [3, 7];
                            case 'Slicer': return [3, 9];
                        }
                        return [3, 11];
                    case 1: return [4, (0, basicVisualContent_1.getCardInfo)(visual)];
                    case 2:
                        visualInfos = _b.sent();
                        return [3, 12];
                    case 3: return [4, (0, complexVisualContent_1.getLineClusteredColumnComboChartInfo)(visual)];
                    case 4:
                        visualInfos = _b.sent();
                        return [3, 12];
                    case 5: return [4, (0, lineChartVisualContent_1.getLineChartInfo)(visual)];
                    case 6:
                        visualInfos = _b.sent();
                        return [3, 12];
                    case 7: return [4, (0, barChartVisualContent_1.getClusteredBarChartInfo)(visual)];
                    case 8:
                        visualInfos = _b.sent();
                        return [3, 12];
                    case 9: return [4, (0, basicVisualContent_1.getSlicerInfo)(visual)];
                    case 10:
                        visualInfos = _b.sent();
                        return [3, 12];
                    case 11: return [3, 12];
                    case 12: return [2, visualInfos];
                }
            });
        });
    }
    exports.getVisualInfos = getVisualInfos;
    function getVisuals() {
        return __awaiter(this, void 0, void 0, function () {
            var visuals;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, global.page.getVisuals()];
                    case 1:
                        visuals = _a.sent();
                        global.setVisuals(visuals);
                        sortVisuals();
                        removeDesignVisuals();
                        global.setAllVisuals(global.currentVisuals);
                        return [2];
                }
            });
        });
    }
    exports.getVisuals = getVisuals;
    function getVisualTitle(visual) {
        var title = visual.title;
        if (title) {
            return title;
        }
        else {
            return getTypeName(visual);
        }
    }
    exports.getVisualTitle = getVisualTitle;
    function getTypeName(visual) {
        var typeName = visual.type.replaceAll(/([A-Z])/g, ' $1').trim();
        typeName = firstLetterToUpperCase(typeName);
        return typeName;
    }
    exports.getTypeName = getTypeName;
    function isVisible(visual, selectorObject) {
        return __awaiter(this, void 0, void 0, function () {
            var selector, visible;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selector = {
                            objectName: selectorObject,
                            propertyName: "visible"
                        };
                        return [4, visual.getProperty(selector)];
                    case 1:
                        visible = _a.sent();
                        return [2, visible.value];
                }
            });
        });
    }
    exports.isVisible = isVisible;
    function orderSettingsVisuals(allVisuals) {
        var visDatas = global.settings.visuals;
        global.settings.visuals = [];
        var _loop_1 = function (visual) {
            visData = visDatas.filter(function (element) {
                return element.id === visual.name;
            });
            global.settings.visuals.push(visData[0]);
        };
        var visData;
        for (var _i = 0, allVisuals_1 = allVisuals; _i < allVisuals_1.length; _i++) {
            var visual = allVisuals_1[_i];
            _loop_1(visual);
        }
    }
    exports.orderSettingsVisuals = orderSettingsVisuals;
    function recreateInteractionExampleButton() {
        var interactionButton = document.getElementById("interactionExample");
        if (!interactionButton) {
            var visual = global.currentVisuals[global.currentVisualIndex];
            var parent_1 = document.getElementById("visualInfoTabs");
            if (parent_1) {
                createInteractionExampleButton("interactionTab", visual);
            }
            parent_1 = document.getElementById("visualInfo");
            if (parent_1) {
                createInteractionExampleButton("visualInfo", visual);
            }
        }
    }
    exports.recreateInteractionExampleButton = recreateInteractionExampleButton;
    function removeContainerOffset() {
        var container = document.getElementById("embed-container");
        container.style.marginTop = "0px";
    }
    exports.removeContainerOffset = removeContainerOffset;
    function removeDesignVisuals() {
        var visuals = global.currentVisuals.filter(function (visual) {
            return visual.type !== "shape" && visual.type !== "basicShape";
        });
        global.setVisuals(visuals);
    }
    function removeOnboarding() {
        removeContainerOffset();
        global.setInteractionMode(false);
        global.setIsGuidedTour(false);
        toggleFilter(false);
        endExplorationMode();
        elements.removeElement("onboarding");
        (0, disableArea_1.removeFrame)();
    }
    exports.removeOnboarding = removeOnboarding;
    function removeOnboardingOverlay() {
        global.currentVisuals.forEach(function (visual) {
            elements.removeElement(visual.name);
        });
        elements.removeElement("filter");
    }
    exports.removeOnboardingOverlay = removeOnboardingOverlay;
    function resizeEmbed(filterWidth) {
        document.getElementById("embed-container").style.cssText = "top:0px;left:0px;width:".concat(global.page.defaultSize.width + filterWidth, "px;height:").concat(global.page.defaultSize.height + global.settings.reportOffset.top + global.footerHeight, "px;");
    }
    exports.resizeEmbed = resizeEmbed;
    function saveIntInput(inputId) {
        var value;
        var input = document.getElementById(inputId);
        if (!(input === null || input === void 0 ? void 0 : input.value)) {
            value = 0;
        }
        else {
            value = parseInt(input === null || input === void 0 ? void 0 : input.value);
        }
        return value;
    }
    exports.saveIntInput = saveIntInput;
    function sortVisuals() {
        global.currentVisuals.sort(function (a, b) {
            if (a.layout.x < b.layout.x) {
                return -1;
            }
            else if (a.layout.x > b.layout.x) {
                return 1;
            }
            else {
                if (a.layout.y < b.layout.y) {
                    return -1;
                }
                else {
                    return 1;
                }
            }
        });
    }
    function startExplorationMode() {
        global.setExplorationMode(true);
        var button = document.getElementById("dashboardExploration");
        button.innerHTML = "End Dashboard Exploration";
    }
    exports.startExplorationMode = startExplorationMode;
    function toggleFilter(open) {
        var newSettings = {
            panes: {
                filters: {
                    expanded: open,
                    visible: true
                },
                pageNavigation: {
                    visible: true
                }
            }
        };
        global.report.updateSettings(newSettings);
        if (open) {
            resizeEmbed(global.filterOpenedWidth);
        }
        else {
            resizeEmbed(global.filterClosedWidth);
        }
    }
    exports.toggleFilter = toggleFilter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/infoCards.ts":
/*!********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/infoCards.ts ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./disableArea */ "./AppOwnsData/wwwroot/onboarding/ts/disableArea.ts"), __webpack_require__(/*! ./introCards */ "./AppOwnsData/wwwroot/onboarding/ts/introCards.ts"), __webpack_require__(/*! ./filterInfoCards */ "./AppOwnsData/wwwroot/onboarding/ts/filterInfoCards.ts"), __webpack_require__(/*! ./visualInfo */ "./AppOwnsData/wwwroot/onboarding/ts/visualInfo.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, elements, disable, introCards_1, filterInfoCards_1, visualInfo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.previousInfoCard = exports.nextInfoCard = exports.removeInfoCard = exports.createInfoCard = void 0;
    function createInfoCard(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var position, style, visualData;
            return __generator(this, function (_a) {
                disable.disableFrame();
                disable.createDisabledArea(visual);
                position = helpers.getVisualCardPos(visual, global.infoCardWidth, global.infoCardMargin);
                style = helpers.getCardStyle(position.y, position.x, global.infoCardWidth, "");
                if (position.pos === "left") {
                    helpers.createCard("infoCard", style, "rectLeftBig");
                    helpers.createCloseButton("closeButton", "closeButtonPlacementBig positionLeft", helpers.getCloseFunction(), "infoCard");
                }
                else {
                    helpers.createCard("infoCard", style, "rectRightBig");
                    helpers.createCloseButton("closeButton", "closeButtonPlacementBig", helpers.getCloseFunction(), "infoCard");
                }
                visualData = helpers.getDataOfVisual(visual);
                helpers.createCardContent(visualData.title, "", "infoCard");
                (0, visualInfo_1.createVisualInfo)(visual);
                helpers.createCardButtons("previous", "next");
                return [2];
            });
        });
    }
    exports.createInfoCard = createInfoCard;
    function removeInfoCard() {
        elements.removeElement("infoCard");
        elements.removeElement("disabledUpper");
        elements.removeElement("disabledLower");
        elements.removeElement("disabledRight");
        elements.removeElement("disabledLeft");
        disable.removeFrame();
    }
    exports.removeInfoCard = removeInfoCard;
    function nextInfoCard() {
        if (global.currentVisualIndex == global.currentVisuals.length - 1) {
            global.setCurrentVisualIndex(global.currentVisualIndex + 1);
            removeInfoCard();
            (0, filterInfoCards_1.createFilterInfoCard)();
        }
        else {
            if (!global.isGuidedTour && global.currentVisualIndex == global.currentVisuals.length) {
                global.setCurrentVisualIndex(0);
            }
            else {
                global.setCurrentVisualIndex(global.currentVisualIndex + 1);
            }
            removeInfoCard();
            createInfoCard(global.currentVisuals[global.currentVisualIndex]);
        }
    }
    exports.nextInfoCard = nextInfoCard;
    function previousInfoCard() {
        if (global.currentVisualIndex == 0) {
            removeInfoCard();
            if (global.isGuidedTour) {
                (0, introCards_1.createIntroCard)();
            }
            else {
                global.setCurrentVisualIndex(global.currentVisuals.length);
                (0, filterInfoCards_1.createFilterInfoCard)();
            }
        }
        else {
            if (global.isGuidedTour && global.currentVisualIndex == global.currentVisuals.length) {
                disable.disableFilter();
            }
            global.setCurrentVisualIndex(global.currentVisualIndex - 1);
            removeInfoCard();
            createInfoCard(global.currentVisuals[global.currentVisualIndex]);
        }
    }
    exports.previousInfoCard = previousInfoCard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/interactionExample.ts":
/*!*****************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/interactionExample.ts ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./infoCards */ "./AppOwnsData/wwwroot/onboarding/ts/infoCards.ts"), __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./disableArea */ "./AppOwnsData/wwwroot/onboarding/ts/disableArea.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./basicVisualContent */ "./AppOwnsData/wwwroot/onboarding/ts/basicVisualContent.ts"), __webpack_require__(/*! ./barChartVisualContent */ "./AppOwnsData/wwwroot/onboarding/ts/barChartVisualContent.ts"), __webpack_require__(/*! ./lineChartVisualContent */ "./AppOwnsData/wwwroot/onboarding/ts/lineChartVisualContent.ts"), __webpack_require__(/*! ./complexVisualContent */ "./AppOwnsData/wwwroot/onboarding/ts/complexVisualContent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, infoCard, helpers, global, disable, elements, basicVisualContent_1, barChartVisualContent_1, lineChartVisualContent_1, complexVisualContent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.removeInteractionCard = exports.getInteractionText = exports.createInteractionCard = exports.startInteractionExample = void 0;
    function startInteractionExample() {
        global.setInteractionMode(true);
        infoCard.removeInfoCard();
        createInteractionCard(global.currentVisuals[global.currentVisualIndex]);
    }
    exports.startInteractionExample = startInteractionExample;
    function createInteractionCard(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var position, style;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        disable.disableFrame();
                        disable.createDisabledArea(visual);
                        position = helpers.getVisualCardPos(visual, global.infoCardWidth, global.infoCardMargin);
                        style = helpers.getCardStyle(position.y, position.x, global.infoCardWidth, "");
                        if (position.pos === "left") {
                            helpers.createCard("interactionCard", style, "rectLeftBig");
                            helpers.createCloseButton("closeButton", "closeButtonPlacementBig positionLeft", helpers.getCloseFunction(), "interactionCard");
                        }
                        else {
                            helpers.createCard("interactionCard", style, "rectRightBig");
                            helpers.createCloseButton("closeButton", "closeButtonPlacementBig", helpers.getCloseFunction(), "interactionCard");
                        }
                        helpers.createCardContent(global.settings.interactionExample.title, "", "interactionCard");
                        return [4, createInteractionInfo(visual)];
                    case 1:
                        _a.sent();
                        helpers.createCardButtons("", "back to visual");
                        return [2];
                }
            });
        });
    }
    exports.createInteractionCard = createInteractionCard;
    function createInteractionInfo(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var visualData, interactionInfo, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        visualData = helpers.getDataOfInteractionVisual(visual);
                        _a = visualData.clickInfosStatus;
                        switch (_a) {
                            case global.infoStatus.original: return [3, 1];
                            case global.infoStatus.changed: return [3, 3];
                            case global.infoStatus.added: return [3, 3];
                        }
                        return [3, 4];
                    case 1: return [4, getInteractionText(visual)];
                    case 2:
                        interactionInfo = _b.sent();
                        return [3, 5];
                    case 3:
                        interactionInfo = visualData.changedClickInfo;
                        return [3, 5];
                    case 4:
                        interactionInfo = "Please click on an element of the visualization to filter the report.";
                        return [3, 5];
                    case 5:
                        document.getElementById("contentText").innerHTML = interactionInfo;
                        return [2];
                }
            });
        });
    }
    function getInteractionText(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var type, interactionInfo, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        type = helpers.getTypeName(visual);
                        _a = type;
                        switch (_a) {
                            case 'Line Clustered Column Combo Chart': return [3, 1];
                            case 'Line Chart': return [3, 3];
                            case 'Clustered Bar Chart': return [3, 5];
                            case 'Slicer': return [3, 7];
                        }
                        return [3, 9];
                    case 1: return [4, (0, complexVisualContent_1.getLineClusteredColumnComboChartInteractionExample)(visual)];
                    case 2:
                        interactionInfo = _b.sent();
                        return [3, 10];
                    case 3: return [4, (0, lineChartVisualContent_1.getLineChartInteractionExample)(visual)];
                    case 4:
                        interactionInfo = _b.sent();
                        return [3, 10];
                    case 5: return [4, (0, barChartVisualContent_1.getBarChartInteractionExample)(visual)];
                    case 6:
                        interactionInfo = _b.sent();
                        return [3, 10];
                    case 7: return [4, (0, basicVisualContent_1.getSlicerInteractionExample)(visual)];
                    case 8:
                        interactionInfo = _b.sent();
                        return [3, 10];
                    case 9: return [3, 10];
                    case 10: return [2, interactionInfo];
                }
            });
        });
    }
    exports.getInteractionText = getInteractionText;
    function removeInteractionCard() {
        elements.removeElement("interactionCard");
        elements.removeElement("disabledUpper");
        elements.removeElement("disabledLower");
        elements.removeElement("disabledRight");
        elements.removeElement("disabledLeft");
        disable.removeFrame();
    }
    exports.removeInteractionCard = removeInteractionCard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/introCards.ts":
/*!*********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/introCards.ts ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./disableArea */ "./AppOwnsData/wwwroot/onboarding/ts/disableArea.ts"), __webpack_require__(/*! ./onboarding */ "./AppOwnsData/wwwroot/onboarding/ts/onboarding.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, elements_1, disableArea_1, onboarding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getStartFunction = exports.removeIntroCard = exports.createIntroCard = void 0;
    function createIntroCard() {
        (0, disableArea_1.disableAll)();
        var style = helpers.getCardStyle(global.introCardMargin, 0, global.introCardWidth, "") + "right:0;margin:auto;";
        helpers.createCard("introCard", style, "");
        helpers.createCloseButton("closeButton", "closeButtonPlacementBig", helpers.removeOnboarding, "introCard");
        helpers.createCardContent(getIntroTitle(), getIntroText(), "introCard");
        helpers.createCardButtons("skip", "start");
    }
    exports.createIntroCard = createIntroCard;
    function removeIntroCard() {
        (0, elements_1.removeElement)("introCard");
        (0, elements_1.removeElement)("disabledPage");
    }
    exports.removeIntroCard = removeIntroCard;
    function getIntroTitle() {
        if (global.isGuidedTour) {
            return "Welcome to the guided tour of " + global.page.displayName;
        }
        else {
            return "Welcome to the dashboard exploration of " + global.page.displayName;
        }
    }
    function getIntroText() {
        if (global.isGuidedTour) {
            return "The guided tour will show you the outline of this dashboard.<br>You can navigate through all visualizations with the next and previous buttons.<br>It will introduce you to the different kinds of graphs and elements and it explains how you can interact with them.";
        }
        else {
            return "In the dashboard exploration mode you can freely skim through the visualizations of this dashboard. You can end the exploration mode at any time by pressing the 'End Dashboard Exploration' button.<br>When clicking on a graph or element an explanation will appear. You can then navigate through the whole dashboard with the next and previous buttons.<br>When you close the explanation bubble you can select a new visualization to get information on that one.";
        }
    }
    function getStartFunction() {
        if (global.isGuidedTour) {
            return onboarding_1.startGuidedTour;
        }
        else {
            return onboarding_1.createOnboardingOverlay;
        }
    }
    exports.getStartFunction = getStartFunction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/lineChartVisualContent.ts":
/*!*********************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/lineChartVisualContent.ts ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ../assets/info.png */ "./AppOwnsData/wwwroot/onboarding/assets/info.png"), __webpack_require__(/*! ../assets/y-axis.png */ "./AppOwnsData/wwwroot/onboarding/assets/y-axis.png"), __webpack_require__(/*! ../assets/x-axis.png */ "./AppOwnsData/wwwroot/onboarding/assets/x-axis.png"), __webpack_require__(/*! ../assets/legend.png */ "./AppOwnsData/wwwroot/onboarding/assets/legend.png"), __webpack_require__(/*! ../assets/line-graph.png */ "./AppOwnsData/wwwroot/onboarding/assets/line-graph.png"), __webpack_require__(/*! ../assets/element-click.png */ "./AppOwnsData/wwwroot/onboarding/assets/element-click.png"), __webpack_require__(/*! ../assets/axis-click.png */ "./AppOwnsData/wwwroot/onboarding/assets/axis-click.png"), __webpack_require__(/*! ../assets/legend-click.png */ "./AppOwnsData/wwwroot/onboarding/assets/legend-click.png")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, info_png_1, y_axis_png_1, x_axis_png_1, legend_png_1, line_graph_png_1, element_click_png_1, axis_click_png_1, legend_click_png_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getLineChartInteractionExample = exports.getLineChartInfo = void 0;
    function getLineChartInfo(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var axis, dataName, legend, hasYAxis, hasXAxis, hasLegend, hasTooltip, generalImages, generalInfos, dataImages, dataInfos, interactionImages, interactionInfos, lineInfo, interactionInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldColumn(visual, "Category")];
                    case 1:
                        axis = _a.sent();
                        return [4, helpers.getFieldMeasure(visual, "Y")];
                    case 2:
                        dataName = _a.sent();
                        return [4, helpers.getFieldColumn(visual, "Series")];
                    case 3:
                        legend = _a.sent();
                        hasYAxis = helpers.isVisible(visual, "categoryAxis");
                        hasXAxis = helpers.isVisible(visual, "valueAxis");
                        hasLegend = helpers.isVisible(visual, "legend");
                        hasTooltip = helpers.isVisible(visual, "tooltip");
                        generalImages = [];
                        generalInfos = [];
                        dataImages = [];
                        dataInfos = [];
                        interactionImages = [];
                        interactionInfos = [];
                        generalImages.push(info_png_1.default);
                        generalInfos.push("This element is a line chart.");
                        dataImages.push(info_png_1.default);
                        dataInfos.push("This chart displayes the " + dataName + ".");
                        lineInfo = "";
                        if (axis) {
                            lineInfo += "The lines show the development of the " + dataName + " over the " + axis + ".<br>";
                        }
                        if (legend) {
                            lineInfo += "Each line represents a different " + legend + ", they are distinguishable by their color.";
                        }
                        dataImages.push(line_graph_png_1.default);
                        dataInfos.push(lineInfo);
                        interactionInfo = "With clicking on a line you can filter the report by ";
                        if (axis && !legend) {
                            interactionInfo += axis + ".";
                        }
                        else if (!axis && legend) {
                            interactionInfo += legend + ".";
                        }
                        else {
                            interactionInfo += axis + " and " + legend + ".";
                        }
                        if (hasTooltip) {
                            interactionInfo += "</br>You can hover over a line to get detailed information about its data.";
                        }
                        interactionImages.push(element_click_png_1.default);
                        interactionInfos.push(interactionInfo);
                        if (hasXAxis) {
                            generalImages.push(x_axis_png_1.default);
                            generalInfos.push("The X-axis displayes the values of the " + axis + ".");
                            interactionImages.push(axis_click_png_1.default);
                            interactionInfos.push("When clicking on one of the x-axis-labels you can filter the report by " + axis + ".");
                        }
                        if (hasYAxis) {
                            generalImages.push(y_axis_png_1.default);
                            generalInfos.push("The Y-axis displayes the values of the " + dataName + ".");
                        }
                        if (hasLegend) {
                            generalImages.push(legend_png_1.default);
                            generalInfos.push("The legend displayes the values of the " + legend + " and its corresponding color.");
                            interactionImages.push(legend_click_png_1.default);
                            interactionInfos.push("When clicking on one of the labels in the legend you can filter the report by " + legend + ".");
                        }
                        return [2, { generalImages: generalImages, generalInfos: generalInfos, dataImages: dataImages, dataInfos: dataInfos, interactionImages: interactionImages, interactionInfos: interactionInfos }];
                }
            });
        });
    }
    exports.getLineChartInfo = getLineChartInfo;
    function getLineChartInteractionExample(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var axis, axisValues, legend, legendValues, middelOfAxisValues, interactionInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getFieldColumn(visual, "Category")];
                    case 1:
                        axis = _a.sent();
                        return [4, helpers.getSpecificDataInfo(visual, axis)];
                    case 2:
                        axisValues = _a.sent();
                        return [4, helpers.getFieldColumn(visual, "Series")];
                    case 3:
                        legend = _a.sent();
                        return [4, helpers.getSpecificDataInfo(visual, legend)];
                    case 4:
                        legendValues = _a.sent();
                        middelOfAxisValues = Math.floor(axisValues.length / 2);
                        interactionInfo = "Please click on the line";
                        if (axisValues && legendValues) {
                            interactionInfo += " representing " + legendValues[0] + " at the area of " + axisValues[middelOfAxisValues] + ".";
                        }
                        else if (axisValues) {
                            interactionInfo += " at the area of " + axisValues[middelOfAxisValues] + ".";
                        }
                        else if (legendValues) {
                            interactionInfo += " representing " + legendValues[0] + ".";
                        }
                        else {
                            interactionInfo += ".";
                        }
                        return [2, interactionInfo];
                }
            });
        });
    }
    exports.getLineChartInteractionExample = getLineChartInteractionExample;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/listOfVisuals.ts":
/*!************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/listOfVisuals.ts ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./draggableList */ "./AppOwnsData/wwwroot/onboarding/ts/draggableList.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, elements, draggableList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.addVisualTextarea = exports.toggleVisability = exports.createListOfVisuals = void 0;
    function createListOfVisuals() {
        global.settings.visuals.forEach(function (visual) {
            var divAttributes = global.createDivAttributes();
            divAttributes.id = visual.id;
            divAttributes.classes = "draggable";
            divAttributes.style = "padding: 5px;border: 1px solid black;border-radius: 5px";
            divAttributes.content = "<p style=\"display: inline-block;width:300px;margin-bottom: -5px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\"><svg style=\"display: inline;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"gray\" class=\"bi bi-list mb-1\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\"/></svg> "
                + visual.title + "</p>";
            divAttributes.eventType = 'mousedown';
            divAttributes.eventFunction = draggableList_1.mouseDownHandler;
            divAttributes.parentId = "visualsList";
            elements.createDiv(divAttributes);
            createToogleVisabilityButton(visual.id);
            createCollapseForm(visual.id);
        });
    }
    exports.createListOfVisuals = createListOfVisuals;
    function createToogleVisabilityButton(visualID) {
        var visualData = helpers.getDataWithId(visualID);
        if (visualData.disabled) {
            helpers.createDisableButton(visualID);
        }
        else {
            helpers.createEnableButton(visualID);
        }
    }
    function toggleVisability(listElement) {
        var disableElement = listElement.querySelector(".disableVisualButton");
        var visualData = helpers.getDataWithId(listElement.id);
        if (visualData.disabled) {
            disableElement.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-eye-slash mb-2\" viewBox=\"0 0 16 16\"><path d=\"M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z\"/><path d=\"M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z\"/><path d=\"M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z\"/></svg>";
            visualData.disabled = false;
        }
        else {
            disableElement.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-eye mb-2\" viewBox=\"0 0 16 16\"><path d=\"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z\"/><path d=\"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z\"/></svg>";
            visualData.disabled = true;
        }
    }
    exports.toggleVisability = toggleVisability;
    function createCollapseForm(visualID) {
        return __awaiter(this, void 0, void 0, function () {
            var visualData, visualInfos, divAttributes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        visualData = helpers.getDataWithId(visualID);
                        return [4, getVisualInfos(visualData)];
                    case 1:
                        visualInfos = _a.sent();
                        helpers.createCollapseButton("collapseButton" + visualID, visualID);
                        divAttributes = global.createDivAttributes();
                        divAttributes.id = "collapseForm" + visualID;
                        divAttributes.classes = "collapse collapseForm";
                        divAttributes.style = "margin-top: 5px;padding: 10px;border: 1px solid black;border-radius: 5px;box-shadow: 5px 5px 5px gray,0px 5px 5px gray";
                        divAttributes.parentId = visualID;
                        elements.createDiv(divAttributes);
                        helpers.createTitleForm(visualID, visualData.title);
                        helpers.createInfoForm("general", visualID, visualInfos.generalInfos);
                        helpers.createInfoForm("data", visualID, visualInfos.dataInfos);
                        helpers.createInfoForm("interaction", visualID, visualInfos.interactionInfos);
                        return [2];
                }
            });
        });
    }
    function getVisualInfos(visualData) {
        return __awaiter(this, void 0, void 0, function () {
            var visual, visualInfos, generalInfos, dataInfos, interactionInfos, i, i, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        visual = global.allVisuals.find(function (visual) {
                            return visual.name == visualData.id;
                        });
                        return [4, helpers.getVisualInfos(visual)];
                    case 1:
                        visualInfos = _a.sent();
                        generalInfos = [];
                        dataInfos = [];
                        interactionInfos = [];
                        for (i = 0; i < visualData.generalInfosStatus.length; ++i) {
                            switch (visualData.generalInfosStatus[i]) {
                                case global.infoStatus.original:
                                    generalInfos.push(visualInfos.generalInfos[i]);
                                    break;
                                case global.infoStatus.changed:
                                case global.infoStatus.added:
                                    generalInfos.push(visualData.changedGeneralInfos[i]);
                                    break;
                                default:
                                    break;
                            }
                        }
                        for (i = 0; i < visualData.dataInfosStatus.length; ++i) {
                            switch (visualData.dataInfosStatus[i]) {
                                case global.infoStatus.original:
                                    dataInfos.push(visualInfos.dataInfos[i]);
                                    break;
                                case global.infoStatus.changed:
                                case global.infoStatus.added:
                                    dataInfos.push(visualData.changedDataInfos[i]);
                                    break;
                                default:
                                    break;
                            }
                        }
                        for (i = 0; i < visualData.interactionInfosStatus.length; ++i) {
                            switch (visualData.interactionInfosStatus[i]) {
                                case global.infoStatus.original:
                                    interactionInfos.push(visualInfos.interactionInfos[i]);
                                    break;
                                case global.infoStatus.changed:
                                case global.infoStatus.added:
                                    interactionInfos.push(visualData.changedInteractionInfos[i]);
                                    break;
                                default:
                                    break;
                            }
                        }
                        return [2, { generalInfos: generalInfos, dataInfos: dataInfos, interactionInfos: interactionInfos }];
                }
            });
        });
    }
    function addVisualTextarea(category, visualID) {
        var textareaAttributes = global.createTextareaAttributes();
        switch (category) {
            case "general":
                textareaAttributes.class = "generalInfos" + visualID;
                textareaAttributes.parentId = "addGeneralInfo" + visualID;
                break;
            case "data":
                textareaAttributes.class = "dataInfos" + visualID;
                textareaAttributes.parentId = "addDataInfo" + visualID;
                break;
            case "interaction":
                textareaAttributes.class = "interactionInfos" + visualID;
                textareaAttributes.parentId = "addInteractionInfo" + visualID;
                break;
            default:
                break;
        }
        textareaAttributes.style = "display: block;width: 95%;margin-bottom: 5px;margin-left: 10px;background-color: lightsteelblue;";
        elements.createTextarea(textareaAttributes, true);
    }
    exports.addVisualTextarea = addVisualTextarea;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/onboarding.ts":
/*!*********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/onboarding.ts ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./introCards */ "./AppOwnsData/wwwroot/onboarding/ts/introCards.ts"), __webpack_require__(/*! ./infoCards */ "./AppOwnsData/wwwroot/onboarding/ts/infoCards.ts"), __webpack_require__(/*! ./disableArea */ "./AppOwnsData/wwwroot/onboarding/ts/disableArea.ts"), __webpack_require__(/*! ./interactionExample */ "./AppOwnsData/wwwroot/onboarding/ts/interactionExample.ts"), __webpack_require__(/*! ./createSettings */ "./AppOwnsData/wwwroot/onboarding/ts/createSettings.ts"), __webpack_require__(/*! ../../js/embed */ "./AppOwnsData/wwwroot/js/embed.js"), __webpack_require__(/*! ./showReportChanges */ "./AppOwnsData/wwwroot/onboarding/ts/showReportChanges.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, elements, introCards_1, infoCards_1, disableArea_1, interactionExample_1, createSettings_1, embed_1, showReportChanges_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createOnboardingOverlay = exports.startGuidedTour = exports.createDashboardExploration = exports.createGuidedTour = void 0;
    $(document).ready(function () {
        global.setReport(embed_1.report);
        global.report.on("loaded", function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, helpers.getActivePage()];
                        case 1:
                            _a.sent();
                            return [4, helpers.getVisuals()];
                        case 2:
                            _a.sent();
                            return [4, helpers.getSettings()];
                        case 3:
                            _a.sent();
                            helpers.createEditOnboardingButtons();
                            helpers.createOnboardingButtons();
                            helpers.resizeEmbed(global.filterClosedWidth);
                            global.setContainerPaddingTop(global.report.iframe.offsetTop + global.settings.reportOffset.top);
                            global.setContainerPaddingLeft(global.report.iframe.offsetLeft + global.settings.reportOffset.left);
                            elements.addStylesheet("/onboarding/css/onboarding.css");
                            createGuidedTour();
                            return [2];
                    }
                });
            });
        });
        global.report.on("rendered", function () {
            return __awaiter(this, void 0, void 0, function () {
                var oldPage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            oldPage = global.page.name;
                            return [4, helpers.getActivePage()];
                        case 1:
                            _a.sent();
                            if (!(global.page.name !== oldPage && global.page.displayName !== "Info")) return [3, 4];
                            return [4, helpers.getVisuals()];
                        case 2:
                            _a.sent();
                            return [4, (0, createSettings_1.createSettings)()];
                        case 3:
                            _a.sent();
                            helpers.resizeEmbed(global.filterClosedWidth);
                            _a.label = 4;
                        case 4: return [2];
                    }
                });
            });
        });
        global.report.on("dataSelected", function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var selectedData;
                return __generator(this, function (_a) {
                    if (global.interactionMode) {
                        selectedData = event.detail.dataPoints[0];
                        if (selectedData) {
                            global.setSelectedTargets(selectedData.identity);
                            (0, showReportChanges_1.showReportChanges)();
                        }
                    }
                    else {
                        helpers.recreateInteractionExampleButton();
                    }
                    return [2];
                });
            });
        });
    });
    function createGuidedTour() {
        helpers.removeOnboarding();
        helpers.toggleFilter(true);
        global.setIsGuidedTour(true);
        helpers.createOnboarding();
        (0, introCards_1.createIntroCard)();
    }
    exports.createGuidedTour = createGuidedTour;
    function createDashboardExploration() {
        if (global.explorationMode) {
            helpers.removeOnboarding();
        }
        else {
            helpers.removeOnboarding();
            helpers.toggleFilter(true);
            helpers.startExplorationMode();
            helpers.createOnboarding();
            (0, introCards_1.createIntroCard)();
        }
    }
    exports.createDashboardExploration = createDashboardExploration;
    function startGuidedTour() {
        global.setCurrentVisualIndex(0);
        (0, introCards_1.removeIntroCard)();
        (0, infoCards_1.createInfoCard)(global.currentVisuals[global.currentVisualIndex]);
    }
    exports.startGuidedTour = startGuidedTour;
    function createOnboardingOverlay() {
        global.setInteractionMode(false);
        (0, disableArea_1.removeFrame)();
        (0, introCards_1.removeIntroCard)();
        (0, infoCards_1.removeInfoCard)();
        (0, interactionExample_1.removeInteractionCard)();
        global.currentVisuals.forEach(function (visual) {
            var style = helpers.getClickableStyle(visual.layout.y, visual.layout.x, visual.layout.width, visual.layout.height);
            createOverlay(visual.name, style);
        });
        var style = helpers.getClickableStyle(-global.settings.reportOffset.top, global.page.defaultSize.width, global.filterOpenedWidth, global.page.defaultSize.height);
        createOverlay("filter", style);
    }
    exports.createOnboardingOverlay = createOnboardingOverlay;
    function createOverlay(id, style) {
        var attributes = global.createDivAttributes();
        attributes.id = id;
        attributes.style = style;
        attributes.clickable = true;
        attributes.parentId = "onboarding";
        elements.createDiv(attributes);
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/showReportChanges.ts":
/*!****************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/showReportChanges.ts ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./disableArea */ "./AppOwnsData/wwwroot/onboarding/ts/disableArea.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./interactionExample */ "./AppOwnsData/wwwroot/onboarding/ts/interactionExample.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, disable, elements, interactionExample_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.removeHintCard = exports.removeShowChangesCard = exports.createInteractionVisualOverlay = exports.createInteractionOverlay = exports.getShowReportChangesText = exports.showReportChanges = void 0;
    function showReportChanges() {
        disable.removeFrame();
        (0, interactionExample_1.removeInteractionCard)();
        removeShowChangesCard();
        removeHintCard();
        createInteractionOverlay();
        createHintCard();
        var style = "overflow: auto;position:fixed;top:10px;left:50%;margin-left:" + -(global.interactionCardWidth / 2) + "px;width:" + global.interactionCardWidth + "px;height:" + global.interactionCardHeight + "px;pointer-events:auto;border-radius:10px;background-color:lightsteelblue;z-index: 99 !important;";
        helpers.createCard("showChangesCard", style, "");
        helpers.addContainerOffset();
        helpers.createCloseButton("closeButton", "closeButtonPlacementBig", helpers.removeOnboarding, "showChangesCard");
        helpers.createCardContent(global.settings.interactionExample.title, createShowReportChangesInfo(), "showChangesCard");
        helpers.createCardButtons("", "back to visual");
    }
    exports.showReportChanges = showReportChanges;
    function createShowReportChangesInfo() {
        var reportChangesInfo;
        switch (global.settings.interactionExample.generalInfoStatus) {
            case global.infoStatus.original:
                reportChangesInfo = getShowReportChangesText();
                break;
            case global.infoStatus.changed:
            case global.infoStatus.added:
                reportChangesInfo = global.settings.interactionExample.changedGeneralInfo;
                break;
            case global.infoStatus.deleted:
                reportChangesInfo = "You can now click on one of the cards or graphs to get detailed information about its changes.";
                break;
            default:
                break;
        }
        return reportChangesInfo;
    }
    function getShowReportChangesText() {
        var allTargets = global.selectedTargets.map(function (_a) {
            var equals = _a.equals;
            return equals;
        });
        var allTargetsString = helpers.dataToString(allTargets);
        return "Can you see how the whole report changed?<br>All the visualizations were filtered by " + allTargetsString
            + ".<br>You can now click on one of the cards or graphs to get detailed information about its changes.";
    }
    exports.getShowReportChangesText = getShowReportChangesText;
    function createInteractionOverlay() {
        var visuals = global.currentVisuals.filter(function (visual) {
            return visual.type !== "slicer";
        });
        visuals.forEach(function (visual) {
            createInteractionVisualOverlay(visual);
        });
    }
    exports.createInteractionOverlay = createInteractionOverlay;
    function createInteractionVisualOverlay(visual) {
        var style = helpers.getClickableStyle(visual.layout.y, visual.layout.x, visual.layout.width, visual.layout.height);
        var attributes = global.createDivAttributes();
        attributes.id = visual.name;
        attributes.style = style;
        attributes.clickable = true;
        attributes.selectedTargets = global.selectedTargets;
        attributes.parentId = "onboarding";
        elements.createDiv(attributes);
    }
    exports.createInteractionVisualOverlay = createInteractionVisualOverlay;
    function createHintCard() {
        if (global.settings.interactionExample.nextVisualHint != "") {
            var nextVisual = helpers.getNextVisual();
            var visualWithBorder = document.getElementById(nextVisual.name);
            visualWithBorder.className += " greenBorder";
            var position = helpers.getVisualCardPos(nextVisual, global.hintCardWidth, global.hintCardMargin);
            var style = helpers.getClickableStyle(position.y, position.x, global.hintCardWidth, "") + "border-radius:10px;background-color:lightgreen;opacity: 0.85;z-index: 99 !important;";
            if (position.pos === "left") {
                helpers.createCard("hintCard", style, "rectLeftSmall");
                helpers.createCloseButton("hintCloseButton", "closeButtonPlacementSmall positionLeft", removeHintCard, "hintCard");
            }
            else {
                helpers.createCard("hintCard", style, "rectRightSmall");
                helpers.createCloseButton("hintCloseButton", "closeButtonPlacementSmall", removeHintCard, "hintCard");
            }
            helpers.createBasicCardContent(global.settings.interactionExample.nextVisualHint, "hintCard");
        }
    }
    function removeShowChangesCard() {
        elements.removeElement("showChangesCard");
    }
    exports.removeShowChangesCard = removeShowChangesCard;
    function removeHintCard() {
        var visualsWithBorder = document.getElementsByClassName("greenBorder");
        if (visualsWithBorder.length != 0) {
            visualsWithBorder[0].className += " noBorder";
        }
        elements.removeElement("hintCard");
    }
    exports.removeHintCard = removeHintCard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/showVisualsChanges.ts":
/*!*****************************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/showVisualsChanges.ts ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./disableArea */ "./AppOwnsData/wwwroot/onboarding/ts/disableArea.ts"), __webpack_require__(/*! ./basicVisualContent */ "./AppOwnsData/wwwroot/onboarding/ts/basicVisualContent.ts"), __webpack_require__(/*! ./complexVisualContent */ "./AppOwnsData/wwwroot/onboarding/ts/complexVisualContent.ts"), __webpack_require__(/*! ./showReportChanges */ "./AppOwnsData/wwwroot/onboarding/ts/showReportChanges.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, disable, basicVisualContent_1, complexVisualContent_1, showReportChanges_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getShowVisualChangesText = exports.showVisualChanges = void 0;
    function showVisualChanges(selectedVisual) {
        return __awaiter(this, void 0, void 0, function () {
            var visualData, position, style;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        visualData = helpers.getDataOfVisual(selectedVisual);
                        if (!(visualData.interactionChangedInfosStatus != global.infoStatus.deleted)) return [3, 2];
                        disable.disableFrame();
                        disable.createDisabledArea(selectedVisual);
                        position = helpers.getVisualCardPos(selectedVisual, global.infoCardWidth, global.infoCardMargin);
                        style = helpers.getCardStyle(position.y, position.x, global.infoCardWidth, "");
                        if (position.pos === "left") {
                            helpers.createCard("showChangesCard", style, "rectLeftBig");
                            helpers.createCloseButton("closeButton", "closeButtonPlacementBig positionLeft", helpers.removeOnboarding, "showChangesCard");
                        }
                        else {
                            helpers.createCard("showChangesCard", style, "rectRightBig");
                            helpers.createCloseButton("closeButton", "closeButtonPlacementBig", helpers.removeOnboarding, "showChangesCard");
                        }
                        helpers.createCardContent(global.settings.interactionExample.title, "", "showChangesCard");
                        return [4, createShowVisualChangesInfo(selectedVisual)];
                    case 1:
                        _a.sent();
                        helpers.createCardButtons("back to visual", "back to overview");
                        return [3, 3];
                    case 2:
                        (0, showReportChanges_1.showReportChanges)();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    }
    exports.showVisualChanges = showVisualChanges;
    function createShowVisualChangesInfo(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var visualData, visualChangeInfo, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        visualData = helpers.getDataOfInteractionVisual(visual);
                        _a = visualData.interactionChangedInfosStatus;
                        switch (_a) {
                            case global.infoStatus.original: return [3, 1];
                            case global.infoStatus.changed: return [3, 3];
                            case global.infoStatus.added: return [3, 3];
                        }
                        return [3, 4];
                    case 1: return [4, getShowVisualChangesText(visual)];
                    case 2:
                        visualChangeInfo = _b.sent();
                        return [3, 5];
                    case 3:
                        visualChangeInfo = visualData.changedInteractionChangedInfo;
                        return [3, 5];
                    case 4: return [3, 5];
                    case 5:
                        document.getElementById("contentText").innerHTML += visualChangeInfo;
                        return [2];
                }
            });
        });
    }
    function getShowVisualChangesText(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var allTargets, allTargetsString, visualChangeInfo, type, _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        allTargets = global.selectedTargets.map(function (_a) {
                            var equals = _a.equals;
                            return equals;
                        });
                        allTargetsString = helpers.dataToString(allTargets);
                        visualChangeInfo = "You can see that this visual was filtered by " + allTargetsString + ".<br>";
                        type = helpers.getTypeName(visual);
                        _a = type;
                        switch (_a) {
                            case 'Card': return [3, 1];
                            case 'Line Clustered Column Combo Chart': return [3, 3];
                            case 'Line Chart': return [3, 5];
                            case 'Clustered Bar Chart': return [3, 7];
                        }
                        return [3, 9];
                    case 1:
                        _b = visualChangeInfo;
                        return [4, (0, basicVisualContent_1.getCardChanges)(visual)];
                    case 2:
                        visualChangeInfo = _b + _f.sent();
                        return [3, 10];
                    case 3:
                        _c = visualChangeInfo;
                        return [4, (0, complexVisualContent_1.getLineClusteredColumnComboChartChanges)(visual)];
                    case 4:
                        visualChangeInfo = _c + _f.sent();
                        visualChangeInfo += displayCanFilterInfo();
                        return [3, 10];
                    case 5:
                        _d = visualChangeInfo;
                        return [4, (0, basicVisualContent_1.getChartChanges)(visual)];
                    case 6:
                        visualChangeInfo = _d + _f.sent();
                        visualChangeInfo += displayCanFilterInfo();
                        return [3, 10];
                    case 7:
                        _e = visualChangeInfo;
                        return [4, (0, basicVisualContent_1.getChartChanges)(visual)];
                    case 8:
                        visualChangeInfo = _e + _f.sent();
                        visualChangeInfo += displayCanFilterInfo();
                        return [3, 10];
                    case 9: return [3, 10];
                    case 10: return [2, visualChangeInfo];
                }
            });
        });
    }
    exports.getShowVisualChangesText = getShowVisualChangesText;
    function displayCanFilterInfo() {
        return "<br>You can also change the report filters by selecting a new element of this visual.";
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./AppOwnsData/wwwroot/onboarding/ts/visualInfo.ts":
/*!*********************************************************!*\
  !*** ./AppOwnsData/wwwroot/onboarding/ts/visualInfo.ts ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helperFunctions */ "./AppOwnsData/wwwroot/onboarding/ts/helperFunctions.ts"), __webpack_require__(/*! ./globalVariables */ "./AppOwnsData/wwwroot/onboarding/ts/globalVariables.ts"), __webpack_require__(/*! ./elements */ "./AppOwnsData/wwwroot/onboarding/ts/elements.ts"), __webpack_require__(/*! ./visualInfo */ "./AppOwnsData/wwwroot/onboarding/ts/visualInfo.ts"), __webpack_require__(/*! ../assets/dot.png */ "./AppOwnsData/wwwroot/onboarding/assets/dot.png")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, helpers, global, elements, info, dot_png_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createInfoList = exports.createTabsWithContent = exports.createVisualInfo = void 0;
    function createVisualInfo(visual) {
        return __awaiter(this, void 0, void 0, function () {
            var visualInfos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers.getVisualInfos(visual)];
                    case 1:
                        visualInfos = _a.sent();
                        info.createTabsWithContent(visual, visualInfos);
                        return [2];
                }
            });
        });
    }
    exports.createVisualInfo = createVisualInfo;
    function createTabsWithContent(visual, visualInfos) {
        var hasDataInfo = false;
        var hasInteractionInfo = false;
        var visualData = helpers.getDataOfVisual(visual);
        var generalImages = [];
        var generalInfos = [];
        var dataImages = [];
        var dataInfos = [];
        var interactionImages = [];
        var interactionInfos = [];
        for (var i = 0; i < visualData.generalInfosStatus.length; ++i) {
            switch (visualData.generalInfosStatus[i]) {
                case global.infoStatus.original:
                    generalImages.push(visualInfos.generalImages[i]);
                    generalInfos.push(visualInfos.generalInfos[i]);
                    break;
                case global.infoStatus.changed:
                case global.infoStatus.added:
                    generalImages.push(dot_png_1.default);
                    generalInfos.push(visualData.changedGeneralInfos[i]);
                    break;
                default:
                    break;
            }
        }
        for (var i = 0; i < visualData.dataInfosStatus.length; ++i) {
            switch (visualData.dataInfosStatus[i]) {
                case global.infoStatus.original:
                    dataImages.push(visualInfos.dataImages[i]);
                    dataInfos.push(visualInfos.dataInfos[i]);
                    break;
                case global.infoStatus.changed:
                case global.infoStatus.added:
                    dataImages.push(dot_png_1.default);
                    dataInfos.push(visualData.changedDataInfos[i]);
                    break;
                default:
                    break;
            }
        }
        for (var i = 0; i < visualData.interactionInfosStatus.length; ++i) {
            switch (visualData.interactionInfosStatus[i]) {
                case global.infoStatus.original:
                    interactionImages.push(visualInfos.interactionImages[i]);
                    interactionInfos.push(visualInfos.interactionInfos[i]);
                    break;
                case global.infoStatus.changed:
                case global.infoStatus.added:
                    interactionImages.push(dot_png_1.default);
                    interactionInfos.push(visualData.changedInteractionInfos[i]);
                    break;
                default:
                    break;
            }
        }
        if (dataInfos.length != 0) {
            hasDataInfo = true;
        }
        if (interactionInfos.length != 0) {
            hasInteractionInfo = true;
        }
        createTabs(hasDataInfo, hasInteractionInfo);
        createInfoList(generalImages, generalInfos, "generalTab");
        if (hasDataInfo) {
            createInfoList(dataImages, dataInfos, "dataTab");
        }
        if (hasInteractionInfo) {
            createInfoList(interactionImages, interactionInfos, "interactionTab");
            helpers.createInteractionExampleButton("interactionTab", visual);
        }
    }
    exports.createTabsWithContent = createTabsWithContent;
    function createTabs(hasDataInfo, hasInteractionInfo) {
        var divAttributes = global.createDivAttributes();
        divAttributes.id = "visualInfoTabs";
        divAttributes.parentId = "contentText";
        elements.createDiv(divAttributes);
        var ulAttributes = global.createULAttributes();
        ulAttributes.id = "pillsTab";
        ulAttributes.role = "tablist";
        ulAttributes.classes = "nav nav-pills nav-fill";
        ulAttributes.parentId = "visualInfoTabs";
        elements.createUL(ulAttributes);
        var ids = ["generalPill"];
        var attributes = [];
        if (hasDataInfo) {
            ids.push("dataPill");
        }
        if (hasInteractionInfo) {
            ids.push("interactionPill");
        }
        var aAttributes = global.createTabAnchorAttributes();
        aAttributes.id = "generalLink";
        aAttributes.content = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up mb-1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/></svg>  General';
        aAttributes.href = "generalTab";
        aAttributes.parentId = "generalPill";
        attributes.push(aAttributes);
        if (hasDataInfo) {
            aAttributes = global.createTabAnchorAttributes();
            aAttributes.id = "dataLink";
            aAttributes.content = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-data mb-1" viewBox="0 0 16 16"><path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/><path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/><path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z"/></svg>  Data';
            aAttributes.href = "dataTab";
            aAttributes.parentId = "dataPill";
            attributes.push(aAttributes);
        }
        if (hasInteractionInfo) {
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
        var tabPills = ["generalLink"];
        if (hasDataInfo) {
            ids.push("dataTab");
            tabPills.push("dataLink");
        }
        if (hasInteractionInfo) {
            ids.push("interactionTab");
            tabPills.push("interactionLink");
        }
        createTabContent(ids, tabPills);
    }
    function createTabPills(ids, attributes) {
        ids.forEach(function (id, index) {
            var liAttributes = global.createLIAttributes();
            liAttributes.id = id;
            liAttributes.classes = "nav-item";
            liAttributes.parentId = "pillsTab";
            elements.createLI(liAttributes);
            var aAttributes = global.createAnchorAttributes();
            aAttributes.id = attributes[index].id;
            if (index == 0) {
                aAttributes.classes = "nav-link active";
                aAttributes.selected = "true";
            }
            else {
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
    function createTabContent(ids, tabPills) {
        ids.forEach(function (id, index) {
            var attributes = global.createDivAttributes();
            attributes.id = id;
            attributes.role = "tabpanel";
            attributes.label = tabPills[index];
            if (index == 0) {
                attributes.classes = "tab-pane fade show active";
            }
            else {
                attributes.classes = "tab-pane fade";
            }
            attributes.parentId = "pillsTabContent";
            elements.createDiv(attributes);
        });
    }
    function createInfoList(images, infos, parentId) {
        for (var i = 0; i < images.length; ++i) {
            var ul = document.createElement('ul');
            ul.style.listStyleImage = "url(" + images[i] + ")";
            document.getElementById(parentId).appendChild(ul);
            var li = document.createElement('li');
            li.innerHTML = infos[i];
            ul.appendChild(li);
        }
    }
    exports.createInfoList = createInfoList;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./AppOwnsData/wwwroot/onboarding/ts/onboarding.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBVkQsd0NBVUM7Ozs7Ozs7OztVQ3ZORDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3QvanMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vQXBwT3duc0RhdGEvd3d3cm9vdC9vbmJvYXJkaW5nL2Fzc2V0cy9heGlzLWNsaWNrLnBuZyIsIndlYnBhY2s6Ly8vLi9BcHBPd25zRGF0YS93d3dyb290L29uYm9hcmRpbmcvYXNzZXRzL2Jhci1jaGFydC5wbmciLCJ3ZWJwYWNrOi8vLy4vQXBwT3duc0RhdGEvd3d3cm9vdC9vbmJvYXJkaW5nL2Fzc2V0cy9kb3QucG5nIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy9hc3NldHMvZWxlbWVudC1jbGljay5wbmciLCJ3ZWJwYWNrOi8vLy4vQXBwT3duc0RhdGEvd3d3cm9vdC9vbmJvYXJkaW5nL2Fzc2V0cy9pbmZvLnBuZyIsIndlYnBhY2s6Ly8vLi9BcHBPd25zRGF0YS93d3dyb290L29uYm9hcmRpbmcvYXNzZXRzL2xlZ2VuZC1jbGljay5wbmciLCJ3ZWJwYWNrOi8vLy4vQXBwT3duc0RhdGEvd3d3cm9vdC9vbmJvYXJkaW5nL2Fzc2V0cy9sZWdlbmQucG5nIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy9hc3NldHMvbGluZS1ncmFwaC5wbmciLCJ3ZWJwYWNrOi8vLy4vQXBwT3duc0RhdGEvd3d3cm9vdC9vbmJvYXJkaW5nL2Fzc2V0cy94LWF4aXMucG5nIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy9hc3NldHMveS1heGlzLnBuZyIsIndlYnBhY2s6Ly8vLi9BcHBPd25zRGF0YS93d3dyb290L29uYm9hcmRpbmcvdHMvYXV0aG9yTW9kZS50cyIsIndlYnBhY2s6Ly8vLi9BcHBPd25zRGF0YS93d3dyb290L29uYm9hcmRpbmcvdHMvYmFyQ2hhcnRWaXN1YWxDb250ZW50LnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy9iYXNpY1Zpc3VhbENvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwT3duc0RhdGEvd3d3cm9vdC9vbmJvYXJkaW5nL3RzL2NvbXBsZXhWaXN1YWxDb250ZW50LnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy9jcmVhdGVTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9BcHBPd25zRGF0YS93d3dyb290L29uYm9hcmRpbmcvdHMvZGlzYWJsZUFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwT3duc0RhdGEvd3d3cm9vdC9vbmJvYXJkaW5nL3RzL2RyYWdnYWJsZUxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwT3duc0RhdGEvd3d3cm9vdC9vbmJvYXJkaW5nL3RzL2VkaXRGaWx0ZXJzLnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy9lZGl0SW50ZXJhY3Rpb25FeGFtcGxlLnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy9lZGl0UmVwb3J0T2Zmc2V0LnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy9lZGl0VmlzdWFscy50cyIsIndlYnBhY2s6Ly8vLi9BcHBPd25zRGF0YS93d3dyb290L29uYm9hcmRpbmcvdHMvZWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwT3duc0RhdGEvd3d3cm9vdC9vbmJvYXJkaW5nL3RzL2ZpbHRlckluZm9DYXJkcy50cyIsIndlYnBhY2s6Ly8vLi9BcHBPd25zRGF0YS93d3dyb290L29uYm9hcmRpbmcvdHMvZ2xvYmFsVmFyaWFibGVzLnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy9oZWxwZXJGdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwT3duc0RhdGEvd3d3cm9vdC9vbmJvYXJkaW5nL3RzL2luZm9DYXJkcy50cyIsIndlYnBhY2s6Ly8vLi9BcHBPd25zRGF0YS93d3dyb290L29uYm9hcmRpbmcvdHMvaW50ZXJhY3Rpb25FeGFtcGxlLnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy9pbnRyb0NhcmRzLnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy9saW5lQ2hhcnRWaXN1YWxDb250ZW50LnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy9saXN0T2ZWaXN1YWxzLnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy9vbmJvYXJkaW5nLnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy9zaG93UmVwb3J0Q2hhbmdlcy50cyIsIndlYnBhY2s6Ly8vLi9BcHBPd25zRGF0YS93d3dyb290L29uYm9hcmRpbmcvdHMvc2hvd1Zpc3VhbHNDaGFuZ2VzLnRzIiwid2VicGFjazovLy8uL0FwcE93bnNEYXRhL3d3d3Jvb3Qvb25ib2FyZGluZy90cy92aXN1YWxJbmZvLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCByZXBvcnQ7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gMSAtIGdldCBET00gb2JqZWN0IGZvciBkaXYgdGhhdCBpcyByZXBvcnQgY29udGFpbmVyIFxuICAgIHZhciBtb2RlbHMgPSB3aW5kb3dbXCJwb3dlcmJpLWNsaWVudFwiXS5tb2RlbHM7XG5cbiAgICB2YXIgcmVwb3J0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWJlZC1jb250YWluZXJcIik7XG4gIFxuICAgIC8vIDIgLSBnZXQgcmVwb3J0IGVtYmVkZGluZyBkYXRhIGZyb20gdmlldyBtb2RlbFxuICAgIHZhciByZXBvcnRJZCA9IHdpbmRvdy52aWV3TW9kZWwucmVwb3J0SWQ7XG4gICAgdmFyIGVtYmVkVXJsID0gd2luZG93LnZpZXdNb2RlbC5lbWJlZFVybDtcbiAgICB2YXIgdG9rZW4gPSB3aW5kb3cudmlld01vZGVsLnRva2VuXG4gIFxuICAgIC8vIDMgLSBlbWJlZCByZXBvcnQgdXNpbmcgdGhlIFBvd2VyIEJJIEphdmFTY3JpcHQgQVBJLlxuICBcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgdHlwZTogJ3JlcG9ydCcsXG4gICAgICBpZDogcmVwb3J0SWQsXG4gICAgICBlbWJlZFVybDogZW1iZWRVcmwsXG4gICAgICBhY2Nlc3NUb2tlbjogdG9rZW4sXG4gICAgICBwZXJtaXNzaW9uczogbW9kZWxzLlBlcm1pc3Npb25zLkFsbCxcbiAgICAgIHRva2VuVHlwZTogbW9kZWxzLlRva2VuVHlwZS5BYWQsXG4gICAgICB2aWV3TW9kZTogbW9kZWxzLlZpZXdNb2RlLlZpZXcsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICB2aXN1YWxSZW5kZXJlZEV2ZW50czogdHJ1ZSxcbiAgICAgICAgcGFuZXM6IHtcbiAgICAgICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFnZU5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgfTtcbiAgXG4gICAgLy8gRW1iZWQgdGhlIHJlcG9ydCBhbmQgZGlzcGxheSBpdCB3aXRoaW4gdGhlIGRpdiBjb250YWluZXIuXG4gICAgcmVwb3J0ID0gd2luZG93LnBvd2VyYmkuZW1iZWQocmVwb3J0Q29udGFpbmVyLCBjb25maWcpO1xufSk7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImF4aXMtY2xpY2sucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJhci1jaGFydC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZG90LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlbGVtZW50LWNsaWNrLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmZvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsZWdlbmQtY2xpY2sucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxlZ2VuZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibGluZS1ncmFwaC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwieC1heGlzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ5LWF4aXMucG5nXCI7IiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgKiBhcyBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBkaXNhYmxlQWxsIH0gZnJvbSBcIi4vZGlzYWJsZUFyZWFcIjtcclxuaW1wb3J0IHsgZ2V0SW50ZXJhY3Rpb25UZXh0IH0gZnJvbSBcIi4vaW50ZXJhY3Rpb25FeGFtcGxlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVZpc3VhbHNHcm91cCwgb3JkZXJWaXN1YWxzIH0gZnJvbSBcIi4vZWRpdFZpc3VhbHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRmlsdGVyc0dyb3VwIH0gZnJvbSBcIi4vZWRpdEZpbHRlcnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlSW50ZXJhY3Rpb25FeGFtcGxlR3JvdXAgfSBmcm9tIFwiLi9lZGl0SW50ZXJhY3Rpb25FeGFtcGxlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJlcG9ydE9mZnNldEdyb3VwIH0gZnJvbSBcIi4vZWRpdFJlcG9ydE9mZnNldFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9uYm9hcmRpbmdFZGl0aW5nKCl7XHJcbiAgICBoZWxwZXJzLnJlbW92ZU9uYm9hcmRpbmcoKTtcclxuICAgIGhlbHBlcnMuY3JlYXRlT25ib2FyZGluZygpO1xyXG5cclxuICAgIGhlbHBlcnMudG9nZ2xlRmlsdGVyKHRydWUpO1xyXG4gICAgZGlzYWJsZUFsbCgpO1xyXG5cclxuICAgIGxldCBzdHlsZSA9IGhlbHBlcnMuZ2V0Q2FyZFN0eWxlKGdsb2JhbC5lZGl0Q2FyZE1hcmdpbiwgMCwgZ2xvYmFsLmVkaXRDYXJkV2lkdGgsIFwiXCIpICsgYHJpZ2h0OjA7bWFyZ2luOmF1dG87YDtcclxuICAgIGhlbHBlcnMuY3JlYXRlQ2FyZChcImVkaXRDYXJkXCIsIHN0eWxlLCBcIlwiKTtcclxuXHJcbiAgICBoZWxwZXJzLmNyZWF0ZUNhcmRDb250ZW50KFwiRWRpdCBPbmJvYXJkaW5nXCIsIFwiXCIsIFwiZWRpdENhcmRcIik7XHJcbiAgICBjcmVhdGVFZGl0Rm9ybSgpO1xyXG5cclxuICAgIGhlbHBlcnMuY3JlYXRlQ2FyZEJ1dHRvbnMoXCJjYW5jZWxcIiwgXCJzYXZlXCIpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVFZGl0Rm9ybSgpe1xyXG4gICAgbGV0IGRpdkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgZGl2QXR0cmlidXRlcy5pZCA9IFwiZWRpdE9uYm9yZGluZ1wiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5zdHlsZSA9IFwibWFyZ2luOiAxMHB4O2JveC1zaGFkb3c6IDVweCA1cHggNXB4IGdyYXksMHB4IDVweCA1cHggZ3JheVwiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiY29udGVudFRleHRcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZURpdihkaXZBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBjcmVhdGVWaXN1YWxzR3JvdXAoKTtcclxuICAgIGNyZWF0ZUZpbHRlcnNHcm91cCgpO1xyXG4gICAgY3JlYXRlSW50ZXJhY3Rpb25FeGFtcGxlR3JvdXAoKTtcclxuICAgIGNyZWF0ZVJlcG9ydE9mZnNldEdyb3VwKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlT25ib2FyZGluZ0NoYW5nZXMoKXtcclxuICAgIGdsb2JhbC5zZXR0aW5ncy5yZXBvcnRPZmZzZXQudG9wID0gaGVscGVycy5zYXZlSW50SW5wdXQoXCJ0b3BPZmZzZXRJbnB1dFwiKTtcclxuICAgIGdsb2JhbC5zZXR0aW5ncy5yZXBvcnRPZmZzZXQuYm90dG9tID0gaGVscGVycy5zYXZlSW50SW5wdXQoXCJib3R0b21PZmZzZXRJbnB1dFwiKTtcclxuICAgIGdsb2JhbC5zZXR0aW5ncy5yZXBvcnRPZmZzZXQubGVmdCA9IGhlbHBlcnMuc2F2ZUludElucHV0KFwibGVmdE9mZnNldElucHV0XCIpO1xyXG4gICAgZ2xvYmFsLnNldHRpbmdzLnJlcG9ydE9mZnNldC5yaWdodCA9IGhlbHBlcnMuc2F2ZUludElucHV0KFwicmlnaHRPZmZzZXRJbnB1dFwiKTtcclxuXHJcbiAgICBnbG9iYWwuc2V0Q29udGFpbmVyUGFkZGluZ1RvcChnbG9iYWwucmVwb3J0LmlmcmFtZS5vZmZzZXRUb3AgKyBnbG9iYWwuc2V0dGluZ3MucmVwb3J0T2Zmc2V0LnRvcCk7XHJcbiAgICBnbG9iYWwuc2V0Q29udGFpbmVyUGFkZGluZ0xlZnQoZ2xvYmFsLnJlcG9ydC5pZnJhbWUub2Zmc2V0TGVmdCArIGdsb2JhbC5zZXR0aW5ncy5yZXBvcnRPZmZzZXQubGVmdCk7XHJcblxyXG4gICAgb3JkZXJWaXN1YWxzKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCB2aXN1YWwgb2YgZ2xvYmFsLmFsbFZpc3VhbHMpIHtcclxuICAgICAgICBsZXQgdmlzdWFsRGF0YSA9IGhlbHBlcnMuZ2V0RGF0YU9mVmlzdWFsKHZpc3VhbCk7XHJcblxyXG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIgKyB2aXN1YWwubmFtZSkgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICAgICAgdmlzdWFsRGF0YS50aXRsZSA9IHRpdGxlSW5wdXQ/LnZhbHVlO1xyXG5cclxuICAgICAgICB2YXIgdmlzdWFsSW5mb3MgPSBhd2FpdCBoZWxwZXJzLmdldFZpc3VhbEluZm9zKHZpc3VhbCk7XHJcblxyXG4gICAgICAgIGxldCBnZW5lcmFsSW5mb3NUZXh0YXJlYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ2VuZXJhbEluZm9zXCIgKyB2aXN1YWwubmFtZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW5lcmFsSW5mb3NUZXh0YXJlYXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IHRleHRhcmVhID0gZ2VuZXJhbEluZm9zVGV4dGFyZWFzW2ldIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsO1xyXG4gICAgICAgICAgICBsZXQgbmV3R2VuZXJhbEluZm8gPSB0ZXh0YXJlYS52YWx1ZS5yZXBsYWNlQWxsKCdcXG4nLCBcIjxicj5cIik7XHJcbiAgICAgICAgICAgIGlmKG5ld0dlbmVyYWxJbmZvID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdmlzdWFsRGF0YS5nZW5lcmFsSW5mb3NTdGF0dXNbaV0gPSBcImRlbGV0ZWRcIjtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuY2hhbmdlZEdlbmVyYWxJbmZvc1tpXSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihpID49IHZpc3VhbERhdGEuZ2VuZXJhbEluZm9zU3RhdHVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmdlbmVyYWxJbmZvc1N0YXR1cy5wdXNoKFwiYWRkZWRcIik7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmNoYW5nZWRHZW5lcmFsSW5mb3MucHVzaChuZXdHZW5lcmFsSW5mbyk7ICBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKG5ld0dlbmVyYWxJbmZvID09IHZpc3VhbEluZm9zLmdlbmVyYWxJbmZvc1tpXSl7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmdlbmVyYWxJbmZvc1N0YXR1c1tpXSA9IFwib3JpZ2luYWxcIjtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuY2hhbmdlZEdlbmVyYWxJbmZvc1tpXSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmdlbmVyYWxJbmZvc1N0YXR1c1tpXSA9IFwiY2hhbmdlZFwiO1xyXG4gICAgICAgICAgICAgICAgdmlzdWFsRGF0YS5jaGFuZ2VkR2VuZXJhbEluZm9zW2ldID0gbmV3R2VuZXJhbEluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhSW5mb3NUZXh0YXJlYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGF0YUluZm9zXCIgKyB2aXN1YWwubmFtZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhSW5mb3NUZXh0YXJlYXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IHRleHRhcmVhID0gZGF0YUluZm9zVGV4dGFyZWFzW2ldIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsO1xyXG4gICAgICAgICAgICBsZXQgbmV3RGF0YUluZm8gPSB0ZXh0YXJlYS52YWx1ZS5yZXBsYWNlQWxsKCdcXG4nLCBcIjxicj5cIik7IFxyXG4gICAgICAgICAgICBpZihuZXdEYXRhSW5mbyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuZGF0YUluZm9zU3RhdHVzW2ldID0gXCJkZWxldGVkXCI7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmNoYW5nZWREYXRhSW5mb3NbaV0gPSBcIlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoaSA+PSB2aXN1YWxEYXRhLmRhdGFJbmZvc1N0YXR1cy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdmlzdWFsRGF0YS5kYXRhSW5mb3NTdGF0dXMucHVzaChcImFkZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdmlzdWFsRGF0YS5jaGFuZ2VkRGF0YUluZm9zLnB1c2gobmV3RGF0YUluZm8pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYobmV3RGF0YUluZm8gPT0gdmlzdWFsSW5mb3MuZGF0YUluZm9zW2ldKXtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuZGF0YUluZm9zU3RhdHVzW2ldID0gXCJvcmlnaW5hbFwiO1xyXG4gICAgICAgICAgICAgICAgdmlzdWFsRGF0YS5jaGFuZ2VkRGF0YUluZm9zW2ldID0gXCJcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuZGF0YUluZm9zU3RhdHVzW2ldID0gXCJjaGFuZ2VkXCI7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmNoYW5nZWREYXRhSW5mb3NbaV0gPSBuZXdEYXRhSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGludGVyYWN0aW9uSW5mb3NUZXh0YXJlYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW50ZXJhY3Rpb25JbmZvc1wiICsgdmlzdWFsLm5hbWUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJhY3Rpb25JbmZvc1RleHRhcmVhcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgdGV4dGFyZWEgPSBpbnRlcmFjdGlvbkluZm9zVGV4dGFyZWFzW2ldIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsO1xyXG4gICAgICAgICAgICBsZXQgbmV3SW50ZXJhY3Rpb25JbmZvID0gdGV4dGFyZWEudmFsdWUucmVwbGFjZUFsbCgnXFxuJywgXCI8YnI+XCIpO1xyXG4gICAgICAgICAgICBpZihuZXdJbnRlcmFjdGlvbkluZm8gPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmludGVyYWN0aW9uSW5mb3NTdGF0dXNbaV0gPSBcImRlbGV0ZWRcIjtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuY2hhbmdlZEludGVyYWN0aW9uSW5mb3NbaV0gPSBcIlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoaSA+PSB2aXN1YWxEYXRhLmludGVyYWN0aW9uSW5mb3NTdGF0dXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuaW50ZXJhY3Rpb25JbmZvc1N0YXR1cy5wdXNoKFwiYWRkZWRcIik7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmNoYW5nZWRJbnRlcmFjdGlvbkluZm9zLnB1c2gobmV3SW50ZXJhY3Rpb25JbmZvKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKG5ld0ludGVyYWN0aW9uSW5mbyA9PSB2aXN1YWxJbmZvcy5pbnRlcmFjdGlvbkluZm9zW2ldKXtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuaW50ZXJhY3Rpb25JbmZvc1N0YXR1c1tpXSA9IFwib3JpZ2luYWxcIjtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuY2hhbmdlZEludGVyYWN0aW9uSW5mb3NbaV0gPSBcIlwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmlzdWFsRGF0YS5pbnRlcmFjdGlvbkluZm9zU3RhdHVzW2ldID0gXCJjaGFuZ2VkXCI7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmNoYW5nZWRJbnRlcmFjdGlvbkluZm9zW2ldID0gbmV3SW50ZXJhY3Rpb25JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaWx0ZXJJbmZvcyA9IGF3YWl0IGhlbHBlcnMuZ2V0RmlsdGVySW5mbygpO1xyXG5cclxuICAgIGxldCBmaWx0ZXJUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0RmlsdGVyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xyXG4gICAgZ2xvYmFsLnNldHRpbmdzLmZpbHRlclZpc3VhbC50aXRsZSA9IGZpbHRlclRpdGxlSW5wdXQ/LnZhbHVlO1xyXG5cclxuICAgIGxldCBmaWx0ZXJHZW5lcmFsSW5mb0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5lcmFsSW5mb0lucHV0RmlsdGVyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xyXG4gICAgZ2xvYmFsLnNldHRpbmdzLmZpbHRlclZpc3VhbC5nZW5lcmFsSW5mb3JtYXRpb24gPSBmaWx0ZXJHZW5lcmFsSW5mb0lucHV0Py52YWx1ZTtcclxuXHJcbiAgICBsZXQgZmlsdGVySW5mb3NUZXh0YXJlYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmlsdGVySW5mb3NcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlckluZm9zVGV4dGFyZWFzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IHRleHRhcmVhID0gZmlsdGVySW5mb3NUZXh0YXJlYXNbaV0gYXMgSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGw7XHJcbiAgICAgICAgbGV0IG5ld0ZpbHRlckluZm8gPSB0ZXh0YXJlYS52YWx1ZS5yZXBsYWNlQWxsKCdcXG4nLCBcIjxicj5cIik7XHJcbiAgICAgICAgaWYobmV3RmlsdGVySW5mbyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmZpbHRlclZpc3VhbC5maWx0ZXJJbmZvc1N0YXR1c1tpXSA9IFwiZGVsZXRlZFwiO1xyXG4gICAgICAgICAgICBnbG9iYWwuIHNldHRpbmdzLmZpbHRlclZpc3VhbC5jaGFuZ2VkRmlsdGVySW5mb3NbaV0gPSBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZihpID49ICBnbG9iYWwuc2V0dGluZ3MuZmlsdGVyVmlzdWFsLmZpbHRlckluZm9zU3RhdHVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5maWx0ZXJWaXN1YWwuZmlsdGVySW5mb3NTdGF0dXMucHVzaChcImFkZGVkXCIpO1xyXG4gICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuZmlsdGVyVmlzdWFsLmNoYW5nZWRGaWx0ZXJJbmZvcy5wdXNoKG5ld0ZpbHRlckluZm8pO1xyXG4gICAgICAgIH0gZWxzZSBpZihuZXdGaWx0ZXJJbmZvID09IGZpbHRlckluZm9zW2ldKXtcclxuICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmZpbHRlclZpc3VhbC5maWx0ZXJJbmZvc1N0YXR1c1tpXSA9IFwib3JpZ2luYWxcIjtcclxuICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmZpbHRlclZpc3VhbC5jaGFuZ2VkRmlsdGVySW5mb3NbaV0gPSBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5maWx0ZXJWaXN1YWwuZmlsdGVySW5mb3NTdGF0dXNbaV0gPSBcImNoYW5nZWRcIjtcclxuICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmZpbHRlclZpc3VhbC5jaGFuZ2VkRmlsdGVySW5mb3NbaV0gPSBuZXdGaWx0ZXJJbmZvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGludGVyYWN0aW9uRXhhbXBsZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRJbnRlcmFjdGlvbkV4YW1wbGVcIikgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICBnbG9iYWwuc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlLnRpdGxlID0gaW50ZXJhY3Rpb25FeGFtcGxlVGl0bGVJbnB1dD8udmFsdWU7XHJcblxyXG4gICAgbGV0IGdlbmVyYWxJbmZvc1RleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5lcmFsSW5mb0lucHV0SW50ZXJhY3Rpb25FeGFtcGxlXCIpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsO1xyXG4gICAgbGV0IG5ld0dlbmVyYWxJbmZvID0gZ2VuZXJhbEluZm9zVGV4dGFyZWEudmFsdWUucmVwbGFjZUFsbCgnXFxuJywgXCI8YnI+XCIpO1xyXG4gICAgbGV0IGNvbXBhcmVOZXdHZW5lcmFsSW5mbyA9IG5ld0dlbmVyYWxJbmZvLnJlcGxhY2VBbGwoL1xccysvZywgXCJcIik7XHJcbiAgICBsZXQgb3JpZ2luYWxHZW5lcmFsSW5mbyA9IGhlbHBlcnMuZ2V0R2VuZXJhbEluZm9JbnRlcmFjdGlvbkV4YW1wbGVUZXh0KCkucmVwbGFjZUFsbCgnXFxuJywgXCI8YnI+XCIpLnJlcGxhY2VBbGwoL1xccysvZywgXCJcIik7XHJcbiAgICBpZihuZXdHZW5lcmFsSW5mbyA9PSBcIlwiKXtcclxuICAgICAgICBnbG9iYWwuc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlLmdlbmVyYWxJbmZvU3RhdHVzID0gXCJkZWxldGVkXCI7XHJcbiAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmludGVyYWN0aW9uRXhhbXBsZS5jaGFuZ2VkR2VuZXJhbEluZm8gPSBcIlwiOyBcclxuICAgIH0gZWxzZSBpZiggb3JpZ2luYWxHZW5lcmFsSW5mbyA9PSBjb21wYXJlTmV3R2VuZXJhbEluZm8pe1xyXG4gICAgICAgIGdsb2JhbC5zZXR0aW5ncy5pbnRlcmFjdGlvbkV4YW1wbGUuZ2VuZXJhbEluZm9TdGF0dXMgPSBcIm9yaWdpbmFsXCI7XHJcbiAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmludGVyYWN0aW9uRXhhbXBsZS5jaGFuZ2VkR2VuZXJhbEluZm8gPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBnbG9iYWwuc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlLmdlbmVyYWxJbmZvU3RhdHVzID0gXCJjaGFuZ2VkXCI7XHJcbiAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmludGVyYWN0aW9uRXhhbXBsZS5jaGFuZ2VkR2VuZXJhbEluZm8gPSBuZXdHZW5lcmFsSW5mbztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaGludElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaW50SW5wdXRJbnRlcmFjdGlvbkV4YW1wbGVcIikgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICBnbG9iYWwuc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlLm5leHRWaXN1YWxIaW50ID0gaGludElucHV0Py52YWx1ZTtcclxuICBcclxuICAgIGZvciAoY29uc3QgdmlzdWFsIG9mIGdsb2JhbC5hbGxWaXN1YWxzKSB7XHJcbiAgICAgICAgbGV0IHZpc3VhbERhdGEgPSBnbG9iYWwuc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlLnZpc3VhbHMuZmluZChmdW5jdGlvbiAodmlzdWFsRGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlzdWFsRGF0YS5pZCA9PSB2aXN1YWwubmFtZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodmlzdWFsRGF0YS5jbGlja0luZm9zU3RhdHVzKXtcclxuICAgICAgICAgICAgbGV0IGNsaWNrSW5mb3NUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJhY3Rpb25FeGFtcGxlSW50ZXJhY3Rpb25JbmZvc1RleHRhcmVhXCIgKyB2aXN1YWwubmFtZSlhcyBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbDtcclxuICAgICAgICAgICAgbGV0IG5ld0NsaWNrSW5mbyA9IGNsaWNrSW5mb3NUZXh0YXJlYS52YWx1ZS5yZXBsYWNlQWxsKCdcXG4nLCBcIjxicj5cIik7XHJcbiAgICAgICAgICAgIGxldCBjbGlja0luZm8gPSBhd2FpdCBnZXRJbnRlcmFjdGlvblRleHQodmlzdWFsKTtcclxuICAgICAgICAgICAgaWYobmV3Q2xpY2tJbmZvID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdmlzdWFsRGF0YS5jbGlja0luZm9zU3RhdHVzID0gXCJkZWxldGVkXCI7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmNoYW5nZWRDbGlja0luZm8gPSBcIlwiOyBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKG5ld0NsaWNrSW5mbyA9PSBjbGlja0luZm8pe1xyXG4gICAgICAgICAgICAgICAgdmlzdWFsRGF0YS5jbGlja0luZm9zU3RhdHVzID0gXCJvcmlnaW5hbFwiO1xyXG4gICAgICAgICAgICAgICAgdmlzdWFsRGF0YS5jaGFuZ2VkQ2xpY2tJbmZvID0gXCJcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuY2xpY2tJbmZvc1N0YXR1cyA9IFwiY2hhbmdlZFwiO1xyXG4gICAgICAgICAgICAgICAgdmlzdWFsRGF0YS5jaGFuZ2VkQ2xpY2tJbmZvID0gbmV3Q2xpY2tJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih2aXN1YWxEYXRhLmludGVyYWN0aW9uQ2hhbmdlZEluZm9zU3RhdHVzKXtcclxuICAgICAgICAgICAgbGV0IGNoYW5nZWRJbmZvc1RleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmFjdGlvbkV4YW1wbGVDaGFuZ2VkSW5mb3NUZXh0YXJlYVwiICsgdmlzdWFsLm5hbWUpYXMgSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBuZXdDaGFuZ2VkSW5mbyA9IGNoYW5nZWRJbmZvc1RleHRhcmVhLnZhbHVlLnJlcGxhY2VBbGwoJ1xcbicsIFwiPGJyPlwiKTtcclxuICAgICAgICAgICAgbGV0IGNoYW5nZWRJbmZvID0gYXdhaXQgaGVscGVycy5nZXRJbnRlcmFjdGlvbkV4YW1wbGVDaGFuZ2VzVGV4dCh2aXN1YWwpO1xyXG4gICAgICAgICAgICBpZihuZXdDaGFuZ2VkSW5mbyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuaW50ZXJhY3Rpb25DaGFuZ2VkSW5mb3NTdGF0dXMgPSBcImRlbGV0ZWRcIjtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuY2hhbmdlZEludGVyYWN0aW9uQ2hhbmdlZEluZm8gPSBcIlwiOyBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKG5ld0NoYW5nZWRJbmZvID09IGNoYW5nZWRJbmZvKXtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuaW50ZXJhY3Rpb25DaGFuZ2VkSW5mb3NTdGF0dXMgPSBcIm9yaWdpbmFsXCI7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmNoYW5nZWRJbnRlcmFjdGlvbkNoYW5nZWRJbmZvID0gXCJcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuaW50ZXJhY3Rpb25DaGFuZ2VkSW5mb3NTdGF0dXMgPSBcImNoYW5nZWRcIjtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuY2hhbmdlZEludGVyYWN0aW9uQ2hhbmdlZEluZm8gPSBuZXdDaGFuZ2VkSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeShnbG9iYWwuc2V0dGluZ3MpKTtcclxuXHJcbiAgICBoZWxwZXJzLnJlbW92ZU9uYm9hcmRpbmcoKTtcclxufSIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcbmltcG9ydCBpbmZvSW1nIGZyb20gXCIuLi9hc3NldHMvaW5mby5wbmdcIjtcclxuaW1wb3J0IHlBeGlzSW1nIGZyb20gXCIuLi9hc3NldHMveS1heGlzLnBuZ1wiO1xyXG5pbXBvcnQgeEF4aXNJbWcgZnJvbSBcIi4uL2Fzc2V0cy94LWF4aXMucG5nXCI7XHJcbmltcG9ydCBsZWdlbmRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9sZWdlbmQucG5nXCI7XHJcbmltcG9ydCBiYXJDaGFydEltZyBmcm9tIFwiLi4vYXNzZXRzL2Jhci1jaGFydC5wbmdcIjtcclxuaW1wb3J0IGVsZW1DbGlja0ltZyBmcm9tIFwiLi4vYXNzZXRzL2VsZW1lbnQtY2xpY2sucG5nXCI7XHJcbmltcG9ydCBheGlzQ2xpY2tJbWcgZnJvbSBcIi4uL2Fzc2V0cy9heGlzLWNsaWNrLnBuZ1wiO1xyXG5pbXBvcnQgbGVnZW5kQ2xpY2tJbWcgZnJvbSBcIi4uL2Fzc2V0cy9sZWdlbmQtY2xpY2sucG5nXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2x1c3RlcmVkQmFyQ2hhcnRJbmZvKHZpc3VhbCkge1xyXG4gICAgbGV0IGF4aXMgPSBhd2FpdCBoZWxwZXJzLmdldEZpZWxkQ29sdW1uKHZpc3VhbCwgXCJDYXRlZ29yeVwiKTtcclxuICAgIGxldCBkYXRhTmFtZSA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRNZWFzdXJlKHZpc3VhbCwgXCJZXCIpO1xyXG4gICAgbGV0IGxlZ2VuZCA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRDb2x1bW4odmlzdWFsLCBcIlNlcmllc1wiKTtcclxuXHJcbiAgICBsZXQgaGFzWUF4aXMgPSBoZWxwZXJzLmlzVmlzaWJsZSh2aXN1YWwsIFwiY2F0ZWdvcnlBeGlzXCIpO1xyXG4gICAgbGV0IGhhc1hBeGlzID0gaGVscGVycy5pc1Zpc2libGUodmlzdWFsLCBcInZhbHVlQXhpc1wiKTtcclxuICAgIGxldCBoYXNMZWdlbmQgPSBoZWxwZXJzLmlzVmlzaWJsZSh2aXN1YWwsIFwibGVnZW5kXCIpO1xyXG4gICAgbGV0IGhhc1Rvb2x0aXAgPSBoZWxwZXJzLmlzVmlzaWJsZSh2aXN1YWwsIFwidG9vbHRpcFwiKTtcclxuXHJcbiAgICBsZXQgZ2VuZXJhbEltYWdlcyA9IFtdO1xyXG4gICAgbGV0IGdlbmVyYWxJbmZvcyA9IFtdO1xyXG4gICAgbGV0IGRhdGFJbWFnZXMgPSBbXTtcclxuICAgIGxldCBkYXRhSW5mb3MgPVtdO1xyXG4gICAgbGV0IGludGVyYWN0aW9uSW1hZ2VzID0gW107XHJcbiAgICBsZXQgaW50ZXJhY3Rpb25JbmZvcyA9W107XHJcbiAgICAgICBcclxuICAgIGdlbmVyYWxJbWFnZXMucHVzaChpbmZvSW1nKTtcclxuICAgIGdlbmVyYWxJbmZvcy5wdXNoKFwiVGhpcyBlbGVtZW50IGlzIGEgY2x1c3RlcmQgYmFyIGNoYXJ0LlwiKTtcclxuXHJcbiAgICBkYXRhSW1hZ2VzLnB1c2goaW5mb0ltZyk7XHJcbiAgICBkYXRhSW5mb3MucHVzaChcIlRoaXMgY2hhcnQgZGlzcGxheWVzIHRoZSBcIiArIGRhdGFOYW1lICsgXCIuXCIpO1xyXG4gICAgbGV0IGJhckluZm8gPSBcIlwiO1xyXG4gICAgaWYoYXhpcyl7XHJcbiAgICAgICAgYmFySW5mbyArPSBcIlRoZSBiYXJzIGFyZSBzZXBhcmF0ZWQgdmVydGljYWxseSBieSBcIisgYXhpcyArIFwiLjxicj5cIjtcclxuICAgIH1cclxuICAgIGlmKGxlZ2VuZCl7XHJcbiAgICAgICAgYmFySW5mbyArPSBcIkVhY2ggXCIgKyBheGlzICsgXCIgaGFzIG1vcmUgdGhhbiBvbmUgYmFyLiBUaGlzIGJhcnMgcmVwcmVzZW50IHRoZSBcIiArIGxlZ2VuZCArIFwiIGFuZCBhcmUgZGlzdGluZ3Vpc2hhYmxlIGJ5IHRoZWlyIGNvbG9yLlwiO1xyXG4gICAgfVxyXG4gICAgZGF0YUltYWdlcy5wdXNoKGJhckNoYXJ0SW1nKTtcclxuICAgIGRhdGFJbmZvcy5wdXNoKGJhckluZm8pO1xyXG5cclxuICAgIGxldCBpbnRlcmFjdGlvbkluZm8gPSBcIldpdGggY2xpY2tpbmcgb24gYSBiYXIgeW91IGNhbiBmaWx0ZXIgdGhlIHJlcG9ydCBieSBcIjtcclxuICAgIGlmKGF4aXMgJiYgIWxlZ2VuZCl7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbmZvICs9IGF4aXMgKyBcIi5cIjtcclxuICAgIH0gZWxzZSBpZighYXhpcyAmJiBsZWdlbmQpe1xyXG4gICAgICAgIGludGVyYWN0aW9uSW5mbyArPSBsZWdlbmQgKyBcIi5cIjtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGludGVyYWN0aW9uSW5mbyArPSBheGlzICsgXCIgYW5kIFwiICsgbGVnZW5kICsgXCIuXCI7XHJcbiAgICB9ICBcclxuICAgIGlmKGhhc1Rvb2x0aXApe1xyXG4gICAgICAgIGludGVyYWN0aW9uSW5mbyArPSBcIjwvYnI+WW91IGNhbiBob3ZlciBvdmVyIGEgYmFyIHRvIGdldCBkZXRhaWxlZCBpbmZvcm1hdGlvbiBhYm91dCBpdHMgZGF0YS5cIjtcclxuICAgIH1cclxuICAgIGludGVyYWN0aW9uSW1hZ2VzLnB1c2goZWxlbUNsaWNrSW1nKTtcclxuICAgIGludGVyYWN0aW9uSW5mb3MucHVzaChpbnRlcmFjdGlvbkluZm8pO1xyXG4gICBcclxuICAgIGlmKGhhc1lBeGlzKXtcclxuICAgICAgICBnZW5lcmFsSW1hZ2VzLnB1c2goeUF4aXNJbWcpO1xyXG4gICAgICAgIGdlbmVyYWxJbmZvcy5wdXNoKFwiVGhlIFktYXhpcyBkaXNwbGF5ZXMgdGhlIHZhbHVlcyBvZiB0aGUgXCIgKyBheGlzICsgXCIuXCIpO1xyXG4gICAgICAgIGludGVyYWN0aW9uSW1hZ2VzLnB1c2goYXhpc0NsaWNrSW1nKTtcclxuICAgICAgICBpbnRlcmFjdGlvbkluZm9zLnB1c2goXCJXaGVuIGNsaWNraW5nIG9uIG9uZSBvZiB0aGUgeS1heGlzLWxhYmVscyB5b3UgY2FuIGZpbHRlciB0aGUgcmVwb3J0IGJ5IFwiICsgYXhpcyArIFwiLlwiKTtcclxuICAgIH1cclxuICAgIGlmKGhhc1hBeGlzKXtcclxuICAgICAgICBnZW5lcmFsSW1hZ2VzLnB1c2goeEF4aXNJbWcpO1xyXG4gICAgICAgIGdlbmVyYWxJbmZvcy5wdXNoKFwiVGhlIFgtYXhpcyBkaXNwbGF5ZXMgdGhlIHZhbHVlcyBvZiB0aGUgXCIgKyBkYXRhTmFtZSArIFwiLlwiKTtcclxuICAgIH1cclxuICAgIGlmKGhhc0xlZ2VuZCl7XHJcbiAgICAgICAgZ2VuZXJhbEltYWdlcy5wdXNoKGxlZ2VuZEltZyk7XHJcbiAgICAgICAgZ2VuZXJhbEluZm9zLnB1c2goXCJUaGUgbGVnZW5kIGRpc3BsYXllcyB0aGUgdmFsdWVzIG9mIHRoZSBcIiArIGxlZ2VuZCArIFwiIGFuZCBpdHMgY29ycmVzcG9uZGluZyBjb2xvci5cIik7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbWFnZXMucHVzaChsZWdlbmRDbGlja0ltZyk7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbmZvcy5wdXNoKFwiV2hlbiBjbGlja2luZyBvbiBvbmUgb2YgdGhlIGxhYmVscyBpbiB0aGUgbGVnZW5kIHlvdSBjYW4gZmlsdGVyIHRoZSByZXBvcnQgYnkgXCIgKyBsZWdlbmQgKyBcIi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZW5lcmFsSW1hZ2VzLCBnZW5lcmFsSW5mb3MsIGRhdGFJbWFnZXMsIGRhdGFJbmZvcywgaW50ZXJhY3Rpb25JbWFnZXMsIGludGVyYWN0aW9uSW5mb3N9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmFyQ2hhcnRJbnRlcmFjdGlvbkV4YW1wbGUodmlzdWFsKSB7XHJcbiAgICBsZXQgYXhpcyA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRDb2x1bW4odmlzdWFsLCBcIkNhdGVnb3J5XCIpO1xyXG4gICAgbGV0IGF4aXNWYWx1ZXMgPSBhd2FpdCBoZWxwZXJzLmdldFNwZWNpZmljRGF0YUluZm8odmlzdWFsLCBheGlzKTtcclxuICAgIGxldCBkYXRhTmFtZSA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRNZWFzdXJlKHZpc3VhbCwgXCJZXCIpO1xyXG4gICAgbGV0IGxlZ2VuZCA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRDb2x1bW4odmlzdWFsLCBcIlNlcmllc1wiKTtcclxuICAgIGxldCBsZWdlbmRWYWx1ZXMgPSBhd2FpdCBoZWxwZXJzLmdldFNwZWNpZmljRGF0YUluZm8odmlzdWFsLCBsZWdlbmQpO1xyXG5cclxuICAgIGxldCBtaWRkZWxPZkF4aXNWYWx1ZXMgPSBNYXRoLmZsb29yKGF4aXNWYWx1ZXMubGVuZ3RoLzIpO1xyXG5cclxuICAgIGxldCBpbnRlcmFjdGlvbkluZm8gPSBcIlBsZWFzZSBjbGljayBvbiB0aGUgYmFyIHJlcHJlc2VudGluZyB0aGUgXCIgKyBkYXRhTmFtZTtcclxuICAgIGlmKGF4aXNWYWx1ZXMgJiYgbGVnZW5kVmFsdWVzKXtcclxuICAgICAgICBpbnRlcmFjdGlvbkluZm8gKz0gXCIgZm9yIFwiICsgYXhpc1ZhbHVlc1ttaWRkZWxPZkF4aXNWYWx1ZXNdICsgXCIgYW5kIFwiKyBsZWdlbmRWYWx1ZXNbMF0gKyBcIi5cIjtcclxuICAgIH0gZWxzZSBpZihheGlzVmFsdWVzKXtcclxuICAgICAgICBpbnRlcmFjdGlvbkluZm8gKz0gXCIgZm9yIFwiICsgYXhpc1ZhbHVlc1ttaWRkZWxPZkF4aXNWYWx1ZXNdICsgXCIuXCI7XHJcbiAgICB9IGVsc2UgaWYobGVnZW5kVmFsdWVzKXtcclxuICAgICAgICBpbnRlcmFjdGlvbkluZm8gKz0gXCIgZm9yIFwiICsgbGVnZW5kVmFsdWVzWzBdICsgXCIuXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGludGVyYWN0aW9uSW5mbyArPSBcIi5cIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW50ZXJhY3Rpb25JbmZvO1xyXG59IiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgaW5mb0ltZyBmcm9tIFwiLi4vYXNzZXRzL2luZm8ucG5nXCI7XHJcbmltcG9ydCBlbGVtQ2xpY2tJbWcgZnJvbSBcIi4uL2Fzc2V0cy9lbGVtZW50LWNsaWNrLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcmRJbmZvKHZpc3VhbCkge1xyXG4gICAgbGV0IGRhdGFOYW1lID0gYXdhaXQgaGVscGVycy5nZXRGaWVsZE1lYXN1cmUodmlzdWFsLCBcIlZhbHVlc1wiKTtcclxuICAgIGxldCBkYXRhVmFsdWUgPSBhd2FpdCBoZWxwZXJzLmdldFNwZWNpZmljRGF0YUluZm8odmlzdWFsLCBkYXRhTmFtZSk7XHJcblxyXG4gICAgbGV0IGdlbmVyYWxJbWFnZXMgPSBbXTtcclxuICAgIGxldCBnZW5lcmFsSW5mb3MgPSBbXTtcclxuICAgIGxldCBkYXRhSW1hZ2VzID0gW107XHJcbiAgICBsZXQgZGF0YUluZm9zID1bXTtcclxuICAgIGxldCBpbnRlcmFjdGlvbkltYWdlcyA9IFtdO1xyXG4gICAgbGV0IGludGVyYWN0aW9uSW5mb3MgPVtdO1xyXG5cclxuICAgIGdlbmVyYWxJbWFnZXMucHVzaChpbmZvSW1nKTtcclxuICAgIGdlbmVyYWxJbmZvcy5wdXNoKFwiVGhpcyBlbGVtZW50IGlzIGEgY2FyZC4gQ2FyZHMgZGlzcGxheSB0aGUgbW9zdCBpbXBvcnRhbnQgZmFjdHMgb2YgYSByZXBvcnQuXCIpO1xyXG4gICAgZGF0YUltYWdlcy5wdXNoKGluZm9JbWcpO1xyXG4gICAgZGF0YUluZm9zLnB1c2goXCJUaGlzIGNhcmQgc2hvd3MgdGhlIGN1cnJlbnQgdmFsdWUgb2YgXCJcclxuICAgICAgICArIGRhdGFOYW1lICsgXCIsIHdoaWNoIGlzIFwiICsgZGF0YVZhbHVlWzBdICsgXCIuXCIpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge2dlbmVyYWxJbWFnZXMsIGdlbmVyYWxJbmZvcywgZGF0YUltYWdlcywgZGF0YUluZm9zLCBpbnRlcmFjdGlvbkltYWdlcywgaW50ZXJhY3Rpb25JbmZvc307XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXJkQ2hhbmdlcyh2aXN1YWwpIHtcclxuICAgIGxldCBkYXRhTmFtZSA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRNZWFzdXJlKHZpc3VhbCwgXCJWYWx1ZXNcIik7XHJcbiAgICBsZXQgZGF0YVZhbHVlID0gYXdhaXQgaGVscGVycy5nZXRTcGVjaWZpY0RhdGFJbmZvKHZpc3VhbCwgZGF0YU5hbWUpO1xyXG5cclxuICAgIGxldCB2aXN1YWxJbnRlcmFjdGlvbkluZm8gPSBcIlRoZSBkaXNwbGF5ZWQgZGF0YSBpcyBub3cgXCIgKyBkYXRhVmFsdWVbMF0gKyBcIi5cIjtcclxuICAgIFxyXG4gICAgcmV0dXJuIHZpc3VhbEludGVyYWN0aW9uSW5mbztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNsaWNlckluZm8odmlzdWFsKSB7XHJcbiAgICBsZXQgZmlsdGVyTmFtZSA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRDb2x1bW4odmlzdWFsLCBcIlZhbHVlc1wiKTtcclxuXHJcbiAgICBsZXQgZ2VuZXJhbEltYWdlcyA9IFtdO1xyXG4gICAgbGV0IGdlbmVyYWxJbmZvcyA9IFtdO1xyXG4gICAgbGV0IGRhdGFJbWFnZXMgPSBbXTtcclxuICAgIGxldCBkYXRhSW5mb3MgPVtdO1xyXG4gICAgbGV0IGludGVyYWN0aW9uSW1hZ2VzID0gW107XHJcbiAgICBsZXQgaW50ZXJhY3Rpb25JbmZvcyA9W107XHJcblxyXG4gICAgZ2VuZXJhbEltYWdlcy5wdXNoKGluZm9JbWcpO1xyXG4gICAgZ2VuZXJhbEluZm9zLnB1c2goXCJUaGlzIGVsZW1lbnQgaXMgYSBzbGljZXIuIFNsaWNlcnMgYWN0IGFzIGZpbHRlcnMgZm9yIHRoZSByZXBvcnQuIFdpdGggdGhpcyBvbmUgeW91IGNhbiBmaWx0ZXIgYnkgXCIgKyBmaWx0ZXJOYW1lICsgXCIuXCIpO1xyXG4gICAgaW50ZXJhY3Rpb25JbWFnZXMucHVzaChlbGVtQ2xpY2tJbWcpO1xyXG4gICAgaW50ZXJhY3Rpb25JbmZvcy5wdXNoKFwiV2l0aCBjbGlja2luZyBvbiBvbmUgZWxlbWVudCBvZiB0aGUgbGlzdCB5b3UgY2FuIGZpbHRlciB0aGUgcmVwb3J0IGJ5IFwiICsgZmlsdGVyTmFtZSArIFwiLlwiKTtcclxuXHJcbiAgICByZXR1cm4ge2dlbmVyYWxJbWFnZXMsIGdlbmVyYWxJbmZvcywgZGF0YUltYWdlcywgZGF0YUluZm9zLCBpbnRlcmFjdGlvbkltYWdlcywgaW50ZXJhY3Rpb25JbmZvc307XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTbGljZXJJbnRlcmFjdGlvbkV4YW1wbGUodmlzdWFsKSB7XHJcbiAgICBsZXQgZmlsdGVyTmFtZSA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRDb2x1bW4odmlzdWFsLCBcIlZhbHVlc1wiKTtcclxuICAgIGxldCBkYXRhVmFsdWVzID0gYXdhaXQgaGVscGVycy5nZXRTcGVjaWZpY0RhdGFJbmZvKHZpc3VhbCwgZmlsdGVyTmFtZSk7XHJcblxyXG4gICAgbGV0IG1pZGRlbE9mRGF0YVZhbHVlcyA9IE1hdGguZmxvb3IoZGF0YVZhbHVlcy5sZW5ndGgvMik7XHJcblxyXG4gICAgbGV0IGludGVyYWN0aW9uSW5mbyA9IFwiUGxlYXNlIGNsaWNrIG9uIHRoZSBsaXN0IGVsZW1lbnQgXCIgKyBkYXRhVmFsdWVzW21pZGRlbE9mRGF0YVZhbHVlc10gKyBcIi5cIjtcclxuXHJcbiAgICByZXR1cm4gaW50ZXJhY3Rpb25JbmZvO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhcnRDaGFuZ2VzKHZpc3VhbCkge1xyXG4gICAgbGV0IGF4aXMgPSBhd2FpdCBoZWxwZXJzLmdldEZpZWxkQ29sdW1uKHZpc3VhbCwgXCJDYXRlZ29yeVwiKTtcclxuICAgIGxldCBheGlzVmFsdWVzID0gYXdhaXQgaGVscGVycy5nZXRTcGVjaWZpY0RhdGFJbmZvKHZpc3VhbCwgYXhpcyk7XHJcbiAgICBsZXQgZGF0YU5hbWUgPSBhd2FpdCBoZWxwZXJzLmdldEZpZWxkTWVhc3VyZSh2aXN1YWwsIFwiWVwiKTtcclxuICAgIGxldCBsZWdlbmQgPSBhd2FpdCBoZWxwZXJzLmdldEZpZWxkQ29sdW1uKHZpc3VhbCwgXCJTZXJpZXNcIik7XHJcbiAgICBsZXQgbGVnZW5kVmFsdWVzID0gYXdhaXQgaGVscGVycy5nZXRTcGVjaWZpY0RhdGFJbmZvKHZpc3VhbCwgbGVnZW5kKTtcclxuXHJcbiAgICBsZXQgYWRkaXRpb25hbEZpbHRlcnMgPSBnbG9iYWwuc2VsZWN0ZWRUYXJnZXRzLmZpbHRlcihmdW5jdGlvbiAoc2VsZWN0ZWREYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkRGF0YS50YXJnZXQuY29sdW1uICE9IGF4aXMgJiYgc2VsZWN0ZWREYXRhLnRhcmdldC5jb2x1bW4gIT0gbGVnZW5kO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHZpc3VhbEludGVyYWN0aW9uSW5mbyA9IGhlbHBlcnMuZ2V0R2VuZXJhbEludGVyYWN0aW9uSW5mbyhhZGRpdGlvbmFsRmlsdGVycywgZGF0YU5hbWUpO1xyXG5cclxuICAgIGlmKGF4aXNWYWx1ZXMgJiYgbGVnZW5kVmFsdWVzKXtcclxuICAgICAgICB2aXN1YWxJbnRlcmFjdGlvbkluZm8gKz0gaGVscGVycy5nZXRUYXJnZXRJbnRlcmFjdGlvbkZpbHRlcihheGlzKTtcclxuICAgICAgICB2aXN1YWxJbnRlcmFjdGlvbkluZm8gKz0gXCIgYW5kIFwiO1xyXG4gICAgICAgIHZpc3VhbEludGVyYWN0aW9uSW5mbyArPSBoZWxwZXJzLmdldFRhcmdldEludGVyYWN0aW9uRmlsdGVyKGxlZ2VuZCk7XHJcbiAgICB9IGVsc2UgaWYoYXhpc1ZhbHVlcyl7XHJcbiAgICAgICAgdmlzdWFsSW50ZXJhY3Rpb25JbmZvICs9IGhlbHBlcnMuZ2V0VGFyZ2V0SW50ZXJhY3Rpb25GaWx0ZXIoYXhpcyk7XHJcbiAgICB9IGVsc2UgaWYobGVnZW5kVmFsdWVzKXtcclxuICAgICAgICB2aXN1YWxJbnRlcmFjdGlvbkluZm8gKz0gaGVscGVycy5nZXRUYXJnZXRJbnRlcmFjdGlvbkZpbHRlcihsZWdlbmQpO1xyXG4gICAgfVxyXG4gICAgdmlzdWFsSW50ZXJhY3Rpb25JbmZvICs9IFwiLlwiO1xyXG5cclxuICAgIHJldHVybiB2aXN1YWxJbnRlcmFjdGlvbkluZm87XHJcbn0iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCBpbmZvSW1nIGZyb20gXCIuLi9hc3NldHMvaW5mby5wbmdcIjtcclxuaW1wb3J0IHlBeGlzSW1nIGZyb20gXCIuLi9hc3NldHMveS1heGlzLnBuZ1wiO1xyXG5pbXBvcnQgeEF4aXNJbWcgZnJvbSBcIi4uL2Fzc2V0cy94LWF4aXMucG5nXCI7XHJcbmltcG9ydCBsZWdlbmRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9sZWdlbmQucG5nXCI7XHJcbmltcG9ydCBiYXJDaGFydEltZyBmcm9tIFwiLi4vYXNzZXRzL2Jhci1jaGFydC5wbmdcIjtcclxuaW1wb3J0IGxpbmVHcmFwaEltZyBmcm9tIFwiLi4vYXNzZXRzL2xpbmUtZ3JhcGgucG5nXCI7XHJcbmltcG9ydCBlbGVtQ2xpY2tJbWcgZnJvbSBcIi4uL2Fzc2V0cy9lbGVtZW50LWNsaWNrLnBuZ1wiO1xyXG5pbXBvcnQgYXhpc0NsaWNrSW1nIGZyb20gXCIuLi9hc3NldHMvYXhpcy1jbGljay5wbmdcIjtcclxuaW1wb3J0IGxlZ2VuZENsaWNrSW1nIGZyb20gXCIuLi9hc3NldHMvbGVnZW5kLWNsaWNrLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExpbmVDbHVzdGVyZWRDb2x1bW5Db21ib0NoYXJ0SW5mbyh2aXN1YWwpIHtcclxuICAgIGxldCBheGlzID0gYXdhaXQgaGVscGVycy5nZXRGaWVsZENvbHVtbih2aXN1YWwsIFwiQ2F0ZWdvcnlcIik7XHJcbiAgICBsZXQgY29sdW1uU2VyaWVzID0gYXdhaXQgaGVscGVycy5nZXRGaWVsZE1lYXN1cmVzKHZpc3VhbCwgXCJTZXJpZXNcIik7XHJcbiAgICBsZXQgY29sdW1uVmFsdWVzID0gYXdhaXQgaGVscGVycy5nZXRGaWVsZE1lYXN1cmVzKHZpc3VhbCwgXCJZXCIpO1xyXG4gICAgbGV0IGxpbmVWYWx1ZXMgPSBhd2FpdCBoZWxwZXJzLmdldEZpZWxkTWVhc3VyZXModmlzdWFsLCBcIlkyXCIpO1xyXG5cclxuICAgIGxldCBjb2x1bW5EYXRhID0gY29sdW1uU2VyaWVzLmNvbmNhdChjb2x1bW5WYWx1ZXMpO1xyXG4gICAgbGV0IGFsbERhdGEgPSBjb2x1bW5EYXRhLmNvbmNhdChsaW5lVmFsdWVzKTtcclxuICAgIGlmKGFsbERhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaGFzWUF4aXMgPSBoZWxwZXJzLmlzVmlzaWJsZSh2aXN1YWwsIFwiY2F0ZWdvcnlBeGlzXCIpO1xyXG4gICAgbGV0IGhhc1hBeGlzID0gaGVscGVycy5pc1Zpc2libGUodmlzdWFsLCBcInZhbHVlQXhpc1wiKTtcclxuICAgIGxldCBoYXNMZWdlbmQgPSBoZWxwZXJzLmlzVmlzaWJsZSh2aXN1YWwsIFwibGVnZW5kXCIpO1xyXG4gICAgbGV0IGhhc1Rvb2x0aXAgPSBoZWxwZXJzLmlzVmlzaWJsZSh2aXN1YWwsIFwidG9vbHRpcFwiKTtcclxuXHJcbiAgICBsZXQgZ2VuZXJhbEltYWdlcyA9IFtdO1xyXG4gICAgbGV0IGdlbmVyYWxJbmZvcyA9IFtdO1xyXG4gICAgbGV0IGRhdGFJbWFnZXMgPSBbXTtcclxuICAgIGxldCBkYXRhSW5mb3MgPVtdO1xyXG4gICAgbGV0IGludGVyYWN0aW9uSW1hZ2VzID0gW107XHJcbiAgICBsZXQgaW50ZXJhY3Rpb25JbmZvcyA9W107XHJcbiAgICAgICAgXHJcbiAgICBnZW5lcmFsSW1hZ2VzLnB1c2goaW5mb0ltZyk7XHJcbiAgICBnZW5lcmFsSW5mb3MucHVzaChcIlRoaXMgZWxlbWVudCBpcyBhIGxpbmUgY2x1c3RlcmVkIGNvbHVtbiBjb21ibyBjaGFydC4gSXQgY2FuIGNvbWJpbmUgbGluZXMgYW5kIGJhcnMgaW4gb25lIGNoYXJ0LlwiKTtcclxuXHJcbiAgICBpZihjb2x1bW5EYXRhLmxlbmd0aCAhPSAwKXtcclxuICAgICAgICBsZXQgYmFySW5mbyA9IFwiVGhpcyBncmFwaCBjb250YWlucyBiYXJzLjxicj5cIjtcclxuICAgICAgICBpZihheGlzKXtcclxuICAgICAgICAgICAgYmFySW5mbyArPSBcIlRoZSBiYXJzIGFyZSBzZXBhcmF0ZWQgaG9yaXpvdGFsbHkgYnkgXCIrIGF4aXMgKyBcIi48YnI+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvbHVtbkRhdGEubGVuZ3RoID09IDEpe1xyXG4gICAgICAgICAgICBiYXJJbmZvICs9IFwiVGhlIGJhcnMgb2YgdGhpcyBjaGFydCByZXByZXNlbnRzIFwiICsgY29sdW1uRGF0YVswXSArIFwiLlwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgZGF0YVN0cmluZyA9IGhlbHBlcnMuZGF0YVRvU3RyaW5nKGNvbHVtbkRhdGEpO1xyXG4gICAgICAgICAgICBiYXJJbmZvICs9IFwiRWFjaCBcIiArIGF4aXMgKyBcIiBoYXMgbW9yZSB0aGFuIG9uZSBiYXIuIFRoZSBiYXJzIG9mIHRoaXMgY2hhcnQgcmVwcmVzZW50IFwiICsgZGF0YVN0cmluZyArIFwiLiBUaGV5IGFyZSBkaXN0aW5ndWlzaGFibGUgYnkgdGhlaXIgY29sb3IuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFJbWFnZXMucHVzaChiYXJDaGFydEltZyk7XHJcbiAgICAgICAgZGF0YUluZm9zLnB1c2goYmFySW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYobGluZVZhbHVlcy5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgbGV0IGxpbmVJbmZvID0gXCJUaGlzIGdyYXBoIGNvbnRhaW5zIGxpbmVzLjxicj5cIjtcclxuICAgICAgICBpZihheGlzKXtcclxuICAgICAgICAgICAgbGluZUluZm8gKz0gXCJUaGUgbGluZXMgc2hvdyB0aGUgZGV2ZWxvcG1lbnQgb2YgdGhlaXIgZGF0YSBvdmVyIHRoZSBcIiArIGF4aXMgKyBcIi48YnI+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxpbmVWYWx1ZXMubGVuZ3RoID09IDEpe1xyXG4gICAgICAgICAgICBsaW5lSW5mbyArPSBcIlRoZSBsaW5lIHJlcHJlc2VudHMgdGhlIGRhdGEgb2YgXCIgKyBsaW5lVmFsdWVzWzBdICsgXCIuPGJyPlwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgZGF0YVN0cmluZyA9IGhlbHBlcnMuZGF0YVRvU3RyaW5nKGxpbmVWYWx1ZXMpO1xyXG4gICAgICAgICAgICBsaW5lSW5mbyArPSBcIlRoaXMgY2hhcnQgaGFzIG1vcmUgdGhhbiBvbmUgbGluZS4gVGhlIGxpbmVzIHJlcHJlc2VudCBcIiArIGRhdGFTdHJpbmcgKyBcIi4gVGhleSBhcmUgZGlzdGluZ3Vpc2hhYmxlIGJ5IHRoZWlyIGNvbG9yLjxicj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YUltYWdlcy5wdXNoKGxpbmVHcmFwaEltZyk7XHJcbiAgICAgICAgZGF0YUluZm9zLnB1c2gobGluZUluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyYWN0aW9uSW1hZ2VzLnB1c2goZWxlbUNsaWNrSW1nKTtcclxuICAgIGxldCBpbnRlcmFjdGlvbkluZm8gPSBcIldoZW4gY2xpY2tpbmcgb24gYSBsaW5lIG9yIGJhciB5b3UgY2FuIGZpbHRlciB0aGUgcmVwb3J0IGJ5IFwiICsgYXhpcyArIFwiLlwiO1xyXG4gICAgaWYoaGFzVG9vbHRpcCl7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbmZvICs9IFwiPC9icj5Zb3UgY2FuIGhvdmVyIG92ZXIgYSBiYXIgdG8gZ2V0IGRldGFpbGVkIGluZm9ybWF0aW9uIGFib3V0IGl0cyBkYXRhLlwiO1xyXG4gICAgfVxyXG4gICAgaW50ZXJhY3Rpb25JbmZvcy5wdXNoKGludGVyYWN0aW9uSW5mbyk7XHJcblxyXG4gICAgaWYoaGFzWEF4aXMpe1xyXG4gICAgICAgIGdlbmVyYWxJbWFnZXMucHVzaCh4QXhpc0ltZyk7XHJcbiAgICAgICAgZ2VuZXJhbEluZm9zLnB1c2goXCJUaGUgWC1heGlzIGRpc3BsYXllcyB0aGUgdmFsdWVzIG9mIHRoZSBcIiArIGF4aXMgKyBcIi5cIik7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbWFnZXMucHVzaChheGlzQ2xpY2tJbWcpO1xyXG4gICAgICAgIGludGVyYWN0aW9uSW5mb3MucHVzaChcIldoZW4gY2xpY2tpbmcgb24gb25lIG9mIHRoZSB4LWF4aXMtbGFiZWxzIHlvdSBjYW4gZmlsdGVyIHRoZSByZXBvcnQgYnkgXCIgKyBheGlzICsgXCIuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYoaGFzWUF4aXMpe1xyXG4gICAgICAgIGxldCBkYXRhU3RyaW5nID0gaGVscGVycy5kYXRhVG9TdHJpbmcoYWxsRGF0YSk7XHJcbiAgICAgICAgZ2VuZXJhbEltYWdlcy5wdXNoKHlBeGlzSW1nKTtcclxuICAgICAgICBnZW5lcmFsSW5mb3MucHVzaChcIlRoZSBZLWF4ZXMgZGlzcGxheSB0aGUgdmFsdWVzIG9mIHRoZSBcIiArIGRhdGFTdHJpbmcgKyBcIi5cIik7XHJcbiAgICB9XHJcbiAgICBpZihoYXNMZWdlbmQpe1xyXG4gICAgICAgIGdlbmVyYWxJbWFnZXMucHVzaChsZWdlbmRJbWcpO1xyXG4gICAgICAgIGdlbmVyYWxJbmZvcy5wdXNoKFwiVGhlIGxlZ2VuZCBkaXNwbGF5ZXMsIHdoaWNoIGRhdGEgaXMgcmVwcmVzZW50ZWQgYnkgdGhlIGJhcnMgYW5kIGxpbmVzIG9mIHRoaXMgY2hhcnQuIEl0IGFsc28gc2hvd3MgdGhlIGNvcnJlc3BvbmRpbmcgY29sb3IuXCIpO1xyXG4gICAgICAgIGludGVyYWN0aW9uSW1hZ2VzLnB1c2gobGVnZW5kQ2xpY2tJbWcpO1xyXG4gICAgICAgIGludGVyYWN0aW9uSW5mb3MucHVzaChcIldoZW4gY2xpY2tpbmcgb24gb25lIG9mIHRoZSBsYWJlbHMgaW4gdGhlIGxlZ2VuZCB5b3UgY2FuIGZpbHRlciB0aGUgcmVwb3J0IGJ5IHRoaXMgZGF0YS5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZW5lcmFsSW1hZ2VzLCBnZW5lcmFsSW5mb3MsIGRhdGFJbWFnZXMsIGRhdGFJbmZvcywgaW50ZXJhY3Rpb25JbWFnZXMsIGludGVyYWN0aW9uSW5mb3N9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGluZUNsdXN0ZXJlZENvbHVtbkNvbWJvQ2hhcnRJbnRlcmFjdGlvbkV4YW1wbGUodmlzdWFsKSB7XHJcbiAgICBsZXQgYXhpcyA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRDb2x1bW4odmlzdWFsLCBcIkNhdGVnb3J5XCIpO1xyXG4gICAgbGV0IGF4aXNWYWx1ZXMgPSBhd2FpdCBoZWxwZXJzLmdldFNwZWNpZmljRGF0YUluZm8odmlzdWFsLCBheGlzKTtcclxuICAgIGxldCBjb2x1bW5TZXJpZXMgPSBhd2FpdCBoZWxwZXJzLmdldEZpZWxkTWVhc3VyZXModmlzdWFsLCBcIlNlcmllc1wiKTtcclxuICAgIGxldCBjb2x1bW5WYWx1ZXMgPSBhd2FpdCBoZWxwZXJzLmdldEZpZWxkTWVhc3VyZXModmlzdWFsLCBcIllcIik7XHJcbiAgICBsZXQgbGluZVZhbHVlcyA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRNZWFzdXJlcyh2aXN1YWwsIFwiWTJcIik7XHJcbiAgICBcclxuICAgIGxldCBjb2x1bW5EYXRhID0gY29sdW1uU2VyaWVzLmNvbmNhdChjb2x1bW5WYWx1ZXMpO1xyXG5cclxuICAgIGxldCBtaWRkZWxPZkF4aXNWYWx1ZXMgPSBNYXRoLmZsb29yKGF4aXNWYWx1ZXMubGVuZ3RoLzIpO1xyXG5cclxuICAgIHZhciBpbnRlcmFjdGlvbkluZm87XHJcbiAgICBpZihsaW5lVmFsdWVzLmxlbmd0aCAhPSAwICYmIGNvbHVtbkRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgIGludGVyYWN0aW9uSW5mbyA9IFwiUGxlYXNlIGNsaWNrIG9uIHRoZSBsaW5lXCI7XHJcbiAgICAgICAgaWYoYXhpc1ZhbHVlcyAmJiBsaW5lVmFsdWVzKXtcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb25JbmZvICs9IFwiIHJlcHJlc2VudGluZyBcIiArIGxpbmVWYWx1ZXNbMF0gKyBcIiBhdCB0aGUgYXJlYSBvZiBcIiArIGF4aXNWYWx1ZXNbbWlkZGVsT2ZBeGlzVmFsdWVzXSArIFwiLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZihheGlzVmFsdWVzKXtcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb25JbmZvICs9IFwiIGF0IHRoZSBhcmVhIG9mIFwiICsgYXhpc1ZhbHVlc1ttaWRkZWxPZkF4aXNWYWx1ZXNdICsgXCIuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKGxpbmVWYWx1ZXMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICBpbnRlcmFjdGlvbkluZm8gKz0gXCIgcmVwcmVzZW50aW5nIFwiICsgbGluZVZhbHVlc1swXSArXCIuXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb25JbmZvICs9IFwiLlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbmZvID0gXCJQbGVhc2UgY2xpY2sgb24gdGhlIGJhciByZXByZXNlbnRpbmcgdGhlIFwiO1xyXG4gICAgICAgIGlmKGF4aXNWYWx1ZXMgJiYgY29sdW1uRGF0YS5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgICAgIGludGVyYWN0aW9uSW5mbyArPSBjb2x1bW5EYXRhWzBdICsgXCIgZm9yIFwiKyBheGlzVmFsdWVzW21pZGRlbE9mQXhpc1ZhbHVlc10gKyBcIi5cIjtcclxuICAgICAgICB9IGVsc2UgaWYoYXhpc1ZhbHVlcyl7XHJcbiAgICAgICAgICAgIGludGVyYWN0aW9uSW5mbyArPSBcIiBkYXRhIGZvciBcIiArIGF4aXNWYWx1ZXNbbWlkZGVsT2ZBeGlzVmFsdWVzXSArIFwiLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZihjb2x1bW5EYXRhLmxlbmd0aCAhPSAwKXtcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb25JbmZvICs9IGNvbHVtbkRhdGFbMF0gKyBcIi5cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnRlcmFjdGlvbkluZm8gKz0gXCIuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnRlcmFjdGlvbkluZm87XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMaW5lQ2x1c3RlcmVkQ29sdW1uQ29tYm9DaGFydENoYW5nZXModmlzdWFsKSB7XHJcbiAgICBsZXQgYXhpcyA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRDb2x1bW4odmlzdWFsLCBcIkNhdGVnb3J5XCIpO1xyXG4gICAgbGV0IGF4aXNWYWx1ZXMgPSBhd2FpdCBoZWxwZXJzLmdldFNwZWNpZmljRGF0YUluZm8odmlzdWFsLCBheGlzKTtcclxuICAgIGxldCBsaW5lVmFsdWVzID0gYXdhaXQgaGVscGVycy5nZXRGaWVsZE1lYXN1cmVzKHZpc3VhbCwgXCJZMlwiKTtcclxuICAgIGxldCBjb2x1bW5WYWx1ZXMgPSBhd2FpdCBoZWxwZXJzLmdldEZpZWxkTWVhc3VyZXModmlzdWFsLCBcIllcIik7XHJcbiAgICBsZXQgY29sdW1uU2VyaWVzID0gYXdhaXQgaGVscGVycy5nZXRGaWVsZE1lYXN1cmVzKHZpc3VhbCwgXCJTZXJpZXNcIik7XHJcblxyXG4gICAgbGV0IGNvbHVtbkRhdGEgPSBjb2x1bW5TZXJpZXMuY29uY2F0KGNvbHVtblZhbHVlcyk7XHJcbiAgICBsZXQgYWxsRGF0YSA9IGNvbHVtbkRhdGEuY29uY2F0KGxpbmVWYWx1ZXMpO1xyXG4gICAgbGV0IGFsbERhdGFTdHJpbmcgPSBoZWxwZXJzLmRhdGFUb1N0cmluZyhhbGxEYXRhKTtcclxuXHJcbiAgICBsZXQgYWRkaXRpb25hbEZpbHRlcnMgPSBnbG9iYWwuc2VsZWN0ZWRUYXJnZXRzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBkYXRhLnRhcmdldC5jb2x1bW4gIT0gYXhpcyAmJiAhYWxsRGF0YS5pbmNsdWRlcyhkYXRhLnRhcmdldC5jb2x1bW4pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHZpc3VhbEludGVyYWN0aW9uSW5mbyA9IGhlbHBlcnMuZ2V0R2VuZXJhbEludGVyYWN0aW9uSW5mbyhhZGRpdGlvbmFsRmlsdGVycywgYWxsRGF0YVN0cmluZyk7XHJcblxyXG4gICAgaWYoYXhpc1ZhbHVlcyl7XHJcbiAgICAgICAgdmlzdWFsSW50ZXJhY3Rpb25JbmZvICs9IGhlbHBlcnMuZ2V0VGFyZ2V0SW50ZXJhY3Rpb25GaWx0ZXIoYXhpcyk7XHJcbiAgICB9XHJcbiAgICB2aXN1YWxJbnRlcmFjdGlvbkluZm8gKz0gXCIuXCI7ICBcclxuXHJcbiAgICByZXR1cm4gdmlzdWFsSW50ZXJhY3Rpb25JbmZvO1xyXG59IiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXR0aW5ncygpe1xyXG4gICAgdmFyIHNldHRpbmdzID0gZ2xvYmFsLmNyZWF0ZVNldHRpbmdzT2JqZWN0KCk7XHJcbiAgICBzZXR0aW5ncy5yZXBvcnRPZmZzZXQgPSBzZXRSZXBvcnRPZmZzZXQoKTtcclxuICAgIHNldHRpbmdzLnZpc3VhbHMgPSBhd2FpdCBzZXRWaXN1YWxzSW5mbygpO1xyXG4gICAgc2V0dGluZ3MuZmlsdGVyVmlzdWFsID0gYXdhaXQgc2V0RmlsdGVySW5mbygpO1xyXG4gICAgc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlID0gc2V0SW50ZXJhY3Rpb25FeGFtcGxlSW5mbygpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2V0dGluZ3NcIiwgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UmVwb3J0T2Zmc2V0KCl7XHJcbiAgICBsZXQgc2V0dGluZ3NSZXBvcnRPZmZzZXQgPSBnbG9iYWwuY3JlYXRlUmVwb3J0T2Zmc2V0KCk7XHJcblxyXG4gICAgc2V0dGluZ3NSZXBvcnRPZmZzZXQudG9wID0gMDtcclxuICAgIHNldHRpbmdzUmVwb3J0T2Zmc2V0LmJvdHRvbSA9IDA7XHJcbiAgICBzZXR0aW5nc1JlcG9ydE9mZnNldC5sZWZ0ID0gMDtcclxuICAgIHNldHRpbmdzUmVwb3J0T2Zmc2V0LnJpZ2h0ID0gMDtcclxuXHJcbiAgICByZXR1cm4gc2V0dGluZ3NSZXBvcnRPZmZzZXQ7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldFZpc3VhbHNJbmZvKCl7XHJcbiAgICB2YXIgc2V0dGluZ3NWaXN1YWxzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHZpc3VhbCBvZiBnbG9iYWwuY3VycmVudFZpc3VhbHMpIHtcclxuICAgICAgICBsZXQgc2V0dGluZ3NWaXN1YWwgPSBnbG9iYWwuY3JlYXRlVmlzdWFsKCk7XHJcbiAgICAgICAgc2V0dGluZ3NWaXN1YWwuaWQgPSB2aXN1YWwubmFtZTtcclxuICAgICAgICBzZXR0aW5nc1Zpc3VhbC50aXRsZSA9IHZpc3VhbC50aXRsZTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdmlzdWFsSW5mb3MgPSBhd2FpdCBoZWxwZXJzLmdldFZpc3VhbEluZm9zKHZpc3VhbCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmlzdWFsSW5mb3MuZ2VuZXJhbEluZm9zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzVmlzdWFsLmdlbmVyYWxJbmZvc1N0YXR1cy5wdXNoKFwib3JpZ2luYWxcIik7XHJcbiAgICAgICAgICAgIHNldHRpbmdzVmlzdWFsLmNoYW5nZWRHZW5lcmFsSW5mb3MucHVzaChcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aXN1YWxJbmZvcy5kYXRhSW5mb3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NWaXN1YWwuZGF0YUluZm9zU3RhdHVzLnB1c2goXCJvcmlnaW5hbFwiKTtcclxuICAgICAgICAgICAgc2V0dGluZ3NWaXN1YWwuY2hhbmdlZERhdGFJbmZvcy5wdXNoKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpc3VhbEluZm9zLmludGVyYWN0aW9uSW5mb3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NWaXN1YWwuaW50ZXJhY3Rpb25JbmZvc1N0YXR1cy5wdXNoKFwib3JpZ2luYWxcIik7XHJcbiAgICAgICAgICAgIHNldHRpbmdzVmlzdWFsLmNoYW5nZWRJbnRlcmFjdGlvbkluZm9zLnB1c2goXCJcIik7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgc2V0dGluZ3NWaXN1YWxzLnB1c2goc2V0dGluZ3NWaXN1YWwpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gc2V0dGluZ3NWaXN1YWxzO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXRGaWx0ZXJJbmZvKCl7XHJcbiAgICBsZXQgc2V0dGluZ3NGaWx0ZXJWaXN1YWwgPSBnbG9iYWwuY3JlYXRlRmlsdGVyVmlzdWFsKCk7XHJcbiAgICBzZXR0aW5nc0ZpbHRlclZpc3VhbC50aXRsZSA9IFwiRmlsdGVyc1wiO1xyXG4gICAgc2V0dGluZ3NGaWx0ZXJWaXN1YWwuZ2VuZXJhbEluZm9ybWF0aW9uID0gXCJUaGlzIHBhZ2UgaGFzIGZvbGxvd2luZyBmaWx0ZXJzOlwiO1xyXG5cclxuICAgIGxldCBmaWx0ZXJzID0gYXdhaXQgZ2xvYmFsLnBhZ2UuZ2V0RmlsdGVycygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgc2V0dGluZ3NGaWx0ZXJWaXN1YWwuZmlsdGVySW5mb3NTdGF0dXMucHVzaChcIm9yaWdpbmFsXCIpO1xyXG4gICAgICAgIHNldHRpbmdzRmlsdGVyVmlzdWFsLmNoYW5nZWRGaWx0ZXJJbmZvcy5wdXNoKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXR0aW5nc0ZpbHRlclZpc3VhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0SW50ZXJhY3Rpb25FeGFtcGxlSW5mbygpe1xyXG4gICAgdmFyIHNldHRpbmdzSW50ZXJhY3Rpb25FeGFtcGxlID0gZ2xvYmFsLmNyZWF0ZUludGVyYWN0aW9uRXhhbXBsZSgpO1xyXG4gICAgc2V0dGluZ3NJbnRlcmFjdGlvbkV4YW1wbGUudGl0bGUgPSBcIkludGVyYWN0aW9uIEV4YW1wbGVcIjtcclxuICAgIHNldHRpbmdzSW50ZXJhY3Rpb25FeGFtcGxlLmdlbmVyYWxJbmZvU3RhdHVzID0gXCJvcmlnaW5hbFwiO1xyXG4gICAgc2V0dGluZ3NJbnRlcmFjdGlvbkV4YW1wbGUuY2hhbmdlZEdlbmVyYWxJbmZvID0gXCJcIjtcclxuICAgIHNldHRpbmdzSW50ZXJhY3Rpb25FeGFtcGxlLm5leHRWaXN1YWxIaW50ID0gXCJDYW4geW91IHNlZSBob3cgdGhpcyB2aXN1YWwgY2hhbmdlZD9cIjtcclxuICBcclxuICAgIGdsb2JhbC52aXN1YWxzLmZvckVhY2goZnVuY3Rpb24gKHZpc3VhbCkge1xyXG4gICAgICAgIGxldCBzZXR0aW5nc0ludGVyYWN0YWJsZVZpc3VhbCA9IGdsb2JhbC5jcmVhdGVJbnRlcmFjdGFibGVWaXN1YWwoKTtcclxuICAgICAgICBzZXR0aW5nc0ludGVyYWN0YWJsZVZpc3VhbC5pZCA9IHZpc3VhbC5uYW1lO1xyXG4gICAgICAgIHNldHRpbmdzSW50ZXJhY3RhYmxlVmlzdWFsLnRpdGxlID0gdmlzdWFsLnRpdGxlO1xyXG5cclxuICAgICAgICBsZXQgdHlwZSA9IGhlbHBlcnMuZ2V0VHlwZU5hbWUodmlzdWFsKTtcclxuICAgICAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NhcmQnOlxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3NJbnRlcmFjdGFibGVWaXN1YWwuY2xpY2tJbmZvc1N0YXR1cyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nc0ludGVyYWN0YWJsZVZpc3VhbC5jaGFuZ2VkQ2xpY2tJbmZvID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzSW50ZXJhY3RhYmxlVmlzdWFsLmludGVyYWN0aW9uQ2hhbmdlZEluZm9zU3RhdHVzID0gXCJvcmlnaW5hbFwiO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3NJbnRlcmFjdGFibGVWaXN1YWwuY2hhbmdlZEludGVyYWN0aW9uQ2hhbmdlZEluZm8gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NsaWNlcic6XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nc0ludGVyYWN0YWJsZVZpc3VhbC5jbGlja0luZm9zU3RhdHVzID0gXCJvcmlnbmluYWxcIjtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzSW50ZXJhY3RhYmxlVmlzdWFsLmNoYW5nZWRDbGlja0luZm8gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3NJbnRlcmFjdGFibGVWaXN1YWwuaW50ZXJhY3Rpb25DaGFuZ2VkSW5mb3NTdGF0dXMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3NJbnRlcmFjdGFibGVWaXN1YWwuY2hhbmdlZEludGVyYWN0aW9uQ2hhbmdlZEluZm8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nc0ludGVyYWN0YWJsZVZpc3VhbC5jbGlja0luZm9zU3RhdHVzID0gXCJvcmlnaW5hbFwiO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3NJbnRlcmFjdGFibGVWaXN1YWwuY2hhbmdlZENsaWNrSW5mbyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nc0ludGVyYWN0YWJsZVZpc3VhbC5pbnRlcmFjdGlvbkNoYW5nZWRJbmZvc1N0YXR1cyA9IFwib3JpZ2luYWxcIjtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzSW50ZXJhY3RhYmxlVmlzdWFsLmNoYW5nZWRJbnRlcmFjdGlvbkNoYW5nZWRJbmZvID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIHNldHRpbmdzSW50ZXJhY3Rpb25FeGFtcGxlLnZpc3VhbHMucHVzaChzZXR0aW5nc0ludGVyYWN0YWJsZVZpc3VhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2V0dGluZ3NJbnRlcmFjdGlvbkV4YW1wbGU7XHJcbn0iLCJpbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCAqIGFzIGVsZW1lbnRzIGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcbmltcG9ydCB7IGdldENsaWNrYWJsZVN0eWxlIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZUFsbCgpe1xyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgYXR0cmlidXRlcy5pZCA9IFwiZGlzYWJsZWRQYWdlXCI7XHJcbiAgICBhdHRyaWJ1dGVzLnN0eWxlID0gZ2V0R3JheURpdlN0eWxlKDAsIDAsIGdsb2JhbC5wYWdlLmRlZmF1bHRTaXplLndpZHRoLCBnbG9iYWwucGFnZS5kZWZhdWx0U2l6ZS5oZWlnaHQpO1xyXG4gICAgYXR0cmlidXRlcy5wYXJlbnRJZCA9IFwib25ib2FyZGluZ1wiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGF0dHJpYnV0ZXMpO1xyXG4gICAgZGlzYWJsZUZyYW1lKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRnJhbWUoKXtcclxuICAgIHJlbW92ZUZyYW1lKCk7XHJcbiAgICBkaXNhYmxlVG9wKCk7XHJcbiAgICBkaXNhYmxlRmlsdGVyKCk7XHJcbiAgICBkaXNhYmxlRm9vdGVyKCk7XHJcbiAgICBkaXNhYmxlTGVmdE9mZnNldCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZVRvcCgpe1xyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgYXR0cmlidXRlcy5pZCA9IFwiZGlzYWJsZWRUb3BcIjtcclxuICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBnZXRHcmF5RGl2U3R5bGUoZ2xvYmFsLmNvbnRhaW5lclBhZGRpbmdUb3AgLSBnbG9iYWwuc2V0dGluZ3MucmVwb3J0T2Zmc2V0LnRvcCwgZ2xvYmFsLmNvbnRhaW5lclBhZGRpbmdMZWZ0IC0gZ2xvYmFsLnNldHRpbmdzLnJlcG9ydE9mZnNldC5sZWZ0LCBnbG9iYWwucGFnZS5kZWZhdWx0U2l6ZS53aWR0aCArIGdsb2JhbC5zZXR0aW5ncy5yZXBvcnRPZmZzZXQubGVmdCwgZ2xvYmFsLnNldHRpbmdzLnJlcG9ydE9mZnNldC50b3ApO1xyXG4gICAgYXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiZW1iZWQtY29udGFpbmVyXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoYXR0cmlidXRlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRmlsdGVyKCl7XHJcbiAgICBsZXQgYXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVEaXZBdHRyaWJ1dGVzKCk7XHJcbiAgICBhdHRyaWJ1dGVzLmlkID0gXCJkaXNhYmxlZEZpbHRlclwiO1xyXG4gICAgYXR0cmlidXRlcy5zdHlsZSA9IGdldEdyYXlEaXZTdHlsZShnbG9iYWwuY29udGFpbmVyUGFkZGluZ1RvcCAtIGdsb2JhbC5zZXR0aW5ncy5yZXBvcnRPZmZzZXQudG9wLCBnbG9iYWwucGFnZS5kZWZhdWx0U2l6ZS53aWR0aCArIGdsb2JhbC5jb250YWluZXJQYWRkaW5nTGVmdCwgZ2xvYmFsLmZpbHRlck9wZW5lZFdpZHRoICsgZ2xvYmFsLnNldHRpbmdzLnJlcG9ydE9mZnNldC5yaWdodCwgZ2xvYmFsLnBhZ2UuZGVmYXVsdFNpemUuaGVpZ2h0ICArIGdsb2JhbC5zZXR0aW5ncy5yZXBvcnRPZmZzZXQudG9wKTtcclxuICAgIGF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImVtYmVkLWNvbnRhaW5lclwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGF0dHJpYnV0ZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZUZvb3Rlcigpe1xyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgYXR0cmlidXRlcy5pZCA9IFwiZGlzYWJsZWRGb290ZXJcIjtcclxuICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBnZXRHcmF5RGl2U3R5bGUoZ2xvYmFsLnBhZ2UuZGVmYXVsdFNpemUuaGVpZ2h0ICsgZ2xvYmFsLmNvbnRhaW5lclBhZGRpbmdUb3AsIGdsb2JhbC5jb250YWluZXJQYWRkaW5nTGVmdCwgZ2xvYmFsLnBhZ2UuZGVmYXVsdFNpemUud2lkdGggKyBnbG9iYWwuc2V0dGluZ3MucmVwb3J0T2Zmc2V0LnJpZ2h0ICsgZ2xvYmFsLmZpbHRlck9wZW5lZFdpZHRoLCBnbG9iYWwuZm9vdGVySGVpZ2h0ICsgZ2xvYmFsLnNldHRpbmdzLnJlcG9ydE9mZnNldC5ib3R0b20pO1xyXG4gICAgYXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiZW1iZWQtY29udGFpbmVyXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoYXR0cmlidXRlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlTGVmdE9mZnNldCgpe1xyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgYXR0cmlidXRlcy5pZCA9IFwiZGlzYWJsZWRMZWZ0T2Zmc2V0XCI7XHJcbiAgICBhdHRyaWJ1dGVzLnN0eWxlID0gZ2V0R3JheURpdlN0eWxlKGdsb2JhbC5jb250YWluZXJQYWRkaW5nVG9wLCBnbG9iYWwuY29udGFpbmVyUGFkZGluZ0xlZnQgLSBnbG9iYWwuc2V0dGluZ3MucmVwb3J0T2Zmc2V0LmxlZnQsIGdsb2JhbC5zZXR0aW5ncy5yZXBvcnRPZmZzZXQubGVmdCwgZ2xvYmFsLnBhZ2UuZGVmYXVsdFNpemUuaGVpZ2h0ICsgZ2xvYmFsLmZvb3RlckhlaWdodCArIGdsb2JhbC5zZXR0aW5ncy5yZXBvcnRPZmZzZXQuYm90dG9tKTtcclxuICAgIGF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImVtYmVkLWNvbnRhaW5lclwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGF0dHJpYnV0ZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJhbWUoKXtcclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJkaXNhYmxlZFRvcFwiKTtcclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJkaXNhYmxlZEZpbHRlclwiKTtcclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJkaXNhYmxlZEZvb3RlclwiKTtcclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJkaXNhYmxlZExlZnRPZmZzZXRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXNhYmxlZEFyZWEodmlzdWFsKXtcclxuICAgIGxldCByaWdodFggPSB2aXN1YWwubGF5b3V0LnggKyB2aXN1YWwubGF5b3V0LndpZHRoO1xyXG4gICAgbGV0IGxvd2VyWSA9IHZpc3VhbC5sYXlvdXQueSArIHZpc3VhbC5sYXlvdXQuaGVpZ2h0O1xyXG4gICAgbGV0IGxvd2VyRGlzdGFuY2UgPSBnbG9iYWwucGFnZS5kZWZhdWx0U2l6ZS5oZWlnaHQgLSBsb3dlclk7XHJcbiAgICBsZXQgcmlnaHREaXN0YW5jZSA9IGdsb2JhbC5wYWdlLmRlZmF1bHRTaXplLndpZHRoIC0gcmlnaHRYO1xyXG5cclxuICAgIGxldCBhdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZURpdkF0dHJpYnV0ZXMoKTtcclxuICAgIGF0dHJpYnV0ZXMuaWQgPSBcImRpc2FibGVkVXBwZXJcIjtcclxuICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBnZXRHcmF5RGl2U3R5bGUoMCwgMCwgZ2xvYmFsLnBhZ2UuZGVmYXVsdFNpemUud2lkdGgsIHZpc3VhbC5sYXlvdXQueSk7XHJcbiAgICBhdHRyaWJ1dGVzLnBhcmVudElkID0gXCJvbmJvYXJkaW5nXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoYXR0cmlidXRlcyk7XHJcblxyXG4gICAgYXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVEaXZBdHRyaWJ1dGVzKCk7XHJcbiAgICBhdHRyaWJ1dGVzLmlkID0gXCJkaXNhYmxlZExvd2VyXCI7XHJcbiAgICBhdHRyaWJ1dGVzLnN0eWxlID0gIGdldEdyYXlEaXZTdHlsZShsb3dlclksIDAsIGdsb2JhbC5wYWdlLmRlZmF1bHRTaXplLndpZHRoLCBsb3dlckRpc3RhbmNlKTtcclxuICAgIGF0dHJpYnV0ZXMucGFyZW50SWQgPSBcIm9uYm9hcmRpbmdcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZURpdihhdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBhdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZURpdkF0dHJpYnV0ZXMoKTtcclxuICAgIGF0dHJpYnV0ZXMuaWQgPSBcImRpc2FibGVkUmlnaHRcIjtcclxuICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSAgZ2V0R3JheURpdlN0eWxlKHZpc3VhbC5sYXlvdXQueSwgcmlnaHRYLCByaWdodERpc3RhbmNlLCB2aXN1YWwubGF5b3V0LmhlaWdodCk7XHJcbiAgICBhdHRyaWJ1dGVzLnBhcmVudElkID0gXCJvbmJvYXJkaW5nXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoYXR0cmlidXRlcyk7XHJcbiAgICBcclxuICAgIGF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgYXR0cmlidXRlcy5pZCA9IFwiZGlzYWJsZWRMZWZ0XCI7XHJcbiAgICBhdHRyaWJ1dGVzLnN0eWxlID0gIGdldEdyYXlEaXZTdHlsZSh2aXN1YWwubGF5b3V0LnksIDAsIHZpc3VhbC5sYXlvdXQueCwgdmlzdWFsLmxheW91dC5oZWlnaHQpO1xyXG4gICAgYXR0cmlidXRlcy5wYXJlbnRJZCA9IFwib25ib2FyZGluZ1wiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGF0dHJpYnV0ZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsdGVyRGlzYWJsZWRBcmVhKCl7XHJcbiAgICBlbGVtZW50cy5yZW1vdmVFbGVtZW50KFwiZGlzYWJsZWRGaWx0ZXJcIik7XHJcbiAgICBkaXNhYmxlVG9wKCk7XHJcbiAgICBkaXNhYmxlRm9vdGVyKCk7XHJcbiAgICBkaXNhYmxlTGVmdE9mZnNldCgpO1xyXG4gICAgXHJcbiAgICBsZXQgYXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVEaXZBdHRyaWJ1dGVzKCk7XHJcbiAgICBhdHRyaWJ1dGVzLmlkID0gXCJkaXNhYmxlZExlZnRcIjtcclxuICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSAgZ2V0R3JheURpdlN0eWxlKDAsIDAsIGdsb2JhbC5wYWdlLmRlZmF1bHRTaXplLndpZHRoLCBnbG9iYWwucGFnZS5kZWZhdWx0U2l6ZS5oZWlnaHQpO1xyXG4gICAgYXR0cmlidXRlcy5wYXJlbnRJZCA9IFwib25ib2FyZGluZ1wiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGF0dHJpYnV0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHcmF5RGl2U3R5bGUodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KXtcclxuICAgIHJldHVybiBnZXRDbGlja2FibGVTdHlsZSh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpICsgYGJhY2tncm91bmQtY29sb3I6cmdiKDc3LCA3NywgNzcpO29wYWNpdHk6MC44O2A7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgeyB0b2dnbGVWaXNhYmlsaXR5IH0gZnJvbSBcIi4vbGlzdE9mVmlzdWFsc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVWaXN1YWxCdXR0b24nKSB8fCBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVWaXN1YWxCdXR0b24nKSl7XHJcbiAgICAgICAgdG9nZ2xlVmlzYWJpbGl0eShldmVudC50YXJnZXQuY2xvc2VzdChcIi5kcmFnZ2FibGVcIikpOyAgXHJcbiAgICB9XHJcbiAgICBpZihldmVudC50YXJnZXQubm9kZU5hbWUgPT0gXCJCVVRUT05cIiB8fCBldmVudC50YXJnZXQucGFyZW50Tm9kZS5ub2RlTmFtZSA9PSBcIkJVVFRPTlwiIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmNvbGxhcHNlRm9ybVwiKSl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZ2xvYmFsLnNldERyYWdnYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuZHJhZ2dhYmxlXCIpKTtcclxuXHJcbiAgICBjb25zdCB2aXN1YWxQb3MgPSBnbG9iYWwuZHJhZ2dhYmxlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGdsb2JhbC5zZXRQb3NYKGV2ZW50LnBhZ2VYIC0gdmlzdWFsUG9zLmxlZnQpO1xyXG4gICAgZ2xvYmFsLnNldFBvc1koZXZlbnQucGFnZVkgLSB2aXN1YWxQb3MudG9wKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBjb25zdCB2aXN1YWxQb3MgPSBnbG9iYWwuZHJhZ2dhYmxlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBpZiAoIWdsb2JhbC5kcmFnZ2luZ1N0YXJ0ZWQpIHtcclxuICAgICAgICBnbG9iYWwuc2V0RHJhZ2dpbmdTdGFydGVkKHRydWUpO1xyXG5cclxuICAgICAgICBnbG9iYWwuc2V0UGxhY2Vob2xkZXJFbGVtZW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgICAgICBnbG9iYWwucGxhY2Vob2xkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgZ2xvYmFsLmRyYWdnYWJsZUVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICAgIGdsb2JhbC5wbGFjZWhvbGRlckVsZW1lbnQsXHJcbiAgICAgICAgICAgIGdsb2JhbC5kcmFnZ2FibGVFbGVtZW50Lm5leHRTaWJsaW5nXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLnBsYWNlaG9sZGVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt2aXN1YWxQb3MuaGVpZ2h0fXB4YDtcclxuICAgIH1cclxuXHJcbiAgICBnbG9iYWwuZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICBnbG9iYWwuZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3Zpc3VhbFBvcy53aWR0aH1weGA7XHJcbiAgICBnbG9iYWwuZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtldmVudC5wYWdlWSAtIGdsb2JhbC5wb3NZfXB4YDtcclxuICAgIGdsb2JhbC5kcmFnZ2FibGVFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtldmVudC5wYWdlWCAtIGdsb2JhbC5wb3NYfXB4YDtcclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0VsZW1lbnQgPSBnbG9iYWwuZHJhZ2dhYmxlRWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBnbG9iYWwucGxhY2Vob2xkZXJFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICBpZiAocHJldmlvdXNFbGVtZW50ICYmIGlzQmVmb3JlKGdsb2JhbC5kcmFnZ2FibGVFbGVtZW50LCBwcmV2aW91c0VsZW1lbnQpKSB7XHJcbiAgICAgICAgc3dhcExpc3RFbGVtZW50cyhnbG9iYWwucGxhY2Vob2xkZXJFbGVtZW50LCBnbG9iYWwuZHJhZ2dhYmxlRWxlbWVudCk7XHJcbiAgICAgICAgc3dhcExpc3RFbGVtZW50cyhnbG9iYWwucGxhY2Vob2xkZXJFbGVtZW50LCBwcmV2aW91c0VsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChuZXh0RWxlbWVudCAmJiBpc0JlZm9yZShuZXh0RWxlbWVudCwgZ2xvYmFsLmRyYWdnYWJsZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgc3dhcExpc3RFbGVtZW50cyhuZXh0RWxlbWVudCwgZ2xvYmFsLnBsYWNlaG9sZGVyRWxlbWVudCk7XHJcbiAgICAgICAgc3dhcExpc3RFbGVtZW50cyhuZXh0RWxlbWVudCwgZ2xvYmFsLmRyYWdnYWJsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoKSB7XHJcbiAgICBpZiggZ2xvYmFsLnBsYWNlaG9sZGVyRWxlbWVudCl7XHJcbiAgICAgICAgZ2xvYmFsLnBsYWNlaG9sZGVyRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdsb2JhbC5wbGFjZWhvbGRlckVsZW1lbnQpO1xyXG4gICAgICAgIGdsb2JhbC5zZXREcmFnZ2luZ1N0YXJ0ZWQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsb2JhbC5kcmFnZ2FibGVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcclxuICAgIGdsb2JhbC5kcmFnZ2FibGVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdsZWZ0Jyk7XHJcbiAgICBnbG9iYWwuZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncG9zaXRpb24nKTtcclxuXHJcbiAgICBnbG9iYWwuc2V0UG9zWChudWxsKTtcclxuICAgIGdsb2JhbC5zZXRQb3NZKG51bGwpO1xyXG4gICAgZ2xvYmFsLnNldERyYWdnYWJsZUVsZW1lbnQobnVsbCk7XHJcblxyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaXNCZWZvcmUobm9kZUEsIG5vZGVCKSB7XHJcbiAgICBjb25zdCBQb3NBID0gbm9kZUEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBQb3NCID0gbm9kZUIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIFBvc0EudG9wICsgUG9zQS5oZWlnaHQgLyAyIDwgUG9zQi50b3AgKyBQb3NCLmhlaWdodCAvIDI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzd2FwTGlzdEVsZW1lbnRzKG5vZGVBLCBub2RlQikge1xyXG4gICAgbGV0IHNpYmxpbmdPZkE7XHJcbiAgICBpZihub2RlQS5uZXh0U2libGluZyA9PSBub2RlQil7XHJcbiAgICAgICAgc2libGluZ09mQSA9IG5vZGVBO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgc2libGluZ09mQSA9IG5vZGVBLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIG5vZGVCLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGVBLCBub2RlQik7XHJcbiAgICBub2RlQS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlQiwgc2libGluZ09mQSk7XHJcbn07IiwiaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgKiBhcyBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb2xsYXBzZUJ1dHRvbiwgZ2V0RmlsdGVySW5mbyB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZpbHRlcnNHcm91cCgpe1xyXG4gICAgbGV0IGRpdkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgZGl2QXR0cmlidXRlcy5pZCA9IFwiZmlsdGVyR3JvdXBcIjtcclxuICAgIGRpdkF0dHJpYnV0ZXMuc3R5bGUgPSBcInBhZGRpbmc6IDEwcHg7Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XCI7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJlZGl0T25ib3JkaW5nXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoZGl2QXR0cmlidXRlcyk7XHJcblxyXG4gICAgbGV0IGgyQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVIMkF0dHJpYnV0ZXMoKTtcclxuICAgIGgyQXR0cmlidXRlcy5pZCA9IFwiZmlsdGVyTGFiZWxcIjtcclxuICAgIGgyQXR0cmlidXRlcy5zdHlsZSA9IFwiZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbi1ib3R0b206IDBweDtcIjtcclxuICAgIGgyQXR0cmlidXRlcy5jb250ZW50ID0gXCJGaWx0ZXIgSW5mb3JtYXRpb246XCI7XHJcbiAgICBoMkF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImZpbHRlckdyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVIMihoMkF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGNyZWF0ZUNvbGxhcHNlQnV0dG9uKFwiY29sbGFwc2VCdXR0b25GaWx0ZXJHcm91cFwiLCBcImZpbHRlckdyb3VwXCIpO1xyXG5cclxuICAgIGxldCBidXR0b25BdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZUJ1dHRvbkF0dHJpYnV0ZXMoKTtcclxuICAgIGJ1dHRvbkF0dHJpYnV0ZXMuaWQgPSBcInJlc2V0RmlsdGVySW5mb1wiO1xyXG4gICAgYnV0dG9uQXR0cmlidXRlcy5jb250ZW50ID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LWNvdW50ZXJjbG9ja3dpc2UgbWItMVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDNhNSA1IDAgMSAxLTQuNTQ2IDIuOTE0LjUuNSAwIDAgMC0uOTA4LS40MTdBNiA2IDAgMSAwIDggMnYxelwiLz48cGF0aCBkPVwiTTggNC40NjZWLjUzNGEuMjUuMjUgMCAwIDAtLjQxLS4xOTJMNS4yMyAyLjMwOGEuMjUuMjUgMCAwIDAgMCAuMzg0bDIuMzYgMS45NjZBLjI1LjI1IDAgMCAwIDggNC40NjZ6XCIvPjwvc3ZnPiBSZXNldGA7XHJcbiAgICBidXR0b25BdHRyaWJ1dGVzLnN0eWxlID0gIFwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiO1xyXG4gICAgYnV0dG9uQXR0cmlidXRlcy5jbGFzc2VzID0gZ2xvYmFsLmRhcmtPdXRsaW5lQnV0dG9uQ2xhc3MgKyBcIiBwb3NpdGlvblJpZ2h0XCI7XHJcbiAgICBidXR0b25BdHRyaWJ1dGVzLmZ1bmN0aW9uID0gcmVzZXRGaWx0ZXJJbmZvO1xyXG4gICAgYnV0dG9uQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiZmlsdGVyR3JvdXBcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZUJ1dHRvbihidXR0b25BdHRyaWJ1dGVzLCBmYWxzZSk7XHJcblxyXG4gICAgbGV0IHNtYWxsQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVTbWFsbEF0dHJpYnV0ZXMoKTtcclxuICAgIHNtYWxsQXR0cmlidXRlcy5pZCA9IFwiZmlsdGVySGVscFwiO1xyXG4gICAgc21hbGxBdHRyaWJ1dGVzLnN0eWxlID0gXCJtYXJnaW4tYm90dG9tOiAxMHB4O1wiO1xyXG4gICAgc21hbGxBdHRyaWJ1dGVzLmNvbnRlbnQgPSBcIkhlcmUgeW91IGNhbiBjaGFuZ2UgdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZXBvcnQgZmlsdGVycy5cIjtcclxuICAgIHNtYWxsQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiZmlsdGVyR3JvdXBcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZVNtYWxsKHNtYWxsQXR0cmlidXRlcyk7XHJcblxyXG4gICAgZGl2QXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVEaXZBdHRyaWJ1dGVzKCk7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLmlkID0gXCJjb2xsYXBzZUZvcm1maWx0ZXJHcm91cFwiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5jbGFzc2VzID0gXCJjb2xsYXBzZSBjb2xsYXBzZUZvcm1cIjtcclxuICAgIGRpdkF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImZpbHRlckdyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoZGl2QXR0cmlidXRlcyk7XHJcblxyXG4gICAgbGV0IGxhYmVsQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVMYWJlbEF0dHJpYnV0ZXMoKTtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5pZCA9IFwidGl0bGVMYWJlbEZpbHRlclwiO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLmZvciA9IFwidGl0bGVJbnB1dEZpbHRlclwiO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLnN0eWxlID0gXCJtYXJnaW4tbGVmdDogMTBweDttYXJnaW4tcmlnaHQ6IDEwcHg7XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuY29udGVudCA9IFwiVGl0bGU6XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImNvbGxhcHNlRm9ybWZpbHRlckdyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVMYWJlbChsYWJlbEF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGxldCBpbnB1dEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlSW5wdXRBdHRyaWJ1dGVzKCk7XHJcbiAgICBpbnB1dEF0dHJpYnV0ZXMuaWQgPSBcInRpdGxlSW5wdXRGaWx0ZXJcIjtcclxuICAgIGlucHV0QXR0cmlidXRlcy50eXBlID0gXCJzdHJpbmdcIjtcclxuICAgIGlucHV0QXR0cmlidXRlcy52YWx1ZSA9IGdsb2JhbC5zZXR0aW5ncy5maWx0ZXJWaXN1YWwudGl0bGU7XHJcbiAgICBpbnB1dEF0dHJpYnV0ZXMuc3R5bGUgPSBcIm1hcmdpbi1yaWdodDogMjBweDtiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c3RlZWxibHVlO1wiO1xyXG4gICAgaW5wdXRBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjb2xsYXBzZUZvcm1maWx0ZXJHcm91cFwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlSW5wdXQoaW5wdXRBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlTGFiZWxBdHRyaWJ1dGVzKCk7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuaWQgPSBcImdlbmVyYWxJbmZvTGFiZWxGaWx0ZXJcIjtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5mb3IgPSBcImdlbmVyYWxJbmZvSW5wdXRGaWx0ZXJcIjtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2s7bWFyZ2luLWxlZnQ6IDEwcHg7XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuY29udGVudCA9IFwiR2VuZXJhbCBJbmZvcm1hdGlvbjpcIjtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiY29sbGFwc2VGb3JtZmlsdGVyR3JvdXBcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZUxhYmVsKGxhYmVsQXR0cmlidXRlcyk7XHJcblxyXG4gICAgaW5wdXRBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZUlucHV0QXR0cmlidXRlcygpO1xyXG4gICAgaW5wdXRBdHRyaWJ1dGVzLmlkID0gXCJnZW5lcmFsSW5mb0lucHV0RmlsdGVyXCI7XHJcbiAgICBpbnB1dEF0dHJpYnV0ZXMudHlwZSA9IFwic3RyaW5nXCI7XHJcbiAgICBpbnB1dEF0dHJpYnV0ZXMudmFsdWUgPSBnbG9iYWwuc2V0dGluZ3MuZmlsdGVyVmlzdWFsLmdlbmVyYWxJbmZvcm1hdGlvbjtcclxuICAgIGlucHV0QXR0cmlidXRlcy5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2s7d2lkdGg6IDk1JTttYXJnaW4tbGVmdDogMTBweDtiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c3RlZWxibHVlO1wiO1xyXG4gICAgaW5wdXRBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjb2xsYXBzZUZvcm1maWx0ZXJHcm91cFwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlSW5wdXQoaW5wdXRBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlTGFiZWxBdHRyaWJ1dGVzKCk7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuaWQgPSBcImZpbHRlckluZm9zTGFiZWxcIjtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5mb3IgPSBcImZpbHRlckluZm9zVGV4dGFyZWFcIjtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2s7bWFyZ2luLWxlZnQ6IDEwcHg7XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuY29udGVudCA9IFwiRmlsdGVyIEluZm9ybWF0aW9uOlwiO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjb2xsYXBzZUZvcm1maWx0ZXJHcm91cFwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlTGFiZWwobGFiZWxBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBsZXQgZmlsdGVySW5mb3MgPSBhd2FpdCBnZXRGaWx0ZXJJbmZvcygpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVySW5mb3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBjcmVhdGVGaWx0ZXJUZXh0ZmllbGQoZmlsdGVySW5mb3MsIGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpbHRlckFkZEJ1dHRvbigpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRGaWx0ZXJJbmZvcygpe1xyXG4gICAgbGV0IGZpbHRlclN0YXR1cyA9IGdsb2JhbC5zZXR0aW5ncy5maWx0ZXJWaXN1YWwuZmlsdGVySW5mb3NTdGF0dXM7XHJcbiAgICBsZXQgY2hhbmdlZEZpbHRlckluZm9zID0gZ2xvYmFsLnNldHRpbmdzLmZpbHRlclZpc3VhbC5jaGFuZ2VkRmlsdGVySW5mb3M7XHJcbiAgICBsZXQgb3JpZ2luYWxGaWx0ZXJJbmZvcyA9IGF3YWl0IGdldEZpbHRlckluZm8oKTtcclxuXHJcbiAgICBsZXQgZmlsdGVySW5mb3MgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlclN0YXR1cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgc3dpdGNoKGZpbHRlclN0YXR1c1tpXSl7XHJcbiAgICAgICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMub3JpZ2luYWw6XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJJbmZvcy5wdXNoKG9yaWdpbmFsRmlsdGVySW5mb3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuY2hhbmdlZDpcclxuICAgICAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5hZGRlZDpcclxuICAgICAgICAgICAgICAgIGZpbHRlckluZm9zLnB1c2goY2hhbmdlZEZpbHRlckluZm9zW2ldKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZpbHRlckluZm9zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRGaWx0ZXJUZXh0YXJlYSgpe1xyXG4gICAgbGV0IHRleHRhcmVhQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVUZXh0YXJlYUF0dHJpYnV0ZXMoKTtcclxuICAgIHRleHRhcmVhQXR0cmlidXRlcy5jbGFzcyA9IFwiZmlsdGVySW5mb3NcIjtcclxuICAgIHRleHRhcmVhQXR0cmlidXRlcy5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2s7d2lkdGg6IDk1JTttYXJnaW4tYm90dG9tOiA1cHg7bWFyZ2luLWxlZnQ6IDEwcHg7YmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XCI7XHJcbiAgICB0ZXh0YXJlYUF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImFkZEZpbHRlckluZm9cIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZVRleHRhcmVhKHRleHRhcmVhQXR0cmlidXRlcywgdHJ1ZSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlc2V0RmlsdGVySW5mbygpe1xyXG4gICAgbGV0IHRpdGxlSW5wdXRGaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRGaWx0ZXJcIikgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICB0aXRsZUlucHV0RmlsdGVyLnZhbHVlID0gXCJGaWx0ZXJzXCI7XHJcbiAgICBnbG9iYWwuc2V0dGluZ3MuZmlsdGVyVmlzdWFsLnRpdGxlID0gXCJGaWx0ZXJzXCI7XHJcblxyXG4gICAgbGV0IGdlbmVyYWxJbmZvSW5wdXRGaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmVyYWxJbmZvSW5wdXRGaWx0ZXJcIikgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICBnZW5lcmFsSW5mb0lucHV0RmlsdGVyLnZhbHVlID0gXCJUaGlzIHBhZ2UgaGFzIGZvbGxvd2luZyBmaWx0ZXJzOlwiO1xyXG4gICAgZ2xvYmFsLnNldHRpbmdzLmZpbHRlclZpc3VhbC5nZW5lcmFsSW5mb3JtYXRpb24gPSBcIlRoaXMgcGFnZSBoYXMgZm9sbG93aW5nIGZpbHRlcnM6XCI7XHJcblxyXG4gICAgbGV0IGZpbHRlckluZm9zID0gYXdhaXQgZ2V0RmlsdGVySW5mbygpO1xyXG5cclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJhZGRGaWx0ZXJJbmZvXCIpO1xyXG4gICAgZWxlbWVudHMucmVtb3ZlQWxsRWxlbWVudHNPZkNsYXNzKFwiZmlsdGVySW5mb3NcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdsb2JhbC5zZXR0aW5ncy5maWx0ZXJWaXN1YWwuZmlsdGVySW5mb3NTdGF0dXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBpZihpIDwgZmlsdGVySW5mb3MubGVuZ3RoKXtcclxuICAgICAgICAgICAgY3JlYXRlRmlsdGVyVGV4dGZpZWxkKGZpbHRlckluZm9zLCBpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5maWx0ZXJWaXN1YWwuZmlsdGVySW5mb3NTdGF0dXNbaV0gPSBcIm9yaWdpbmFsXCI7XHJcbiAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5maWx0ZXJWaXN1YWwuY2hhbmdlZEZpbHRlckluZm9zW2ldID0gXCJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuZmlsdGVyVmlzdWFsLmZpbHRlckluZm9zU3RhdHVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmZpbHRlclZpc3VhbC5jaGFuZ2VkRmlsdGVySW5mb3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY3JlYXRlRmlsdGVyQWRkQnV0dG9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpbHRlckFkZEJ1dHRvbigpe1xyXG4gICAgbGV0IGFkZEJ1dHRvbkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlQnV0dG9uQXR0cmlidXRlcygpO1xyXG4gICAgYWRkQnV0dG9uQXR0cmlidXRlcy5pZCA9IFwiYWRkRmlsdGVySW5mb1wiO1xyXG4gICAgYWRkQnV0dG9uQXR0cmlidXRlcy5jb250ZW50ID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLXBsdXMtY2lyY2xlXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGQ9XCJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0em0wIDFBOCA4IDAgMSAwIDggMGE4IDggMCAwIDAgMCAxNnpcIi8+PHBhdGggZD1cIk04IDRhLjUuNSAwIDAgMSAuNS41djNoM2EuNS41IDAgMCAxIDAgMWgtM3YzYS41LjUgMCAwIDEtMSAwdi0zaC0zYS41LjUgMCAwIDEgMC0xaDN2LTNBLjUuNSAwIDAgMSA4IDR6XCIvPjwvc3ZnPiBBZGRgO1xyXG4gICAgYWRkQnV0dG9uQXR0cmlidXRlcy5zdHlsZSA9ICBcIm1hcmdpbjogYXV0bztkaXNwbGF5OiBibG9jaztcIjtcclxuICAgIGFkZEJ1dHRvbkF0dHJpYnV0ZXMuY2xhc3NlcyA9IGdsb2JhbC5kYXJrT3V0bGluZUJ1dHRvbkNsYXNzO1xyXG4gICAgYWRkQnV0dG9uQXR0cmlidXRlcy5mdW5jdGlvbiA9IGFkZEZpbHRlclRleHRhcmVhO1xyXG4gICAgYWRkQnV0dG9uQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiY29sbGFwc2VGb3JtZmlsdGVyR3JvdXBcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZUJ1dHRvbihhZGRCdXR0b25BdHRyaWJ1dGVzLCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpbHRlclRleHRmaWVsZChmaWx0ZXJJbmZvcywgaW5kZXgpe1xyXG4gICAgbGV0IGZpbHRlckluZm8gPSBmaWx0ZXJJbmZvc1tpbmRleF0ucmVwbGFjZUFsbChcIjxicj5cIiwgJ1xcclxcbicpO1xyXG4gICAgICAgIGxldCB0ZXh0YXJlYUF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlVGV4dGFyZWFBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgdGV4dGFyZWFBdHRyaWJ1dGVzLmlkID0gaW5kZXggKyBcImZpbHRlckluZm9zVGV4dGFyZWFcIjtcclxuICAgICAgICB0ZXh0YXJlYUF0dHJpYnV0ZXMuY2xhc3MgPSBcImZpbHRlckluZm9zXCI7XHJcbiAgICAgICAgdGV4dGFyZWFBdHRyaWJ1dGVzLnZhbHVlID0gZmlsdGVySW5mbztcclxuICAgICAgICB0ZXh0YXJlYUF0dHJpYnV0ZXMuc3R5bGUgPSBcImRpc3BsYXk6IGJsb2NrO3dpZHRoOiA5NSU7bWFyZ2luLWJvdHRvbTogNXB4O21hcmdpbi1sZWZ0OiAxMHB4O2JhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1wiO1xyXG4gICAgICAgIHRleHRhcmVhQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiY29sbGFwc2VGb3JtZmlsdGVyR3JvdXBcIjtcclxuICAgICAgICBlbGVtZW50cy5jcmVhdGVUZXh0YXJlYSh0ZXh0YXJlYUF0dHJpYnV0ZXMsIGZhbHNlKTtcclxufSIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuaW1wb3J0ICogYXMgZWxlbWVudHMgZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgZ2V0SW50ZXJhY3Rpb25UZXh0IH0gZnJvbSBcIi4vaW50ZXJhY3Rpb25FeGFtcGxlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW50ZXJhY3Rpb25FeGFtcGxlR3JvdXAoKXtcclxuICAgIGxldCBkaXZBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZURpdkF0dHJpYnV0ZXMoKTtcclxuICAgIGRpdkF0dHJpYnV0ZXMuaWQgPSBcImludGVyYWN0aW9uRXhhbXBsZUdyb3VwXCI7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLnN0eWxlID0gXCJwYWRkaW5nOiAxMHB4O2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1wiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiZWRpdE9uYm9yZGluZ1wiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGRpdkF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGxldCBoMkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlSDJBdHRyaWJ1dGVzKCk7XHJcbiAgICBoMkF0dHJpYnV0ZXMuaWQgPSBcImludGVyYWN0aW9uRXhhbXBsZUxhYmVsXCI7XHJcbiAgICBoMkF0dHJpYnV0ZXMuc3R5bGUgPSBcImRpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW4tYm90dG9tOiAwcHg7XCI7XHJcbiAgICBoMkF0dHJpYnV0ZXMuY29udGVudCA9IFwiSW50ZXJhY3Rpb24gRXhhbXBsZTpcIjtcclxuICAgIGgyQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiaW50ZXJhY3Rpb25FeGFtcGxlR3JvdXBcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZUgyKGgyQXR0cmlidXRlcyk7XHJcblxyXG4gICAgaGVscGVycy5jcmVhdGVDb2xsYXBzZUJ1dHRvbihcImNvbGxhcHNlQnV0dG9uSW50ZXJhY3Rpb25FeGFtcGxlR3JvdXBcIiwgXCJpbnRlcmFjdGlvbkV4YW1wbGVHcm91cFwiKTtcclxuXHJcbiAgICBsZXQgYnV0dG9uQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVCdXR0b25BdHRyaWJ1dGVzKCk7XHJcbiAgICBidXR0b25BdHRyaWJ1dGVzLmlkID0gXCJyZXNldEludGVyYWN0aW9uRXhhbXBsZUluZm9cIjtcclxuICAgIGJ1dHRvbkF0dHJpYnV0ZXMuY29udGVudCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1jb3VudGVyY2xvY2t3aXNlIG1iLTFcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAzYTUgNSAwIDEgMS00LjU0NiAyLjkxNC41LjUgMCAwIDAtLjkwOC0uNDE3QTYgNiAwIDEgMCA4IDJ2MXpcIi8+PHBhdGggZD1cIk04IDQuNDY2Vi41MzRhLjI1LjI1IDAgMCAwLS40MS0uMTkyTDUuMjMgMi4zMDhhLjI1LjI1IDAgMCAwIDAgLjM4NGwyLjM2IDEuOTY2QS4yNS4yNSAwIDAgMCA4IDQuNDY2elwiLz48L3N2Zz4gUmVzZXRgO1xyXG4gICAgYnV0dG9uQXR0cmlidXRlcy5zdHlsZSA9ICBcImRpc3BsYXk6IGlubGluZS1ibG9jaztcIjtcclxuICAgIGJ1dHRvbkF0dHJpYnV0ZXMuY2xhc3NlcyA9IGdsb2JhbC5kYXJrT3V0bGluZUJ1dHRvbkNsYXNzICsgXCIgcG9zaXRpb25SaWdodFwiO1xyXG4gICAgYnV0dG9uQXR0cmlidXRlcy5mdW5jdGlvbiA9IHJlc2V0SW50ZXJhY3Rpb25FeGFtcGxlSW5mbztcclxuICAgIGJ1dHRvbkF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImludGVyYWN0aW9uRXhhbXBsZUdyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVCdXR0b24oYnV0dG9uQXR0cmlidXRlcywgZmFsc2UpO1xyXG5cclxuICAgIGxldCBzbWFsbEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlU21hbGxBdHRyaWJ1dGVzKCk7XHJcbiAgICBzbWFsbEF0dHJpYnV0ZXMuaWQgPSBcImludGVyYWN0aW9uRXhhbXBsZUhlbHBcIjtcclxuICAgIHNtYWxsQXR0cmlidXRlcy5zdHlsZSA9IFwibWFyZ2luLWJvdHRvbTogMTBweDtcIjtcclxuICAgIHNtYWxsQXR0cmlidXRlcy5jb250ZW50ID0gXCJIZXJlIHlvdSBjYW4gY2hhbmdlIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgaW50ZXJhY3Rpb24gZXhhbXBsZS5cIjtcclxuICAgIHNtYWxsQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiaW50ZXJhY3Rpb25FeGFtcGxlR3JvdXBcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZVNtYWxsKHNtYWxsQXR0cmlidXRlcyk7XHJcblxyXG4gICAgZGl2QXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVEaXZBdHRyaWJ1dGVzKCk7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLmlkID0gXCJjb2xsYXBzZUZvcm1pbnRlcmFjdGlvbkV4YW1wbGVHcm91cFwiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5jbGFzc2VzID0gXCJjb2xsYXBzZSBjb2xsYXBzZUZvcm1cIjtcclxuICAgIGRpdkF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImludGVyYWN0aW9uRXhhbXBsZUdyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoZGl2QXR0cmlidXRlcyk7XHJcblxyXG4gICAgbGV0IGxhYmVsQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVMYWJlbEF0dHJpYnV0ZXMoKTtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5pZCA9IFwidGl0bGVMYWJlbEludGVyYWN0aW9uRXhhbXBsZVwiO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLmZvciA9IFwidGl0bGVJbnB1dEludGVyYWN0aW9uRXhhbXBsZVwiO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLnN0eWxlID0gXCJtYXJnaW4tbGVmdDogMTBweDttYXJnaW4tcmlnaHQ6IDEwcHg7XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuY29udGVudCA9IFwiVGl0bGU6XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImNvbGxhcHNlRm9ybWludGVyYWN0aW9uRXhhbXBsZUdyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVMYWJlbChsYWJlbEF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGxldCBpbnB1dEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlSW5wdXRBdHRyaWJ1dGVzKCk7XHJcbiAgICBpbnB1dEF0dHJpYnV0ZXMuaWQgPSBcInRpdGxlSW5wdXRJbnRlcmFjdGlvbkV4YW1wbGVcIjtcclxuICAgIGlucHV0QXR0cmlidXRlcy50eXBlID0gXCJzdHJpbmdcIjtcclxuICAgIGlucHV0QXR0cmlidXRlcy52YWx1ZSA9IGdsb2JhbC5zZXR0aW5ncy5pbnRlcmFjdGlvbkV4YW1wbGUudGl0bGU7XHJcbiAgICBpbnB1dEF0dHJpYnV0ZXMuc3R5bGUgPSBcIm1hcmdpbi1yaWdodDogMjBweDtiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c3RlZWxibHVlO1wiO1xyXG4gICAgaW5wdXRBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjb2xsYXBzZUZvcm1pbnRlcmFjdGlvbkV4YW1wbGVHcm91cFwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlSW5wdXQoaW5wdXRBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlTGFiZWxBdHRyaWJ1dGVzKCk7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuaWQgPSBcImdlbmVyYWxJbmZvTGFiZWxJbnRlcmFjdGlvbkV4YW1wbGVcIjtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5mb3IgPSBcImdlbmVyYWxJbmZvSW5wdXRJbnRlcmFjdGlvbkV4YW1wbGVcIjtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2s7bWFyZ2luLWxlZnQ6IDEwcHg7XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuY29udGVudCA9IFwiR2VuZXJhbCBJbmZvcm1hdGlvbjpcIjtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiY29sbGFwc2VGb3JtaW50ZXJhY3Rpb25FeGFtcGxlR3JvdXBcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZUxhYmVsKGxhYmVsQXR0cmlidXRlcyk7XHJcblxyXG4gICAgbGV0IHRleHRhcmVhQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVUZXh0YXJlYUF0dHJpYnV0ZXMoKTtcclxuICAgIHRleHRhcmVhQXR0cmlidXRlcy5pZCA9IFwiZ2VuZXJhbEluZm9JbnB1dEludGVyYWN0aW9uRXhhbXBsZVwiO1xyXG4gICAgdGV4dGFyZWFBdHRyaWJ1dGVzLnZhbHVlID0gaGVscGVycy5nZXRJbnRlcmFjdGlvbkV4YW1wbGVHZW5lcmFsSW5mbygpO1xyXG4gICAgdGV4dGFyZWFBdHRyaWJ1dGVzLnN0eWxlID0gXCJkaXNwbGF5OiBibG9jazt3aWR0aDogOTUlO21hcmdpbi1sZWZ0OiAxMHB4O2JhY2tncm91bmQtY29sb3I6bGlnaHRzdGVlbGJsdWU7XCI7XHJcbiAgICB0ZXh0YXJlYUF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImNvbGxhcHNlRm9ybWludGVyYWN0aW9uRXhhbXBsZUdyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVUZXh0YXJlYSh0ZXh0YXJlYUF0dHJpYnV0ZXMsIGZhbHNlKTtcclxuXHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlTGFiZWxBdHRyaWJ1dGVzKCk7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuaWQgPSBcImhpbnRMYWJlbEludGVyYWN0aW9uRXhhbXBsZVwiO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLmZvciA9IFwiaGludElucHV0SW50ZXJhY3Rpb25FeGFtcGxlXCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuc3R5bGUgPSBcImRpc3BsYXk6IGJsb2NrO21hcmdpbi1sZWZ0OiAxMHB4O1wiO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLmNvbnRlbnQgPSBcIkhpbnQgZm9yIHRoZSBjaGFuZ2VzIG9mIHRoZSBuZXh0IHZpc3VhbDpcIjtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiY29sbGFwc2VGb3JtaW50ZXJhY3Rpb25FeGFtcGxlR3JvdXBcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZUxhYmVsKGxhYmVsQXR0cmlidXRlcyk7XHJcblxyXG4gICAgaW5wdXRBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZUlucHV0QXR0cmlidXRlcygpO1xyXG4gICAgaW5wdXRBdHRyaWJ1dGVzLmlkID0gXCJoaW50SW5wdXRJbnRlcmFjdGlvbkV4YW1wbGVcIjtcclxuICAgIGlucHV0QXR0cmlidXRlcy50eXBlID0gXCJzdHJpbmdcIjtcclxuICAgIGlucHV0QXR0cmlidXRlcy52YWx1ZSA9IGdsb2JhbC5zZXR0aW5ncy5pbnRlcmFjdGlvbkV4YW1wbGUubmV4dFZpc3VhbEhpbnQ7XHJcbiAgICBpbnB1dEF0dHJpYnV0ZXMuc3R5bGUgPSBcImRpc3BsYXk6IGJsb2NrO3dpZHRoOiA5NSU7bWFyZ2luLWxlZnQ6IDEwcHg7YmFja2dyb3VuZC1jb2xvcjpsaWdodHN0ZWVsYmx1ZTtcIjtcclxuICAgIGlucHV0QXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiY29sbGFwc2VGb3JtaW50ZXJhY3Rpb25FeGFtcGxlR3JvdXBcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZUlucHV0KGlucHV0QXR0cmlidXRlcyk7XHJcblxyXG4gICAgbGFiZWxBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZUxhYmVsQXR0cmlidXRlcygpO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLmlkID0gXCJpbnRlcmFjdGlvbkV4YW1wbGVWaXN1YWxzSW5mb0xhYmVsXCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuZm9yID0gXCJpbnRlcmFjdGlvbkV4YW1wbGVJbmZvc1RleHRhcmVhXCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuc3R5bGUgPSBcImRpc3BsYXk6IGJsb2NrO21hcmdpbi1sZWZ0OiAxMHB4O1wiO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLmNvbnRlbnQgPSBcIkludGVyYWN0aW9uIGluZm9ybWF0aW9ucyBmb3IgYWxsIHZpc3VhbHM6XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImNvbGxhcHNlRm9ybWludGVyYWN0aW9uRXhhbXBsZUdyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVMYWJlbChsYWJlbEF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGdsb2JhbC5hbGxWaXN1YWxzLmZvckVhY2goZnVuY3Rpb24gKHZpc3VhbCkge1xyXG4gICAgICAgIGxldCBkaXZBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZURpdkF0dHJpYnV0ZXMoKTtcclxuICAgICAgICBkaXZBdHRyaWJ1dGVzLmlkID0gXCJpbnRlcmFjdGlvbkV4YW1wbGVcIiArIHZpc3VhbC5uYW1lO1xyXG4gICAgICAgIGRpdkF0dHJpYnV0ZXMuc3R5bGUgPSBcInBhZGRpbmc6IDVweDtib3JkZXI6IDFweCBzb2xpZCBibGFjaztib3JkZXItcmFkaXVzOiA1cHhcIjtcclxuICAgICAgICBkaXZBdHRyaWJ1dGVzLmNvbnRlbnQgPSBoZWxwZXJzLmdldFZpc3VhbFRpdGxlKHZpc3VhbCk7XHJcbiAgICAgICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiY29sbGFwc2VGb3JtaW50ZXJhY3Rpb25FeGFtcGxlR3JvdXBcIjtcclxuICAgICAgICBlbGVtZW50cy5jcmVhdGVEaXYoZGl2QXR0cmlidXRlcyk7XHJcbiAgICAgICAgY3JlYXRlSW50ZXJhY3Rpb25FeGFtcGxlQ29sbGFwc2VGb3JtKHZpc3VhbCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVzZXRJbnRlcmFjdGlvbkV4YW1wbGVJbmZvKCl7XHJcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dEludGVyYWN0aW9uRXhhbXBsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIkludGVyYWN0aW9uIEV4YW1wbGVcIjtcclxuICAgIGdsb2JhbC5zZXR0aW5ncy5pbnRlcmFjdGlvbkV4YW1wbGUudGl0bGUgPSBcIkludGVyYWN0aW9uIEV4YW1wbGVcIjtcclxuXHJcbiAgICBsZXQgZ2VuZXJhbEluZm9zVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmVyYWxJbmZvSW5wdXRJbnRlcmFjdGlvbkV4YW1wbGVcIikgYXMgSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGw7XHJcbiAgICBsZXQgb3JpZ2luYWxHZW5lcmFsSW5mbyA9IGhlbHBlcnMuZ2V0R2VuZXJhbEluZm9JbnRlcmFjdGlvbkV4YW1wbGVUZXh0KCk7XHJcbiAgICBnZW5lcmFsSW5mb3NUZXh0YXJlYS52YWx1ZSA9IG9yaWdpbmFsR2VuZXJhbEluZm87XHJcbiAgICBnbG9iYWwuc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlLmdlbmVyYWxJbmZvU3RhdHVzID0gXCJvcmlnaW5hbFwiO1xyXG4gICAgZ2xvYmFsLnNldHRpbmdzLmludGVyYWN0aW9uRXhhbXBsZS5jaGFuZ2VkR2VuZXJhbEluZm8gPSBcIlwiO1xyXG5cclxuICAgIGxldCBuZXh0SGludElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaW50SW5wdXRJbnRlcmFjdGlvbkV4YW1wbGVcIikgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICBuZXh0SGludElucHV0LnZhbHVlID0gXCJDYW4geW91IHNlZSBob3cgdGhpcyB2aXN1YWwgY2hhbmdlZD9cIjtcclxuICAgIGdsb2JhbC5zZXR0aW5ncy5pbnRlcmFjdGlvbkV4YW1wbGUubmV4dFZpc3VhbEhpbnQgPSBcIkNhbiB5b3Ugc2VlIGhvdyB0aGlzIHZpc3VhbCBjaGFuZ2VkP1wiO1xyXG4gIFxyXG4gICAgZm9yIChjb25zdCB2aXN1YWwgb2YgZ2xvYmFsLmFsbFZpc3VhbHMpIHtcclxuICAgICAgICBsZXQgdmlzdWFsRGF0YSA9IGhlbHBlcnMuZ2V0RGF0YU9mSW50ZXJhY3Rpb25WaXN1YWwodmlzdWFsKVxyXG5cclxuICAgICAgICBpZih2aXN1YWxEYXRhLmNsaWNrSW5mb3NTdGF0dXMpe1xyXG4gICAgICAgICAgICBsZXQgY2xpY2tJbmZvc1RleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmFjdGlvbkV4YW1wbGVJbnRlcmFjdGlvbkluZm9zVGV4dGFyZWFcIiArIHZpc3VhbC5uYW1lKWFzIEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsO1xyXG4gICAgICAgICAgICBsZXQgY2xpY2tJbmZvID0gYXdhaXQgZ2V0SW50ZXJhY3Rpb25UZXh0KHZpc3VhbCk7XHJcbiAgICAgICAgICAgIGNsaWNrSW5mb3NUZXh0YXJlYS52YWx1ZSA9IGNsaWNrSW5mbztcclxuICAgICAgICAgICAgdmlzdWFsRGF0YS5jbGlja0luZm9zU3RhdHVzID0gXCJvcmlnaW5hbFwiO1xyXG4gICAgICAgICAgICB2aXN1YWxEYXRhLmNoYW5nZWRDbGlja0luZm8gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodmlzdWFsRGF0YS5pbnRlcmFjdGlvbkNoYW5nZWRJbmZvc1N0YXR1cyl7XHJcbiAgICAgICAgICAgIGxldCBjaGFuZ2VkSW5mb3NUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJhY3Rpb25FeGFtcGxlQ2hhbmdlZEluZm9zVGV4dGFyZWFcIiArIHZpc3VhbC5uYW1lKWFzIEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsO1xyXG4gICAgICAgICAgICBsZXQgY2hhbmdlZEluZm8gPSBhd2FpdCBoZWxwZXJzLmdldEludGVyYWN0aW9uRXhhbXBsZUNoYW5nZXNUZXh0KHZpc3VhbCk7XHJcbiAgICAgICAgICAgIGNoYW5nZWRJbmZvc1RleHRhcmVhLnZhbHVlID0gY2hhbmdlZEluZm87XHJcbiAgICAgICAgICAgIHZpc3VhbERhdGEuaW50ZXJhY3Rpb25DaGFuZ2VkSW5mb3NTdGF0dXMgPSBcIm9yaWdpbmFsXCI7XHJcbiAgICAgICAgICAgIHZpc3VhbERhdGEuY2hhbmdlZEludGVyYWN0aW9uQ2hhbmdlZEluZm8gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW50ZXJhY3Rpb25FeGFtcGxlQ29sbGFwc2VGb3JtKHZpc3VhbCl7XHJcbiAgICBsZXQgdmlzdWFsRGF0YSA9IGhlbHBlcnMuZ2V0RGF0YU9mSW50ZXJhY3Rpb25WaXN1YWwodmlzdWFsKTtcclxuXHJcbiAgICBoZWxwZXJzLmNyZWF0ZUNvbGxhcHNlQnV0dG9uKFwiY29sbGFwc2VCdXR0b25JbnRlcmFjdGlvbkV4YW1wbGVcIiArIHZpc3VhbC5uYW1lLCBcImludGVyYWN0aW9uRXhhbXBsZVwiICsgdmlzdWFsLm5hbWUpO1xyXG5cclxuICAgIGxldCBkaXZBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZURpdkF0dHJpYnV0ZXMoKTtcclxuICAgIGRpdkF0dHJpYnV0ZXMuaWQgPSBcImNvbGxhcHNlRm9ybWludGVyYWN0aW9uRXhhbXBsZVwiICsgdmlzdWFsLm5hbWU7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLmNsYXNzZXMgPSBcImNvbGxhcHNlIGNvbGxhcHNlRm9ybVwiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5zdHlsZSA9IFwibWFyZ2luLXRvcDogNXB4O3BhZGRpbmc6IDEwcHg7Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7Ym9yZGVyLXJhZGl1czogNXB4O2JveC1zaGFkb3c6IDVweCA1cHggNXB4IGdyYXksMHB4IDVweCA1cHggZ3JheVwiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiaW50ZXJhY3Rpb25FeGFtcGxlXCIgKyB2aXN1YWwubmFtZTtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZURpdihkaXZBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBpZih2aXN1YWxEYXRhLmNsaWNrSW5mb3NTdGF0dXMpe1xyXG4gICAgICAgIGxldCBsYWJlbEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlTGFiZWxBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgbGFiZWxBdHRyaWJ1dGVzLmlkID0gXCJpbnRlcmFjdGlvbkV4YW1wbGVJbnRlcmFjdGlvbkluZm9zTGFiZWxcIiArIHZpc3VhbC5uYW1lO1xyXG4gICAgICAgIGxhYmVsQXR0cmlidXRlcy5mb3IgPSBcImludGVyYWN0aW9uRXhhbXBsZUludGVyYWN0aW9uSW5mb3NUZXh0YXJlYVwiICsgdmlzdWFsLm5hbWU7XHJcbiAgICAgICAgbGFiZWxBdHRyaWJ1dGVzLnN0eWxlID0gXCJkaXNwbGF5OiBibG9jazttYXJnaW4tbGVmdDogMTBweDtcIjtcclxuICAgICAgICBsYWJlbEF0dHJpYnV0ZXMuY29udGVudCA9IFwiSW50ZXJhY3Rpb24gaW5mb3JtYXRpb24gdG8gY2xpY2s6XCI7XHJcbiAgICAgICAgbGFiZWxBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjb2xsYXBzZUZvcm1pbnRlcmFjdGlvbkV4YW1wbGVcIiArIHZpc3VhbC5uYW1lO1xyXG4gICAgICAgIGVsZW1lbnRzLmNyZWF0ZUxhYmVsKGxhYmVsQXR0cmlidXRlcyk7XHJcblxyXG4gICAgICAgIGxldCBpbnRlcmFjdGlvbkluZm8gPSBhd2FpdCBoZWxwZXJzLmdldEludGVyYWN0aW9uRXhhbXBsZUludGVyYWN0aW9uSW5mbyh2aXN1YWwsIHZpc3VhbERhdGEpO1xyXG4gICAgICAgIGxldCB0ZXh0YXJlYUF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlVGV4dGFyZWFBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgdGV4dGFyZWFBdHRyaWJ1dGVzLmlkID0gXCJpbnRlcmFjdGlvbkV4YW1wbGVJbnRlcmFjdGlvbkluZm9zVGV4dGFyZWFcIiArIHZpc3VhbC5uYW1lO1xyXG4gICAgICAgIHRleHRhcmVhQXR0cmlidXRlcy5jbGFzcyA9IFwiaW50ZXJhY3Rpb25FeGFtcGxlSW50ZXJhY3Rpb25JbmZvc1wiICsgdmlzdWFsLm5hbWU7XHJcbiAgICAgICAgdGV4dGFyZWFBdHRyaWJ1dGVzLnZhbHVlID0gaW50ZXJhY3Rpb25JbmZvO1xyXG4gICAgICAgIHRleHRhcmVhQXR0cmlidXRlcy5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2s7d2lkdGg6IDk1JTttYXJnaW4tYm90dG9tOiA1cHg7bWFyZ2luLWxlZnQ6IDEwcHg7YmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XCI7XHJcbiAgICAgICAgdGV4dGFyZWFBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjb2xsYXBzZUZvcm1pbnRlcmFjdGlvbkV4YW1wbGVcIiArIHZpc3VhbC5uYW1lO1xyXG4gICAgICAgIGVsZW1lbnRzLmNyZWF0ZVRleHRhcmVhKHRleHRhcmVhQXR0cmlidXRlcywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHZpc3VhbERhdGEuaW50ZXJhY3Rpb25DaGFuZ2VkSW5mb3NTdGF0dXMpe1xyXG4gICAgICAgIGxldCBsYWJlbEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlTGFiZWxBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgbGFiZWxBdHRyaWJ1dGVzLmlkID0gXCJpbnRlcmFjdGlvbkV4YW1wbGVDaGFuZ2VkSW5mb3NMYWJlbFwiICsgdmlzdWFsLm5hbWU7XHJcbiAgICAgICAgbGFiZWxBdHRyaWJ1dGVzLmZvciA9IFwiaW50ZXJhY3Rpb25FeGFtcGxlQ2hhbmdlZEluZm9zVGV4dGFyZWFcIiArIHZpc3VhbC5uYW1lO1xyXG4gICAgICAgIGxhYmVsQXR0cmlidXRlcy5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2s7bWFyZ2luLWxlZnQ6IDEwcHg7XCI7XHJcbiAgICAgICAgbGFiZWxBdHRyaWJ1dGVzLmNvbnRlbnQgPSBcIkNoYW5nZWQgaW50ZXJhY3Rpb24gaW5mb3JtYXRpb246XCI7XHJcbiAgICAgICAgbGFiZWxBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjb2xsYXBzZUZvcm1pbnRlcmFjdGlvbkV4YW1wbGVcIiArIHZpc3VhbC5uYW1lO1xyXG4gICAgICAgIGVsZW1lbnRzLmNyZWF0ZUxhYmVsKGxhYmVsQXR0cmlidXRlcyk7XHJcblxyXG4gICAgICAgIGxldCBjaGFuZ2VkSW5mbyA9IGF3YWl0IGhlbHBlcnMuZ2V0SW50ZXJhY3Rpb25FeGFtcGxlQ2hhbmdlZEluZm8odmlzdWFsLCB2aXN1YWxEYXRhKTtcclxuICAgICAgICBsZXQgdGV4dGFyZWFBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZVRleHRhcmVhQXR0cmlidXRlcygpO1xyXG4gICAgICAgIHRleHRhcmVhQXR0cmlidXRlcy5pZCA9IFwiaW50ZXJhY3Rpb25FeGFtcGxlQ2hhbmdlZEluZm9zVGV4dGFyZWFcIiArIHZpc3VhbC5uYW1lO1xyXG4gICAgICAgIHRleHRhcmVhQXR0cmlidXRlcy5jbGFzcyA9IFwiaW50ZXJhY3Rpb25FeGFtcGxlQ2hhbmdlZEluZm9zXCIgKyB2aXN1YWwubmFtZTtcclxuICAgICAgICB0ZXh0YXJlYUF0dHJpYnV0ZXMudmFsdWUgPSBjaGFuZ2VkSW5mbztcclxuICAgICAgICB0ZXh0YXJlYUF0dHJpYnV0ZXMuc3R5bGUgPSBcImRpc3BsYXk6IGJsb2NrO3dpZHRoOiA5NSU7bWFyZ2luLWJvdHRvbTogNXB4O21hcmdpbi1sZWZ0OiAxMHB4O2JhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1wiO1xyXG4gICAgICAgIHRleHRhcmVhQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiY29sbGFwc2VGb3JtaW50ZXJhY3Rpb25FeGFtcGxlXCIgKyB2aXN1YWwubmFtZTtcclxuICAgICAgICBlbGVtZW50cy5jcmVhdGVUZXh0YXJlYSh0ZXh0YXJlYUF0dHJpYnV0ZXMsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCAqIGFzIGVsZW1lbnRzIGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbGxhcHNlQnV0dG9uLCBmaXJzdExldHRlclRvVXBwZXJDYXNlIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVwb3J0T2Zmc2V0R3JvdXAoKXtcclxuICAgIGxldCBkaXZBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZURpdkF0dHJpYnV0ZXMoKTtcclxuICAgIGRpdkF0dHJpYnV0ZXMuaWQgPSBcIm9mZnNldEdyb3VwXCI7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLnN0eWxlID0gXCJwYWRkaW5nOiAxMHB4O2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1wiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiZWRpdE9uYm9yZGluZ1wiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGRpdkF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGxldCBoMkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlSDJBdHRyaWJ1dGVzKCk7XHJcbiAgICBoMkF0dHJpYnV0ZXMuaWQgPSBcIm9mZnNldExhYmVsXCI7XHJcbiAgICBoMkF0dHJpYnV0ZXMuc3R5bGUgPSBcImRpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW4tYm90dG9tOiAwcHg7XCI7XHJcbiAgICBoMkF0dHJpYnV0ZXMuY29udGVudCA9IFwiUmVwb3J0IE9mZnNldDpcIjtcclxuICAgIGgyQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwib2Zmc2V0R3JvdXBcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZUgyKGgyQXR0cmlidXRlcyk7XHJcblxyXG4gICAgY3JlYXRlQ29sbGFwc2VCdXR0b24oXCJjb2xsYXBzZUJ1dHRvbk9mZnNldEdyb3VwXCIsIFwib2Zmc2V0R3JvdXBcIik7XHJcblxyXG4gICAgbGV0IHNtYWxsQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVTbWFsbEF0dHJpYnV0ZXMoKTtcclxuICAgIHNtYWxsQXR0cmlidXRlcy5pZCA9IFwib2Zmc2V0SGVscFwiO1xyXG4gICAgc21hbGxBdHRyaWJ1dGVzLnN0eWxlID0gXCJtYXJnaW4tYm90dG9tOiAxMHB4O1wiO1xyXG4gICAgc21hbGxBdHRyaWJ1dGVzLmNvbnRlbnQgPSBcIklmIG91ciByZXBvcnQgaGFzIHNvbWUgcGFkZGluZyBwbGVhc2Ugc2V0IHRoZXNlIHZhbHVlcy4gU28gdGhhdCB0aGUgb25ib2FyZGluZyBjYW4gZml0dCBvbnRvcCBvZiB0aGUgcmVwb3J0LlwiO1xyXG4gICAgc21hbGxBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJvZmZzZXRHcm91cFwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlU21hbGwoc21hbGxBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBkaXZBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZURpdkF0dHJpYnV0ZXMoKTtcclxuICAgIGRpdkF0dHJpYnV0ZXMuaWQgPSBcImNvbGxhcHNlRm9ybW9mZnNldEdyb3VwXCI7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLmNsYXNzZXMgPSBcImNvbGxhcHNlIGNvbGxhcHNlRm9ybVwiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IFwib2Zmc2V0R3JvdXBcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZURpdihkaXZBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBjcmVhdGVPZmZzZXRJbnB1dChcInRvcFwiLCBnbG9iYWwuc2V0dGluZ3MucmVwb3J0T2Zmc2V0LnRvcCk7XHJcbiAgICBjcmVhdGVPZmZzZXRJbnB1dChcImJvdHRvbVwiLCBnbG9iYWwuc2V0dGluZ3MucmVwb3J0T2Zmc2V0LmJvdHRvbSk7XHJcbiAgICBjcmVhdGVPZmZzZXRJbnB1dChcImxlZnRcIiwgZ2xvYmFsLnNldHRpbmdzLnJlcG9ydE9mZnNldC5sZWZ0KTtcclxuICAgIGNyZWF0ZU9mZnNldElucHV0KFwicmlnaHRcIiwgZ2xvYmFsLnNldHRpbmdzLnJlcG9ydE9mZnNldC5yaWdodCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9mZnNldElucHV0KHR5cGUsIG9mZnNldFNldHRpbmcpe1xyXG4gICAgbGV0IGxhYmVsQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVMYWJlbEF0dHJpYnV0ZXMoKTtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5pZCA9IHR5cGUgKyBcIk9mZnNldExhYmVsXCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuZm9yID0gdHlwZSArIFwiT2Zmc2V0SW5wdXRcIjtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5zdHlsZSA9IFwibWFyZ2luLWxlZnQ6IDEwcHg7bWFyZ2luLXJpZ2h0OiAxMHB4O1wiO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLmNvbnRlbnQgPSBmaXJzdExldHRlclRvVXBwZXJDYXNlKHR5cGUpICsgXCI6XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImNvbGxhcHNlRm9ybW9mZnNldEdyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVMYWJlbChsYWJlbEF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGxldCBpbnB1dEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlSW5wdXRBdHRyaWJ1dGVzKCk7XHJcbiAgICBpbnB1dEF0dHJpYnV0ZXMuaWQgPSB0eXBlICsgXCJPZmZzZXRJbnB1dFwiO1xyXG4gICAgaW5wdXRBdHRyaWJ1dGVzLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgaW5wdXRBdHRyaWJ1dGVzLnZhbHVlID0gb2Zmc2V0U2V0dGluZy50b1N0cmluZygpO1xyXG4gICAgaW5wdXRBdHRyaWJ1dGVzLnN0eWxlID0gXCJtYXJnaW4tcmlnaHQ6IDIwcHg7d2lkdGg6IDEwMHB4O2JhY2tncm91bmQtY29sb3I6bGlnaHRzdGVlbGJsdWU7XCI7XHJcbiAgICBpbnB1dEF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImNvbGxhcHNlRm9ybW9mZnNldEdyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVJbnB1dChpbnB1dEF0dHJpYnV0ZXMpO1xyXG59IiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgKiBhcyBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVMaXN0T2ZWaXN1YWxzIH0gZnJvbSBcIi4vbGlzdE9mVmlzdWFsc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpc3VhbHNHcm91cCgpe1xyXG4gICAgbGV0IGRpdkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgZGl2QXR0cmlidXRlcy5pZCA9IFwidmlzdWFsc0dyb3VwXCI7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLnN0eWxlID0gXCJwYWRkaW5nOiAxMHB4O2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1wiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiZWRpdE9uYm9yZGluZ1wiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGRpdkF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGxldCBoMkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlSDJBdHRyaWJ1dGVzKCk7XHJcbiAgICBoMkF0dHJpYnV0ZXMuaWQgPSBcInZpc3VhbHNMYWJlbFwiO1xyXG4gICAgaDJBdHRyaWJ1dGVzLnN0eWxlID0gXCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7bWFyZ2luLWJvdHRvbTogMHB4O1wiO1xyXG4gICAgaDJBdHRyaWJ1dGVzLmNvbnRlbnQgPSBcIlZpc3VhbHM6XCI7XHJcbiAgICBoMkF0dHJpYnV0ZXMucGFyZW50SWQgPSBcInZpc3VhbHNHcm91cFwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlSDIoaDJBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBsZXQgYnV0dG9uQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVCdXR0b25BdHRyaWJ1dGVzKCk7XHJcbiAgICBidXR0b25BdHRyaWJ1dGVzLmlkID0gXCJyZXNldFZpc3VhbHNJbmZvXCI7XHJcbiAgICBidXR0b25BdHRyaWJ1dGVzLmNvbnRlbnQgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktYXJyb3ctY291bnRlcmNsb2Nrd2lzZSBtYi0xXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggM2E1IDUgMCAxIDEtNC41NDYgMi45MTQuNS41IDAgMCAwLS45MDgtLjQxN0E2IDYgMCAxIDAgOCAydjF6XCIvPjxwYXRoIGQ9XCJNOCA0LjQ2NlYuNTM0YS4yNS4yNSAwIDAgMC0uNDEtLjE5Mkw1LjIzIDIuMzA4YS4yNS4yNSAwIDAgMCAwIC4zODRsMi4zNiAxLjk2NkEuMjUuMjUgMCAwIDAgOCA0LjQ2NnpcIi8+PC9zdmc+IFJlc2V0YDtcclxuICAgIGJ1dHRvbkF0dHJpYnV0ZXMuc3R5bGUgPSAgXCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI7XHJcbiAgICBidXR0b25BdHRyaWJ1dGVzLmNsYXNzZXMgPSBnbG9iYWwuZGFya091dGxpbmVCdXR0b25DbGFzcyArIFwiIHBvc2l0aW9uUmlnaHRcIjtcclxuICAgIGJ1dHRvbkF0dHJpYnV0ZXMuZnVuY3Rpb24gPSByZXNldFZpc3VhbHNJbmZvO1xyXG4gICAgYnV0dG9uQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwidmlzdWFsc0dyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVCdXR0b24oYnV0dG9uQXR0cmlidXRlcywgZmFsc2UpO1xyXG5cclxuICAgIGxldCBzbWFsbEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlU21hbGxBdHRyaWJ1dGVzKCk7XHJcbiAgICBzbWFsbEF0dHJpYnV0ZXMuaWQgPSBcInZpc3VhbHNIZWxwXCI7XHJcbiAgICBzbWFsbEF0dHJpYnV0ZXMuc3R5bGUgPSBcIm1hcmdpbi1ib3R0b206IDEwcHg7XCI7XHJcbiAgICBzbWFsbEF0dHJpYnV0ZXMuY29udGVudCA9IFwiSGVyZSB5b3UgY2FuIGNoYW5nZSB0aGUgcHJvcGVyaWVzIG9mIHRoZSB2aXN1YWxzLiBZb3UgY2FuIGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIHZpc3VhbHMgYnkgbW92aW5nIHRoZSBsaXN0IGVsZW1lbnRzIHVwIGFuZCBkb3duLiBJdCBpcyBwb3NzaWJsZSB0byBza2lwIHZpc3VhbHMgaW4gdGhlIG9uYm9hcmRpbmcgYW5kIGVkaXQgdGhlIGNvbnRlbnQgb2YgdGhlIGluZm8gYnViYmxlcy5cIjtcclxuICAgIHNtYWxsQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwidmlzdWFsc0dyb3VwXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVTbWFsbChzbWFsbEF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGRpdkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgZGl2QXR0cmlidXRlcy5pZCA9IFwidmlzdWFsc0xpc3RcIjtcclxuICAgIGRpdkF0dHJpYnV0ZXMucGFyZW50SWQgPSBcInZpc3VhbHNHcm91cFwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGRpdkF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGNyZWF0ZUxpc3RPZlZpc3VhbHMoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVzZXRWaXN1YWxzSW5mbygpe1xyXG4gICAgZWxlbWVudHMucmVtb3ZlQWxsRWxlbWVudHNPZkNsYXNzKFwiZHJhZ2dhYmxlXCIpO1xyXG5cclxuICAgIGdsb2JhbC5hbGxWaXN1YWxzLmZvckVhY2goYXN5bmMgZnVuY3Rpb24gKHZpc3VhbCkge1xyXG4gICAgICAgIGxldCB2aXN1YWxEYXRhID0gaGVscGVycy5nZXREYXRhT2ZWaXN1YWwodmlzdWFsKTtcclxuXHJcbiAgICAgICAgdmlzdWFsRGF0YS50aXRsZSA9IHZpc3VhbC50aXRsZTtcclxuICAgICAgICB2aXN1YWxEYXRhLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciB2aXN1YWxJbmZvcyA9IGF3YWl0IGhlbHBlcnMuZ2V0VmlzdWFsSW5mb3ModmlzdWFsKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aXN1YWxEYXRhLmdlbmVyYWxJbmZvc1N0YXR1cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZihpIDwgdmlzdWFsSW5mb3MuZ2VuZXJhbEluZm9zLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmdlbmVyYWxJbmZvc1N0YXR1c1tpXSA9IFwib3JpZ2luYWxcIjtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuY2hhbmdlZEdlbmVyYWxJbmZvc1tpXSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmdlbmVyYWxJbmZvc1N0YXR1cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmNoYW5nZWRHZW5lcmFsSW5mb3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpc3VhbERhdGEuZGF0YUluZm9zU3RhdHVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmKGkgPCB2aXN1YWxJbmZvcy5kYXRhSW5mb3MubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuZGF0YUluZm9zU3RhdHVzW2ldID0gXCJvcmlnaW5hbFwiO1xyXG4gICAgICAgICAgICAgICAgdmlzdWFsRGF0YS5jaGFuZ2VkRGF0YUluZm9zW2ldID0gXCJcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuZGF0YUluZm9zU3RhdHVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuY2hhbmdlZERhdGFJbmZvcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmlzdWFsRGF0YS5pbnRlcmFjdGlvbkluZm9zU3RhdHVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmKGkgPCB2aXN1YWxJbmZvcy5pbnRlcmFjdGlvbkluZm9zLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmludGVyYWN0aW9uSW5mb3NTdGF0dXNbaV0gPSBcIm9yaWdpbmFsXCI7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmNoYW5nZWRJbnRlcmFjdGlvbkluZm9zW2ldID0gXCJcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZpc3VhbERhdGEuaW50ZXJhY3Rpb25JbmZvc1N0YXR1cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB2aXN1YWxEYXRhLmNoYW5nZWRJbnRlcmFjdGlvbkluZm9zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGhlbHBlcnMub3JkZXJTZXR0aW5nc1Zpc3VhbHMoZ2xvYmFsLmFsbFZpc3VhbHMpO1xyXG5cclxuICAgIGNyZWF0ZUxpc3RPZlZpc3VhbHMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyVmlzdWFscygpe1xyXG4gICAgdmFyIG5ld09yZGVyVmlzdWFscyA9IFtdO1xyXG4gICAgbGV0IGRyYWdnYWJsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHJhZ2dhYmxlXCIpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGRyYWdnYWJsZXMsIGZ1bmN0aW9uIChkcmFnZ2FibGUpIHtcclxuICAgICAgICBsZXQgdmlzdWFsID0gZ2xvYmFsLmFsbFZpc3VhbHMuZmluZChmdW5jdGlvbiAodmlzdWFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aXN1YWwubmFtZSA9PSBkcmFnZ2FibGUuaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHZpc3VhbERhdGEgPSBnbG9iYWwuc2V0dGluZ3MudmlzdWFscy5maW5kKGZ1bmN0aW9uICh2aXN1YWxEYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aXN1YWxEYXRhLmlkID09IHZpc3VhbC5uYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCF2aXN1YWxEYXRhLmRpc2FibGVkKXtcclxuICAgICAgICAgbmV3T3JkZXJWaXN1YWxzLnB1c2godmlzdWFsKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZ2xvYmFsLnNldFZpc3VhbHMobmV3T3JkZXJWaXN1YWxzKTtcclxuXHJcbiAgICBsZXQgYWxsVmlzdWFscyA9IFsuLi5nbG9iYWwuYWxsVmlzdWFsc107XHJcbiAgICBhbGxWaXN1YWxzLnNvcnQoZnVuY3Rpb24oYSwgYil7IFxyXG4gICAgICAgIHJldHVybiBnbG9iYWwuY3VycmVudFZpc3VhbHMuaW5kZXhPZihhKSAtIGdsb2JhbC5jdXJyZW50VmlzdWFscy5pbmRleE9mKGIpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGhlbHBlcnMub3JkZXJTZXR0aW5nc1Zpc3VhbHMoYWxsVmlzdWFscylcclxufSIsImltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuaW1wb3J0IHsgZ2V0VmlzdWFsSW5kZXgsIHJlbW92ZUNvbnRhaW5lck9mZnNldCwgcmVtb3ZlT25ib2FyZGluZ092ZXJsYXkgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRmlsdGVySW5mb0NhcmQgfSBmcm9tIFwiLi9maWx0ZXJJbmZvQ2FyZHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlSW5mb0NhcmQgfSBmcm9tIFwiLi9pbmZvQ2FyZHNcIjtcclxuaW1wb3J0IHsgcmVtb3ZlSGludENhcmQsIHJlbW92ZVNob3dDaGFuZ2VzQ2FyZCB9IGZyb20gXCIuL3Nob3dSZXBvcnRDaGFuZ2VzXCI7XHJcbmltcG9ydCB7IHNob3dWaXN1YWxDaGFuZ2VzIH0gZnJvbSBcIi4vc2hvd1Zpc3VhbHNDaGFuZ2VzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkU3R5bGVzaGVldChVUkwpe1xyXG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgc3R5bGUucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcbiAgICBzdHlsZS5ocmVmPSBVUkw7XHJcblxyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpdihhdHRyaWJ1dGVzKXtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5pZCA9IGF0dHJpYnV0ZXMuaWQ7XHJcbiAgICBkaXYuc3R5bGUuY3NzVGV4dCA9IGF0dHJpYnV0ZXMuc3R5bGU7XHJcbiAgICBkaXYuY2xhc3NOYW1lID0gYXR0cmlidXRlcy5jbGFzc2VzO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGF0dHJpYnV0ZXMuY29udGVudDtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIGF0dHJpYnV0ZXMucm9sZSk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsIGF0dHJpYnV0ZXMubGFiZWwpO1xyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoYXR0cmlidXRlcy5ldmVudFR5cGUsIGF0dHJpYnV0ZXMuZXZlbnRGdW5jdGlvbik7XHJcbiAgICBpZihhdHRyaWJ1dGVzLmNsaWNrYWJsZSl7XHJcbiAgICAgICAgZGl2Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZihnbG9iYWwuaW50ZXJhY3Rpb25Nb2RlKXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbnRhaW5lck9mZnNldCgpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlT25ib2FyZGluZ092ZXJsYXkoKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZVNob3dDaGFuZ2VzQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSGludENhcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRWaXN1YWwgPSBnbG9iYWwuY3VycmVudFZpc3VhbHNbZ2V0VmlzdWFsSW5kZXgoYXR0cmlidXRlcy5pZCldO1xyXG4gICAgICAgICAgICAgICAgc2hvd1Zpc3VhbENoYW5nZXMoc2VsZWN0ZWRWaXN1YWwpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZU9uYm9hcmRpbmdPdmVybGF5KCk7XHJcbiAgICAgICAgICAgICAgICBpZihhdHRyaWJ1dGVzLmlkID09PSBcImZpbHRlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuc2V0Q3VycmVudFZpc3VhbEluZGV4KGdsb2JhbC5jdXJyZW50VmlzdWFscy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUZpbHRlckluZm9DYXJkKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuc2V0Q3VycmVudFZpc3VhbEluZGV4KGdldFZpc3VhbEluZGV4KGF0dHJpYnV0ZXMuaWQpKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbmZvQ2FyZChnbG9iYWwuY3VycmVudFZpc3VhbHNbZ2xvYmFsLmN1cnJlbnRWaXN1YWxJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRyaWJ1dGVzLnBhcmVudElkKS5hcHBlbmRDaGlsZChkaXYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGF0dHJpYnV0ZXMsIGluc2VydEJlZm9yZVBhcmVudCl7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uaWQgPSBhdHRyaWJ1dGVzLmlkO1xyXG4gICAgYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IGF0dHJpYnV0ZXMuY2xhc3NlcztcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmNvbnRlbnQ7XHJcbiAgICBidXR0b24uc3R5bGUuY3NzVGV4dCA9IGF0dHJpYnV0ZXMuc3R5bGU7XHJcbiAgICBidXR0b24ub25jbGljayA9IGF0dHJpYnV0ZXMuZnVuY3Rpb247XHJcblxyXG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dHJpYnV0ZXMucGFyZW50SWQpO1xyXG4gICAgaWYoaW5zZXJ0QmVmb3JlUGFyZW50KXtcclxuICAgICAgICBwYXJlbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYnV0dG9uLCBwYXJlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIH0gXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTcGFuKGF0dHJpYnV0ZXMpe1xyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuLmlkID0gYXR0cmlidXRlcy5pZDtcclxuICAgIHNwYW4uaW5uZXJIVE1MID0gYXR0cmlidXRlcy5jb250ZW50O1xyXG4gICAgc3Bhbi5hcmlhSGlkZGVuID0gYXR0cmlidXRlcy5oaWRkZW47XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0cmlidXRlcy5wYXJlbnRJZCkuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIMShhdHRyaWJ1dGVzKXtcclxuICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoMS5pZCA9IGF0dHJpYnV0ZXMuaWQ7XHJcbiAgICBoMS5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmNvbnRlbnQ7XHJcbiAgICBoMS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlcy5zdHlsZTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRyaWJ1dGVzLnBhcmVudElkKS5hcHBlbmRDaGlsZChoMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIMihhdHRyaWJ1dGVzKXtcclxuICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoMi5pZCA9IGF0dHJpYnV0ZXMuaWQ7XHJcbiAgICBoMi5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmNvbnRlbnQ7XHJcbiAgICBoMi5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlcy5zdHlsZTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRyaWJ1dGVzLnBhcmVudElkKS5hcHBlbmRDaGlsZChoMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVTChhdHRyaWJ1dGVzKXtcclxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICB1bC5pZCA9IGF0dHJpYnV0ZXMuaWQ7XHJcbiAgICB1bC5jbGFzc05hbWUgPSBhdHRyaWJ1dGVzLmNsYXNzZXM7XHJcbiAgICBpZihhdHRyaWJ1dGVzLnJvbGUpe1xyXG4gICAgICAgIHVsLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgYXR0cmlidXRlcy5yb2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRyaWJ1dGVzLnBhcmVudElkKS5hcHBlbmRDaGlsZCh1bCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMSShhdHRyaWJ1dGVzKXtcclxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5pZCA9IGF0dHJpYnV0ZXMuaWQ7XHJcbiAgICBsaS5jbGFzc05hbWUgPSBhdHRyaWJ1dGVzLmNsYXNzZXM7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0cmlidXRlcy5wYXJlbnRJZCkuYXBwZW5kQ2hpbGQobGkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5jaG9yKGF0dHJpYnV0ZXMsIGlzVGFiKXtcclxuICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYS5pZCA9IGF0dHJpYnV0ZXMuaWQ7XHJcbiAgICBhLmNsYXNzTmFtZSA9IGF0dHJpYnV0ZXMuY2xhc3NlcztcclxuICAgIGEuaHJlZiA9IGF0dHJpYnV0ZXMuaHJlZjtcclxuICAgIGEuaW5uZXJIVE1MID0gYXR0cmlidXRlcy5jb250ZW50O1xyXG4gICAgaWYoaXNUYWIpe1xyXG4gICAgICAgIGEuYXJpYVNlbGVjdGVkID0gYXR0cmlidXRlcy5zZWxlY3RlZDtcclxuICAgICAgICBhLnNldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiwgYXR0cmlidXRlcy5jb250cm9sZXMpO1xyXG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGVcIiwgYXR0cmlidXRlcy50b2dnbGUpO1xyXG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBhdHRyaWJ1dGVzLnRhYik7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0cmlidXRlcy5wYXJlbnRJZCkuYXBwZW5kQ2hpbGQoYSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYWJlbChhdHRyaWJ1dGVzKXtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5pZCA9IGF0dHJpYnV0ZXMuaWQ7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYXR0cmlidXRlcy5mb3IpO1xyXG4gICAgbGFiZWwuc3R5bGUuY3NzVGV4dCA9IGF0dHJpYnV0ZXMuc3R5bGU7XHJcbiAgICBsYWJlbC5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmNvbnRlbnQ7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dHJpYnV0ZXMucGFyZW50SWQpLmFwcGVuZENoaWxkKGxhYmVsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNtYWxsKGF0dHJpYnV0ZXMpe1xyXG4gICAgbGV0IHNtYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKTtcclxuICAgIHNtYWxsLmlkID0gYXR0cmlidXRlcy5pZDtcclxuICAgIHNtYWxsLmNsYXNzTmFtZSA9IFwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIjtcclxuICAgIHNtYWxsLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzLnN0eWxlO1xyXG4gICAgc21hbGwuaW5uZXJIVE1MID0gYXR0cmlidXRlcy5jb250ZW50O1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRyaWJ1dGVzLnBhcmVudElkKS5hcHBlbmRDaGlsZChzbWFsbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnB1dChhdHRyaWJ1dGVzKXtcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5pZCA9IGF0dHJpYnV0ZXMuaWQ7XHJcbiAgICBpbnB1dC5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlcy5zdHlsZTtcclxuICAgIGlucHV0LnZhbHVlID0gYXR0cmlidXRlcy52YWx1ZTtcclxuICAgIGlucHV0LnR5cGUgPSBhdHRyaWJ1dGVzLnR5cGU7IFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0cmlidXRlcy5wYXJlbnRJZCkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dGFyZWEoYXR0cmlidXRlcywgaW5zZXJ0QmVmb3JlUGFyZW50KXtcclxuICAgIGxldCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICB0ZXh0YXJlYS5pZCA9IGF0dHJpYnV0ZXMuaWQ7XHJcbiAgICB0ZXh0YXJlYS5jbGFzc05hbWUgPSBhdHRyaWJ1dGVzLmNsYXNzO1xyXG4gICAgdGV4dGFyZWEuc3R5bGUuY3NzVGV4dCA9IGF0dHJpYnV0ZXMuc3R5bGU7XHJcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IGF0dHJpYnV0ZXMudmFsdWU7XHJcblxyXG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dHJpYnV0ZXMucGFyZW50SWQpO1xyXG4gICAgaWYoaW5zZXJ0QmVmb3JlUGFyZW50KXtcclxuICAgICAgICBwYXJlbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGV4dGFyZWEsIHBhcmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XHJcbiAgICB9IFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChpZCl7XHJcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmIChlbGVtKXtcclxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsRWxlbWVudHNPZkNsYXNzKGVsZW1lbnRDbGFzcyl7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgZWxlbWVudENsYXNzKTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgZWxlbS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVGaWx0ZXJEaXNhYmxlZEFyZWEgfSBmcm9tIFwiLi9kaXNhYmxlQXJlYVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZpbHRlckluZm9DYXJkKCl7XHJcbiAgICBjcmVhdGVGaWx0ZXJEaXNhYmxlZEFyZWEoKTtcclxuICBcclxuICAgIGxldCBzdHlsZSA9IGhlbHBlcnMuZ2V0Q2FyZFN0eWxlKGdsb2JhbC5pbmZvQ2FyZE1hcmdpbiwgZ2xvYmFsLnBhZ2UuZGVmYXVsdFNpemUud2lkdGggLSBnbG9iYWwuaW5mb0NhcmRNYXJnaW4gLSBnbG9iYWwuaW5mb0NhcmRXaWR0aCwgZ2xvYmFsLmluZm9DYXJkV2lkdGgsIFwiXCIpO1xyXG4gICAgaGVscGVycy5jcmVhdGVDYXJkKFwiaW5mb0NhcmRcIiwgc3R5bGUsIFwicmVjdExlZnRCaWdcIilcclxuXHJcbiAgICBoZWxwZXJzLmNyZWF0ZUNsb3NlQnV0dG9uKFwiY2xvc2VCdXR0b25cIiwgXCJjbG9zZUJ1dHRvblBsYWNlbWVudEJpZyBwb3NpdGlvbkxlZnRcIiwgaGVscGVycy5nZXRDbG9zZUZ1bmN0aW9uKCksIFwiaW5mb0NhcmRcIik7XHJcblxyXG4gICAgaGVscGVycy5jcmVhdGVDYXJkQ29udGVudChnbG9iYWwuc2V0dGluZ3MuZmlsdGVyVmlzdWFsLnRpdGxlLCBnbG9iYWwuc2V0dGluZ3MuZmlsdGVyVmlzdWFsLmdlbmVyYWxJbmZvcm1hdGlvbiwgXCJpbmZvQ2FyZFwiKTtcclxuICAgIGxldCBmaWx0ZXJzID0gYXdhaXQgZ2V0RmlsdGVySW5mb3MoKTtcclxuICAgIGNyZWF0ZUZpbHRlckxpc3QoZmlsdGVycywgXCJjb250ZW50VGV4dFwiKTtcclxuICAgIFxyXG4gICAgaWYoZ2xvYmFsLmlzR3VpZGVkVG91cil7XHJcbiAgICAgICAgaGVscGVycy5jcmVhdGVDYXJkQnV0dG9ucyhcInByZXZpb3VzXCIsIFwiY2xvc2VcIik7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBoZWxwZXJzLmNyZWF0ZUNhcmRCdXR0b25zKFwicHJldmlvdXNcIiwgXCJuZXh0XCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsdGVyTGlzdChsaXN0LCBwYXJlbnRJZCl7XHJcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLmlubmVySFRNTCA9ICBsaXN0W2ldO1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlckRlc2NyaXB0aW9uKGZpbHRlcil7XHJcbiAgICBsZXQgdmFsdWVUZXh0ID0gXCJcIjtcclxuICAgIGlmKGZpbHRlci52YWx1ZXMubGVuZ3RoICE9IDApe1xyXG4gICAgICAgIHZhbHVlVGV4dCA9IFwiIEl0cyBjdXJyZW50IHZhbHVlIGlzIFwiICsgZmlsdGVyLnZhbHVlc1swXSArIFwiLlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbHRlci50YXJnZXQuY29sdW1uICsgXCI6IEl0IGZpbHRlcnMgdGhlIGRhdGEgXCIgKyBmaWx0ZXIudGFyZ2V0LmNvbHVtbiArIFwiLlwiICsgdmFsdWVUZXh0O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRGaWx0ZXJJbmZvcygpe1xyXG4gICAgbGV0IGZpbHRlckluZm9zID0gYXdhaXQgaGVscGVycy5nZXRGaWx0ZXJJbmZvKCk7XHJcblxyXG4gICAgbGV0IG5ld0ZpbHRlcnMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2xvYmFsLnNldHRpbmdzLmZpbHRlclZpc3VhbC5maWx0ZXJJbmZvc1N0YXR1cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHN3aXRjaChnbG9iYWwuc2V0dGluZ3MuZmlsdGVyVmlzdWFsLmZpbHRlckluZm9zU3RhdHVzW2ldKXtcclxuICAgICAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5vcmlnaW5hbDpcclxuICAgICAgICAgICAgICAgIG5ld0ZpbHRlcnMucHVzaChmaWx0ZXJJbmZvc1tpXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5jaGFuZ2VkOlxyXG4gICAgICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLmFkZGVkOlxyXG4gICAgICAgICAgICAgICAgbmV3RmlsdGVycy5wdXNoKGdsb2JhbC5zZXR0aW5ncy5maWx0ZXJWaXN1YWwuY2hhbmdlZEZpbHRlckluZm9zW2ldKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3RmlsdGVycztcclxufSIsImV4cG9ydCBjb25zdCBmb290ZXJIZWlnaHQgPSAzNztcclxuZXhwb3J0IGNvbnN0IGZpbHRlckNsb3NlZFdpZHRoID0gMzI7XHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJPcGVuZWRXaWR0aCA9IDI0ODtcclxuXHJcbmV4cG9ydCBjb25zdCBndWlkZWRUb3VyQnV0dG9uV2lkdGggPSAxNTA7XHJcbmV4cG9ydCBjb25zdCBleHBsb3JhdGlvbk1vZGVCdXR0b25XaWR0aCA9IDI1MDtcclxuZXhwb3J0IGNvbnN0IGRhcmtPdXRsaW5lQnV0dG9uQ2xhc3MgPSBcImJ0biBidG4tb3V0bGluZS1kYXJrXCI7XHJcbmV4cG9ydCBjb25zdCBvbmJvYXJkaW5nQnV0dG9uU3R5bGUgPSAgXCJtYXJnaW46MTBweDtmbG9hdDpyaWdodDtcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbmZvQ2FyZE1hcmdpbiA9IDEwO1xyXG5leHBvcnQgY29uc3QgaW5mb0NhcmRXaWR0aCA9IDQwMDtcclxuZXhwb3J0IGNvbnN0IGludHJvQ2FyZE1hcmdpbiA9IDYwO1xyXG5leHBvcnQgY29uc3QgaW50cm9DYXJkV2lkdGggPSA1MDA7XHJcbmV4cG9ydCBjb25zdCBpbnRlcmFjdGlvbkNhcmRXaWR0aCA9IDUwMDtcclxuZXhwb3J0IGNvbnN0IGludGVyYWN0aW9uQ2FyZEhlaWdodCA9IDI0MDtcclxuZXhwb3J0IGNvbnN0IGhpbnRDYXJkTWFyZ2luID0gNTtcclxuZXhwb3J0IGNvbnN0IGhpbnRDYXJkV2lkdGggPSAyMDA7XHJcbmV4cG9ydCBjb25zdCBlZGl0Q2FyZE1hcmdpbiA9IDA7XHJcbmV4cG9ydCBjb25zdCBlZGl0Q2FyZFdpZHRoID0gNTAwO1xyXG5cclxuZXhwb3J0IGxldCBzZXR0aW5ncztcclxuZXhwb3J0IGxldCByZXBvcnQ7XHJcbmV4cG9ydCBsZXQgY3VycmVudFZpc3VhbHM7XHJcbmV4cG9ydCBsZXQgYWxsVmlzdWFscztcclxuZXhwb3J0IGxldCBwYWdlO1xyXG5leHBvcnQgbGV0IHNlbGVjdGVkVGFyZ2V0cztcclxuXHJcbmV4cG9ydCBsZXQgZXhwbG9yYXRpb25Nb2RlID0gZmFsc2U7XHJcbmV4cG9ydCBsZXQgaXNHdWlkZWRUb3VyID0gZmFsc2U7XHJcbmV4cG9ydCBsZXQgaW50ZXJhY3Rpb25Nb2RlID0gZmFsc2U7XHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRWaXN1YWxJbmRleDogbnVtYmVyO1xyXG5cclxuZXhwb3J0IGxldCBjb250YWluZXJQYWRkaW5nVG9wOiBudW1iZXI7XHJcbmV4cG9ydCBsZXQgY29udGFpbmVyUGFkZGluZ0xlZnQ6IG51bWJlcjtcclxuXHJcbmV4cG9ydCBsZXQgZHJhZ2dhYmxlRWxlbWVudDtcclxuZXhwb3J0IGxldCBwb3NYID0gMDtcclxuZXhwb3J0IGxldCBwb3NZID0gMDtcclxuZXhwb3J0IGxldCBwbGFjZWhvbGRlckVsZW1lbnQ7XHJcbmV4cG9ydCBsZXQgZHJhZ2dpbmdTdGFydGVkID0gZmFsc2U7XHJcblxyXG5leHBvcnQgZW51bSBpbmZvU3RhdHVzIHtcclxuICAgIG9yaWdpbmFsID0gXCJvcmlnaW5hbFwiLFxyXG4gICAgY2hhbmdlZCA9IFwiY2hhbmdlZFwiLFxyXG4gICAgYWRkZWQgPSBcImFkZGVkXCIsXHJcbiAgICBkZWxldGVkID0gXCJkZWxldGVkXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZXBvcnRPZmZzZXQoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiB1bmRlZmluZWQsXHJcbiAgICAgICAgYm90dG9tOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbGVmdDogdW5kZWZpbmVkLFxyXG4gICAgICAgIHJpZ2h0OiB1bmRlZmluZWQsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaXN1YWwoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIGdlbmVyYWxJbmZvc1N0YXR1czogW10sXHJcbiAgICAgICAgZGF0YUluZm9zU3RhdHVzOiBbXSxcclxuICAgICAgICBpbnRlcmFjdGlvbkluZm9zU3RhdHVzOiBbXSxcclxuICAgICAgICBjaGFuZ2VkR2VuZXJhbEluZm9zOiBbXSxcclxuICAgICAgICBjaGFuZ2VkRGF0YUluZm9zOiBbXSxcclxuICAgICAgICBjaGFuZ2VkSW50ZXJhY3Rpb25JbmZvczogW11cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbHRlclZpc3VhbCgpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBnZW5lcmFsSW5mb3JtYXRpb246IFwiXCIsXHJcbiAgICAgICAgZmlsdGVySW5mb3NTdGF0dXM6IFtdLFxyXG4gICAgICAgIGNoYW5nZWRGaWx0ZXJJbmZvczogW11cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludGVyYWN0YWJsZVZpc3VhbCgpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogXCJcIixcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBjbGlja0luZm9zU3RhdHVzOiBcIlwiLFxyXG4gICAgICAgIGNoYW5nZWRDbGlja0luZm9zOiBcIlwiLFxyXG4gICAgICAgIGNoYW5nZXNJbmZvc1N0YXR1czogXCJcIixcclxuICAgICAgICBjaGFuZ2VkQ2hhbmdlc0luZm9zOiBcIlwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnRlcmFjdGlvbkV4YW1wbGUoKXtcclxuICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBnZW5lcmFsSW5mb1N0YXR1czogXCJcIixcclxuICAgICAgICBjaGFuZ2VkR2VuZXJhbEluZm86IFwiXCIsXHJcbiAgICAgICAgbmV4dFZpc3VhbEhpbnQ6IFwiXCIsXHJcbiAgICAgICAgdmlzdWFsczogW11cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2V0dGluZ3NPYmplY3QoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVwb3J0T2Zmc2V0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgdmlzdWFsczogW10sXHJcbiAgICAgICAgZmlsdGVyVmlzdWFsOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaW50ZXJhY3Rpb25FeGFtcGxlOiB1bmRlZmluZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNldHRpbmdzKG5ld1NldHRpbmdzKXtcclxuICAgIHNldHRpbmdzID0gbmV3U2V0dGluZ3M7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSZXBvcnQobmV3UmVwb3J0KXtcclxuICAgIHJlcG9ydCA9IG5ld1JlcG9ydDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VmlzdWFscyhuZXdDdXJyZW50VmlzdWFscyl7XHJcbiAgICBjdXJyZW50VmlzdWFscyA9IG5ld0N1cnJlbnRWaXN1YWxzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBbGxWaXN1YWxzKG5ld0FsbFZpc3VhbHMpe1xyXG4gICAgYWxsVmlzdWFscyA9IG5ld0FsbFZpc3VhbHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhZ2UobmV3UGFnZSl7XHJcbiAgICBwYWdlID0gbmV3UGFnZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRUYXJnZXRzKG5ld1NlbGVjdGVkVGFyZ2V0cyl7XHJcbiAgICBzZWxlY3RlZFRhcmdldHMgPSBuZXdTZWxlY3RlZFRhcmdldHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFeHBsb3JhdGlvbk1vZGUobmV3RXhwbG9yYXRpb25Nb2RlKXtcclxuICAgIGV4cGxvcmF0aW9uTW9kZSA9IG5ld0V4cGxvcmF0aW9uTW9kZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SXNHdWlkZWRUb3VyKG5ld0lzR3VpZGVkVG91cil7XHJcbiAgICBpc0d1aWRlZFRvdXIgPSBuZXdJc0d1aWRlZFRvdXI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEludGVyYWN0aW9uTW9kZShuZXdJbnRlcmFjdGlvbk1vZGUpe1xyXG4gICAgaW50ZXJhY3Rpb25Nb2RlID0gbmV3SW50ZXJhY3Rpb25Nb2RlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFZpc3VhbEluZGV4KG5ld0N1cnJlbnRWaXN1YWxJbmRleCl7XHJcbiAgICBjdXJyZW50VmlzdWFsSW5kZXggPSBuZXdDdXJyZW50VmlzdWFsSW5kZXg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250YWluZXJQYWRkaW5nVG9wKG5ld0NvbnRhaW5lclBhZGRpbmdUb3Ape1xyXG4gICAgY29udGFpbmVyUGFkZGluZ1RvcCA9IG5ld0NvbnRhaW5lclBhZGRpbmdUb3A7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRhaW5lclBhZGRpbmdMZWZ0KG5ld0NvbnRhaW5lclBhZGRpbmdMZWZ0KXtcclxuICAgIGNvbnRhaW5lclBhZGRpbmdMZWZ0ID0gbmV3Q29udGFpbmVyUGFkZGluZ0xlZnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREcmFnZ2FibGVFbGVtZW50KG5ld0RyYWdnYWJsZUVsZW1lbnQpe1xyXG4gICAgZHJhZ2dhYmxlRWxlbWVudCA9IG5ld0RyYWdnYWJsZUVsZW1lbnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBvc1gobmV3UG9zWCl7XHJcbiAgICBwb3NYID0gbmV3UG9zWDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UG9zWShuZXdQb3NZKXtcclxuICAgIHBvc1kgPSBuZXdQb3NZO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQbGFjZWhvbGRlckVsZW1lbnQobmV3UGxhY2Vob2xkZXJFbGVtZW50KXtcclxuICAgIHBsYWNlaG9sZGVyRWxlbWVudCA9IG5ld1BsYWNlaG9sZGVyRWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RHJhZ2dpbmdTdGFydGVkKG5ld0RyYWdnaW5nU3RhcnRlZCl7XHJcbiAgICBkcmFnZ2luZ1N0YXJ0ZWQgPSBuZXdEcmFnZ2luZ1N0YXJ0ZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXZBdHRyaWJ1dGVzKCl7XHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBpZDogXCJcIixcclxuICAgICAgICBzdHlsZTogXCJcIixcclxuICAgICAgICBjbGFzc2VzOiBcIlwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcm9sZTogXCJcIixcclxuICAgICAgICBsYWJlbDogXCJcIixcclxuICAgICAgICBjbGlja2FibGU6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkVGFyZ2V0czogXCJcIixcclxuICAgICAgICBldmVudFR5cGU6IFwiXCIsXHJcbiAgICAgICAgZXZlbnRGdW5jdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICAgIHBhcmVudElkOiBcIlwiXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uQXR0cmlidXRlcygpe1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgY29udGVudDogXCJcIixcclxuICAgICAgICBzdHlsZTogXCJcIixcclxuICAgICAgICBjbGFzc2VzOiAgXCJcIixcclxuICAgICAgICBmdW5jdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICAgIHBhcmVudElkOiBcIlwiXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3BhbkF0dHJpYnV0ZXMoKXtcclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgaGlkZGVuOiBcImZhbHNlXCIsXHJcbiAgICAgICAgcGFyZW50SWQ6IFwiXCJcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIMUF0dHJpYnV0ZXMoKXtcclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgc3R5bGU6IFwiXCIsXHJcbiAgICAgICAgcGFyZW50SWQ6IFwiXCJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUgyQXR0cmlidXRlcygpe1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgY29udGVudDogXCJcIixcclxuICAgICAgICBzdHlsZTogXCJcIixcclxuICAgICAgICBwYXJlbnRJZDogXCJcIlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVUxBdHRyaWJ1dGVzKCl7XHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBpZDogXCJcIixcclxuICAgICAgICBjbGFzc2VzOiBcIlwiLFxyXG4gICAgICAgIHJvbGU6IFwiXCIsXHJcbiAgICAgICAgcGFyZW50SWQ6IFwiXCJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxJQXR0cmlidXRlcygpe1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgY2xhc3NlczogXCJcIixcclxuICAgICAgICBwYXJlbnRJZDogXCJcIlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5jaG9yQXR0cmlidXRlcygpe1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgY2xhc3NlczogXCJcIixcclxuICAgICAgICBocmVmOiBcIlwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IFwiXCIsXHJcbiAgICAgICAgY29udHJvbGVzOiBcIlwiLFxyXG4gICAgICAgIHRvZ2dsZTogXCJcIixcclxuICAgICAgICByb2xlOiBcIlwiLFxyXG4gICAgICAgIHBhcmVudElkOiBcIlwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJBbmNob3JBdHRyaWJ1dGVzKCl7XHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBpZDogXCJcIixcclxuICAgICAgICBocmVmOiBcIlwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcGFyZW50SWQ6IFwiXCJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhYmVsQXR0cmlidXRlcygpe1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgZm9yOiBcIlwiLFxyXG4gICAgICAgIHN0eWxlOiBcIlwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcGFyZW50SWQ6IFwiXCJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNtYWxsQXR0cmlidXRlcygpe1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgc3R5bGU6IFwiXCIsXHJcbiAgICAgICAgY29udGVudDogXCJcIixcclxuICAgICAgICBwYXJlbnRJZDogXCJcIlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXRBdHRyaWJ1dGVzKCl7XHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBpZDogXCJcIixcclxuICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgIHN0eWxlOiBcIlwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBhcmVudElkOiBcIlwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0YXJlYUF0dHJpYnV0ZXMoKXtcclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgIGNsYXNzOiBcIlwiLFxyXG4gICAgICAgIHN0eWxlOiBcIlwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBhcmVudElkOiBcIlwiXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgKiBhcyBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBnZXRTdGFydEZ1bmN0aW9uIH0gZnJvbSBcIi4vaW50cm9DYXJkc1wiO1xyXG5pbXBvcnQgeyBwcmV2aW91c0luZm9DYXJkLCBuZXh0SW5mb0NhcmQsIGNyZWF0ZUluZm9DYXJkIH0gZnJvbSBcIi4vaW5mb0NhcmRzXCI7XHJcbmltcG9ydCB7IHJlbW92ZUZyYW1lIH0gZnJvbSBcIi4vZGlzYWJsZUFyZWFcIjtcclxuaW1wb3J0IHsgY3JlYXRlR3VpZGVkVG91ciwgY3JlYXRlRGFzaGJvYXJkRXhwbG9yYXRpb24sIGNyZWF0ZU9uYm9hcmRpbmdPdmVybGF5IH0gZnJvbSBcIi4vb25ib2FyZGluZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVPbmJvYXJkaW5nRWRpdGluZywgc2F2ZU9uYm9hcmRpbmdDaGFuZ2VzIH0gZnJvbSBcIi4vYXV0aG9yTW9kZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXR0aW5ncyB9IGZyb20gXCIuL2NyZWF0ZVNldHRpbmdzXCI7XHJcbmltcG9ydCB7IGFkZFZpc3VhbFRleHRhcmVhIH0gZnJvbSBcIi4vbGlzdE9mVmlzdWFsc1wiO1xyXG5pbXBvcnQgeyBnZXRJbnRlcmFjdGlvblRleHQsIHJlbW92ZUludGVyYWN0aW9uQ2FyZCwgc3RhcnRJbnRlcmFjdGlvbkV4YW1wbGUgfSBmcm9tIFwiLi9pbnRlcmFjdGlvbkV4YW1wbGVcIjtcclxuaW1wb3J0IHsgcmVtb3ZlSGludENhcmQsIHJlbW92ZVNob3dDaGFuZ2VzQ2FyZCwgc2hvd1JlcG9ydENoYW5nZXMgfSBmcm9tIFwiLi9zaG93UmVwb3J0Q2hhbmdlc1wiO1xyXG5pbXBvcnQgeyBnZXRDYXJkSW5mbywgZ2V0U2xpY2VySW5mbyB9IGZyb20gXCIuL2Jhc2ljVmlzdWFsQ29udGVudFwiO1xyXG5pbXBvcnQgeyBnZXRMaW5lQ2x1c3RlcmVkQ29sdW1uQ29tYm9DaGFydEluZm8gfSBmcm9tIFwiLi9jb21wbGV4VmlzdWFsQ29udGVudFwiO1xyXG5pbXBvcnQgeyBnZXRMaW5lQ2hhcnRJbmZvIH0gZnJvbSBcIi4vbGluZUNoYXJ0VmlzdWFsQ29udGVudFwiO1xyXG5pbXBvcnQgeyBnZXRDbHVzdGVyZWRCYXJDaGFydEluZm8gfSBmcm9tIFwiLi9iYXJDaGFydFZpc3VhbENvbnRlbnRcIjtcclxuaW1wb3J0IHsgZ2V0RmlsdGVyRGVzY3JpcHRpb24gfSBmcm9tIFwiLi9maWx0ZXJJbmZvQ2FyZHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDb250YWluZXJPZmZzZXQoKXtcclxuICAgIHZhciBuYXZiYXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2YmFyXCIpWzBdLmNsaWVudEhlaWdodDtcclxuICAgIHZhciBjb250YWluZXJPZmZzZXQgPSBnbG9iYWwuaW50ZXJhY3Rpb25DYXJkSGVpZ2h0IC0gbmF2YmFySGVpZ2h0O1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1iZWQtY29udGFpbmVyXCIpO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLm1hcmdpblRvcCA9IGNvbnRhaW5lck9mZnNldCArIFwicHhcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFja1RvVmlzdWFsKCl7XHJcbiAgICByZW1vdmVDb250YWluZXJPZmZzZXQoKTtcclxuICAgIGdsb2JhbC5zZXRJbnRlcmFjdGlvbk1vZGUoZmFsc2UpO1xyXG4gICAgcmVtb3ZlT25ib2FyZGluZ092ZXJsYXkoKTtcclxuXHJcbiAgICByZW1vdmVJbnRlcmFjdGlvbkNhcmQoKTtcclxuICAgIHJlbW92ZVNob3dDaGFuZ2VzQ2FyZCgpO1xyXG4gICAgcmVtb3ZlSGludENhcmQoKTtcclxuICAgIGNyZWF0ZUluZm9DYXJkKGdsb2JhbC5jdXJyZW50VmlzdWFsc1tnbG9iYWwuY3VycmVudFZpc3VhbEluZGV4XSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYXNpY0NhcmRDb250ZW50KGRlc2NyaXB0aW9uLCBwYXJlbnRJZCl7XHJcbiAgICBsZXQgZGl2QXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVEaXZBdHRyaWJ1dGVzKCk7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLmlkID0gXCJiYXNpY0NhcmRDb250ZW50XCI7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLmNsYXNzZXMgPSBcImNvbnRlbnRQbGFjZW1lbnRTbWFsbFwiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IHBhcmVudElkO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGRpdkF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGxldCBzcGFuQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVTcGFuQXR0cmlidXRlcygpO1xyXG4gICAgc3BhbkF0dHJpYnV0ZXMuaWQgPSBcImJhc2ljQ29udGVudFRleHRcIjtcclxuICAgIHNwYW5BdHRyaWJ1dGVzLmNvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgIHNwYW5BdHRyaWJ1dGVzLnBhcmVudElkID0gXCJiYXNpY0NhcmRDb250ZW50XCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVTcGFuKHNwYW5BdHRyaWJ1dGVzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmQoaWQsIHN0eWxlLCBjbGFzc2VzKXtcclxuICAgIGxldCBhdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZURpdkF0dHJpYnV0ZXMoKTtcclxuICAgIGF0dHJpYnV0ZXMuaWQgPSBpZDtcclxuICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBzdHlsZTtcclxuICAgIGF0dHJpYnV0ZXMuY2xhc3NlcyA9IGNsYXNzZXM7XHJcbiAgICBhdHRyaWJ1dGVzLnBhcmVudElkID0gXCJvbmJvYXJkaW5nXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoYXR0cmlidXRlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkQnV0dG9ucyhsZWZ0QnV0dG9uLCByaWdodEJ1dHRvbil7XHJcbiAgICBsZXQgZGl2QXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVEaXZBdHRyaWJ1dGVzKCk7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLmlkID0gXCJjYXJkQnV0dG9uc1wiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiY2FyZENvbnRlbnRcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZURpdihkaXZBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBpZihsZWZ0QnV0dG9uICE9IFwiXCIpe1xyXG4gICAgICAgIGxldCBidXR0b25BdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZUJ1dHRvbkF0dHJpYnV0ZXMoKTtcclxuICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmNsYXNzZXMgPSBnbG9iYWwuZGFya091dGxpbmVCdXR0b25DbGFzcztcclxuICAgICAgICBidXR0b25BdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjYXJkQnV0dG9uc1wiO1xyXG4gICAgICAgIHN3aXRjaChsZWZ0QnV0dG9uKXtcclxuICAgICAgICAgICAgY2FzZSBcInNraXBcIjpcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuaWQgPSBcInNraXBCdXR0b25cIjtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuY29udGVudCA9IFwiU2tpcFwiO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5mdW5jdGlvbiA9IHJlbW92ZU9uYm9hcmRpbmc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJhY2sgdG8gdmlzdWFsXCI6XHJcbiAgICAgICAgICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmlkID0gXCJiYWNrQnV0dG9uXCI7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmNvbnRlbnQgPSBcIkJhY2sgdG8gdmlzdWFsXCI7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmZ1bmN0aW9uID0gYmFja1RvVmlzdWFsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuaWQgPSBcImNhbmNlbEJ1dHRvblwiO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5jb250ZW50ID0gXCJDYW5jZWxcIjtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuZnVuY3Rpb24gPSByZW1vdmVPbmJvYXJkaW5nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5pZCA9IFwicHJldmlvdXNCdXR0b25cIjtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuY29udGVudCA9IFwiUHJldmlvdXNcIjtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuZnVuY3Rpb24gPSBwcmV2aW91c0luZm9DYXJkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50cy5jcmVhdGVCdXR0b24oYnV0dG9uQXR0cmlidXRlcywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHJpZ2h0QnV0dG9uICE9IFwiXCIpe1xyXG4gICAgICAgIGxldCBidXR0b25BdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZUJ1dHRvbkF0dHJpYnV0ZXMoKTtcclxuICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmNsYXNzZXMgPSBnbG9iYWwuZGFya091dGxpbmVCdXR0b25DbGFzcyArIFwiIHBvc2l0aW9uUmlnaHRcIjtcclxuICAgICAgICBidXR0b25BdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjYXJkQnV0dG9uc1wiO1xyXG4gICAgICAgIGlmKGxlZnRCdXR0b24gPT0gXCJcIil7XHJcbiAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuc3R5bGUgKz0gXCJtYXJnaW4tYm90dG9tOiAyMHB4O1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaChyaWdodEJ1dHRvbil7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5pZCA9IFwiZW5kQnV0dG9uXCI7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmNvbnRlbnQgPSBcIkNsb3NlXCI7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmZ1bmN0aW9uID0gcmVtb3ZlT25ib2FyZGluZztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuaWQgPSBcInN0YXJ0QnV0dG9uXCI7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmNvbnRlbnQgPSBcIlN0YXJ0XCI7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmZ1bmN0aW9uID0gZ2V0U3RhcnRGdW5jdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYWNrIHRvIHZpc3VhbFwiOlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5pZCA9IFwiYmFja0J1dHRvblwiO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5jb250ZW50ID0gXCJCYWNrIHRvIHZpc3VhbFwiO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5mdW5jdGlvbiA9IGJhY2tUb1Zpc3VhbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFjayB0byBvdmVydmlld1wiOlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5pZCA9IFwiYmFja1RvT3ZlcnZpZXdCdXR0b25cIjtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuY29udGVudCA9IFwiQmFjayB0byBvdmVydmlld1wiO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5mdW5jdGlvbiA9IHNob3dSZXBvcnRDaGFuZ2VzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzYXZlXCI6XHJcbiAgICAgICAgICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmlkID0gXCJzYXZlQnV0dG9uXCI7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmNvbnRlbnQgPSBcIlNhdmVcIjtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuZnVuY3Rpb24gPSBzYXZlT25ib2FyZGluZ0NoYW5nZXM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuaWQgPSBcIm5leHRCdXR0b25cIjtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuY29udGVudCA9IFwiTmV4dFwiO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5mdW5jdGlvbiA9IG5leHRJbmZvQ2FyZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudHMuY3JlYXRlQnV0dG9uKGJ1dHRvbkF0dHJpYnV0ZXMsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmRDb250ZW50KGhlYWRsaW5lLCBkZXNjcmlwdGlvbiwgcGFyZW50SWQpe1xyXG4gICAgbGV0IGRpdkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgZGl2QXR0cmlidXRlcy5pZCA9IFwiY2FyZENvbnRlbnRcIjtcclxuICAgIGRpdkF0dHJpYnV0ZXMuY2xhc3NlcyA9IFwiY29udGVudFBsYWNlbWVudEJpZ1wiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IHBhcmVudElkO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGRpdkF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGxldCBoMUF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlSDFBdHRyaWJ1dGVzKCk7XHJcbiAgICBoMUF0dHJpYnV0ZXMuaWQgPSBcImNhcmRIZWFkbGluZVwiO1xyXG4gICAgaDFBdHRyaWJ1dGVzLmNvbnRlbnQgPSBoZWFkbGluZTtcclxuICAgIGgxQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiY2FyZENvbnRlbnRcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZUgxKGgxQXR0cmlidXRlcyk7XHJcblxyXG4gICAgbGV0IHNwYW5BdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZVNwYW5BdHRyaWJ1dGVzKCk7XHJcbiAgICBzcGFuQXR0cmlidXRlcy5pZCA9IFwiY29udGVudFRleHRcIjtcclxuICAgIHNwYW5BdHRyaWJ1dGVzLmNvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgIHNwYW5BdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjYXJkQ29udGVudFwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlU3BhbihzcGFuQXR0cmlidXRlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbG9zZUJ1dHRvbihidXR0b25JZCwgYnV0dG9uQ2xhc3NlcywgZnVuY3Rpb25OYW1lLCBwYXJlbnRJZCl7XHJcbiAgICBsZXQgYnV0dG9uQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVCdXR0b25BdHRyaWJ1dGVzKCk7XHJcbiAgICBidXR0b25BdHRyaWJ1dGVzLmlkID0gYnV0dG9uSWQ7XHJcbiAgICBidXR0b25BdHRyaWJ1dGVzLmNsYXNzZXMgPSBcImNsb3NlIFwiICsgYnV0dG9uQ2xhc3NlcztcclxuICAgIGJ1dHRvbkF0dHJpYnV0ZXMuZnVuY3Rpb24gPSBmdW5jdGlvbk5hbWU7XHJcbiAgICBidXR0b25BdHRyaWJ1dGVzLnBhcmVudElkID0gcGFyZW50SWQ7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVCdXR0b24oYnV0dG9uQXR0cmlidXRlcywgZmFsc2UpO1xyXG5cclxuICAgIGxldCBzcGFuQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVTcGFuQXR0cmlidXRlcygpO1xyXG4gICAgc3BhbkF0dHJpYnV0ZXMuaWQgPSBcIlwiO1xyXG4gICAgc3BhbkF0dHJpYnV0ZXMuY29udGVudCA9IFwiJnRpbWVzO1wiO1xyXG4gICAgc3BhbkF0dHJpYnV0ZXMuaGlkZGVuID0gXCJ0cnVlXCI7XHJcbiAgICBzcGFuQXR0cmlidXRlcy5wYXJlbnRJZCA9IGJ1dHRvbklkO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlU3BhbihzcGFuQXR0cmlidXRlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xsYXBzZUJ1dHRvbihJZCwgcGFyZW50SWQpe1xyXG4gICAgbGV0IGJ1dHRvbkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlQnV0dG9uQXR0cmlidXRlcygpO1xyXG4gICAgYnV0dG9uQXR0cmlidXRlcy5pZCA9IElkO1xyXG4gICAgYnV0dG9uQXR0cmlidXRlcy5jb250ZW50ID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWNoZXZyb24tZG93biBtYi0xXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggMTAuMjkzbDUuNjQ2LTUuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDggMGwtNi02YS41LjUgMCAwIDEgMC0uNzA4elwiLz48L3N2Zz5gOztcclxuICAgIGJ1dHRvbkF0dHJpYnV0ZXMuc3R5bGUgPSAgXCJwYWRkaW5nLXRvcDogMHB4O3BhZGRpbmctYm90dG9tOiAwcHg7XCJcclxuICAgIGJ1dHRvbkF0dHJpYnV0ZXMuY2xhc3NlcyA9IFwiYnRuIFwiICsgSWQgKyBcIiBwb3NpdGlvblJpZ2h0XCI7XHJcbiAgICBidXR0b25BdHRyaWJ1dGVzLnBhcmVudElkID0gcGFyZW50SWQ7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVCdXR0b24oYnV0dG9uQXR0cmlidXRlcywgZmFsc2UpO1xyXG5cclxuICAgIGxldCBjb2xsYXBzZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKElkKTtcclxuICAgIGNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlXCIsIFwiY29sbGFwc2VcIik7XHJcbiAgICBjb2xsYXBzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhcmdldFwiLCBcIiNjb2xsYXBzZUZvcm1cIiArIHBhcmVudElkKTtcclxuICAgIGNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgIGNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiwgXCJjb2xsYXBzZUZvcm1cIiArIHBhcmVudElkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpc2FibGVCdXR0b24ocGFyZW50SWQpe1xyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlQnV0dG9uQXR0cmlidXRlcygpO1xyXG4gICAgYXR0cmlidXRlcy5zdHlsZSA9ICBcInBhZGRpbmctdG9wOiAwcHg7cGFkZGluZy1ib3R0b206IDBweDtcIjtcclxuICAgIGF0dHJpYnV0ZXMuY2xhc3NlcyA9IFwiYnRuIGRpc2FibGVWaXN1YWxCdXR0b25cIjtcclxuICAgIGF0dHJpYnV0ZXMuY29udGVudCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1leWUgbWItMlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTE2IDhzLTMtNS41LTgtNS41UzAgOCAwIDhzMyA1LjUgOCA1LjVTMTYgOCAxNiA4ek0xLjE3MyA4YTEzLjEzMyAxMy4xMzMgMCAwIDEgMS42Ni0yLjA0M0M0LjEyIDQuNjY4IDUuODggMy41IDggMy41YzIuMTIgMCAzLjg3OSAxLjE2OCA1LjE2OCAyLjQ1N0ExMy4xMzMgMTMuMTMzIDAgMCAxIDE0LjgyOCA4Yy0uMDU4LjA4Ny0uMTIyLjE4My0uMTk1LjI4OC0uMzM1LjQ4LS44MyAxLjEyLTEuNDY1IDEuNzU1QzExLjg3OSAxMS4zMzIgMTAuMTE5IDEyLjUgOCAxMi41Yy0yLjEyIDAtMy44NzktMS4xNjgtNS4xNjgtMi40NTdBMTMuMTM0IDEzLjEzNCAwIDAgMSAxLjE3MiA4elwiLz48cGF0aCBkPVwiTTggNS41YTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01ek00LjUgOGEzLjUgMy41IDAgMSAxIDcgMCAzLjUgMy41IDAgMCAxLTcgMHpcIi8+PC9zdmc+YDtcclxuICAgIGF0dHJpYnV0ZXMucGFyZW50SWQgPSBwYXJlbnRJZDtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZUJ1dHRvbihhdHRyaWJ1dGVzLCBmYWxzZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0T25ib2FyZGluZ0J1dHRvbnMoKXtcclxuICAgIGxldCBhdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZUJ1dHRvbkF0dHJpYnV0ZXMoKTtcclxuICAgIGF0dHJpYnV0ZXMuaWQgPSBcImVkaXRPbmJvYXJkaW5nXCI7XHJcbiAgICBhdHRyaWJ1dGVzLmNvbnRlbnQgPSBcIkVkaXQgRGFzaGJvYXJkIE9uYm9hcmRpbmdcIjtcclxuICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSAgZ2xvYmFsLm9uYm9hcmRpbmdCdXR0b25TdHlsZTtcclxuICAgIGF0dHJpYnV0ZXMuY2xhc3NlcyA9IGdsb2JhbC5kYXJrT3V0bGluZUJ1dHRvbkNsYXNzO1xyXG4gICAgYXR0cmlidXRlcy5mdW5jdGlvbiA9IGNyZWF0ZU9uYm9hcmRpbmdFZGl0aW5nO1xyXG4gICAgYXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiZW1iZWQtY29udGFpbmVyXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVCdXR0b24oYXR0cmlidXRlcywgdHJ1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmFibGVCdXR0b24ocGFyZW50SWQpe1xyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlQnV0dG9uQXR0cmlidXRlcygpO1xyXG4gICAgYXR0cmlidXRlcy5zdHlsZSA9ICBcInBhZGRpbmctdG9wOiAwcHg7cGFkZGluZy1ib3R0b206IDBweDtcIjtcclxuICAgIGF0dHJpYnV0ZXMuY2xhc3NlcyA9IFwiYnRuIGRpc2FibGVWaXN1YWxCdXR0b25cIjtcclxuICAgIGF0dHJpYnV0ZXMuY29udGVudCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1leWUtc2xhc2ggbWItMlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTEzLjM1OSAxMS4yMzhDMTUuMDYgOS43MiAxNiA4IDE2IDhzLTMtNS41LTgtNS41YTcuMDI4IDcuMDI4IDAgMCAwLTIuNzkuNTg4bC43Ny43NzFBNS45NDQgNS45NDQgMCAwIDEgOCAzLjVjMi4xMiAwIDMuODc5IDEuMTY4IDUuMTY4IDIuNDU3QTEzLjEzNCAxMy4xMzQgMCAwIDEgMTQuODI4IDhjLS4wNTguMDg3LS4xMjIuMTgzLS4xOTUuMjg4LS4zMzUuNDgtLjgzIDEuMTItMS40NjUgMS43NTUtLjE2NS4xNjUtLjMzNy4zMjgtLjUxNy40ODZsLjcwOC43MDl6XCIvPjxwYXRoIGQ9XCJNMTEuMjk3IDkuMTc2YTMuNSAzLjUgMCAwIDAtNC40NzQtNC40NzRsLjgyMy44MjNhMi41IDIuNSAwIDAgMSAyLjgyOSAyLjgyOWwuODIyLjgyMnptLTIuOTQzIDEuMjk5LjgyMi44MjJhMy41IDMuNSAwIDAgMS00LjQ3NC00LjQ3NGwuODIzLjgyM2EyLjUgMi41IDAgMCAwIDIuODI5IDIuODI5elwiLz48cGF0aCBkPVwiTTMuMzUgNS40N2MtLjE4LjE2LS4zNTMuMzIyLS41MTguNDg3QTEzLjEzNCAxMy4xMzQgMCAwIDAgMS4xNzIgOGwuMTk1LjI4OGMuMzM1LjQ4LjgzIDEuMTIgMS40NjUgMS43NTVDNC4xMjEgMTEuMzMyIDUuODgxIDEyLjUgOCAxMi41Yy43MTYgMCAxLjM5LS4xMzMgMi4wMi0uMzZsLjc3Ljc3MkE3LjAyOSA3LjAyOSAwIDAgMSA4IDEzLjVDMyAxMy41IDAgOCAwIDhzLjkzOS0xLjcyMSAyLjY0MS0zLjIzOGwuNzA4LjcwOXptMTAuMjk2IDguODg0LTEyLTEyIC43MDgtLjcwOCAxMiAxMi0uNzA4LjcwOHpcIi8+PC9zdmc+YDtcclxuICAgIGF0dHJpYnV0ZXMucGFyZW50SWQgPSBwYXJlbnRJZDtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZUJ1dHRvbihhdHRyaWJ1dGVzLCBmYWxzZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbmZvRm9ybShpbmZvVHlwZSwgdmlzdWFsSUQsIEluZm9zKXtcclxuICAgIGxldCBpbmZvVGl0bGUgPSBmaXJzdExldHRlclRvVXBwZXJDYXNlKGluZm9UeXBlKTtcclxuXHJcbiAgICBsZXQgbGFiZWxBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZUxhYmVsQXR0cmlidXRlcygpO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLmlkID0gaW5mb1R5cGUgKyBcIkluZm9zTGFiZWxcIiArIHZpc3VhbElEO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLmZvciA9IGluZm9UeXBlICsgXCJJbmZvc1RleHRhcmVhXCIgKyB2aXN1YWxJRDtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2s7bWFyZ2luLWxlZnQ6IDEwcHg7XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuY29udGVudCA9IGluZm9UaXRsZSArIFwiIEluZm9ybWF0aW9uOlwiO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjb2xsYXBzZUZvcm1cIiArIHZpc3VhbElEO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlTGFiZWwobGFiZWxBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEluZm9zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IEluZm8gPSBJbmZvc1tpXS5yZXBsYWNlQWxsKFwiPGJyPlwiLCAnXFxyXFxuJyk7XHJcbiAgICAgICAgbGV0IHRleHRhcmVhQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVUZXh0YXJlYUF0dHJpYnV0ZXMoKTtcclxuICAgICAgICB0ZXh0YXJlYUF0dHJpYnV0ZXMuaWQgPSBpICsgaW5mb1R5cGUrIFwiSW5mb3NUZXh0YXJlYVwiICsgdmlzdWFsSUQ7XHJcbiAgICAgICAgdGV4dGFyZWFBdHRyaWJ1dGVzLmNsYXNzID0gaW5mb1R5cGUrIFwiSW5mb3NcIiArIHZpc3VhbElEO1xyXG4gICAgICAgIHRleHRhcmVhQXR0cmlidXRlcy52YWx1ZSA9IEluZm87XHJcbiAgICAgICAgdGV4dGFyZWFBdHRyaWJ1dGVzLnN0eWxlID0gXCJkaXNwbGF5OiBibG9jazt3aWR0aDogOTUlO21hcmdpbi1ib3R0b206IDVweDttYXJnaW4tbGVmdDogMTBweDtiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcIjtcclxuICAgICAgICB0ZXh0YXJlYUF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImNvbGxhcHNlRm9ybVwiICsgdmlzdWFsSUQ7XHJcbiAgICAgICAgZWxlbWVudHMuY3JlYXRlVGV4dGFyZWEodGV4dGFyZWFBdHRyaWJ1dGVzLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFkZEJ1dHRvbkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlQnV0dG9uQXR0cmlidXRlcygpO1xyXG4gICAgYWRkQnV0dG9uQXR0cmlidXRlcy5pZCA9IFwiYWRkXCIrIGluZm9UaXRsZSArIFwiSW5mb1wiICsgdmlzdWFsSUQ7XHJcbiAgICBhZGRCdXR0b25BdHRyaWJ1dGVzLmNvbnRlbnQgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktcGx1cy1jaXJjbGVcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZD1cIk04IDE1QTcgNyAwIDEgMSA4IDFhNyA3IDAgMCAxIDAgMTR6bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2elwiLz48cGF0aCBkPVwiTTggNGEuNS41IDAgMCAxIC41LjV2M2gzYS41LjUgMCAwIDEgMCAxaC0zdjNhLjUuNSAwIDAgMS0xIDB2LTNoLTNhLjUuNSAwIDAgMSAwLTFoM3YtM0EuNS41IDAgMCAxIDggNHpcIi8+PC9zdmc+IEFkZGA7XHJcbiAgICBhZGRCdXR0b25BdHRyaWJ1dGVzLnN0eWxlID0gIFwibWFyZ2luOiBhdXRvO2Rpc3BsYXk6IGJsb2NrO1wiO1xyXG4gICAgYWRkQnV0dG9uQXR0cmlidXRlcy5jbGFzc2VzID0gZ2xvYmFsLmRhcmtPdXRsaW5lQnV0dG9uQ2xhc3M7XHJcbiAgICBhZGRCdXR0b25BdHRyaWJ1dGVzLmZ1bmN0aW9uID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBhZGRWaXN1YWxUZXh0YXJlYShpbmZvVHlwZSwgdmlzdWFsSUQpO1xyXG4gICAgfTtcclxuICAgIGFkZEJ1dHRvbkF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImNvbGxhcHNlRm9ybVwiICsgdmlzdWFsSUQ7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVCdXR0b24oYWRkQnV0dG9uQXR0cmlidXRlcywgZmFsc2UpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW50ZXJhY3Rpb25FeGFtcGxlQnV0dG9uKHBhcmVudElkLCB2aXN1YWwpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGF3YWl0IGdldFZpc3VhbERhdGEodmlzdWFsKTsgIFxyXG4gICAgfWNhdGNoe1xyXG4gICAgICAgICByZXR1cm47IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgYXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVCdXR0b25BdHRyaWJ1dGVzKCk7XHJcbiAgICBhdHRyaWJ1dGVzLmlkID0gXCJpbnRlcmFjdGlvbkV4YW1wbGVcIjtcclxuICAgIGF0dHJpYnV0ZXMuY29udGVudCA9IFwiVHJ5IGl0IG91dFwiO1xyXG4gICAgYXR0cmlidXRlcy5zdHlsZSA9ICBcImRpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bzttYXJnaW4tdG9wOjEwcHg7bWFyZ2luLWJvdHRvbToxMHB4O1wiO1xyXG4gICAgYXR0cmlidXRlcy5jbGFzc2VzID0gZ2xvYmFsLmRhcmtPdXRsaW5lQnV0dG9uQ2xhc3M7XHJcbiAgICBhdHRyaWJ1dGVzLmZ1bmN0aW9uID0gc3RhcnRJbnRlcmFjdGlvbkV4YW1wbGU7XHJcbiAgICBhdHRyaWJ1dGVzLnBhcmVudElkID0gcGFyZW50SWQ7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVCdXR0b24oYXR0cmlidXRlcywgZmFsc2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT25ib2FyZGluZygpe1xyXG4gICAgbGV0IHN0eWxlID0gZ2V0RGlzYWJsZWRTdHlsZShnbG9iYWwuY29udGFpbmVyUGFkZGluZ1RvcCwgZ2xvYmFsLmNvbnRhaW5lclBhZGRpbmdMZWZ0LCBnbG9iYWwucGFnZS5kZWZhdWx0U2l6ZS53aWR0aCwgZ2xvYmFsLnBhZ2UuZGVmYXVsdFNpemUuaGVpZ2h0KTtcclxuICAgIFxyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgYXR0cmlidXRlcy5pZCA9IFwib25ib2FyZGluZ1wiO1xyXG4gICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgYXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiZW1iZWQtY29udGFpbmVyXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoYXR0cmlidXRlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPbmJvYXJkaW5nQnV0dG9ucygpe1xyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlQnV0dG9uQXR0cmlidXRlcygpO1xyXG4gICAgYXR0cmlidXRlcy5pZCA9IFwiZ3VpZGVkVG91clwiO1xyXG4gICAgYXR0cmlidXRlcy5jb250ZW50ID0gXCJTdGFydCBHdWlkZWQgVG91clwiO1xyXG4gICAgYXR0cmlidXRlcy5zdHlsZSA9ICBnbG9iYWwub25ib2FyZGluZ0J1dHRvblN0eWxlO1xyXG4gICAgYXR0cmlidXRlcy5jbGFzc2VzID0gZ2xvYmFsLmRhcmtPdXRsaW5lQnV0dG9uQ2xhc3M7XHJcbiAgICBhdHRyaWJ1dGVzLmZ1bmN0aW9uID0gY3JlYXRlR3VpZGVkVG91cjtcclxuICAgIGF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImVtYmVkLWNvbnRhaW5lclwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlQnV0dG9uKGF0dHJpYnV0ZXMsIHRydWUpO1xyXG5cclxuICAgIGF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlQnV0dG9uQXR0cmlidXRlcygpO1xyXG4gICAgYXR0cmlidXRlcy5pZCA9IFwiZGFzaGJvYXJkRXhwbG9yYXRpb25cIjtcclxuICAgIGF0dHJpYnV0ZXMuY29udGVudCA9IFwiU3RhcnQgRGFzaGJvYXJkIEV4cGxvcmF0aW9uXCI7XHJcbiAgICBhdHRyaWJ1dGVzLnN0eWxlID0gIGdsb2JhbC5vbmJvYXJkaW5nQnV0dG9uU3R5bGU7XHJcbiAgICBhdHRyaWJ1dGVzLmNsYXNzZXMgPSBnbG9iYWwuZGFya091dGxpbmVCdXR0b25DbGFzcztcclxuICAgIGF0dHJpYnV0ZXMuZnVuY3Rpb24gPSBjcmVhdGVEYXNoYm9hcmRFeHBsb3JhdGlvbjtcclxuICAgIGF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImVtYmVkLWNvbnRhaW5lclwiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlQnV0dG9uKGF0dHJpYnV0ZXMsIHRydWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGl0bGVGb3JtKElELCB0aXRsZSl7XHJcbiAgICBsZXQgbGFiZWxBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZUxhYmVsQXR0cmlidXRlcygpO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLmlkID0gXCJ0aXRsZUxhYmVsXCIgKyBJRDtcclxuICAgIGxhYmVsQXR0cmlidXRlcy5mb3IgPSBcInRpdGxlSW5wdXRcIiArIElEO1xyXG4gICAgbGFiZWxBdHRyaWJ1dGVzLnN0eWxlID0gXCJtYXJnaW4tbGVmdDogMTBweDttYXJnaW4tcmlnaHQ6IDEwcHg7XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMuY29udGVudCA9IFwiVGl0bGU6XCI7XHJcbiAgICBsYWJlbEF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImNvbGxhcHNlRm9ybVwiICsgSUQ7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVMYWJlbChsYWJlbEF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGxldCBpbnB1dEF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlSW5wdXRBdHRyaWJ1dGVzKCk7XHJcbiAgICBpbnB1dEF0dHJpYnV0ZXMuaWQgPSBcInRpdGxlSW5wdXRcIiArIElEO1xyXG4gICAgaW5wdXRBdHRyaWJ1dGVzLnR5cGUgPSBcInN0cmluZ1wiO1xyXG4gICAgaW5wdXRBdHRyaWJ1dGVzLnZhbHVlID0gdGl0bGU7XHJcbiAgICBpbnB1dEF0dHJpYnV0ZXMuc3R5bGUgPSBcIm1hcmdpbi1yaWdodDogMjBweDtiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c3RlZWxibHVlO1wiO1xyXG4gICAgaW5wdXRBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJjb2xsYXBzZUZvcm1cIiArIElEO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlSW5wdXQoaW5wdXRBdHRyaWJ1dGVzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFUb1N0cmluZyhkYXRhQXJyYXkpe1xyXG4gICAgbGV0IGRhdGFTdHJpbmcgPSBcIlwiO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGFBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgZGF0YVN0cmluZyArPSBkYXRhQXJyYXlbaV07XHJcbiAgICAgICAgaWYoaSAhPSBkYXRhQXJyYXkubGVuZ3RoIC0xKXtcclxuICAgICAgICAgICAgZGF0YVN0cmluZyArPSBcIiBhbmQgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGFTdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuZEV4cGxvcmF0aW9uTW9kZSgpe1xyXG4gICAgZ2xvYmFsLnNldEV4cGxvcmF0aW9uTW9kZShmYWxzZSk7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoYm9hcmRFeHBsb3JhdGlvblwiKTtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlN0YXJ0IERhc2hib2FyZCBFeHBsb3JhdGlvblwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMZXR0ZXJUb1VwcGVyQ2FzZShzdHIpe1xyXG4gICAgc3RyID0gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2ZVBhZ2UoKXtcclxuICAgIGxldCBwYWdlcyA9IGF3YWl0IGdsb2JhbC5yZXBvcnQuZ2V0UGFnZXMoKTtcclxuICAgIGxldCBwYWdlID0gcGFnZXMuZmlsdGVyKGZ1bmN0aW9uKHBhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhZ2UuaXNBY3RpdmVcclxuICAgIH0pWzBdO1xyXG4gICAgZ2xvYmFsLnNldFBhZ2UocGFnZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkU3R5bGUodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KXtcclxuICAgIHJldHVybiAgZ2V0Q2xpY2thYmxlU3R5bGUodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSArYGJvcmRlci1yYWRpdXM6MTBweDtiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c3RlZWxibHVlO3otaW5kZXg6IDk5ICFpbXBvcnRhbnQ7YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrYWJsZVN0eWxlKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCl7XHJcbiAgICByZXR1cm4gYHBvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87dG9wOiR7dG9wfXB4O2xlZnQ6JHtsZWZ0fXB4O3dpZHRoOiR7d2lkdGh9cHg7aGVpZ2h0OiR7aGVpZ2h0fXB4O2A7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbG9zZUZ1bmN0aW9uKCl7XHJcbiAgICBpZihnbG9iYWwuaXNHdWlkZWRUb3VyKXtcclxuICAgICAgICByZXR1cm4gcmVtb3ZlT25ib2FyZGluZztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVPbmJvYXJkaW5nT3ZlcmxheTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPZkludGVyYWN0aW9uVmlzdWFsKHZpc3VhbCl7XHJcbiAgICBjb25zdCB2aXN1YWxzRGF0YSA9ICBnbG9iYWwuc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlLnZpc3VhbHM7XHJcbiAgICBsZXQgdmlzdWFsRGF0YSA9IHZpc3VhbHNEYXRhLmZpbmQoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gZGF0YS5pZCA9PSB2aXN1YWwubmFtZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB2aXN1YWxEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9mVmlzdWFsKHZpc3VhbCl7XHJcbiAgICBjb25zdCB2aXN1YWxzRGF0YSA9IGdsb2JhbC5zZXR0aW5ncy52aXN1YWxzO1xyXG4gICAgbGV0IHZpc3VhbERhdGEgPSB2aXN1YWxzRGF0YS5maW5kKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEuaWQgPT0gdmlzdWFsLm5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdmlzdWFsRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFXaXRoSWQoSUQpe1xyXG4gICAgY29uc3QgdmlzdWFscyA9IGdsb2JhbC5zZXR0aW5ncy52aXN1YWxzO1xyXG4gICAgbGV0IHZpc3VhbERhdGEgPSB2aXN1YWxzLmZpbmQoZnVuY3Rpb24gKHZpc3VhbCkge1xyXG4gICAgICAgIHJldHVybiB2aXN1YWwuaWQgPT0gSUQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdmlzdWFsRGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGlzYWJsZWRTdHlsZSh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpe1xyXG4gICAgcmV0dXJuIGBwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3RvcDoke3RvcH1weDtsZWZ0OiR7bGVmdH1weDt3aWR0aDoke3dpZHRofXB4O2hlaWdodDoke2hlaWdodH1weDtgO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmllbGRDb2x1bW4odmlzdWFsLCBmaWVsZE5hbWUpe1xyXG4gICAgbGV0IGNvbHVtbjogc3RyaW5nO1xyXG4gICAgbGV0IGZpZWxkcyA9IGF3YWl0IHZpc3VhbC5nZXREYXRhRmllbGRzKGZpZWxkTmFtZSk7XHJcbiAgICBpZihmaWVsZHMubGVuZ3RoICE9IDApe1xyXG4gICAgICAgIGNvbHVtbiA9IGZpZWxkc1swXS5jb2x1bW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sdW1uO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmllbGRNZWFzdXJlKHZpc3VhbCwgZmllbGROYW1lKXtcclxuICAgIGxldCBtZWFzdXJlOiBzdHJpbmc7XHJcbiAgICBsZXQgZmllbGRzID0gYXdhaXQgdmlzdWFsLmdldERhdGFGaWVsZHMoZmllbGROYW1lKTtcclxuICAgIGlmKGZpZWxkcy5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgbWVhc3VyZSA9IGZpZWxkc1swXS5tZWFzdXJlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lYXN1cmU7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWVsZE1lYXN1cmVzKHZpc3VhbCwgZmllbGROYW1lKXtcclxuICAgIGxldCBtZWFzdXJlcyA9IFtdO1xyXG4gICAgbGV0IGZpZWxkcyA9IGF3YWl0IHZpc3VhbC5nZXREYXRhRmllbGRzKGZpZWxkTmFtZSk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBtZWFzdXJlcy5wdXNoKGZpZWxkc1tpXS5tZWFzdXJlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtZWFzdXJlcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbHRlckluZm8oKXtcclxuICAgIGxldCBmaWx0ZXJzID0gYXdhaXQgZ2xvYmFsLnBhZ2UuZ2V0RmlsdGVycygpO1xyXG4gICAgbGV0IGZpbHRlckluZm9zID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBmaWx0ZXJJbmZvcy5wdXNoKGdldEZpbHRlckRlc2NyaXB0aW9uKGZpbHRlcnNbaV0pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsdGVySW5mb3M7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHZW5lcmFsSW5mb0ludGVyYWN0aW9uRXhhbXBsZVRleHQoKXtcclxuICAgIGxldCBnZW5lcmFsSW5mbyA9IGBDYW4geW91IHNlZSBob3cgdGhlIHdob2xlIHJlcG9ydCBjaGFuZ2VkPzxicj5BbGwgdGhlIHZpc3VhbGl6YXRpb25zIHdlcmUgZmlsdGVyZWQgYnkgXCJhbGwgcmVwb3J0IGZpbHRlcnNcIi48YnI+WW91IGNhbiBub3cgY2xpY2sgb24gb25lIG9mIHRoZSBjYXJkcyBvciBncmFwaHMgdG8gZ2V0IGRldGFpbGVkIGluZm9ybWF0aW9uIGFib3V0IGl0cyBjaGFuZ2VzLmA7XHJcbiAgICBnZW5lcmFsSW5mbyA9IGdlbmVyYWxJbmZvLnJlcGxhY2VBbGwoXCI8YnI+XCIsICdcXHJcXG4nKTtcclxuICAgIHJldHVybiBnZW5lcmFsSW5mbztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdlbmVyYWxJbnRlcmFjdGlvbkluZm8oYWRkaXRpb25hbEZpbHRlcnMsIGZpbHRlclN0cmluZyl7XHJcbiAgICBsZXQgdmlzdWFsSW50ZXJhY3Rpb25JbmZvID0gXCJUaGUgaGlnaGxpZ2h0ZWQgZGF0YSBpbmNsdWRlcyBcIjtcclxuXHJcbiAgICBpZihhZGRpdGlvbmFsRmlsdGVycy5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgbGV0IGRhdGFTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhZGRpdGlvbmFsRmlsdGVycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGRhdGFTdHJpbmcgKz0gYWRkaXRpb25hbEZpbHRlcnNbaV0udGFyZ2V0LmNvbHVtbiArIFwiIFwiICsgYWRkaXRpb25hbEZpbHRlcnNbaV0uZXF1YWxzO1xyXG4gICAgICAgICAgICBpZihpICE9IGFkZGl0aW9uYWxGaWx0ZXJzLmxlbmd0aCAtMSl7XHJcbiAgICAgICAgICAgICAgICBkYXRhU3RyaW5nICs9IFwiIGFuZCBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXN1YWxJbnRlcmFjdGlvbkluZm8gKz0gXCIgdGhlIFwiICsgZmlsdGVyU3RyaW5nICsgXCIgb2YgXCIgKyBkYXRhU3RyaW5nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2aXN1YWxJbnRlcmFjdGlvbkluZm8gKz0gXCJhbGwgXCIgKyBmaWx0ZXJTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZpc3VhbEludGVyYWN0aW9uSW5mbztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludGVyYWN0aW9uRXhhbXBsZUNoYW5nZWRJbmZvKHZpc3VhbCwgdmlzdWFsRGF0YSl7XHJcbiAgICBsZXQgY2hhbmdlZEluZm9TdGF0dXMgPSB2aXN1YWxEYXRhLmludGVyYWN0aW9uQ2hhbmdlZEluZm9zU3RhdHVzO1xyXG4gICAgbGV0IGNoYW5nZWRJbmZvO1xyXG4gICAgc3dpdGNoKGNoYW5nZWRJbmZvU3RhdHVzKXtcclxuICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLm9yaWdpbmFsOlxyXG4gICAgICAgICAgICBjaGFuZ2VkSW5mbyA9IGF3YWl0IGdldEludGVyYWN0aW9uRXhhbXBsZUNoYW5nZXNUZXh0KHZpc3VhbCk7XHJcbiAgICAgICAgICAgIGNoYW5nZWRJbmZvID0gY2hhbmdlZEluZm8ucmVwbGFjZUFsbChcIjxicj5cIiwgJ1xcclxcbicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLmNoYW5nZWQ6XHJcbiAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5hZGRlZDpcclxuICAgICAgICAgICAgY2hhbmdlZEluZm8gPSB2aXN1YWxEYXRhLmNoYW5nZWRJbnRlcmFjdGlvbkNoYW5nZWRJbmZvO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjaGFuZ2VkSW5mbyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaGFuZ2VkSW5mbztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludGVyYWN0aW9uRXhhbXBsZUNoYW5nZXNUZXh0KHZpc3VhbCl7XHJcbiAgICBsZXQgdmlzdWFsQ2hhbmdlSW5mbyA9IGBZb3UgY2FuIHNlZSB0aGF0IHRoaXMgdmlzdWFsIHdhcyBmaWx0ZXJlZCBieSBcIkZpbHRlclwiLjxicj5gO1xyXG5cclxuICAgIGxldCB0eXBlID0gZ2V0VHlwZU5hbWUodmlzdWFsKTtcclxuXHJcbiAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgY2FzZSAnQ2FyZCc6XHJcbiAgICAgICAgICAgIHZpc3VhbENoYW5nZUluZm8gKz0gYFRoZSBkaXNwbGF5ZWQgZGF0YSBpcyBub3cgXCJEYXRhVmFsdWVcIi5gO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdMaW5lIENsdXN0ZXJlZCBDb2x1bW4gQ29tYm8gQ2hhcnQnOlxyXG4gICAgICAgIGNhc2UgJ0xpbmUgQ2hhcnQnOlxyXG4gICAgICAgIGNhc2UgJ0NsdXN0ZXJlZCBCYXIgQ2hhcnQnOlxyXG4gICAgICAgICAgICB2aXN1YWxDaGFuZ2VJbmZvICs9IGBUaGUgaGlnaGxpZ2h0ZWQgZGF0YSBpbmNsdWRlcyBcIkFsbEhpZ2hsaXRlZERhdGFcIi5gO1xyXG4gICAgICAgICAgICB2aXN1YWxDaGFuZ2VJbmZvICs9IFwiPGJyPllvdSBjYW4gYWxzbyBjaGFuZ2UgdGhlIHJlcG9ydCBmaWx0ZXJzIGJ5IHNlbGVjdGluZyBhIG5ldyBlbGVtZW50IG9mIHRoaXMgdmlzdWFsLlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmlzdWFsQ2hhbmdlSW5mbztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEludGVyYWN0aW9uRXhhbXBsZUdlbmVyYWxJbmZvKCl7XHJcbiAgICBsZXQgZ2VuZXJhbEluZm8gPSBnbG9iYWwuc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlLmdlbmVyYWxJbmZvU3RhdHVzO1xyXG4gICAgc3dpdGNoKGdlbmVyYWxJbmZvKXtcclxuICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLm9yaWdpbmFsOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0R2VuZXJhbEluZm9JbnRlcmFjdGlvbkV4YW1wbGVUZXh0KCk7XHJcbiAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5jaGFuZ2VkOlxyXG4gICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuYWRkZWQ6XHJcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWwuc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlLmNoYW5nZWRHZW5lcmFsSW5mby5yZXBsYWNlQWxsKFwiPGJyPlwiLCAnXFxyXFxuJyk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnRlcmFjdGlvbkV4YW1wbGVJbnRlcmFjdGlvbkluZm8odmlzdWFsLCB2aXN1YWxEYXRhKXtcclxuICAgIGxldCBjbGlja0luZm9TdGF0dXMgPSB2aXN1YWxEYXRhLmNsaWNrSW5mb3NTdGF0dXM7XHJcbiAgICBsZXQgaW50ZXJhY3Rpb25JbmZvO1xyXG4gICAgc3dpdGNoKGNsaWNrSW5mb1N0YXR1cyl7XHJcbiAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5vcmlnaW5hbDpcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb25JbmZvID0gYXdhaXQgZ2V0SW50ZXJhY3Rpb25UZXh0KHZpc3VhbCk7XHJcbiAgICAgICAgICAgIGludGVyYWN0aW9uSW5mbyA9IGludGVyYWN0aW9uSW5mby5yZXBsYWNlQWxsKFwiPGJyPlwiLCAnXFxyXFxuJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuY2hhbmdlZDpcclxuICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLmFkZGVkOlxyXG4gICAgICAgICAgICBpbnRlcmFjdGlvbkluZm8gPSB2aXN1YWxEYXRhLmNoYW5nZWRDbGlja0luZm87XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGludGVyYWN0aW9uSW5mbyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnRlcmFjdGlvbkluZm87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0VmlzdWFsKCl7XHJcbiAgICB2YXIgbmV4dFZpc3VhbDtcclxuICAgIGxldCB2aXN1YWxzID0gZ2xvYmFsLmN1cnJlbnRWaXN1YWxzLmZpbHRlcihmdW5jdGlvbiAodmlzdWFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZpc3VhbC50eXBlICE9PSBcInNsaWNlclwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihnbG9iYWwuY3VycmVudFZpc3VhbEluZGV4ID49IHZpc3VhbHMubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgbmV4dFZpc3VhbCA9IHZpc3VhbHNbMF07IFxyXG4gICAgfWVsc2V7XHJcbiAgICAgICBuZXh0VmlzdWFsID0gdmlzdWFsc1tnbG9iYWwuY3VycmVudFZpc3VhbEluZGV4ICsgMV07IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5leHRWaXN1YWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROb3RTdXBwb3J0ZWRJbmZvKCkge1xyXG4gICAgbGV0IGRlZmF1bHRJbmZvID0gXCJTYWRseSB3ZSBkbyBub3Qgc3VwcG9ydCB0aGlzIHR5cGUgb2YgdmlzdWFsIDooXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRUZXh0XCIpLmlubmVySFRNTCA9IGRlZmF1bHRJbmZvO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2V0dGluZ3MoKXtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNldHRpbmdzXCIpID09IG51bGwpe1xyXG4gICAgICAgIGF3YWl0IGNyZWF0ZVNldHRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICBnbG9iYWwuc2V0U2V0dGluZ3MoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNldHRpbmdzXCIpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTcGVjaWZpY0RhdGFJbmZvKHZpc3VhbCwgZGF0YU5hbWUpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHZhciBkYXRhTWFwID0gYXdhaXQgZ2V0VmlzdWFsRGF0YSh2aXN1YWwpOyAgXHJcbiAgICB9Y2F0Y2h7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKCFkYXRhTmFtZSl7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGFNYXAuZ2V0KGRhdGFOYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldEludGVyYWN0aW9uRmlsdGVyKHRhcmdldCl7XHJcbiAgICBsZXQgdmlzdWFsSW50ZXJhY3Rpb25JbmZvID0gXCJcIjtcclxuICAgIGxldCBmaWx0ZXIgPSBnbG9iYWwuc2VsZWN0ZWRUYXJnZXRzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBkYXRhLnRhcmdldC5jb2x1bW4gPT0gdGFyZ2V0O1xyXG4gICAgfSk7XHJcbiAgICBpZihmaWx0ZXIubGVuZ3RoID09IDApe1xyXG4gICAgICAgIHZpc3VhbEludGVyYWN0aW9uSW5mbyArPSBcIiBmb3IgYWxsIFwiICsgdGFyZ2V0ICsgXCJzXCI7IFxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdmlzdWFsSW50ZXJhY3Rpb25JbmZvICs9IFwiIGZvciBcIiArIGZpbHRlclswXS5lcXVhbHM7ICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmlzdWFsSW50ZXJhY3Rpb25JbmZvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmlzdWFsQ2FyZFBvcyh2aXN1YWwsIGNhcmRXaWR0aCwgb2Zmc2V0KXtcclxuICAgIGxldCBsZWZ0RGlzdGFuY2UgPSB2aXN1YWwubGF5b3V0Lng7XHJcbiAgICBsZXQgcmlnaHRYID0gbGVmdERpc3RhbmNlICsgdmlzdWFsLmxheW91dC53aWR0aDtcclxuICAgIGxldCByaWdodERpc3RhbmNlID0gZ2xvYmFsLnBhZ2UuZGVmYXVsdFNpemUud2lkdGggLSByaWdodFg7XHJcblxyXG4gICAgdmFyIHBvc2l0aW9uID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICBwb3M6IFwiXCJcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHJpZ2h0RGlzdGFuY2UgPiBsZWZ0RGlzdGFuY2UpIHtcclxuICAgICAgICBwb3NpdGlvbi54ID0gb2Zmc2V0ICsgcmlnaHRYO1xyXG4gICAgICAgIHBvc2l0aW9uLnBvcyA9IFwicmlnaHRcIjtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHBvc2l0aW9uLnggPSBsZWZ0RGlzdGFuY2UgLSBvZmZzZXQgLSBjYXJkV2lkdGg7XHJcbiAgICAgICAgcG9zaXRpb24ucG9zID0gXCJsZWZ0XCI7XHJcbiAgICB9XHJcbiAgICBwb3NpdGlvbi55ID0gb2Zmc2V0ICsgdmlzdWFsLmxheW91dC55XHJcbiAgICBcclxuICAgIHJldHVybiBwb3NpdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpc3VhbERhdGEodmlzdWFsKXtcclxuICAgIGxldCB2aXN1YWxEYXRhID0gYXdhaXQgdmlzdWFsLmV4cG9ydERhdGEoKTtcclxuICAgIHZpc3VhbERhdGEgPSB2aXN1YWxEYXRhLmRhdGE7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gdmlzdWFsRGF0YS5zbGljZSgwLCB2aXN1YWxEYXRhLmluZGV4T2YoJ1xccicpKS5zcGxpdCgnLCcpO1xyXG4gICAgY29uc3Qgcm93cyA9IHZpc3VhbERhdGEuc2xpY2UodmlzdWFsRGF0YS5pbmRleE9mKCdcXG4nKSArIDEpLnNwbGl0KC9cXHI/XFxuLyk7XHJcbiAgICByb3dzLnBvcCgpO1xyXG4gICAgdmlzdWFsRGF0YSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB2YWx1ZXMgPSByb3dzW2ldLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWFkZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhQXJyYXkgPSB2aXN1YWxEYXRhLmdldChoZWFkZXJzW2pdKSA/PyBbXTtcclxuICAgICAgICAgICAgZGF0YUFycmF5LnB1c2godmFsdWVzW2pdKTtcclxuICAgICAgICAgICAgdmlzdWFsRGF0YS5zZXQoaGVhZGVyc1tqXSwgZGF0YUFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGRhdGFBcnJheSA9IHZpc3VhbERhdGEuZ2V0KGhlYWRlcnNbaV0pO1xyXG4gICAgICAgIGlmKCFpc05hTihOdW1iZXIoZGF0YUFycmF5WzBdKSkpe1xyXG4gICAgICAgICAgICBkYXRhQXJyYXkgPSBkYXRhQXJyYXkubWFwKHN0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHN0cik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGludEFycmF5ID0gW107XHJcbiAgICAgICAgICAgIGludEFycmF5LnB1c2goTWF0aC5taW4oLi4uZGF0YUFycmF5KSk7XHJcbiAgICAgICAgICAgIGludEFycmF5LnB1c2goTWF0aC5tYXgoLi4uZGF0YUFycmF5KSk7XHJcbiAgICAgICAgICAgIGRhdGFBcnJheSA9IGludEFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0YUFycmF5ID0gQXJyYXkuZnJvbShuZXcgU2V0KGRhdGFBcnJheSkpO1xyXG5cclxuICAgICAgICB2aXN1YWxEYXRhLnNldChoZWFkZXJzW2ldLCBkYXRhQXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2aXN1YWxEYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWaXN1YWxJbmRleChuYW1lKXtcclxuICAgIGxldCBpbmRleCA9IGdsb2JhbC5jdXJyZW50VmlzdWFscy5maW5kSW5kZXgoZnVuY3Rpb24odmlzdWFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZpc3VhbC5uYW1lID09IG5hbWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbmRleDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpc3VhbEluZm9zKHZpc3VhbCl7XHJcbiAgICBsZXQgdHlwZSA9IGdldFR5cGVOYW1lKHZpc3VhbCk7XHJcbiAgICB2YXIgdmlzdWFsSW5mb3MgPSB7Z2VuZXJhbEltYWdlczpbXSxnZW5lcmFsSW5mb3M6W10sZGF0YUltYWdlczpbXSxkYXRhSW5mb3M6W10saW50ZXJhY3Rpb25JbWFnZXM6W10saW50ZXJhY3Rpb25JbmZvczpbXX07XHJcblxyXG4gICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgIGNhc2UgJ0NhcmQnOlxyXG4gICAgICAgICAgICB2aXN1YWxJbmZvcyA9IGF3YWl0IGdldENhcmRJbmZvKHZpc3VhbCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0xpbmUgQ2x1c3RlcmVkIENvbHVtbiBDb21ibyBDaGFydCc6XHJcbiAgICAgICAgICAgIHZpc3VhbEluZm9zID0gYXdhaXQgZ2V0TGluZUNsdXN0ZXJlZENvbHVtbkNvbWJvQ2hhcnRJbmZvKHZpc3VhbCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0xpbmUgQ2hhcnQnOlxyXG4gICAgICAgICAgICB2aXN1YWxJbmZvcyA9IGF3YWl0IGdldExpbmVDaGFydEluZm8odmlzdWFsKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQ2x1c3RlcmVkIEJhciBDaGFydCc6XHJcbiAgICAgICAgICAgIHZpc3VhbEluZm9zID0gYXdhaXQgZ2V0Q2x1c3RlcmVkQmFyQ2hhcnRJbmZvKHZpc3VhbCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1NsaWNlcic6XHJcbiAgICAgICAgICAgIHZpc3VhbEluZm9zID0gYXdhaXQgZ2V0U2xpY2VySW5mbyh2aXN1YWwpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmlzdWFsSW5mb3M7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWaXN1YWxzKCl7XHJcbiAgICBsZXQgdmlzdWFscyA9IGF3YWl0IGdsb2JhbC5wYWdlLmdldFZpc3VhbHMoKTtcclxuICAgIGdsb2JhbC5zZXRWaXN1YWxzKHZpc3VhbHMpO1xyXG4gICAgc29ydFZpc3VhbHMoKTtcclxuICAgIHJlbW92ZURlc2lnblZpc3VhbHMoKTtcclxuICAgIGdsb2JhbC5zZXRBbGxWaXN1YWxzKGdsb2JhbC5jdXJyZW50VmlzdWFscyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWaXN1YWxUaXRsZSh2aXN1YWwpe1xyXG4gICAgbGV0IHRpdGxlID0gdmlzdWFsLnRpdGxlO1xyXG4gICAgaWYgKHRpdGxlKXtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZ2V0VHlwZU5hbWUodmlzdWFsKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVOYW1lKHZpc3VhbCl7XHJcbiAgICBsZXQgdHlwZU5hbWUgPSAgdmlzdWFsLnR5cGUucmVwbGFjZUFsbCgvKFtBLVpdKS9nLCAnICQxJykudHJpbSgpO1xyXG4gICAgdHlwZU5hbWUgPSBmaXJzdExldHRlclRvVXBwZXJDYXNlKHR5cGVOYW1lKTtcclxuICAgIHJldHVybiB0eXBlTmFtZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzVmlzaWJsZSh2aXN1YWwsIHNlbGVjdG9yT2JqZWN0KXtcclxuICAgIGxldCBzZWxlY3RvciA9IHsgXHJcbiAgICAgICAgb2JqZWN0TmFtZTogc2VsZWN0b3JPYmplY3QsXHJcbiAgICAgICAgcHJvcGVydHlOYW1lOiBcInZpc2libGVcIlxyXG4gICAgfTtcclxuICAgIGxldCB2aXNpYmxlID0gYXdhaXQgdmlzdWFsLmdldFByb3BlcnR5KHNlbGVjdG9yKTtcclxuICAgIHJldHVybiB2aXNpYmxlLnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJTZXR0aW5nc1Zpc3VhbHMoYWxsVmlzdWFscyl7XHJcbiAgICBsZXQgdmlzRGF0YXMgPSBnbG9iYWwuc2V0dGluZ3MudmlzdWFscztcclxuICAgIGdsb2JhbC5zZXR0aW5ncy52aXN1YWxzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHZpc3VhbCBvZiBhbGxWaXN1YWxzKSB7XHJcbiAgICAgICAgdmFyIHZpc0RhdGEgPSB2aXNEYXRhcy5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHsgXHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmlkID09PSB2aXN1YWwubmFtZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnbG9iYWwuc2V0dGluZ3MudmlzdWFscy5wdXNoKHZpc0RhdGFbMF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVjcmVhdGVJbnRlcmFjdGlvbkV4YW1wbGVCdXR0b24oKXtcclxuICAgIGxldCBpbnRlcmFjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJhY3Rpb25FeGFtcGxlXCIpO1xyXG4gICAgaWYoIWludGVyYWN0aW9uQnV0dG9uKXtcclxuICAgICAgICBsZXQgdmlzdWFsID0gZ2xvYmFsLmN1cnJlbnRWaXN1YWxzW2dsb2JhbC5jdXJyZW50VmlzdWFsSW5kZXhdXHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzdWFsSW5mb1RhYnNcIik7XHJcbiAgICAgICAgaWYocGFyZW50KXtcclxuICAgICAgICAgICAgY3JlYXRlSW50ZXJhY3Rpb25FeGFtcGxlQnV0dG9uKFwiaW50ZXJhY3Rpb25UYWJcIiwgdmlzdWFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXN1YWxJbmZvXCIpO1xyXG4gICAgICAgIGlmKHBhcmVudCl7XHJcbiAgICAgICAgICAgIGNyZWF0ZUludGVyYWN0aW9uRXhhbXBsZUJ1dHRvbihcInZpc3VhbEluZm9cIiwgdmlzdWFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb250YWluZXJPZmZzZXQoKXtcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYmVkLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBweFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVEZXNpZ25WaXN1YWxzKCl7XHJcbiAgICBsZXQgdmlzdWFscyA9IGdsb2JhbC5jdXJyZW50VmlzdWFscy5maWx0ZXIoZnVuY3Rpb24gKHZpc3VhbCkge1xyXG4gICAgICAgIHJldHVybiB2aXN1YWwudHlwZSAhPT0gXCJzaGFwZVwiICYmIHZpc3VhbC50eXBlICE9PSBcImJhc2ljU2hhcGVcIjtcclxuICAgIH0pO1xyXG4gICAgZ2xvYmFsLnNldFZpc3VhbHModmlzdWFscyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVPbmJvYXJkaW5nKCl7XHJcbiAgICByZW1vdmVDb250YWluZXJPZmZzZXQoKTtcclxuXHJcbiAgICBnbG9iYWwuc2V0SW50ZXJhY3Rpb25Nb2RlKGZhbHNlKTtcclxuICAgIGdsb2JhbC5zZXRJc0d1aWRlZFRvdXIoZmFsc2UpO1xyXG4gICAgdG9nZ2xlRmlsdGVyKGZhbHNlKTtcclxuICAgIGVuZEV4cGxvcmF0aW9uTW9kZSgpO1xyXG5cclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJvbmJvYXJkaW5nXCIpO1xyXG4gICAgcmVtb3ZlRnJhbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU9uYm9hcmRpbmdPdmVybGF5KCl7XHJcbiAgICBnbG9iYWwuY3VycmVudFZpc3VhbHMuZm9yRWFjaChmdW5jdGlvbiAodmlzdWFsKSB7XHJcbiAgICAgICAgZWxlbWVudHMucmVtb3ZlRWxlbWVudCh2aXN1YWwubmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJmaWx0ZXJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNpemVFbWJlZChmaWx0ZXJXaWR0aCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYmVkLWNvbnRhaW5lclwiKS5zdHlsZS5jc3NUZXh0ID0gYHRvcDowcHg7bGVmdDowcHg7d2lkdGg6JHtnbG9iYWwucGFnZS5kZWZhdWx0U2l6ZS53aWR0aCArIGZpbHRlcldpZHRofXB4O2hlaWdodDoke2dsb2JhbC5wYWdlLmRlZmF1bHRTaXplLmhlaWdodCArIGdsb2JhbC5zZXR0aW5ncy5yZXBvcnRPZmZzZXQudG9wICsgZ2xvYmFsLmZvb3RlckhlaWdodH1weDtgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUludElucHV0KGlucHV0SWQpe1xyXG4gICAgbGV0IHZhbHVlO1xyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCkgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICBpZighaW5wdXQ/LnZhbHVlKXtcclxuICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KGlucHV0Py52YWx1ZSk7ICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRWaXN1YWxzKCl7XHJcbiAgICBnbG9iYWwuY3VycmVudFZpc3VhbHMuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICBpZihhLmxheW91dC54IDwgYi5sYXlvdXQueCl7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYoYS5sYXlvdXQueCA+IGIubGF5b3V0Lngpe1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZihhLmxheW91dC55IDwgYi5sYXlvdXQueSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRFeHBsb3JhdGlvbk1vZGUoKXtcclxuICAgIGdsb2JhbC5zZXRFeHBsb3JhdGlvbk1vZGUodHJ1ZSk7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoYm9hcmRFeHBsb3JhdGlvblwiKTtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkVuZCBEYXNoYm9hcmQgRXhwbG9yYXRpb25cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZpbHRlcihvcGVuKXtcclxuICAgIGxldCBuZXdTZXR0aW5ncyA9IHtcclxuICAgICAgICBwYW5lczoge1xyXG4gICAgICAgICAgICBmaWx0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBleHBhbmRlZDogb3BlbixcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnZU5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07ICAgIFxyXG4gICAgZ2xvYmFsLnJlcG9ydC51cGRhdGVTZXR0aW5ncyhuZXdTZXR0aW5ncyk7XHJcblxyXG4gICAgaWYob3Blbil7XHJcbiAgICAgICAgcmVzaXplRW1iZWQoZ2xvYmFsLmZpbHRlck9wZW5lZFdpZHRoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzaXplRW1iZWQoZ2xvYmFsLmZpbHRlckNsb3NlZFdpZHRoKTtcclxuICAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgKiBhcyBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5pbXBvcnQgKiBhcyBkaXNhYmxlIGZyb20gXCIuL2Rpc2FibGVBcmVhXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUludHJvQ2FyZCB9IGZyb20gXCIuL2ludHJvQ2FyZHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRmlsdGVySW5mb0NhcmQgfSBmcm9tIFwiLi9maWx0ZXJJbmZvQ2FyZHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlVmlzdWFsSW5mbyB9IGZyb20gXCIuL3Zpc3VhbEluZm9cIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmZvQ2FyZCh2aXN1YWwpe1xyXG4gICAgZGlzYWJsZS5kaXNhYmxlRnJhbWUoKTtcclxuICAgIGRpc2FibGUuY3JlYXRlRGlzYWJsZWRBcmVhKHZpc3VhbCk7XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gaGVscGVycy5nZXRWaXN1YWxDYXJkUG9zKHZpc3VhbCwgZ2xvYmFsLmluZm9DYXJkV2lkdGgsIGdsb2JhbC5pbmZvQ2FyZE1hcmdpbik7XHJcblxyXG4gICAgbGV0IHN0eWxlID0gaGVscGVycy5nZXRDYXJkU3R5bGUocG9zaXRpb24ueSwgcG9zaXRpb24ueCwgZ2xvYmFsLmluZm9DYXJkV2lkdGgsIFwiXCIpO1xyXG4gICAgaWYocG9zaXRpb24ucG9zID09PSBcImxlZnRcIil7XHJcbiAgICAgICAgaGVscGVycy5jcmVhdGVDYXJkKFwiaW5mb0NhcmRcIiwgc3R5bGUsIFwicmVjdExlZnRCaWdcIik7XHJcbiAgICAgICAgaGVscGVycy5jcmVhdGVDbG9zZUJ1dHRvbihcImNsb3NlQnV0dG9uXCIsIFwiY2xvc2VCdXR0b25QbGFjZW1lbnRCaWcgcG9zaXRpb25MZWZ0XCIsIGhlbHBlcnMuZ2V0Q2xvc2VGdW5jdGlvbigpLCBcImluZm9DYXJkXCIpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgaGVscGVycy5jcmVhdGVDYXJkKFwiaW5mb0NhcmRcIiwgc3R5bGUsIFwicmVjdFJpZ2h0QmlnXCIpO1xyXG4gICAgICAgIGhlbHBlcnMuY3JlYXRlQ2xvc2VCdXR0b24oXCJjbG9zZUJ1dHRvblwiLCBcImNsb3NlQnV0dG9uUGxhY2VtZW50QmlnXCIsIGhlbHBlcnMuZ2V0Q2xvc2VGdW5jdGlvbigpLCBcImluZm9DYXJkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB2aXN1YWxEYXRhID0gaGVscGVycy5nZXREYXRhT2ZWaXN1YWwodmlzdWFsKTtcclxuICAgIGhlbHBlcnMuY3JlYXRlQ2FyZENvbnRlbnQodmlzdWFsRGF0YS50aXRsZSwgXCJcIiwgXCJpbmZvQ2FyZFwiKTtcclxuICAgIGNyZWF0ZVZpc3VhbEluZm8odmlzdWFsKTtcclxuXHJcbiAgICBoZWxwZXJzLmNyZWF0ZUNhcmRCdXR0b25zKFwicHJldmlvdXNcIiwgXCJuZXh0XCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSW5mb0NhcmQoKXtcclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJpbmZvQ2FyZFwiKTtcclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJkaXNhYmxlZFVwcGVyXCIpO1xyXG4gICAgZWxlbWVudHMucmVtb3ZlRWxlbWVudChcImRpc2FibGVkTG93ZXJcIik7XHJcbiAgICBlbGVtZW50cy5yZW1vdmVFbGVtZW50KFwiZGlzYWJsZWRSaWdodFwiKTtcclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJkaXNhYmxlZExlZnRcIik7XHJcbiAgICBkaXNhYmxlLnJlbW92ZUZyYW1lKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0SW5mb0NhcmQoKXtcclxuICAgIGlmKGdsb2JhbC5jdXJyZW50VmlzdWFsSW5kZXggPT0gZ2xvYmFsLmN1cnJlbnRWaXN1YWxzLmxlbmd0aCAtMSkge1xyXG4gICAgICAgIGdsb2JhbC5zZXRDdXJyZW50VmlzdWFsSW5kZXgoZ2xvYmFsLmN1cnJlbnRWaXN1YWxJbmRleCArIDEpO1xyXG4gICAgICAgIHJlbW92ZUluZm9DYXJkKCk7XHJcbiAgICAgICAgY3JlYXRlRmlsdGVySW5mb0NhcmQoKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBpZighZ2xvYmFsLmlzR3VpZGVkVG91ciAmJiBnbG9iYWwuY3VycmVudFZpc3VhbEluZGV4ID09IGdsb2JhbC5jdXJyZW50VmlzdWFscy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBnbG9iYWwuc2V0Q3VycmVudFZpc3VhbEluZGV4KDApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBnbG9iYWwuc2V0Q3VycmVudFZpc3VhbEluZGV4KGdsb2JhbC5jdXJyZW50VmlzdWFsSW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVtb3ZlSW5mb0NhcmQoKTtcclxuICAgICAgICBjcmVhdGVJbmZvQ2FyZChnbG9iYWwuY3VycmVudFZpc3VhbHNbZ2xvYmFsLmN1cnJlbnRWaXN1YWxJbmRleF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJldmlvdXNJbmZvQ2FyZCgpe1xyXG4gICAgaWYoZ2xvYmFsLmN1cnJlbnRWaXN1YWxJbmRleCA9PSAwKXtcclxuICAgICAgICByZW1vdmVJbmZvQ2FyZCgpO1xyXG4gICAgICAgIGlmKGdsb2JhbC5pc0d1aWRlZFRvdXIpe1xyXG4gICAgICAgICAgIGNyZWF0ZUludHJvQ2FyZCgpOyBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZ2xvYmFsLnNldEN1cnJlbnRWaXN1YWxJbmRleChnbG9iYWwuY3VycmVudFZpc3VhbHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY3JlYXRlRmlsdGVySW5mb0NhcmQoKTtcclxuICAgICAgICB9ICAgICAgXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpZihnbG9iYWwuaXNHdWlkZWRUb3VyICYmIGdsb2JhbC5jdXJyZW50VmlzdWFsSW5kZXggPT0gZ2xvYmFsLmN1cnJlbnRWaXN1YWxzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGRpc2FibGUuZGlzYWJsZUZpbHRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnbG9iYWwuc2V0Q3VycmVudFZpc3VhbEluZGV4KGdsb2JhbC5jdXJyZW50VmlzdWFsSW5kZXggLSAxKTtcclxuICAgICAgICByZW1vdmVJbmZvQ2FyZCgpO1xyXG4gICAgICAgIGNyZWF0ZUluZm9DYXJkKGdsb2JhbC5jdXJyZW50VmlzdWFsc1tnbG9iYWwuY3VycmVudFZpc3VhbEluZGV4XSk7IFxyXG4gICAgfSAgIFxyXG59IiwiaW1wb3J0ICogYXMgaW5mb0NhcmQgZnJvbSBcIi4vaW5mb0NhcmRzXCI7XHJcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuaW1wb3J0ICogYXMgZGlzYWJsZSBmcm9tIFwiLi9kaXNhYmxlQXJlYVwiO1xyXG5pbXBvcnQgKiBhcyBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBnZXRTbGljZXJJbnRlcmFjdGlvbkV4YW1wbGUgfSBmcm9tIFwiLi9iYXNpY1Zpc3VhbENvbnRlbnRcIjtcclxuaW1wb3J0IHsgZ2V0QmFyQ2hhcnRJbnRlcmFjdGlvbkV4YW1wbGUgfSBmcm9tIFwiLi9iYXJDaGFydFZpc3VhbENvbnRlbnRcIjtcclxuaW1wb3J0IHsgZ2V0TGluZUNoYXJ0SW50ZXJhY3Rpb25FeGFtcGxlIH0gZnJvbSBcIi4vbGluZUNoYXJ0VmlzdWFsQ29udGVudFwiO1xyXG5pbXBvcnQgeyBnZXRMaW5lQ2x1c3RlcmVkQ29sdW1uQ29tYm9DaGFydEludGVyYWN0aW9uRXhhbXBsZSB9IGZyb20gXCIuL2NvbXBsZXhWaXN1YWxDb250ZW50XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRJbnRlcmFjdGlvbkV4YW1wbGUoKXtcclxuICAgIGdsb2JhbC5zZXRJbnRlcmFjdGlvbk1vZGUodHJ1ZSk7XHJcbiAgICBpbmZvQ2FyZC5yZW1vdmVJbmZvQ2FyZCgpO1xyXG4gICAgY3JlYXRlSW50ZXJhY3Rpb25DYXJkKGdsb2JhbC5jdXJyZW50VmlzdWFsc1tnbG9iYWwuY3VycmVudFZpc3VhbEluZGV4XSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbnRlcmFjdGlvbkNhcmQodmlzdWFsKXtcclxuICAgIGRpc2FibGUuZGlzYWJsZUZyYW1lKCk7XHJcbiAgICBkaXNhYmxlLmNyZWF0ZURpc2FibGVkQXJlYSh2aXN1YWwpO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGhlbHBlcnMuZ2V0VmlzdWFsQ2FyZFBvcyh2aXN1YWwsIGdsb2JhbC5pbmZvQ2FyZFdpZHRoLCBnbG9iYWwuaW5mb0NhcmRNYXJnaW4pO1xyXG5cclxuICAgIGxldCBzdHlsZSA9IGhlbHBlcnMuZ2V0Q2FyZFN0eWxlKHBvc2l0aW9uLnksIHBvc2l0aW9uLngsIGdsb2JhbC5pbmZvQ2FyZFdpZHRoLCBcIlwiKTtcclxuICAgIGlmKHBvc2l0aW9uLnBvcyA9PT0gXCJsZWZ0XCIpe1xyXG4gICAgICAgIGhlbHBlcnMuY3JlYXRlQ2FyZChcImludGVyYWN0aW9uQ2FyZFwiLCBzdHlsZSwgXCJyZWN0TGVmdEJpZ1wiKTtcclxuICAgICAgICBoZWxwZXJzLmNyZWF0ZUNsb3NlQnV0dG9uKFwiY2xvc2VCdXR0b25cIiwgXCJjbG9zZUJ1dHRvblBsYWNlbWVudEJpZyBwb3NpdGlvbkxlZnRcIiwgaGVscGVycy5nZXRDbG9zZUZ1bmN0aW9uKCksIFwiaW50ZXJhY3Rpb25DYXJkXCIpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgaGVscGVycy5jcmVhdGVDYXJkKFwiaW50ZXJhY3Rpb25DYXJkXCIsIHN0eWxlLCBcInJlY3RSaWdodEJpZ1wiKTtcclxuICAgICAgICBoZWxwZXJzLmNyZWF0ZUNsb3NlQnV0dG9uKFwiY2xvc2VCdXR0b25cIiwgXCJjbG9zZUJ1dHRvblBsYWNlbWVudEJpZ1wiLCBoZWxwZXJzLmdldENsb3NlRnVuY3Rpb24oKSwgXCJpbnRlcmFjdGlvbkNhcmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaGVscGVycy5jcmVhdGVDYXJkQ29udGVudChnbG9iYWwuc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlLnRpdGxlLCBcIlwiLCBcImludGVyYWN0aW9uQ2FyZFwiKTtcclxuICAgIGF3YWl0IGNyZWF0ZUludGVyYWN0aW9uSW5mbyh2aXN1YWwpO1xyXG4gICBcclxuICAgIGhlbHBlcnMuY3JlYXRlQ2FyZEJ1dHRvbnMoXCJcIiwgXCJiYWNrIHRvIHZpc3VhbFwiKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW50ZXJhY3Rpb25JbmZvKHZpc3VhbCl7XHJcbiAgICBsZXQgdmlzdWFsRGF0YSA9IGhlbHBlcnMuZ2V0RGF0YU9mSW50ZXJhY3Rpb25WaXN1YWwodmlzdWFsKTtcclxuICAgIGxldCBpbnRlcmFjdGlvbkluZm87XHJcblxyXG4gICAgc3dpdGNoKHZpc3VhbERhdGEuY2xpY2tJbmZvc1N0YXR1cyl7XHJcbiAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5vcmlnaW5hbDpcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb25JbmZvID0gYXdhaXQgZ2V0SW50ZXJhY3Rpb25UZXh0KHZpc3VhbCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuY2hhbmdlZDpcclxuICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLmFkZGVkOlxyXG4gICAgICAgICAgICBpbnRlcmFjdGlvbkluZm8gPSB2aXN1YWxEYXRhLmNoYW5nZWRDbGlja0luZm87XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGludGVyYWN0aW9uSW5mbyA9IFwiUGxlYXNlIGNsaWNrIG9uIGFuIGVsZW1lbnQgb2YgdGhlIHZpc3VhbGl6YXRpb24gdG8gZmlsdGVyIHRoZSByZXBvcnQuXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50VGV4dFwiKS5pbm5lckhUTUwgPSBpbnRlcmFjdGlvbkluZm87XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnRlcmFjdGlvblRleHQodmlzdWFsKXtcclxuICAgIGxldCB0eXBlID0gaGVscGVycy5nZXRUeXBlTmFtZSh2aXN1YWwpO1xyXG4gICAgbGV0IGludGVyYWN0aW9uSW5mbztcclxuXHJcbiAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgY2FzZSAnTGluZSBDbHVzdGVyZWQgQ29sdW1uIENvbWJvIENoYXJ0JzpcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb25JbmZvID0gYXdhaXQgZ2V0TGluZUNsdXN0ZXJlZENvbHVtbkNvbWJvQ2hhcnRJbnRlcmFjdGlvbkV4YW1wbGUodmlzdWFsKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnTGluZSBDaGFydCc6XHJcbiAgICAgICAgICAgIGludGVyYWN0aW9uSW5mbyA9IGF3YWl0IGdldExpbmVDaGFydEludGVyYWN0aW9uRXhhbXBsZSh2aXN1YWwpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdDbHVzdGVyZWQgQmFyIENoYXJ0JzpcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb25JbmZvID0gYXdhaXQgZ2V0QmFyQ2hhcnRJbnRlcmFjdGlvbkV4YW1wbGUodmlzdWFsKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnU2xpY2VyJzpcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb25JbmZvID0gYXdhaXQgZ2V0U2xpY2VySW50ZXJhY3Rpb25FeGFtcGxlKHZpc3VhbCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnRlcmFjdGlvbkluZm87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJbnRlcmFjdGlvbkNhcmQoKXtcclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJpbnRlcmFjdGlvbkNhcmRcIik7XHJcbiAgICBlbGVtZW50cy5yZW1vdmVFbGVtZW50KFwiZGlzYWJsZWRVcHBlclwiKTtcclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJkaXNhYmxlZExvd2VyXCIpO1xyXG4gICAgZWxlbWVudHMucmVtb3ZlRWxlbWVudChcImRpc2FibGVkUmlnaHRcIik7XHJcbiAgICBlbGVtZW50cy5yZW1vdmVFbGVtZW50KFwiZGlzYWJsZWRMZWZ0XCIpO1xyXG4gICAgZGlzYWJsZS5yZW1vdmVGcmFtZSgpO1xyXG59IiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgeyByZW1vdmVFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgZGlzYWJsZUFsbCB9IGZyb20gXCIuL2Rpc2FibGVBcmVhXCI7XHJcbmltcG9ydCB7IHN0YXJ0R3VpZGVkVG91ciwgY3JlYXRlT25ib2FyZGluZ092ZXJsYXkgfSBmcm9tIFwiLi9vbmJvYXJkaW5nXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW50cm9DYXJkKCl7XHJcbiAgICBkaXNhYmxlQWxsKCk7XHJcbiAgICBcclxuICAgIGxldCBzdHlsZSA9IGhlbHBlcnMuZ2V0Q2FyZFN0eWxlKGdsb2JhbC5pbnRyb0NhcmRNYXJnaW4sIDAsIGdsb2JhbC5pbnRyb0NhcmRXaWR0aCwgXCJcIikgKyBgcmlnaHQ6MDttYXJnaW46YXV0bztgO1xyXG4gICAgaGVscGVycy5jcmVhdGVDYXJkKFwiaW50cm9DYXJkXCIsIHN0eWxlLCBcIlwiKTtcclxuXHJcbiAgICBoZWxwZXJzLmNyZWF0ZUNsb3NlQnV0dG9uKFwiY2xvc2VCdXR0b25cIiwgXCJjbG9zZUJ1dHRvblBsYWNlbWVudEJpZ1wiLCBoZWxwZXJzLnJlbW92ZU9uYm9hcmRpbmcsIFwiaW50cm9DYXJkXCIpO1xyXG5cclxuICAgIGhlbHBlcnMuY3JlYXRlQ2FyZENvbnRlbnQoZ2V0SW50cm9UaXRsZSgpLCBnZXRJbnRyb1RleHQoKSwgXCJpbnRyb0NhcmRcIik7XHJcblxyXG4gICAgaGVscGVycy5jcmVhdGVDYXJkQnV0dG9ucyhcInNraXBcIiwgXCJzdGFydFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUludHJvQ2FyZCgpe1xyXG4gICAgcmVtb3ZlRWxlbWVudChcImludHJvQ2FyZFwiKTtcclxuICAgIHJlbW92ZUVsZW1lbnQoXCJkaXNhYmxlZFBhZ2VcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEludHJvVGl0bGUoKXtcclxuICAgIGlmKGdsb2JhbC5pc0d1aWRlZFRvdXIpe1xyXG4gICAgICAgcmV0dXJuIFwiV2VsY29tZSB0byB0aGUgZ3VpZGVkIHRvdXIgb2YgXCIgKyBnbG9iYWwucGFnZS5kaXNwbGF5TmFtZTsgXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gXCJXZWxjb21lIHRvIHRoZSBkYXNoYm9hcmQgZXhwbG9yYXRpb24gb2YgXCIgKyBnbG9iYWwucGFnZS5kaXNwbGF5TmFtZTsgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW50cm9UZXh0KCl7XHJcbiAgICBpZihnbG9iYWwuaXNHdWlkZWRUb3VyKXtcclxuICAgICAgICByZXR1cm4gXCJUaGUgZ3VpZGVkIHRvdXIgd2lsbCBzaG93IHlvdSB0aGUgb3V0bGluZSBvZiB0aGlzIGRhc2hib2FyZC48YnI+WW91IGNhbiBuYXZpZ2F0ZSB0aHJvdWdoIGFsbCB2aXN1YWxpemF0aW9ucyB3aXRoIHRoZSBuZXh0IGFuZCBwcmV2aW91cyBidXR0b25zLjxicj5JdCB3aWxsIGludHJvZHVjZSB5b3UgdG8gdGhlIGRpZmZlcmVudCBraW5kcyBvZiBncmFwaHMgYW5kIGVsZW1lbnRzIGFuZCBpdCBleHBsYWlucyBob3cgeW91IGNhbiBpbnRlcmFjdCB3aXRoIHRoZW0uXCI7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwiSW4gdGhlIGRhc2hib2FyZCBleHBsb3JhdGlvbiBtb2RlIHlvdSBjYW4gZnJlZWx5IHNraW0gdGhyb3VnaCB0aGUgdmlzdWFsaXphdGlvbnMgb2YgdGhpcyBkYXNoYm9hcmQuIFlvdSBjYW4gZW5kIHRoZSBleHBsb3JhdGlvbiBtb2RlIGF0IGFueSB0aW1lIGJ5IHByZXNzaW5nIHRoZSAnRW5kIERhc2hib2FyZCBFeHBsb3JhdGlvbicgYnV0dG9uLjxicj5XaGVuIGNsaWNraW5nIG9uIGEgZ3JhcGggb3IgZWxlbWVudCBhbiBleHBsYW5hdGlvbiB3aWxsIGFwcGVhci4gWW91IGNhbiB0aGVuIG5hdmlnYXRlIHRocm91Z2ggdGhlIHdob2xlIGRhc2hib2FyZCB3aXRoIHRoZSBuZXh0IGFuZCBwcmV2aW91cyBidXR0b25zLjxicj5XaGVuIHlvdSBjbG9zZSB0aGUgZXhwbGFuYXRpb24gYnViYmxlIHlvdSBjYW4gc2VsZWN0IGEgbmV3IHZpc3VhbGl6YXRpb24gdG8gZ2V0IGluZm9ybWF0aW9uIG9uIHRoYXQgb25lLlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhcnRGdW5jdGlvbigpe1xyXG4gICAgaWYoZ2xvYmFsLmlzR3VpZGVkVG91cil7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0R3VpZGVkVG91cjsgXHJcbiAgICAgfWVsc2V7XHJcbiAgICAgICAgIHJldHVybiBjcmVhdGVPbmJvYXJkaW5nT3ZlcmxheTsgXHJcbiAgICAgfVxyXG59IiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuaW1wb3J0IGluZm9JbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbmZvLnBuZ1wiO1xyXG5pbXBvcnQgeUF4aXNJbWcgZnJvbSBcIi4uL2Fzc2V0cy95LWF4aXMucG5nXCI7XHJcbmltcG9ydCB4QXhpc0ltZyBmcm9tIFwiLi4vYXNzZXRzL3gtYXhpcy5wbmdcIjtcclxuaW1wb3J0IGxlZ2VuZEltZyBmcm9tIFwiLi4vYXNzZXRzL2xlZ2VuZC5wbmdcIjtcclxuaW1wb3J0IGxpbmVHcmFwaEltZyBmcm9tIFwiLi4vYXNzZXRzL2xpbmUtZ3JhcGgucG5nXCI7XHJcbmltcG9ydCBlbGVtQ2xpY2tJbWcgZnJvbSBcIi4uL2Fzc2V0cy9lbGVtZW50LWNsaWNrLnBuZ1wiO1xyXG5pbXBvcnQgYXhpc0NsaWNrSW1nIGZyb20gXCIuLi9hc3NldHMvYXhpcy1jbGljay5wbmdcIjtcclxuaW1wb3J0IGxlZ2VuZENsaWNrSW1nIGZyb20gXCIuLi9hc3NldHMvbGVnZW5kLWNsaWNrLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExpbmVDaGFydEluZm8odmlzdWFsKSB7XHJcbiAgICBsZXQgYXhpcyA9IGF3YWl0IGhlbHBlcnMuZ2V0RmllbGRDb2x1bW4odmlzdWFsLCBcIkNhdGVnb3J5XCIpO1xyXG4gICAgbGV0IGRhdGFOYW1lID0gYXdhaXQgaGVscGVycy5nZXRGaWVsZE1lYXN1cmUodmlzdWFsLCBcIllcIik7XHJcbiAgICBsZXQgbGVnZW5kID0gYXdhaXQgaGVscGVycy5nZXRGaWVsZENvbHVtbih2aXN1YWwsIFwiU2VyaWVzXCIpO1xyXG5cclxuICAgIGxldCBoYXNZQXhpcyA9IGhlbHBlcnMuaXNWaXNpYmxlKHZpc3VhbCwgXCJjYXRlZ29yeUF4aXNcIik7XHJcbiAgICBsZXQgaGFzWEF4aXMgPSBoZWxwZXJzLmlzVmlzaWJsZSh2aXN1YWwsIFwidmFsdWVBeGlzXCIpO1xyXG4gICAgbGV0IGhhc0xlZ2VuZCA9IGhlbHBlcnMuaXNWaXNpYmxlKHZpc3VhbCwgXCJsZWdlbmRcIik7XHJcbiAgICBsZXQgaGFzVG9vbHRpcCA9IGhlbHBlcnMuaXNWaXNpYmxlKHZpc3VhbCwgXCJ0b29sdGlwXCIpO1xyXG5cclxuICAgIGxldCBnZW5lcmFsSW1hZ2VzID0gW107XHJcbiAgICBsZXQgZ2VuZXJhbEluZm9zID0gW107XHJcbiAgICBsZXQgZGF0YUltYWdlcyA9IFtdO1xyXG4gICAgbGV0IGRhdGFJbmZvcyA9W107XHJcbiAgICBsZXQgaW50ZXJhY3Rpb25JbWFnZXMgPSBbXTtcclxuICAgIGxldCBpbnRlcmFjdGlvbkluZm9zID1bXTtcclxuICAgICAgICBcclxuICAgIGdlbmVyYWxJbWFnZXMucHVzaChpbmZvSW1nKTtcclxuICAgIGdlbmVyYWxJbmZvcy5wdXNoKFwiVGhpcyBlbGVtZW50IGlzIGEgbGluZSBjaGFydC5cIik7XHJcblxyXG4gICAgZGF0YUltYWdlcy5wdXNoKGluZm9JbWcpO1xyXG4gICAgZGF0YUluZm9zLnB1c2goXCJUaGlzIGNoYXJ0IGRpc3BsYXllcyB0aGUgXCIgKyBkYXRhTmFtZSArIFwiLlwiKTtcclxuICAgIGxldCBsaW5lSW5mbyA9IFwiXCI7XHJcbiAgICBpZihheGlzKXtcclxuICAgICAgICBsaW5lSW5mbyArPSBcIlRoZSBsaW5lcyBzaG93IHRoZSBkZXZlbG9wbWVudCBvZiB0aGUgXCIgKyBkYXRhTmFtZSArIFwiIG92ZXIgdGhlIFwiICsgYXhpcyArIFwiLjxicj5cIjtcclxuICAgIH1cclxuICAgIGlmKGxlZ2VuZCl7XHJcbiAgICAgICAgbGluZUluZm8gKz0gXCJFYWNoIGxpbmUgcmVwcmVzZW50cyBhIGRpZmZlcmVudCBcIiArIGxlZ2VuZCArIFwiLCB0aGV5IGFyZSBkaXN0aW5ndWlzaGFibGUgYnkgdGhlaXIgY29sb3IuXCI7XHJcbiAgICB9XHJcbiAgICBkYXRhSW1hZ2VzLnB1c2gobGluZUdyYXBoSW1nKTtcclxuICAgIGRhdGFJbmZvcy5wdXNoKGxpbmVJbmZvKTtcclxuICAgIFxyXG4gICAgbGV0IGludGVyYWN0aW9uSW5mbyA9IFwiV2l0aCBjbGlja2luZyBvbiBhIGxpbmUgeW91IGNhbiBmaWx0ZXIgdGhlIHJlcG9ydCBieSBcIjtcclxuICAgIGlmKGF4aXMgJiYgIWxlZ2VuZCl7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbmZvICs9IGF4aXMgKyBcIi5cIjtcclxuICAgIH0gZWxzZSBpZighYXhpcyAmJiBsZWdlbmQpe1xyXG4gICAgICAgIGludGVyYWN0aW9uSW5mbyArPSBsZWdlbmQgKyBcIi5cIjtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGludGVyYWN0aW9uSW5mbyArPSBheGlzICsgXCIgYW5kIFwiICsgbGVnZW5kICsgXCIuXCI7XHJcbiAgICB9ICBcclxuICAgIGlmKGhhc1Rvb2x0aXApe1xyXG4gICAgICAgIGludGVyYWN0aW9uSW5mbyArPSBcIjwvYnI+WW91IGNhbiBob3ZlciBvdmVyIGEgbGluZSB0byBnZXQgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgaXRzIGRhdGEuXCI7XHJcbiAgICB9XHJcbiAgICBpbnRlcmFjdGlvbkltYWdlcy5wdXNoKGVsZW1DbGlja0ltZyk7XHJcbiAgICBpbnRlcmFjdGlvbkluZm9zLnB1c2goaW50ZXJhY3Rpb25JbmZvKTtcclxuXHJcbiAgICBpZihoYXNYQXhpcyl7XHJcbiAgICAgICAgZ2VuZXJhbEltYWdlcy5wdXNoKHhBeGlzSW1nKTtcclxuICAgICAgICBnZW5lcmFsSW5mb3MucHVzaChcIlRoZSBYLWF4aXMgZGlzcGxheWVzIHRoZSB2YWx1ZXMgb2YgdGhlIFwiICsgYXhpcyArIFwiLlwiKTtcclxuICAgICAgICBpbnRlcmFjdGlvbkltYWdlcy5wdXNoKGF4aXNDbGlja0ltZyk7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbmZvcy5wdXNoKFwiV2hlbiBjbGlja2luZyBvbiBvbmUgb2YgdGhlIHgtYXhpcy1sYWJlbHMgeW91IGNhbiBmaWx0ZXIgdGhlIHJlcG9ydCBieSBcIiArIGF4aXMgKyBcIi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaGFzWUF4aXMpe1xyXG4gICAgICAgIGdlbmVyYWxJbWFnZXMucHVzaCh5QXhpc0ltZyk7XHJcbiAgICAgICAgZ2VuZXJhbEluZm9zLnB1c2goXCJUaGUgWS1heGlzIGRpc3BsYXllcyB0aGUgdmFsdWVzIG9mIHRoZSBcIiArIGRhdGFOYW1lICsgXCIuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGhhc0xlZ2VuZCl7XHJcbiAgICAgICAgZ2VuZXJhbEltYWdlcy5wdXNoKGxlZ2VuZEltZyk7XHJcbiAgICAgICAgZ2VuZXJhbEluZm9zLnB1c2goXCJUaGUgbGVnZW5kIGRpc3BsYXllcyB0aGUgdmFsdWVzIG9mIHRoZSBcIiArIGxlZ2VuZCArIFwiIGFuZCBpdHMgY29ycmVzcG9uZGluZyBjb2xvci5cIik7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbWFnZXMucHVzaChsZWdlbmRDbGlja0ltZyk7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbmZvcy5wdXNoKFwiV2hlbiBjbGlja2luZyBvbiBvbmUgb2YgdGhlIGxhYmVscyBpbiB0aGUgbGVnZW5kIHlvdSBjYW4gZmlsdGVyIHRoZSByZXBvcnQgYnkgXCIgKyBsZWdlbmQgKyBcIi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZW5lcmFsSW1hZ2VzLCBnZW5lcmFsSW5mb3MsIGRhdGFJbWFnZXMsIGRhdGFJbmZvcywgaW50ZXJhY3Rpb25JbWFnZXMsIGludGVyYWN0aW9uSW5mb3N9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGluZUNoYXJ0SW50ZXJhY3Rpb25FeGFtcGxlKHZpc3VhbCkge1xyXG4gICAgbGV0IGF4aXMgPSBhd2FpdCBoZWxwZXJzLmdldEZpZWxkQ29sdW1uKHZpc3VhbCwgXCJDYXRlZ29yeVwiKTtcclxuICAgIGxldCBheGlzVmFsdWVzID0gYXdhaXQgaGVscGVycy5nZXRTcGVjaWZpY0RhdGFJbmZvKHZpc3VhbCwgYXhpcyk7XHJcbiAgICBsZXQgbGVnZW5kID0gYXdhaXQgaGVscGVycy5nZXRGaWVsZENvbHVtbih2aXN1YWwsIFwiU2VyaWVzXCIpO1xyXG4gICAgbGV0IGxlZ2VuZFZhbHVlcyA9IGF3YWl0IGhlbHBlcnMuZ2V0U3BlY2lmaWNEYXRhSW5mbyh2aXN1YWwsIGxlZ2VuZCk7XHJcbiAgIFxyXG4gICAgbGV0IG1pZGRlbE9mQXhpc1ZhbHVlcyA9IE1hdGguZmxvb3IoYXhpc1ZhbHVlcy5sZW5ndGgvMik7XHJcblxyXG4gICAgbGV0IGludGVyYWN0aW9uSW5mbyA9IFwiUGxlYXNlIGNsaWNrIG9uIHRoZSBsaW5lXCI7XHJcbiAgICBpZihheGlzVmFsdWVzICYmIGxlZ2VuZFZhbHVlcyl7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbmZvICs9IFwiIHJlcHJlc2VudGluZyBcIiArIGxlZ2VuZFZhbHVlc1swXSArIFwiIGF0IHRoZSBhcmVhIG9mIFwiICsgYXhpc1ZhbHVlc1ttaWRkZWxPZkF4aXNWYWx1ZXNdICsgXCIuXCI7XHJcbiAgICB9IGVsc2UgaWYoYXhpc1ZhbHVlcyl7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbmZvICs9IFwiIGF0IHRoZSBhcmVhIG9mIFwiICsgYXhpc1ZhbHVlc1ttaWRkZWxPZkF4aXNWYWx1ZXNdICsgXCIuXCI7XHJcbiAgICB9IGVsc2UgaWYobGVnZW5kVmFsdWVzKXtcclxuICAgICAgICBpbnRlcmFjdGlvbkluZm8gKz0gXCIgcmVwcmVzZW50aW5nIFwiICsgbGVnZW5kVmFsdWVzWzBdICtcIi5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW50ZXJhY3Rpb25JbmZvICs9IFwiLlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnRlcmFjdGlvbkluZm87XHJcbn0iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCAqIGFzIGVsZW1lbnRzIGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcbmltcG9ydCB7IG1vdXNlRG93bkhhbmRsZXIgfSBmcm9tIFwiLi9kcmFnZ2FibGVMaXN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdE9mVmlzdWFscygpe1xyXG4gICAgZ2xvYmFsLnNldHRpbmdzLnZpc3VhbHMuZm9yRWFjaChmdW5jdGlvbiAodmlzdWFsKSB7XHJcbiAgICAgICAgbGV0IGRpdkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgICAgIGRpdkF0dHJpYnV0ZXMuaWQgPSB2aXN1YWwuaWQ7XHJcbiAgICAgICAgZGl2QXR0cmlidXRlcy5jbGFzc2VzID0gXCJkcmFnZ2FibGVcIjtcclxuICAgICAgICBkaXZBdHRyaWJ1dGVzLnN0eWxlID0gXCJwYWRkaW5nOiA1cHg7Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7Ym9yZGVyLXJhZGl1czogNXB4XCI7XHJcbiAgICAgICAgZGl2QXR0cmlidXRlcy5jb250ZW50ID1gPHAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6MzAwcHg7bWFyZ2luLWJvdHRvbTogLTVweDt3aGl0ZS1zcGFjZTogbm93cmFwO292ZXJmbG93OiBoaWRkZW47dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XCI+PHN2ZyBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImdyYXlcIiBjbGFzcz1cImJpIGJpLWxpc3QgbWItMVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yLjUgMTJhLjUuNSAwIDAgMSAuNS0uNWgxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjV6bTAtNGEuNS41IDAgMCAxIC41LS41aDEwYS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMS0uNS0uNXptMC00YS41LjUgMCAwIDEgLjUtLjVoMTBhLjUuNSAwIDAgMSAwIDFIM2EuNS41IDAgMCAxLS41LS41elwiLz48L3N2Zz4gYCBcclxuICAgICAgICArIHZpc3VhbC50aXRsZSArIGA8L3A+YDtcclxuICAgICAgICBkaXZBdHRyaWJ1dGVzLmV2ZW50VHlwZSA9ICdtb3VzZWRvd24nO1xyXG4gICAgICAgIGRpdkF0dHJpYnV0ZXMuZXZlbnRGdW5jdGlvbiA9IG1vdXNlRG93bkhhbmRsZXI7XHJcbiAgICAgICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IFwidmlzdWFsc0xpc3RcIjtcclxuICAgICAgICBlbGVtZW50cy5jcmVhdGVEaXYoZGl2QXR0cmlidXRlcyk7XHJcbiAgICAgICAgY3JlYXRlVG9vZ2xlVmlzYWJpbGl0eUJ1dHRvbih2aXN1YWwuaWQpO1xyXG4gICAgICAgIGNyZWF0ZUNvbGxhcHNlRm9ybSh2aXN1YWwuaWQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvb2dsZVZpc2FiaWxpdHlCdXR0b24odmlzdWFsSUQpe1xyXG4gICAgbGV0IHZpc3VhbERhdGEgPSBoZWxwZXJzLmdldERhdGFXaXRoSWQodmlzdWFsSUQpO1xyXG5cclxuICAgIGlmKHZpc3VhbERhdGEuZGlzYWJsZWQpe1xyXG4gICAgICAgIGhlbHBlcnMuY3JlYXRlRGlzYWJsZUJ1dHRvbih2aXN1YWxJRCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBoZWxwZXJzLmNyZWF0ZUVuYWJsZUJ1dHRvbih2aXN1YWxJRCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVWaXNhYmlsaXR5KGxpc3RFbGVtZW50KXtcclxuICAgIGxldCBkaXNhYmxlRWxlbWVudCA9IGxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzYWJsZVZpc3VhbEJ1dHRvblwiKTtcclxuICAgIGxldCB2aXN1YWxEYXRhID0gaGVscGVycy5nZXREYXRhV2l0aElkKGxpc3RFbGVtZW50LmlkKTtcclxuXHJcbiAgICBpZih2aXN1YWxEYXRhLmRpc2FibGVkKXtcclxuICAgICAgICBkaXNhYmxlRWxlbWVudC5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktZXllLXNsYXNoIG1iLTJcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZD1cIk0xMy4zNTkgMTEuMjM4QzE1LjA2IDkuNzIgMTYgOCAxNiA4cy0zLTUuNS04LTUuNWE3LjAyOCA3LjAyOCAwIDAgMC0yLjc5LjU4OGwuNzcuNzcxQTUuOTQ0IDUuOTQ0IDAgMCAxIDggMy41YzIuMTIgMCAzLjg3OSAxLjE2OCA1LjE2OCAyLjQ1N0ExMy4xMzQgMTMuMTM0IDAgMCAxIDE0LjgyOCA4Yy0uMDU4LjA4Ny0uMTIyLjE4My0uMTk1LjI4OC0uMzM1LjQ4LS44MyAxLjEyLTEuNDY1IDEuNzU1LS4xNjUuMTY1LS4zMzcuMzI4LS41MTcuNDg2bC43MDguNzA5elwiLz48cGF0aCBkPVwiTTExLjI5NyA5LjE3NmEzLjUgMy41IDAgMCAwLTQuNDc0LTQuNDc0bC44MjMuODIzYTIuNSAyLjUgMCAwIDEgMi44MjkgMi44MjlsLjgyMi44MjJ6bS0yLjk0MyAxLjI5OS44MjIuODIyYTMuNSAzLjUgMCAwIDEtNC40NzQtNC40NzRsLjgyMy44MjNhMi41IDIuNSAwIDAgMCAyLjgyOSAyLjgyOXpcIi8+PHBhdGggZD1cIk0zLjM1IDUuNDdjLS4xOC4xNi0uMzUzLjMyMi0uNTE4LjQ4N0ExMy4xMzQgMTMuMTM0IDAgMCAwIDEuMTcyIDhsLjE5NS4yODhjLjMzNS40OC44MyAxLjEyIDEuNDY1IDEuNzU1QzQuMTIxIDExLjMzMiA1Ljg4MSAxMi41IDggMTIuNWMuNzE2IDAgMS4zOS0uMTMzIDIuMDItLjM2bC43Ny43NzJBNy4wMjkgNy4wMjkgMCAwIDEgOCAxMy41QzMgMTMuNSAwIDggMCA4cy45MzktMS43MjEgMi42NDEtMy4yMzhsLjcwOC43MDl6bTEwLjI5NiA4Ljg4NC0xMi0xMiAuNzA4LS43MDggMTIgMTItLjcwOC43MDh6XCIvPjwvc3ZnPmA7XHJcbiAgICAgICAgdmlzdWFsRGF0YS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZGlzYWJsZUVsZW1lbnQuaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWV5ZSBtYi0yXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGQ9XCJNMTYgOHMtMy01LjUtOC01LjVTMCA4IDAgOHMzIDUuNSA4IDUuNVMxNiA4IDE2IDh6TTEuMTczIDhhMTMuMTMzIDEzLjEzMyAwIDAgMSAxLjY2LTIuMDQzQzQuMTIgNC42NjggNS44OCAzLjUgOCAzLjVjMi4xMiAwIDMuODc5IDEuMTY4IDUuMTY4IDIuNDU3QTEzLjEzMyAxMy4xMzMgMCAwIDEgMTQuODI4IDhjLS4wNTguMDg3LS4xMjIuMTgzLS4xOTUuMjg4LS4zMzUuNDgtLjgzIDEuMTItMS40NjUgMS43NTVDMTEuODc5IDExLjMzMiAxMC4xMTkgMTIuNSA4IDEyLjVjLTIuMTIgMC0zLjg3OS0xLjE2OC01LjE2OC0yLjQ1N0ExMy4xMzQgMTMuMTM0IDAgMCAxIDEuMTcyIDh6XCIvPjxwYXRoIGQ9XCJNOCA1LjVhMi41IDIuNSAwIDEgMCAwIDUgMi41IDIuNSAwIDAgMCAwLTV6TTQuNSA4YTMuNSAzLjUgMCAxIDEgNyAwIDMuNSAzLjUgMCAwIDEtNyAwelwiLz48L3N2Zz5gO1xyXG4gICAgICAgIHZpc3VhbERhdGEuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVDb2xsYXBzZUZvcm0odmlzdWFsSUQpe1xyXG4gICAgbGV0IHZpc3VhbERhdGEgPSBoZWxwZXJzLmdldERhdGFXaXRoSWQodmlzdWFsSUQpO1xyXG4gICAgbGV0IHZpc3VhbEluZm9zID0gYXdhaXQgZ2V0VmlzdWFsSW5mb3ModmlzdWFsRGF0YSk7XHJcblxyXG4gICAgaGVscGVycy5jcmVhdGVDb2xsYXBzZUJ1dHRvbihcImNvbGxhcHNlQnV0dG9uXCIgKyB2aXN1YWxJRCwgdmlzdWFsSUQpO1xyXG5cclxuICAgIGxldCBkaXZBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZURpdkF0dHJpYnV0ZXMoKTtcclxuICAgIGRpdkF0dHJpYnV0ZXMuaWQgPSBcImNvbGxhcHNlRm9ybVwiICsgdmlzdWFsSUQ7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLmNsYXNzZXMgPSBcImNvbGxhcHNlIGNvbGxhcHNlRm9ybVwiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5zdHlsZSA9IFwibWFyZ2luLXRvcDogNXB4O3BhZGRpbmc6IDEwcHg7Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7Ym9yZGVyLXJhZGl1czogNXB4O2JveC1zaGFkb3c6IDVweCA1cHggNXB4IGdyYXksMHB4IDVweCA1cHggZ3JheVwiO1xyXG4gICAgZGl2QXR0cmlidXRlcy5wYXJlbnRJZCA9IHZpc3VhbElEO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlRGl2KGRpdkF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGhlbHBlcnMuY3JlYXRlVGl0bGVGb3JtKHZpc3VhbElELCB2aXN1YWxEYXRhLnRpdGxlKTtcclxuXHJcbiAgICBoZWxwZXJzLmNyZWF0ZUluZm9Gb3JtKFwiZ2VuZXJhbFwiLCB2aXN1YWxJRCwgdmlzdWFsSW5mb3MuZ2VuZXJhbEluZm9zKTtcclxuICAgIGhlbHBlcnMuY3JlYXRlSW5mb0Zvcm0oXCJkYXRhXCIsIHZpc3VhbElELCB2aXN1YWxJbmZvcy5kYXRhSW5mb3MpO1xyXG4gICAgaGVscGVycy5jcmVhdGVJbmZvRm9ybShcImludGVyYWN0aW9uXCIsIHZpc3VhbElELCB2aXN1YWxJbmZvcy5pbnRlcmFjdGlvbkluZm9zKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VmlzdWFsSW5mb3ModmlzdWFsRGF0YSl7XHJcbiAgICBsZXQgdmlzdWFsID0gZ2xvYmFsLmFsbFZpc3VhbHMuZmluZChmdW5jdGlvbiAodmlzdWFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZpc3VhbC5uYW1lID09IHZpc3VhbERhdGEuaWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgdmlzdWFsSW5mb3MgPSBhd2FpdCBoZWxwZXJzLmdldFZpc3VhbEluZm9zKHZpc3VhbCk7XHJcblxyXG4gICAgbGV0IGdlbmVyYWxJbmZvcyA9IFtdO1xyXG4gICAgbGV0IGRhdGFJbmZvcyA9IFtdO1xyXG4gICAgbGV0IGludGVyYWN0aW9uSW5mb3MgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpc3VhbERhdGEuZ2VuZXJhbEluZm9zU3RhdHVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICBzd2l0Y2godmlzdWFsRGF0YS5nZW5lcmFsSW5mb3NTdGF0dXNbaV0pe1xyXG4gICAgICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLm9yaWdpbmFsOlxyXG4gICAgICAgICAgICAgICAgZ2VuZXJhbEluZm9zLnB1c2godmlzdWFsSW5mb3MuZ2VuZXJhbEluZm9zW2ldKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLmNoYW5nZWQ6XHJcbiAgICAgICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuYWRkZWQ6XHJcbiAgICAgICAgICAgICAgICBnZW5lcmFsSW5mb3MucHVzaCh2aXN1YWxEYXRhLmNoYW5nZWRHZW5lcmFsSW5mb3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpc3VhbERhdGEuZGF0YUluZm9zU3RhdHVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgc3dpdGNoKHZpc3VhbERhdGEuZGF0YUluZm9zU3RhdHVzW2ldKXtcclxuICAgICAgICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMub3JpZ2luYWw6XHJcbiAgICAgICAgICAgICAgICBkYXRhSW5mb3MucHVzaCh2aXN1YWxJbmZvcy5kYXRhSW5mb3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5jaGFuZ2VkOlxyXG4gICAgICAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5hZGRlZDpcclxuICAgICAgICAgICAgICAgICBkYXRhSW5mb3MucHVzaCh2aXN1YWxEYXRhLmNoYW5nZWREYXRhSW5mb3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpc3VhbERhdGEuaW50ZXJhY3Rpb25JbmZvc1N0YXR1cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHN3aXRjaCh2aXN1YWxEYXRhLmludGVyYWN0aW9uSW5mb3NTdGF0dXNbaV0pe1xyXG4gICAgICAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5vcmlnaW5hbDpcclxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uSW5mb3MucHVzaCh2aXN1YWxJbmZvcy5pbnRlcmFjdGlvbkluZm9zW2ldKTtcclxuICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuY2hhbmdlZDpcclxuICAgICAgICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuYWRkZWQ6XHJcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbkluZm9zLnB1c2godmlzdWFsRGF0YS5jaGFuZ2VkSW50ZXJhY3Rpb25JbmZvc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZW5lcmFsSW5mb3MsIGRhdGFJbmZvcywgaW50ZXJhY3Rpb25JbmZvc307XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRWaXN1YWxUZXh0YXJlYShjYXRlZ29yeSwgdmlzdWFsSUQpe1xyXG4gICAgbGV0IHRleHRhcmVhQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVUZXh0YXJlYUF0dHJpYnV0ZXMoKTtcclxuICAgIHN3aXRjaChjYXRlZ29yeSl7XHJcbiAgICAgICAgY2FzZSBcImdlbmVyYWxcIjpcclxuICAgICAgICAgICAgdGV4dGFyZWFBdHRyaWJ1dGVzLmNsYXNzID0gXCJnZW5lcmFsSW5mb3NcIiArIHZpc3VhbElEO1xyXG4gICAgICAgICAgICB0ZXh0YXJlYUF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImFkZEdlbmVyYWxJbmZvXCIgKyB2aXN1YWxJRDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRhdGFcIjpcclxuICAgICAgICAgICAgdGV4dGFyZWFBdHRyaWJ1dGVzLmNsYXNzID0gXCJkYXRhSW5mb3NcIiArIHZpc3VhbElEO1xyXG4gICAgICAgICAgICB0ZXh0YXJlYUF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImFkZERhdGFJbmZvXCIgKyB2aXN1YWxJRDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImludGVyYWN0aW9uXCI6XHJcbiAgICAgICAgICAgIHRleHRhcmVhQXR0cmlidXRlcy5jbGFzcyA9IFwiaW50ZXJhY3Rpb25JbmZvc1wiICsgdmlzdWFsSUQ7XHJcbiAgICAgICAgICAgIHRleHRhcmVhQXR0cmlidXRlcy5wYXJlbnRJZCA9IFwiYWRkSW50ZXJhY3Rpb25JbmZvXCIgKyB2aXN1YWxJRDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYUF0dHJpYnV0ZXMuc3R5bGUgPSBcImRpc3BsYXk6IGJsb2NrO3dpZHRoOiA5NSU7bWFyZ2luLWJvdHRvbTogNXB4O21hcmdpbi1sZWZ0OiAxMHB4O2JhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1wiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlVGV4dGFyZWEodGV4dGFyZWFBdHRyaWJ1dGVzLCB0cnVlKTtcclxufSIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuaW1wb3J0ICogYXMgZWxlbWVudHMgZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlSW50cm9DYXJkLCByZW1vdmVJbnRyb0NhcmQgfSBmcm9tIFwiLi9pbnRyb0NhcmRzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUluZm9DYXJkLCByZW1vdmVJbmZvQ2FyZCB9IGZyb20gXCIuL2luZm9DYXJkc1wiO1xyXG5pbXBvcnQgeyByZW1vdmVGcmFtZSB9IGZyb20gXCIuL2Rpc2FibGVBcmVhXCI7XHJcbmltcG9ydCB7IHJlbW92ZUludGVyYWN0aW9uQ2FyZCB9IGZyb20gXCIuL2ludGVyYWN0aW9uRXhhbXBsZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXR0aW5ncyB9IGZyb20gXCIuL2NyZWF0ZVNldHRpbmdzXCI7XHJcbmltcG9ydCB7IHJlcG9ydCB9IGZyb20gXCIuLi8uLi9qcy9lbWJlZFwiO1xyXG5pbXBvcnQgeyBzaG93UmVwb3J0Q2hhbmdlcyB9IGZyb20gXCIuL3Nob3dSZXBvcnRDaGFuZ2VzXCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGdsb2JhbC5zZXRSZXBvcnQocmVwb3J0KTtcclxuXHJcbiAgICBnbG9iYWwucmVwb3J0Lm9uKFwibG9hZGVkXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhd2FpdCBoZWxwZXJzLmdldEFjdGl2ZVBhZ2UoKTtcclxuICAgICAgICBhd2FpdCBoZWxwZXJzLmdldFZpc3VhbHMoKTtcclxuICAgICAgICBhd2FpdCBoZWxwZXJzLmdldFNldHRpbmdzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGVscGVycy5jcmVhdGVFZGl0T25ib2FyZGluZ0J1dHRvbnMoKTtcclxuICAgICAgICBoZWxwZXJzLmNyZWF0ZU9uYm9hcmRpbmdCdXR0b25zKCk7XHJcblxyXG4gICAgICAgIGhlbHBlcnMucmVzaXplRW1iZWQoZ2xvYmFsLmZpbHRlckNsb3NlZFdpZHRoKTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLnNldENvbnRhaW5lclBhZGRpbmdUb3AoZ2xvYmFsLnJlcG9ydC5pZnJhbWUub2Zmc2V0VG9wICsgZ2xvYmFsLnNldHRpbmdzLnJlcG9ydE9mZnNldC50b3ApO1xyXG4gICAgICAgIGdsb2JhbC5zZXRDb250YWluZXJQYWRkaW5nTGVmdChnbG9iYWwucmVwb3J0LmlmcmFtZS5vZmZzZXRMZWZ0ICsgZ2xvYmFsLnNldHRpbmdzLnJlcG9ydE9mZnNldC5sZWZ0KTtcclxuICAgICAgICBcclxuICAgICAgICBlbGVtZW50cy5hZGRTdHlsZXNoZWV0KFwiL29uYm9hcmRpbmcvY3NzL29uYm9hcmRpbmcuY3NzXCIpO1xyXG5cclxuICAgICAgICBjcmVhdGVHdWlkZWRUb3VyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBnbG9iYWwucmVwb3J0Lm9uKFwicmVuZGVyZWRcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBvbGRQYWdlID0gZ2xvYmFsLnBhZ2UubmFtZTtcclxuICAgICAgICBhd2FpdCBoZWxwZXJzLmdldEFjdGl2ZVBhZ2UoKTtcclxuXHJcbiAgICAgICAgaWYoZ2xvYmFsLnBhZ2UubmFtZSAhPT0gb2xkUGFnZSAmJiBnbG9iYWwucGFnZS5kaXNwbGF5TmFtZSAhPT0gXCJJbmZvXCIpe1xyXG4gICAgICAgICAgICBhd2FpdCBoZWxwZXJzLmdldFZpc3VhbHMoKTtcclxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgaGVscGVycy5yZXNpemVFbWJlZChnbG9iYWwuZmlsdGVyQ2xvc2VkV2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGdsb2JhbC5yZXBvcnQub24oXCJkYXRhU2VsZWN0ZWRcIiwgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoZ2xvYmFsLmludGVyYWN0aW9uTW9kZSl7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZERhdGEgPSBldmVudC5kZXRhaWwuZGF0YVBvaW50c1swXTtcclxuICAgICAgICAgICAgaWYoc2VsZWN0ZWREYXRhKXtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTZWxlY3RlZFRhcmdldHMoc2VsZWN0ZWREYXRhLmlkZW50aXR5KTtcclxuICAgICAgICAgICAgICAgIHNob3dSZXBvcnRDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGhlbHBlcnMucmVjcmVhdGVJbnRlcmFjdGlvbkV4YW1wbGVCdXR0b24oKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR3VpZGVkVG91cigpe1xyXG4gICAgaGVscGVycy5yZW1vdmVPbmJvYXJkaW5nKCk7XHJcbiAgICBoZWxwZXJzLnRvZ2dsZUZpbHRlcih0cnVlKTtcclxuXHJcbiAgICBnbG9iYWwuc2V0SXNHdWlkZWRUb3VyKHRydWUpO1xyXG4gICAgaGVscGVycy5jcmVhdGVPbmJvYXJkaW5nKCk7XHJcbiAgICBjcmVhdGVJbnRyb0NhcmQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhc2hib2FyZEV4cGxvcmF0aW9uKCl7XHJcbiAgICBpZihnbG9iYWwuZXhwbG9yYXRpb25Nb2RlKXtcclxuICAgICAgICBoZWxwZXJzLnJlbW92ZU9uYm9hcmRpbmcoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGhlbHBlcnMucmVtb3ZlT25ib2FyZGluZygpO1xyXG4gICAgICAgIGhlbHBlcnMudG9nZ2xlRmlsdGVyKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhlbHBlcnMuc3RhcnRFeHBsb3JhdGlvbk1vZGUoKTtcclxuICAgICAgICBoZWxwZXJzLmNyZWF0ZU9uYm9hcmRpbmcoKTtcclxuICAgICAgICBjcmVhdGVJbnRyb0NhcmQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R3VpZGVkVG91cigpe1xyXG4gICAgZ2xvYmFsLnNldEN1cnJlbnRWaXN1YWxJbmRleCgwKTtcclxuICAgIHJlbW92ZUludHJvQ2FyZCgpO1xyXG4gICAgY3JlYXRlSW5mb0NhcmQoZ2xvYmFsLmN1cnJlbnRWaXN1YWxzW2dsb2JhbC5jdXJyZW50VmlzdWFsSW5kZXhdKTtcclxufVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPbmJvYXJkaW5nT3ZlcmxheSgpe1xyXG4gICAgZ2xvYmFsLnNldEludGVyYWN0aW9uTW9kZShmYWxzZSk7XHJcbiAgICByZW1vdmVGcmFtZSgpO1xyXG4gICAgcmVtb3ZlSW50cm9DYXJkKCk7XHJcbiAgICByZW1vdmVJbmZvQ2FyZCgpO1xyXG4gICAgcmVtb3ZlSW50ZXJhY3Rpb25DYXJkKCk7XHJcblxyXG4gICAgZ2xvYmFsLmN1cnJlbnRWaXN1YWxzLmZvckVhY2goZnVuY3Rpb24gKHZpc3VhbCkge1xyXG4gICAgICAgIGxldCBzdHlsZSA9IGhlbHBlcnMuZ2V0Q2xpY2thYmxlU3R5bGUodmlzdWFsLmxheW91dC55LCB2aXN1YWwubGF5b3V0LngsIHZpc3VhbC5sYXlvdXQud2lkdGgsIHZpc3VhbC5sYXlvdXQuaGVpZ2h0KTtcclxuICAgICAgICBjcmVhdGVPdmVybGF5KHZpc3VhbC5uYW1lLCBzdHlsZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgc3R5bGUgPSBoZWxwZXJzLmdldENsaWNrYWJsZVN0eWxlKC1nbG9iYWwuc2V0dGluZ3MucmVwb3J0T2Zmc2V0LnRvcCwgZ2xvYmFsLnBhZ2UuZGVmYXVsdFNpemUud2lkdGgsIGdsb2JhbC5maWx0ZXJPcGVuZWRXaWR0aCwgZ2xvYmFsLnBhZ2UuZGVmYXVsdFNpemUuaGVpZ2h0KTtcclxuICAgIGNyZWF0ZU92ZXJsYXkoXCJmaWx0ZXJcIiwgc3R5bGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KGlkLCBzdHlsZSl7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVEaXZBdHRyaWJ1dGVzKCk7XHJcbiAgICBhdHRyaWJ1dGVzLmlkID0gaWQ7XHJcbiAgICBhdHRyaWJ1dGVzLnN0eWxlID0gc3R5bGU7XHJcbiAgICBhdHRyaWJ1dGVzLmNsaWNrYWJsZSA9IHRydWU7XHJcbiAgICBhdHRyaWJ1dGVzLnBhcmVudElkID0gXCJvbmJvYXJkaW5nXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoYXR0cmlidXRlcyk7XHJcbn0iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCAqIGFzIGRpc2FibGUgZnJvbSBcIi4vZGlzYWJsZUFyZWFcIjtcclxuaW1wb3J0ICogYXMgZWxlbWVudHMgZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgcmVtb3ZlSW50ZXJhY3Rpb25DYXJkIH0gZnJvbSBcIi4vaW50ZXJhY3Rpb25FeGFtcGxlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1JlcG9ydENoYW5nZXMoKXtcclxuICAgIGRpc2FibGUucmVtb3ZlRnJhbWUoKTtcclxuICAgIHJlbW92ZUludGVyYWN0aW9uQ2FyZCgpO1xyXG4gICAgcmVtb3ZlU2hvd0NoYW5nZXNDYXJkKCk7XHJcbiAgICByZW1vdmVIaW50Q2FyZCgpXHJcblxyXG4gICAgY3JlYXRlSW50ZXJhY3Rpb25PdmVybGF5KCk7XHJcbiAgICBjcmVhdGVIaW50Q2FyZCgpO1xyXG5cclxuICAgIGxldCBzdHlsZSA9IGBvdmVyZmxvdzogYXV0bztwb3NpdGlvbjpmaXhlZDt0b3A6MTBweDtsZWZ0OjUwJTttYXJnaW4tbGVmdDpgICsgLShnbG9iYWwuaW50ZXJhY3Rpb25DYXJkV2lkdGgvMikgKyBgcHg7d2lkdGg6YCsgZ2xvYmFsLmludGVyYWN0aW9uQ2FyZFdpZHRoICsgYHB4O2hlaWdodDpgICsgZ2xvYmFsLmludGVyYWN0aW9uQ2FyZEhlaWdodCArIGBweDtwb2ludGVyLWV2ZW50czphdXRvO2JvcmRlci1yYWRpdXM6MTBweDtiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c3RlZWxibHVlO3otaW5kZXg6IDk5ICFpbXBvcnRhbnQ7YDtcclxuICAgIGhlbHBlcnMuY3JlYXRlQ2FyZChcInNob3dDaGFuZ2VzQ2FyZFwiLCBzdHlsZSwgXCJcIik7XHJcblxyXG4gICAgaGVscGVycy5hZGRDb250YWluZXJPZmZzZXQoKTtcclxuXHJcbiAgICBoZWxwZXJzLmNyZWF0ZUNsb3NlQnV0dG9uKFwiY2xvc2VCdXR0b25cIiwgXCJjbG9zZUJ1dHRvblBsYWNlbWVudEJpZ1wiLCBoZWxwZXJzLnJlbW92ZU9uYm9hcmRpbmcsIFwic2hvd0NoYW5nZXNDYXJkXCIpO1xyXG5cclxuICAgIGhlbHBlcnMuY3JlYXRlQ2FyZENvbnRlbnQoZ2xvYmFsLnNldHRpbmdzLmludGVyYWN0aW9uRXhhbXBsZS50aXRsZSwgY3JlYXRlU2hvd1JlcG9ydENoYW5nZXNJbmZvKCksIFwic2hvd0NoYW5nZXNDYXJkXCIpO1xyXG5cclxuICAgIGhlbHBlcnMuY3JlYXRlQ2FyZEJ1dHRvbnMoXCJcIiwgXCJiYWNrIHRvIHZpc3VhbFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2hvd1JlcG9ydENoYW5nZXNJbmZvKCl7XHJcbiAgICBsZXQgcmVwb3J0Q2hhbmdlc0luZm87XHJcblxyXG4gICAgc3dpdGNoKGdsb2JhbC5zZXR0aW5ncy5pbnRlcmFjdGlvbkV4YW1wbGUuZ2VuZXJhbEluZm9TdGF0dXMpe1xyXG4gICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMub3JpZ2luYWw6XHJcbiAgICAgICAgICAgIHJlcG9ydENoYW5nZXNJbmZvID0gZ2V0U2hvd1JlcG9ydENoYW5nZXNUZXh0KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuY2hhbmdlZDpcclxuICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLmFkZGVkOlxyXG4gICAgICAgICAgICByZXBvcnRDaGFuZ2VzSW5mbyA9IGdsb2JhbC5zZXR0aW5ncy5pbnRlcmFjdGlvbkV4YW1wbGUuY2hhbmdlZEdlbmVyYWxJbmZvO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLmRlbGV0ZWQ6XHJcbiAgICAgICAgICAgIHJlcG9ydENoYW5nZXNJbmZvID0gXCJZb3UgY2FuIG5vdyBjbGljayBvbiBvbmUgb2YgdGhlIGNhcmRzIG9yIGdyYXBocyB0byBnZXQgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgaXRzIGNoYW5nZXMuXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcG9ydENoYW5nZXNJbmZvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hvd1JlcG9ydENoYW5nZXNUZXh0KCl7XHJcbiAgICBsZXQgYWxsVGFyZ2V0cyA9IGdsb2JhbC5zZWxlY3RlZFRhcmdldHMubWFwKCh7IGVxdWFscyB9KSA9PiBlcXVhbHMpO1xyXG4gICAgbGV0IGFsbFRhcmdldHNTdHJpbmcgPSBoZWxwZXJzLmRhdGFUb1N0cmluZyhhbGxUYXJnZXRzKTtcclxuICAgIHJldHVybiBcIkNhbiB5b3Ugc2VlIGhvdyB0aGUgd2hvbGUgcmVwb3J0IGNoYW5nZWQ/PGJyPkFsbCB0aGUgdmlzdWFsaXphdGlvbnMgd2VyZSBmaWx0ZXJlZCBieSBcIisgYWxsVGFyZ2V0c1N0cmluZ1xyXG4gICAgKyBcIi48YnI+WW91IGNhbiBub3cgY2xpY2sgb24gb25lIG9mIHRoZSBjYXJkcyBvciBncmFwaHMgdG8gZ2V0IGRldGFpbGVkIGluZm9ybWF0aW9uIGFib3V0IGl0cyBjaGFuZ2VzLlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW50ZXJhY3Rpb25PdmVybGF5KCl7XHJcbiAgICBsZXQgdmlzdWFscyA9IGdsb2JhbC5jdXJyZW50VmlzdWFscy5maWx0ZXIoZnVuY3Rpb24gKHZpc3VhbCkge1xyXG4gICAgICAgIHJldHVybiB2aXN1YWwudHlwZSAhPT0gXCJzbGljZXJcIlxyXG4gICAgfSk7XHJcbiAgICB2aXN1YWxzLmZvckVhY2goZnVuY3Rpb24gKHZpc3VhbCkge1xyXG4gICAgICAgIGNyZWF0ZUludGVyYWN0aW9uVmlzdWFsT3ZlcmxheSh2aXN1YWwpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnRlcmFjdGlvblZpc3VhbE92ZXJsYXkodmlzdWFsKXtcclxuICAgIGxldCBzdHlsZSA9IGhlbHBlcnMuZ2V0Q2xpY2thYmxlU3R5bGUodmlzdWFsLmxheW91dC55LCB2aXN1YWwubGF5b3V0LngsIHZpc3VhbC5sYXlvdXQud2lkdGgsIHZpc3VhbC5sYXlvdXQuaGVpZ2h0KTtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZURpdkF0dHJpYnV0ZXMoKTtcclxuICAgIGF0dHJpYnV0ZXMuaWQgPSB2aXN1YWwubmFtZTtcclxuICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBzdHlsZTtcclxuICAgIGF0dHJpYnV0ZXMuY2xpY2thYmxlID0gdHJ1ZTtcclxuICAgIGF0dHJpYnV0ZXMuc2VsZWN0ZWRUYXJnZXRzID0gZ2xvYmFsLnNlbGVjdGVkVGFyZ2V0cztcclxuICAgIGF0dHJpYnV0ZXMucGFyZW50SWQgPSBcIm9uYm9hcmRpbmdcIjtcclxuICAgIGVsZW1lbnRzLmNyZWF0ZURpdihhdHRyaWJ1dGVzKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhpbnRDYXJkKCl7XHJcbiAgICBpZihnbG9iYWwuc2V0dGluZ3MuaW50ZXJhY3Rpb25FeGFtcGxlLm5leHRWaXN1YWxIaW50ICE9IFwiXCIpe1xyXG4gICAgICAgIHZhciBuZXh0VmlzdWFsID0gaGVscGVycy5nZXROZXh0VmlzdWFsKCk7XHJcblxyXG4gICAgICAgIHZhciB2aXN1YWxXaXRoQm9yZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dFZpc3VhbC5uYW1lKTtcclxuICAgICAgICB2aXN1YWxXaXRoQm9yZGVyLmNsYXNzTmFtZSArPSBgIGdyZWVuQm9yZGVyYDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSBoZWxwZXJzLmdldFZpc3VhbENhcmRQb3MobmV4dFZpc3VhbCwgZ2xvYmFsLmhpbnRDYXJkV2lkdGgsIGdsb2JhbC5oaW50Q2FyZE1hcmdpbik7XHJcbiAgICBcclxuICAgICAgICBsZXQgc3R5bGUgPSBoZWxwZXJzLmdldENsaWNrYWJsZVN0eWxlKHBvc2l0aW9uLnksIHBvc2l0aW9uLngsIGdsb2JhbC5oaW50Q2FyZFdpZHRoLCBcIlwiKSArIGBib3JkZXItcmFkaXVzOjEwcHg7YmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuO29wYWNpdHk6IDAuODU7ei1pbmRleDogOTkgIWltcG9ydGFudDtgO1xyXG4gICAgICAgIGlmKHBvc2l0aW9uLnBvcyA9PT0gXCJsZWZ0XCIpe1xyXG4gICAgICAgICAgICBoZWxwZXJzLmNyZWF0ZUNhcmQoXCJoaW50Q2FyZFwiLCBzdHlsZSwgXCJyZWN0TGVmdFNtYWxsXCIpO1xyXG4gICAgICAgICAgICBoZWxwZXJzLmNyZWF0ZUNsb3NlQnV0dG9uKFwiaGludENsb3NlQnV0dG9uXCIsIFwiY2xvc2VCdXR0b25QbGFjZW1lbnRTbWFsbCBwb3NpdGlvbkxlZnRcIiwgcmVtb3ZlSGludENhcmQgLCBcImhpbnRDYXJkXCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBoZWxwZXJzLmNyZWF0ZUNhcmQoXCJoaW50Q2FyZFwiLCBzdHlsZSwgXCJyZWN0UmlnaHRTbWFsbFwiKTtcclxuICAgICAgICAgICAgaGVscGVycy5jcmVhdGVDbG9zZUJ1dHRvbihcImhpbnRDbG9zZUJ1dHRvblwiLCBcImNsb3NlQnV0dG9uUGxhY2VtZW50U21hbGxcIiwgcmVtb3ZlSGludENhcmQsIFwiaGludENhcmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaGVscGVycy5jcmVhdGVCYXNpY0NhcmRDb250ZW50KGdsb2JhbC5zZXR0aW5ncy5pbnRlcmFjdGlvbkV4YW1wbGUubmV4dFZpc3VhbEhpbnQsIFwiaGludENhcmRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTaG93Q2hhbmdlc0NhcmQoKXtcclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJzaG93Q2hhbmdlc0NhcmRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIaW50Q2FyZCgpe1xyXG4gICAgdmFyIHZpc3VhbHNXaXRoQm9yZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdyZWVuQm9yZGVyXCIpO1xyXG4gICAgaWYgKHZpc3VhbHNXaXRoQm9yZGVyLmxlbmd0aCAhPSAwKXtcclxuICAgICAgICB2aXN1YWxzV2l0aEJvcmRlclswXS5jbGFzc05hbWUgKz0gXCIgbm9Cb3JkZXJcIjtcclxuICAgIH1cclxuICAgIGVsZW1lbnRzLnJlbW92ZUVsZW1lbnQoXCJoaW50Q2FyZFwiKTtcclxufSIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuaW1wb3J0ICogYXMgZGlzYWJsZSBmcm9tIFwiLi9kaXNhYmxlQXJlYVwiO1xyXG5pbXBvcnQgeyBnZXRDYXJkQ2hhbmdlcywgIGdldENoYXJ0Q2hhbmdlcyB9IGZyb20gXCIuL2Jhc2ljVmlzdWFsQ29udGVudFwiO1xyXG5pbXBvcnQgeyBnZXRMaW5lQ2x1c3RlcmVkQ29sdW1uQ29tYm9DaGFydENoYW5nZXMgfSBmcm9tIFwiLi9jb21wbGV4VmlzdWFsQ29udGVudFwiO1xyXG5pbXBvcnQgeyBzaG93UmVwb3J0Q2hhbmdlcyB9IGZyb20gXCIuL3Nob3dSZXBvcnRDaGFuZ2VzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvd1Zpc3VhbENoYW5nZXMoc2VsZWN0ZWRWaXN1YWwpIHtcclxuICAgIGxldCB2aXN1YWxEYXRhID0gaGVscGVycy5nZXREYXRhT2ZWaXN1YWwoc2VsZWN0ZWRWaXN1YWwpO1xyXG5cclxuICAgIGlmKHZpc3VhbERhdGEuaW50ZXJhY3Rpb25DaGFuZ2VkSW5mb3NTdGF0dXMgIT0gZ2xvYmFsLmluZm9TdGF0dXMuZGVsZXRlZCl7XHJcbiAgICAgICAgZGlzYWJsZS5kaXNhYmxlRnJhbWUoKTtcclxuICAgICAgICBkaXNhYmxlLmNyZWF0ZURpc2FibGVkQXJlYShzZWxlY3RlZFZpc3VhbCk7XHJcblxyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IGhlbHBlcnMuZ2V0VmlzdWFsQ2FyZFBvcyhzZWxlY3RlZFZpc3VhbCwgZ2xvYmFsLmluZm9DYXJkV2lkdGgsIGdsb2JhbC5pbmZvQ2FyZE1hcmdpbik7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9IGhlbHBlcnMuZ2V0Q2FyZFN0eWxlKHBvc2l0aW9uLnksIHBvc2l0aW9uLngsIGdsb2JhbC5pbmZvQ2FyZFdpZHRoLCBcIlwiKTtcclxuICAgICAgICBpZihwb3NpdGlvbi5wb3MgPT09IFwibGVmdFwiKXtcclxuICAgICAgICAgICAgaGVscGVycy5jcmVhdGVDYXJkKFwic2hvd0NoYW5nZXNDYXJkXCIsIHN0eWxlLCBcInJlY3RMZWZ0QmlnXCIpO1xyXG4gICAgICAgICAgICBoZWxwZXJzLmNyZWF0ZUNsb3NlQnV0dG9uKFwiY2xvc2VCdXR0b25cIiwgXCJjbG9zZUJ1dHRvblBsYWNlbWVudEJpZyBwb3NpdGlvbkxlZnRcIiwgaGVscGVycy5yZW1vdmVPbmJvYXJkaW5nLCBcInNob3dDaGFuZ2VzQ2FyZFwiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaGVscGVycy5jcmVhdGVDYXJkKFwic2hvd0NoYW5nZXNDYXJkXCIsIHN0eWxlLCBcInJlY3RSaWdodEJpZ1wiKTtcclxuICAgICAgICAgICAgaGVscGVycy5jcmVhdGVDbG9zZUJ1dHRvbihcImNsb3NlQnV0dG9uXCIsIFwiY2xvc2VCdXR0b25QbGFjZW1lbnRCaWdcIiwgaGVscGVycy5yZW1vdmVPbmJvYXJkaW5nLCBcInNob3dDaGFuZ2VzQ2FyZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhlbHBlcnMuY3JlYXRlQ2FyZENvbnRlbnQoZ2xvYmFsLnNldHRpbmdzLmludGVyYWN0aW9uRXhhbXBsZS50aXRsZSwgXCJcIiwgXCJzaG93Q2hhbmdlc0NhcmRcIik7XHJcbiAgICAgICAgYXdhaXQgY3JlYXRlU2hvd1Zpc3VhbENoYW5nZXNJbmZvKHNlbGVjdGVkVmlzdWFsKTtcclxuXHJcbiAgICAgICAgaGVscGVycy5jcmVhdGVDYXJkQnV0dG9ucyhcImJhY2sgdG8gdmlzdWFsXCIsIFwiYmFjayB0byBvdmVydmlld1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1JlcG9ydENoYW5nZXMoKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2hvd1Zpc3VhbENoYW5nZXNJbmZvKHZpc3VhbCl7XHJcbiAgICBsZXQgdmlzdWFsRGF0YSA9IGhlbHBlcnMuZ2V0RGF0YU9mSW50ZXJhY3Rpb25WaXN1YWwodmlzdWFsKTtcclxuICAgIGxldCB2aXN1YWxDaGFuZ2VJbmZvO1xyXG5cclxuICAgIHN3aXRjaCh2aXN1YWxEYXRhLmludGVyYWN0aW9uQ2hhbmdlZEluZm9zU3RhdHVzKXtcclxuICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLm9yaWdpbmFsOlxyXG4gICAgICAgICAgICB2aXN1YWxDaGFuZ2VJbmZvID0gYXdhaXQgZ2V0U2hvd1Zpc3VhbENoYW5nZXNUZXh0KHZpc3VhbCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuY2hhbmdlZDpcclxuICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLmFkZGVkOlxyXG4gICAgICAgICAgICB2aXN1YWxDaGFuZ2VJbmZvID0gdmlzdWFsRGF0YS5jaGFuZ2VkSW50ZXJhY3Rpb25DaGFuZ2VkSW5mbztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50VGV4dFwiKS5pbm5lckhUTUwgKz0gdmlzdWFsQ2hhbmdlSW5mbztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNob3dWaXN1YWxDaGFuZ2VzVGV4dCh2aXN1YWwpe1xyXG4gICAgbGV0IGFsbFRhcmdldHMgPSBnbG9iYWwuc2VsZWN0ZWRUYXJnZXRzLm1hcCgoeyBlcXVhbHMgfSkgPT4gZXF1YWxzKTtcclxuICAgIGxldCBhbGxUYXJnZXRzU3RyaW5nID0gaGVscGVycy5kYXRhVG9TdHJpbmcoYWxsVGFyZ2V0cyk7XHJcbiAgICBsZXQgdmlzdWFsQ2hhbmdlSW5mbyA9IFwiWW91IGNhbiBzZWUgdGhhdCB0aGlzIHZpc3VhbCB3YXMgZmlsdGVyZWQgYnkgXCIgKyBhbGxUYXJnZXRzU3RyaW5nICsgXCIuPGJyPlwiO1xyXG5cclxuICAgIGxldCB0eXBlID0gaGVscGVycy5nZXRUeXBlTmFtZSh2aXN1YWwpO1xyXG5cclxuICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICBjYXNlICdDYXJkJzpcclxuICAgICAgICAgICAgdmlzdWFsQ2hhbmdlSW5mbyArPSBhd2FpdCBnZXRDYXJkQ2hhbmdlcyh2aXN1YWwpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdMaW5lIENsdXN0ZXJlZCBDb2x1bW4gQ29tYm8gQ2hhcnQnOlxyXG4gICAgICAgICAgICB2aXN1YWxDaGFuZ2VJbmZvICs9IGF3YWl0IGdldExpbmVDbHVzdGVyZWRDb2x1bW5Db21ib0NoYXJ0Q2hhbmdlcyh2aXN1YWwpO1xyXG4gICAgICAgICAgICB2aXN1YWxDaGFuZ2VJbmZvICs9IGRpc3BsYXlDYW5GaWx0ZXJJbmZvKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0xpbmUgQ2hhcnQnOlxyXG4gICAgICAgICAgICB2aXN1YWxDaGFuZ2VJbmZvICs9IGF3YWl0IGdldENoYXJ0Q2hhbmdlcyh2aXN1YWwpO1xyXG4gICAgICAgICAgICB2aXN1YWxDaGFuZ2VJbmZvICs9IGRpc3BsYXlDYW5GaWx0ZXJJbmZvKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0NsdXN0ZXJlZCBCYXIgQ2hhcnQnOlxyXG4gICAgICAgICAgICB2aXN1YWxDaGFuZ2VJbmZvICs9IGF3YWl0IGdldENoYXJ0Q2hhbmdlcyh2aXN1YWwpO1xyXG4gICAgICAgICAgICB2aXN1YWxDaGFuZ2VJbmZvICs9IGRpc3BsYXlDYW5GaWx0ZXJJbmZvKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2aXN1YWxDaGFuZ2VJbmZvO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Q2FuRmlsdGVySW5mbygpe1xyXG4gICAgcmV0dXJuIFwiPGJyPllvdSBjYW4gYWxzbyBjaGFuZ2UgdGhlIHJlcG9ydCBmaWx0ZXJzIGJ5IHNlbGVjdGluZyBhIG5ldyBlbGVtZW50IG9mIHRoaXMgdmlzdWFsLlwiO1xyXG59IiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgKiBhcyBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5pbXBvcnQgKiBhcyBpbmZvIGZyb20gXCIuL3Zpc3VhbEluZm9cIjtcclxuaW1wb3J0IGJ1bGxldHBvaW50SW1nIGZyb20gXCIuLi9hc3NldHMvZG90LnBuZ1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVZpc3VhbEluZm8odmlzdWFsKXtcclxuICAgIGxldCB2aXN1YWxJbmZvcyA9IGF3YWl0IGhlbHBlcnMuZ2V0VmlzdWFsSW5mb3ModmlzdWFsKTtcclxuICAgIGluZm8uY3JlYXRlVGFic1dpdGhDb250ZW50KHZpc3VhbCwgdmlzdWFsSW5mb3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFic1dpdGhDb250ZW50KHZpc3VhbCwgdmlzdWFsSW5mb3Mpe1xyXG4gICAgbGV0IGhhc0RhdGFJbmZvID0gZmFsc2U7XHJcbiAgICBsZXQgaGFzSW50ZXJhY3Rpb25JbmZvID0gZmFsc2U7XHJcbiAgICBjb25zdCB2aXN1YWxEYXRhID0gaGVscGVycy5nZXREYXRhT2ZWaXN1YWwodmlzdWFsKTtcclxuXHJcbiAgICBsZXQgZ2VuZXJhbEltYWdlcyA9IFtdO1xyXG4gICAgbGV0IGdlbmVyYWxJbmZvcyA9IFtdO1xyXG4gICAgbGV0IGRhdGFJbWFnZXMgPSBbXTtcclxuICAgIGxldCBkYXRhSW5mb3MgPSBbXTtcclxuICAgIGxldCBpbnRlcmFjdGlvbkltYWdlcyA9IFtdO1xyXG4gICAgbGV0IGludGVyYWN0aW9uSW5mb3MgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpc3VhbERhdGEuZ2VuZXJhbEluZm9zU3RhdHVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICBzd2l0Y2godmlzdWFsRGF0YS5nZW5lcmFsSW5mb3NTdGF0dXNbaV0pe1xyXG4gICAgICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLm9yaWdpbmFsOlxyXG4gICAgICAgICAgICAgICAgZ2VuZXJhbEltYWdlcy5wdXNoKHZpc3VhbEluZm9zLmdlbmVyYWxJbWFnZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgZ2VuZXJhbEluZm9zLnB1c2godmlzdWFsSW5mb3MuZ2VuZXJhbEluZm9zW2ldKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGdsb2JhbC5pbmZvU3RhdHVzLmNoYW5nZWQ6XHJcbiAgICAgICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuYWRkZWQ6XHJcbiAgICAgICAgICAgICAgICBnZW5lcmFsSW1hZ2VzLnB1c2goYnVsbGV0cG9pbnRJbWcpO1xyXG4gICAgICAgICAgICAgICAgZ2VuZXJhbEluZm9zLnB1c2godmlzdWFsRGF0YS5jaGFuZ2VkR2VuZXJhbEluZm9zW2ldKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aXN1YWxEYXRhLmRhdGFJbmZvc1N0YXR1cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHN3aXRjaCh2aXN1YWxEYXRhLmRhdGFJbmZvc1N0YXR1c1tpXSl7XHJcbiAgICAgICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMub3JpZ2luYWw6XHJcbiAgICAgICAgICAgICAgICBkYXRhSW1hZ2VzLnB1c2godmlzdWFsSW5mb3MuZGF0YUltYWdlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhSW5mb3MucHVzaCh2aXN1YWxJbmZvcy5kYXRhSW5mb3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuY2hhbmdlZDpcclxuICAgICAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5hZGRlZDpcclxuICAgICAgICAgICAgICAgIGRhdGFJbWFnZXMucHVzaChidWxsZXRwb2ludEltZyk7XHJcbiAgICAgICAgICAgICAgICBkYXRhSW5mb3MucHVzaCh2aXN1YWxEYXRhLmNoYW5nZWREYXRhSW5mb3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aXN1YWxEYXRhLmludGVyYWN0aW9uSW5mb3NTdGF0dXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBzd2l0Y2godmlzdWFsRGF0YS5pbnRlcmFjdGlvbkluZm9zU3RhdHVzW2ldKXtcclxuICAgICAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5vcmlnaW5hbDpcclxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uSW1hZ2VzLnB1c2godmlzdWFsSW5mb3MuaW50ZXJhY3Rpb25JbWFnZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25JbmZvcy5wdXNoKHZpc3VhbEluZm9zLmludGVyYWN0aW9uSW5mb3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZ2xvYmFsLmluZm9TdGF0dXMuY2hhbmdlZDpcclxuICAgICAgICAgICAgY2FzZSBnbG9iYWwuaW5mb1N0YXR1cy5hZGRlZDpcclxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uSW1hZ2VzLnB1c2goYnVsbGV0cG9pbnRJbWcpO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25JbmZvcy5wdXNoKHZpc3VhbERhdGEuY2hhbmdlZEludGVyYWN0aW9uSW5mb3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZGF0YUluZm9zLmxlbmd0aCAhPSAwKXtcclxuICAgICAgICBoYXNEYXRhSW5mbyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZihpbnRlcmFjdGlvbkluZm9zLmxlbmd0aCAhPSAwKXtcclxuICAgICAgICBoYXNJbnRlcmFjdGlvbkluZm8gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVGFicyhoYXNEYXRhSW5mbywgaGFzSW50ZXJhY3Rpb25JbmZvKTtcclxuXHJcbiAgICBjcmVhdGVJbmZvTGlzdChnZW5lcmFsSW1hZ2VzLCBnZW5lcmFsSW5mb3MsIFwiZ2VuZXJhbFRhYlwiKTtcclxuICAgIGlmKGhhc0RhdGFJbmZvKXtcclxuICAgICAgICBjcmVhdGVJbmZvTGlzdChkYXRhSW1hZ2VzLCBkYXRhSW5mb3MsIFwiZGF0YVRhYlwiKTtcclxuICAgIH1cclxuICAgIGlmKGhhc0ludGVyYWN0aW9uSW5mbyl7XHJcbiAgICAgICAgY3JlYXRlSW5mb0xpc3QoaW50ZXJhY3Rpb25JbWFnZXMsIGludGVyYWN0aW9uSW5mb3MsIFwiaW50ZXJhY3Rpb25UYWJcIik7XHJcbiAgICAgICAgaGVscGVycy5jcmVhdGVJbnRlcmFjdGlvbkV4YW1wbGVCdXR0b24oXCJpbnRlcmFjdGlvblRhYlwiLCB2aXN1YWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWJzKGhhc0RhdGFJbmZvLCBoYXNJbnRlcmFjdGlvbkluZm8pe1xyXG4gICAgbGV0IGRpdkF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlRGl2QXR0cmlidXRlcygpO1xyXG4gICAgZGl2QXR0cmlidXRlcy5pZCA9IFwidmlzdWFsSW5mb1RhYnNcIjtcclxuICAgIGRpdkF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImNvbnRlbnRUZXh0XCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoZGl2QXR0cmlidXRlcyk7XHJcblxyXG4gICAgbGV0IHVsQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVVTEF0dHJpYnV0ZXMoKTtcclxuICAgIHVsQXR0cmlidXRlcy5pZCA9IFwicGlsbHNUYWJcIjtcclxuICAgIHVsQXR0cmlidXRlcy5yb2xlID0gXCJ0YWJsaXN0XCI7XHJcbiAgICB1bEF0dHJpYnV0ZXMuY2xhc3NlcyA9IFwibmF2IG5hdi1waWxscyBuYXYtZmlsbFwiO1xyXG4gICAgdWxBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJ2aXN1YWxJbmZvVGFic1wiO1xyXG4gICAgZWxlbWVudHMuY3JlYXRlVUwodWxBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICBsZXQgaWRzID0gW1wiZ2VuZXJhbFBpbGxcIl07XHJcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xyXG5cclxuICAgIGlmKGhhc0RhdGFJbmZvKXtcclxuICAgICAgICBpZHMucHVzaChcImRhdGFQaWxsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGhhc0ludGVyYWN0aW9uSW5mbyl7XHJcbiAgICAgICAgaWRzLnB1c2goXCJpbnRlcmFjdGlvblBpbGxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZVRhYkFuY2hvckF0dHJpYnV0ZXMoKTtcclxuICAgIGFBdHRyaWJ1dGVzLmlkID0gXCJnZW5lcmFsTGlua1wiO1xyXG4gICAgYUF0dHJpYnV0ZXMuY29udGVudCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1ncmFwaC11cCBtYi0xXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMGgxdjE1aDE1djFIMFYwWm0xNC44MTcgMy4xMTNhLjUuNSAwIDAgMSAuMDcuNzA0bC00LjUgNS41YS41LjUgMCAwIDEtLjc0LjAzN0w3LjA2IDYuNzY3bC0zLjY1NiA1LjAyN2EuNS41IDAgMCAxLS44MDgtLjU4OGw0LTUuNWEuNS41IDAgMCAxIC43NTgtLjA2bDIuNjA5IDIuNjEgNC4xNS01LjA3M2EuNS41IDAgMCAxIC43MDQtLjA3WlwiLz48L3N2Zz4gIEdlbmVyYWwnO1xyXG4gICAgYUF0dHJpYnV0ZXMuaHJlZiA9IFwiZ2VuZXJhbFRhYlwiO1xyXG4gICAgYUF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImdlbmVyYWxQaWxsXCI7XHJcbiAgICBhdHRyaWJ1dGVzLnB1c2goYUF0dHJpYnV0ZXMpO1xyXG5cclxuICAgIGlmKGhhc0RhdGFJbmZvKXtcclxuICAgICAgICBhQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVUYWJBbmNob3JBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgYUF0dHJpYnV0ZXMuaWQgPSBcImRhdGFMaW5rXCI7XHJcbiAgICAgICAgYUF0dHJpYnV0ZXMuY29udGVudCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1jbGlwYm9hcmQyLWRhdGEgbWItMVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTkuNSAwYS41LjUgMCAwIDEgLjUuNS41LjUgMCAwIDAgLjUuNS41LjUgMCAwIDEgLjUuNVYyYS41LjUgMCAwIDEtLjUuNWgtNUEuNS41IDAgMCAxIDUgMnYtLjVhLjUuNSAwIDAgMSAuNS0uNS41LjUgMCAwIDAgLjUtLjUuNS41IDAgMCAxIC41LS41aDNaXCIvPjxwYXRoIGQ9XCJNMyAyLjVhLjUuNSAwIDAgMSAuNS0uNUg0YS41LjUgMCAwIDAgMC0xaC0uNUExLjUgMS41IDAgMCAwIDIgMi41djEyQTEuNSAxLjUgMCAwIDAgMy41IDE2aDlhMS41IDEuNSAwIDAgMCAxLjUtMS41di0xMkExLjUgMS41IDAgMCAwIDEyLjUgMUgxMmEuNS41IDAgMCAwIDAgMWguNWEuNS41IDAgMCAxIC41LjV2MTJhLjUuNSAwIDAgMS0uNS41aC05YS41LjUgMCAwIDEtLjUtLjV2LTEyWlwiLz48cGF0aCBkPVwiTTEwIDdhMSAxIDAgMSAxIDIgMHY1YTEgMSAwIDEgMS0yIDBWN1ptLTYgNGExIDEgMCAxIDEgMiAwdjFhMSAxIDAgMSAxLTIgMHYtMVptNC0zYTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAxIDAgMiAwVjlhMSAxIDAgMCAwLTEtMVpcIi8+PC9zdmc+ICBEYXRhJztcclxuICAgICAgICBhQXR0cmlidXRlcy5ocmVmID0gXCJkYXRhVGFiXCI7XHJcbiAgICAgICAgYUF0dHJpYnV0ZXMucGFyZW50SWQgPSBcImRhdGFQaWxsXCI7XHJcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGFBdHRyaWJ1dGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihoYXNJbnRlcmFjdGlvbkluZm8pe1xyXG4gICAgICAgIGFBdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZVRhYkFuY2hvckF0dHJpYnV0ZXMoKTtcclxuICAgICAgICBhQXR0cmlidXRlcy5pZCA9IFwiaW50ZXJhY3Rpb25MaW5rXCI7XHJcbiAgICAgICAgYUF0dHJpYnV0ZXMuY29udGVudCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1oYW5kLWluZGV4LXRodW1iIG1iLTFcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZD1cIk02Ljc1IDFhLjc1Ljc1IDAgMCAxIC43NS43NVY4YS41LjUgMCAwIDAgMSAwVjUuNDY3bC4wODYtLjAwNGMuMzE3LS4wMTIuNjM3LS4wMDguODE2LjAyNy4xMzQuMDI3LjI5NC4wOTYuNDQ4LjE4Mi4wNzcuMDQyLjE1LjE0Ny4xNS4zMTRWOGEuNS41IDAgMCAwIDEgMFY2LjQzNWwuMTA2LS4wMWMuMzE2LS4wMjQuNTg0LS4wMS43MDguMDQuMTE4LjA0Ni4zLjIwNy40ODYuNDMuMDgxLjA5Ni4xNS4xOS4yLjI1OVY4LjVhLjUuNSAwIDEgMCAxIDB2LTFoLjM0MmExIDEgMCAwIDEgLjk5NSAxLjFsLS4yNzEgMi43MTVhMi41IDIuNSAwIDAgMS0uMzE3Ljk5MWwtMS4zOTUgMi40NDJhLjUuNSAwIDAgMS0uNDM0LjI1Mkg2LjExOGEuNS41IDAgMCAxLS40NDctLjI3NmwtMS4yMzItMi40NjUtMi41MTItNC4xODVhLjUxNy41MTcgMCAwIDEgLjgwOS0uNjMxbDIuNDEgMi40MUEuNS41IDAgMCAwIDYgOS41VjEuNzVBLjc1Ljc1IDAgMCAxIDYuNzUgMXpNOC41IDQuNDY2VjEuNzVhMS43NSAxLjc1IDAgMSAwLTMuNSAwdjYuNTQzTDMuNDQzIDYuNzM2QTEuNTE3IDEuNTE3IDAgMCAwIDEuMDcgOC41ODhsMi40OTEgNC4xNTMgMS4yMTUgMi40M0ExLjUgMS41IDAgMCAwIDYuMTE4IDE2aDYuMzAyYTEuNSAxLjUgMCAwIDAgMS4zMDItLjc1NmwxLjM5NS0yLjQ0MWEzLjUgMy41IDAgMCAwIC40NDQtMS4zODlsLjI3MS0yLjcxNWEyIDIgMCAwIDAtMS45OS0yLjE5OWgtLjU4MWE1LjExNCA1LjExNCAwIDAgMC0uMTk1LS4yNDhjLS4xOTEtLjIyOS0uNTEtLjU2OC0uODgtLjcxNi0uMzY0LS4xNDYtLjg0Ni0uMTMyLTEuMTU4LS4xMDhsLS4xMzIuMDEyYTEuMjYgMS4yNiAwIDAgMC0uNTYtLjY0MiAyLjYzMiAyLjYzMiAwIDAgMC0uNzM4LS4yODhjLS4zMS0uMDYyLS43MzktLjA1OC0xLjA1LS4wNDZsLS4wNDguMDAyem0yLjA5NCAyLjAyNXpcIi8+PC9zdmc+IEludGVyYWN0aW9uJztcclxuICAgICAgICBhQXR0cmlidXRlcy5ocmVmID0gXCJpbnRlcmFjdGlvblRhYlwiO1xyXG4gICAgICAgIGFBdHRyaWJ1dGVzLnBhcmVudElkID0gXCJpbnRlcmFjdGlvblBpbGxcIjtcclxuICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYUF0dHJpYnV0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRhYlBpbGxzKGlkcywgYXR0cmlidXRlcyk7XHJcblxyXG4gICAgZGl2QXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVEaXZBdHRyaWJ1dGVzKCk7XHJcbiAgICBkaXZBdHRyaWJ1dGVzLmlkID0gXCJwaWxsc1RhYkNvbnRlbnRcIjtcclxuICAgIGRpdkF0dHJpYnV0ZXMuY2xhc3NlcyA9IFwidGFiLWNvbnRlbnRcIjtcclxuICAgIGRpdkF0dHJpYnV0ZXMucGFyZW50SWQgPSBcInZpc3VhbEluZm9UYWJzXCI7XHJcbiAgICBlbGVtZW50cy5jcmVhdGVEaXYoZGl2QXR0cmlidXRlcyk7XHJcblxyXG4gICAgaWRzID0gW1wiZ2VuZXJhbFRhYlwiXTtcclxuICAgIGxldCB0YWJQaWxscyA9IFtcImdlbmVyYWxMaW5rXCJdO1xyXG5cclxuICAgIGlmKGhhc0RhdGFJbmZvKXtcclxuICAgICAgICBpZHMucHVzaChcImRhdGFUYWJcIik7XHJcbiAgICAgICAgdGFiUGlsbHMucHVzaChcImRhdGFMaW5rXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGhhc0ludGVyYWN0aW9uSW5mbyl7XHJcbiAgICAgICAgaWRzLnB1c2goXCJpbnRlcmFjdGlvblRhYlwiKTtcclxuICAgICAgICB0YWJQaWxscy5wdXNoKFwiaW50ZXJhY3Rpb25MaW5rXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRhYkNvbnRlbnQoaWRzLCB0YWJQaWxscyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhYlBpbGxzKGlkcywgYXR0cmlidXRlcyl7XHJcbiAgICBpZHMuZm9yRWFjaCgoaWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IGxpQXR0cmlidXRlcyA9IGdsb2JhbC5jcmVhdGVMSUF0dHJpYnV0ZXMoKTtcclxuICAgICAgICBsaUF0dHJpYnV0ZXMuaWQgPSBpZDtcclxuICAgICAgICBsaUF0dHJpYnV0ZXMuY2xhc3NlcyA9IFwibmF2LWl0ZW1cIjtcclxuICAgICAgICBsaUF0dHJpYnV0ZXMucGFyZW50SWQgPVwicGlsbHNUYWJcIjtcclxuICAgICAgICBlbGVtZW50cy5jcmVhdGVMSShsaUF0dHJpYnV0ZXMpO1xyXG5cclxuICAgICAgICBsZXQgYUF0dHJpYnV0ZXMgPSBnbG9iYWwuY3JlYXRlQW5jaG9yQXR0cmlidXRlcygpO1xyXG4gICAgICAgIGFBdHRyaWJ1dGVzLmlkID0gYXR0cmlidXRlc1tpbmRleF0uaWQ7XHJcbiAgICAgICAgaWYoaW5kZXggPT0gMCl7XHJcbiAgICAgICAgICAgIGFBdHRyaWJ1dGVzLmNsYXNzZXMgPSBcIm5hdi1saW5rIGFjdGl2ZVwiO1xyXG4gICAgICAgICAgICBhQXR0cmlidXRlcy5zZWxlY3RlZCA9IFwidHJ1ZVwiOyAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhQXR0cmlidXRlcy5jbGFzc2VzID0gXCJuYXYtbGlua1wiO1xyXG4gICAgICAgICAgICBhQXR0cmlidXRlcy5zZWxlY3RlZCA9IFwiZmFsc2VcIjsgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYUF0dHJpYnV0ZXMuY29udHJvbGVzID0gYXR0cmlidXRlc1tpbmRleF0uaHJlZjtcclxuICAgICAgICBhQXR0cmlidXRlcy5jb250ZW50ID0gYXR0cmlidXRlc1tpbmRleF0uY29udGVudDtcclxuICAgICAgICBhQXR0cmlidXRlcy50b2dnbGUgPSBcInBpbGxcIjtcclxuICAgICAgICBhQXR0cmlidXRlcy5yb2xlID0gXCJ0YWJcIjtcclxuICAgICAgICBhQXR0cmlidXRlcy5ocmVmID0gXCIjXCIgKyBhdHRyaWJ1dGVzW2luZGV4XS5ocmVmO1xyXG4gICAgICAgIGFBdHRyaWJ1dGVzLnBhcmVudElkID0gYXR0cmlidXRlc1tpbmRleF0ucGFyZW50SWQ7XHJcbiAgICAgICAgZWxlbWVudHMuY3JlYXRlQW5jaG9yKGFBdHRyaWJ1dGVzLCB0cnVlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWJDb250ZW50KGlkcywgdGFiUGlsbHMpe1xyXG4gICAgaWRzLmZvckVhY2goKGlkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBhdHRyaWJ1dGVzID0gZ2xvYmFsLmNyZWF0ZURpdkF0dHJpYnV0ZXMoKTtcclxuICAgICAgICBhdHRyaWJ1dGVzLmlkID0gIGlkO1xyXG4gICAgICAgIGF0dHJpYnV0ZXMucm9sZSA9IFwidGFicGFuZWxcIjtcclxuICAgICAgICBhdHRyaWJ1dGVzLmxhYmVsID0gdGFiUGlsbHNbaW5kZXhdO1xyXG4gICAgICAgIGlmKGluZGV4ID09IDApe1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzZXMgPSBcInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzc2VzID0gXCJ0YWItcGFuZSBmYWRlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF0dHJpYnV0ZXMucGFyZW50SWQgPSBcInBpbGxzVGFiQ29udGVudFwiO1xyXG4gICAgICAgIGVsZW1lbnRzLmNyZWF0ZURpdihhdHRyaWJ1dGVzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5mb0xpc3QoaW1hZ2VzLCBpbmZvcywgcGFyZW50SWQpe1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHVsLnN0eWxlLmxpc3RTdHlsZUltYWdlID0gXCJ1cmwoXCIrIGltYWdlc1tpXSArIFwiKVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKS5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gIGluZm9zW2ldO1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vQXBwT3duc0RhdGEvd3d3cm9vdC9vbmJvYXJkaW5nL3RzL29uYm9hcmRpbmcudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=