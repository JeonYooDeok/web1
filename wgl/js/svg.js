//var vv1 = new Vivus('svg1',{type:'oneByOne'});
//var vv2 = new Vivus('svg2',{type:'oneByOne'});
//var vv3 = new Vivus('svg3',{type:'oneByOne'});
//var v1 = $('#svg1');
//var v2 = $('#svg2');
//var v3 = $('#svg3');
//
//console.log(v1);
//
//$(window).scroll(function(){
//    if($(this).scrollTop() > $(v1).offset().top - $(this).height()){
//        vv1.play();
//    }else{
//        vv1.reset();
//    }
//});
//
//$(window).scroll(function(){
//    if($(this).scrollTop() > $(v2).offset().top - $(this).height()){
//        vv2.play();
//    }else{
//        vv2.reset();
//    }
//});
//
//$(window).scroll(function(){
//    if($(this).scrollTop() > $(v3).offset().top - $(this).height()){
//        vv3.play();
//    }else{
//        vv3.reset();
//    }
//});

var svg = [
    $('#svg1'),
    $('#svg2'),
    $('#svg3'),
    $('#svg4'),
    $('#svg5'),
    $('#svg6')
];

console.log(svg);
console.log(svg[0]);

var vv = [
    new Vivus('svg1',{type:'oneByOne'}),
    new Vivus('svg2',{type:'oneByOne'}),
    new Vivus('svg3',{type:'oneByOne'}),
    new Vivus('svg4',{type:'oneByOne'}),
    new Vivus('svg5',{type:'oneByOne'}),
    new Vivus('svg6',{type:'oneByOne'})
];

console.log(vv);
console.log(vv[0]);


$(window).scroll(function(){
    for(var i = 0; i < 10; i++){
        console.log(i);
        if($(this).scrollTop() > svg[i].offset().top - $(this).height()){
            vv[i].play();
        }else{
            vv[i].reset();
        }
    }
});





