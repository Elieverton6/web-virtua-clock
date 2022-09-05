var ano = new Date()

// APARECER NO ELEMENTO HTML //
document.getElementById("year").innerHTML = ano.getFullYear();
document.getElementById("seconds").innerHTML = ano.getSeconds();
document.getElementById("minutes").innerHTML = ano.getMinutes();
document.getElementById("hours").innerHTML = ano.getHours();
document.getElementById("month").innerHTML = ano.getMonth();
document.getElementById("day").innerHTML = ano.getDay();


