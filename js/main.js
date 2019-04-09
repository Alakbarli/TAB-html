"use strict";

[...document.querySelectorAll(".main-menu-li")].map(li=>{li.onclick=function(){
            document.querySelector(".main-menu-li.active-li").classList.remove("active-li");
            this.classList.add("active-li");
            document.querySelector(".p-content.active-content").classList.remove("active-content")
            let li_id=this.getAttribute("date-id");
            let p_content=document.querySelector(`.p-content[date-id="${li_id}"]`);
            p_content.classList.add("active-content")

        
        
    }
}
)
