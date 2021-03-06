import "./testimonials.css";
import avat1 from "../../assetts/avatar1.jpg";
import avat2 from "../../assetts/avatar2.jpg";
import avat3 from "../../assetts/avatar3.jpg";
import avat4 from "../../assetts/avatar4.jpg";
import avat5 from "../../assetts/avatar5.jpg";
import avat6 from "../../assetts/avatar6.jpg";

import {  Pagination,  A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avat1,
    name: "Ali Mehdi",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      
  },
  {
    avatar: avat2,
    name: "Mike Jhonson",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",

  },
  {
    avatar: avat3,
    name: "lulia",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",

  },
  {
    avatar: avat4,
    name: "Ibrahim Ali",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",

  },
  {
    avatar: avat5,
    name: "Sudeep Krishna",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",

  },
  {
    avatar: avat6,
    name: "Deepak",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",

  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[ Pagination,  A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
     {
       data.map(({avatar , name , review},index)=> (
        <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
            {review}
          </small>
        </SwiperSlide>
       ))
     }
 
      </Swiper>
    </section>
  );
};

export default Testimonials;
