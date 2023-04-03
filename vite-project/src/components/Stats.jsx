import React from 'react'

import {stats} from "../constants";
import styles from "../styles";

const Stats = () => {
  return (
    <div>
      <section className = {`${styles.flexCenter} flex-row flex-wrap sm:mb20 mb-6`}>
        {stats.map((stat)=>(
          <div key = {stat.id} className = {`flex-1 flex justify-start items-center flex-row m-3`}>
            <h4 className = "font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
            <p className = "font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 ">{stat.title}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Stats

// here if you will check the stat is coming from the constant file and it is in the form of objects , so we are calling the objext in the form of class 
// in the above code we are callin the stat in the form of key value pair

// to import the command in the form of map from a exterior file

// write the code in the following way

//  {stats.map((stat)=>(
// <div key = {stat.id}>

// </div>
// ))}