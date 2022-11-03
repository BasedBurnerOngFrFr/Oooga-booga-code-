let dangerous_co2_level = 0
function funtion_two () {
	
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
basic.forever(function () {
    function_one()
    funtion_two()
    dangerous_co2_level = 20
})
basic.forever(function () {
	
})
