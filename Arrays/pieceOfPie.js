function pieceOfPie(inputArray, targetOne, targetTwo){
    let startingIndex = inputArray.indexOf(targetOne);
    let endingIndex =inputArray.indexOf(targetTwo);

    let outputArray = inputArray.slice(startingIndex, endingIndex +1);

    return outputArray;

}
pieceOfPie ( ['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');

pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie');