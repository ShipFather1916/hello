def on_overlap_tile(sprite, location):
    if controller.A.is_pressed():
        if cutscene == 0:
            game.show_long_text("This area is not yet avalible.", DialogLayout.BOTTOM)
        elif cutscene == 1:
            game.show_long_text("This Door is Locked from the outside...",
                DialogLayout.BOTTOM)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile38
    """),
    on_overlap_tile)

def on_up_pressed():
    global movement
    if textCutscene == 0:
        pass
    else:
        animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
        animation.run_image_animation(mySprite,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        movement += 1
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile2(sprite2, location2):
    if controller.A.is_pressed():
        if cutscene == 0:
            game.show_long_text("This area is not yet avalible.", DialogLayout.BOTTOM)
        elif cutscene == 1:
            game.show_long_text("This Door is Locked from the inside...",
                DialogLayout.BOTTOM)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile45
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    if controller.A.is_pressed():
        if cutscene == 0:
            game.show_long_text("This area is not yet avalible.", DialogLayout.BOTTOM)
        elif cutscene == 1:
            if True:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile15
    """),
    on_overlap_tile3)

def on_overlap_tile4(sprite4, location4):
    if controller.A.is_pressed():
        if cutscene == 0:
            game.show_long_text("This area is not yet avalible.", DialogLayout.BOTTOM)
        elif cutscene == 1:
            if location4.column == 45 and location4.row == 75:
                if keyNumber >= 0:
                    pass
                else:
                    game.splash("")
            elif location4.column == 45 and location4.row == 75:
                if keyNumber >= 0:
                    pass
                else:
                    game.splash("")
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile46
    """),
    on_overlap_tile4)

def on_down_released():
    global movement
    if textCutscene == 0:
        pass
    else:
        movement += -1
        pause(150)
        if movement == 0:
            animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
            mySprite.set_image(img("""
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
            """))
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_overlap_tile5(sprite5, location5):
    if controller.A.is_pressed():
        if cutscene == 0:
            game.show_long_text("This area is not yet avalible.", DialogLayout.BOTTOM)
        elif cutscene == 1:
            game.show_long_text("This Door is Locked from the inside...",
                DialogLayout.BOTTOM)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile33
    """),
    on_overlap_tile5)

def on_left_pressed():
    global movement
    if textCutscene == 0:
        pass
    else:
        animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
        animation.run_image_animation(mySprite,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        movement += 1
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile6(sprite6, location6):
    global floorNum, movement, Floor
    if Floor == 1:
        if location6.column == 59 and location6.row == 77:
            floorNum = game.ask_for_number("Would you like to go to the 2nd or 3rd floor?")
            if floorNum == 2:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level15
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 61))
                Floor += 1
            elif floorNum == 3:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level17
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 55))
                Floor += 2
            elif floorNum == 1:
                game.show_long_text("You're already on this floor extra poopy stinky head...",
                    DialogLayout.FULL)
            else:
                game.show_long_text("That ain't a floor poopy head...", DialogLayout.FULL)
        elif location6.column == 59 and location6.row == 13:
            floorNum = game.ask_for_number("Would you like to go to the 2nd or 3rd floor?")
            if floorNum == 2:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level15
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 5))
                Floor += 1
            elif floorNum == 3:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level17
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 6))
                Floor += 2
            elif floorNum == 1:
                game.show_long_text("You're already on this floor extra poopy stinky head...",
                    DialogLayout.FULL)
            else:
                game.show_long_text("That ain't a floor poopy head...", DialogLayout.FULL)
    elif Floor == 2:
        if location6.column == 59 and location6.row == 61:
            floorNum = game.ask_for_number("Would you like to go to the 1st or 3rd floor?")
            if floorNum == 1:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level2
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 77))
                Floor += -1
            elif floorNum == 3:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level17
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 55))
                Floor += 1
            elif floorNum == 2:
                game.show_long_text("You're already on this floor extra poopy stinky head...",
                    DialogLayout.FULL)
            else:
                game.show_long_text("That ain't a floor poopy head...", DialogLayout.FULL)
        elif location6.column == 59 and location6.row == 5:
            floorNum = game.ask_for_number("Would you like to go to the 1st or 3rd floor?")
            if floorNum == 1:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level2
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 13))
                Floor += -1
            elif floorNum == 3:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level17
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 6))
                Floor += 1
            elif floorNum == 2:
                game.show_long_text("You're already on this floor extra poopy stinky head...",
                    DialogLayout.FULL)
            else:
                game.show_long_text("That ain't a floor poopy head...", DialogLayout.FULL)
    elif Floor == 3:
        if location6.column == 59 and location6.row == 55:
            floorNum = game.ask_for_number("Would you like to go to the 1st or 2nd floor?")
            if floorNum == 1:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level2
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 77))
                Floor += -2
            elif floorNum == 2:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level15
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 61))
                Floor += -1
            elif floorNum == 3:
                game.show_long_text("You're already on this floor extra poopy stinky head...",
                    DialogLayout.FULL)
            else:
                game.show_long_text("That ain't a floor poopy head...", DialogLayout.FULL)
        elif location6.column == 59 and location6.row == 6:
            floorNum = game.ask_for_number("Would you like to go to the 1st or 2nd floor?")
            if floorNum == 1:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level2
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 13))
                Floor += -2
            elif floorNum == 2:
                movement = 0
                tiles.set_current_tilemap(tilemap("""
                    level15
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(58, 5))
                Floor += -1
            elif floorNum == 3:
                game.show_long_text("You're already on this floor extra poopy stinky head...",
                    DialogLayout.FULL)
            else:
                game.show_long_text("That ain't a floor poopy head...", DialogLayout.FULL)
        elif location6.column == 19 and location6.row == 1:
            tiles.set_current_tilemap(tilemap("""
                level44
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(18, 22))
            Floor += -1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile9
    """),
    on_overlap_tile6)

def on_overlap_tile7(sprite7, location7):
    global Floor
    if Floor == 1:
        if location7.column == 11 and location7.row == 59:
            tiles.set_current_tilemap(tilemap("""
                level15
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(25, 37))
            Floor += 1
        elif location7.column == 13 and location7.row == 59:
            tiles.set_current_tilemap(tilemap("""
                level15
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(27, 37))
            Floor += 1
    elif Floor == 2:
        if location7.column == 12 and location7.row == 23:
            tiles.set_current_tilemap(tilemap("""
                level17
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(30, 68))
            Floor += 1
        elif location7.column == 17 and location7.row == 23:
            tiles.set_current_tilemap(tilemap("""
                level45
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(18, 1))
            Floor += 1
        elif location7.column == 5 and location7.row == 23:
            tiles.set_current_tilemap(tilemap("""
                level15
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(21, 96))
    elif Floor == 3:
        if location7.column == 31 and location7.row == 69:
            tiles.set_current_tilemap(tilemap("""
                level44
            """))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(11, 22))
            Floor += -1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile42
    """),
    on_overlap_tile7)

def on_right_released():
    global movement
    if textCutscene == 0:
        pass
    else:
        movement += -1
        pause(150)
        if movement == 0:
            animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
            mySprite.set_image(img("""
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
            """))
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    global movement
    if textCutscene == 0:
        pass
    else:
        movement += -1
        pause(150)
        if movement == 0:
            animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
            mySprite.set_image(img("""
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
            """))
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_overlap_tile8(sprite8, location8):
    tiles.set_current_tilemap(tilemap("""
        level44
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(5, 22))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile18
    """),
    on_overlap_tile8)

def on_overlap_tile9(sprite9, location9):
    if controller.A.is_pressed():
        if cutscene == 0:
            game.show_long_text("This area is not yet avalible.", DialogLayout.BOTTOM)
        elif cutscene == 1:
            game.show_long_text("This Door is Locked from the outside...",
                DialogLayout.BOTTOM)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile37
    """),
    on_overlap_tile9)

