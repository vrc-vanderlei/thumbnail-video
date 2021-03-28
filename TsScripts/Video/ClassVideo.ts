export class ClassVideo{

    constructor(_render_id : string){
         this.videoCrate(_render_id, this.ChangeVideo, this.GetThumbVideo);
    }

    async videoCrate(_render_id :string ,ChangeVideo : Function , GetThumbVideo : Function)  {

        let _render_Videos = document.querySelectorAll<HTMLElement>("."+_render_id);
        let count =0;
        _render_Videos.forEach(function(element){

            let _Div_id = element.getAttribute("data-contener-id");
            let _Contenner_Class =element.getAttribute("data-contener-class");
            let _Video_id = element.getAttribute("data-video-id");
            let _Btn_id = element.getAttribute("data-btn-id");
            let _Btn_class = element.getAttribute("data-btn-class");
            let _InputFile_id = element.getAttribute("data-input-file-id");
            let _InputFile_class = element.getAttribute("data-input-file-class");
            let _Show_thumb = element.getAttribute("data-img-show");
            let _Imege_class = element.getAttribute("data-img-class");
            element.id = _Div_id;

            let video = `<style>
                       #canvas-element${count} {
                            display: none;
                        }
                    </style>
                    <div class="${ _Contenner_Class }">
                        <video id="${ _Video_id }" controls>
                            <source type="video/mp4">
                        </video>
                        <br>
                        <button class="${ _Btn_class }" id="${_Btn_id }" style="display:inline-block;" type="button" >
                            <input type="file" accept="video/*" name="capture_video" id="${ _InputFile_id }" capture class="${ _InputFile_class }">
                            <i class="fa fa-video-camera" aria-hidden="true" style="float:left; color:#fff; margin:5px;"></i>
                            GRAVAR VÍDEO
                        </button>
                        <canvas id="canvas-element${count}"></canvas>
                        <img class="${_Imege_class }" id="fit-picture${count}" src="..." alt="Thumb video" style="display:none">
                    </div>`

        document.querySelector("#"+_Div_id).innerHTML = video
        ChangeVideo(GetThumbVideo, _Video_id, _InputFile_id,count,_Show_thumb);
        count++;
        });
    }

    async ChangeVideo(GetThumbVideo :  Function, _video_id: string, _inputFile_id : string, count : number, _show_thumb : string){

        let canvas : HTMLCanvasElement = document.querySelector("#canvas-element"+count);
        let srcVideo : HTMLVideoElement = document.querySelector("#"+_video_id);
        let Files : HTMLInputElement = document.querySelector("#"+_inputFile_id);
        var idvideo = _video_id;

         Files.addEventListener('change', function() {
            srcVideo.setAttribute('src', URL.createObjectURL(Files.files[0]));
            srcVideo.load();
            srcVideo.style.display = 'inline';
            srcVideo.style.width = "300px";
            srcVideo.style.height = "300px";

            srcVideo.addEventListener('loadedmetadata', function() {
                canvas.width = 300; //srcVideo.videoWidth
                canvas.height = 300;//srcVideo.videoHeight;

                console.log(canvas.width);

                if(srcVideo.duration > 10 ){
                    console.log( (srcVideo.duration/60)/60 );
                }
            });

            setTimeout(() => {
                srcVideo.currentTime = 2;
                if( (Files.files[0].size/1024)/1024 > 40  ){
                    console.log( (Files.files[0].size/1024)/1024 );
                }
                GetThumbVideo(canvas, idvideo,count, _show_thumb);
            }, 3000);
        });
    }

    async  GetThumbVideo(canvas: HTMLCanvasElement, idvideo : string, count : number,_show_thumb :string){

       (async function geraThumb(){
         let Frame : HTMLVideoElement = document.querySelector("#"+idvideo);
         var _Ctx = canvas.getContext("2d");
         _Ctx.drawImage(Frame, 10, 10, 300, 300);

         console.log(_show_thumb);
         if(_show_thumb == 'yes'){
            let img : HTMLImageElement =  document.querySelector("#fit-picture"+count);
            img.src =  canvas.toDataURL();
            img.style.display = "block";
         }

            let a : HTMLElement = document.createElement("a");
            a.setAttribute('href', canvas.toDataURL());
            a.setAttribute('download', 'thumbnail'+count+'.png');
            a.click();

        })();
    }
}