export class slider {
    constructor(track, views, time, speed ){

        this.test=()=>{console.time()};
        this.track= document.querySelector(track);
        this.views=document.querySelectorAll(views);
        this.time= time;
        this.speed= speed;
        this.next=()=>{
            let sliderSectionFirst= document.querySelectorAll(views)[0];
            
            
            this.track.style.marginLeft="-200%";
            this.track.style.transition= `all ${speed}s`;
        
            setTimeout(()=>{
                this.track.style.transition= "none";
                this.track.insertAdjacentElement("beforeend", sliderSectionFirst)
                this.track.style.marginLeft= "-100%";
                
                setTimeout(() => {
                    this.next()
                }, time);
               
                
                
            }, `${speed*1000}`)
        }
       
    }

    play=()=>{
        let lastSlide=this.views[this.views.length-1];
        this.track.insertAdjacentElement("afterbegin", lastSlide)
       this.next()
        
    }


} 