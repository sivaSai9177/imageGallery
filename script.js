
var mainContainer = document.querySelector('.container-wrapper');
var firstContainer = document.querySelector('.one');
var secondContainer = document.querySelector('.two');
var thirdContainer = document.querySelector('.three');
var fourthContainer = document.querySelector('.four');
var loader = document.querySelector('.loader');
var container = document.querySelector('.container');
var closeBtn = document.querySelector('.closeBtn');
var card = document.querySelector('.card');
var header = document.querySelector('header');
var overlay = document.querySelector('.overlay');
var li = Array.from(document.querySelectorAll('.right li'));
var input = document.querySelector('input');
var heading = document.querySelector('.heading');
var firstImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var secondImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var thirdImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var fourthImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
window.addEventListener('scroll', scrolleEvent);
function scrolleEvent() {
    if (window.scrollY > 0) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
}




li.forEach(li => {
    li.addEventListener('click', (e) => {
        var current = document.querySelector('.active');
        current.classList.remove("active");
        e.currentTarget.classList.add('active');
        overlay.style.display = "block";
        overlay.style.opacity = 0.24;

    });
});


document.querySelector('.home-link').addEventListener('click', () => {
    overlay.style.display = "none";
    overlay.style.opacity = 0;
    mainContainer.style.display = "flex";
    document.querySelector('.li-active').classList.remove('li-active');
});

overlay.addEventListener('click', () => {
    console.log("clicked");
    overlay.style.display = "none";
    overlay.style.opacity = 0;
    li[0].classList.add('active');
    li[1].classList.remove('active');
    li[2].classList.remove('active');
    li[3].classList.remove('active');
    document.body.style.overflow = "scroll";
})
window.addEventListener('load', () => {
    loader.classList.add('finished');
    document.body.style.overflowY = "auto";
    mainContainer.style.display = "flex";

    function query790() {
        var query790 = window.matchMedia("(max-width: 790px)");
        var Card1 = document.querySelector(".card-1");
        var Card2 = document.querySelector(".card-2");
        var Card3 = document.querySelector(".card-3");
        if (query790.matches) {
            document.querySelector('.link-1').addEventListener('click', () => {
                console.log('click');
                Card1.classList.add("li-active");
                Card2.classList.remove("li-active");
                Card3.classList.remove("li-active");
            });
            document.querySelector('.link-2').addEventListener('click', () => {
                console.log('click');
                Card1.classList.remove("li-active");
                Card2.classList.add("li-active");
                Card3.classList.remove("li-active");
            });
            document.querySelector('.link-3').addEventListener('click', () => {
                console.log('click');
                Card1.classList.remove("li-active");
                Card2.classList.remove("li-active");
                Card3.classList.add("li-active");
            });
        }
    };
    query790();



});


function showElements(Html, container) {
    var div = document.createElement('div');
    div.classList.add('port-items');
    div.innerHTML = Html;
    container.appendChild(div);
}
closeBtn.addEventListener('click', () => {
    card.classList.remove('showCard');
});

firstImages.forEach(image => {
    var leftHtml = `
    <div class="port-image home">
        <img src="images/left/image-${image}.jpg" alt="eagle">
        <div class="port-content">
            <h1>superb view</h1>
            <a download = "" href = "#"> <i class = "material-icons">arrow_downward </i></a>
        </div>
    </div>`;
    showElements(leftHtml, firstContainer);
});
secondImages.forEach(image => {
    var centerHtml = `
    <div class="port-image home">
        <img src="images/center/image-${image}.jpg" alt="eagle">
        <div class="port-content">
            <h1>superb view</h1>
            <a download = "" href = "#"> <i class = "material-icons"> arrow_downward </i></a>
        </div>
    </div>`;
    showElements(centerHtml, secondContainer);
});
thirdImages.forEach(image => {
    var rightHtml = `
    <div class="port-image home">
        <img src="images/right/image-${image}.jpg" alt="eagle">
        <div class="port-content">
            <h1>superb view</h1>
            <a download="" href="#"><i class="material-icons">arrow_downward</i></a>
        </div>
    </div>`;
    showElements(rightHtml, thirdContainer);
});
fourthImages.forEach(image => {
    var rightHtml = `
    <div class="port-image home">
        <img src="images/fourth/image-${image}.jpg" alt="eagle">
        <div class="port-content">
            <h1>superb view</h1>
            <a download="" href="#"><i class="material-icons">arrow_downward</i></a>
        </div>
    </div>`;
    showElements(rightHtml, fourthContainer);
});

var photoCard = document.querySelector('.photo');
var shiftImage = photoCard.querySelector('img');
var portItems = Array.from(document.querySelectorAll(".port-items"));
var portContent = document.querySelectorAll('.port-content');
portContent.forEach(item => {
    item.addEventListener('click', (e) => {
        var event = e.target;
        var a = event.closest('a');
        if (!a) return;
        if (a) {
            var img = e.target.parentElement.parentElement.previousElementSibling;
            var imgSrc = img.getAttribute('src');
            shiftImage.setAttribute('src', imgSrc);
            card.classList.add('showCard');
            download('images', a, imgSrc);
        }
    })
});

function download(imgFile, a, src) {
    a.setAttribute('href', src);
    a.setAttribute('download', imgFile);
}

// var options = {
//     threshold = 0.7
// }

// var firstColoumn = firstContainer.querySelectorAll('.port-items');
// console.log(firstColoumn);

var observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-items');
        }
    })
});


portItems.forEach(Item => {
    observer.observe(Item);
})