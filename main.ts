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
function function_one () {
    if (gatorEnvironment.getMeasurement(measurementType.eCO2) >= dangerous_co2_level) {
        basic.showString("warning")
    }
    led.plotBarGraph(
    gatorEnvironment.getMeasurement(measurementType.eCO2),
    20
    )
}
let dangerous_co2_level = 0
gatorEnvironment.beginEnvironment()
basic.forever(function () {
    function_one()
    funtion_two()
    dangerous_co2_level = 20
})
basic.forever(function () {
	
})
