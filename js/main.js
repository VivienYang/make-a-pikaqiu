 var css_txt=`
 #codeBox{
    font-size:12px
}
 body {
    background: #FFE600;
    font-size: 100px;
}
#pikachu {
    position: absolute;
    width: 4.2em;
    height: 2.35em;
 left:50%;
 top:50%;
 -webkit-transform:translateY(-50%) translateX(-50%);
 -moz-transform:translateY(-50%) translateX(-50%);
 -ms-transform:translateY(-50%) translateX(-50%);
 transform:translateY(-50%) translateX(-50%);
}
.eye {
    width: .57em;
    height: .57em;
    border: .03em solid black;
    background: #2e2e2e;
    border-radius: 100%;
    position: absolute;
    margin-left: .6em;
}
.eye:after {
    width: .25em;
    height: .25em;
    border: .03em solid black;
    background: #fff;
    content: '';
    display: block;
    position: absolute;
    border-radius: 100%;
    margin-left: .07em;
    margin-top: -.02em;
}
.eye.right {
    right: .6em;
}
.nose {
    position: absolute;
    margin: .3em calc(50% - .11em);
    margin-top: .38em;
    width: 0;
    height: 0;
 z-index: 1; /* Thanks for the solution to @440design */
    border-top:.09em solid black;
    border-left:.11em solid transparent;
    border-right:.11em solid transparent;
 box-shadow: 0 -.01em 0 black;
}
.nose:before {
    content: '';
    display: block;
    position: absolute;
    width: .22em;
    height: .05em;
    background: black;
    border-top-left-radius: .11em .05em;
    border-top-right-radius: .11em .05em;
    margin-top: -.14em;
    margin-left: -.11em;
}
.nose:hover {
-webkit-animation:nose .23s infinite linear;
-moz-animation:nose .23s infinite;
-ms-animation:nose .23s infinite;
animation:nose .23s infinite linear;
}
.ridiculousMouth {
    position: absolute;
    width: 2.28em;
    height: 1.8em;
    margin-top: .65em;
    margin-left: calc(50% - 1.18em);
    overflow: hidden;
}
.ridiculousMouth:after {
    content: '';
    display: block;
    position: absolute;
    width: .8em;
    height: .25em;
    background: #FFE600;
    border: .03em solid black;
    border-top: none;
    border-left: none;
    right: .25em;
    top: -.05em;
    -webkit-transform:rotate(25deg);
    -moz-transform:rotate(25deg);
    -ms-transform:rotate(25deg);
    transform:rotate(25deg);
    border-bottom-right-radius: .6em .3em;
    box-shadow: 0 -.1em 0 #FFE600, -.05em -.03em 0 #FFE600;
}
.ridiculousMouth:before {
    content: '';
    display: block;
    position: absolute;
    width: .8em;
    height: .25em;
    background: #FFE600;
    border: .03em solid black;
    border-top: none;
    border-right: none;
    left: .35em;
    top: -.05em;
    -webkit-transform:rotate(-25deg);
    -moz-transform:rotate(-25deg);
    -ms-transform:rotate(-25deg);
    transform:rotate(-25deg);
    border-bottom-left-radius: .6em .3em;
    box-shadow: 0 -.1em 0 #FFE600, .05em -.03em 0 #FFE600;
    z-index: 1;
}
.ridiculousMouth > div {
    position: absolute;
    background: #FF485F;
    width: 2.28em;
    height: 8em;
    border: .04em solid black;
    border-bottom-left-radius: 1.18em 8em;
    border-bottom-right-radius: 1.18em 8em;
    margin-top: -6.37em;
    overflow: hidden;
}
.ridiculousMouth > div:after {
    content: '';
    position: absolute;
    display: block;
    width: 1.3em;
    height: 1em;
    box-shadow: 0 -.7em 0 #9B000A;
    bottom: .35em;
    margin-left: .49em;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
}
.cheek {
    width: .82em;
    height: .82em;
    border: .03em solid black;
    border-radius: 100%;
    position: absolute;
    margin-top: 1.1em;
    background: #F00;
}
.cheek.right {
    right: 0;
}

@-webkit-keyframes nose {
0% { -webkit-transform:rotate(0deg); }
33% { -webkit-transform:rotate(-5deg); }
67% { -webkit-transform:rotate(5deg); }
100% { -webkit-transform:rotate(0deg); }
}
@-moz-keyframes nose {
0% { -moz-transform:rotate(0deg); }
33% { -moz-transform:rotate(-5deg); }
67% { -moz-transform:rotate(5deg); }
100% { -moz-transform:rotate(0deg); }
}
@-ms-keyframes nose {
0% { -ms-transform:rotate(0deg); }
33% { -ms-transform:rotate(-5deg); }
67% { -ms-transform:rotate(5deg); }
100% { -ms-transform:rotate(0deg); }
}
@keyframes nose {
0% { transform:rotate(0deg); }
33% { transform:rotate(-5deg); }
67% { transform:rotate(5deg); }
100% { transform:rotate(0deg); }
}`
writeCode('',css_txt,function(){
    
})
function writeCode(preCode,currCode,callBack){
    let n=0;
    var myInt=setInterval(()=>{
        console.log(n)
        n++
        styleTag.innerHTML=preCode+currCode.substr(0,n)
        codeBox.innerHTML=preCode+currCode.substr(0,n)
        if(n>=currCode.length){
            clearInterval(myInt)
            callBack()
        }
    },50)
}