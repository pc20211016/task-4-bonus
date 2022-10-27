input.onButtonPressed(Button.AB, function () {
	
})
let _ = 0
let _2 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(_, 0)
        basic.pause(100)
        _ += 1
        if (_ > 4) {
            _ = 0
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, _2)
        basic.pause(100)
        _2 += 1
        if (_2 > 4) {
            _2 = 0
        }
    }
})
