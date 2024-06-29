//документ
const body=document.body;

//навигация
const navigation=document.querySelector('.navigation__mobile');
//тогл бургера
const headerButton=document.querySelector('.header__burger');
const additionallyButton=document.querySelector('.additionally__button');
const additionallyList=document.querySelector('.additionally__list');
const costForm=document.querySelector('.cost__form');

//переменные калькулятора
//const squareSlider=costForm.querySelector('.square__slider');
//const squareInput=costForm.querySelector('.square__input');

//submit
const forms=document.querySelectorAll('.form-out');
//тоглы заказа
const buttonsOrders=document.querySelectorAll('.button-order');
//ссылка на политику
const copyrightLink=document.querySelector('.copyright__link');

//модальные окна
const modalPopUpOut=document.querySelector('.popup');
const modalPopUpOrder=document.querySelector('.popup-order');
const modalPopupPolitic=document.querySelector('.popup-politic');


/********************************/
/*функции библиотек*/
const getMobilMenu=()=>{
  const changeBurger=()=>{
    if(!navigation.classList.contains('navigation__mobile_open')){
      navigation.classList.add('navigation__mobile_open');
      headerButton.classList.add('header__burger_open');
    } else {
      headerButton.classList.remove('header__burger_open');
      navigation.classList.remove('navigation__mobile_open');
    }
  }

  headerButton.addEventListener('click',changeBurger);
}
const getAdditional=()=>{
  additionallyButton.addEventListener('click',()=>{
    if(!additionallyList.classList.contains('additionally__list_open')){
    additionallyList.classList.add('additionally__list_open');
    additionallyButton.textContent='Скрыть';
    additionallyButton.style.width='84px';
   } else {
    additionallyList.classList.remove('additionally__list_open');
    additionallyButton.textContent='Показать все';
    additionallyButton.style.width='118px';
   }
  });

}

//ползунок калькулятора
/*
const getNoUaSlid=()=>{

//инициализация
noUiSlider.create(squareSlider,{
  range:{
      min:30,
      max:150,
  },
  start:30,
  step:1,
  connect:'lower',
  format:{
      to:function(value){
          if(Number.isInteger(value)){
              return value.toFixed(0);
          }
          return value.toFixed(1);
       },
      from:function(value){
          return parseFloat(value);
      }
  },
});

//установление зависимости
squareSlider.noUiSlider.on('update',(...rest)=>{
  squareInput.value=squareSlider.noUiSlider.get();
});
}
getNoUaSlid();
*/
const getSwiper=()=>{
  const swiperNew=new Swiper('.slider',{
    direction:'horizontal',
    /*loop:true,*/
    speed:1000,
    allowTouchMove:false,
    effect:'slider',
    spaceBetween:80,
    //autoplay:true,
    navigation:{
      prevEl:'.slider__togle-prev',
      nextEl:'.slider__togle-next'
    },
    pagination:{
      el:'.slider__pagination',
      clickable:true,
    },
  })
}
const getMixit=()=>{
  const mixer = mixitup('.etaps__list',{
    load:{
      filter:'.bathroom',
    }
  });
}
const getAccordion=()=>{
  new Accordion('.questions__list');
}

getMobilMenu();
getAdditional();
getSwiper();
getMixit();
getAccordion();
/******************************************/

/*блок отрисовки модальных окон*/
/************************/
//маски
$(function() {
  $("#phone1").mask("+7(999) 999-9999");
  //$("#phone2").mask("+7(999) 999-9999");
  $("#phone3").mask("+7(999) 999-9999");
  $("#phone4").mask("+7(999) 999-9999");
  $("#phone5").mask("+7(999) 999-9999");

  $('.container-twenty').twentytwenty({});
});
modalPopUpOut.style.cssText=`
 display:flex;
 visibility:hidden;
 opacity:0;
 transition: opacity 500ms ease-in-out;
`;
modalPopUpOrder.style.cssText=`
 display:flex;
 visibility:hidden;
 opacity:0;
 transition: opacity 500ms ease-in-out;
`;
modalPopupPolitic.style.cssText=`
 display:flex;
 visibility:hidden;
 opacity:0;
 transition: opacity 500ms ease-in-out;
`;
//обьект контроля скрола
const scrollController={
  disabledScroll(){
    document.body.style.cssText=`
      overflow:hidden;
      padding-right:${window.innerWidth - document.body.offsetWidth}px;
    `;
  },
  enabledScroll(){
    document.body.style.cssText='';
  },
};
/*функция pop-up (отправка)*/
const getPopUpOut=()=>{
  modalPopUpOut.style.visibility='visible';
  modalPopUpOut.style.opacity=1;
  scrollController.disabledScroll();
  modalPopUpOut.addEventListener('click',(evt)=>{
    if(evt.target.closest('.popup__close')){
      modalPopUpOut.style.visibility='hidden';
      modalPopUpOut.style.opacity=0;
      scrollController.enabledScroll();
   }
   });
}
/*функция pop-up заказа(заказ)*/
const getPopUpOrder=()=>{
    modalPopUpOrder.style.visibility='visible';
    modalPopUpOrder.style.opacity=1;
    scrollController.disabledScroll();
    modalPopUpOrder.addEventListener('click',(evt)=>{
    const modalPopUpOrderForm=modalPopUpOrder.querySelector('.popup__form');
      modalPopUpOrderForm.addEventListener('submit',()=>{
        modalPopUpOrder.style.visibility='hidden';
        modalPopUpOrder.style.opacity=0;
        document.body.style.cssText=`padding-right:${window.innerWidth - document.body.offsetWidth}px;
       `;
        getPopUpOut();
    });
    if(evt.target.closest('.popup__close')){
        modalPopUpOrder.style.visibility='hidden';
        modalPopUpOrder.style.opacity=0;
        scrollController.enabledScroll()
      };
    });
}
//функция попап политики
const getPopUpPolitic=()=>{
  modalPopupPolitic.style.visibility='visible';
  modalPopupPolitic.style.opacity=1;
  scrollController.disabledScroll();
  modalPopupPolitic.addEventListener('click',(evt)=>{
    if(evt.target.closest('.popup__close')){
      modalPopupPolitic.style.visibility='hidden';
      modalPopupPolitic.style.opacity=0;
      scrollController.enabledScroll();
   }
   });
}


//формы отправки
forms.forEach((form)=>{

  form.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    getPopUpOut();
    form.reset();
  });
});

//тоглы заказа
buttonsOrders.forEach((button)=>{
  button.addEventListener('click',()=>{
  getPopUpOrder();
  });
});

copyrightLink.addEventListener('click',getPopUpPolitic);















