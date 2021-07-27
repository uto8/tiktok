$('.slick').slick({
  autoplay: true,
  accessibility: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  fade: true,
});
const child = document.querySelector('.animation');
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target);
        }else{
        }
    });
    // alert('intersecting');
}
const options = {
    root: null,
    rootMargin: "-300px 0px",
    threshold: [0, 0.5, 1]
};
const io = new IntersectionObserver(cb, options);
io.observe(child);



var $target = $('.animation-content');//アニメーションさせたい要素
var offset = 100;//アニメーションタイミング

$(window).on('scroll', function() {//スクロールしたとき

  var scroll = $(window).scrollTop();//スクロール量を取得
  var h = $(window).height();//画面の高さを取得

  $target.each(function() {
    var pos = $(this).offset().top;//アニメーションさせたい要素の位置を取得
    if (scroll > pos - h + offset) {//スクロール量 > アニメーションさせたい要素の位置
      $(this).addClass('inview');
    }
  })

}).trigger('scroll');


$(".insta").on("click",()=>{
  alert("Coming soon");
})
