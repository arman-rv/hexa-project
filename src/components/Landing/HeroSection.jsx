import React, { useRef, useState, useEffect, useCallback } from "react";
import http from "../../core/services/interceptor"

import AutoTypeWriter from "../common/AutoTypeWriter";
import HeroSearchBox from "./HeroSearchBox";

import teacher from "../../assets/image/stat-teacher.svg";
import student from "../../assets/image/stat-student.svg";
import course from "../../assets/image/course-state.svg";
import heroImage from "../../assets/image/hero-image.png";
const HeroSection = () => {
  const text = [
    " مرجع اموزش زنده با دسترسی به بیش از هفت هزار ویدیوی آموزشی به زبان فارسی.",
  ];

  const [Data, setData] = useState({});
  const fetchLandingReport = useCallback(async () => {
    try {
      const result = await http.get(
        "/Home/LandingReport"
      );
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchLandingReport();
    return () => {};
  }, [fetchLandingReport]);

  return (
    <div className="hero-section-bg">
      <img src={heroImage} alt="hero Image" className="hero-image" />
      <div className="hero-gradient">
        
        <h4 className="text-white">پلتفرم اموزش طراحی وب</h4>
        <h2 className="text-[54px] max-[400px]:text-4xl text-white">مرجع اموزش برنامه نویسی</h2>
        <AutoTypeWriter Text={text} className={"hero-type-writer text-white"} />
        <div className="max-[400px]:pt-1"></div>
        <HeroSearchBox />
        <div className="information-section">
          <div className="scale-[1.15] max-[400px]:scale-[1]">
            <img src={teacher} alt="مدرس" />
            <span>{Data.teacherCount?Data.teacherCount:'6'}</span>
            <label className="px-4 text-white">مدرس مجرب</label>
          </div>
          <div className="scale-[1.15]">
            <img src={course} alt="دوره" />
            <span>{Data.courseCount?Data.courseCount:'10'}</span>
            <label className="px-4  text-white">دوره آموزشی</label>
          </div>
          <div className="scale-[1.15]">
            <img src={student} alt="دانش آموز" />
            <span>{Data.studentCount?Data.studentCount: '23' }</span>
            <label className="px-4  text-white">نفر دانشجو</label>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default HeroSection;
