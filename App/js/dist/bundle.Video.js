/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./App/Video/ClassVideo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App/Video/ClassVideo.js":
/*!*********************************!*\
  !*** ./App/Video/ClassVideo.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassVideo = void 0;
class ClassVideo {
    constructor(_render_id) {
        this.videoCrate(_render_id, this.ChangeVideo, this.GetThumbVideo);
    }
    videoCrate(_render_id, ChangeVideo, GetThumbVideo) {
        return __awaiter(this, void 0, void 0, function* () {
            let _render_Videos = document.querySelectorAll("." + _render_id);
            let count = 0;
            _render_Videos.forEach(function (element) {
                let _Div_id = element.getAttribute("data-contener-id");
                let _Contenner_Class = element.getAttribute("data-contener-class");
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
                    <div class="${_Contenner_Class}">
                        <video id="${_Video_id}" controls>
                            <source type="video/mp4">
                        </video>
                        <br>
                        <button class="${_Btn_class}" id="${_Btn_id}" style="display:inline-block;" type="button" >
                            <input type="file" accept="video/*" name="capture_video" id="${_InputFile_id}" capture class="${_InputFile_class}">
                            <i class="fa fa-video-camera" aria-hidden="true" style="float:left; color:#fff; margin:5px;"></i>
                            GRAVAR VÍDEO
                        </button>
                        <canvas id="canvas-element${count}"></canvas>
                        <img class="${_Imege_class}" id="fit-picture${count}" src="..." alt="Thumb video" style="display:none">
                    </div>`;
                document.querySelector("#" + _Div_id).innerHTML = video;
                ChangeVideo(GetThumbVideo, _Video_id, _InputFile_id, count, _Show_thumb);
                count++;
            });
        });
    }
    ChangeVideo(GetThumbVideo, _video_id, _inputFile_id, count, _show_thumb) {
        return __awaiter(this, void 0, void 0, function* () {
            let canvas = document.querySelector("#canvas-element" + count);
            let srcVideo = document.querySelector("#" + _video_id);
            let Files = document.querySelector("#" + _inputFile_id);
            var idvideo = _video_id;
            Files.addEventListener('change', function () {
                srcVideo.setAttribute('src', URL.createObjectURL(Files.files[0]));
                srcVideo.load();
                srcVideo.style.display = 'inline';
                srcVideo.style.width = "300px";
                srcVideo.style.height = "300px";
                srcVideo.addEventListener('loadedmetadata', function () {
                    canvas.width = 300;
                    canvas.height = 300;
                    console.log(canvas.width);
                    if (srcVideo.duration > 10) {
                        console.log((srcVideo.duration / 60) / 60);
                    }
                });
                setTimeout(() => {
                    srcVideo.currentTime = 2;
                    if ((Files.files[0].size / 1024) / 1024 > 40) {
                        console.log((Files.files[0].size / 1024) / 1024);
                    }
                    GetThumbVideo(canvas, idvideo, count, _show_thumb);
                }, 3000);
            });
        });
    }
    GetThumbVideo(canvas, idvideo, count, _show_thumb) {
        return __awaiter(this, void 0, void 0, function* () {
            (function geraThumb() {
                return __awaiter(this, void 0, void 0, function* () {
                    let Frame = document.querySelector("#" + idvideo);
                    var _Ctx = canvas.getContext("2d");
                    _Ctx.drawImage(Frame, 10, 10, 300, 300);
                    console.log(_show_thumb);
                    if (_show_thumb == 'yes') {
                        let img = document.querySelector("#fit-picture" + count);
                        img.src = canvas.toDataURL();
                        img.style.display = "block";
                    }
                    let a = document.createElement("a");
                    a.setAttribute('href', canvas.toDataURL());
                    a.setAttribute('download', 'thumbnail' + count + '.png');
                    a.click();
                });
            })();
        });
    }
}
exports.ClassVideo = ClassVideo;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBwL1ZpZGVvL0NsYXNzVmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQscUNBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFdBQVcsUUFBUSxRQUFRLDhCQUE4QjtBQUNsRywyRkFBMkYsY0FBYyxtQkFBbUIsaUJBQWlCO0FBQzdJLCtGQUErRixZQUFZLFlBQVk7QUFDdkg7QUFDQTtBQUNBLG9EQUFvRCxNQUFNO0FBQzFELHNDQUFzQyxhQUFhLG1CQUFtQixNQUFNO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuVmlkZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0FwcC9WaWRlby9DbGFzc1ZpZGVvLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNsYXNzVmlkZW8gPSB2b2lkIDA7XHJcbmNsYXNzIENsYXNzVmlkZW8ge1xyXG4gICAgY29uc3RydWN0b3IoX3JlbmRlcl9pZCkge1xyXG4gICAgICAgIHRoaXMudmlkZW9DcmF0ZShfcmVuZGVyX2lkLCB0aGlzLkNoYW5nZVZpZGVvLCB0aGlzLkdldFRodW1iVmlkZW8pO1xyXG4gICAgfVxyXG4gICAgdmlkZW9DcmF0ZShfcmVuZGVyX2lkLCBDaGFuZ2VWaWRlbywgR2V0VGh1bWJWaWRlbykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBfcmVuZGVyX1ZpZGVvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBfcmVuZGVyX2lkKTtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICAgICAgX3JlbmRlcl9WaWRlb3MuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9EaXZfaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29udGVuZXItaWRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX0NvbnRlbm5lcl9DbGFzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb250ZW5lci1jbGFzc1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBfVmlkZW9faWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdmlkZW8taWRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX0J0bl9pZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1idG4taWRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX0J0bl9jbGFzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1idG4tY2xhc3NcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX0lucHV0RmlsZV9pZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbnB1dC1maWxlLWlkXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF9JbnB1dEZpbGVfY2xhc3MgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5wdXQtZmlsZS1jbGFzc1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBfU2hvd190aHVtYiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbWctc2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBfSW1lZ2VfY2xhc3MgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW1nLWNsYXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pZCA9IF9EaXZfaWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmlkZW8gPSBgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICNjYW52YXMtZWxlbWVudCR7Y291bnR9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke19Db250ZW5uZXJfQ2xhc3N9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlbyBpZD1cIiR7X1ZpZGVvX2lkfVwiIGNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB0eXBlPVwidmlkZW8vbXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7X0J0bl9jbGFzc31cIiBpZD1cIiR7X0J0bl9pZH1cIiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrO1wiIHR5cGU9XCJidXR0b25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJ2aWRlby8qXCIgbmFtZT1cImNhcHR1cmVfdmlkZW9cIiBpZD1cIiR7X0lucHV0RmlsZV9pZH1cIiBjYXB0dXJlIGNsYXNzPVwiJHtfSW5wdXRGaWxlX2NsYXNzfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS12aWRlby1jYW1lcmFcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT1cImZsb2F0OmxlZnQ7IGNvbG9yOiNmZmY7IG1hcmdpbjo1cHg7XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1JBVkFSIFbDjURFT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBpZD1cImNhbnZhcy1lbGVtZW50JHtjb3VudH1cIj48L2NhbnZhcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIiR7X0ltZWdlX2NsYXNzfVwiIGlkPVwiZml0LXBpY3R1cmUke2NvdW50fVwiIHNyYz1cIi4uLlwiIGFsdD1cIlRodW1iIHZpZGVvXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIF9EaXZfaWQpLmlubmVySFRNTCA9IHZpZGVvO1xyXG4gICAgICAgICAgICAgICAgQ2hhbmdlVmlkZW8oR2V0VGh1bWJWaWRlbywgX1ZpZGVvX2lkLCBfSW5wdXRGaWxlX2lkLCBjb3VudCwgX1Nob3dfdGh1bWIpO1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBDaGFuZ2VWaWRlbyhHZXRUaHVtYlZpZGVvLCBfdmlkZW9faWQsIF9pbnB1dEZpbGVfaWQsIGNvdW50LCBfc2hvd190aHVtYikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhcy1lbGVtZW50XCIgKyBjb3VudCk7XHJcbiAgICAgICAgICAgIGxldCBzcmNWaWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBfdmlkZW9faWQpO1xyXG4gICAgICAgICAgICBsZXQgRmlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgX2lucHV0RmlsZV9pZCk7XHJcbiAgICAgICAgICAgIHZhciBpZHZpZGVvID0gX3ZpZGVvX2lkO1xyXG4gICAgICAgICAgICBGaWxlcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzcmNWaWRlby5zZXRBdHRyaWJ1dGUoJ3NyYycsIFVSTC5jcmVhdGVPYmplY3RVUkwoRmlsZXMuZmlsZXNbMF0pKTtcclxuICAgICAgICAgICAgICAgIHNyY1ZpZGVvLmxvYWQoKTtcclxuICAgICAgICAgICAgICAgIHNyY1ZpZGVvLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgICAgICAgICAgIHNyY1ZpZGVvLnN0eWxlLndpZHRoID0gXCIzMDBweFwiO1xyXG4gICAgICAgICAgICAgICAgc3JjVmlkZW8uc3R5bGUuaGVpZ2h0ID0gXCIzMDBweFwiO1xyXG4gICAgICAgICAgICAgICAgc3JjVmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FudmFzLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjVmlkZW8uZHVyYXRpb24gPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygoc3JjVmlkZW8uZHVyYXRpb24gLyA2MCkgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmNWaWRlby5jdXJyZW50VGltZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChGaWxlcy5maWxlc1swXS5zaXplIC8gMTAyNCkgLyAxMDI0ID4gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKEZpbGVzLmZpbGVzWzBdLnNpemUgLyAxMDI0KSAvIDEwMjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBHZXRUaHVtYlZpZGVvKGNhbnZhcywgaWR2aWRlbywgY291bnQsIF9zaG93X3RodW1iKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIEdldFRodW1iVmlkZW8oY2FudmFzLCBpZHZpZGVvLCBjb3VudCwgX3Nob3dfdGh1bWIpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAoZnVuY3Rpb24gZ2VyYVRodW1iKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgRnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgaWR2aWRlbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9DdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9DdHguZHJhd0ltYWdlKEZyYW1lLCAxMCwgMTAsIDMwMCwgMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfc2hvd190aHVtYik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zaG93X3RodW1iID09ICd5ZXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpdC1waWN0dXJlXCIgKyBjb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgY2FudmFzLnRvRGF0YVVSTCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBhLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAndGh1bWJuYWlsJyArIGNvdW50ICsgJy5wbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNsYXNzVmlkZW8gPSBDbGFzc1ZpZGVvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9