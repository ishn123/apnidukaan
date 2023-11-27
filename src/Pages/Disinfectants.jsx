import React from 'react'
import "./pages.css"
import dettol from "../assets/dettol.webp";
import harpic from "../assets/harpic.webp";
import lizol from "../assets/lizol.jpeg";
import savlon from "../assets/savlon.jpeg";
import CategoryCard from '../Components/ProductCard/CategoryCard';
const Disinfectants = () => {
    const category = [{
        
        title:"Dettol",
        img:dettol,
        desc:"This category includes all sub products of dettol including handwash,soap,sanitizers etc."
    },
    {
        
        title:"Savlon",
        img:savlon,
        desc:"This category includes all sub products of savlon including handwash,soap,sanitizers etc."
    },
    {
        
        title:"harpic",
        img:harpic,
        desc:"This category includes all sub products of harpic including bathroom, toilet cleaner etc."
    },
    {
        
        title:"lizol",
        img:lizol,
        desc:"This category includes all sub products of lizol including different variants."
    }

]
  return (
    <div className="disinfectants-wrapper">
        <div className="disinfectants-catergory-with-title">
            <div className="title-page">Disinfectants</div>
            <div className="catergory-card-wrapper">
                {
                    
                    category.map((ele)=>{return(
                        <CategoryCard title={ele.title} img={ele.img} about={ele.desc}></CategoryCard>
                    )})
                }
            </div>
        </div>
    </div>
  )
}

export default Disinfectants