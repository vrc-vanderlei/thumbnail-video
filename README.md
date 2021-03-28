# thumbnail-video
video thumbnail generator com typescript

Escrito em typescript e transpirado para para javascript utilizando webpack.

Exemple de como utilizar.

para ulilizar basta copiar a pasta all par o seu projeto e utilizer os carquivos conforme descrito.

Arquivos js.
 <script src="./js/dist/bundle.Video.js"></script>
 <script src="./js/dist/bundle.app.js"></script>


<div class="content-element" /*Este parâmetro não deve ser alterado*/
	   data-contener-id="container-video"  /*Defina o nome  parâmetro de Id Obs: Id's devem ser únicos*/
		 data-contener-class="container"  /*Defina o parâmetro com o nome da sua classe*/
		 data-video-id="file-input"  /*Defina o nome parâmetro de Id Obs: Id's devem ser únicos*/
		 data-btn-id="capture_video"  /*Defina o nome parâmetro de Id Obs: Id's devem ser únicos*/
		 data-btn-class="file-upload btn4"  /*Defina o parâmetro com o nome da sua classe*/
		 data-input-file-id="inputVideo"   /*Defina o nome parâmetro de Id Obs: Id's devem ser únicos*/
		 data-input-file-class="file-input"   /*Defina o parâmetro com o nome da sua classe*/
     data-img-show="yes"   /*Parâmetro “yes” = mostra o thumb na tela “no”= Não mostra*/ 
		 data-img-class="fit-picture">     /*Defina o parâmetro com o nome da sua classe*/
</div>


Após vídeo carregado um arquivo do thumb é baixando automaticamente.
