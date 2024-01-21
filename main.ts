scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
    movement += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (true) {
            tiles.setCurrentTilemap(tilemap`level13`)
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (location.column == 45 && location.row == 75) {
            if (keyNumber >= 0) {
            	
            } else {
                game.splash("")
            }
        } else if (location.column == 45 && location.row == 75) {
            if (keyNumber >= 0) {
            	
            } else {
                game.splash("")
            }
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    movement += -1
    pause(150)
    if (movement == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 3 2 2 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f f 6 2 2 2 2 2 2 6 6 f . . 
            . . f 6 2 f f f f f f 2 6 f . . 
            . . f f f f 6 6 6 6 f f f f . . 
            . f f 6 f 3 f 4 4 f 3 f 6 f f . 
            . f 6 6 4 1 f 3 3 f 1 4 6 6 f . 
            . . f 6 6 3 3 3 3 3 3 6 6 f . . 
            . . . f 6 6 4 4 4 4 6 6 f . . . 
            . . 6 4 f 2 2 2 2 2 2 f 4 6 . . 
            . . 4 3 f 2 2 2 2 2 2 f 3 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
    movement += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (Floor == 1) {
        if (location.column == 59 && location.row == 77) {
            floorNum = game.askForNumber("Would you like to go to the 2nd or 3rd floor?")
            if (floorNum == 2) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level15`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 61))
                Floor += 1
            } else if (floorNum == 3) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level17`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 55))
                Floor += 2
            } else if (floorNum == 1) {
                game.showLongText("You're already on this floor extra poopy stinky head...", DialogLayout.Full)
            } else {
                game.showLongText("That ain't a floor poopy head...", DialogLayout.Full)
            }
        } else if (location.column == 59 && location.row == 13) {
            floorNum = game.askForNumber("Would you like to go to the 2nd or 3rd floor?")
            if (floorNum == 2) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level15`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 5))
                Floor += 1
            } else if (floorNum == 3) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level17`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 6))
                Floor += 2
            } else if (floorNum == 1) {
                game.showLongText("You're already on this floor extra poopy stinky head...", DialogLayout.Full)
            } else {
                game.showLongText("That ain't a floor poopy head...", DialogLayout.Full)
            }
        }
    } else if (Floor == 2) {
        if (location.column == 59 && location.row == 61) {
            floorNum = game.askForNumber("Would you like to go to the 1st or 3rd floor?")
            if (floorNum == 1) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level2`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 77))
                Floor += -1
            } else if (floorNum == 3) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level17`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 55))
                Floor += 1
            } else if (floorNum == 2) {
                game.showLongText("You're already on this floor extra poopy stinky head...", DialogLayout.Full)
            } else {
                game.showLongText("That ain't a floor poopy head...", DialogLayout.Full)
            }
        } else if (location.column == 59 && location.row == 5) {
            floorNum = game.askForNumber("Would you like to go to the 1st or 3rd floor?")
            if (floorNum == 1) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level2`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 13))
                Floor += -1
            } else if (floorNum == 3) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level17`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 6))
                Floor += 1
            } else if (floorNum == 2) {
                game.showLongText("You're already on this floor extra poopy stinky head...", DialogLayout.Full)
            } else {
                game.showLongText("That ain't a floor poopy head...", DialogLayout.Full)
            }
        }
    } else if (Floor == 3) {
        if (location.column == 59 && location.row == 55) {
            floorNum = game.askForNumber("Would you like to go to the 1st or 2nd floor?")
            if (floorNum == 1) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level2`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 77))
                Floor += -2
            } else if (floorNum == 2) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level15`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 61))
                Floor += -1
            } else if (floorNum == 3) {
                game.showLongText("You're already on this floor extra poopy stinky head...", DialogLayout.Full)
            } else {
                game.showLongText("That ain't a floor poopy head...", DialogLayout.Full)
            }
        } else if (location.column == 59 && location.row == 6) {
            floorNum = game.askForNumber("Would you like to go to the 1st or 2nd floor?")
            if (floorNum == 1) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level2`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 13))
                Floor += -2
            } else if (floorNum == 2) {
                movement = 0
                tiles.setCurrentTilemap(tilemap`level15`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 5))
                Floor += -1
            } else if (floorNum == 3) {
                game.showLongText("You're already on this floor extra poopy stinky head...", DialogLayout.Full)
            } else {
                game.showLongText("That ain't a floor poopy head...", DialogLayout.Full)
            }
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    movement += -1
    pause(150)
    if (movement == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        mySprite.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    movement += -1
    pause(150)
    if (movement == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        mySprite.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
    movement += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (location.column == 45 && location.row == 75) {
            tiles.setCurrentTilemap(tilemap`level13`)
        } else if (false) {
            tiles.setCurrentTilemap(tilemap`level15`)
            tiles.setCurrentTilemap(tilemap`level17`)
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    movement += -1
    pause(150)
    if (movement == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
    movement += 1
})
let floorNum = 0
let mySprite: Sprite = null
let movement = 0
let keyNumber = 0
let Floor = 0
tiles.setCurrentTilemap(tilemap`level2`)
Floor = 1
let cutscene = 0
keyNumber = 0
movement = 0
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 3 2 2 f f f . . . 
    . . f f f 6 6 6 6 6 6 f f f . . 
    . . f f 6 2 2 2 2 2 2 6 6 f . . 
    . . f 6 2 f f f f f f 2 6 f . . 
    . . f f f f 6 6 6 6 f f f f . . 
    . f f 6 f 3 f 4 4 f 3 f 6 f f . 
    . f 6 6 4 1 f 3 3 f 1 4 6 6 f . 
    . . f 6 6 3 3 3 3 3 3 6 6 f . . 
    . . . f 6 6 4 4 4 4 6 6 f . . . 
    . . 6 4 f 2 2 2 2 2 2 f 4 6 . . 
    . . 4 3 f 2 2 2 2 2 2 f 3 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 42))
forever(function () {
    if (movement < 1) {
        movement = 0
    } else if (movement < 0) {
        movement = 0
    }
})
