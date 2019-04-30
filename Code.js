function main() {
  var ss = SpreadsheetApp.create("足し算・引き算");
  var sheet = ss.getActiveSheet();
  sumWork(sheet);
  subWork(sheet);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function sumWork(sheet) {
  var max = 10;
  for (var i=1; i <= 20 ; i++) {
    var cell1 = sheet.getRange("A" + i);
    cell1.setValue(getRandomInt(max));
    cell1.setFontSize(16);
    cell1.setFontWeight("bold");
    cell1.setHorizontalAlignment("center");
    var cell2 = sheet.getRange("B" + i);
    cell2.setValue("＋");
    cell2.setFontSize(16);
    cell2.setFontWeight("bold");
    cell2.setHorizontalAlignment("center");
    var cell3 = sheet.getRange("C" + i);
    cell3.setValue(getRandomInt(max));
    cell3.setFontSize(16);
    cell3.setFontWeight("bold");
    cell3.setHorizontalAlignment("center");
    var cell4 = sheet.getRange("D" + i);
    cell4.setValue("＝");
    cell4.setFontSize(16);
    cell4.setFontWeight("bold");
    cell4.setHorizontalAlignment("center");
  }
}

function subWork(sheet) {
  var max = 10;
  for (var i=1; i <= 20 ; i++) {
    var val1 = getRandomInt(max);
    var val2 = getRandomInt(max);
    var low = val1;
    var high = val2;
    if (val1 > val2) {
      low = val2;
      high = val1;
    }
    var cell1 = sheet.getRange("F" + i);
    cell1.setValue(high);
    cell1.setFontSize(16);
    cell1.setFontWeight("bold");
    cell1.setHorizontalAlignment("center");
    var cell2 = sheet.getRange("G" + i);
    cell2.setValue("ー");
    cell2.setFontSize(16);
    cell2.setFontWeight("bold");
    cell2.setHorizontalAlignment("center");
    var cell3 = sheet.getRange("H" + i);
    cell3.setValue(low);
    cell3.setFontSize(16);
    cell3.setFontWeight("bold");
    cell3.setHorizontalAlignment("center");
    var cell4 = sheet.getRange("I" + i);
    cell4.setValue("＝");
    cell4.setFontSize(16);
    cell4.setFontWeight("bold");
    cell4.setHorizontalAlignment("center");
  }
}
