import React , {useEffect, useRef, useState} from "react";
import "./navbar.css"
import { Outlet , Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
var i =0

function nba(){
    var icon = document.getElementsByClassName("bi")[0];
    console.log(icon)
    icon.classList.toggle('rotate');
} 
function nba1(){
    var icon = document.getElementsByClassName("bi")[1];
    icon.classList.toggle('rotate');
}
function nba2(){
    var icon = document.getElementsByClassName("bi")[2];
    icon.classList.toggle('rotate');
}
function nba3(){
    var icon = document.getElementsByClassName("bi")[3];
    icon.classList.toggle('rotate');
}
function nba4(){
    var icon = document.getElementsByClassName("bi")[4];
    icon.classList.toggle('rotate');
}
function nba5(){
    var icon = document.getElementsByClassName("bi")[5];
    icon.classList.toggle('rotate');
}
function nba6(){
    var icon = document.getElementsByClassName("bi")[6];
    icon.classList.toggle('rotate');
}
function nba7(){
    var icon = document.getElementsByClassName("bi")[7];
    icon.classList.toggle('rotate');
}
function nba8(){
    var icon = document.getElementsByClassName("bi")[8];
    icon.classList.toggle('rotate');
}
function nba9(){
    var icon = document.getElementsByClassName("bi")[9];
    icon.classList.toggle('rotate');
}
function nba10(){
    var icon = document.getElementsByClassName("bi")[10];
    icon.classList.toggle('rotate');
}
function nba11(){
    var icon = document.getElementsByClassName("bi")[11];
    icon.classList.toggle('rotate');
}
function nba12(){
    var icon = document.getElementsByClassName("bi")[12];
    icon.classList.toggle('rotate');
}
function nba13(){
    var icon = document.getElementsByClassName("bi")[13];
    icon.classList.toggle('rotate');
}
function Navbar(){
const navigate = useNavigate()
const [dropdownOpen, setDropdownOpen] = React.useState(false);
const [Stats , setstate]=React.useState(false);
function handledropdown(){
    setDropdownOpen(!dropdownOpen)
    return nba()
}
function handledropdown1(){
    setstate(!Stats)
    return nba1()
}
let useClickOutside=(handler)=>{
    let click  = useRef();

    useEffect(()=>{
        let handler1= (event) =>{
            if(!click.current.contains(event.target)){
                handler();
                }
            };
            document.addEventListener("mousedown",handler1 );
            return () => {
            document.removeEventListener("mousedown",handler1)
            }
        });
        return click
};
let click = useClickOutside(()=> {
    setDropdownOpen(false)
})
let click1 = useClickOutside(()=>{
    setstate(false)
})
let click2 = useClickOutside(()=>{
    setstate1(false)
})
let click3 = useClickOutside(()=>{
    setstate2(false)
})
let click4 = useClickOutside(()=>{
    setstate3(false)
})
let click5 = useClickOutside(()=>{
    setstate4(false)
})
let click6 = useClickOutside(()=>{
    setstate5(false)
})
let click7 = useClickOutside(()=>{
    setstate6(false)
})
let click8 = useClickOutside(()=>{
    setstate7(false)
})
let click9 = useClickOutside(()=>{
    setstate8(false)
})
let click10 = useClickOutside(()=>{
    setstate9(false)
})
let click11 = useClickOutside(()=>{
    setstate10(false)
})
let click12 = useClickOutside(()=>{
    setstate11(false)
})
let click13 = useClickOutside(()=>{
    setstate12(false)
})
let click14 = useClickOutside(()=>{
    if(document.documentElement.scrollWidth<991){
        const p = document.getElementById("navbar12")
        p.style.left = "-330px"
        }
})
let value = 0  
useEffect(()=>{
    const interval = setInterval(() => {
        if (value==0){
            if(document.documentElement.scrollWidth<991){
                    const p = document.getElementById("navbar12")
                    p.style.left = "-330px"
            }
            value+=1
            if (value==3){
                value=1
            }
        }
        
        if(document.documentElement.scrollWidth>991){
            const p = document.getElementById("navbar12")
            p.style.left = "0px"
            value = 0 
        }
    }, 200);
    return ()=> clearInterval(interval)

} ,[])




const [Stats1 , setstate1]=React.useState(false);
function handledropdown2(){
    setstate1(!Stats1)
    return nba2()
}
const [Stats2 , setstate2]=React.useState(false);
function handledropdown3(){
    setstate2(!Stats2)
    return nba3()
}
const [Stats3 , setstate3]=React.useState(false);
function handledropdown4(){
    setstate3(!Stats3)
    return nba4()
}
const [Stats4 , setstate4]=React.useState(false);
function handledropdown5(){
    setstate4(!Stats4)
    return nba5()
}
const [Stats5 , setstate5]=React.useState(false);
function handledropdown6(){
    setstate5(!Stats5)
    return nba6()
}
const [Stats6 , setstate6]=React.useState(false);
function handledropdown7(){
    setstate6(!Stats6)
    return nba7()
}
const [Stats7 , setstate7]=React.useState(false);
function handledropdown8(){
    setstate7(!Stats7)
    return nba8()
}
const [Stats8 , setstate8]=React.useState(false);
function handledropdown9(){
    setstate8(!Stats8)
    return nba9()
}
const [Stats9 , setstate9]=React.useState(false);
function handledropdown10(){
    setstate9(!Stats9)
    return nba10()
}
const [Stats10 , setstate10]=React.useState(false);
function handledropdown11(){
    setstate10(!Stats10)
    return nba11()
}

const [Stats11 , setstate11]=React.useState(false);
function handledropdown12(){
    setstate11(!Stats11)
    return nba12()
}
const [Stats12 , setstate12]=React.useState(false);
function handledropdown13(){
    setstate12(!Stats12)
    return nba13()
}
    return(
        <>
            <div ref={click14} id="navbar12" className="navbar">
                <ul  id="allofit">
                    <div id="logo1">
                    <li className="img1">
                        <Link className="link1">
                            <img id="white1" src="./image/logo_white.png"/>
                        </Link>
                    </li>
                    </div>
                    <li ref={click} id="flash" onClick={handledropdown} className="ils">
                        <Link path="/" id="dash1" className="link1">
                            <div className="dashbordbutton">
                                <img className="i12" src="./image/1.svg" alt="Image 5" />
                                <span className="phase">Dashboard</span>
                            </div>
                            <div>
                                <span className="icon3"><i id="icon1" className="bi animate-icon bi-chevron-right icon1"></i></span>
                            </div>
                        </Link>
                            {dropdownOpen && (
                                <div id="myDropdown">
                                    <ul className="uls">
                                        <li className="allli">
                                        <button className="login-btn" onClick={()=>navigate("/")}>Default</button>
                                        </li>
                                        <li className="allli">
                                        Light Sidebar
                                        </li>
                                        <li className="allli">
                                        Dark Sidebar
                                        </li>
                                    </ul>
                                </div>
                            )}
                    </li>
                    <li className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/2.svg" alt="Image 6" />
                                <span className="phase">Wallet</span>
                            </div>
                        </Link>
                    </li>
                    <li className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/3.svg" alt="Image 7" />
                                <span className="phase">Buy & Sell</span>
                            </div>
                        </Link>
                    </li>
                    <li className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/4.svg" alt="Image 8" />
                                <span className="phase">Trader Profile</span>
                            </div>
                        </Link>
                    </li>
                    <li className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/5.svg" alt="Image 9" />
                                <span className="phase">Crypto Stats</span>
                            </div>

                        </Link>
                    </li>
                    <div>
                        <li ref={click1} onClick={handledropdown1} className="ils">
                            <Link className="flex link1">
                                <div>
                                    <img className="i12" src="./image/6.svg" alt="Image 10" />
                                    <span className="phase">Transaction</span>
                                </div>   
                                <div>
                                    <span className="icon3"><i  className="bi animate-icon bi-chevron-right icon1"></i></span>
                                </div>
                            </Link>
                                {Stats && (<div>
                                    <ul className="uls">
                                        <li className="all-li">Request</li>
                                        <li className="all-li">Cancel</li>
                                        <li className="all-li">Refound</li>
                                        <li className="all-li">Payment Details</li>
                                    </ul>
                                </div>)}
                            
                        </li>
                    </div>
                    <li ref={click2} onClick={handledropdown2} className="ils">
                        <Link className=" link1">
                            <div>
                                <img className="i12" src="./image/7.svg" alt="Image 11" />
                                <span className="phase">Tickers</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats1 && (<div>
                                <ul className="uls">
                                    <il className="all-li">Ticker  Dark</il>
                                    <il className="all-li">Ticker Light</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click3}  onClick={handledropdown3} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/8.svg" alt="Image 11" />
                                <span className="phase">Apps</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                        {Stats2 && (<div>
                                <ul className="uls">
                                    <il className="all-li">Editor</il>
                                    <il className="all-li">Invoice</il>
                                    <il className="all-li">Builder</il>
                                    <il className="all-li">Calander</il>
                                    <il className="all-li">Board</il>
                                    <il className="all-li">Basic Card</il>
                                    <il className="all-li">Theme Card</il>
                                    <il className="all-li">Draggable Card</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click4}  onClick={handledropdown4} className="ils">
                        <Link className="link1 ">
                            <div>
                                <img className="i12" src="./image/9.svg" alt="Image 11" />
                                <span className="phase">Pages</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats3&&(<div>
                                <ul className="uls">
                                    <il className="all-li">Role & Permissions</il>
                                    <il className="all-li">FAQ</il>
                                    <il className="all-li"><button className="login-btn" onClick={()=>navigate("Login" )}>Login</button></il>
                                    <il className="all-li"><button className="login-btn" onClick={()=>{navigate("/Register")}}>Register</button></il>
                                    <il className="all-li">Error 404</il>
                                    <il className="all-li">Error 500</il>
                                    <il className="all-li">Forget Password</il>
                                    <il className="all-li">Gallery</il>
                                    <il className="all-li">Module Setting</il>
                                    <il className="all-li"><button className="login-btn" onClick={()=>navigate("product")}>Product</button></il>
                                    <il className="all-li"><button className="login-btn" onClick={()=>navigate("product-detail")}>Product Details</button></il>
                                    <il className="all-li"><button className="login-btn" onClick={()=>navigate("cart")}>Cart</button></il>
                                    <il className="all-li"><button className="login-btn" onClick={()=>navigate("checkout")}>Checkout</button></il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click5} onClick={handledropdown5} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/10.svg" alt="Image 11" />
                                <span className="phase">General</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats4 && (<div>
                                <ul className="uls">
                                    <il className="all-li">Minimized Aside</il>
                                    <il className="all-li">Empty</il>
                                    <il className="all-li">Fixed Footer</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click6} onClick={handledropdown6} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/11.svg" alt="Image 11" />
                                <span className="phase">Mail Box</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats5 && (<div>
                                <ui className="uls">
                                    <il className="all-li">Mail box</il>
                                    <il className="all-li">Compose</il>
                                    <il className="all-li">Important Mail</il>
                                    <il className="all-li">Mail Trash</il>
                                    <il className="all-li">Chat</il>
                                </ui>
                            </div>)}
                        
                    </li>
                    <li ref={click7} onClick={handledropdown7} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/12.svg" alt="Image 11" />
                                <span className="phase">Icons</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats6 && (<div>
                                <ul className="uls">
                                    <il className="all-li">Fontawesome Icon</il>
                                    <il className="all-li">Themefy Icon</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click8} onClick={handledropdown8} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/18.svg" alt="Image 11" />
                                <span className="phase">Ul Element</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats7 && (<div>
                                <ul className="uls">
                                <il className="all-li">Colors</il>
                                <il className="all-li">Alerts</il>
                                <il className="all-li">Buttons</il>
                                <il className="all-li">Modal</il>
                                <il className="all-li">Dropdowns</il>
                                <il className="all-li"> Badges</il>
                                <il className="all-li">Loading Indicators</il>
                                <il className="all-li">Color Plate</il>
                                <il className="all-li">Typography</il>
                                <il className="all-li">Date Picer</il>
                                <il className="all-li">Animate</il>
                                <il className="all-li">Scroll Reveal</il>
                                <il className="all-li">Tolt Animation</il>
                                <il className="all-li">Navs</il>
                                </ul>
                            </div>)}
                       
                    </li>
                    <li ref={click9} onClick={handledropdown9} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/forms.svg" alt="Image 11" />
                                <span className="phase">forms</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats8 && (<div>
                                <ul className="uls">
                                <il className="all-li">Basic Elements</il>
                                <il className="all-li">Groups</il>
                                <il className="all-li">Max Lenght</il>
                                <il className="all-li">Layouts</il>
                                </ul>
                            </div>)}
                       
                    </li>
                    <li ref={click10} onClick={handledropdown10} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/14.svg" alt="Image 11" />
                                <span className="phase">Widgets</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats9 && (<div>
                                <ul className="uls">
                                <il className="all-li">Accordions</il>
                                <il className="all-li">Scrollable</il>
                                <il className="all-li">Notofocayions</il>
                                <il className="all-li">Notofocayions</il>
                                <il className="all-li">Carouse</il>
                                <il className="all-li">Pagination</il>
                                <il className="all-li">Profile</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click11} onClick={handledropdown11} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/17.svg" alt="Image 11" />
                                <span className="phase">Table</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats10 && (<div>
                                <ul className="uls">
                                <il className="all-li">Data Table</il>
                                <il className="all-li">Bootstarp</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click12} onClick={handledropdown12} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/16.svg" alt="Image 11" />
                                <span className="phase">Charts</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats11 && (<div>
                                <ul className="uls">
                                <il className="all-li">ChartJS</il>
                                <il className="all-li">Apex Charts</il>
                                <il className="all-li">Charts Sparkline</il>
                                <il className="all-li">Am-Charts</il>
                                <il className="all-li">Nvd3Charts</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click13} onClick={handledropdown13} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/map.svg" alt="Image 11" />
                                <span className="phase">Maps</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats12 && (<div>
                                <ul className="uls">
                                <il className="all-li">Maps JS</il>
                                <il className="all-li">Vector Maps</il>
                                </ul>
                            </div>)}
                    </li>
                </ul>
            </div>
            <Outlet/>

        </>  
  );
  
};


        // <div id="navbar">
        //     <Link onClick={navbar1}>next</Link>
        //     <ul className="ul1">
        //         <li className="menu1">
        //         <Link className="dropbtn" to='/'>
        //             <img className="img1" src="./image/mini_logo.png"/>
        //         </Link> 
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/1.svg"/>
        //             </Link>
        //             <div class="dropdown-content">
        //                 <a href="#">Link 1</a>
        //                 <a href="#">Link 2</a>
        //                 <a href="#">Link 3</a>
        //             </div>
        //             <p className="p1"></p>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/2.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/3.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/4.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/5.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/6.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/7.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/8.svg"/>
        //             </Link>
        //         </li>
        //     </ul>

        // </div>
export default Navbar;