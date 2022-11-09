dangerous_co2_level = 0
strip = 0
def funtion_two():
    pass
def function_one():
    if gatorEnvironment.get_measurement(measurementType.E_CO2) >= dangerous_co2_level:
        basic.show_string("warning")
    led.plot_bar_graph(gatorEnvironment.get_measurement(measurementType.E_CO2), 20)

def on_forever():
    global dangerous_co2_level
    function_one()
    funtion_two()
    dangerous_co2_level = 20
basic.forever(on_forever)

def on_forever2():
    global strip
    blue_stuff = 0
    always_bet_on_green = 0
    red_stuff = 0
    strip = neopixel.rgb(red_stuff, always_bet_on_green, blue_stuff)
basic.forever(on_forever2)
