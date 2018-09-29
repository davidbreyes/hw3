# hw3
Computational Practices Homework 3
1) The code that draws the blades of grass is the line function alongside with the stroke function. The line function 
   includes where each blade of grass is going to be place and which direction it'll go. The stroke function is in
   charge of the color of the grass.
2) The grass gets cut from the if statement, "if random() > 0.999 {" which simply creates a white rectangle to imitate
   the cut. Once the grass becomes tall enough that it'll grow over the canvas, this statements draws the rectangle.
3) The "h" variable is in charge of the pacing/speed of the growth of the grass. If the "h" variable from 10 to a higher
   number, the grass will grow taller and faster.
4) The three arguments in "colorMode" are (1) the range of red or hue, (2) the range of green or saturation, & (3) the range
   of blue or brightness.
5) The "-10" in the line function allows the grass to make it look like it's actually growing. In the random function, if
   random "(-10,10)" was changed to (100,10), the grass would move diagonally to the right instead of slightly at an angle.
   The "height-10-random(h)" portion of the line function makes the grass flow nice, steady, and stacking until the grass is
   cut. 
   
