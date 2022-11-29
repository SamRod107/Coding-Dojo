var countPositives = 0;
var numbers = [6,2,-9,1,-4,0,100,83];

for (var i = 0; i < numbers.length; i++) 
{
    if(numbers[i] > 0)
    {
        countPositives++;
    }
}

console.log("There are " + countPositives + " positives in the array.");