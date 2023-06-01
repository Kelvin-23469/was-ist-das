input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    faenger.move(1)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showString(" Start")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    faenger.turn(Direction.Left, 90)
})
let faenger: game.LedSprite = null
basic.showString("Druecke A+B zusammen ")
faenger = game.createSprite(randint(1, 6), randint(1, 6))
let Sprite = game.createSprite(randint(1, 6), randint(1, 6))
basic.forever(function () {
    let Countdown = 0
    if (faenger.isTouching(Sprite)) {
        game.addScore(1)
        Sprite.set(LedSpriteProperty.Y, randint(1, 5))
        faenger.set(LedSpriteProperty.X, randint(1, 6))
        game.startCountdown(30000)
    } else if (Countdown != 0) {
        basic.showNumber(game.score())
        game.gameOver()
    }
})
