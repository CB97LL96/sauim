gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDFundoMenuObjects1= [];
gdjs.MenuCode.GDFundoMenuObjects2= [];
gdjs.MenuCode.GDTituloMenuObjects1= [];
gdjs.MenuCode.GDTituloMenuObjects2= [];
gdjs.MenuCode.GDBtnObjects1= [];
gdjs.MenuCode.GDBtnObjects2= [];
gdjs.MenuCode.GDCipo_9595MenuObjects1= [];
gdjs.MenuCode.GDCipo_9595MenuObjects2= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDFontItalicObjects1= [];
gdjs.MenuCode.GDFontItalicObjects2= [];
gdjs.MenuCode.GDFontNormalObjects1= [];
gdjs.MenuCode.GDFontNormalObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnObjects1Objects = Hashtable.newFrom({"Btn": gdjs.MenuCode.GDBtnObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDFontNormalObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFontNormalObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFontNormalObjects1[i].getVariableString(gdjs.MenuCode.GDFontNormalObjects1[i].getVariables().getFromIndex(0)) == "Play" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFontNormalObjects1[k] = gdjs.MenuCode.GDFontNormalObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFontNormalObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnObjects1 */
/* Reuse gdjs.MenuCode.GDFontNormalObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnObjects1[i].getBehavior("Animation").setAnimationName("Press");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFontNormalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFontNormalObjects1[i].setColor("17;17;17");
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Abertura", false);
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnObjects1Objects = Hashtable.newFrom({"Btn": gdjs.MenuCode.GDBtnObjects1});
gdjs.MenuCode.asyncCallback16033988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16033988, gdjs.MenuCode.asyncCallback16033988);
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MenuCode.asyncCallback16033988(runtimeScene, asyncObjectsList)), 16033988, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDFontNormalObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFontNormalObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFontNormalObjects1[i].getVariableString(gdjs.MenuCode.GDFontNormalObjects1[i].getVariables().getFromIndex(0)) == "Options" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFontNormalObjects1[k] = gdjs.MenuCode.GDFontNormalObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFontNormalObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnObjects1 */
/* Reuse gdjs.MenuCode.GDFontNormalObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnObjects1[i].getBehavior("Animation").setAnimationName("Press");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFontNormalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFontNormalObjects1[i].setColor("17;17;17");
}
}

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnObjects1Objects = Hashtable.newFrom({"Btn": gdjs.MenuCode.GDBtnObjects1});
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDFontNormalObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFontNormalObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFontNormalObjects1[i].getVariableString(gdjs.MenuCode.GDFontNormalObjects1[i].getVariables().getFromIndex(0)) == "Credits" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFontNormalObjects1[k] = gdjs.MenuCode.GDFontNormalObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFontNormalObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnObjects1 */
/* Reuse gdjs.MenuCode.GDFontNormalObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnObjects1[i].getBehavior("Animation").setAnimationName("Press");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFontNormalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFontNormalObjects1[i].setColor("17;17;17");
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Creditos", false);
}
}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("FontNormal"), gdjs.MenuCode.GDFontNormalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFontNormalObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFontNormalObjects1[i].getVariableString(gdjs.MenuCode.GDFontNormalObjects1[i].getVariables().getFromIndex(0)) == "Play" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFontNormalObjects1[k] = gdjs.MenuCode.GDFontNormalObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFontNormalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDFontNormalObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDFontNormalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFontNormalObjects1[i].getBehavior("Text").setText("Play");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FontNormal"), gdjs.MenuCode.GDFontNormalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFontNormalObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFontNormalObjects1[i].getVariableString(gdjs.MenuCode.GDFontNormalObjects1[i].getVariables().getFromIndex(0)) == "Options" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFontNormalObjects1[k] = gdjs.MenuCode.GDFontNormalObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFontNormalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDFontNormalObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDFontNormalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFontNormalObjects1[i].getBehavior("Text").setText("Options");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FontNormal"), gdjs.MenuCode.GDFontNormalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFontNormalObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFontNormalObjects1[i].getVariableString(gdjs.MenuCode.GDFontNormalObjects1[i].getVariables().getFromIndex(0)) == "Credits" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFontNormalObjects1[k] = gdjs.MenuCode.GDFontNormalObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFontNormalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDFontNormalObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDFontNormalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFontNormalObjects1[i].getBehavior("Text").setText("Credits");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn"), gdjs.MenuCode.GDBtnObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBtnObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBtnObjects1[i].getVariableString(gdjs.MenuCode.GDBtnObjects1[i].getVariables().getFromIndex(0)) == "play" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDBtnObjects1[k] = gdjs.MenuCode.GDBtnObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBtnObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnObjects1 */
gdjs.copyArray(runtimeScene.getObjects("FontNormal"), gdjs.MenuCode.GDFontNormalObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnObjects1[i].getBehavior("Animation").setAnimationName("Hover");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFontNormalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFontNormalObjects1[i].setColor("255;255;255");
}
}

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Btn"), gdjs.MenuCode.GDBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("FontNormal"), gdjs.MenuCode.GDFontNormalObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnObjects1[i].getBehavior("Animation").setAnimationName("Normal");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFontNormalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFontNormalObjects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn"), gdjs.MenuCode.GDBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBtnObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBtnObjects1[i].getVariableString(gdjs.MenuCode.GDBtnObjects1[i].getVariables().getFromIndex(0)) == "options" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDBtnObjects1[k] = gdjs.MenuCode.GDBtnObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBtnObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnObjects1 */
gdjs.copyArray(runtimeScene.getObjects("FontNormal"), gdjs.MenuCode.GDFontNormalObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnObjects1[i].getBehavior("Animation").setAnimationName("Hover");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFontNormalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFontNormalObjects1[i].setColor("255;255;255");
}
}

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn"), gdjs.MenuCode.GDBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBtnObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBtnObjects1[i].getVariableString(gdjs.MenuCode.GDBtnObjects1[i].getVariables().getFromIndex(0)) == "credits" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDBtnObjects1[k] = gdjs.MenuCode.GDBtnObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBtnObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnObjects1 */
gdjs.copyArray(runtimeScene.getObjects("FontNormal"), gdjs.MenuCode.GDFontNormalObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnObjects1[i].getBehavior("Animation").setAnimationName("Hover");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFontNormalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFontNormalObjects1[i].setColor("255;255;255");
}
}

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Abertura");
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "mus_menu.ogg\"", 1, true, (55) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 100, 1);
}
}

}

}

};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDFundoMenuObjects1.length = 0;
gdjs.MenuCode.GDFundoMenuObjects2.length = 0;
gdjs.MenuCode.GDTituloMenuObjects1.length = 0;
gdjs.MenuCode.GDTituloMenuObjects2.length = 0;
gdjs.MenuCode.GDBtnObjects1.length = 0;
gdjs.MenuCode.GDBtnObjects2.length = 0;
gdjs.MenuCode.GDCipo_9595MenuObjects1.length = 0;
gdjs.MenuCode.GDCipo_9595MenuObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDFontItalicObjects1.length = 0;
gdjs.MenuCode.GDFontItalicObjects2.length = 0;
gdjs.MenuCode.GDFontNormalObjects1.length = 0;
gdjs.MenuCode.GDFontNormalObjects2.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);
gdjs.MenuCode.GDFundoMenuObjects1.length = 0;
gdjs.MenuCode.GDFundoMenuObjects2.length = 0;
gdjs.MenuCode.GDTituloMenuObjects1.length = 0;
gdjs.MenuCode.GDTituloMenuObjects2.length = 0;
gdjs.MenuCode.GDBtnObjects1.length = 0;
gdjs.MenuCode.GDBtnObjects2.length = 0;
gdjs.MenuCode.GDCipo_9595MenuObjects1.length = 0;
gdjs.MenuCode.GDCipo_9595MenuObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDFontItalicObjects1.length = 0;
gdjs.MenuCode.GDFontItalicObjects2.length = 0;
gdjs.MenuCode.GDFontNormalObjects1.length = 0;
gdjs.MenuCode.GDFontNormalObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
