scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (location.column == 45 && location.row == 75) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (Floor == 1) {
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 8))
        Floor += 1
    } else if (Floor == 2) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 77))
        Floor += -1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("This Door is Locked from the inside...", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (location.column == 45 && location.row == 75) {
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
let mySprite: Sprite = null
let keyNumber = 0
let Floor = 0
tiles.setCurrentTilemap(tilemap`level2`)
Floor = 1
let cutscene = 0
keyNumber = 0
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
tiles.setCurrentTilemap(tilemap`level15`)
