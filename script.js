// POrtfolio
const motionGraphy = document.getElementById('motionGraphy');
const eLearning = document.getElementById('eLearning');
const VisDesign = document.getElementById('VisDesign');
const Bcard = document.getElementById('Bcard');
const codeEdit = document.getElementById('codeEdit');
const webApp = document.getElementById('webApp');

document.getElementById('all').addEventListener('click',function(e){
  motionGraphy.style.display = 'block';
  eLearning.style.display = 'block';
  VisDesign.style.display = 'block';
  Bcard.style.display = 'block';
  codeEdit.style.display = 'block';
  webApp.style.display = 'block';

});
document.getElementById('branding').addEventListener('click',function(e){
  motionGraphy.style.display = 'none';
  eLearning.style.display = 'none';
  eLearning.style.display = 'none';
  VisDesign.style.display = 'block';
  Bcard.style.display = 'none';
  codeEdit.style.display = 'block';
  webApp.style.display = 'block';
});
document.getElementById('photography').addEventListener('click',function(e){
  eLearning.style.display = 'none';
  Bcard.style.display = 'none';
  codeEdit.style.display = 'none';
  webApp.style.display = 'none';
  motionGraphy.style.display = 'block';
  VisDesign.style.display = 'block';
});
document.getElementById('fashion').addEventListener('click',function(e){
  eLearning.style.display = 'none';
  Bcard.style.display = 'none';
  codeEdit.style.display = 'none';
  webApp.style.display = 'none';
  motionGraphy.style.display = 'none';
  VisDesign.style.display = 'block';
});
document.getElementById('product').addEventListener('click',function(e){
  eLearning.style.display = 'block';
  codeEdit.style.display = 'block';
  webApp.style.display = 'block';
  VisDesign.style.display = 'none';
  Bcard.style.display = 'none';
  motionGraphy.style.display = 'none';
});

// Carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });