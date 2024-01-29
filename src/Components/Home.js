
import "./index.css/boots.css";
import card1 from "./Assets/card1.png";
import card from "./Assets/card.png";
import card3 from "./Assets/card3.png";
import card4 from "./Assets/card4.png";
import mountain from "./Assets/mountain.png";
import hiking from "./Assets/hiking.png";
import china from "./Assets/china.png";
import dubai from "./Assets/dubai.png";
import customer from "./Assets/customer.png";
import fastv from "./Assets/fastv.mp4";
import blog1 from "./Assets/blog1.png";
import blog2 from "./Assets/blog2.png";
import blog3 from "./Assets/blog3.png";
import blog4 from "./Assets/blog4.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {

   const navigate = useNavigate()

   function savedata(data) {
     axios.post("http://localhost:8988/students", data)
     alert("Booking Done");
   //   navigate('/show')
   }
 
   const { register, handleSubmit } = useForm()

   return (
      <>
<form onSubmit={handleSubmit(savedata)}>
         <div className="row" >
            <div className="col-12 , i ">
               <h2  id="plan" >  Plan Your Trip With Travel </h2>
               <h2 id="plan2" >Dot</h2>
               <p> Travel to your favourite city with respectful of the </p>
               <p>enviroment !</p>
            </div>
         </div>

         <div className="form">
            <div className="row">
               <div className="col-3">
                  <label>Name</label>
                  <input id="name" type="text" class="form-control" placeholder="First name" aria-label="First name" {...register("name")} />
               </div>

               <div className="col-3">
                  <label>Mobile</label>
                  <input id="mobile" type="number" class="form-control" placeholder="Mobile No." aria-label="First name"  {...register("mobile")} />
               </div>

               <div className="col-3">
                  <label htmlFor="destination" >Destination</label>
                  <select class="form-select" aria-label="Default select example"  {...register("destination")} >
                     <option selected>Select Destination</option>
                     <option value="Peru">Peru</option>
                     <option value="Mexico">Mexico</option>
                     <option value="Combodia">Combodia</option>
                     <option value="India">India</option>
                     <option value="Dubai">Dubai</option>
                  </select>
               </div>

               <div className="col-3 mt-4 ">
                  <button style={{ width: 140 }} type="submit" class="btn btn-secondary">Register</button>
               </div>

            </div>



         </div>

         <div className="row">
            <div className="col-12,j" >
               <h2 style={{ marginTop: 90, marginRight: 800 }} >Popular Destination</h2>
               <p style={{ marginRight: 410 }} >From historical citties to natural specteculare,come see the best of the world! </p>
            </div>

            <div className="col-3">
               <img src={card1} id="card" height={250} width={270} style={{ marginLeft: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
            </div>

            <div className="col-3">
               <img src={card} id="card" height={250} width={270} style={{ marginLeft: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
            </div>

            <div className="col-3">
               <img src={card3} id="card" height={250} width={270} style={{ marginLeft: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
            </div>

            <div className="col-3">
               <img src={card4} id="card" height={250} width={270} style={{ marginLeft: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
            </div>

         </div>

          <div className="row" >
                <div className="col-3">
                  <div className="card2" >
                   <h4 style={{marginRight:200}} > <b>01</b></h4>
                   <h4  id="peru" style={{marginRight:180}} >Peru   </h4>
                   </div>
                </div>

                <div className="col-3">
                  <div className="card2" >
                   <h4 style={{marginRight:200}} > <b>02</b></h4>
                   <h4  id="peru" style={{marginRight:180}} >Mexico   </h4>
                   </div>
                </div>
                <div className="col-3">
                  <div className="card2" >
                   <h4 style={{marginRight:200}} > <b>03</b></h4>
                   <h4  id="peru" style={{marginRight:180}} >Combodia </h4>
                   </div>
                </div>
                <div className="col-3">
                  <div className="card2" >
                   <h4 style={{marginRight:200}} > <b>04</b></h4>
                   <h4  id="peru" style={{marginRight:180}} >India   </h4>
                   </div>
                </div>
          </div>

            <div className="col-12 mx-auto  ">
              <h3 style={{marginTop:40}} > Special Offers</h3>
              <p>From historical cities to natural specteculare, come see the best of the world!</p>
            </div>
             <div className="row">
            <div className="col-12,card3" >
              
            </div>

            <div className="col-4">
               <img src={china} id="card" height={250} width={270} style={{ marginLeft: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
            </div>

            <div className="col-4">
               <img src={card} id="card" height={250} width={270} style={{ marginLeft: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
            </div>

            <div className="col-4">
               <img src={dubai} id="card" height={250} width={270} style={{ marginLeft: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
            </div>

          

         </div>

          <div className="row" >
                <div className="col-4">
                  <div className="card3" >
                   <h4 style={{marginRight:200}} > <b>$7456</b></h4>
                   <h4  id="peru" style={{marginRight:180}} > <button type="button" id="view" style={{height:30 , width:200 , marginLeft:35   }} >View Details - </button>  </h4>
                   </div>
                </div>

                <div className="col-4">
                  <div className="card3" >
                   <h4 style={{marginRight:200}} > <b>$8767</b></h4>
                   <h4  id="peru" style={{marginRight:180}} ><button type="button" id="view" style={{height:30 , width:200 , marginLeft:35   }} >View Details - </button> </h4>
                   </div>
                </div>
                <div className="col-4">
                  <div className="card3" >
                   <h4 style={{marginRight:200}} > <b>$4533</b>  </h4>
                   <h4  id="peru" style={{marginRight:80}} ><button type="button" id="view" style={{height:30 , width:200 , marginLeft:35   }} >View Details - </button> </h4>
                   </div>
                </div>
            
          </div>

                <div>
                  <h3 style={{marginTop:50}} >Why Hikings ?</h3>
                </div>

               <div className="row">
                    
                        <div className="col-4" >
                        <img src={mountain} style={{height:100 , width:100 }} />
                        <h4>110+ Mountains</h4>
                        <p>Research shows that a chance to break away  
                        from the normal rhythms of daily life <br/> reduces stress and 
                        improve the <br/> health and well-being</p>
                        </div>
                        <div className="col-4" >
                        <img src={hiking}  style={{height:100 , width:100 }}  />
                        <h4>1000+ Hikings</h4>
                        <p>Research shows that a chance to break away  
                        from the normal rhythms of daily life <br/> reduces stress and 
                        improve the <br/> health and well-being</p>
                        </div>
                        <div className="col-4" >
                        <img src={customer}  style={{height:100 , width:100 }}  />
                        <h4>2000+ Customer</h4>
                        <p>Research shows that a chance to break away  
                        from the normal rhythms of daily life <br/> reduces stress and 
                        improve the <br/> health and well-being</p>
                        </div>
                     
               </div>

                 <div className="row">
                 
                    <div className="col-12">
                    
                        <div className="bg">
                           
                          <h2 style={{marginRight:600 , color:"orange", fontFamily:"monospace"}} > Wonderful journey</h2>
                             <div className=  "col-1">
                        
                                <video  style={{height:250 , width:600 }} controls muted autoPlay loop src={fastv} ></video>
                             </div>
                        </div>
                    </div>
                 </div>
            
              <div className="row">
                <h2>Our best Blog?</h2>
                <p>All insight to the incredible experince in the world.</p>
                  <div className="col-3"  >
                  <img src={blog2}  height={200} width={220} style={{ marginLeft: 80, borderRadius:15 }} />
                  </div>

                  <div className="col-3" style={{backgroundColor:"gray", color:"white" }} >
                    <h4>Beautiful Moroco lets Travel!</h4>
                    <p style={{fontSize:15}} >The Kingdom of Moroco is a Muslim country in western North Africa. With coastlines on the Atlantic Ocean and Mediterranean Sea.</p>
                    <h5 style={{color:"orange"}} >Read More  →</h5>
                  </div>

                  <div className="col-3" >
                  <img src={blog1}  height={200} width={220} style={{ marginLeft:80, borderRadius:15 }} />
                  </div>

                  <div className="col-3"  id="blog" style={{backgroundColor:"black", color:"white"  }}   >
                    <h4>Lets have an Adventure outside Dubai</h4>
                    <p style={{fontSize:15}} > Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture </p>
                    <h5 style={{color:"orange"}} >Read More  →</h5>
                  </div>


              </div>

              <div className="row">
              
                  <div className="col-3" >
                  <img src={blog3}  height={200} width={220} style={{ marginLeft: 80, borderRadius:15 }} />
                  </div>

                  <div className="col-3" style={{backgroundColor:"black", color:"white"}} >
                    <h4>Romantic moments under sky</h4>
                    <p style={{fontSize:15}} >A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. </p>
                    <h5 style={{color:"orange"}} >Read More  →</h5>
                  </div>

                  <div className="col-3" >
                  <img src={blog4}  height={200} width={220} style={{ marginLeft:80, borderRadius:15 }} />
                  </div>

                  <div className="col-3"  id="blog"  style={{backgroundColor:"gray", color:"white" }}  >
                    <h4>Best country in East Aferica</h4>
                    <p style={{fontSize:15}} > Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture </p>
                    <h5 style={{color:"orange"}} >Read More  →</h5>
                  </div>


              </div>

              <div className="row" >
      <div className="col-12  " >
                <div className="footer" >
                      <table className="table" >
                        <tr>
                           <th>Information</th>
                           <th>Helpful Links</th>
                           <th>Contact</th>
                        </tr>
                        <tr>
                           <td>Home</td>
                           <td>Destination</td>
                           <td>+91 342786335</td>

                        </tr>
                        <tr>
                           <td>Explore</td>
                           <td>Support</td>
                           <td>travel21@gmail.com</td>
                        </tr>
                        <tr>
                           <td>Travel</td>
                           <td>Travel & Condition</td>
                        </tr>
                        <tr>
                           <td>Blog</td>
                           <td>Privacy</td>
                        </tr>
                      </table>
                </div>
      </div>
              </div>

          </form>
      </>
   )
}
export default Home;

 