<html>
<body>

  <p>Click the button to compare numbers and return the lowest.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var name = prompt ("Elen:");
alert ("Hello, " + "Elen");

function myFunction() {
    var a = Math.min(5, 10);
    var b = Math.min(0, 150, 30, 20, 38);
    var c = Math.min(-5, 10);
    var d = Math.min(-5, -10);
    var e = Math.min(1.5, 2.5);

    var x = a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e;
    document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>

