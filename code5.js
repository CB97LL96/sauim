gdjs.OpcoesCode = {};
gdjs.OpcoesCode.localVariables = [];
gdjs.OpcoesCode.idToCallbackMap = new Map();
gdjs.OpcoesCode.GDFundoObjects1= [];
gdjs.OpcoesCode.GDFundoObjects2= [];
gdjs.OpcoesCode.GDEscuroObjects1= [];
gdjs.OpcoesCode.GDEscuroObjects2= [];
gdjs.OpcoesCode.GDTituloObjects1= [];
gdjs.OpcoesCode.GDTituloObjects2= [];
gdjs.OpcoesCode.GDOpMusicaObjects1= [];
gdjs.OpcoesCode.GDOpMusicaObjects2= [];
gdjs.OpcoesCode.GDOpEfeitosObjects1= [];
gdjs.OpcoesCode.GDOpEfeitosObjects2= [];
gdjs.OpcoesCode.GDOpVoltarObjects1= [];
gdjs.OpcoesCode.GDOpVoltarObjects2= [];
gdjs.OpcoesCode.GDOpDicaObjects1= [];
gdjs.OpcoesCode.GDOpDicaObjects2= [];


gdjs.OpcoesCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Escuro"), gdjs.OpcoesCode.GDEscuroObjects1);
gdjs.copyArray(runtimeScene.getObjects("OpDica"), gdjs.OpcoesCode.GDOpDicaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titulo"), gdjs.OpcoesCode.GDTituloObjects1);
{for(var i = 0, len = gdjs.OpcoesCode.GDEscuroObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDEscuroObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}
{for(var i = 0, len = gdjs.OpcoesCode.GDTituloObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDTituloObjects1[i].setCenterPositionInScene(960,200);
}
}
{for(var i = 0, len = gdjs.OpcoesCode.GDOpDicaObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpDicaObjects1[i].getBehavior("Text").setText("↑ ↓ choose      ← → change      esc back");
}
}
{for(var i = 0, len = gdjs.OpcoesCode.GDOpDicaObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpDicaObjects1[i].setCenterPositionInScene(960,960);
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "mus_menu.ogg\"", 1, true, 55 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("OpEfeitos"), gdjs.OpcoesCode.GDOpEfeitosObjects1);
gdjs.copyArray(runtimeScene.getObjects("OpMusica"), gdjs.OpcoesCode.GDOpMusicaObjects1);
gdjs.copyArray(runtimeScene.getObjects("OpVoltar"), gdjs.OpcoesCode.GDOpVoltarObjects1);
{for(var i = 0, len = gdjs.OpcoesCode.GDOpMusicaObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpMusicaObjects1[i].getBehavior("Text").setText("music     <  " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + "  >");
}
}
{for(var i = 0, len = gdjs.OpcoesCode.GDOpMusicaObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpMusicaObjects1[i].setCenterPositionInScene(960,420);
}
}
{for(var i = 0, len = gdjs.OpcoesCode.GDOpMusicaObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpMusicaObjects1[i].setColor("170;160;175");
}
}
{for(var i = 0, len = gdjs.OpcoesCode.GDOpEfeitosObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpEfeitosObjects1[i].getBehavior("Text").setText("effects     <  " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))) + "  >");
}
}
{for(var i = 0, len = gdjs.OpcoesCode.GDOpEfeitosObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpEfeitosObjects1[i].setCenterPositionInScene(960,540);
}
}
{for(var i = 0, len = gdjs.OpcoesCode.GDOpEfeitosObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpEfeitosObjects1[i].setColor("170;160;175");
}
}
{for(var i = 0, len = gdjs.OpcoesCode.GDOpVoltarObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpVoltarObjects1[i].getBehavior("Text").setText("back");
}
}
{for(var i = 0, len = gdjs.OpcoesCode.GDOpVoltarObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpVoltarObjects1[i].setCenterPositionInScene(960,700);
}
}
{for(var i = 0, len = gdjs.OpcoesCode.GDOpVoltarObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpVoltarObjects1[i].setColor("170;160;175");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OpMusica"), gdjs.OpcoesCode.GDOpMusicaObjects1);
{for(var i = 0, len = gdjs.OpcoesCode.GDOpMusicaObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpMusicaObjects1[i].setColor("234;149;139");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OpEfeitos"), gdjs.OpcoesCode.GDOpEfeitosObjects1);
{for(var i = 0, len = gdjs.OpcoesCode.GDOpEfeitosObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpEfeitosObjects1[i].setColor("234;149;139");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OpVoltar"), gdjs.OpcoesCode.GDOpVoltarObjects1);
{for(var i = 0, len = gdjs.OpcoesCode.GDOpVoltarObjects1.length ;i < len;++i) {
    gdjs.OpcoesCode.GDOpVoltarObjects1[i].setColor("234;149;139");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 1, 3));
}
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_batida_leve.ogg\"", false, 40 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 2, 3));
}
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_batida_leve.ogg\"", false, 40 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) + 10, 100));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) - 10, 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) + 10, 100));
}
{gdjs.evtTools.sound.playSound(runtimeScene, "sauim_guincho_1.ogg\"", false, 70 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) - 10, 0));
}
{gdjs.evtTools.sound.playSound(runtimeScene, "sauim_guincho_1.ogg\"", false, 70 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Escape");
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
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
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

gdjs.OpcoesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpcoesCode.GDFundoObjects1.length = 0;
gdjs.OpcoesCode.GDFundoObjects2.length = 0;
gdjs.OpcoesCode.GDEscuroObjects1.length = 0;
gdjs.OpcoesCode.GDEscuroObjects2.length = 0;
gdjs.OpcoesCode.GDTituloObjects1.length = 0;
gdjs.OpcoesCode.GDTituloObjects2.length = 0;
gdjs.OpcoesCode.GDOpMusicaObjects1.length = 0;
gdjs.OpcoesCode.GDOpMusicaObjects2.length = 0;
gdjs.OpcoesCode.GDOpEfeitosObjects1.length = 0;
gdjs.OpcoesCode.GDOpEfeitosObjects2.length = 0;
gdjs.OpcoesCode.GDOpVoltarObjects1.length = 0;
gdjs.OpcoesCode.GDOpVoltarObjects2.length = 0;
gdjs.OpcoesCode.GDOpDicaObjects1.length = 0;
gdjs.OpcoesCode.GDOpDicaObjects2.length = 0;

gdjs.OpcoesCode.eventsList0(runtimeScene);
gdjs.OpcoesCode.GDFundoObjects1.length = 0;
gdjs.OpcoesCode.GDFundoObjects2.length = 0;
gdjs.OpcoesCode.GDEscuroObjects1.length = 0;
gdjs.OpcoesCode.GDEscuroObjects2.length = 0;
gdjs.OpcoesCode.GDTituloObjects1.length = 0;
gdjs.OpcoesCode.GDTituloObjects2.length = 0;
gdjs.OpcoesCode.GDOpMusicaObjects1.length = 0;
gdjs.OpcoesCode.GDOpMusicaObjects2.length = 0;
gdjs.OpcoesCode.GDOpEfeitosObjects1.length = 0;
gdjs.OpcoesCode.GDOpEfeitosObjects2.length = 0;
gdjs.OpcoesCode.GDOpVoltarObjects1.length = 0;
gdjs.OpcoesCode.GDOpVoltarObjects2.length = 0;
gdjs.OpcoesCode.GDOpDicaObjects1.length = 0;
gdjs.OpcoesCode.GDOpDicaObjects2.length = 0;


return;

}

gdjs['OpcoesCode'] = gdjs.OpcoesCode;
