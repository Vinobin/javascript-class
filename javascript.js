let a=2;
let b=3;
let c=4;
let d=5;
let e=((b+a)*c)/(a*b*b)+(a-d);
console.log(e);

 let nilai=90;
 let KKM=80;
if(nilai>KKM){
    console.log("lulus")
}else{
    console.log("tidak lulus")
}
let bulan=6;
let tanggal=22;
let zodiac="belum dibuat";
if(bulan==1){
    if(tanggal>0 && tanggal<20){
        zodiac="gemini";
    }
    if(tanggal>19 && tanggal<30){
       zodiac="taurus";
    }
}
if(bulan==2){
    if(tanggal>0 && tanggal>20){
        zodiac="capricorn";
    }
    if(tanggal>19 && tanggal<30){
        zodiac="aquarius";
    }
   
}
if(bulan==3){
    if(tanggal>0 && tanggal>20){
        zodiac="pisces";
    }
    if(tanggal>19 && tanggal<30){
        zodiac="aries";
    }
}
    if(bulan==4){
        if(tanggal>0 && tanggal>20){
            zodiac="cancer";
        }
        if(tanggal>19 && tanggal<30){
            zodiac="leo";
        }
    }
    if(bulan==5){
        if(tanggal>0 && tanggal>20){
            zodiac="virgo";
        }
        if(tanggal>19 && tanggal<30){
            zodiac="libra";
        }
    }
    if(bulan==6){
        if(tanggal>0 && tanggal<20){
            zodiac="scorpio";
        }
        if(tanggal>19 && tanggal<30){
            zodiac="sagitarius";
        }
}

console.log(zodiac);