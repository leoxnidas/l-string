#!/usr/bin/env node
//here are some usefull test

var string = require("../lib/string");

/*
console.log(string.multiply() + "leonardo")
console.log(string.multiply(1, -1) + "leonardo")
console.log(string.multiply(1, 5) + "leonardo")

console.log(string.isUpper())
console.log(string.isUpper("leonardo"))
console.log(string.isUpper("LEONARDO"))

console.log(string.isLower("leonardo"))
console.log(string.isLower("LEONARDO"))

console.log(string.isAlpha("leonardo !@#"))
console.log(string.isAlpha("leonardo Esparis"))

console.log(string.isDigit("123"))
console.log(string.isDigit("asd"))
console.log(string.isDigit("!@#"))
console.log(string.isDigit())

console.log(string.isAlphanumeric("asd12"))
console.log(string.isAlphanumeric("asd"))
console.log(string.isAlphanumeric("12"))
console.log(string.isAlphanumeric("!@#"))

console.log(string.isSpace("!@#"))
console.log(string.isSpace("asd"))
console.log(string.isSpace("123"))
console.log(string.isSpace("!@#qsd123"))
console.log(string.isSpace(" "))

console.log(string.isEmpty("  "));
console.log(string.isEmpty("asd"));
console.log(string.isEmpty("1231Asd"));
console.log(string.isEmpty("!@asd"));


console.log(string.lSlice("leonardo",0,3)); 
console.log(string.lSlice("leonardo", 1)); 
console.log(string.lSlice("leonardo")); 

console.log(string.rSlice());
console.log(string.rSlice(987654321));
console.log(string.rSlice(987654321,1));
console.log(string.rSlice(987654321,2));
console.log(string.rSlice(987654321,3));
console.log(string.rSlice(987654321,"4"));
console.log(string.rSlice(987654321,0,1));
console.log(string.rSlice("leonardo",0,2));

console.log(string.getSize(154654));

console.log("0 ==> " + string.dummyCount("leonardo", "onar", 0, 5));
console.log("1 ==> " + string.dummyCount("leonardo leonardo", "do"));
console.log("2 ==> " + string.dummyCount("leonardo leonardo", "do", 4));
console.log("3 ==> " + string.dummyCount("leonardo leonardo", "do", "as"));
console.log("4 ==> " + string.dummyCount("leonardo leonardo", "do", "as", 8));
console.log("5 ==> " + string.dummyCount("leonardo leonardo", "do", 0 , 8));
console.log("6 ==> " + string.dummyCount("leonardo", "eo", 0, 2));
console.log("7 ==> " + string.dummyCount("leonardo", "eo"));
console.log("8 ==> " + string.dummyCount("leonardo", "o"));
console.log("9 ==> " + string.dummyCount("leonardo", "o", 3));
console.log("10 ==> " + string.dummyCount("leonardo", "o", 2, "a"));
console.log("11 ==> " + string.dummyCount("leonardo", "o", "A", 1));
console.log("12 ==> " + string.dummyCount("leonardo", "o", "A", "a"));
console.log("13 ==> " + string.dummyCount("leonardo"));
console.log("14 ==> " + string.dummyCount());

console.log(string.getUpper("leonardo"));
console.log(string.getUpper());

console.log(string.getLower("ESPARIS"));
console.log(string.getLower());

console.log(string.capitalize("Leonardo Esparis"));
console.log(string.capitalize("lEONARDO ESPARIS MEZA"));
console.log(string.capitalize());

console.log(string.getCharPosition("Leonardo Esparis", "i"));
console.log(string.getCharPosition("Leonardo Esparis", "o"));
console.log(string.getCharPosition("Leonardo Esparis"));
console.log(string.getCharPosition());

console.log(string.reverse("leonardo"));
console.log(string.reverse("leonardo javier esparis meza"));
console.log(string.reverse());

console.log(string.title("leONArdo esPAris"));
console.log(string.title());

console.log(string.lSplit("leonardo", "o"))
console.log(string.lSplit("leonardo", "o", 1))
console.log(string.lSplit("leonardo", 1))
console.log(string.lSplit("leonardo", 1, 1))

console.log(string.rSplit("leonardo", 1))
console.log(string.rSplit("leonardo", "o", 1))
console.log(string.rSplit("leonardo leonardo", "eo" ))
console.log(string.rSplit("leonardo leonardo", "eo", 1))

console.log(string.isSubString("leonardo", "nar"));
console.log(string.isSubString("leonardo", "te"));
console.log(string.isSubString("leonardo"));
console.log(string.isSubString());

console.log(string.startsWith());
console.log(string.startsWith("leonardo"));
console.log(string.startsWith("leonardo", "nar"));
console.log(string.startsWith("leonardo", "leo"));

console.log(string.endsWith("leonardo", "do"));
console.log(string.endsWith("leonardo", "leo"));
console.log(string.endsWith("leonardo"));
console.log(string.endsWith());

console.log(string.swapCase("leonardo ESPARIS MeZa"));
console.log(string.swapCase());

console.log(string.trim("           Real                     Madrid               "));
console.log(string.trim("leonardo esparis meza"));
console.log(string.trim("leonardo"));
console.log(string.trim());

console.log(string.rConCat());
console.log(string.rConCat("leonardo esparis meza"));
console.log(string.rConCat("leonardo esparis meza", "123123"));

console.log(string.lConCat());
console.log(string.lConCat("leonardo esparis meza"));
console.log(string.lConCat("leonardo esparis meza", "123123"));

console.log(string.lReplace());
console.log(string.lReplace("leonardo"));
console.log(string.lReplace("leonardo", "o"));
console.log(string.lReplace("leonardo", "o"));
console.log(string.rReplace("lASDeASDoASD", "ASD", ""));
console.log(string.lReplace("leonardo esparis meza", "nardo", "!@#"));
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 1));
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 2));
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 3));

console.log(string.rReplace());
console.log(string.rReplace("leonardo"));
console.log(string.rReplace("leonardo", "o"));
console.log(string.rReplace("leonardo", "o", "123", 1));
console.log(string.rReplace("leonardo", "o", "123"));
console.log(string.rReplace("leonardo esparis meza", "e", "!@#", 1));
console.log(string.rReplace("leonardo esparis meza", "e", "!@#", 2));
console.log(string.rReplace("leonardo!@#@$%^&!@#@$%^&Esparis!@#@$%^&meza!@#@$%^&", "!@#@$%^&", ""));

console.log(string.join("-", "leonardo"))  
console.log(string.join("-", [1,2,3]))  
console.log(string.join("##", [1,2,3])) 
console.log(string.join("ASD", [1,2,3]))
console.log(string.join("!!!!", [1,2,3,4,5,6,7,8,9,10,11,12,13,14]))

console.log("hi" + string.center("leonardo") + "hi");
console.log("hi" + string.center("leonardo", 10) + "hi");
console.log("hi" + string.center() + "hi");

console.log("hi" + string.lJust("leonardo"));
console.log("hi" + string.lJust("leonardo", 10));
console.log("hi" + string.lJust());

console.log(string.rJust("leonardo") + "hi");
console.log(string.rJust("leonardo", 5) + "hi");
console.log(string.rJust() + "hi");

console.log(string.escape("leonardo\' has become bigger & .."));
console.log(string.escape("<>\'\""));
console.log(string.escape());

console.log(string.slugify("leonardo esparis"));
console.log(string.slugify(""));
console.log(string.slugify());

console.log(string.dummyAddTag("leonardo esparis", "html"));
console.log(string.dummyAddTag(
								string.dummyAddTag(
													string.dummyAddTag("leonardo esparis", "p"), 
													"body"), 
								"html")); 

console.log(string.dummyRemoveTag(string.dummyAddTag("leonardo esparis", "html"), "html"));
console.log(string.dummyRemoveTag("<p>leonardo esparis was here</p>"));
console.log(string.dummyRemoveTag("<h1>leonardo esparis was here</h1>"));
console.log(string.dummyRemoveTag("<1>leonardo esparis was here</1>"));

console.log(string.delete("leonardo", "o"))
console.log(string.delete("leonardo", "onar"))

console.log(string.insert("leonardo", "o", 0))
console.log(string.insert("leonardo", "o", 1))
console.log(string.insert("leonardo", "o", 2))
console.log(string.insert("leonardo", "o", 3))
console.log(string.insert("leonardo", "o", 4))
console.log(string.insert("leonardo", "o", 5))
console.log(string.insert("leonardo", "o", 6))
console.log(string.insert("leonardo", "o", 7))
console.log(string.insert("leonardo", "o"))
console.log(string.insert("leonardo", "o", 8))


console.log(string.toCharArray("leonardo javier esparis meza {'name':'leonardo'}"))

*/