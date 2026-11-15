gdjs.FinalCode = {};
gdjs.FinalCode.localVariables = [];
gdjs.FinalCode.idToCallbackMap = new Map();
gdjs.FinalCode.GDMapaManausObjects1= [];
gdjs.FinalCode.GDMapaManausObjects2= [];
gdjs.FinalCode.GDMapaDuckeObjects1= [];
gdjs.FinalCode.GDMapaDuckeObjects2= [];
gdjs.FinalCode.GDBrotoObjects1= [];
gdjs.FinalCode.GDBrotoObjects2= [];
gdjs.FinalCode.GDTracoVerdeObjects1= [];
gdjs.FinalCode.GDTracoVerdeObjects2= [];
gdjs.FinalCode.GDGotaObjects1= [];
gdjs.FinalCode.GDGotaObjects2= [];
gdjs.FinalCode.GDPretoObjects1= [];
gdjs.FinalCode.GDPretoObjects2= [];
gdjs.FinalCode.GDPalavraObjects1= [];
gdjs.FinalCode.GDPalavraObjects2= [];
gdjs.FinalCode.GDFato1Objects1= [];
gdjs.FinalCode.GDFato1Objects2= [];
gdjs.FinalCode.GDFato2Objects1= [];
gdjs.FinalCode.GDFato2Objects2= [];
gdjs.FinalCode.GDFato3Objects1= [];
gdjs.FinalCode.GDFato3Objects2= [];
gdjs.FinalCode.GDLogoObjects1= [];
gdjs.FinalCode.GDLogoObjects2= [];
gdjs.FinalCode.GDObrigadoObjects1= [];
gdjs.FinalCode.GDObrigadoObjects2= [];
gdjs.FinalCode.GDCreditosObjects1= [];
gdjs.FinalCode.GDCreditosObjects2= [];
gdjs.FinalCode.GDVoltarObjects1= [];
gdjs.FinalCode.GDVoltarObjects2= [];


gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDGotaObjects1Objects = Hashtable.newFrom({"Gota": gdjs.FinalCode.GDGotaObjects1});
gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDGotaObjects1Objects = Hashtable.newFrom({"Gota": gdjs.FinalCode.GDGotaObjects1});
gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDGotaObjects1Objects = Hashtable.newFrom({"Gota": gdjs.FinalCode.GDGotaObjects1});
gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDTracoVerdeObjects1Objects = Hashtable.newFrom({"TracoVerde": gdjs.FinalCode.GDTracoVerdeObjects1});
gdjs.FinalCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Broto"), gdjs.FinalCode.GDBrotoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Creditos"), gdjs.FinalCode.GDCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fato1"), gdjs.FinalCode.GDFato1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fato2"), gdjs.FinalCode.GDFato2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fato3"), gdjs.FinalCode.GDFato3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.FinalCode.GDLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obrigado"), gdjs.FinalCode.GDObrigadoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Palavra"), gdjs.FinalCode.GDPalavraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.FinalCode.GDVoltarObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDPalavraObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPalavraObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDFato1Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDFato1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDFato2Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDFato2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDFato3Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDFato3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDLogoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDObrigadoObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDObrigadoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDCreditosObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDCreditosObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDVoltarObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDVoltarObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDBrotoObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDBrotoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDFato1Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDFato1Objects1[i].setCenterXInScene(960);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDFato2Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDFato2Objects1[i].setCenterXInScene(960);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDFato3Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDFato3Objects1[i].setCenterXInScene(960);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDObrigadoObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDObrigadoObjects1[i].setCenterXInScene(960);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDCreditosObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDCreditosObjects1[i].setCenterXInScene(960);
}
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 2960, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 640, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.4, "", 0);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "fim_chuva.ogg\"", false, (85) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "fim_fogo_chia.ogg\"", false, (60) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
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
{
gdjs.copyArray(runtimeScene.getObjects("Preto"), gdjs.FinalCode.GDPretoObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDPretoObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPretoObjects1[i].getBehavior("Opacity").setOpacity(255 * Math.max(1 - gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 0.8) / 1, 0, 1), gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 13) / 0.8, 0, 1)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(2960, 1920, (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.5) / 6, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.5) / 6, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.5) / 6, 0, 1)))), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(640, 1080, (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.5) / 6, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.5) / 6, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.5) / 6, 0, 1)))), "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.4 * Math.pow(0.5 / 2.4, (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.5) / 6, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.5) / 6, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.5) / 6, 0, 1)))), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 13);
}
if (isConditionTrue_0) {
gdjs.FinalCode.GDGotaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDGotaObjects1Objects, gdjs.randomFloatInRange(-200, 1920), gdjs.randomFloatInRange(-80, -20), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDGotaObjects1Objects, gdjs.randomFloatInRange(-200, 1920), gdjs.randomFloatInRange(-80, -20), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDGotaObjects1Objects, gdjs.randomFloatInRange(-200, 1920), gdjs.randomFloatInRange(-80, -20), "");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gota"), gdjs.FinalCode.GDGotaObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDGotaObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGotaObjects1[i].setY(gdjs.FinalCode.GDGotaObjects1[i].getY() + (1900 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDGotaObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGotaObjects1[i].setX(gdjs.FinalCode.GDGotaObjects1[i].getX() + (330 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDGotaObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGotaObjects1[i].setAngle(-10);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDGotaObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGotaObjects1[i].setZOrder(80);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDGotaObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGotaObjects1[i].getBehavior("Opacity").setOpacity(140 * (1 - gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10) / 3, 0, 1)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gota"), gdjs.FinalCode.GDGotaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDGotaObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDGotaObjects1[i].getY() > 1150 ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDGotaObjects1[k] = gdjs.FinalCode.GDGotaObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDGotaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FinalCode.GDGotaObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDGotaObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGotaObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 4.4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16197644);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Palavra"), gdjs.FinalCode.GDPalavraObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDPalavraObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPalavraObjects1[i].getBehavior("Text").setText("Rain.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 4.4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16198740);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Palavra"), gdjs.FinalCode.GDPalavraObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDPalavraObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPalavraObjects1[i].getBehavior("Text").setText("Home.");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Palavra"), gdjs.FinalCode.GDPalavraObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDPalavraObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPalavraObjects1[i].getBehavior("Opacity").setOpacity(255 * Math.max(gdjs.evtTools.common.clamp(Math.min((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 1.8) / 0.6, (4.2 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) / 0.6), 0, 1), gdjs.evtTools.common.clamp(Math.min((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 4.6) / 0.6, (7.2 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) / 0.6), 0, 1)));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDPalavraObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPalavraObjects1[i].setCenterPositionInScene(960,520);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 52 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 7.5) / 3.5, 0, 1));
}
if (isConditionTrue_0) {
gdjs.FinalCode.GDTracoVerdeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDTracoVerdeObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.FinalCode.GDTracoVerdeObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDTracoVerdeObjects1[i].setCenterPositionInScene(1520 + 1440 * (0.0 + 0.72 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) + 0.5) / 52),1330 + -690 * (0.0 + 0.72 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) + 0.5) / 52));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDTracoVerdeObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDTracoVerdeObjects1[i].setAngle(-25.6);
}
}
{for(var i = 0, len = gdjs.FinalCode.GDTracoVerdeObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDTracoVerdeObjects1[i].setZOrder(6);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Broto"), gdjs.FinalCode.GDBrotoObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDBrotoObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDBrotoObjects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 8 - (gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(0)))) / 1.4, 0, 1));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDBrotoObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDBrotoObjects1[i].getBehavior("Resizable").setSize((gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(1))) * (0.3 + 0.7 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 8 - (gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(0)))) / 1.4, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 8 - (gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(0)))) / 1.4, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 8 - (gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(0)))) / 1.4, 0, 1)))) * (1 + 0 * Math.sin(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 7 + (gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(0))) * 5)), (gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(1))) * (0.3 + 0.7 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 8 - (gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(0)))) / 1.4, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 8 - (gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(0)))) / 1.4, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 8 - (gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(0)))) / 1.4, 0, 1)))) * (1 + 0 * Math.sin(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 7 + (gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(0))) * 5)));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDBrotoObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDBrotoObjects1[i].setCenterPositionInScene((gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(2))),(gdjs.RuntimeObject.getVariableNumber(gdjs.FinalCode.GDBrotoObjects1[i].getVariables().getFromIndex(3))));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Creditos"), gdjs.FinalCode.GDCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fato1"), gdjs.FinalCode.GDFato1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fato2"), gdjs.FinalCode.GDFato2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fato3"), gdjs.FinalCode.GDFato3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.FinalCode.GDLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obrigado"), gdjs.FinalCode.GDObrigadoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.FinalCode.GDVoltarObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDFato1Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDFato1Objects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp(Math.min((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 14.3) / 0.7, (21.6 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) / 0.7), 0, 1));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDFato2Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDFato2Objects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp(Math.min((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 15.8) / 0.7, (21.6 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) / 0.7), 0, 1));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDFato3Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDFato3Objects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp(Math.min((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 17.3) / 0.7, (21.6 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) / 0.7), 0, 1));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDLogoObjects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp(Math.min((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 22.2) / 0.8, (27 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) / 0.8), 0, 1));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDObrigadoObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDObrigadoObjects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp(Math.min((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 23.2) / 0.8, (27 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) / 0.8), 0, 1));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDCreditosObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDCreditosObjects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 27.6) / 0.8, 0, 1));
}
}
{for(var i = 0, len = gdjs.FinalCode.GDVoltarObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDVoltarObjects1[i].getBehavior("Opacity").setOpacity(150 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 29) / 0.6, 0, 1));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 4.4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16207996);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "fim_chamado_sauins.ogg\"", false, (85) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16208068);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mus_final.ogg\"", false, (70) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 1.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 13.8);
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
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(13.8);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 14);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 21.8);
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
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(21.8);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 22);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 27.3);
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
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(27.3);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 28.5);
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


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 45);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


};

