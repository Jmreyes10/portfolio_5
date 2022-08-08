var fontColorArray = ["red", "blue", "green"];
var bgColorArray = ["", "red", "green", "blue"];


// Change Font Color //
function changeColor() {
    const radioButtons = document.querySelectorAll('input[name="color"]');
    for(i = 0;i<radioButtons.length;i++)
    {
        if (radioButtons.item(i).checked)
            var radioIndex = i;
    }
    changeFontColor(radioIndex)
}

function changeFontColor(index1) {
    document.getElementById("text").style.color = fontColorArray[index1];
}


// Change Background Color //
function changeBg() {
    const comboBox = document.getElementById("colorsel");
    var comboIndex = comboBox.selectedIndex
    changeBgColor(comboIndex)
}

function changeBgColor(index2) {
    document.getElementById("td_text").style.backgroundColor=bgColorArray[index2]
}
