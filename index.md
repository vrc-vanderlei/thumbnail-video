## Bem vindo a pagina do projeto thumbnail-video

Gerador de thumbnail de vídeos utilizando typescript.

## thumbnail-video

Para utilizar, copie a pasta App para o diretório da sua aplicação.

## Parâmetros de entada de dados.

Defina um elemento com que vai renderizar o video defina a Class="content-element". Oe demais parãmetros é livre.

ex:
### <div class="content-element" 
###        data-container-id="container-video" 
###        data-container-class="container" 
###        data-video-id="file-input" 
###        data-btn-id="capture_video" 
###        data-btn-class="file-upload btn4" 
###        data-input-file-id="inputVideo" 
###        data-input-file-class="file-input"
###        data-img-show="yes" 
###        data-img-class="fit-picture">
### </div>

## Detalhes dos parâmetros

 **data-contener-id**      : Id do container onde o video deve renderizar. Obrigatório.
 **data-contener-class**   : Clase para estlizar o container. Obrigatório.
 **data-video-id**         : Id element Video . Obrigatório.
 **data-btn-id**           : Id Para element  Botton . Obrigatório.
 **data-btn-class**        : Clase para estlizar o Botton. Obrigatório.
 **data-input-file-id**    : Id Para element  input File . Obrigatório.
 **data-input-file-class** : Clase para estlizar o input File. Obrigatório.
 **data-img-show**         : yes ou no determina se deve mostrar ou não o thumb na tela. Obrigatório
 **data-img-class**        : Clase para estlizar o element img. Obrigatório.

Ao final um arquivo do thumb é baixado.
