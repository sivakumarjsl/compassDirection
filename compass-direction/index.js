
module.exports.compass=(userFacingDirection) => {
    if (userFacingDirection >= 85 && userFacingDirection <= 95) {
        return  'E'
    } else if (userFacingDirection <= -85 && userFacingDirection >= -95) {
        return 'W'
    } else if (userFacingDirection === 180 || (userFacingDirection <= 175 && userFacingDirection >= -10)) {
        return  'S'
    } else if ((userFacingDirection >= -180 && userFacingDirection <= 10 && userFacingDirection <= -170)) {
        return 'N'
    } else if (userFacingDirection < 85 && userFacingDirection > 10) {
        return  'NE'
    } else if (userFacingDirection > 95 && userFacingDirection > 175) {
        return 'SE'
    } else if (userFacingDirection < -100 && userFacingDirection >= -170) {
        return 'NW' 
    } else if (userFacingDirection > -90 && userFacingDirection < -10) {
        return  'SW' 
    }
}