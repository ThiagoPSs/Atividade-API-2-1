function calc(){
    var a1 = parseInt(document.getElementById('idn1').value);
    var c1 = parseInt(document.getElementById('idn2').value);
    var c2 = parseInt(document.getElementById('idn3').value);
    var area1 = 0;
    var area2 = 0;
    var total = 0;
    area1 = a1 * c1;
    area2 = a1 * c2;
    total = area1 + area2;
    document.getElementById('idresult').value = area1;
    document.getElementById('idresult2').value = area2;
    document.getElementById('idresult3').value = total;
}