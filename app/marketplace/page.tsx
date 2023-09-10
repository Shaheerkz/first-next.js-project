"use client"

import Header from "../components/Header";
import Watches from "./Watches";
import Footer from "../components/Footer";
import { fetch, fetchPost } from "./fetch";

export default function HomeIn () {
   
    return (
        
        <section className="text-gray-600 body-font">
        <Header />
       <div className='grid justify-items-center'>
       {fetchPost.map((fetchPost: fetch) => (
          <Watches fetchPost={fetchPost} />
        ))}
        </div>  
        <Footer />
      </section>
       


    )
}