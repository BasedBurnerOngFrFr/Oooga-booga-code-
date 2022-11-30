input.onButtonPressed(Button.A, function () {
    vars += -1
    if (vars < 1) {
        vars = 3
    }
    makecode_sucks = 0
    basic.showString(convertToText(vars))
    makecode_sucks = 1
})
function funtion_two () {
    if (makecode_sucks == 1) {
        if (gatorMicrophone.getSoundIntensity() >= loud_loud) {
            basic.showString("LOUD")
            music.playTone(523, music.beat(BeatFraction.Whole))
        }
        led.plotBarGraph(
        gatorMicrophone.getSoundIntensity(),
        loud_loud
        )
    }
}
function _3 () {
    if (makecode_sucks == 1) {
        if (gatorEnvironment.getMeasurement(measurementType.degreesC) <= too_cold) {
            basic.showString("cold")
            music.playTone(523, music.beat(BeatFraction.Whole))
        }
        led.plotBarGraph(
        gatorEnvironment.getMeasurement(measurementType.degreesC),
        40
        )
    }
}
input.onButtonPressed(Button.B, function () {
    vars += 1
    if (vars > 3) {
        vars = 1
    }
    makecode_sucks = 0
    basic.showString(convertToText(vars))
    makecode_sucks = 1
})
function function_check () {
	
}
function function_one () {
    if (makecode_sucks == 1) {
        if (gatorEnvironment.getMeasurement(measurementType.eCO2) >= dangerous_co2_level) {
            basic.showString("warning")
            music.playTone(523, music.beat(BeatFraction.Whole))
        }
        led.plotBarGraph(
        gatorEnvironment.getMeasurement(measurementType.eCO2),
        dangerous_co2_level
        )
    }
}
let makecode_sucks = 0
let vars = 0
let too_cold = 0
let loud_loud = 0
let dangerous_co2_level = 0
gatorEnvironment.beginEnvironment()
dangerous_co2_level = 1000
loud_loud = 2000
too_cold = -10
basic.forever(function () {
    if (makecode_sucks == 1) {
        if (vars == 1) {
            function_one()
        }
        if (vars == 2) {
            funtion_two()
        }
        if (vars == 3) {
            _3()
        }
    }
})
