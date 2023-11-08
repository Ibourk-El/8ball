let whiteBall = document.querySelector( ".white-ball" )
let slaider = document.querySelector( "input" )
let stick = document.querySelector( ".stick" )
let deg = 0
let whiteballe = document.querySelector( ".white-ball" );
let curen
let curentposition = parseInt( getComputedStyle( stick ).left );
console.log( curentposition );

slaider.addEventListener( "input", ( e ) =>
{
    stick.style.transform = `translate(${ -e.target.value }%) rotateZ(${ deg }deg)`
    console.log(e.target.value);
} )
window.addEventListener( "mouseup", (e) =>
{
    e.target.value=0
    stick.style.transform = `translate(${ e.target.value }%) rotateZ(${ deg }deg)`;
    // stick.style.left = curentposition - "50" + "px"
} )

window.addEventListener( "keydown", (e) =>
{
    if ( e.key === "ArrowRight" )
    {
        deg-=5
    }
    if ( e.key === "ArrowLeft" )
    {
        deg+=5
    }
    stick.style.transform=`translate(${e.target.value}%) rotateZ(${deg}deg)`
})



