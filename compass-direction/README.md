Compass direction.
------------------
example
-----------
`
 Mylocation is india take from india.
 My destination location from india.

import { compass } from 'compass-direction-upgrade'

var point1 = new window.google.maps.LatLng(9.164307, 77.863798);
var point2 = new window.google.maps.LatLng(28.643234, 77.054944);

var heading = window.google.maps.geometry.spherical.computeHeading(point1, point2);
const userFacingDirection = parseInt(heading)
if(userFacingDirection) {
    console.log(compass(userFacingDirection))  
}


// result will be s or e or n or sw user facing direction you will get
`

1. You need to install compass-direction-upgrade in your react application.
2. After installtion is done make sure that package in your package.json file like this `compass-direction-upgrade: 'version' `.
3. You can import anywhere in your application to get the exact user facing direction.
4. Point1 is user location .
5. point2 is destination location.
6. after that you get the perfect user facing direction pole. like north or south or west.


you can refernce https://developers.google.com/maps/documentation/javascript/geometry for this line
'window.google.maps.geometry.spherical.computeHeading(point1, point2)'