gdjs.FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalCode.GDMapaManausObjects1.length = 0;
gdjs.FinalCode.GDMapaManausObjects2.length = 0;
gdjs.FinalCode.GDMapaDuckeObjects1.length = 0;
gdjs.FinalCode.GDMapaDuckeObjects2.length = 0;
gdjs.FinalCode.GDBrotoObjects1.length = 0;
gdjs.FinalCode.GDBrotoObjects2.length = 0;
gdjs.FinalCode.GDTracoVerdeObjects1.length = 0;
gdjs.FinalCode.GDTracoVerdeObjects2.length = 0;
gdjs.FinalCode.GDGotaObjects1.length = 0;
gdjs.FinalCode.GDGotaObjects2.length = 0;
gdjs.FinalCode.GDPretoObjects1.length = 0;
gdjs.FinalCode.GDPretoObjects2.length = 0;
gdjs.FinalCode.GDPalavraObjects1.length = 0;
gdjs.FinalCode.GDPalavraObjects2.length = 0;
gdjs.FinalCode.GDFato1Objects1.length = 0;
gdjs.FinalCode.GDFato1Objects2.length = 0;
gdjs.FinalCode.GDFato2Objects1.length = 0;
gdjs.FinalCode.GDFato2Objects2.length = 0;
gdjs.FinalCode.GDFato3Objects1.length = 0;
gdjs.FinalCode.GDFato3Objects2.length = 0;
gdjs.FinalCode.GDLogoObjects1.length = 0;
gdjs.FinalCode.GDLogoObjects2.length = 0;
gdjs.FinalCode.GDObrigadoObjects1.length = 0;
gdjs.FinalCode.GDObrigadoObjects2.length = 0;
gdjs.FinalCode.GDCreditosObjects1.length = 0;
gdjs.FinalCode.GDCreditosObjects2.length = 0;
gdjs.FinalCode.GDVoltarObjects1.length = 0;
gdjs.FinalCode.GDVoltarObjects2.length = 0;

gdjs.FinalCode.eventsList0(runtimeScene);
gdjs.FinalCode.GDMapaManausObjects1.length = 0;
gdjs.FinalCode.GDMapaManausObjects2.length = 0;
gdjs.FinalCode.GDMapaDuckeObjects1.length = 0;
gdjs.FinalCode.GDMapaDuckeObjects2.length = 0;
gdjs.FinalCode.GDBrotoObjects1.length = 0;
gdjs.FinalCode.GDBrotoObjects2.length = 0;
gdjs.FinalCode.GDTracoVerdeObjects1.length = 0;
gdjs.FinalCode.GDTracoVerdeObjects2.length = 0;
gdjs.FinalCode.GDGotaObjects1.length = 0;
gdjs.FinalCode.GDGotaObjects2.length = 0;
gdjs.FinalCode.GDPretoObjects1.length = 0;
gdjs.FinalCode.GDPretoObjects2.length = 0;
gdjs.FinalCode.GDPalavraObjects1.length = 0;
gdjs.FinalCode.GDPalavraObjects2.length = 0;
gdjs.FinalCode.GDFato1Objects1.length = 0;
gdjs.FinalCode.GDFato1Objects2.length = 0;
gdjs.FinalCode.GDFato2Objects1.length = 0;
gdjs.FinalCode.GDFato2Objects2.length = 0;
gdjs.FinalCode.GDFato3Objects1.length = 0;
gdjs.FinalCode.GDFato3Objects2.length = 0;
gdjs.FinalCode.GDLogoObjects1.length = 0;
gdjs.FinalCode.GDLogoObjects2.length = 0;
gdjs.FinalCode.GDObrigadoObjects1.length = 0;
gdjs.FinalCode.GDObrigadoObjects2.length = 0;
gdjs.FinalCode.GDCreditosObjects1.length = 0;
gdjs.FinalCode.GDCreditosObjects2.length = 0;
gdjs.FinalCode.GDVoltarObjects1.length = 0;
gdjs.FinalCode.GDVoltarObjects2.length = 0;


return;

}

gdjs['FinalCode'] = gdjs.FinalCode;
