input.onButtonPressed(Button.A, function () {
    vars += -1
    if (vars < 1) {
        vars = 4
    }
    basic.showString(convertToText(vars))
})
function funtion_two () {
    if (gatorMicrophone.getSoundIntensity() >= loud_loud) {
        basic.showString("LOUD")
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    led.plotBarGraph(
    gatorMicrophone.getSoundIntensity(),
    loud_loud
    )
}
function _3_us () {
    if (gatorEnvironment.getMeasurement(measurementType.degreesC) <= too_cold) {
        basic.showString("cold")
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    led.plotBarGraph(
    gatorEnvironment.getMeasurement(measurementType.degreesF),
    86
    )
}
function _3 () {
    if (gatorEnvironment.getMeasurement(measurementType.degreesC) <= too_cold) {
        basic.showString("cold")
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    led.plotBarGraph(
    gatorEnvironment.getMeasurement(measurementType.degreesC),
    30
    )
}
input.onButtonPressed(Button.B, function () {
    vars += 1
    if (vars > 4) {
        vars = 1
    }
    basic.showString(convertToText(vars))
})
function function_one () {
    if (gatorEnvironment.getMeasurement(measurementType.eCO2) >= dangerous_co2_level) {
        basic.showString("warning")
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    led.plotBarGraph(
    gatorEnvironment.getMeasurement(measurementType.eCO2),
    dangerous_co2_level
    )
}
let vars = 0
let too_cold = 0
let loud_loud = 0
let dangerous_co2_level = 0
gatorEnvironment.beginEnvironment()
dangerous_co2_level = 1000
loud_loud = 1700
too_cold = -10
basic.forever(function () {
    if (vars == 1) {
        function_one()
    }
    if (vars == 2) {
        funtion_two()
    }
    if (vars == 3) {
        _3()
    }
    if (vars == 4) {
        _3_us()
    }
})
basic.forever(function () {
	
})