def on_right_pressed():
    global movement
    if textCutscene == 0:
        pass
    else:
        animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
        animation.run_image_animation(mySprite,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        movement += 1
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile10(sprite10, location10):
    if controller.A.is_pressed():
        if cutscene == 0:
            game.show_long_text("This area is not yet avalible.", DialogLayout.BOTTOM)
        elif cutscene == 1:
            if location10.column == 45 and location10.row == 75:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
            elif False:
                pass
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile44
    """),
    on_overlap_tile10)

def on_up_released():
    global movement
    if textCutscene == 0:
        pass
    else:
        movement += -1
        pause(150)
        if movement == 0:
            animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
            mySprite.set_image(img("""
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
            """))
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_overlap_tile11(sprite11, location11):
    global Floor
    if location11.column == 25 and location11.row == 36:
        tiles.set_current_tilemap(tilemap("""
            level2
        """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(11, 58))
        Floor += -1
    elif location11.column == 27 and location11.row == 36:
        tiles.set_current_tilemap(tilemap("""
            level2
        """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(13, 58))
        Floor += -1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile43
    """),
    on_overlap_tile11)

def on_down_pressed():
    global movement
    if textCutscene == 0:
        pass
    else:
        animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
        animation.run_image_animation(mySprite,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        movement += 1
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

floorNum = 0
movement = 0
keyNumber = 0
cutscene = 0
Floor = 0
textCutscene = 0
mySprite: Sprite = None
scene.set_background_image(img("""
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
"""))

def on_pause_until():
    pass


tiles.set_current_tilemap(tilemap("""
    level2
"""))
scene.set_background_image(img("""
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
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.place_on_tile(mySprite, tiles.get_tile_location(4, 37))
scene.camera_follow_sprite(mySprite)
textCutscene = 0
Floor = 1
cutscene = 0
keyNumber = 0
movement = 0
pause(2000)
game.show_long_text("Zzzzzzzzzzzzzzzzzzzz... ", DialogLayout.BOTTOM)
if controller.A.is_pressed():
    pause(1000)
    mySprite.set_image(img("""
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
    """))
    pause(2000)
    game.set_dialog_text_color(14)
    game.show_long_text("OH NO!", DialogLayout.BOTTOM)
    if controller.A.is_pressed():
        game.set_dialog_text_color(15)
        game.show_long_text("How long have I been asleep?", DialogLayout.BOTTOM)
        if controller.A.is_pressed():
            game.show_long_text("I better leave before they lock the doors...",
                DialogLayout.BOTTOM)
            if controller.A.is_pressed():
                game.show_long_text("Move with the arrow keys or D pad if you are on controller. To interact with doors, press \"A\" over the Door Knob or Door Pad.",
                    DialogLayout.FULL)
                textCutscene += 1
                controller.move_sprite(mySprite)

def on_forever():
    global movement
    if movement < 1:
        movement = 0
    elif movement < 0:
        movement = 0
forever(on_forever)
