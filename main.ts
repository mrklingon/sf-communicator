input.onButtonPressed(Button.A, function () {
    lang += 1
    if (lang > 2) {
        lang = 0
    }
    basic.showString("" + (langs[lang]))
})
input.onButtonPressed(Button.AB, function () {
    if (lang == 0) {
        radio.sendString("" + (klist[kvoc]))
    }
    if (lang == 1) {
        radio.sendString("" + (mlist[kvoc]))
    }
    if (lang == 2) {
        radio.sendString("" + (nlist[kvoc]))
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    kvoc += 1
    if (kvoc >= klist.length) {
        kvoc = 0
    }
    basic.showString("" + (elist[kvoc]))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (elist[kvoc]))
})
let langs: string[] = []
let elist: string[] = []
let klist: string[] = []
let mlist: string[] = []
let nlist: string[] = []
let kvoc = 0
let lang = 0
let mvoc = 0
radio.setGroup(25)
lang = 2
kvoc = 0
nlist = ["yawne", "kaltxi", "tawsip", "'eylan", "kelku", "safla", "tiyora'", "'itan", "'ite", "'ipu", "uvan", "syure", "yom"]
mlist = ["cyare", "Sucuy'gar", "me'sen", "burc'ya", "yaim", "bralov", "parjai", "ad", "ad", "nuh'la", "geroya", "kai'tome", "epar"]
klist = ["bang", "nuqneH", "'ejDo'", "jup ", "juH", "Qapla'", "yay", "puqloD", "puqbe'", "tlhaq", "Quj", "Soj", "Sop"]
elist = ["beloved", "hello", "starship", "friend", "home", "success", "victory", "son", "daughter", "funny", "game", "food", "eat"]
langs = ["K", "M", "N"]
