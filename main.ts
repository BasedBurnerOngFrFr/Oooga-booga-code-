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
    let blue_stuff = 0
    let always_bet_on_green = 0
    let red_stuff = 0
    let strip: neopixel.Strip = null
    strip.setPixelColor(0, neopixel.rgb(red_stuff, always_bet_on_green, blue_stuff))
})
