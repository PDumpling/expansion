basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        music.playTone(147, music.beat(BeatFraction.Whole))
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        music.playTone(587, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    images.createBigImage(`
        . # . . . . . # . .
        . # . . . . . # . .
        . # # # . . . # # #
        . # # # . . . # # #
        . # # # . . . # # #
        `).scrollImage(1, 200)
})
