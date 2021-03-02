var bt = document.getElementById('ans');
// var textIn = document.getElementById('screen');

var textIn = document.calc.text.value;
var storage = document.getElementById('history');

bt.addEventListener('click', function()
{
    var data = document.createElement('p');
    data.innerText = textIn.Value;
    storage.appendChild(data);

    data.addEventListener('dblclick',function()
    {
        data.remove();
    });
    
});

// -------------------back btn
function back()
{
    var b= document.calc.text.value;
    b= b.slice(0,b.length-1);
    document.calc.text.value=b;
}
// -----------------------------------------

function solve()
{

}



