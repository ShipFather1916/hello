scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite4, location4) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            if (calKey == 0) {
                game.showLongText("Pre-Calulus key needed to open this door... ", DialogLayout.Bottom)
            } else {
            	
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            game.showLongText("This Door is Locked from the outside...", DialogLayout.Bottom)
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (textCutscene == 0) {
    	
    } else {
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
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (textCutscene == 0) {
    	
    } else {
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
    }
})
function Quiz () {
	
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (textCutscene == 0) {
    	
    } else {
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
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (textCutscene == 0) {
    	
    } else {
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
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite5, location5) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (textCutscene == 0) {
    	
    } else {
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
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite8, location8) {
    tiles.setCurrentTilemap(tilemap`level44`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 22))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (chemKey == 0) {
            game.showLongText("Chemistry Key required to open this door...", DialogLayout.Bottom)
        } else {
        	
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (textCutscene == 0) {
    	
    } else {
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
    }
})
function Siminar () {
    let Simnar: Sprite = null
    tiles.setCurrentTilemap(tilemap`level101`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 13))
    if (mySprite.overlapsWith(Simnar)) {
        if (controller.A.isPressed()) {
        	
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile59`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            openingCutscene()
        } else if (cutscene + calKey < 9) {
            game.showLongText("This door requires 9 keys to open...", DialogLayout.Bottom)
        } else {
        	
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (textCutscene == 0) {
    	
    } else {
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
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite7, location7) {
    if (Floor == 1) {
        if (location7.column == 11 && location7.row == 59) {
            tiles.setCurrentTilemap(tilemap`level15`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(25, 37))
            Floor += 1
        } else if (location7.column == 13 && location7.row == 59) {
            tiles.setCurrentTilemap(tilemap`level15`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(27, 37))
            Floor += 1
        }
    } else if (Floor == 2) {
        if (location7.column == 12 && location7.row == 23) {
            tiles.setCurrentTilemap(tilemap`level17`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 68))
            Floor += 1
        } else if (location7.column == 17 && location7.row == 23) {
            tiles.setCurrentTilemap(tilemap`level45`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(18, 1))
            Floor += 1
        } else if (location7.column == 5 && location7.row == 23) {
            tiles.setCurrentTilemap(tilemap`level15`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(21, 96))
        }
    } else if (Floor == 3) {
        if (location7.column == 31 && location7.row == 69) {
            tiles.setCurrentTilemap(tilemap`level44`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 22))
            Floor += -1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite6, location6) {
    if (Floor == 1) {
        if (location6.column == 59 && location6.row == 77) {
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
        } else if (location6.column == 59 && location6.row == 13) {
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
        if (location6.column == 59 && location6.row == 61) {
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
        } else if (location6.column == 59 && location6.row == 5) {
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
        if (location6.column == 59 && location6.row == 55) {
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
        } else if (location6.column == 59 && location6.row == 6) {
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
        } else if (location6.column == 19 && location6.row == 1) {
            tiles.setCurrentTilemap(tilemap`level44`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(18, 22))
            Floor += -1
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (textCutscene == 0) {
    	
    } else {
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
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite2, location2) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite9, location9) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            game.showLongText("This Door is Locked from the outside...", DialogLayout.Bottom)
        }
    }
})
function openingCutscene () {
    game.setDialogTextColor(15)
    game.showLongText("This door requires 9 keys to open...", DialogLayout.Bottom)
    if (controller.A.isPressed()) {
        pause(500)
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
        pause(500)
        game.setDialogTextColor(14)
        game.showLongText("Crap!", DialogLayout.Bottom)
        if (controller.A.isPressed()) {
            game.setDialogTextColor(2)
            game.showLongText("I should go find some help...", DialogLayout.Bottom)
            game.setDialogTextColor(15)
            if (controller.A.isPressed()) {
                game.setDialogTextColor(15)
                game.showLongText("Red Door locks or pads represent inaccessible areas. Yellow Door locks and pads represent locked areas that require 1 or more keys to access...", DialogLayout.Center)
                cutscene += 1
            }
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite3, location3) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            if (Floor == 3) {
                if (location3.column == 38 && location3.row == 53) {
                	
                } else if (location3.column == 47 && location3.row == 53) {
                	
                }
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite10, location10) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            if (Floor == 1) {
                if (location10.column == 32 && location10.row == 42) {
                    Siminar()
                }
            }
            if (Floor == 2) {
                if (location10.column == 34 && location10.row == 39) {
                	
                } else if (location10.column == 30 && location10.row == 84) {
                	
                }
            }
            if (Floor == 3) {
                if (location10.column == 44 && location10.row == 26) {
                	
                } else if (location10.column == 37 && location10.row == 40) {
                	
                } else if (location10.column == 4 && location10.row == 5) {
                	
                } else if (location10.column == 4 && location10.row == 14) {
                	
                } else if (location10.column == 1 && location10.row == 19) {
                	
                }
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite11, location11) {
    if (location11.column == 25 && location11.row == 36) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 58))
        Floor += -1
    } else if (location11.column == 27 && location11.row == 36) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 58))
        Floor += -1
    }
})
let floorNum = 0
let movement = 0
let calKey = 0
let chemKey = 0
let cutscene = 0
let Floor = 0
let textCutscene = 0
let mySprite: Sprite = null
let keyNumber = 0
scene.setBackgroundImage(img`
    6666666333355555555555555555555555555555555555555555555555555555333344444444444444444444444444444444444444444444444443333555555555555555555555555555555555555555
    6666666333355555555555555555555555555555555555555555555555555555333344444444444444444444444444444444444444444444444443333555555555555555555555555555555555555555
    6666666333355555555555555555555555555555555555555555555555555555333344444444444444444444444444444444444444444444444443333555555555555555555555555555555555555555
    6666666333355555555555555555555555555555555555555555555555555555333344444444444444444444444444444444444444444444444443333555555555555555555555555555555555555555
    6666666333355555555555555555555555555555555555555555555555555555333344444444444444444444444444444444444444444444444443333555555555555555555555555555555555555555
    6666666.................................................................................................................................555555555555555555555555
    6666666.................................................................................................................................555555555555555555555555
    6666666.................................................................................................................................555555555555555555555555
    6666666.................................................................................................................................555555555555555555555555
    6666666.................................................................................................................................555555555555555555555555
    6666666.................................................................................................................................555555555555555555555555
    3333333.................................................................................................................................333333333333333333333333
    3333333.................................................................................................................................333333333333333333333333
    3333333.................................................................................................................................333333333333333333333333
    3333333.................................................................................................................................333333333333333333333333
    4444444.................................................................................................................................666666666666666666666666
    4444444.................................................................................................................................666666666666666666666666
    4444444.................................................................................................................................666666666666666666666666
    4444444.................................................................................................................................666666666666666666666666
    4444444.........333355555555555555555555555555555555555555555555555555555333344444444444444444444444444444444444444444444444443333555555555555555666666666666666
    4444444.........333355555551111111111111555555555555555555555555555555555333344444444444444444444444444444444444444444444444443333555555555555555666666666666666
    4444444.........333355555111999999999991111155555555555555555555555555555333344444444444444444444444444444444444444444444444443333555555555555555666666666666666
    4444444.........333355551199999999999999999111155555555555555555555555555333344444444444444444444444444441114444444444444444443333555555555555555666666666666666
    4444444.........333355111999999999999999999999115555555555555555555555555333344444444444444444444444444411911444444444444444443333551111555555555666666666666666
    4444444.........333351199999999999999999999999911155555555555555555555555333344444444444444444444444444419991144444444444444443333511991555555555666666666666666
    4444444.........333331999999999999999999999999999113333333333333331111111111111111111333333333333333333319999113333333333333333333119991333333333666666666666666
    4444444.........333311999999999999999999999999999911333333333333111999999999999999991111333333333333333319999913333333333333333333199991333333333666666666666666
    4444444.........333319999999111119999999999999999991333333333311199999999999999999999991333333333333333319999991333333333333333331999991333333333666666666666666
    4444444.........333119991111144411111111999999999991333333333119999999999999999999999991333333333333333319999991133333333333333319999991133333333666666666666666
    4444444.........444199111444444444444441111999999991144443333199999999999999999999999991155555555555555519999999155555553333666119999999166666666666666666666666
    4444444.........441199144444444444444444444119999991444443331999999999999999999999999999155555555555555519999999115555553333661199999999116666666666666666666666
    4444444.........441999144444444444444444444411199991444443331999999999999999999999999999155555555555555519999999915555553333611999999999916666666666666666666666
    4444444.........441999144444444444444444444444199911444443331999999999999999999999999999155555555555555519999999911555553333619999999999916666666666666666666666
    4444444.........411999144444444444444444444444419114444443331999999999999999999999999999155555555555555519999999991555553333199999999999991666666666666666666666
    4444444.........419999144444444444444444444444411144444443331999999999999999999999999999155555555555555519999999991555553331199999999999991666666666666666666666
    4444444.........199999144444444444444444444444444444444443331999999999999999999999999999155555555555555519999999991155553319999999999999991666666666666666666666
    4444444.........199999114444444444444444444444444444444443331999999999999999999999999999155555555555555519999999999155553319999999999999999166666666666666666666
    4444444.........119999911444444444444444444444444444444443331999999999999111111111111111155555555555555519999999999115553319999999999999999166666666666666666666
    4444444.........419999991144444444444444444444444444444443331999999999111155555555555555555555555555555519999999999915553199999999999999999166666666666666666666
    4444444.........419999999144444444444444444444444444444443331999999999155555555555555555555555555555555519999999999915551999999999999999999116666666666666666666
    4444444.........419999999911444444444444444444444444444443331999999999115555555555555555555555555555555519999999999991551999999999999999999916666666666666666666
    4444444.........419999999991114444444444444444444444444443331999999999911111111155555555555555555555555519999999999991111999999999999999999916666666666666666666
    4444444.........411999999999911144444444444444444444444443331999999999999999999111155555555555555555555519999999999999119999999119999999999916666666666666666666
    4444444.........441999999999999111111111444444444444444443331999999999999999999999115555555555555555555519999999999999999999991111999999999991666666666666666666
    4444444.........441999999999999999999991111144444444444443331999999999999999999999915555555555555555555519999999999999999999911661199999999991666666666666666666
    4444444.........441999999999999999999999999111444444444443331999999999999999999999915555555555555555555519999999999999999999116666199999999991666666666666666666
    4444444.........441999999999999999999999999991144444444443333199999999999999999999915555555555555555555519999999999999999991166666119999999991666666666666666666
    4444444.........441119999999999999999999999999144444444443333199999999999999999999915555555555555555555519999999999999999111666666611999999991666666666666666666
    4444444.........444411999999999999999999999999114444444443333199999999999999999999115555555555555555555519999999999911999133666666661999999991666666666666666666
    4444444.........444441119999999999999999999999914444444443333199999999999999999999155555555555555555555519999999999151111133666666661999999991666666666666666666
    3333333.........444444411111199999999999999999911444444443333199999999999999999991155555555555555555555519999999999155553333666666661199999999166333333333333333
    3333333.........444444444444411199999999999999991444444443333199999999999999999915555555555555555555555519999999999155553333666666666199999999166333333333333333
    3333333.........444444444444444111999999999999991444444443333199999999999991111155555555555555555555555519999999991155553333666666666199999999166333333333333333
    3333333.........444444444444444441119999999999991444444443333199999999991115555555555555555555555555555519999999991555553333666666666199999999166333333333333333
    5555555.........444444444444444444419999999999991444444443333199999999991555555555555555555555555555555519999999991555553333666666666119999999166444444444444444
    5555555.........444444444444444444419999999999991144444443333199999999991111115555555555555555555555555519999999991555553333666666666619999999166444444444444444
    5555555.........444444444444444444419999999999999144444443333199999999999999911111111155555555555555555519999999911555553333666666666619999999166444444444444444
    5555555.........444444444444444444419999999999999144444443333119999999999999999999999111555555555555555519999999915555553333666666666611999999166444444444444444
    5555555555555555444444444444444444419999999999999144444443333519999999999999999999999991155555555555555519999999915555553333666666666661999999166444444444444444
    5555555555555555444444444444444111199999999999991144444443333519999999999999999999999999115555555555555519999999915555553333666666666661999999166444444444444444
    5555555555555555444444411444411199999999999999911444444443333519999999999999999999999999915555555555555511999999915555553333666666666661999999166444444444444444
    5555555555555555444441119111119999999999999999914444444443333519999999999999999999999999915555555555555551999999915555553333666666666661999999166444444444444444
    5555555555555555444441999999999999999999999999914444444443333511999999999999999999999999915555555555555551999999915555553333666666666661999999166444444444444444
    5555555555555555444441999999999999999999999999114444444443333551199999999999999999999999915555555555555551999999915555553333666666666661199999166444444444444444
    5555555555555555333331199999999999999999999999133333333333333333119999999999999999999999913333333333333331199999113333333333333333333333111111333444444444444444
    5555555555555555333331199999999999999999999991333333333333333333311999999999999999999991113333333333333333199991133333333333333333333333333333333444444444444444
    5555555555555555333333119999999999999999991113333333333333333333331111111111111111111111133333333333333333311111333333333333333333333333333333333444444444444444
    5555555555555555333333311111111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333444444444444444
    5555555555555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444
    5555555555555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444
    5555555555555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444
    5555555555555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    5555555555555555553333666666666666666666666666666666666666666666666666666666666666666666666633334444444444444444444444444444444444444444444444444444444444444444
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    4444444444444444444444444444444444444444444433335555555555555555555555555555555555555555555555555555555555333366666666666666666666666666666666666666666666666666
    `)
pauseUntil(() => controller.A.isPressed())
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mySprite = sprites.create(img`
    . . . . . f f f f . . . . . . . 
    . . . f f e e e e f f . . . . . 
    . . f e e e f f e e e f . . . . 
    . f f f f f 2 2 f f f f f . . . 
    . f f e 2 e 2 2 e 2 e f f . . . 
    . f e 2 f 2 f f 2 f 2 e f . . . 
    . f f f 2 2 e e 2 2 f f f . . . 
    f f e f 2 f e e f 2 f e f f . . 
    f e e f f e e e e f e e e f . . 
    . f e e e e e e e e e e f . . . 
    . . f e e e e e e e e f . . . . 
    . e 4 f f f f f f f f 4 e . . . 
    . 4 d f 2 2 2 2 2 2 f d 4 . . . 
    . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 37))
scene.cameraFollowSprite(mySprite)
textCutscene = 0
Floor = 1
cutscene = 0
chemKey = 0
calKey = 0
movement = 0
pause(1000)
game.setDialogTextColor(2)
game.showLongText("Zzzzzzzzzzzzzzzzzzzz... ", DialogLayout.Bottom)
if (controller.A.isPressed()) {
    pause(1000)
    mySprite.setImage(img`
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
        `)
    pause(1000)
    game.setDialogTextColor(14)
    game.showLongText("OH NO!", DialogLayout.Bottom)
    if (controller.A.isPressed()) {
        game.setDialogTextColor(2)
        game.showLongText("How long have I been asleep?", DialogLayout.Bottom)
        if (controller.A.isPressed()) {
            game.setDialogTextColor(15)
            game.showLongText("I better leave before they lock the doors...", DialogLayout.Bottom)
            if (controller.A.isPressed()) {
                game.showLongText("Move with the arrow keys or D pad if you are on controller. To interact with doors, press \"A\" over the Door Knob or Door Pad.", DialogLayout.Full)
                textCutscene += 1
                controller.moveSprite(mySprite)
            }
        }
    }
}
let mySprite20240125T214816683Z = sprites.create(assets.image`Shawn`, SpriteKind.Player)
let mySprite20240125T215146265Z = sprites.create(assets.image`Akarian`, SpriteKind.Player)
let mySprite20240125T215740393Z = sprites.create(img`
    ccffccfffcccdddbcfffffffcccffcfcccffffccccccfccccccffcffffcccccccccccccccccfccfcfccccccccccffcccccccffffccffccffcccffccccccfcfcccccccffffcccfccccccccccccccfffc
    fffcfffffffcbdbcfffffffcffffffcccffffccccfcccfccfffcfffffffccccccccccccccfcfcfffffccccccccffcfffffccffffcffcccfccffffcffcfcffccccccccfffcfcfccccccccccfccccfccf
    cfcfffccfcccdddccffcfffffffffcccfffcffccffccffffffffffffcccccccccccccccfccccfccccccccccfccccffffcccfccfcfcffffccffffcffffcccccccccccccccccccccccccccccccfccfffc
    cfffffccccccdddecfffffcccffffcffffcfccffcfffcfffffffffcccccccccccfccccccccccccccccccccfcccccfcfccfccffcfffffccffffffcfcccccccccccccfccccccccccccccccccccfffcccc
    ccfccccfffccdddbffcffffffffcfcffffccccccffffffffffccffcccccccccccccfcccccffccccccccccfccccccffcffccfffccffffcffffcffcfccccccccccccccccccccccccccccccccccfcccccc
    fcfffcffccccbd1cffcfffffffffccfffccccffffffffffffcfffcccccccccccccccccccccccccccfffccccccccccccfccfcfcfffffcffccfcfcccccccccccfcccccccfcccccccccccccccffcfccccf
    ccccffccfcccdd1bcffffffffffccfffcccccfcffffffffccfffffcccccccccccccccccccccccccccccccccccfffcccfcffcccfcffffcccffccccccccccccfccccccccccccccccccccfcffccccccccc
    cffffcfccfccbddccfffffccffccfcffcccccffcffffffcfcfffffccfccfcccccccccccfccccccccccccccfcfcccccccfcfcfffffcffcffffcfccccfcffcccfcccccccccccccccccccffffccccccccc
    ccccfcfcccccdddbcffffffffccfffccfcccfcffffffcffffffffccffccccccccccccccccccccccccfffffcfcfccccccccffffffffffcffffccffcfcfcccfcccfcccccccccccccccfffcccfcccccccc
    cffcfccccffcbd1cffffffffccffffcccccfffffffccffffffffffffcccccccccccfcccccccccfcccccccffccccccfcfcfffcffccffccfffcccccccffcccfcccccccccccccccffccccccccccccccccc
    ccccccccccccdddbfcffffcfcccfccccffccffffcccffffffffffcfccccccccccfcccbcccccccfccccffcfccccfffcccfffffccfffffffcfccccccccccccccccccccccccccccccfcccccccccccccccc
    cffccfcffcccbd1effffcfffffffcccfffcfffcfcffffffffffffffccccccccccccccccccccccccccfcfcffcfccfccfffccfcfffcfcccccccccccccccccccfcccccccccfccccfcccccccccccccccccc
    ccfccfcfccccbd1decffcfcfffcccfffcffffcffffffffcffffcffccfccccccfccccccccccccccccccccccccfffffffffcfccfcccfccccccccccccccccccccccccccccccccccccccccccccccccccccf
    cfccccccfcccbd1dbfffffcffffcccfcffffffffffffcccffffffccfcccfccccccbcccccccccccccccfccffffcffffffffffffccfcccccccfccccccccffcccccccccccccccccccccccccccccccccfff
    ccfcfcccccccdd1deffffffffffcfccfffffffffffffcfffffffffcfccccccccccccccccccccccccccccccffffffffccccfccccccffcccfcccfcccffccccccfccccccccccccccccccccccccfcccfffc
    ccccccccccccbd1ddccfffffffcfcccfffffffffcfffffffcffffccfcccffcccccccbccccccccccccccccfffcccfffccccfcccffffccccccccfccfcccfcccccccccccccccccccccccffccffffccfffc
    fccccfccccccdd1ddcccfffffffcffcfffffffccfffffffcccffccccccfcccccccccccccccccccccccccccccffcfccccffffcffcfccccccccfcccfccccccccccccccccccccccccccfcfffccfcffffcc
    cfcccfccccccdd1ddcfffffffffffffffffffffccfffffffffccffccfcfccccccccccccccccccccccccfcfffcfcfccccffcfffccfccccfcfcfcccccfccccccccccccccccccccfcccfffccfffffffccc
    ccccccfcccccbd1bbcffffffccffffffffffffffffffffffccccfcffffccccfcccccccccccccccffffffcfccccfcfffffcccccfcffcffffccfccfccccccccfcfccffcfcccfccccfcfcccffffcfccccf
    ccccfcccccccddddcccfffffcfffffffffffffffffffffffcffcfffffcccccccccccccccccfccfcccfcccccfccfcffccccfcfcffffcfffcccccfcccccccccfccccfcccfccccccccccccfffcccfccccc
    ccccccccccccddddbffffccfffccfffffffcffffffffffffcfffccccccccccccccccccccccccccccffcccccccffffffcccfcccfccffcffcccccccccccccccccccccccccccccccccccccccfccfccccfc
    cfccccccccccddddcccfffffffcfffffffccffcffffffffffffffcccffffffffccccccccccccccccccccccccfcffffcccccccfffffcffcccccccffccccccccccccccccccccccccccccccfccfccccfcc
    cfcccccccfccbdddcccfffffffffffffffcfffffffffffffffffffffffffffffcffccccccccccfcfcccccfffcffffcfcfcccccfcfffcfccccfcccccccccccccccccccccccccccccccccccccccccffcc
    cfcccccccfccddddccfcffffffffffffffffffffffffffffffffffffcfcfcfcccccccccccccccccccccccffcffffccccccccfffcccffffccccccccccfcffccccccfccccccccccccccccccfcccccfccc
    cccccfccccccbbdbbfffffffffffffffffffffffffffffffffffffcffccfcffcccccccccccccccccccccfcffffffccccccfcccccfccffcfffffffcfcccfccfcfccccccccccccccccccccfccccffcccc
    ccccccccccccbbdbcfffffffcfffffffffffffffffcffffffffffffffccccffccccccfcccccfcccccccfffffffcccccccccffcccffffcffffffffffffffccfcccccccccccccccccccccccccccffcccc
    cccccccfffccbbbbcffffffffffffffcffffffffffffffffffffffffccccccccccccccccccccccfcffcffffcccccccccfcccfffcfffcffffffffffffffcccccccccccccccccccccccccccccccffcccc
    cccccccfcccccbbccccfffffffffffffffffffffffcfcffffffffffffffccfffcffccccccccccfffcffffcfcccccfccfccccccffffffffffffffffffccfccccccfccccccccccccccccccccccffccfcc
    cccccccfcccccccccccffcfffffffffffffcffffcffcffffffffffffffffcfffccccccccfcffffffffffffcccccccccccccccffcfffffffcccffccfcffcfccfcfccccccccccccccccccfcccfccccccc
    cfcccccccccccccccccfccfffffffffffffccfffffffffffffffffffffffffffccfffffffffcffffffffccccccffffccccccfcfcfffffffffffccccffffffcccfcfcccccccccccccccffcfffccfcccc
    cccccccfccccccccccccfffcffffffffffffffffcffffffffffffffcffffffffffffffffffffffcffffccccccfffcccccccccccfffffffffffffffffcfcfccfffcccccccccccccffffccccfcccccccc
    ccccccccccccccbccbbcfffccfffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffcccccfccccccccccfccfcffcfffcccffcfccfffcfcffcccccccccccccfcccfccccfccfcccccc
    fcccccccccccccbbbcbccfffcffffffffffcfffffffffffffffffffffffffffffffffffffffcfffccccfffccfccccccccccfcccfffccfccccffffcffccffcfffccccccccccccccccfccccfcffcccccc
    cccccccccccccccbbbccccfcccffffffffffffffffffffffffffffffffffffcffffffffffffcfcfccffffffcfccccccccfffccffffccffcffffffffffffffccccccccccccccccccccccccffffcccccc
    cccccccccccbcbbbbbbcbccfcfcffffcffffffffffffffffffffffffffffffffffffffcffcffffffccffffcfffffcccfffccfcccfffffffffffffcfffcccfcfcfcccccccccccfffcccccfffcccccccc
    cccccccccbbccbbbbbbcbcfccffffffffffffccffcfffffffffffffffffffcfffffffffffcffffffcffffffffffccfffccccffffffffffffccfffccccfccccfcccccccccccffffccfccfffccccccccc
    cccccccccccccbbbbbbbbbccccfcfffffffffcfffffffffffffffffffffffffffffffffffcffffccfcffffffffccffccccccffffffffffcfcccfcfcfcccccfffcfccccccffffffccccffffcccfccccc
    ccfcccccccbbbbbbdbbbdbccccccfffcffcfffffffffffffffffffcfffffffffffffffccfcfccffffffffffffffccfcccfffffcffffcffcccccccccccccfcfcccccccccfcfccccfccffffccfcccfccc
    ccccccccc7bcbbbbbbbcbbbccccccfcfcffffffffffffffffcfffffffcffffffffffffffcfccffffffffffffffffcffffffcfffcfccffcfcccfcccfccfcccccccccccfcccccccccccfcffccffcfccfc
    ccccccccbbcbcbbbbbbbbbbcccccfccfffffffffffffffffffffffffffffffffffffffcffccfffffffffffffffffffffffcfffffffccccffcccfccfffcccccccfcfcffffcffcfcccffffcccfccffccc
    ccccccccbbbccbbbbbbbbbbcccccfcfffffffffffffffffffffffffffffffffffffffcfcfffcffffffffffffffffffffffffffffcfcfffcffcfcccccccfcccccccfcfcccfccccfccffcfffcfccccccc
    ccccccccbbccbbbbbbbbbbcccccfcccfcffffffffffffffffffffffffccfffcffffffffccccfffffffffffffffffffffffffffffffccfcccffccffcccccccccccccccccccccffffffffffffcccccccc
    cccccccccbccbbbbbbbbbbbcccccccfcfcffffffffcffffffcfffffffffffffffffcfccffccffcfcffffffffffffffffffffffffffccccccccccfcfccccccfcccccccccccccfffffcffffcffccccccc
    ccccccccc7bbbbbbbbbbbbccceccccccffcffcfcfffcfffffffcfcfcfcfffffffccccfcfcfffcffcffffffffffffffffffffcfffffcccccccccccfcfccccfccffccccccffcffffcfffffcffccccfcfc
    bbbccbbbbbbbbbbbbbbbbccceeeeecccffcffccffcfffffccfccccfcccfffffffcfcfcccffffffcffffffffffffffffffffccffccffcccccccccfcfffcfcfffcffccfcfcffffcccffffffcfcccccccc
    ddddddddddbbbbbbbbbbbecceeeeeeecccfffcffffffcccccccccccfccfcffffcccccccccccffcfffffffffcffffffffffccffcfcfccccccccccfcffcfffffccfcfccfcfffcccffffcccfccccfccfcc
    11d11dd1ddddbbbbbbbbbcceebbbbbecccffcccfffcfccccccceccffcccfffffccceccceccccfffffffffffffffffffffffcffffcccfcfcccccfccffffcffffffccfcfffcfcfffffccfccccffcfcccc
    1111111111ddbbbbbbbbbccbbbbbbbeecccfcfcccccccccfccccccfccccffffcccccccccccccccccfcfffffffffffffffcccccffccfccccccffcfffffcfffffffccfccccfcffffffffcfcffcccccccc
    1111111111ddbbbbbbbbbbbebbbbbbeeecceccccccccccccecccccccccfffffccecceeeecccccccfffffffffffffffffccccccfcffcccccfcffcfffcfffccfcffffffffffffffffcfcccfffffccccff
    1111111111dbbbbbbbbbbbbbbbbbeebeeeeeecccccccccccccfeccccccffffcccceeecceccefccccfcfffffffffffffcccccffcccccccfcffffffcfcfcccccffffffffffffcfccccccffffcfcfcfcfc
    1111111111dbbbbbbbbbbcbbbbbbbbbeeeefccccccccceccceccccceccccffcceeceeceeccccccfccccccccffccccccccccffcfffcfcffffcfffffffcfffcfccffffffcfcfccccfccffffffccfffcff
    111111111ddbbbbbbbbbbbbbbbbbbbeeeeeeecccccccccccccccccccccfcfcceceeeceecccccceccccccccccffcccccccccccccccffccfcfcfcfccffcfffffffccfcccccccccccfffffffffcfffffcf
    111111111dbbbbbbbbbbbbbbbbbbbeeeeeeeeecccccccccceceeeeecccccccecceecccccccccccccccccccccccccccfccccccccccccccfffcfcfccccffffffffffffcfcccccfcfffcfffffffcffffcf
    11111111dbbbbbbb7bbbbbbbbbbbbeeeeeeeeeccccecccceeceeeeeccccccceececccceccceccccccccccccceccccccccccccceecccccffccfcffcffcffccffffffffffffffcfffffffffcfcfffffff
    11111111dbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeccfceeeceeeeeeeeeecccecccecccccccccccceccccccccccccecccccceccccccccccccfcfccfcfcffccfcfffffffffffffffffffffffffffffffc
    d111111ddbdbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeecceeeeceeeeeeeeeeeccccceccccccccffcccfcfecccccccececccececcccccccccfcffcccffffffccffffffffffffffffffcffffffffffffffcc
    ccbd1dbbdbbbdbddbbbdbddbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceccccccffcfffffcccccccccccccecccccececccccccccccccccccffffffcffffffffffffffffcfffffffffffffffffc
    eefcccbbeeceeeeeeeeceeeebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccfcccfcccffffcfccfcccccccccecccccecccccccccccccfffcccccffffcffffffffffffffffffffffffffffffffff
    ccbccfccbbeeeceeeeceeeeebeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeecceecccccccffccfccffccccffcccccccccccccccccccccccccecccccccfcccccfcfffffffffffffffffffffffffffffffffff
    cccbcccfffcecbbbbbbb77eebeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeececcccccccccffccfccccccffcfccfccccccccccceceeeeceeccccccccccccffcccfffffffffffffffffffffffffffffffff
    cccbccccccccbbbbcbbcbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeececceccffccccccfffffccfffccfffcccccccccceeeeeeeeceeeeccccccccccccfcfcffffcffffffffffffffffffffffffff
    ccccccccccccfcccbbbbbbbbbbeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeecccccccfccccccccccfccfccffcccfcfffccccccceeeeeeeeeeecceccccccccccfcfcfffffffffffffffffffffffffffffff
    cccccccccccbbfccccbcbbcb7bbeeeebbbbbbbbeeeeeeceeeeeeeeeeeeeeeeeccccceeceefccccccfccffcccffcfffccccccceeeeeeeeeeccccccccccccffccffffffffffffffffffffffffffffffff
    cccccccccccbbbcfcccbcbbccbeeeeebbbbbbbbeeeeeeeeeeeeeeeeeceeccccccceccceeeccccccffcffcfffccfffffcfccfeeeececeeeeeeeceeccccccfcffcfffffffffffffffffffffffffffffff
    cccccccccccbbbbbefcccbcbcbbeeebbbbbbbbbbbeeeeeeeeeeeeeeeeeeceeceeccceeeefeccccccccffcccccfffcfcfcccceeeeeeeeeeeeeeeeecccfccfffffffffcffffffffffffffffffffffffff
    ccccccccccccbbbbbbcfbfcbcbbeeedbbbbbbbbbeeeeeeeebeeeeeeeecceeecceeeeeeeeeeecccceccccccfcccccccfcccfccceeeceeeeeeeeeeccccccccfcccfcfffffffffffffffffffffffffffff
    ccccccccbccbbbbbbbbbfcfcbbbeebdddbbdbbbbeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeecccffcccfccffcfcceeeeeeeeeeeeeeeeeccccccfcccfffffffffffffffffffffffffffffff
    cccccccccccbbbbbbbbbbfcffcbeebdbbbdbbbbbeeeeeeeebbeeeeeeeeceeeeeeeeeeeeeeeeecccceeeeecccccccccccccfccceeeeeeeeeeeeeeeeccccccccccfffffffffffffffffffffffffffffff
    cccccccccccbbbbbbbbbbbcccfbeebbbbbbbbbbbeeeeeeeebbeeeeeeeeeeeeeceeeeeeeceeceeceeeeeeeeeeccccceccccccfcfeeeeeeeeeeeeeeeccccccccccfffffffffffffffffffffffffffffff
    cccccccbbbdbbbbbbbbbbbbfccfbbeebbebeebeebeeeeeebbbeeeeeeeeeeeeeeeeceeeeeeeeceeeeeeeeeeeeeeccccececccccceeeeeeeeeeeeeeeeccceccccccccffffffffffffffffffffffffffff
    cccccccd111bbbbbbbbbbbbbfcffceeeeeeeeeeeeeeeeeebbbbbeeeeeeeeeeeceeecceeeeccccceeeeeeeeeeeeccccccecccccfceeceeeeeeeeeeeeecceccceccccffffffffffffffffffffffffffff
    ccccccc1111bbbbbbbbbbbbbbfcffccccfffccccceeeeeebbbbbeeeeeeeeeceeeeeeeccccccccccccececeeeeeececcccccceeecfeeeeceeeeeeeeeceeeceeceeccffffffffffffffffffffffffffff
    ccccccc1111bbbbbbcbbbbbbbbfffcfccffffffccccceebdbbbbeeeeeeeeeeececccccccccccccccccccceeeeeeeeeeeeeeccecccceeceeeeeeeeeeeeeeeeecceccccffffffffffffffffffffffffff
    ccccccc111dbbbbbbccbbcbbbccfffcccffffcccceeeeebd33bbeeeeeeeeeeeeeccecceccecccccccecccceeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeceeeecceccccccffffffffffffffffffffffff
    bbcccccddddbbbbcbcccbccbcbcfcfceeeffffffeeecebdddbbbbbeeeeeceececcccccccccccccccccccceceeeeeeeeeeeeeeeceeeceeeeeeeeeeeeeeeeeeeeececcccccfcfffffffffffffffffffff
    bccccccccbbbbbccbcbccbbbbbbfccccebcccfcceeebebddbbeeccccceecccccecccccccccccccccccccccceceeeeeeeeeeeeeeceeeeceeeeeeeeeeeeeeeeeeeeeeccccccfcffffffffffffffffffff
    bcccccccccbbbbcccbbccbbbbbbeccccccecffccbbbebbbbcfccfccfffcffccfcccccccccccccccccccccceeceeeeeeeeeeeeeecccceeeeceeeeeeeeeeeeeeeeeeeececcccfcfffffffffffffffffff
    ccccccccccbbbbbcbccbbbbbbbbbcccbeeecccccbeebccfceeeeeeeeeeeeecfcffcececccccccccccccccccccceeceeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeececccccccffffffffffffffff
    ccccccccccbbbbcbccbcbbbdbbbbcceebeecceeceeeccfeebbbbbeeeeeeeeeeeeecccfccccefccccccccceeeccceceeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeecccccccffffffffffffffff
    ccccccccccbbcbbbbccbbbddbbbbfeceeccccbceecefcbbbbbbbbeeeeeeeeeeeeeeeecfcffcccecfcfcceeececcccceeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeceeccfcfcfffffffffffffff
    cccccccccbbbcbccccbbdbddbdbbfeeeeecccbcbbefceb3bbbbbbbbeeeeeeeeeeecceeeecccccccfccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeececcfccccccffffffffffff
    cccccccccbbbbccccbbbdddddbbbceebebeccccbbcfcbdbbbbbbbbbeeeeeeeeeeecccccccbbccfcbfcceeeeeeeeeeeecceeeeeeeeeeeeeeeceeeceeeeeeeeeeeeeeeeceeeeeefccecccffffffffffff
    cccccccccbbbbcccccbddddddddbcccbbeecccbecffebdbbbbbbbbbbbeeeeeeeeeecccccccccccfccbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeceeecccfffffffffff
    cccccccccbbbbbbccbbdddddddbbbccbbbbeeebdbffbdbbbbbbbbbbbbeeeeeeeeeeeccccccccccceccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeccccfccfcfff
    cccccccccbbbbbbccbddddddddbbbeebbbbeebdbeeebbbbbbbbbbbebeeeeeeeeeeeecccccccccccceefccceeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceccccccfff
    cbcccccccbbbbbbcbbddddddddbbeeebbeeebdbbccebbbbbbbbbbbebeeeeeeeeeeeccccccccccccceeeefcceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccf
    c66ccccccbbbbbbcbddddddddddbeebbbbbbbbbeceebbbbbbbbbbbebbeeeeeeeeeecceeeccccccccceebecffcceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccf
    c96bcccccbbbbbbbdddddddddddbeebdbeebddddbeeebbbbbebbbbbbbbeeeeeeeeeeeeeecccffccccceeebefcfcbeeeeeeeececcceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccf
    6966cccccbbbbbbbdddddddddddbeebbdeeddddddbeebbbbbbebbbbbbbbebebbeeeeeeecccccffccccceeeeefffccbeeeeeceeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccc
    9966bccccbbcccbbdddddddddbdbeebeeebdddddbbeebbbeeeebbbbbebbebbbbbeeeeeeecccccccccccceeeefffffcceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeecf
    99669bbccbbcccbbdddddddbbddbeebebbdddddbbeebbbeeeebbbbbbbbbbbbbeeebeeeeeccfcccfccccccceeefffccccbeeeeeceecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeececcf
    99999bbecbbbbbbbddddbbbbbbbecbbeebdddddd3eebbe1eeebbbbbbbbbbbbbbebeeeeceecccccccccccccccccfcc11ddceeeeceeeeeeeeeeeeeeeeeeeeeeeebeebbeebeeeeeeeeeeeeeeeeeeeeeccc
    99999bbbcbbbbbbddddbddbbbbbeccecb3dddd3bbbedeebeeeebbbbbbbbbbbbbbbbbeeeeeeccccccccccccccccfcd11ddbbdeeeecceeecceeeeeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeccc
    bbd99bbbcbbbbbbbdbdbbbbbbbbecccbdddddbbbbeebeeebbbeebbbbbbbbbbbbbbbbbeeeeeeccccccccccccccccfddd1dbbddbeeeecbbcbecbeeeeeeebeeeebeebbbebbeeeebeeeeeeeeeeeeeeeeecc
    cddd9bbbebbbbbbbddbdbbbbbbbeccbb3ddd333bbeebeeebdbeebbbbbbbbbbbbbbbbeeeeeeeeccccccccccccccffbdd1dbebdbbbbbbbbbbbbddbbbbbbbbbbebbbbbebebeeeeeebebeeeeeeeeeeeeecc
    cbdbdbcbecbbbbbbdddbbbbdbbeccbbddddd33bbbeebeebcbbeebbbbbbbbbbbbbbbbebeeeeeeeccccccccccccccffccbbebdbbbbeebbbbbbebbbbbbbbdbbbbdddbbbebbbeeebeebebeeeeeeeeeeeecf
    bcdbbbcbbcbbbbbbbbbbbbbbdbeccbddddd333bbbeebeeeeebdeebbbbbbbbbbbbbbbbbeebeeeeecccccccccccccfffffcccccccccceeeeeeececbccbbbbbbbbbbbbeeebbbbbbbbbbbbebbeeeebeeebb
    bcbbbbcebcbbbbbbbbbbbbbbbbeebddddd333bbbeeebbeebbe1eeebbbbbbbbbbbbbbbbbbbbbbbeeeeccccccccccfffccccfffffffcccccecceeeeeeeeeeceeeeeeeeeeeeeebbbeebbebbbbeeebbbbbb
    bccbbbbebcbbbbbbbbbbbbbbbeebddddddd33bbbeeeebeedebbbeebbbbbbbbbbbbbbbbbbbbbbbeeeeeeccccccccfffcbbffffcffcccccceeeeeeeeeeeeeeeeeebeeebbbebbebeeeeeeeeeeeebbbbbcb
    bcccbbbbccbbbbbbbbbbbdbdbeebdddddd3333bbeeeeeeeebebbbebbbbbbbbbbbbbbbbbbeebbbbebeeeecccccccffccccffccfcceeceeeceeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbebbeeeeeeeeeeec
    bccccccccccbbbbbbbbbbbbbbebddddddd3333bbeeeebeeeeebebebbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeecccccffcffcccccfccceeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbeeeeeeecf
    bbcccccccccbbbbbbbbbbdddebddddddd333bbbbbbeebbebeeebeebbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeceecffcccfececeeeeeeeeeeeeeeeeeeeeeeeebbeeebbebbbbbbbebbbbbbbbbeeeeeeecf
    bbcccccccccbbbbbdbbdbbbbedddddddb3333bbebeeeeeebbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeecfcccceeeeeeeeeeebeeeeeeeeeeeeeeeeebbebbbbbbbbbbbbbbbbbbbebbeeeeeeccf
    cbcccccccccbbbbbbbbbbbbbddddddd3333333bbbeebbeebbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbebeeeeeefffeeeeeeeeeeebeebbbebbeeeeeebbbeeebbeebbbbbbbbbbbbbbbbeeeeeeeeeecccf
    dccccccccccbbbbbdbdbbbbbddddddd333333bbbbeeebebbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbfcebeeeeeeeeebeebbbbbbbbbbbeebeeebebbebbbbbbbbbbbbbeeeeeeeeeeeeeeecff
    bdbbccccccbbbbbbbbbdbbbddddddddd3333bbbbbeeebbbbbbbbbebebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebebeceeeeeeeeebbbbbbbbbbbbbbbbbbbbebeebbebbbbbbbbbbbbeeeeeeeeeeeeeeeecfc
    ccbdccccccbbbbbbbbdbbddddd3dddddd3333bbbbeeebbebbbbbbbbbebbbbbbbbbbbbbbbdbbbbbbbbbbbbebbebbeeebbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbebbeeeeeeeeeeeeeeeeeeeeecc
    cbccbcccccbbbbdbbbdbddddd33ddddd3333bb4bbbeebbbbeebbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebeebeeebbbbbbeeecc
    bbbbecbbccbbbbbbbddddddd333ddddd3333333bbbeeebbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebeeeebbbbbbbbbbbbbbbeeec
    bbbdbbecbbbddddddbbddd33333ddddd3333333bbbeebbbbbbbbbbbbbeebebbbbbbbbbbbbbbbbbbdbbbbbbbbbbcebbbbbbbbbbbbbbbb3dbbdd3d3bbbbbbbbbbbbbeeebebebbebbbbbbbbbbbbbbbeeec
    bbbbbbbbcccccbbbbebd33333333dddd33333333bbbebbbbbbbbbbbbeeebbebbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbdbbbbbbbbd3dddd3d3dddddbbbbbbbbbbbbbebbbbbbbbbb4bbbbbbbbbbbbeee
    bbbbbbbbbbbbbbbbbb3333333333d3dd33333333bbbeebbbbbbbbbbbbeeeeeebbbbbbbbbbbbbb3bbdbbbbbbbbecbbbbbbbdbbbbdddddddb4ddddddd33bbbbbbeebebbbbbbbb4bbb34bbbbbbbbbbbeee
    bbbbbbbcbbbbbbbdbbd3333333333333333333333bbeeebbbbbbbbbbebeeeeebbbbbbbbbbbbb3bbbdbdbbbbbbeebbbbbbbdd34d4dddddddd3dddddddbbbbbbbbebbbbbbbbbbb4444444b4bbbbbbbeee
    bbbbbb7ccbbbbbbbbb33333333333333333333333bbbebbbbbbbbbbeeeeeeeebbbbbbbbbbbb3bbdd3bdbbbbdbecbbdbbbddbdddddddddddddddddddbbbbbbbbbbbbbbbbb3b4334444b434bbbbbbbeee
    bbbbbb7c7bbdbbbbbbb33b333333433b3333333333bbeebbbbbbbbbeeeeeeeebbbbbbbbbbbbbddddddd3dddbbecdddbddddddbdddddddddddddd444bbb4bbbbbbbebbb3bb3434444444344bbbbbbbee
    bbbbbbbcbbdbbbbbbbb33b3b43333443333333b33bbbbebbbbbbbbbbbeeeeeebbbbbbbbbbbbd3bddddddd3dbecbbddddbd3ddddddddddddddd3344d3bbb3b3bbbbbddb4d43d3444434444b4bbbebbbe
    bbbbbbbbbbbbbbbbbbbbbbbbb4b4444333bbb34333bbeeebbbbbbbbbbbeeeeeebbbbbbbbbdb33ddddddddddbecbdd3dddddddddddddddddddd3434b4b433dbb33bb3b43d33d43bb444443443bbbbbbe
    bbbbbbbbbbbbbbbbbbbbbbb4b44b4b4bbbbbb3b33b3bbbebbbbbbbbbbbeeeeeeebbbbbbbd33bddd3ddd3dddbecdddddddddd4dddddddddddd33333b3db3d34444dd4dd3dd343344444444444bbbbbee
    bbbbbbbbbbbbbbbbbbbbbbbbbe4bbbbb4bbbbb4bbbbbbbeebbbbbbbbbbeeeeeeeeebbbbbbb3d3dddddddddbbcedddddddddddddddddddd333333bd333dd3ddd4dddd3d4dddd433444444444444bbbee
    bbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbebbbbb4bbbbbbebbdbbbbbbbbbeeeeebbbbbbbbbbdddddddddddbbcbddddddddddddddddddddd334333dddddddddddd4dd334434d3b4444443444344bbbbb
    bbbbbbbbbdbbbbbbbbbbbbbbbeebeeebeebbebbebbbbbbbeebbbbbbbbbeeeeeeeebbbbbbbbbb3dddd3dddbbecdddddddddddddddddd3433d3333d3ddddddddddd33d434d443b444444444444344bebb
    bbbbbbbbbbbbbbbbbbbbeebbeeeeeeeeeeeeeeebbebbbbbbeebb3bbbbbebeeeeeebbbbbb3b3dd3dddddddbbee3ddddddddddddd3333333dd33dddddddddddddddd33ddd44d4344444444444444b4bbb
    bbbbbbbbbbbbbbbbbbbbbebeeeeeeeeeeeeeeeeeeeebbbbbeebdbbbbbbbbeeeeeebbbbbebb3b333ddddddbbcb3dd3ddddddd33333333343333dddd3dddddddd3d3d3ddd33d3b444444b444444443bbb
    bbbbbbbbbdbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbbbeeb1bbbbbbeeeeeeebbbbbbbb3d3dddddddbbeb33333ddd3333333333333d3333dddddddddddddd3d4d4d33d3b4444444444444b44bbbb
    bbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbebeeee1bbbbeeeeeeeeebbbb3bb33d33ddddbbbeb333333dd3333333db33d333333dddddd3dd3dddddddd33334b43b444444bb444444bbbb
    bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeceeeeeeeeeeeebeeeebeddbbbbeeeeeeebbbb33d3ddddddddbbebd3333333333333333d333db33d33dddddddddddddddd433334434b444444444444444bbb
    bbbbbbbbbbbbbbbebeeeeeeeeeeeeeeeccccccccceeeeeeeeeeebbeebbbeeeeeebebbbbbbb3d33dddddbbebd333333333333b3333b33344dd34433ddddddd3d3dd433d33b4bbb44444444b4444b4bbb
    bbbbbbbbbbbbbbbbeeeeeeeebbeeeeeccccccccccfceeeeeeeeeebbbeeebbeeeeebbbbbbbb333d3ddbbbbbddd33333333b3bbb33bbb333b33d3334d33ddddddd43d4333444444444444444444b4bbbb
    bbbbbbcccbbbbbbeeeeeeeebbbbeeeeeccccccccccffeeeeeeeeeebbbeeeebbeebbbbbbbbbbdbd33bbbbbb33d33333b33bbb333b3bbbb3dd333333d343ddd3ddd4333334bb4444444bbbbbbbbbbbbbb
    bbbbcccccbbbbbbeeeeeeeebbdbeeeececcccccccfccffeeeeeeeeeeeeeeeeebbebbbbbdbb3bdbdbdbbbd333d33333333bbbbbbb3bbbb33b333333333d4334d4dd333b334bb44444bbbbbbbbbbbbbbb
    bbb7cccccbbbbbbbeeeeeebbdbbbeeececcccccccccccccceeeeeeeeeeeeeeeeeebbebbbbbbbbbbbbbbd3dd33333333bbbbbbb3bb3bb3333bbb333dd33d333333343b344bbb444bbbbbbbbbbbbbbbbb
    bbccccccccbbbbbbbeeebbbbbdbbbeeccccccccccccccccceeeeeeeeeeeeeeeeeeeebbbbbbbbbbbb333333333333333333bbbbbbbbbb3bbbbbbbbb33d333333333333bbb3bbb44bbbbbbbbbbbbbbbbb
    bccccccccbbbbbbbeeebbbddddbbeeeccccccccccecccccccceeeeeeeeeeeeeeeeebbbbbbbbbbbb333333333333333d333b33bbbbb3bbbbbbbbbb33333b333333b3bb4b3444b44bbbbbbbbbbbbbbbbb
    cccccccccbbbbbeeeeebbbdddbbbbeecccccccccccccceccccceeeeeeeecceeeeebbebbbbbbb333333333333333333b3333333333b3bb33bb3bb3dd333333333bb33b4bb44434bbbbbbbbbbbbbbbbbb
    cccccb7bbbbbbebbeeebbbdbbbbbbeecccccccccccccecccccceeeeeeceeceeeeebeebbbbbbbb33b333333333333bb34333b33b3bbb3b3bbb3bbb3bbbbbbbbbbbb3bbbbb3bb4bbbbbebbbbbbbbbbbbb
    eeeecbbbbbbbbbeeeebbbddbbbbbbbeecccccccccccccccccccccccfcceeeeeeeebbbbbbbbbbbbbbd3b3333b333333333333333333bbbdbb33b3b4bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebebbbbbbb
    eeccbbbbbbbbbbeeebbbdddbbbbbbeeeecccccccccccccccccccccceeeeeeeeebbbbbbbbbbbbbbbb3bbb33333333333333333333333333d3b3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe
    ecbbbbbbbbbbbbeebbbbbbbbbbbbbbeeeecccccccccccceeecceeeeeeeeeeeebbbbbbbbbbbbbbbbbb3bbb3b3b333333d3333dd333d33b333bbbbb33b3bbbbbbbbbbbbbbbbbbbbbbbbbebbeebbeeebbb
    cbbbbbbdbbbbbbebbbebbbbbbbbbbbeeeecccccccccceeeeeeeeeeeeebeeebbbbbbbbbbbbbbbbbbbbbbbbbb3bbb3333333ddd33dd3bb3b3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeebbbb
    bbbbbbbdbbbbbbbebbbbbbbbbbbbbebeeeceeccccceeeeeeeeeeeeeebbbeeebbbbbbbbbbbbbbbbbbbbbbbbbb3bbb3333333dd33ddd43b3b33bbb3bbbbbbbbbbbbbbbbbbbbbbbbbbebeeebebbeebbbbb
    bbbbbbdbbbbbbbbbbbbdbbbbdbbbbbbbeeeeccceccceeeeeeeebebebbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3b3333bb33b33d4bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbeebbee
    bbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbb3333b333dd3dbbb333bbb3bbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbebbbbbe
    bbbbbbbbbbbbbbbbbbdddbbbbbbbb3bbbbebeeeeeeeeeeebbbebbbbbbbbbbb3bbbbbbebbbbbbbbbbbbbbbbbbbbbbb3bbb3b3333333ddd3bbb3bbbbbbbbbbbbbbbbbbbbbbbbbbebeeeeeeeeeebbbbebe
    bbbbbbbbbbbbbbbbbbdbbbbbbebbb3bbbbbebeeebeeeebbbbbbbbbbbbbbbbbbb3bbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbb333bbb333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebebeeeeeeebbeeebbe
    bbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbbbeeebeeebebbbbbbbbbbb3bb3333bbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbb33333b3b3dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbebbeeeee
    bbbbbbbbdbbbbbbbbbbbbbbbbbbbbebbbebebbbebeeebbbbbbbbbbbbbbb3333333bbbbeeebbbbbbbbbbbbbbbbbbbbbbbbb3b3b3d3bbb3dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebebeeeeeeebebee
    bbbbbbddbbbbbbbbbebbbbbbbbbbbbebeeeeebbbbbbebebbbbbbbbbbbb33333333bbbbeeeeebbebbbbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbebeebebbbeeebee
    bbbbbdddbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbb33333333bbbeeeeebebeebbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebeeee
    bbbbbddbbdbbbbbbbbebbbbbbebebeeeeeeeeeebbbbbbbbbbbbbbbbbbbbb333433bbbbbeeeeeeeeeebebbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebebebbbbeeeeeeeeee
    bddddbdbbbbbbbbbbbebbebbbbbbeeeeeebeeeeebbbbbbbbbbbbbbbbbbbb3b33bbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbeebbeeeeee
    dddddbbbdbbbbbbbbeebbebbebeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbb3dbbbbbbeeeeeebeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebebbeebebeeeee
    dbbdbbbbdbbbbbbbbeebbeebbbbeeeeeebbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeebeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebebbbbbeeeeeeeeeb
    bdbbbbdddbbbbbbbbeebbeebeebbeeeeeebebebeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbebbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebebbbbbbbbebebbeee
    ddbbdddbdbbbbbbbbebbbdbeeeebbbeebebbbbbebeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeebebeebeeeeeeebeebbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbebebbbbbbbeebbbbbbbeeeebbbebbe
    bbbddbbbbbbbbbbbbbbddd33eebeeeeeeeebbebbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebeebeeebeeebebeeebeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbeebbbbbbbe
    bbbbddbbbbbbbbbbbedd1d344eeeeebeeeebbeeeeeeeeeeeebbbbebbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeebeeeeeeeebeeeeeebebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbebebbbbebbe
    bbbbbbbbbbbbbbbbbbdd1db3344eeeeeeeebeeeebbbeeeeeebeebbbbbbebbbbbbbbbbbbbbbbbeeebbeeeeebbeeeeeeeeeeeeeeeeeebebebbeebebbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbee
    bbbbbbbbbbbbbbbbbbdd1d3344443eeeeeeeebeeeeeeeeebeeeeebbbbebbbbbbbbbbbbebbbbbeeeeebbeeeeeeeeeeeeeeeeeeeeeeeebeeebbebbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbeeee
    bbbbbbbbbbbbbbbbbb333333333333beeeeeeeeeeeeeeeeeeeeeeeeebbbebebbebebbbbbbbbbbeeeeeeeeebbeeeeeeeeeeeeeeebeebeebbeebbbbbbbbbebbbbbebbbbbbbbbbbbbbbbbbbbebebebbebe
    bbbbbbbbbbbbbbbbbbb3b33333dd33b3beeeeefeeeeeeeeeeeceeceeebbebebeeeeebbbbebbbbeeeeeebeebebeeeeeeeeeeeeeeeeeeebbbbebbebbbbebebbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbeebe
    bbbbbbbbbbbbbbbbbb33333333333333bb43eebeeeeeeeeeeeeceeeceeeeeebeeeeeebbbbbbbbbbeeeeeeeeeebeeeeeeeeeeeeeeeeeebbeebbbbbbbeeebebbbbbbbbbbbbbbbbbbbbbbebbbeebbbeebe
    bbbbbbbbbbbbbbbbdbbb3b33b3333333333b43eebeffeeeeeeeeecfceeeeeeeeeeeeeebebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebebebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbeeebe
    bbbbbbbbbbbbbbbbbbbbbb4443b333333dd33b34ebeeeeceeeeeeeeccccceeeeeeeebebebbbbbbbeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeebeebbbebeebbbbbbbbbbbbbbbbbbbbbbbebeeeebbbbbeee
    bbbbbbbbbbbbbbbbbbbbbb44434b33333d3d33b344bbbbeeeeceeececcceeceeeeeeeeeebbbbbbbebeeebeebeeeeeeeeeeeeeeeeeeeeeeeebebbebbebbebbebbbbebbbbbbbbbbbbbbbbeeeebbbebbeb
    bbbbbbbbbbbbbbbbdbbb3bbe444444433333333d333333bbeefceeeccccccceceeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbebbbebebbbbbbbebbbbbbbbbbbbbbbbeeebbbbbebe
    bbbbbbbbbbbbcebbdd3bbbbbe44444434bbbb333bbb33333bbbceecceeccfcfceeeeeeeeeebbbebbbeeeebbeeeeeeebeeeeeeeeeeeeeeeeeebeebbebbbbbbebbbbbbbbbbbbbbbbbbbeeeeebbeeeeeee
    bbbbbbbbbbccccbbdbbbbbbbbb44e444444b4bbb333bbb33bbdbbecefcffccfffcceeeeeeebbbbbbeeeeebebeeeeeeeeeeeeeeeeeeeeeeeeebeebbeebbeebbbebbbbbbbbbbbbbbbbbebbebbbbeeeeee
    bbbbbbbbbccccbbdddbbbbbebbbbbebbeeeeb43ee44bbbeeebbbebeeecccfcffffcceeeeeeebbbbbbeeebeeebeeebeeeeeeeeeeeeeeeeeeeebeeebbbeebbbbbbbbbbbbbbbbbbbbbbeeeeeeebebebeeb
    bbbbbbbbbccccccbddbbbeebbbbeebbeeeeeeeeebeeeeeebeeeeeeeeeeccccfccffcceeeeeebbbbbbeeebeeeeeeeeeeeeeeeeeeeeeeeeeebeeeeeebbbeebbbebbbbbbbbbeebbbbebbeeebbbbeeeeeee
    bbbbbbbbcccccccbdbbeeeeebbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefceceeeeebbbbbebeeeebeeebebeeeebeeeeeeeeeeeeeeeeeeeebebbbebebbbbbbbbbbbbbeeeeeeeeeebbeeeeeeeee
    bbbbbcccfccccfbddbbbeeebebebbeeeeeeeeeeeeeeeeeeebeeebbbbeeeebeeeeeccccceebebbbbbeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeebeeebbbbbbbbbbbbbbbbbbbebeeebbbeebbeeeeeeee
    bbbbbccffcfccceddbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeebebbbbbbebbebbbeeeeeeeeeebbbbbbeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeebbbbbbbbbbbbebebbbbebeeeeeee
    bbbbbffffcfffcbdddbbbeeeeeeeebeeeeeeeeeeeeeeeeeeebbbbbbbbbebbbbbeeeeeeeeebbbeebeeeeeeeeeebebebeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbebbbbbbebeebbebbbeeeeeeeeee
    bbbbbffcfcfcfcbddbbbbbeeeceeeeeeeeeeeeeeeeeeeeebbbeebbbbbbbbbbebeeeeeeeeebbbbbeebeeeeebebeeeebeeeeeebeeeeeeeeeeeeeeeeeebebbbebbbbbbbbebbebbeebbebebbeeeebeeeeee
    bbbbbcfcfcccfcbdddbbbbbeeeeeeeeeeeebeeeebeeebbbbbbbbbbbbbbbbbbbbbbbeeebeeebbbbbbebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbebbbbbbbbbbbebbbbbbbeeebeeeeeeeeeeee
    bbbbbbcffcfcfcbbddbbbbbbeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbeeeeeebbbbebbeebeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebebbbbbbbebeebbbbebbeeebbeeeeeeeeeeee
    bbbbbbcffccfccbbdbbbbbbbbeeecceceeeeeeeeeeeeeeebebbbbbbbbbbbbbbbbbbeeeeeebbbbbbeebbeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbebbbbbbbeebbbbebeeeebeeeeeeeeeeee
    bbbbbbfcfcfcccbbddbbbbbbbbeeeeeeeeeeeeeeeeeeeeebeebbbbbbbbbbbbbbbbbbbebebebbbbbbeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebebbebbbebebebbeebbeeeeeeeeeeeeeeeee
    bbbbbbffffcfccbdbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebeebbbebbbbbbbbbbeeeeebbbebbbbbebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeebbbbbebbebeeeeebebebebeeeeeeeeeeeee
    bbbbbbfffcffccbdbbbdbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbeeeebbbebbebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeebebbebbeeeeeeebeebeeeeeeeeeeeeeeeee
    77cbbbcffccfccddbbbdbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeebebebbbbbbbbbbbbbeeeebbebbeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeebebeeeeeeeebebeeeeeeeeeeeeeeeeee
    cccccccfcccffebdbbbbbbbbbbbbbbebeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbebebbeeebebebbeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbebeebbeeeeebeeeeeeeeeeeeeeeceeee
    cccccccfcccfcebddbbbbbbbbbbbebbeebeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbebbeeeebeeebbeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeee
    ffffffcccccfcbdddbbbbbbbbdbbbbbbbbbbeeeeeeeeeeeeeebbebeebbbbbbbbbbbbbbeeeeebebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffccffccbbddbbbbbbbbbbbbbbbbbbebeeeeeeeeeeeebeebeeebbbbbbbbbbbbbbeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeee
    ffffffcfccfffbdddddbbbbbbbbbbbbbbbbebbeeeeeeeeeeeeeeeebeeebbbbbbbbbbbbeeeeebeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeee
    ffffffffccffcbddbbbbbbbbbbbbbbbbbbbebbbbeeeeeeeeeeeebebebbebbbbbbbbbeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffcffccfbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbeeeeeebbbeebbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeececeeeeeeeeceee
    fffffccfffcccbdbbbbdbbbbbbebbbbbbbbbbbebbeebeeeeebbbeeeeeebbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeecceeecceeee
    fffffffccccccbbbbdbbbbbbbbbbbbbbbbbbebbbeeeeeeeebebeeeeeebbebbebbbbbbbeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccceeceeeee
    cfcfffcccfcccbbdbbbbbbbbbbbebbbbbbbbbebebeeeeeeeebebeeebbbbebbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceccceeceeeee
    cffccccccccfcbbbbbbbbbbbbbeebbbebbbbbebebebebeeeeeeeebbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeececeeeccccccccceeeeeeee
    cffccccfffcccbbdbbbbbbbbebbebbbbbbbbbbeebeebeebbeebbbbbebbeebbebbbbbbbebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccececccccccccccceeeee
    cfcccccccfccbbbbbbbbbbbbeeebbbbbbbebbbebbbbebeeebbeebebbebbbbbbbbebbbebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccecccccccccccceeeeee
    cfcccfccccfcbbbbbbbbbbbbbeeebbeebbebbbbbbbbbbeebbbeeeebeebebbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccecee
    cccccccfcffccbbbbbbbbbbbbeeeeebeebbebbbbbbbbbbebbbbeebbebbbbebbbbeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeccccccccccccccfcccccceeecee
    cccffcccfccccbbbbbbbbbbbbbebeebbbbbbbbebbbbebbbbbbbbebbbbeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccececcccccccceeccccccccccceeeeeee
    fcfffcfccfcccbbdbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbeebbbbbebbbbbebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeececccccccccccccccccccccccccfccceceeeeee
    ffcfffccfffccbbbbbbbbbbbbbbbeeeeebeeebbbbbbbbbbbbbbbbbbbbbbbbeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccfcccccccceeeeee
    fccfffcccffccbbbbbbbbbbbbbbbbbeeebebbebbbbbbbbbbbbbbbbbbbbbbbbebebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceecccccccccccccccccccccfcfcfcccccccceeeee
    fccccfcccffcccbbbbbbeebeeebbebbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeecccccccccccccccccfcccffcfcccccccecceeee
    cccfcccfffcfccbbbbbbbeeeebeebbeeeeebebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceecccccccccccccccccccfcffcccccccccccceeeeee
    cfccffcccfccccbbbbbebeebbeebbeeeeeebbbbbbbbebbbbbbbbbbbbbbbbbbbeebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccfffffcffccccccccceeeee
    cffffcfcccccccbbbebeeebbeeeeeebbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceecccccccccccccccffccfcccffcffffcccccccccceceeee
    fcffcfffcffffccbeeeeeeeeeeeebbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeccccccccccccfcccccfcffffcfffffffcfccccccccccceeeee
    ffffffcfcfcfcfceeeeeeeeeeeeeeebeeeeeeeebeebbbbbbebbbbbbbbebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceececccccccccfcccfcccccfffcfffffffffffffccccccccceeeeeee
    fffffcffffccfcfeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbebbbbeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeececeeccccccccccccccffcfffcfffffffffffffcfffccccccceeeeeeee
    ffcffcffcccffcfceeeeeeeeeeeeeeeeeeeeeeebeeebbbbbbbbbbbbbbebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccececcccccccccccfcfcccfffffffffffffffffffccccccccceeeeeeee
    fffffcffffcccccfceeeeeeeeeeeeeeeeeeeeeeebbbbeebbebbeebbbbebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeccccccccccccccccccffccfccfffffffffffffffffcffcccccccceeeeeeeee
    fffffffffcffcfcffceeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeceeecceccccccccccccccccccffccffffffffffffffffffffffcffccccccceeeeeeeee
    ffcffffffffffcffffceeeeeeeeeeeeeeeeeeeeeebeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeceeeceecccccccccccccccccfccffffffcfffffffffffffffffffffcccccceceeeeeeeeee
    ffffffcffffffffcfccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccfcfcfffffffffffffffffffffffcccccccccceeeeeeeeeee
    fffffffffffffffffffccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeececeeeccceececcccccccccccccccffcfffcffffffffffffffffffffffffffcccccccccceceeeeeecf
    `, SpriteKind.Player)
forever(function () {
    if (movement < 1) {
        movement = 0
    } else if (movement < 0) {
        movement = 0
    }
})
