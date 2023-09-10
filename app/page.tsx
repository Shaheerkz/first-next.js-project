'use client'
import Header from "./components/Header";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { cardPost } from "./components/Banner";

export default async function Home() {
  // // fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then((posts) => console.log(posts));
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await response.json();
  // console.log("posts: " + posts);
  return (
    <section  className="text-gray-600 body-font">
      <Header />

      <section className="text-gray-600 body-font" >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex">
        {cardPost.map((cardPost) => (
          <Card cardPost={cardPost} />
        ))}
        </div>
      </div>
    </section>


      <Testimonial />
      <Footer />
    </section>
  );
}
