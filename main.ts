enum RadioMessage {
    message1 = 49434
}
let letter = 0
input.onButtonPressed(Button.A, function () {
    letter += 1
})
input.onButtonPressed(Button.AB, function () {
    if (letter == 1) {
        radio.sendString("A")
    } else if (letter == 2) {
        radio.sendString("B")
    } else if (letter == 3) {
        radio.sendString("C")
    } else if (letter == 4) {
        radio.sendString("D")
    } else if (letter == 5) {
        radio.sendString("E")
    } else if (letter == 6) {
        radio.sendString("F")
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
radio.onReceivedString(function (receivedString) {
    if (0 == 0) {
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    letter = 0
})
basic.forever(function () {
    if (letter == 1) {
        basic.showString("A")
    } else if (letter == 2) {
        basic.showString("B")
    } else if (letter == 3) {
        basic.showString("C")
    } else if (letter == 4) {
        basic.showString("D")
    } else if (letter == 5) {
        basic.showString("E")
    } else if (letter == 6) {
        basic.showString("F")
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (letter == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        letter = 0
    }
})
