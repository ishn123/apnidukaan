import React from 'react'
import "./pages.css"
import dettol from "../assets/haircare.webp";
import tp from "../assets/tp.png";
import fab from "../assets/fab.jpeg";
import CategoryCard from '../Components/ProductCard/CategoryCard';
import { useNavigate } from 'react-router-dom';

const Cosmetics = () => {
    const navigate = useNavigate();
    const category = [{
        
        title:"Hair Care",
        path:"/haircare",
        img:dettol,
        desc:"This category includes all sub products of dettol including handwash,soap,sanitizers etc."
    },
    {
        
        title:"Oral Care",
        path:"/oralcare",
        img:tp,
        desc:"This category includes all sub products of savlon including handwash,soap,sanitizers etc."
    },
    {
        title:"Fabric Care",
        path:"/fabriccare",
        img:fab,
        desc:"This category includes all sub products of savlon including handwash,soap,sanitizers etc."
    },

]
  return (
    <div className="disinfectants-wrapper">
        <div className="disinfectants-catergory-with-title">
            <div className="title-page">Cosmetics</div>
            <div className="catergory-card-wrapper">
                {
                    
                    category.map((ele)=>{return(
                        <CategoryCard title={ele.title} img={ele.img} about={ele.desc} ></CategoryCard>
                    )})
                }
            </div>
        </div>
    </div>
  )
}

export default Cosmetics;