function reverse(arr)
{
    var newArray = [];
    var PushVar = 0;
    for(i=arr.length-1; i >= 0; i--)
    {
        newArray[PushVar] = arr[i];
        PushVar+=1;
    }
    return newArray;
}

var letters = ["a","b","c","d","e"]
// var TestArray = ["ab_c", "i i", "z", "Array", 5] 

reverse(letters);
console.log(reverse(letters));
// console.log(reverse(TestArray));