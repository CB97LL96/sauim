gdjs.CreditosCode = {};
gdjs.CreditosCode.localVariables = [];
gdjs.CreditosCode.idToCallbackMap = new Map();
gdjs.CreditosCode.GDFundoObjects1= [];
gdjs.CreditosCode.GDFundoObjects2= [];
gdjs.CreditosCode.GDEscuroObjects1= [];
gdjs.CreditosCode.GDEscuroObjects2= [];
gdjs.CreditosCode.GDTituloObjects1= [];
gdjs.CreditosCode.GDTituloObjects2= [];
gdjs.CreditosCode.GDListaObjects1= [];
gdjs.CreditosCode.GDListaObjects2= [];
gdjs.CreditosCode.GDVoltarObjects1= [];
gdjs.CreditosCode.GDVoltarObjects2= [];


gdjs.CreditosCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Escuro"), gdjs.CreditosCode.GDEscuroObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lista"), gdjs.CreditosCode.GDListaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titulo"), gdjs.CreditosCode.GDTituloObjects1);
{for(var i = 0, len = gdjs.CreditosCode.GDEscuroObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDEscuroObjects1[i].getBehavior("Opacity").setOpacity(190);
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDTituloObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDTituloObjects1[i].setCenterXInScene(960);
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDListaObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDListaObjects1[i].setCenterXInScene(960);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0.4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Escape");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


};

gdjs.CreditosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditosCode.GDFundoObjects1.length = 0;
gdjs.CreditosCode.GDFundoObjects2.length = 0;
gdjs.CreditosCode.GDEscuroObjects1.length = 0;
gdjs.CreditosCode.GDEscuroObjects2.length = 0;
gdjs.CreditosCode.GDTituloObjects1.length = 0;
gdjs.CreditosCode.GDTituloObjects2.length = 0;
gdjs.CreditosCode.GDListaObjects1.length = 0;
gdjs.CreditosCode.GDListaObjects2.length = 0;
gdjs.CreditosCode.GDVoltarObjects1.length = 0;
gdjs.CreditosCode.GDVoltarObjects2.length = 0;

gdjs.CreditosCode.eventsList0(runtimeScene);
gdjs.CreditosCode.GDFundoObjects1.length = 0;
gdjs.CreditosCode.GDFundoObjects2.length = 0;
gdjs.CreditosCode.GDEscuroObjects1.length = 0;
gdjs.CreditosCode.GDEscuroObjects2.length = 0;
gdjs.CreditosCode.GDTituloObjects1.length = 0;
gdjs.CreditosCode.GDTituloObjects2.length = 0;
gdjs.CreditosCode.GDListaObjects1.length = 0;
gdjs.CreditosCode.GDListaObjects2.length = 0;
gdjs.CreditosCode.GDVoltarObjects1.length = 0;
gdjs.CreditosCode.GDVoltarObjects2.length = 0;


return;

}

gdjs['CreditosCode'] = gdjs.CreditosCode;
