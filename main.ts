namespace SpriteKind {
    export const 傳送點1 = SpriteKind.create()
    export const enemy1 = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
    export const 分數 = SpriteKind.create()
    export const enemy4 = SpriteKind.create()
    export const enemy5 = SpriteKind.create()
    export const enemy6 = SpriteKind.create()
    export const enemy7 = SpriteKind.create()
    export const food1 = SpriteKind.create()
}
namespace StatusBarKind {
    export const 主角血量 = StatusBarKind.create()
    export const 大魔王血量 = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    關卡限制 = 4
    tiles.destroySpritesOfKind(SpriteKind.分數)
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
    if (關卡限制 == 4) {
        scene.cameraShake(5, 50000)
    }
    level()
    角色重生點()
    嗎啡()
})
statusbars.onStatusReached(StatusBarKind.主角血量, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    controller.moveSprite(主角, 50, 0)
})
function 嗎啡 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        分數集點 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . . f d d d d d d d d d d f . . 
            . . f d b b b b b b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b 5 5 5 5 5 5 5 d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b b b b b d f . . 
            . . f d d d d d d d d d d f . . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.分數)
        tiles.placeOnTile(分數集點, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        分數集點,
        [img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . . f d d d d d d d d d d f . . 
            . . f d b b b b b b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b 5 5 5 5 5 5 5 d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b b b b b d f . . 
            . . f d d d d d d d d d d f . . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f d d d d d d d d f . . . 
            . . . f d b b b b b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b 5 5 5 5 5 d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b b b b d f . . . 
            . . . f d d d d d d d d f . . . 
            . . . f f f f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . . f d d d d d d f . . . . 
            . . . . f d b b b b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b 5 5 5 d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b b b d f . . . . 
            . . . . f d d d d d d f . . . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f d d d d d f . . . . 
            . . . . . f d b b b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b b b d f . . . . 
            . . . . . f d d d d d f . . . . 
            . . . . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f d d d f . . . . . 
            . . . . . . f d b d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d b d f . . . . . 
            . . . . . . f d d d f . . . . . 
            . . . . . . f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f d f . . . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . . f d f . . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f d f . . . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . . f d f . . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f d d d f . . . . . 
            . . . . . . f d b d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d 5 d f . . . . . 
            . . . . . . f d b d f . . . . . 
            . . . . . . f d d d f . . . . . 
            . . . . . . f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f d d d d d f . . . . 
            . . . . . f d b b b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b 5 b d f . . . . 
            . . . . . f d b b b d f . . . . 
            . . . . . f d d d d d f . . . . 
            . . . . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . . f d d d d d d f . . . . 
            . . . . f d b b b b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b 5 5 5 d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b 5 b d f . . . . 
            . . . . f d b b b b d f . . . . 
            . . . . f d d d d d d f . . . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f d d d d d d d d f . . . 
            . . . f d b b b b b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b 5 5 5 5 5 d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b 5 b b d f . . . 
            . . . f d b b b b b b d f . . . 
            . . . f d d d d d d d d f . . . 
            . . . f f f f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . . f d d d d d d d d d d f . . 
            . . f d b b b b b b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b 5 5 5 5 5 5 5 d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b 5 b b b d f . . 
            . . f d b b b b b b b b d f . . 
            . . f d d d d d d d d d d f . . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
}
scene.onHitWall(SpriteKind.enemy4, function (sprite, location) {
    sprite.destroy(effects.disintegrate, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (主角.vy == 0) {
        music.jumpUp.play()
        主角.vy = -160
    }
})
function level () {
    if (關卡限制 == 0) {
        info.startCountdown(30)
        music.spooky.loop()
        scene.setBackgroundColor(9)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            .........................ccc....................................................................................................................................
            ........................ccccc......ccc..........................................................................................................................
            ........................cccccc....ccccc....................................................................................................ccccc................
            ........................ccccccccccccccc...........................cccc......ccc.............................ccccc.........................cccccc.ccc............
            ....................cccccccccccccccccccc.........................ccccccc..ccccccc.........................cccccccc.......................cccccccccccc...........
            ....................cccccccccccccccccccc....................ccccccccccccccccccccc.....................ccccccccccccc..................cccccccccccccccccccccccc...
            ..................cccccccccccccccccccccc...................cccccccccccccccccccccc....................cccccccccccccccc...............ccccccccccccccccccccccccc...
            .................ccccccccccccccccccccccc...................cccccccccccccccccccccc....................ccccccccccccccccc.............cccccccccccccccccccccccccc...
            .................ccccccccccccccccccccccc...................cccccccccccccccccccccc....................ccccccccccccccccc.............ccccccccccccccccccccccccc....
            .................cccccccccccccccccccccc.....................cccccccccccccccccccc.....................ccccccccccccccccc.............cccccccccccccccccccccccc.....
            .................cccccccccccccccccccccc......................ccccccccccccccccc........................cccccccccccccccc.............ccccccccccccccccccccccc......
            .................cccccccccccccccccccc........................ccccccccccc..............................ccccccccccccc...................cccccccccccccccccc........
            .........................55555......................................555...................................555................................55.................
            ........................555555........8............................5555..............................8....555...............................555...8.............
            ..................8.....555555.................................8..55555..................................5555...8.......................8..5555.................
            .......................5555555....................................5555....8..8........................8..555..8.......................8.8..5555....8............
            ......................55555555.....8.............................55555..................................5555...............................5555.................
            ..................8...55555555...................................55555..................................5555..............................55555.................
            .......................5555555.8....8............................555555.............................8..555555...8.....................8..555555.................
            ....................8....55555...................................5555555...............................5555555...........................55555...8..............
            ..........................55555.............................8......555555................................55555.8...........................55555................
            ...........................5555.................................8..555555.8..8.....................8......5555..............................5555.8..............
            ...........................55555........8..........................55555..................................5555............................8..555................
            .................8.....8...555555..8...............................55555..............................8...555...............................5555................
            ..........................5555555...........................8....8.5555.................................8.555...8...........................5555................
            ..........................555555...................................555....................................55..........................8.....55....8.............
            .................8........555555...................................55.....................................55..............................8......8..............
            ..........................55555....................................55..8...8..........................8.......8................................8................
            ..........................5555.................................8...5.......................................................................8....................
            .....................8....5555.......8.....................8............................................................................8.......8...............
            ..........................555.8..........................................................................................................8......................
            .................8........55..................................8......8..8..................................................................8...8................
            ..........................5.................................................................................cc..................................................
            ...................8..............................................cc......................................cccc..................................................
            .................................................................ccc...8.................................ccccc..................................................
            ................................................................ccccc...................................cccccc..................................c...............
            ...............................................................cccccc..................................cccccccc.................................c...............
            .........................8.....................................cccccc.................................ccccccccc................................ccc..............
            ..............................................................ccccccc................................cccccccccc...............................cccc..............
            ........................c....................................ccccccccc..............................cccccccccccc.............................ccccc..............
            .......................cc...................................cccccccccc............................eccccccccccccc......2..2...2..............ccccccc.............
            ......................ccc..................................cccccccccccc..........................ceccccccccccccc.............2.............ccccccccc............
            ......................ccc.................................ccccccccccccc.........................ceccccccccccccccc.....2...2...............cccccccccc............
            .....................cccc...............................cccccccccccccccc......................eeeecccccccccccccccc............2.22.......cccccccccccc...........
            .....................cccc..............................ccccccccccccccccc.....................eeeeccccccccccccccccc......2...2....2.....ccccccccccccccc..........
            ....................ccccc.............................ccccccccccfccccccc....................eeeeccccccccccccccccccc...2....2..........cccccccccccccccc..........
            ...................cccccc............................cccccccccccfcccccccc..................feeeccccccccccccccccccccc..2..............cccccccccccccccccc.........
            ..................cccccccc.........................cccccccccccccfcccccccc.................feeeecccfccccccccccccccccc......2........cccccccccccccccccccc.........
            ..................cccccccc........................ccccccccccccccfcccccccc.................eeeeccccccccccccccccccccccc........2....ccccccccccccccccccccccc.......
            .................ccccccccc.......................ccccccccccccccccccccccccc...............eeefccccccccccccccccccccccc4..2.........cccccccccccccccccccccccc.......
            ................ccccccccccc.....................cccccccccccccccccccccccccc..............ffeecccccccccccccccccccccccccc...2....ccccccccccccccccccccccccccc.......
            ...............cccccccccccc....................ccccccccccccccccccccccccccc..............eeeecccccccccccccccccccccccc44c.....ccccccccccccccccccccccccccccccc.....
            ...............ccccccccccccc..................cccccccccccccfcccccccccccccc8............eefeccccccccccccccccccccccccc4222...2ccccccccccccccccccccccccccccccc.....
            .............ccccccccccfcccc.................ccccccfccccccccccccccccccccc88...........ceeecccccccccccccccccccccccccccc42222cccccccccccccccccccccccccccccccc.....
            .............cccccccfccccccccee.777.........cccccccccccccccccccfccccccccc88.........ccccccccccccccccccccccccccccccccc42522222cc2ccccccccccccccccccccccccccccc...
            ............ccccccccccccccccceee777........cccccccccccccccccccccccccccccc88........cccccccccccccccccccccccccccccccccc42252522cccccccccccccccccccccccccccccccc...
            ...........ccccccccccccccccccc.e777.......ccccccccccccfcccccccccccccccccc888......ccccccccccccccccccccccccccccccccccc4422224c2cccccccccccccccccccccccccccccccc..
            ..........ccccccccccccccccccccc.77.......cccccccccccccccccccccccccccccccc888cc..ccccccccccccccccccccccccccccccccccccccc5c44ccccccccccccccccccccccccccccccccccc..
            .........cccccfccccccccccccccccc........ccccccffccccccccccccccccccccccccc88888cccccccccccccccccccccccccccccccccccccccc4c44cc4cccccccccccccccccccccccccccccccccc.
            .......ccccccccccccccceeccccccccccc.....cccccccccccccccccccccccffcccccccc888888cccccccccccccccccccccfcccccccccccccccccccc22ccccccccccccccccccccccccccccccccccccc
            ......cccccfccccccccceeeccccccccccccccccccccccccccccccccccccccccccccccccc888888ccccccccccccccccccccccccccccccccbccccc22c22cccccccccccccccccccccccccccccccccccccc
            .....cccccccccccccccceeeccccccccccccceecccccccccccccccfcccccccccccccccccc888888cccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccc
            ....ccccccccccccccccccccccccfcccccceeeeeccccccccccccccccccccccccccccccccc888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ...ccccccccceeecccccccccccccccccccceeeeeeccccccccccccccccfccccccccccccccc888888cccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ..cccccccccceeeeccccccccccccccccccceefeeeccccccccccccfccccccccccccccccccc888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            .ccccccccccceeeeccccccccccccccccccceeeeeecccccccccccccccccccccccccccccccc888888cccccccfccccccccccccccccccccccccccccccccccccccccccccecccccccccccccccccccccccccccc
            .cccccccccccccccccccfcccccccccfcccceeeeeccccccccccccccccccccccccccccccccc888888ccccccccccccfcccccccccccccccccccccccccccccccccccccceeeccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccfccccccccccccccceeeccccccccccccccccccccccccccc
            ccccccccccccccccccccfccccccccccccccccccccccccccccfccccccccccccccccccccccc8888888cccccccccccccccccccccccccccccccccccccccccccccccceeeeeccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccc8888888cccccccccccccccccccccccccccccccccccccccccccccccceeeeeccccccccccccccccccccccccccc
            cccccccfccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccceeeeccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccfcccccccccfcccccccccccccccccccccccccccccccccc8888888ccccccccccfccccccccccccccccccccccccccccccccccccccccecccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccfcccccccccccc88888888ccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888cccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccfccccccccccccccccccccccceeccccccccccccccccccccccc88888888cccccccccccccccccccccceeecccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccfcccccccffcccccccccccccccccccccccccccccccccceeeeccccccccccccccccccccccc8888888ccccccccccccccccccccceeeeccccccccccccccccfcccccccfccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccfefccccccccccccccccccccccc8888888ccccccccccccccccccccceeeecccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccceecccccccccccccccccfcccccc8888888cccccccccccccccccccceeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccecccccccccccccccccccccccc88888888ccccccccccccccccccceeecccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccc88888888cccccccccccccccccccccecccccccccccccccccccccccfcccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccfccccccccfcccfccccccccccccccccccccfccccccccccccccccc88888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccc88888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888ccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888cccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccceeeeeecccfcccccccccccccccccccccccccccccccccccccccccccccccc888888888ccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccceeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccc888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccceeefeecccccccccccccccccccccccccccccccccccccccccfcccccccccc888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccffcccccceeeeccccccccccccccccccccccccccceeeeeeccccccccccccccccccccc888888888ccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccc
            cccccccccccccccceeeecccccccccccccccccccccccccceeeeeeeeecccfcccccccccccccccc88888888ccccccccccccccccccccccccccecccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccceeccfcccccccccccccccccccccccceeeeeeeeecccccccccccccccccccc88888888ccccccccccccccccccccccccceeeccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccceecccccccccccccccccfccccccccceeeeeeeeeeccccccccfcccccccccc88888888cccccccccccccccccccccccceeeeccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccefeeeefeeccccccccfcccccccccc88888888cccccccccccccccfccccccceeeeeccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeccccccccfccccccccccc88888888ccccccccccccccfcccccccceeeeeccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccffccccccccccccccccccccccccccccccccccccccceeeeeeccccccccccccccccccccc88888888ccccccccccccccccccccccccceecccccccccccccccccfcccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccfccccccceecccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccfccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
        tiles.setTilemap(tilemap`層級1`)
        scene.cameraShake(6, 30000)
        第一關()
    } else if (關卡限制 == 1) {
        info.startCountdown(50)
        scene.setBackgroundColor(12)
        scene.setBackgroundImage(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
        tiles.setTilemap(tilemap`層級6`)
        敵人()
        第二關()
    } else if (關卡限制 == 2) {
        info.startCountdown(50)
        scene.setBackgroundColor(12)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        tiles.setTilemap(tilemap`層級7`)
        game.showLongText("小心落石！", DialogLayout.Bottom)
    } else if (關卡限制 == 3) {
        info.startCountdown(50)
        scene.setBackgroundColor(12)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        tiles.setTilemap(tilemap`層級8`)
        game.showLongText("想要拯救必須，必須要擁有看不見的勇氣", DialogLayout.Bottom)
        scene.cameraShake(4, 1000000)
    } else if (關卡限制 == 4) {
        info.startCountdown(50)
        game.splash("大魔王:看我的火焰！")
        music.buzzer.loop()
        music.setVolume(255)
        scene.setBackgroundColor(12)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            .....................................................................................................................2..........................................
            ............................................................................................................................5...................................
            ......................................................................................................................5.......2.................................
            .............................................................................................................................5.2................................
            .......................................................................................................................2........................................
            ................................................................................................................2..25.....225.......5...........................
            .......................................................................................................................4..25....................................
            ...............................................................................................................2.25..5...222...2................................
            ......................................2........................................................................55...5....2252..5.4.2............................
            ..............................22..........2.........................................................................5.4.22222..24...............................
            ................................2................................22......................................2...4...4.....425422....4....5.........................
            .................................2.....5...................................................................5...2..24..22222252...4..5.5.........................
            ........................................2................................4.....2..2...............2..................222422422...5..............................
            .......................22......5....5.........2.................44...2.......4...2..........................5.2..2..24252544252.................................
            ...............................5...22...................................4..4..4.......................5.2..........222222422422.2...............................
            .........................2...2..........225.....................................4.2..........2.............4....4.22245452252522....5...........................
            ...................................2...5.....2........................4....2.....2......2...5......5.............2252254525222222...............................
            .......................5....522...522...2...2..................2..2..22....2....22......2........2......2........22242252522242242..............................
            .....................4....52......222..........444...........4.....2..2...22....2.2............................2222e222222225eee22..............................
            .....................4...5.......22222....52....24..................4...42222..4..............2....44.5.....4.22552ee252525224eee24.............................
            .......................4......522222222..5.2..............22...........2224242.....4....5..4.......45.........2222eee225254542eee222............................
            .......................552...22252255222.................4......4.2...222222222..2...2....4.....2.......2.....255eeeee224254522eeee42...........................
            ...................2..4.....222552445242......2..4..2....2..2.....2..2444252442......2.....4.5.2.......5.....222eeeeeeeee2424244eee522..........................
            ...................5.4.....2242522522522222..............2..........222255252222........2....2....2.5.......255eeeeee5eee2252222eeee242.........................
            ................5..2..554.222225522225522222....2...44..2......4...2422552552242..55......52.5..4.......44.2252eeeee5eeeee2ee522eeee25422.......................
            ................4.4.255..2245222222225ee25522........44.....4.....22242522222422...2...4.....5.............5222eeeeee5eeeeeee224eeeee2222.......................
            .................5252...22222222224252eee222522.........4..4......424222252522222........22.5...5...5.5....2222eeeeeeeeee4e2eeeeeeeeeee522......................
            ..............22.45....254422ee5552445eee225252...........4...2..4e4e4224222222222...2.....22.2.5..4.......2424eee42ee2ee4eeeeeee2ee4eee2524....................
            ..................25..252222eee2222522eeee222222......2.........42eee2222422242e44......5.4.........4..2..22222ee22e2e2e2eeeee2eee44eeeee24222..................
            ...............24.2...2242eeeee2222242eeeee225522.......4......225eee22222242eee22..4...5...4.45....2...222525eeee2e5eeeeeee55eee2eee2eeeee225224...............
            ...............2.....2542ee4eee4424eeeeeeeee22522............25522eeeee222eeeee22442......2............424222eee4ee2e2e2e5e2eeeeeee2eeeee2eee22425222...........
            ....................42222eeeeeeeeee4e4eeeeeee22522..........2455eeeeeeeeeeeeeee242252.....2.....2...52222eeeeeeee4ee2eeee4ee252eeee552eeeeeeeeee2225424.........
            ...................222eeeeeee5eeeeeeeee54eeeeeee222......442242eeeeeeeeeeeeeeeeee224222...........25245244e2222eee4eeee2e2ee44ee4e45ee5eeeeeeeeeee2242525244252.
            ..................225eeeeeeeeee2ee42eeeeeee4eeeeee252252525242eeee2ee4ee5eeeeeeeeee2252522425442524222ee4eeeeee5e44e5ee5eee4eeeee2e4eee5ee2e5eeeeeeeee2424252424
            ..................442eeee5ee44eeeeee4e2ee4eeeeeeee25242254222eee4eeeeee4e54eee4eeeeee222422542254222eeeeeee5e2eeeeee2e5eeeeee2e2eeeee2eeeeeeeee5ee2ee4eeee222425
            .................244eee5eeeeeeee4e4eeeee4eeeee42eeeee22eeeeeee2eee4e4ee42eeeeeee4e2ee4eeee2225222eeeee2e25ee44ee2eee2e5e5544eee5ee2eeeeee42e2eeeeeeee4eeee5e2442
            ...............22524eeee44ee5ee2ee5ee45eee54eeeee5eeeeeeeeeeeeeee44e2eee5ee4ee22eeeeeeeeeee4eeeeeee2eeeee2eeeee5e2e4eeeeeeee2e4ee2ee5e2ee2eeeee55eeeeeee5eeeeeee
            ..............25222eeeeeeee5eee5e2ee4eeeeeeee5eeeee2eeeee2e4e4e442eeeeeeee2e2eeeeeee44eeeeeeeee2eeeee5eee5eeeee5e2ee5ee4eee5eeee224eeee5eeeeeeeeee2eeee4eeeeeeee
            .............44222eee2e5e2eee2eeee4e5ee44e44eeee5eee4ee4eeee5e2eee445e4ee4eee2eeee4eeeee2eeeeeeeeeeeeeeee5ee2eeeeee55e2e44eee2e4ee5eee44ee5e5eeeeeeee2ee4ee4eee2
            ..........2422542e4442eeee55ee522eee2eeee4eeeeeeeeee5e22e4eeeeee4eeeee2eeee4eee5e54eee24ee4ee5ee52eeeee522e4e444eeeeeeeeee44eeee2e55e2e4e22e4eee4e5eeee4eeee4eee
            .........225422eeeeeeee5ee2eeeeeee5eeee4eeeee4e2ee2eeeeeeee24ee422ee5eee5ee54eeeeeee24e4e5eeeeeeeeee24ee4eee5ee444244eee5eee445e2e42eeeeeeeeee4eeeee2ee4e5eeeeee
            ........252224ee55eee55eeeee55eeeee2e2eeee5eeeeeeeee4ee4e2eeeeeeeeeeeeee24eeee22e44eee44ee2eee4eee5eeeeeeeeeeee2e2ee4e4454e44e5eee2eee5ee4eeee4ee55ee5eeeee4e4ee
            ......242244eee2eee5e4ee2ee2eeee5eeeee5eeeeee5eee4e5ee5eeee5ee2eee422422eeeeeeeee5ee42eee4eeeeee5eee4eeeeee44ee2e2e5e42e2eee2eee2e2e5eeeee5eeee5e5eeeee5e52eeee5
            ....242552eeeeeee2eeeeeee5eee4eee522e24e44e4eeee52eeee2ee2eeeeeee55ee45ee2422444eeeeeee54ee444eeee445e24ee45ee4eeeee442444ee55ee4ee2ee2e2eee5e5ee5ee4e2eeeee4eee
            ..522522eeee2e4eeeee52e4eeeeeee4eee2e4eeee4ee4eeeeeeeeee2ee2e44eee2eeeeeee2eeee5eee4e4eee2ee4eee5eeeeeeeeeeeeee4eeeeeeee4e444ee44eeeee4e25ee2eeeeeeeeeee4eeeee2e
            242422eeeeee5eee4eee4ee4eeeeee4e4eeeeee4eeeeeee4ee444e5eeee4eee25e222ee2eeeee4eeeeeeee2ee2eeee45eeeee2e4455ee2e55ee5e5e5ee44224ee5eee5eee5eeee2e4e55eee44e2eeeee
            4424eeee4e4ee2ee5ee2eeeee5eee4eeeee2e4eee4ee4ee2eeeeeeeeeee45ee2eeeeeeeeeeeeeee4eeee2e2eeeee4444eeeee24eeeeeee4ee2ee2eeee2eee2e44eee2ee2eeeeeeee4e5e5eeeeeee4eee
            eee55e2eeeeeeee5eeeeeee25eeeeeee5ee44eeeeeeeeeeeee24e4e5ee2eeeeeeeeee4e4eee2ee4eeeeeeeee5e44e44eeeeeeeeeee2ee5eeeeeeeee25ee4e2e444eeeeeeeee5eeeeeeeeeee5eeeee4ee
            4eeee2e555e4eeeee4e54e2eeeeee4ee4eeeeee2ee44ee4eeeee5eeeeeeeeee2ee52eeeeeee22ee2e5ee2eeee4e5eeeeeeeeeeee2eeee5eeeeee5ee2eeeeeeeeeeeee5eeeee5eeee2eee5e5e42ee5eee
            e24eee5eeeeee4e4eeeeeeeeeee4e2ee4ee2eeeeeeeeeeeeeeeeeeeeeee45eeeeeeeeee2eeeeeeeeeeeeeeeeee5eeeeeeeeeee225eeeeee55e2eeeeeeee5eeeeeeeeeeeeee2e5eeee5ee5eeeeeeeeeee
            eee2e5ee2ee25eeee2eeee544eeeeee5eeeee2e25e224eeeeeeeeeeeeeee4eeee42eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444eee4eee55eeeeeeee5eeeeeeeeeeeeeeeeeeeeeee5e
            e4eeeeeeeeeeee4ee2eeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eee44eeeeeee445eeeeeeeeeeeeeeeeeeeeeeeeee5eeeee5ee5ee2eeee
            e22e5e4ee4e4eee5ee5eeee54e4eeeeeeee2eeeeeeeeee4eee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeee2e5eeeeeeeee4eeeeeeeeeeee2eeee4ee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ee4ee4e2eeeeee5eeeee4eeeeeeeee5eeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeee4eee4eeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeee4eeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        tiles.setTilemap(tilemap`層級9`)
        game.showLongText("看來大魔王就在前面了！", DialogLayout.Bottom)
        第五關()
    } else if (關卡限制 == 5) {
        scene.setBackgroundColor(9)
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffff777777777777fff7777777777777777fff77777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f77777fff777777777f77fff7777777777777f77ff777777777777777777777777777777
            777777777777777777777777ffffffff77777777777777777777777777777777777777777777777777777777f7777777f77777777ff7777ff77777777777f7777f777777777777777777777777777777
            777777777777777777777777ffffffff777777ff777ff7777777fffffff77777777777777777777777777777f7777777f77777777f777777f7777777777f7777ff777777777777777777777777777777
            777777777777777777777777ffffffff777777ff777ff7777777ff777777777777ff7777777777777777777777777777f77777777f7777777f777777777f777ff7777777777777777777777777777777
            777777777777777777777777ff777777777777ff777ff7777777f7777777777777ff7777ff7777777777777777777777f77777777f7777777f777777777f7ff777777777777777777777777777777777
            777777777777777777777777ff777777777777ff777ff7777777ff777777777777ff7777ff7777777777777777777777f7777777f77777777f777777777fff7777777777777777777777777777777777
            777777777777777777777777ff777777777777ff777ff7777777fff77777777777ff7777ff77777777777777777ffffff7777777f77777777f777777777fff7777777777777777777777777777777777
            777777777777777777777777fffffff7777777ff777ff77777777fff7777777777ffffffff7777777777777777ff777777777777f77777777f77777777f777f777777777777777777777777777777777
            777777777777777777777777fffffff7777777fffffff777777777fffff7777777ffffffff777777777777777ff77777777f7777f77777777f7777777f77777f77777777777777777777777777777777
            777777777777777777777777ff777777777777fffffff777777777777ff7777777ffffffff777777777777777f777777777f7777f77777777f77777ff777777ff7777777777777777777777777777777
            777777777777777777777777ff777777777777ff777ff777777777777fff777777ff7777ff777777777777777f777777777f7777ff777777ff77777f77777777f7777777777777777777777777777777
            777777777777777777777777ff777777777777ff777ff777777ff77777ff777777ff7777ff7777777777777777ffffffffff77777ffffffff777777ff7777777f7777777777777777777777777777777
            777777777777777777777777ff777777777777ff777ff777777ff77777ff777777ff7777ff7777777777777777777777777777777777777777777777ff77777ff7777777777777777777777777777777
            777777777777777777777777ff777777777777ff777ff777777ffffffff7777777ff7777ff77777777777777777777777777777777777777777777777fffffff77777777777777777777777777777777
            777667777777776777777777ff777777777777ff777ff7777777fffffff7777777ff7777ff77777777766777777777677777777777777777777777777776677777777767777777777777777777777777
            766677777777766777777777777777777777776776667777777776677777777777ff7777ff77776776667777777776677777777777777777777777677666777777777667777777777777777777777767
            7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
            6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
            6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
            6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
            6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
            6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
            66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
            66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
            66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
            66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
            66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
            6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
            6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
            6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
            bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
            bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
            bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
            bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
            bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
            bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
            bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
            bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
            bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
            bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
            b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
            b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd9999999922299222bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
            b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd9999992222992229bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
            b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd9999222222222299bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
            dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9222222222222999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
            9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddd2222222222222299bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
            9d999999dddddddddd9999999999bbbbb99bbb999d999999dddd2222222222222299bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
            9d999999ddddddddd99999999999bbbbb99bb9999d99fff9ddff2222222222222999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
            9dd99999ddddddd9999999999999bbbbb99bbd999dd9f1fffff1f222222222222999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
            99dd9999dddddd99999999999999bbbbb99bbd9999ddfffffffffd92222222229999bbbbb9fffd99fffd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
            99ddd999dddddd99999999999999bbbbb9bbbdd999dddf11f11fdd99222222999999bbbbb9f1fffff1fdd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
            9999dddddddddd9999999999999bbbbbb9bbb9d99999dfffffffdd9999222999999bbbbbb9fffffffff9dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
            9999dddddddddd9999999999999bbbbbbbbb99d99999dfffdfffdd9999999999999bbbbbbbbf11f11f99dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
            999999dddddddd9999999999999bbbbbbbbb99dd99999ffd1dffdd9999999999999bbbbbbbbfffffff9999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
            d9999999dddddd999999999999bbbbbbbbb9999dd9999fffffffdd999999999999bbbbbbbbbfffdfff999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
            dd9999999ddddd999999999999bbbbbbbbb99999ddffff1fff1ffff99999999999bbbbbbbbbffd1dff9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
            dd9999999ddddd999999999999bbbbbbbb999999dddffff1f1ffffd99999999999bbbbbbbb9fffffff9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999dffffff1ffffff9999999999bbbbbbbffff1fff1ffff9999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d99fffffffffd99999999999bbbbbbbdffff1f1ffffd9999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d99fffffffffd99999999999bbbbbbbffffff1ffffff9999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d99ff999ddffd99999999999bbbbbbbbbfffffffff999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd9dd999ddddd99999999999bbbbbbbb9fffffffff999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbb39ff99999ff999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9dd9999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
            dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
            d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
            9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
            d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
            ddddd99999dddddddd999999bbbbbbbbbdddddddddfff999fffddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
            dddddddd99ddddddddd999ddbbbbbbbbbdddddddddf1fffff1fdddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
            ddddddddddddddddddd9ddddbbbbbbbbbdddddddddfffffffffdddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
            ddddddddddddddddddddddddbbbbbbbbbbdddddddddf11f11fddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            ddddddddddddddddddddddddbbbbbbbbbbdddddddddfffffffddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbdddddddddfffdfffdddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddffd1dffdddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddfffffffdddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbdddddffff1fff1ffffddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddffff1f1ffffdddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            ddddddddddddddddddd7777777777bbbbbbdddddffffff1ffffffdddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
            dddddddddddddd77777777777777777777bdddddddfffffffffddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
            ddddddddddd7777777777777777777777777ddddddfffffffff7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
            dddddddd777777777777777777777777777777ddddffdddd7ff777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
            ddddd77777777777777777777777777777777777ddddd7777dd77777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        tiles.setTilemap(tilemap`層級11`)
        game.showLongText("之後黑熊再次與家人相遇子", DialogLayout.Bottom)
        game.showLongText("過著幸福快樂的日子", DialogLayout.Bottom)
        game.over(true, effects.hearts)
    }
}
statusbars.onZero(StatusBarKind.大魔王血量, function (status) {
    status.spriteAttachedTo().destroy(effects.ashes, 500)
    info.changeScoreBy(1)
    music.baDing.play()
    scene.cameraShake(2, 500)
})
scene.onOverlapTile(SpriteKind.Player, img`
    c c c c c c c c c c c c c c c c 
    c c c e e e e e e e e e e c c c 
    c c c e f f f f f f f f e c c c 
    c c c e f e e e e e e f e c c c 
    c c c e f e e e e e e f e c c c 
    c c c e f e e e e e e f e c c c 
    c c c e f e e e e e e f e c c c 
    c c c e f e e e e e e f e c c c 
    c c c e f e e e e e e f e c c c 
    c c c e f e e e e e f f e c c c 
    c c c e f e e e e e e f e c c c 
    c c c e f e e e e e e f e c c c 
    c c c e f e e e e e e f e c c c 
    c c c e f e e e e e e f e c c c 
    c c c e f f f f f f f f e c c c 
    c c c e e e e e e e e e e c c c 
    `, function (sprite, location) {
    tiles.placeOnRandomTile(主角, assets.tile`myTile9`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    關卡限制 = 5
    tiles.destroySpritesOfKind(SpriteKind.enemy2)
    tiles.destroySpritesOfKind(SpriteKind.分數)
    tiles.destroySpritesOfKind(SpriteKind.enemy1)
    music.buzzer.stop()
    level()
    角色重生點()
    結局()
})
statusbars.onZero(StatusBarKind.主角血量, function (status) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile34`, function (sprite, location) {
    主角.sayText("jump", 200, false)
})
function 第二關 () {
    for (let value of tiles.getTilesByType(assets.tile`tile37`)) {
        岩漿噴 = sprites.create(assets.tile`myTile`, SpriteKind.Enemy)
        tiles.placeOnTile(岩漿噴, value)
        tiles.setTileAt(value, assets.tile`myTile`)
        animation.runMovementAnimation(
        岩漿噴,
        animation.animationPresets(animation.easeUp),
        2000,
        true
        )
        岩漿噴.startEffect(effects.fire)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile40`)) {
        傳送點1 = sprites.create(img`
            c c c c c c c c c c c c c c c c 
            c c c e e e e e e e e e e c c c 
            c c c e f f f f f f f f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e f f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f f f f f f f f e c c c 
            c c c e e e e e e e e e e c c c 
            `, SpriteKind.傳送點1)
        tiles.placeOnTile(傳送點1, value)
        tiles.setTileAt(value, img`
            c c c c c c c c c c c c c c c c 
            c c c e e e e e e e e e e c c c 
            c c c e f f f f f f f f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e f f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f e e e e e e f e c c c 
            c c c e f f f f f f f f e c c c 
            c c c e e e e e e e e e e c c c 
            `)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        加血2 = sprites.create(assets.tile`tile43`, SpriteKind.food1)
        tiles.placeOnTile(加血2, value)
        tiles.setTileAt(value, img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile11`, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.主角血量, otherSprite).value += 20
    加血1.destroy(effects.hearts, 500)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().destroy(effects.ashes, 500)
    info.changeScoreBy(1)
    music.baDing.play()
    scene.cameraShake(2, 500)
})
scene.onHitWall(SpriteKind.enemy1, function (sprite, location) {
    sprite.destroy(effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.food1, SpriteKind.Player, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.主角血量, otherSprite).value += -20
    加血2.destroy(effects.hearts, 500)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.主角血量, otherSprite).value += -1
    岩漿噴.destroy(effects.spray, 500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (發射時機 == false) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 主角, 110, 0)
        projectile.setKind(SpriteKind.Projectile)
        發射時機 = true
    }
})
sprites.onDestroyed(SpriteKind.enemy2, function (sprite) {
    music.spooky.play()
    大魔王.sayText("好痛啊！", 1000, false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy3, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20
    projectile.destroy(effects.rings, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    關卡限制 = 1
    tiles.destroySpritesOfKind(SpriteKind.enemy5)
    tiles.destroySpritesOfKind(SpriteKind.enemy7)
    tiles.destroySpritesOfKind(SpriteKind.enemy6)
    tiles.destroySpritesOfKind(SpriteKind.分數)
    tiles.destroySpritesOfKind(SpriteKind.Food)
    level()
    角色重生點()
    嗎啡()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.大魔王血量, otherSprite).value += -20
    大魔王.destroy(effects.confetti, 500)
})
sprites.onOverlap(SpriteKind.enemy6, SpriteKind.Player, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.主角血量, otherSprite).value += -5
    房子.destroy(effects.spray, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    關卡限制 = 3
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
    tiles.destroySpritesOfKind(SpriteKind.分數)
    tiles.destroySpritesOfKind(SpriteKind.food1)
    level()
    角色重生點()
    嗎啡()
})
function 第五關 () {
    for (let value of tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
        大魔王 = sprites.create(img`
            ....77777777....
            ..774777447777..
            .77447477477477.
            7747777477477477
            7474774474774774
            7477474774747747
            .74774444e47747.
            ..744ee4eee447..
            ..74e4ee4e4e47..
            ...eeeeeeeeee...
            ...e2ee3eee2e...
            ...e22eeee22e...
            ...ee22ee22ee...
            ...eeeeeeeeee...
            ...ee2e22e2ee...
            ...e2eeeeee2e...
            ..ee2e2ee2e2ee..
            .eeee222222eeee.
            .fefeeefeeefeef.
            eefefeffeeeeffee
            `, SpriteKind.enemy2)
        tiles.placeOnTile(大魔王, value)
        大魔王血量 = statusbars.create(20, 4, StatusBarKind.大魔王血量)
        大魔王血量.attachToSprite(大魔王)
        大魔王血量.setLabel("大魔王血量")
        大魔王血量.max = 100
    }
}
sprites.onOverlap(SpriteKind.enemy5, SpriteKind.Player, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.主角血量, otherSprite).value += -5
    樹.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.enemy7, SpriteKind.Player, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.主角血量, otherSprite).value += -5
    石頭.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.分數, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.ashes, 500)
    music.baDing.play()
})
function 結局 () {
    music.pewPew.play()
    effects.hearts.endScreenEffect()
}
sprites.onOverlap(SpriteKind.enemy1, SpriteKind.Player, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.主角血量, otherSprite).value += -1
    隕石.destroy(effects.disintegrate, 500)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    music.spooky.play()
    主角.sayText("好痛啊！", 1000, false)
})
sprites.onDestroyed(SpriteKind.enemy3, function (sprite) {
    music.spooky.play()
    小樹敵人.sayText("好痛啊！", 1000, false)
})
function 敵人 () {
    for (let value of tiles.getTilesByType(sprites.dungeon.collectibleInsignia)) {
        tiles.setTileAt(value, img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        小樹敵人 = sprites.create(img`
            . . . . . 7 7 7 7 7 7 7 . . . . 
            . . . 7 7 7 4 7 7 4 7 7 7 . . . 
            . 7 7 7 7 4 7 7 4 7 7 4 4 7 . . 
            . 7 4 7 4 e e 4 e e 4 4 7 7 7 . 
            . 7 4 4 4 e e 4 e e e 7 7 4 7 . 
            . 7 7 4 e f e e e f e 7 4 4 7 . 
            . . 7 7 e f f e f f e 4 4 7 . . 
            . . . 7 e e e e e e e 7 7 . . . 
            . . . . e e f f f e e . . . . . 
            . . . . e f f e f f e . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . e e e e e e e e e . . . . 
            . . e e . . e . e . . e . . . . 
            . . e . . . e . e e . e e . . . 
            . e e . . e e . . e . . e e e . 
            . e . . e e . . . e e . . . e . 
            `, SpriteKind.enemy3)
        tiles.placeOnTile(小樹敵人, value)
        小樹敵人的血量 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        小樹敵人的血量.attachToSprite(小樹敵人)
        小樹敵人的血量.setLabel("enenmyhealth")
        小樹敵人的血量.max = 100
    }
}
sprites.onOverlap(SpriteKind.enemy4, SpriteKind.Player, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.主角血量, otherSprite).value += -1
    隕石1.destroy(effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    關卡限制 = 2
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
    tiles.destroySpritesOfKind(SpriteKind.分數)
    tiles.destroySpritesOfKind(SpriteKind.enemy3)
    level()
    角色重生點()
    嗎啡()
})
function 角色重生點 () {
    for (let value of tiles.getTilesByType(assets.tile`tile33`)) {
        tiles.placeOnTile(主角, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
function 第一關 () {
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        樹 = sprites.create(img`
            ................86..................
            ...........6688867886...............
            ...........8666877688868............
            ............868777767768............
            .........688667777776688............
            ........67767777777778666...........
            .........6776667767666868...........
            ..........866667667677688...........
            .........8666666666667778...........
            ........667766666666666676..........
            .......67766667666776667776.........
            ......886667776676777666688.........
            .....67766777667767777666768........
            ....6776666666777667776666776.......
            .....8667776667766676677776776......
            ......8777666666667776777776688.....
            ....6887766776677677777777776776....
            ..8866666677767777777777766666778...
            .86666666777667767777766666776668...
            ..88677666666777677677666667776668..
            ..86776677666666666666667776666668..
            886666677766667666666776677766668...
            6668666676667766767767766677666668..
            88866666666777677677667666666776668.
            .86668866666766776776666667766666668
            .86688666666666776666667667776666688
            .668866666666666666666677666666688..
            ..8866686666666666677667776666668...
            ...866886666666666677667776666668...
            ...86886668666666667666666666888....
            ....88866886686666666666666668......
            ......86886668666866668666868.......
            ......88866688668866688866888.......
            ........8888888688888ce868..........
            ..............e88e88.ec.8...........
            ...............eeee..e..............
            ...............ceef.ce..............
            ...............ceefcec..............
            ...............feefce...............
            ...............fceeec...............
            ...............ffceec...............
            `, SpriteKind.enemy5)
        tiles.placeOnTile(樹, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        樹.vx = 100
        樹.ay = 80
        房子 = sprites.create(img`
            ....................e2e22e2e....................
            .................222eee22e2e222.................
            ..............222e22e2e22eee22e222..............
            ...........e22e22eeee2e22e2eeee22e22e...........
            ........eeee22e22e22e2e22e2e22e22e22eeee........
            .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
            ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
            4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
            6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
            46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
            46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
            4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
            6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
            4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
            6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
            46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
            6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
            46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
            46622e22e22e22eeecc6666666666cceee22e22e22e22664
            4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
            6c622e22eeecc66666cc64444446cc66666cceee22e226c6
            46622e22cc66666cc64444444444446cc66666cc22e22664
            46622cc6666ccc64444444444444444446ccc6666cc22664
            4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
            cccccccc6666666cb44444444444444bc6666666cccccccc
            64444444444446c444444444444444444c64444444444446
            66cb444444444cb411111111111111114bc444444444bc66
            666cccccccccccd166666666666666661dccccccccccc666
            6666444444444c116eeeeeeeeeeeeee611c4444444446666
            666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
            666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
            666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
            666edffdffde4c66f4effffffffff4ee66c4edffdffde666
            666edccdccde4c66f4effffffffffeee66c4edccdccde666
            666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
            c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
            c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
            cc66666666664c66e4e44e44e44feeee66c46666666666cc
            .c66444444444c66e4e44e44e44ffffe66c44444444466c.
            ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
            ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
            ....644444444c66f4e44e44e44e44ee66c444444446....
            .....64eee444c66f4e44e44e44e44ee66c444eee46.....
            ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
            `, SpriteKind.enemy6)
        tiles.placeOnTile(房子, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        房子.vx = 90
        房子.ay = 80
        石頭 = sprites.create(img`
            . . . . . . c c c c c c . . . . 
            . . . . c c b b d d d d c . . . 
            . . . c c b b d d d d d d c . . 
            . . c b b d b d d d d d d b c . 
            . c b b b d b b d d d d d b c . 
            . c b b b d d b d d d d b b c . 
            c b c b b b d d b b b b b c c . 
            c b c c b b b b d d d b c c c . 
            c b b c c c c c c c c c c c c . 
            c c b b b b b b c c b d d d b c 
            c c c c c c c c c d d d d d d c 
            c c c c c c c b c b d d d d d b 
            c b b b c c c b c c b d d d c b 
            c c b b b c c b b c c c c b b c 
            c c c c c c c c b b b b b b c c 
            c c c c c c c c c c c c c c c c 
            `, SpriteKind.enemy7)
        tiles.placeOnTile(石頭, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        石頭.vx = 150
        石頭.ay = 80
        music.bigCrash.play()
    }
    for (let value of tiles.getTilesByType(sprites.swamp.swampTile13)) {
        加血1 = sprites.create(assets.tile`myTile1`, SpriteKind.Food)
        tiles.placeOnTile(加血1, value)
        tiles.setTileAt(value, assets.tile`tile14`)
    }
}
let 隕石1: Sprite = null
let 小樹敵人的血量: StatusBarSprite = null
let 小樹敵人: Sprite = null
let 隕石: Sprite = null
let 石頭: Sprite = null
let 樹: Sprite = null
let 大魔王血量: StatusBarSprite = null
let 房子: Sprite = null
let 大魔王: Sprite = null
let projectile: Sprite = null
let 加血1: Sprite = null
let 加血2: Sprite = null
let 傳送點1: Sprite = null
let 岩漿噴: Sprite = null
let 分數集點: Sprite = null
let 發射時機 = false
let 關卡限制 = 0
let 主角: Sprite = null
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777677777777766777777777777777777777777777767777777776677777777777777777777777777776777777777667777777777777777777777777777677777777766777
    7677777777777777777777777667777777776667767777777777777777777777766777777777666776777777777777777777777776677777777766677677777777777777777777777667777777776667
    6677777777777777776677776677667776677677667777777777777777667777667766777667767766777777777777777766777766776677766776776677777777777777776677776677667776677677
    6766777777777777776676776676677677666666676677777777777777667677667667767766666667667777777777777766767766766776776666666766777777777777776676776676677677666666
    7766667777777777777666676666676677766666776666777777777777766667666667667776666677666677777777777776666766666766777666667766667777777777777666676666676677766666
    7666777666777777677766666766666666766666766677766677777767776666676666666676666676667776667777776777666667666666667666667666777666777777677766666766666666766666
    6667776677766677666667766776666666666666666777667776667766666776677666666666666666677766777666776666677667766666666666666667776677766677666667766776666666666666
    6666666677667767766677666676666666666666666666667766776776667766667666666666666666666666776677677666776666766666666666666666666677667767766677666676666666666666
    6666666676677766766666666666666666666b666666666676677766766666666666666666666b666666666676677766766666666666666666666b666666666676677766766666666666666666666b66
    66666666666776b6666666666666666666666b6666666666666776b6666666666666666666666b6666666666666776b6666666666666666666666b6666666666666776b6666666666666666666666b66
    6666666666676bb6666666666666666666666b666666666666676bb6666666666666666666666b666666666666676bb6666666666666666666666b666666666666676bb6666666666666666666666b66
    666666666666bbb669966666666bb96666666b66666666666666bbb669966666666bb96666666b66666666666666bbb669966666666bb96666666b66666666666666bbb669966666666bb96666666b66
    666666666666bb666999666666bb999666666b66666666666666bb666999666666bb999666666b66666666666666bb666999666666bb999666666b66666666666666bb6669dd666666bbd99666666b66
    666666666666bb6699d66696bbb6699669666bb6666666666666bb6699d66696bbb6699669666bb6666666666666bb6699d66696bbb6699669666bb6666666666666bb6699d66696bbb6699669666bb6
    66666666666bbb6699d6699bbb9d69669d666bb666666666666bbb6699d6699bbb9d69669d666bb666666666666bbb6699d6699bbb9d69669d666bb666666666666bbb6699d6699bbb9d69669d666bb6
    66666666666bb66669ddd99bb699d9999dd66bb666666666666bb66669ddd99bb699d9999dd66bb666666666666bb66669ddd99bb699d9999dd66bb666666666666bb66669ddd99bb699d9999dd66bb6
    6666666966bbbd96699dd99bb699d9999d666bbb6666666966bbbd96699dd99bb699d9999d666bbb6666666966bbbd96699dd99bb699d9999d666bbb6666666966bbbd96699dd99bb699d9999d666bbb
    6666699966bbb699999dd9bbb999d9999d6ddbbb6666699966bbb699999dd9bbb999d9999d6ddbbb6666699966bbb699999dd9bbb999d9999d6ddbbb6666699966bbb699999dd9bbb999d9999d6ddbbb
    6666669969bbb6d9999dd9bb9999d9999ddd6bbb6666669969bbb6d9999dd9bb9999d9999ddd6bbb6666669969bbb6d9999dd9bb9999d9999ddd6bbb6666669969bbb6d9999dd9bb9999d9999ddd6bbb
    6699669999bbb9d9999ddbbb99999d999ddd6bbb6699669999bbb9d9999ddbbb99999d999ddd6bbb6699669999bbb9d9999ddbbb99999d999ddd6bbb6699669999bbb9d9999ddbbb99999d999ddd6bbb
    6999d9999bbbb9d9999ddbb999999d999ddddbbb6999d9999bbbb9d9999ddbb999999d999ddddbbb6999d9999bbbb9d9999ddbb999999d999ddddbbb6999d9999bbbb9d9999ddbb999999d999ddddbbb
    9999d9999bbbb9dd9999bb9999999dd99dddd9bb9999d9999bbbb9dd9999bb9999999dd99dddd9bb9999d9999bbbb9dd9999bb9999999dd99dddd9bb9999d9999bbbb9dd9999bb9999999dd99dddd9bb
    9999d9999bbb999d999bbb999999999ddddd99bb9999d9999bbb999d999bbb999999999ddddd99bb9999d9999bbb999d999bbb999999999ddddd99bb9999d9999bbb999d999bbb999999999ddddd99bb
    b999d9999bbb999ddbbbbd9999999999dddd99bbb999d9999bbb999ddbbbbd9999999999dddd99bbb999d9999bbb999ddbbbbd9999999999dddd99bbb999d9999bbb999ddbbbbd9999999999dddd99bb
    b999d999bbbb9999bbbbdd99999999999ddd99bbb999d999bbbb9999bbbbdd99999999999ddd99bbb999d999bbbb9999bbbbdd99999999999ddd99bbb999d999bbbb9999bbbbdd99999999999ddd99bb
    b999d999bbbb99bbbbbbdd99999999999ddd99bbb999d999bbbb99bbbbbbdd99999999999ddd99bbb999d999bbbb99bbbbbbdd99999999999ddd99bbb999d999bbbb99bbbbbbdd99999999999ddd99bb
    b99d999bbbbbbbbbbbbdddd9999999999dd9999bb99d999bbbbbbbbbbbbdddd9999999999dd9999bb99d999bbbbbbbbbbbbdddd9999999999dd9999bb99d999bbbbbbbbbbbbdddd9999999999dd9999b
    b99d999bbbbbbbbb99999dd999999999ddd9999bb99d999bbbbbbbbb99999dd999999999ddd9999bb99d999bbbbbbbbb99999dd999999999ddd9999bb99d999bbbbbbbbb99999dd999999999ddd9999b
    bb9d999bbbbbbbb999999dd99999999dddd9999bbb9d999bbbbbbbb999999dd99999999dddd9999bbb9d999bbbbbbbb999999dd99999999dddd9999bbb9d999bbbbbbbb999999dd99999999dddd9999b
    bbbd999bbbbbbb9999999ddd999999ddddd9999bbbbd999bbbbbbb9999999ddd999999ddddd9999bbbbd999bbbbbbb9999999ddd999999ddddd9999bbbbd999bbbbbbb9999999ddd999999ddddd9999b
    bbbb999bbbbb999999999ddd9999ddddd99999ddbbbb999bbbbb999999999ddd9999ddddd99999ddbbbb999bbbbb999999999ddd9999ddddd99999ddbbbb999bbbbb999999999ddd9999ddddd99999dd
    9bbbb99bbbbb9999999999ddd9ddddddd99999d99bbbb99bbbbb9999999999ddd9ddddddd99999d99bbbb99bbbbb9999999999ddd9ddddddd99999d99bbbb99bbbbb9999999999ddd9ddddddd99999d9
    99bbb99bbbbb9999999999dddddddddd999999d999bbb99bbbbb9999999999dddddddddd999999d999bbb99bbbbb9999999999dddddddddd999999d999bbb99bbbbb9999999999dddddddddd999999d9
    999bb99bbbbb99999999999ddddddddd999999d9999bb99bbbbb99999999999ddddddddd999999d9999bb99bbbbb99999999999ddddddddd999999d9999bb99bbbbb99999999999ddddddddd999999d9
    99dbb99bbbbb9999999999999ddddddd99999dd999dbb99bbbbb9999999999999ddddddd99999dd999dbb99bbbbb9999999999999ddddddd99999dd999dbb99bbbbb9999999999999ddddddd99999dd9
    99dbb99bbbbb99999999999999dddddd9999dd9999dbb99bbbbb99999999999999dddddd9999dd9999dbb99bbbbb99999999999999dddddd9999dd9999dbb99bbbbb99999999999999dddddd9999dd99
    9ddbbb9bbbbb99999999999999dddddd999ddd999ddbbb9bbbbb99999999999999dddddd999ddd999ddbbb9bbbbb99999999999999dddddd999ddd999ddbbb9bbbbb99999999999999dddddd999ddd99
    9d9bbb9bbbbbb9999999999999dddddddddd99999d9bbb9bbbbbb9999999999999dddddddddd99999d9bbb9bbbbbb9999999999999dddddddddd99999d9bbb9bbbbbb9999999999999dddddddddd9999
    9d99bbbbbbbbb9999999999999dddddddddd99999d99bbbbbbbbb9999999999999dddddddddd99999d99bbbbbbbbb9999999999999dddddddddd99999d99bbbbbbbbb9999999999999dddddddddd9999
    dd99bbbbbbbbb9999999999999dddddddd999999dd99bbbbbbbbb9999999999999dddddddd999999dd99bbbbbbbbb9999999999999dddddddd999999dd99bbbbbbbbb9999999999999dddddddd999999
    d9999bbbbbbbbb999999999999dddddd9999999dd9999bbbbbbbbb999999999999dddddd9999999dd9999bbbbbbbbb999999999999dddddd9999999dd9999bbbbbbbbb999999999999dddddd9999999d
    99999bbbbbbbbb999999999999ddddd9999999dd99999bbbbbbbbb999999999999ddddd9999999dd99999bbbbbbbbb999999999999ddddd9999999dd99999bbbbbbbbb999999999999ddddd9999999dd
    999999bbbbbbbb999999999999ddddd9999999dd999999bbbbbbbb999999999999ddddd9999999dd999999bbbbbbbb999999999999ddddd9999999dd999999bbbbbbbb999999999999ddddd9999999dd
    999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9
    999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9
    999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9
    999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9999999bbbbbbbbb99999999999ddddd9999999d9
    9999999bbbbbbbb99999999999ddddd999999dd99999999bbbbbbbb99999999999ddddd999999dd99999999bbbbbbbb99999999999ddddd999999dd99999999bbbbbbbb99999999999ddddd999999dd9
    9999999bbbbbbbb99999999999ddddd999999dd99999999bbbbbbbb99999999999ddddd999999dd99999999bbbbbbbb99999999999ddddd999999dd99999999bbbbbbbb99999999999ddddd999999dd9
    9999999bbbbbbbb99999999999ddddd999999ddd9999999bbbbbbbb99999999999ddddd999999ddd9999999bbbbbbbb99999999999ddddd999999ddd9999999bbbbbbbb99999999999ddddd999999ddd
    9999999bbbbbbbb99999999999ddddd9999999dd9999999bbbbbbbb99999999999ddddd9999999dd9999999bbbbbbbb99999999999ddddd9999999dd9999999bbbbbbbb99999999999ddddd9999999dd
    9999999bbbbbbbb9999999999dddddd9999999dd9999999bbbbbbbb9999999999dddddd9999999dd9999999bbbbbbbb9999999999dddddd9999999dd9999999bbbbbbbb9999999999dddddd9999999dd
    9999999bbbbbbbb9999999999dddddd9999999dd9999999bfffbbbfff99999999dddddd9999999dd9999999bbbbbbbb9999999999dddddd9999999dd9999999bbbbbbbb9999999999dddddd9999999dd
    99999999bbbbbbb9999999999dddddd9999999dd99999999f1fffff1f99999999dddddd9999999dd99999999bbbbbbb9999999999dddddd9999999dd99999999bbbbbbb9999999999dddddd9999999dd
    d9999999bbbbbbb9999999999dddddd99999999dd9999999fffffffff99999999dddddd99999999dd9999999bbbbbbb9999999999dddddd99999999dd9999999bbbbbbb9999999999dddddd99999999d
    dd999999bbbbbbb9999999999dddddd99999999ddd999999bf11f11f999999999dddddd99999999ddd999999bbbbbbb9999999999dddddd99999999ddd999999bbbbbbb9999999999dddddd99999999d
    dd999999bbbbbbb9999999999dddddd99999999ddd999999bfffffff999999999dddddd99999999ddd999999bbbbbbb9999999999dddddd99999999ddd999999bbbbbbb9999999999dddddd99999999d
    ddd99999bbbbbbb999999999ddddddd999999999ddd99999bfffdfff99999999ddddddd999999999ddd99999bbbbbbb999999999ddddddd999999999ddd99999bbbbbbb999999999ddddddd999999999
    ddd99999bbbbbbb999999999ddddddd999999999ddd99999bffd1dff99999999ddddddd999999999ddd99999bbbbbbb999999999ddddddd999999999ddd99999bbbbbbb999999999ddddddd999999999
    ddd99999bbbbbbb999999999ddddddd999999999ddd99999bfffffff99999999ddddddd999999999ddd99999bbbbbbb999999999ddddddd999999999ddd99999bbbbbbb999999999ddddddd999999999
    dddd9999bbbbbbb99999999dddddddd999999999dddd99ffff1fff1ffff9999dddddddd999999999dddd9999bbbbbbb99999999dddddddd999999999dddd9999bbbbbbb99999999dddddddd999999999
    dddd9999bbbbbbb99999999dddddddd999999999dddd99dffff1f1ffffd9999dddddddd999999999dddd9999bbbbbbb99999999dddddddd999999999dddd9999bbbbbbb99999999dddddddd999999999
    9ddd9999bbbbbbb99999999dddddddd9999999999ddd99ffffff1ffffff9999dddddddd9999999999ddd9999bbbbbbb99999999dddddddd9999999999ddd9999bbbbbbb99999999dddddddd999999999
    9ddd9999bbbbbbbb999999dddddddd99999999999ddd9999fffffffff99999dddddddd99999999999ddd9999bbbbbbbb999999dddddddd99999999999ddd9999bbbbbbbb999999dddddddd9999999999
    ddddddddbbbbbbbb999999dddddddd999999999dddddddddfffffffff99999dddddddd999999999dddddddddbbbbbbbb999999dddddddd999999999dddddddddbbbbbbbb999999dddddddd999999999d
    dddddddbbbbbbbbb999999dddddddd99999ddddddddddddbffbbbbbff99999dddddddd99999ddddddddddddbbbbbbbbb999999dddddddd99999ddddddddddddbbbbbbbbb999999dddddddd99999ddddd
    dddddddbbbbbbbbbdd999ddddddddd99dddddddddddddddbddbbbbbddd999ddddddddd99dddddddddddddddbbbbbbbbbdd999ddddddddd99dddddddddddddddbbbbbbbbbdd999ddddddddd99dddddddd
    dddddddbbbbbbbbbdddd9ddddddddddddddddddddddddddbbbbbbbbbdddd9ddddddddddddddddddddddddddbbbbbbbbbdddd9ddddddddddddddddddddddddddbbbbbbbbbdddd9ddddddddddddddddddd
    ddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddddddddddddddddddddd
    ddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddddddddddddddddddddd
    ddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbddddddddddddddddddddddd
    dddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddd
    dddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddd
    dddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddd
    dddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddd
    dddddbbbbbb7777777777ddddddddddddddddddddddddbbbbbb7777777777ddddddddddddddddddddddddbbbbbb7777777777ddddddddddddddddddddddddbbbbbb7777777777ddddddddddddddddddd
    dddddb77777777777777777777dddddddddddddddddddb77777777777777777777dddddddddddddddddddb77777777777777777777dddddddddddddddddddb77777777777777777777dddddddddddddd
    dddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddd
    dd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddd
    77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.showLongText("寧靜的森林", DialogLayout.Bottom)
game.showLongText("住著一隻可愛的台灣黑熊", DialogLayout.Bottom)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9996699999999969999999999999999999999999999669999999996999999999999999999999999999966999999999699999999999999999999999999996699999999969999999999999999997799999
    9777777799999669999999999999999999999969966699999999966999779999999999999999996996669999999996699999999999999999999999699666999999999669999999999999999997777777
    7777777777669966999966999999999999999966996996699966977777777777799999999999996699699669996699669999669999999999999999669969966999669966999966999999777777777767
    6666777777776966996966999999999999996676666666996997776677777777777777777999667666666699699669669969669999999999999966766666669969966966996966999777777777777676
    6666677777777766966669999999999999666677666669997777777777777777777777777777777776666999669666669666699999999999996666776666699966966666966669777777777777667677
    6666677777777776666699969999996669996667666667777777777766667776777777677777777777776966666666766666999699999966699966676666696666677776777777777777777777776667
    6666666667777777777766669966699966999666666667777777677667766666776667776677766677777777777777766776666699666999669997777777777777777777777666667766677766777666
    6666666666667777777777777777777777777777777777777766676666776667767766776666666666666677777777777777777777777777777777777777777777777776667766677677667766666666
    66b6666666666666666666777777777777777777777767777666666666666667667776676666666666b66666666666666666666766777667667777777777777777777666666666676677766766666666
    66b6666666666666666666666b677777777777777777776666666666666666666b6776666666666666b6666666666666666666666b677666666666666777777666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d499bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999959999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999599999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd9999995dd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999dd5dd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999dd5dddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9994999999bbbbb99bb5999d999999dddddddddd9999999999bbbbb99bbb99
    9d999995dddd5dddd99999999999bbbbb99bb9999d999999ddddddddd99999599999bbbbb99bb9999d999999ddddddddd99999999999b4bbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999959999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999dddddd59999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9995dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd49999999999999bbbbb9bbbdd999ddd999dddddd99999999999599bbbbb9bbbdd999ddd999dddddd99999995999999bbbbb9bbbdd9
    9999ddddddddd59999999999999bbbbbb9bbb9d99999dddddd5ddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddd5d9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbb4bbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999ddd5dddddd9599999999999bbbbbbbbb99d99999dddddddddd9999999949999bbbbbbbbb99d9
    999999dddd4ddd9995994999999bbb4bbbbb99dd999999ddddd4dd9999999999999bbbbbbbbb99dd499999dddddddd9994999999999bbbbbbbbb99dd999999dddddddd9995999999999bb4bbbbbb99dd
    d9999999dddddd999999999999bbbbbbb4b9999dd9999999ddd4dd999999949999bbbbbbbbb9999dd9995999dddddd999999999999bbbbbbbbb9999dd9999999dddddd9999999999995bbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999d4ddd999999999999bbbbbbb4b99999dd99999995dddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb49999
    dd9559999ddd5d999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd99999994dddd999999949999bbbbbbbb999999dd9999959ddddd994999999999bbbbbbbb999999
    9d9999999dd5dd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9995999d99999994dddd99499599999bbbbbbbbb999999
    9d9999999d5ddd99959999999bbbbbbbbb9999999d9999999ddddd95999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbb4bbbb9999994d99999994dddd99499999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d99599994dddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbb4bbb999999
    9d9999999dddd499999999999bbbbbbbbb9999999d9959999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99995999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99949999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd999499999995bbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd959999ddddd99499999999bbbbb4bb9999999ddd999999ddddd99999999999bbbbbbbb9499999ddd9999995dddd99549999999bbbbbbb59995999dd4999999ddddd95999949959bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbb4bb9999999dd9459999d4ddd99999949999bbbbbbbb9999999dd9999999ddddd99949999999bb5bbbbb9999999dd9999995ddd5d99999999999bbbbbbbb9999999
    dd9999999d4dddd9999999999bbbbbbbb9999999dd9959999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd5999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9959999dddddd9999999999bbbbbbbb9999999dd9599999dddddd9999999999bbbbbbbb9599999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9959999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9499999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999949999bbbbbbb9994999dd59999994dddddd9999995999bbbbbbb9499999d
    499999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd999999994ddddd4999499999bbbbbbb999999ddd999999994ddddd9949999994bbbbbbb999999dd
    d99999994dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd94999994dddddd9999499999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999949dddd4dd999999999bbbbbbb99999ddd999999994ddddddd994999999bbbbbbb99999ddd999999599ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddd4d994499999bbbbbbb99999ddd999999999ddddddd994999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbb499999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd994999999dddddddd99992999bbbbbbb99994ddd999999999dddddddd99999999b5bbbbb9999dddd959999999dddddd4d99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99992299bbbbbbb99994ddd999999999dddddddd99999999bbbbbbb9999dddd999499999ddd5dddd99999999bbbbbbb9999dddd
    999999999dddddddd99994999bbbbbbb9999ddd9999999999dddddddd99922299bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb2229ddd9999499999dddddddd99999999bbbbbbb9999ddd9
    9999995999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999222bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb2229ddd99999999999dddddddd999999b22bbbbb9999ddd9
    d999999999ddddd4dd999999bbbbbbbbddddddddd999999999dddddddd999222bbb4bbbbddddddddd999999999dddddddd999999bbbbbbbb2222ddddd999999999dddddddd999922222bbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999222bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbb2222ddddddddd99999dddddddd999922222bbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddddd222bbbbbbbbbddddddddddddddd99ddddddddddddddddbbbbbb2222dddddddddddd99ddddddddd99422222bbbbbbddddddd
    dddddddddddddddd22d9ddddbbbbbbbbbdddddddddddddddddddddddddddd222bbbbbbbbbddddddddddddddddddddddddddddddd22bbbbbb2222ddddddddddddd5dddddddddddd22222bbbbbbddddddd
    dddddddddddddddd22ddddddbbbbbbbbbbdddddddddddddddddddddddddd22222bbbbbbbbbddddddddddddddddddddddddddddd2222bbbb22222dddddddddddddddddddddddddd2222222bbbbbdddddd
    dddddddddddd4dd222dddd44bbbbbbbbbbddddddddddddddddddddd2dddd22222bbbbbbbbbddddddddddddddddddddddd2ddddd2222bbbb22222ddddddddddddddddddddddddd22222222bbbbbdddddd
    ddddddddddddddd222ddd4222bbbbbbbbbddddddddddddddddddddd22dd522222bbb222bbbddddddddddddddddddddddd22dddd2222bbb22222dddddd5ddddddddddddd2ddddd22222222bbbbbdddddd
    ddddddddddddddd2222dd2222bbbbbbbbbbdddddddddddddd4444dd2222d22222bb22222bbbdddddddddddddddddddddd2222d22222bb22222bdddddddddddddddddddd22dddd2222222222bbbbddddd
    ddddddddddddddd2222dd2222bbb222bbbbdddddddddddddddddddd2222222222b222222bbbdddddddddddddddddddddd2222222222b222222bdddddddddddddddddddd2222d222222222222bbbddddd
    ddddddddddddddd2222d22222bb22222bbbdddddddddddddddddddd2222222222e222222bbbdddddddddddddddddddddd2222222222e222222bdddddddddddddddddddd22222222222222222bbbddddd
    ddddddddddddddd2222222222b222222bbbddddddddddddddddddde22222222222222222ebbddddddddddddddddddddde22222222222222222edddddddddddddddddddd22222222222222222bbbddddd
    ddddddddddddddd2222222222e222222bbbddddddddddddddddddeee2222222222222222ebbddddddddddddddddddddeee2222222222222222eddddddddddddddddddde22222222222222222ebbddddd
    ddddddddd4dddee22222222222222222eeeddddddddddddddddddeeee222222222222222eebdddddddddddddddddddeeeee222222222222222eddddddddddddddddddeee2222222222222222eebddddd
    dddddddddddeeeee2222222222222222eeeeddddddddddddddeeeeeeee22222222222252eeeeeddddddddddddddeeeeeeeee22222222222222eedddddddddddddddeeeeee222522222222222eeeedddd
    ddddddddeeeeeeeee222222224222222eeeeeeddddddddddeeeeeeeeee52255525522222eeeeeeedddddddeeeeeeeeeeeeee22222222222222eeeeddddddddddeeeeeeeeee22222242222222eeeeeeed
    dddddeeeeeeeeeeeee22222222222222eeeeeeeedddddeeeeeeeeeeeeee552225252222eeeeeeeeeeddddeeeeeeeeeeeeeeee225552252222eeeeeeeeddddeeeeeeeeeeee522222222222222eeeeeeee
    eeeeeeeeeeeeeeeeee22222222222222eeeeeeeeeeeeeeeeeeeeeeeeee5225252222242eeeeeeeeeeeeeeeeeeeeeeeeeeeeee252222224222eeeeeeeeeeeeeeeeeeeeeeeeee222222222222eeeeeeeee
    eeeeeeeeeeeeeeeeeee222222222222eeeeeeeeeeeeeeeeeeeeeeeee5ee425222224522eeeeeeeeeeeeeeeeeeeeeeeeeeeeee225422222222eeeeeeeeeeeeeeeeeeeeeeee55225222422222eeeeeeeee
    eeeeeeeeeeeeeeeee5e222452252222eeeeeeeeeeeeeeeeeeeeeeeeeeee22422222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222242222eeeeeee4eeeeeeeeeeeeeeeeee5222225222224eeeeeeeee
    eeeeeeeeeeeeeeee55e222222222222ee4eeeeeeeeeeeeeeeeeeeeeeeee42222422425eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222225522eeeeeeeeeeeeeeeeeeeeeeeeeeee22525522252eeeeeeeeee
    eeeeeeeeeeeeeeeeee552222222252eee4eeeeeeeeeeeeeeeeeeeeeeeeee252225222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee224225525eeeeeeeeeeeeeeeeeeeeeeeeeeee22254222244e4eeeeeeee
    eeeeeeeeeeeeeee4eee5525422222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5e222225eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22225eeeeeeeeeeeeeeeeeeeeeeeeeeeee5e422222225eeeeeeeeeee
    eeeeeeeeeeeeeeeeeeee555222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeee5e5eee25eeee54eeeeeeeeeeeeeeeeeeeeeeee5eee22222e5eeeeeeeeeee
    eeeeeeeeeeeeeeeeee55ee22452eee4e5ee4eeeeeeeeeeeeeeeeeeeeeeee5ee5eeee5e54eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeeeeeeeeeeeeeeeeeeee55eee5ee22ee5ee5eeeeeeee
    eeeeeeeeeeeeeeeeee555eee225eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55eeeeeeeee5eeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeee54ee45ee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeeeeeeee5eeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
game.showLongText("由於連日的豪雨", DialogLayout.Bottom)
game.showLongText("發生了土石流", DialogLayout.Bottom)
game.showLongText("請快速逃離", DialogLayout.Bottom)
主角 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f . . . f f f . . . 
    . . . . f 1 f f f f f 1 f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . . f 1 1 f 1 1 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f d f f f . . . . 
    . . . . . f f d 1 d f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . f f f f 1 f f f 1 f f f f . 
    . . d f f f f 1 f 1 f f f f d . 
    . . f f f f f f 1 f f f f f f . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f . . . . . f f . . . 
    . . . . d d . . . . . d d . . . 
    `, SpriteKind.Player)
let 主角血量 = statusbars.create(20, 4, StatusBarKind.主角血量)
主角血量.attachToSprite(主角)
主角血量.max = 200
主角血量.value += 200
主角血量.setColor(7, 2)
主角血量.setLabel("HP")
主角血量.z = -2
關卡限制 = 0
發射時機 = false
主角.ay = 250
controller.moveSprite(主角, 100, 0)
scene.cameraFollowSprite(主角)
level()
角色重生點()
嗎啡()
game.onUpdate(function () {
    主角.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . f f f . . 
        . . . . . f 1 f f f f f 1 f . . 
        . . . . . f f f f f f f f f . . 
        . . . . . . f 1 1 f 1 1 f . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . f f f d f f f . . . 
        . . . . . . f f d 1 d f f . . . 
        . . . . . . f f f f f f f . . b 
        . . . f f f f 1 f f f 1 f f f f 
        . . . d f f f f 1 f 1 f f f f d 
        . . . f f f f f f 1 f f f f f f 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f . . . . . f f . . 
        . . . . . d d . . . . . d d . . 
        `)
    if (主角.vy < 0) {
        主角.setImage(img`
            . . . . . f f f . . . f f f . . 
            . . . . . f 1 f f f f f 1 f . . 
            . . . . . f f f f f f f f f . . 
            . . . . . . f 1 1 f 1 1 f . . . 
            . . . . . . f f f f f f f . . . 
            . . . . . . f f f d f f f . . . 
            . . . . . . f f d 1 d f f . . . 
            . . . . . . f f f f f f f . . . 
            . . . f f f f 1 f f f 1 f f f f 
            . . . d f f f f 1 f 1 f f f f d 
            . . . f f f f f f 1 f f f f f f 
            . . . . . f f f f f f f f f . . 
            . . . . . f f f f f f f f f . . 
            . . . . . f f . . . . . f f . . 
            . . . . . d d . . . . . d d . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (主角.vy > 0) {
        主角.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . f f f . . 
            . . . . . f 1 f f f f f 1 f . . 
            . . . . . f f f f f f f f f . . 
            . . . . . . f 1 1 f 1 1 f . . . 
            . . . . . . f f f f f f f . . . 
            . . . . . . f f f d f f f . . . 
            . . . . . . f f d 1 d f f . f d 
            . . . . . . f f f f f f f . f f 
            . . . . . f f 1 f f f 1 f f f . 
            . . . . f f f f 1 f 1 f f f . . 
            . . . f f . f f f 1 f f f . . . 
            . . . d f . f f f f f f f . . . 
            . . . . . f f f . . . . f f . . 
            . . . . f f f . . . . f f f . . 
            . . . . d f . . . . . d f . . . 
            `)
    }
    if (主角.vx < 0) {
        主角.image.flipX()
    }
})
game.onUpdateInterval(500, function () {
    if (關卡限制 == 4) {
        if (Math.percentChance(45)) {
            for (let index = 0; index < 4; index++) {
                隕石1 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 1 2 . . . . . . 
                    . . . . . . . 2 1 2 . . . . . . 
                    . . . . . . . 2 1 2 . . . . . . 
                    . . . . . . . 3 1 3 . . . . . . 
                    . . . . . . 2 3 1 3 2 . . . . . 
                    . . . . . . 2 1 1 1 2 . . . . . 
                    . . . . . . 2 1 1 1 3 . . . . . 
                    . . . . . . 3 1 1 1 3 . . . . . 
                    . . . . . . 3 1 1 1 3 . . . . . 
                    . . . . . . 3 1 1 1 3 . . . . . 
                    . . . . . . 2 3 1 3 2 . . . . . 
                    . . . . . . . 2 2 2 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.enemy4)
                隕石1.setPosition(randint(主角.x + 83, 主角.x + 2), randint(29, 30))
                隕石1.vy = 100
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    if (關卡限制 == 2) {
        if (Math.percentChance(45)) {
            for (let index = 0; index < 4; index++) {
                隕石 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . e e e e e e e e . . . . 
                    . . . . e 1 e e e e 1 e e . . . 
                    . . . e e e f e e e e e e e . . 
                    . . e d e e e e d e 1 f e e . . 
                    . . e e e f e e e e e e e e e . 
                    . e e e e e e d f f e e d e e . 
                    . . f e e d e e e e e e e f . . 
                    . . e e e e e e e f e e e e . . 
                    . . . f e 1 f e e e e e e . . . 
                    . . . e e e e e d e e e e . . . 
                    . . . . . e e e e e f e . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.enemy1)
                隕石.setPosition(randint(主角.x + 83, 主角.x + 2), randint(29, 30))
                隕石.vy = 100
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    if (發射時機 == true) {
        發射時機 = false
    }
})
game.onUpdateInterval(100, function () {
    if (關卡限制 == 4) {
        大魔王.vx = 100
    }
})
