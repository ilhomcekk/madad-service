import { Container } from "@mui/system";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Feedback from "../../components/feedback/Feedback";
import Title from "../../components/title/Title";
import newsAbsoluteImage from "../../assets/images/news-page-absolute.png";
import newsAbsoluteImage2 from "../../assets/images/news-page-absolute-2.png";
import TranslationApi from "../../components/translation/TranslationApi";

const Agreement = () => {
  return (
    <div className="content">
      <div className="agreement-container relative">
        <LazyLoadImage
          className="agreement-page-absolute-image absolute top-0 right-0"
          src={newsAbsoluteImage}
          alt=""
        />
        <LazyLoadImage
          className="agreement-page-absolute-image-2 absolute bottom-0 left-0"
          src={newsAbsoluteImage2}
          alt=""
        />
        <Container>
          <Title
            title={
              <TranslationApi
                ru="ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ"
                uz="FOYDALANISH SHARTLARI"
                en="TERMS OF USE"
              />
            }
            className="mb-8"
          />
          <div className="color-gray font-400 mb-6">
            <TranslationApi
              ru="Однажды любое предприятие сталкивается с проблемой переезда в другой
            офис. Причины для этого могут быть всевозможные. Но все компании
            беспокоятся об одном: как переехать в другой офис в максимально
            короткое время без значительных потерь для бизнеса. Для того чтобы
            не было различных неприятностей, лучше всего обратиться за помощью к
            профессионалам, которыми являются сотрудники компании «Madad
            Moving». Если вы закажете у нас офисный переезд, то однозначно
            получите высококачественный сервис и приятные цены. Для начала
            составляется подробный план процедуры, при этом учитывается
            специфика деятельности вашей организации, сколько вещей нужно
            перевезти и предполагаемые сроки переезда. Затем оценивается
            количество времени необходимого на то, чтобы подготовиться к
            процедуре, упаковать вещи, погрузить их в автомобиль и
            транспортировать. Выбирается подходящий маршрут и выполняется
            предварительный подсчет стоимости услуги. Вещи упаковываются
            качественно, обязательно маркируются, в транспортное средство
            грузятся со всей осторожностью. Все вещи должны транспортироваться,
            разгружаться и расставляться ответственно и безопасно."
              uz={`Bir kuni har qanday korxona boshqasiga o'tish muammosiga duch keladi
             idora. Buning sabablari har xil bo'lishi mumkin. Ammo barcha kompaniyalar
             Bir narsa haqida qayg'uradi: maksimal darajada boshqa ofisga qanday o'tish kerak
             biznes uchun sezilarli yo'qotishlarsiz qisqa vaqt. Uchun
             har xil muammolar yo'q edi, yordam so'rash yaxshidir
             Madad kompaniyasi xodimlari bo'lgan mutaxassislar
             harakatlanuvchi". Agar siz bizdan ofisni ko'chirishga buyurtma bersangiz, albatta
             yuqori sifatli xizmat va maqbul narxlarni oling. Boshlanishiga
             hisobga olgan holda batafsil tartib rejasi tuziladi
             tashkilotingizning o'ziga xos xususiyatlari, sizga qancha narsalar kerakligi
             tashish va harakatning taxminiy vaqti. Keyin baholanadi
             tayyorlash uchun zarur bo'lgan vaqt miqdori
             tartib, narsalarni qadoqlash, ularni mashinaga yuklash va
             tashish uchun. Tegishli marshrut tanlanadi va amalga oshiriladi
             xizmat narxini dastlabki hisoblash. Narsalar qadoqlangan
             yuqori sifatli, belgilangan bo'lishi kerak, avtomobilda
             ehtiyotkorlik bilan yuklangan. Barcha narsalarni tashish kerak
             mas'uliyat bilan va xavfsiz tarzda tushirish va joylashtirish.`}
              en='One day, any enterprise faces the problem of moving to another
             office. The reasons for this can be all sorts. But all companies
             worried about one thing: how to move to another office in the maximum
             short time without significant losses for the business. In order to
             there were no various troubles, it is best to seek help from
             professionals who are the employees of Madad
             moving". If you order an office move from us, then definitely
             get high quality service and reasonable prices. To start
             a detailed procedure plan is drawn up, taking into account
             the specifics of your organization, how many things you need
             to transport and the estimated time of the move. Then evaluated
             the amount of time it takes to prepare for
             procedure, pack things, load them into the car and
             to transport. A suitable route is selected and executed
             preliminary calculation of the cost of the service. Things are packed
             high quality, must be marked, in the vehicle
             loaded with care. All items must be transported
             unload and stow responsibly and safely.'
            />
          </div>
          <div className="color-gray font-400 mb-6">
            <TranslationApi
              ru={`Однажды любое предприятие сталкивается с проблемой переезда в другой
            офис. Причины для этого могут быть всевозможные. Но все компании
            беспокоятся об одном: как переехать в другой офис в максимально
            короткое время без значительных потерь для бизнеса. Для того чтобы
            не было различных неприятностей, лучше всего обратиться за помощью к
            профессионалам, которыми являются сотрудники компании «Madad
            Moving». Если вы закажете у нас офисный переезд, то однозначно
            получите высококачественный сервис и приятные цены. Для начала
            составляется подробный план процедуры, при этом учитывается
            специфика деятельности вашей организации, сколько вещей нужно
            перевезти и предполагаемые сроки переезда. Затем оценивается
            количество времени необходимого на то, чтобы подготовиться к
            процедуре, упаковать вещи, погрузить их в автомобиль и
            транспортировать. Выбирается подходящий маршрут и выполняется
            предварительный подсчет стоимости услуги. Вещи упаковываются
            качественно, обязательно маркируются, в транспортное средство
            грузятся со всей осторожностью. Все вещи должны транспортироваться,
            разгружаться и расставляться ответственно и безопасно.`}
              uz={`Bir kuni har qanday korxona boshqasiga o'tish muammosiga duch keladi
             idora. Buning sabablari har xil bo'lishi mumkin. Ammo barcha kompaniyalar
             Bir narsa haqida qayg'uradi: maksimal darajada boshqa ofisga qanday o'tish kerak
             biznes uchun sezilarli yo'qotishlarsiz qisqa vaqt. Uchun
             har xil muammolar yo'q edi, yordam so'rash yaxshidir
             Madad kompaniyasi xodimlari bo'lgan mutaxassislar
             harakatlanuvchi". Agar siz bizdan ofisni ko'chirishga buyurtma bersangiz, albatta
             yuqori sifatli xizmat va maqbul narxlarni oling. Boshlanishiga
             hisobga olgan holda batafsil tartib rejasi tuziladi
             tashkilotingizning o'ziga xos xususiyatlari, sizga qancha narsalar kerakligi
             tashish va harakatning taxminiy vaqti. Keyin baholanadi
             tayyorlash uchun zarur bo'lgan vaqt miqdori
             tartib, narsalarni qadoqlash, ularni mashinaga yuklash va
             tashish uchun. Tegishli marshrut tanlanadi va amalga oshiriladi
             xizmat narxini dastlabki hisoblash. Narsalar qadoqlangan
             yuqori sifatli, belgilangan bo'lishi kerak, avtomobilda
             ehtiyotkorlik bilan yuklangan. Barcha narsalarni tashish kerak
             mas'uliyat bilan va xavfsiz tarzda tushirish va joylashtirish.`}
              en={`One day, any enterprise faces the problem of moving to another
             office. The reasons for this can be all sorts. But all companies
             worried about one thing: how to move to another office in the maximum
             short time without significant losses for the business. In order to
             there were no various troubles, it is best to seek help from
             professionals who are the employees of Madad
             moving". If you order an office move from us, then definitely
             get high quality service and reasonable prices. To start
             a detailed procedure plan is drawn up, taking into account
             the specifics of your organization, how many things you need
             to transport and the estimated time of the move. Then evaluated
             the amount of time it takes to prepare for
             procedure, pack things, load them into the car and
             to transport. A suitable route is selected and executed
             preliminary calculation of the cost of the service. Things are packed
             high quality, must be marked, in the vehicle
             loaded with care. All items must be transported
             unload and stow responsibly and safely.`}
            />
          </div>
          <div className="color-gray font-400 mb-6">
            <TranslationApi
              ru={`Однажды любое предприятие сталкивается с проблемой переезда в другой
            офис. Причины для этого могут быть всевозможные. Но все компании
            беспокоятся об одном: как переехать в другой офис в максимально
            короткое время без значительных потерь для бизнеса. Для того чтобы
            не было различных неприятностей, лучше всего обратиться за помощью к
            профессионалам, которыми являются сотрудники компании «Madad
            Moving». Если вы закажете у нас офисный переезд, то однозначно
            получите высококачественный сервис и приятные цены. Для начала
            составляется подробный план процедуры, при этом учитывается
            специфика деятельности вашей организации, сколько вещей нужно
            перевезти и предполагаемые сроки переезда. Затем оценивается
            количество времени необходимого на то, чтобы подготовиться к
            процедуре, упаковать вещи, погрузить их в автомобиль и
            транспортировать. Выбирается подходящий маршрут и выполняется
            предварительный подсчет стоимости услуги. Вещи упаковываются
            качественно, обязательно маркируются, в транспортное средство
            грузятся со всей осторожностью. Все вещи должны транспортироваться,
            разгружаться и расставляться ответственно и безопасно.`}
              uz={`Bir kuni har qanday korxona boshqasiga o'tish muammosiga duch keladi
             idora. Buning sabablari har xil bo'lishi mumkin. Ammo barcha kompaniyalar
             Bir narsa haqida qayg'uradi: maksimal darajada boshqa ofisga qanday o'tish kerak
             biznes uchun sezilarli yo'qotishlarsiz qisqa vaqt. Uchun
             har xil muammolar yo'q edi, yordam so'rash yaxshidir
             Madad kompaniyasi xodimlari bo'lgan mutaxassislar
             harakatlanuvchi". Agar siz bizdan ofisni ko'chirishga buyurtma bersangiz, albatta
             yuqori sifatli xizmat va maqbul narxlarni oling. Boshlanishiga
             hisobga olgan holda batafsil tartib rejasi tuziladi
             tashkilotingizning o'ziga xos xususiyatlari, sizga qancha narsalar kerakligi
             tashish va harakatning taxminiy vaqti. Keyin baholanadi
             tayyorlash uchun zarur bo'lgan vaqt miqdori
             tartib, narsalarni qadoqlash, ularni mashinaga yuklash va
             tashish uchun. Tegishli marshrut tanlanadi va amalga oshiriladi
             xizmat narxini dastlabki hisoblash. Narsalar qadoqlangan
             yuqori sifatli, belgilangan bo'lishi kerak, avtomobilda
             ehtiyotkorlik bilan yuklangan. Barcha narsalarni tashish kerak
             mas'uliyat bilan va xavfsiz tarzda tushirish va joylashtirish.`}
              en={`One day, any enterprise faces the problem of moving to another
             office. The reasons for this can be all sorts. But all companies
             worried about one thing: how to move to another office in the maximum
             short time without significant losses for the business. In order to
             there were no various troubles, it is best to seek help from
             professionals who are the employees of Madad
             moving". If you order an office move from us, then definitely
             get high quality service and reasonable prices. To start
             a detailed procedure plan is drawn up, taking into account
             the specifics of your organization, how many things you need
             to transport and the estimated time of the move. Then evaluated
             the amount of time it takes to prepare for
             procedure, pack things, load them into the car and
             to transport. A suitable route is selected and executed
             preliminary calculation of the cost of the service. Things are packed
             high quality, must be marked, in the vehicle
             loaded with care. All items must be transported
             unload and stow responsibly and safely.`}
            />
          </div>
          <div className="color-gray font-400 pb-24">
            <TranslationApi
              ru={`Однажды любое предприятие сталкивается с проблемой переезда в другой
            офис. Причины для этого могут быть всевозможные. Но все компании
            беспокоятся об одном: как переехать в другой офис в максимально
            короткое время без значительных потерь для бизнеса. Для того чтобы
            не было различных неприятностей, лучше всего обратиться за помощью к
            профессионалам, которыми являются сотрудники компании «Madad
            Moving». Если вы закажете у нас офисный переезд, то однозначно
            получите высококачественный сервис и приятные цены. Для начала
            составляется подробный план процедуры, при этом учитывается
            специфика деятельности вашей организации, сколько вещей нужно
            перевезти и предполагаемые сроки переезда. Затем оценивается
            количество времени необходимого на то, чтобы подготовиться к
            процедуре, упаковать вещи, погрузить их в автомобиль и
            транспортировать. Выбирается подходящий маршрут и выполняется
            предварительный подсчет стоимости услуги. Вещи упаковываются
            качественно, обязательно маркируются, в транспортное средство
            грузятся со всей осторожностью. Все вещи должны транспортироваться,
            разгружаться и расставляться ответственно и безопасно.`}
              uz={`Bir kuni har qanday korxona boshqasiga o'tish muammosiga duch keladi
             idora. Buning sabablari har xil bo'lishi mumkin. Ammo barcha kompaniyalar
             Bir narsa haqida qayg'uradi: maksimal darajada boshqa ofisga qanday o'tish kerak
             biznes uchun sezilarli yo'qotishlarsiz qisqa vaqt. Uchun
             har xil muammolar yo'q edi, yordam so'rash yaxshidir
             Madad kompaniyasi xodimlari bo'lgan mutaxassislar
             harakatlanuvchi". Agar siz bizdan ofisni ko'chirishga buyurtma bersangiz, albatta
             yuqori sifatli xizmat va maqbul narxlarni oling. Boshlanishiga
             hisobga olgan holda batafsil tartib rejasi tuziladi
             tashkilotingizning o'ziga xos xususiyatlari, sizga qancha narsalar kerakligi
             tashish va harakatning taxminiy vaqti. Keyin baholanadi
             tayyorlash uchun zarur bo'lgan vaqt miqdori
             tartib, narsalarni qadoqlash, ularni mashinaga yuklash va
             tashish uchun. Tegishli marshrut tanlanadi va amalga oshiriladi
             xizmat narxini dastlabki hisoblash. Narsalar qadoqlangan
             yuqori sifatli, belgilangan bo'lishi kerak, avtomobilda
             ehtiyotkorlik bilan yuklangan. Barcha narsalarni tashish kerak
             mas'uliyat bilan va xavfsiz tarzda tushirish va joylashtirish.`}
              en={`One day, any enterprise faces the problem of moving to another
             office. The reasons for this can be all sorts. But all companies
             worried about one thing: how to move to another office in the maximum
             short time without significant losses for the business. In order to
             there were no various troubles, it is best to seek help from
             professionals who are the employees of Madad
             moving". If you order an office move from us, then definitely
             get high quality service and reasonable prices. To start
             a detailed procedure plan is drawn up, taking into account
             the specifics of your organization, how many things you need
             to transport and the estimated time of the move. Then evaluated
             the amount of time it takes to prepare for
             procedure, pack things, load them into the car and
             to transport. A suitable route is selected and executed
             preliminary calculation of the cost of the service. Things are packed
             high quality, must be marked, in the vehicle
             loaded with care. All items must be transported
             unload and stow responsibly and safely.`}
            />
          </div>
        </Container>
      </div>
      <Feedback />
    </div>
  );
};

export default Agreement;
