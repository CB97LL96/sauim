gdjs.AberturaCode = {};
gdjs.AberturaCode.localVariables = [];
gdjs.AberturaCode.idToCallbackMap = new Map();
gdjs.AberturaCode.GDMapaManausObjects1= [];
gdjs.AberturaCode.GDMapaManausObjects2= [];
gdjs.AberturaCode.GDMapaPertoObjects1= [];
gdjs.AberturaCode.GDMapaPertoObjects2= [];
gdjs.AberturaCode.GDFocoObjects1= [];
gdjs.AberturaCode.GDFocoObjects2= [];
gdjs.AberturaCode.GDTracoObjects1= [];
gdjs.AberturaCode.GDTracoObjects2= [];
gdjs.AberturaCode.GDRotuloMinduObjects1= [];
gdjs.AberturaCode.GDRotuloMinduObjects2= [];
gdjs.AberturaCode.GDRotuloDuckeObjects1= [];
gdjs.AberturaCode.GDRotuloDuckeObjects2= [];
gdjs.AberturaCode.GDCalorObjects1= [];
gdjs.AberturaCode.GDCalorObjects2= [];
gdjs.AberturaCode.GDVinhetaObjects1= [];
gdjs.AberturaCode.GDVinhetaObjects2= [];
gdjs.AberturaCode.GDPretoObjects1= [];
gdjs.AberturaCode.GDPretoObjects2= [];
gdjs.AberturaCode.GDFaixaCimaObjects1= [];
gdjs.AberturaCode.GDFaixaCimaObjects2= [];
gdjs.AberturaCode.GDFaixaBaixoObjects1= [];
gdjs.AberturaCode.GDFaixaBaixoObjects2= [];
gdjs.AberturaCode.GDBandaCartaoObjects1= [];
gdjs.AberturaCode.GDBandaCartaoObjects2= [];
gdjs.AberturaCode.GDCartaoObjects1= [];
gdjs.AberturaCode.GDCartaoObjects2= [];
gdjs.AberturaCode.GDPularObjects1= [];
gdjs.AberturaCode.GDPularObjects2= [];
gdjs.AberturaCode.GDCartaoMeioObjects1= [];
gdjs.AberturaCode.GDCartaoMeioObjects2= [];
gdjs.AberturaCode.GDCartaoVermelhoObjects1= [];
gdjs.AberturaCode.GDCartaoVermelhoObjects2= [];
gdjs.AberturaCode.GDContinuarTextoObjects1= [];
gdjs.AberturaCode.GDContinuarTextoObjects2= [];


