import React from 'react'
const About = () => {
    return ( 
    <>
        <div className = " container emp-profile">
        <form method = "">
        <div className = "row">
        <div className = "col-md-4">
        <img > </img>
         </div>
          <div className = "col-md-6" >
        <div className = "profile-head" >
        < h5 > JANONI </h5>
         < h6 > striker </h6>
          <p className = "profile-rating mt-3 mb-5" > RANLINGS: < span > 1 / 10 </span> </p>
          <ul class = "nav nav tabs"role = "tablist" >
        <li className = "nav-item">
        <a class = "nav-link active"id = "home-tab"  data-toggle = "tab" href = "#home"role = "tab" > About < /a> <     /li> 
        <li className = "nav-item">
        <a class = "nav-link active" id = "profile-tab" data-toggle = "tab" href = "#profile"   role = "tab" > Timeline < /a>


        </li>

        </ul> 

        </div>
    
         </div>
         <div className="col-md-2">
             <input type ="text" className ="profile-edit btn" name="btnAssMore" value="Edit profile"/>
             <div className ="row">
                 {/*left side url */}
                 <div className ="col-md-4">
                     <div className="profile-work">
                         <p>WORK LINK</p>
                     
               <a href ="https://www.youtube.com/channel/UCb3DmrstK1vqTM5umhPILJw/featured" target="_janoni">Youtube</a><br />      
               <a href="" target="_janoni">Instagrram</a><br /> 
               <a href ="" target="_janoni">Instagrram</a><br /> 
               <a href ="" target="_janoni">Instagrram</a><br /> 
               <a href ="https://www.youtube.com/channel/UCb3DmrstK1vqTM5umhPILJw/featured" target="_janoni"></a> Web devlopers<br /> 
               <a href ="https://www.youtube.com/channel/UCb3DmrstK1vqTM5umhPILJw/featured" target="_janoni">Software Engineers</a><br /> 
               <a href ="https://www.youtube.com/channel/UCb3DmrstK1vqTM5umhPILJw/featured" target="_janoni">Youtube</a><br /> 

                    
                 </div>
             </div>
             {/* right side data toggle */}
             <div className="col-md-8 pl-5 about-info">
                 <div className ="tab-content profile-tab" id ="ourTabeContent">
   <div className="tab-pane fade show active" id="home" role ="tabpanel" aria-labelledby="home-tab">
<div className="row mt-3">
    <div className="col-md-9">
        <label> User ID</label>
    </div>
    <div className="col-md-6">
        <p>35677656436787r6</p>
    </div>

</div>
   </div>
   <div className="row">
    <div className="col-md-9">
        <label> Name</label>
    </div>
    <div className="col-md-6">
        <p>ramjan</p>
    </div>

</div>
<div className="row mt-3 ">
    <div className="col-md-9">
        <label> Name</label>
    </div>
    <div className="col-md-6">
        <p>Anamika</p>
    </div>

</div>
<div className="row mt-3">
    <div className="col-md-9">
        <label> Name</label>
    </div>
    <div className="col-md-6">
        <p>Nazmin</p>
    </div>

</div>
<div className="row mt-3">
    <div className="col-md-9">
        <label>profession</label>
    </div>
    <div className="col-md-6">
        <p>Web devlopers</p>
    </div>

</div>
<div className="row mt-3">
    <div className="col-md-9">
        <label>phone </label>
    </div>
    <div className="col-md-6">
        <p>6001383217/557687567687/3657565</p>
    </div>

</div>



                 </div>
             </div>
          </div>
           </form>
            </div>
             </>
    )
}