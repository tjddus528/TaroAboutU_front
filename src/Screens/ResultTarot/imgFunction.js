import react from 'react';
<Image source={require()} style={styles.cardImg}></Image>

export function imgfunc(id) {
    switch (id) {
        case 0:
            return <Image source={require("../../../TarotCardImg/TheFool.png")} style={styles.cardImg}></Image>
        case 1:
            return <Image source={require("../../../TarotCardImg/TheMagician.png")} style={styles.cardImg}></Image>
        case 2:     
            return <Image source={require("../../../TarotCardImg/TheHighPriestess.png")} style={styles.cardImg}></Image>
        case 3:
            return <Image source={require("../../../TarotCardImg/TheEmpress.png")} style={styles.cardImg}></Image>
        case 4:
            return <Image source={require("../../../TarotCardImg/TheEmperor.png")} style={styles.cardImg}></Image>
        case 5:
            return <Image source={require("../../../TarotCardImg/TheHierophant.png")} style={styles.cardImg}></Image>
        case 6:
            return <Image source={require("../../../TarotCardImg/TheLovers.png")} style={styles.cardImg}></Image>
        case 7:
            return <Image source={require("../../../TarotCardImg/TheChariot.png")} style={styles.cardImg}></Image>
        case 8:
            return <Image source={require("../../../TarotCardImg/Strength.png")} style={styles.cardImg}></Image>
        case 9:
            return <Image source={require("../../../TarotCardImg/TheHermit.png")} style={styles.cardImg}></Image>
        case 10:
            return <Image source={require("../../../TarotCardImg/WheelofFortune.png")} style={styles.cardImg}></Image>
        case 11:
            return <Image source={require("../../../TarotCardImg/Justice.png")} style={styles.cardImg}></Image>
        case 12:
            return <Image source={require("../../../TarotCardImg/TheHangedMan.png")} style={styles.cardImg}></Image>
        case 13:
            return <Image source={require("../../../TarotCardImg/Death.png")} style={styles.cardImg}></Image>
        case 14:
            return <Image source={require("../../../TarotCardImg/Temperance.png")} style={styles.cardImg}></Image>
        case 15:
            return <Image source={require("../../../TarotCardImg/TheDevil.png")} style={styles.cardImg}></Image>
        case 16:
            return <Image source={require("../../../TarotCardImg/TheTower.png")} style={styles.cardImg}></Image>
        case 17:
            return <Image source={require("../../../TarotCardImg/TheStar.png")} style={styles.cardImg}></Image>
        case 18:
            return <Image source={require("../../../TarotCardImg/TheMoon.png")} style={styles.cardImg}></Image>
        case 19:
            return <Image source={require("../../../TarotCardImg/TheSun.png")} style={styles.cardImg}></Image>
        case 20:
            return <Image source={require("../../../TarotCardImg/Judgement.png")} style={styles.cardImg}></Image>
        case 21:
            return <Image source={require("../../../TarotCardImg/TheWorld.png")} style={styles.cardImg}></Image>
        default:
            return <Image source={require("../../../TarotCardImg/TheWorld.png")} style={styles.cardImg}></Image>
    }
}