gdjs.AberturaCode.mapOfGDgdjs_9546AberturaCode_9546GDTracoObjects1Objects = Hashtable.newFrom({"Traco": gdjs.AberturaCode.GDTracoObjects1});
gdjs.AberturaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BandaCartao"), gdjs.AberturaCode.GDBandaCartaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Calor"), gdjs.AberturaCode.GDCalorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cartao"), gdjs.AberturaCode.GDCartaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("CartaoMeio"), gdjs.AberturaCode.GDCartaoMeioObjects1);
gdjs.copyArray(runtimeScene.getObjects("CartaoVermelho"), gdjs.AberturaCode.GDCartaoVermelhoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ContinuarTexto"), gdjs.AberturaCode.GDContinuarTextoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Foco"), gdjs.AberturaCode.GDFocoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pular"), gdjs.AberturaCode.GDPularObjects1);
gdjs.copyArray(runtimeScene.getObjects("RotuloDucke"), gdjs.AberturaCode.GDRotuloDuckeObjects1);
gdjs.copyArray(runtimeScene.getObjects("RotuloMindu"), gdjs.AberturaCode.GDRotuloMinduObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vinheta"), gdjs.AberturaCode.GDVinhetaObjects1);
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Jogo");
}
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDBandaCartaoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDBandaCartaoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDFocoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDFocoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDRotuloMinduObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDRotuloMinduObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDRotuloDuckeObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDRotuloDuckeObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDPularObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDPularObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDCalorObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCalorObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDVinhetaObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDVinhetaObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDRotuloDuckeObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDRotuloDuckeObjects1[i].setCenterPositionInScene(2960,640);
}
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 1520, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 1330, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.2, "", 0);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "amb_passaros_fragmento.ogg\"", false, (70) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "amb_cidade_loop.ogg\"", true, (25) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
{for(var i = 0, len = gdjs.AberturaCode.GDRotuloMinduObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDRotuloMinduObjects1[i].getBehavior("Scale").setScale(0.25);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoMeioObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoMeioObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoVermelhoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoVermelhoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDContinuarTextoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDContinuarTextoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 0.75);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Preto"), gdjs.AberturaCode.GDPretoObjects1);
{for(var i = 0, len = gdjs.AberturaCode.GDPretoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDPretoObjects1[i].getBehavior("Opacity").setOpacity(255 * Math.max(1 - gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 1.82) / 0.98, 0, 1), gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 12.18) / 0.7, 0, 1)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 6.44);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 1520, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 1330, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.2 + 0.3 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 1.96) / 4.48, 0, 1), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 6.44);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 10.64);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(1520, 2250, (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.44) / 3.92, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.44) / 3.92, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.44) / 3.92, 0, 1)))), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(1330, 860, (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.44) / 3.92, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.44) / 3.92, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.44) / 3.92, 0, 1)))), "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.5 * Math.pow(0.75 / 2.5, (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.44) / 3.92, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.44) / 3.92, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.44) / 3.92, 0, 1)))), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 10.64);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(2250, 1520, (1 - Math.pow(1 - gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.64) / 2.1, 0, 1), 3))) + gdjs.randomFloatInRange(-1, 1) * 6 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.64) / 2.1, 0, 1), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(860, 1330, (1 - Math.pow(1 - gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.64) / 2.1, 0, 1), 3))) + gdjs.randomFloatInRange(-1, 1) * 6 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.64) / 2.1, 0, 1), "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.75 * Math.pow(12 / 0.75, (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.64) / 2.1, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.64) / 2.1, 0, 1))), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 34 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.86) / 2.94, 0, 1));
}
if (isConditionTrue_0) {
gdjs.AberturaCode.GDTracoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.AberturaCode.mapOfGDgdjs_9546AberturaCode_9546GDTracoObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.AberturaCode.GDTracoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDTracoObjects1[i].setCenterPositionInScene(1520 + 1440 * (0.026 + 0.6739999999999999 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) + 0.5) / 34),1330 + -690 * (0.026 + 0.6739999999999999 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) + 0.5) / 34));
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDTracoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDTracoObjects1[i].setAngle(-25.6);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDTracoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDTracoObjects1[i].setZOrder(5);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 7);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Foco"), gdjs.AberturaCode.GDFocoObjects1);
{for(var i = 0, len = gdjs.AberturaCode.GDFocoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDFocoObjects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 7 - (gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(0)))) / 1, 0, 1) * (0.82 + 0.18 * Math.sin(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 9 + (gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(0))) * 7)));
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDFocoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDFocoObjects1[i].getBehavior("Resizable").setSize((gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(1))) * (0.3 + 0.7 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 7 - (gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(0)))) / 1, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 7 - (gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(0)))) / 1, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 7 - (gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(0)))) / 1, 0, 1)))) * (1 + 0.06 * Math.sin(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 7 + (gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(0))) * 5)), (gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(1))) * (0.3 + 0.7 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 7 - (gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(0)))) / 1, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 7 - (gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(0)))) / 1, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 7 - (gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(0)))) / 1, 0, 1)))) * (1 + 0.06 * Math.sin(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 7 + (gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(0))) * 5)));
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDFocoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDFocoObjects1[i].setCenterPositionInScene((gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(2))),(gdjs.RuntimeObject.getVariableNumber(gdjs.AberturaCode.GDFocoObjects1[i].getVariables().getFromIndex(3))));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Calor"), gdjs.AberturaCode.GDCalorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vinheta"), gdjs.AberturaCode.GDVinhetaObjects1);
{for(var i = 0, len = gdjs.AberturaCode.GDCalorObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCalorObjects1[i].getBehavior("Opacity").setOpacity(60 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 7.28) / 3.08, 0, 1));
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDVinhetaObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDVinhetaObjects1[i].getBehavior("Opacity").setOpacity(255 * Math.max(0.35 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 7.84) / 2.52, 0, 1), gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.64) / 1.68, 0, 1)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RotuloDucke"), gdjs.AberturaCode.GDRotuloDuckeObjects1);
gdjs.copyArray(runtimeScene.getObjects("RotuloMindu"), gdjs.AberturaCode.GDRotuloMinduObjects1);
{for(var i = 0, len = gdjs.AberturaCode.GDRotuloMinduObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDRotuloMinduObjects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 3.08) / 0.84, 0, 1) * (1 - gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.64) / 0.56, 0, 1)));
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDRotuloDuckeObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDRotuloDuckeObjects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 8.68) / 0.84, 0, 1) * (1 - gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.92) / 0.56, 0, 1)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 6.65);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16085684);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cartao"), gdjs.AberturaCode.GDCartaoObjects1);
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoObjects1[i].getBehavior("Text").setText("Manaus, Amazon." + gdjs.evtTools.string.newLine() + "The sauim lives here" + gdjs.evtTools.string.newLine() + "and nowhere else on Earth.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 6.65);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 10.85);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16086556);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cartao"), gdjs.AberturaCode.GDCartaoObjects1);
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoObjects1[i].getBehavior("Text").setText("Its forest is now islands" + gdjs.evtTools.string.newLine() + "between streets." + gdjs.evtTools.string.newLine() + "This dry season," + gdjs.evtTools.string.newLine() + "the islands are burning.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 10.85);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16088300);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CartaoMeio"), gdjs.AberturaCode.GDCartaoMeioObjects1);
gdjs.copyArray(runtimeScene.getObjects("CartaoVermelho"), gdjs.AberturaCode.GDCartaoVermelhoObjects1);
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoMeioObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoMeioObjects1[i].getBehavior("Text").setText("When the forest burns, everyone runs the same way.");
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoVermelhoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoVermelhoObjects1[i].getBehavior("Text").setText("Keep the little one alive.");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BandaCartao"), gdjs.AberturaCode.GDBandaCartaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cartao"), gdjs.AberturaCode.GDCartaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("CartaoMeio"), gdjs.AberturaCode.GDCartaoMeioObjects1);
gdjs.copyArray(runtimeScene.getObjects("CartaoVermelho"), gdjs.AberturaCode.GDCartaoVermelhoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ContinuarTexto"), gdjs.AberturaCode.GDContinuarTextoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pular"), gdjs.AberturaCode.GDPularObjects1);
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoObjects1[i].getBehavior("Opacity").setOpacity(255 * Math.max(gdjs.evtTools.common.clamp(Math.min((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 2.52) / 0.4, (6.44 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) / 0.4), 0, 1), gdjs.evtTools.common.clamp(Math.min((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 6.93) / 0.4, (10.64 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) / 0.4), 0, 1)));
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoMeioObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoMeioObjects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 11.06) / 0.4, 0, 1));
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoVermelhoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoVermelhoObjects1[i].getBehavior("Opacity").setOpacity(255 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 11.9) / 0.5, 0, 1));
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDBandaCartaoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDBandaCartaoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoObjects1[i].setPosition(100,70);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoMeioObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoMeioObjects1[i].setCenterPositionInScene(960,470);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDCartaoVermelhoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDCartaoVermelhoObjects1[i].setCenterPositionInScene(960,600);
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDPularObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDPularObjects1[i].getBehavior("Opacity").setOpacity(150 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 0.6) / 0.5, 0, 1));
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDContinuarTextoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDContinuarTextoObjects1[i].getBehavior("Opacity").setOpacity(210 * gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 14.8) / 0.6, 0, 1) * (0.65 + 0.35 * Math.sin(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 6)));
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDContinuarTextoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDContinuarTextoObjects1[i].setCenterPositionInScene(960,900);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FaixaBaixo"), gdjs.AberturaCode.GDFaixaBaixoObjects1);
gdjs.copyArray(runtimeScene.getObjects("FaixaCima"), gdjs.AberturaCode.GDFaixaCimaObjects1);
{for(var i = 0, len = gdjs.AberturaCode.GDFaixaCimaObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDFaixaCimaObjects1[i].setY(-140 + 140 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.92) / 1.68, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.92) / 1.68, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.92) / 1.68, 0, 1))));
}
}
{for(var i = 0, len = gdjs.AberturaCode.GDFaixaBaixoObjects1.length ;i < len;++i) {
    gdjs.AberturaCode.GDFaixaBaixoObjects1[i].setY(1080 - 140 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.92) / 1.68, 0, 1)) * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.92) / 1.68, 0, 1)) * (3 - 2 * (gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) - 10.92) / 1.68, 0, 1))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16094084);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "sauim_guincho_1.ogg\"", false, (80) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 6.58);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16095140);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "amb_fogo_longe_loop.ogg\"", true, (50) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 10.64);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16096284);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_coracao.ogg\"", false, (75) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 11.2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16097228);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "sauim_guincho_2.ogg\"", false, (90) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 15.3);
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
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 14.84);
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
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
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
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(15.0);
}
}

}


};

gdjs.AberturaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AberturaCode.GDMapaManausObjects1.length = 0;
gdjs.AberturaCode.GDMapaManausObjects2.length = 0;
gdjs.AberturaCode.GDMapaPertoObjects1.length = 0;
gdjs.AberturaCode.GDMapaPertoObjects2.length = 0;
gdjs.AberturaCode.GDFocoObjects1.length = 0;
gdjs.AberturaCode.GDFocoObjects2.length = 0;
gdjs.AberturaCode.GDTracoObjects1.length = 0;
gdjs.AberturaCode.GDTracoObjects2.length = 0;
gdjs.AberturaCode.GDRotuloMinduObjects1.length = 0;
gdjs.AberturaCode.GDRotuloMinduObjects2.length = 0;
gdjs.AberturaCode.GDRotuloDuckeObjects1.length = 0;
gdjs.AberturaCode.GDRotuloDuckeObjects2.length = 0;
gdjs.AberturaCode.GDCalorObjects1.length = 0;
gdjs.AberturaCode.GDCalorObjects2.length = 0;
gdjs.AberturaCode.GDVinhetaObjects1.length = 0;
gdjs.AberturaCode.GDVinhetaObjects2.length = 0;
gdjs.AberturaCode.GDPretoObjects1.length = 0;
gdjs.AberturaCode.GDPretoObjects2.length = 0;
gdjs.AberturaCode.GDFaixaCimaObjects1.length = 0;
gdjs.AberturaCode.GDFaixaCimaObjects2.length = 0;
gdjs.AberturaCode.GDFaixaBaixoObjects1.length = 0;
gdjs.AberturaCode.GDFaixaBaixoObjects2.length = 0;
gdjs.AberturaCode.GDBandaCartaoObjects1.length = 0;
gdjs.AberturaCode.GDBandaCartaoObjects2.length = 0;
gdjs.AberturaCode.GDCartaoObjects1.length = 0;
gdjs.AberturaCode.GDCartaoObjects2.length = 0;
gdjs.AberturaCode.GDPularObjects1.length = 0;
gdjs.AberturaCode.GDPularObjects2.length = 0;
gdjs.AberturaCode.GDCartaoMeioObjects1.length = 0;
gdjs.AberturaCode.GDCartaoMeioObjects2.length = 0;
gdjs.AberturaCode.GDCartaoVermelhoObjects1.length = 0;
gdjs.AberturaCode.GDCartaoVermelhoObjects2.length = 0;
gdjs.AberturaCode.GDContinuarTextoObjects1.length = 0;
gdjs.AberturaCode.GDContinuarTextoObjects2.length = 0;

