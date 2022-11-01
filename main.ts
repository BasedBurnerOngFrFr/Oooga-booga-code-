basic.forever(function () {
    if (true) {
        let dangerous_co2_level = 0
        if (gatorEnvironment.getMeasurement(measurementType.eCO2) >= dangerous_co2_level) {
            basic.showString("warning")
        }
    } else {
        led.plotBarGraph(
        gatorEnvironment.getMeasurement(measurementType.eCO2),
        20
        )
    }
})
basic.forever(function () {
	
})
