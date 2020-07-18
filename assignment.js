console.log("\nConverter for feet to mile : \n");
// This function is for converting feet to mile
function feetToMile(feet)
{
    var mile = feet/5280;
    return mile;
}
var result = feetToMile(100);
console.log(result);





console.log("\nWood calculator : \n");
// This function is for calculate the wood
function woodCalculator(numberOfChair, numbberOfTable, numberOfBed)
{
    var total_wood_needed = (numberOfChair*1)+(numbberOfTable*3)+(numberOfBed*5);
    return total_wood_needed;
}

var wood_needed = woodCalculator(1,1,1);
console.log(wood_needed);





console.log("\nBrick calculator :\n");
// This function is for calculate brick
function brickCalculator(floorOfBuilding)
{
    var total_feet_counter = 0;
    if(floorOfBuilding <= 10)
    {
        total_feet_counter = floorOfBuilding*15;
    }
    else if(floorOfBuilding >= 11 && floorOfBuilding <= 20)
    {
        total_feet_counter = 150 + ((floorOfBuilding-10)*12);
    }
    else
    {
        total_feet_counter = 270 +  ((floorOfBuilding-20)*10);
    }
    var total_brick_needed = total_feet_counter*1000;
    return total_brick_needed;
}

var number_Of_Brick =  brickCalculator(37);
console.log(number_Of_Brick);





console.log("\nFind the tiny name :\n");
// This function is for finding the tiny name of my friend
function tinyFriend(name)
{
    var tiny_name_length = name[0].length;
    var tiny_name_position = 0;

    for(var i=1; i<name.length; i++)
    {
        if(name[i].length < tiny_name_length)
        {
            tiny_name_length = name[i].length;
            tiny_name_position = i;
        }
    }
    return name[tiny_name_position];
}

var name = ['Mahmud', 'Ali', 'Rafi', 'Meyad', 'Stiphen', 'Jack'];
var tinyName = tinyFriend(name);
console.log(tinyName);