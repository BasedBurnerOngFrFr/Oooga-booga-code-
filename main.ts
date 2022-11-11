input.onButtonPressed(Button.A, function () {
    vars += -1
    if (vars < 1) {
        vars = 2
    }
})
function funtion_two () {
    let loud_loud = 0
    if (gatorMicrophone.getSoundIntensity() >= loud_loud) {
        basic.showString("LOUD")
    }
    led.plotBarGraph(
    gatorMicrophone.getSoundIntensity(),
    20
    )
}
input.onButtonPressed(Button.B, function () {
    vars += 1
    if (vars > 2) {
        vars = 1
    }
})
function function_one () {
    if (gatorEnvironment.getMeasurement(measurementType.eCO2) >= dangerous_co2_level) {
        basic.showString("warning")
    }
    led.plotBarGraph(
    gatorEnvironment.getMeasurement(measurementType.eCO2),
    dangerous_co2_level
    )
}
let vars = 0
let dangerous_co2_level = 0
gatorEnvironment.beginEnvironment()
dangerous_co2_level = 1700
basic.forever(function () {
    function_one()
    funtion_two()
})
basic.forever(function () {
	
})