gdjs.AberturaCode.eventsList0(runtimeScene);
gdjs.AberturaCode.GDMapaManausObjects1.length = 0;
gdjs.AberturaCode.GDMapaManausObjects2.length = 0;
gdjs.AberturaCode.GDMapaPertoObjects1.length = 0;
gdjs.AberturaCode.GDMapaPertoObjects2.length = 0;
gdjs.AberturaCode.GDFocoObjects1.length = 0;
gdjs.AberturaCode.GDFocoObjects2.length = 0;
gdjs.AberturaCode.GDTracoObjects1.length = 0;
gdjs.AberturaCode.GDTracoObjects2.length = 0;
gdjs.AberturaCode.GDRotuloMinduObjects1.length = 0;
gdjs.AberturaCode.GDRotuloMinduObjects2.length = 0;
gdjs.AberturaCode.GDRotuloDuckeObjects1.length = 0;
gdjs.AberturaCode.GDRotuloDuckeObjects2.length = 0;
gdjs.AberturaCode.GDCalorObjects1.length = 0;
gdjs.AberturaCode.GDCalorObjects2.length = 0;
gdjs.AberturaCode.GDVinhetaObjects1.length = 0;
gdjs.AberturaCode.GDVinhetaObjects2.length = 0;
gdjs.AberturaCode.GDPretoObjects1.length = 0;
gdjs.AberturaCode.GDPretoObjects2.length = 0;
gdjs.AberturaCode.GDFaixaCimaObjects1.length = 0;
gdjs.AberturaCode.GDFaixaCimaObjects2.length = 0;
gdjs.AberturaCode.GDFaixaBaixoObjects1.length = 0;
gdjs.AberturaCode.GDFaixaBaixoObjects2.length = 0;
gdjs.AberturaCode.GDBandaCartaoObjects1.length = 0;
gdjs.AberturaCode.GDBandaCartaoObjects2.length = 0;
gdjs.AberturaCode.GDCartaoObjects1.length = 0;
gdjs.AberturaCode.GDCartaoObjects2.length = 0;
gdjs.AberturaCode.GDPularObjects1.length = 0;
gdjs.AberturaCode.GDPularObjects2.length = 0;
gdjs.AberturaCode.GDCartaoMeioObjects1.length = 0;
gdjs.AberturaCode.GDCartaoMeioObjects2.length = 0;
gdjs.AberturaCode.GDCartaoVermelhoObjects1.length = 0;
gdjs.AberturaCode.GDCartaoVermelhoObjects2.length = 0;
gdjs.AberturaCode.GDContinuarTextoObjects1.length = 0;
gdjs.AberturaCode.GDContinuarTextoObjects2.length = 0;


return;

}

gdjs['AberturaCode'] = gdjs.AberturaCode;
