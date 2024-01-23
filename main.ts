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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            if (true) {
            	
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
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
        }
    }
})
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
        } else if (location.column == 19 && location.row == 1) {
            tiles.setCurrentTilemap(tilemap`level44`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(18, 22))
            Floor += -1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    if (Floor == 1) {
        if (location.column == 11 && location.row == 59) {
            tiles.setCurrentTilemap(tilemap`level15`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(25, 37))
            Floor += 1
        } else if (location.column == 13 && location.row == 59) {
            tiles.setCurrentTilemap(tilemap`level15`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(27, 37))
            Floor += 1
        }
    } else if (Floor == 2) {
        if (location.column == 12 && location.row == 23) {
            tiles.setCurrentTilemap(tilemap`level17`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 68))
            Floor += 1
        } else if (location.column == 17 && location.row == 23) {
            tiles.setCurrentTilemap(tilemap`level45`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(18, 1))
            Floor += 1
        } else if (location.column == 5 && location.row == 23) {
            tiles.setCurrentTilemap(tilemap`level15`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(21, 96))
        }
    } else if (Floor == 3) {
        if (location.column == 31 && location.row == 69) {
            tiles.setCurrentTilemap(tilemap`level44`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 22))
            Floor += -1
        }
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level44`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 22))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            game.showLongText("This Door is Locked from the outside...", DialogLayout.Bottom)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (cutscene == 0) {
            game.showLongText("This area is not yet avalible.", DialogLayout.Bottom)
        } else if (cutscene == 1) {
            if (location.column == 45 && location.row == 75) {
            	
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    if (location.column == 25 && location.row == 36) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 58))
        Floor += -1
    } else if (location.column == 27 && location.row == 36) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 58))
        Floor += -1
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
let floorNum = 0
let movement = 0
let keyNumber = 0
let cutscene = 0
let Floor = 0
let textCutscene = 0
let mySprite: Sprite = null
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
keyNumber = 0
movement = 0
pause(2000)
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
    pause(2000)
    game.setDialogTextColor(14)
    game.showLongText("OH NO!", DialogLayout.Bottom)
    if (controller.A.isPressed()) {
        game.setDialogTextColor(15)
        game.showLongText("How long have I been asleep?", DialogLayout.Bottom)
        if (controller.A.isPressed()) {
            game.showLongText("I better leave before they lock the doors...", DialogLayout.Bottom)
            if (controller.A.isPressed()) {
                game.showLongText("Move with the arrow keys or D pad if you are on controller. To interact with doors, press \"A\" over the Door Knob or Door Pad.", DialogLayout.Full)
                textCutscene += 1
                controller.moveSprite(mySprite)
            }
        }
    }
}
forever(function () {
    if (movement < 1) {
        movement = 0
    } else if (movement < 0) {
        movement = 0
    }
})
