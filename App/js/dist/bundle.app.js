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
/******/ 	return __webpack_require__(__webpack_require__.s = "./App/app.js");
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
                let _Div_id = element.getAttribute("data-contenner-id");
                let _Contenner_Class = element.getAttribute("data-contenner-class");
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


/***/ }),

/***/ "./App/app.js":
/*!********************!*\
  !*** ./App/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ClassVideo_1 = __webpack_require__(/*! ./Video/ClassVideo */ "./App/Video/ClassVideo.js");
document.addEventListener('DOMContentLoaded', function () {
    new ClassVideo_1.ClassVideo("content-element");
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBwL1ZpZGVvL0NsYXNzVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRCxxQ0FBcUMsVUFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsV0FBVyxRQUFRLFFBQVEsOEJBQThCO0FBQ2xHLDJGQUEyRixjQUFjLG1CQUFtQixpQkFBaUI7QUFDN0ksK0ZBQStGLFlBQVksWUFBWTtBQUN2SDtBQUNBO0FBQ0Esb0RBQW9ELE1BQU07QUFDMUQsc0NBQXNDLGFBQWEsbUJBQW1CLE1BQU07QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0dhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQscUJBQXFCLG1CQUFPLENBQUMscURBQW9CO0FBQ2pEO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0FwcC9hcHAuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2xhc3NWaWRlbyA9IHZvaWQgMDtcclxuY2xhc3MgQ2xhc3NWaWRlbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihfcmVuZGVyX2lkKSB7XHJcbiAgICAgICAgdGhpcy52aWRlb0NyYXRlKF9yZW5kZXJfaWQsIHRoaXMuQ2hhbmdlVmlkZW8sIHRoaXMuR2V0VGh1bWJWaWRlbyk7XHJcbiAgICB9XHJcbiAgICB2aWRlb0NyYXRlKF9yZW5kZXJfaWQsIENoYW5nZVZpZGVvLCBHZXRUaHVtYlZpZGVvKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgbGV0IF9yZW5kZXJfVmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIF9yZW5kZXJfaWQpO1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICBfcmVuZGVyX1ZpZGVvcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgX0Rpdl9pZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb250ZW5uZXItaWRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX0NvbnRlbm5lcl9DbGFzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb250ZW5uZXItY2xhc3NcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX1ZpZGVvX2lkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZGVvLWlkXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF9CdG5faWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYnRuLWlkXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF9CdG5fY2xhc3MgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYnRuLWNsYXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF9JbnB1dEZpbGVfaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5wdXQtZmlsZS1pZFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBfSW5wdXRGaWxlX2NsYXNzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlucHV0LWZpbGUtY2xhc3NcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX1Nob3dfdGh1bWIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW1nLXNob3dcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX0ltZWdlX2NsYXNzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWltZy1jbGFzc1wiKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBfRGl2X2lkO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZpZGVvID0gYDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAjY2FudmFzLWVsZW1lbnQke2NvdW50fSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtfQ29udGVubmVyX0NsYXNzfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gaWQ9XCIke19WaWRlb19pZH1cIiBjb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgdHlwZT1cInZpZGVvL21wNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke19CdG5fY2xhc3N9XCIgaWQ9XCIke19CdG5faWR9XCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jaztcIiB0eXBlPVwiYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwidmlkZW8vKlwiIG5hbWU9XCJjYXB0dXJlX3ZpZGVvXCIgaWQ9XCIke19JbnB1dEZpbGVfaWR9XCIgY2FwdHVyZSBjbGFzcz1cIiR7X0lucHV0RmlsZV9jbGFzc31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdmlkZW8tY2FtZXJhXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9XCJmbG9hdDpsZWZ0OyBjb2xvcjojZmZmOyBtYXJnaW46NXB4O1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdSQVZBUiBWw41ERU9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJjYW52YXMtZWxlbWVudCR7Y291bnR9XCI+PC9jYW52YXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCIke19JbWVnZV9jbGFzc31cIiBpZD1cImZpdC1waWN0dXJlJHtjb3VudH1cIiBzcmM9XCIuLi5cIiBhbHQ9XCJUaHVtYiB2aWRlb1wiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBfRGl2X2lkKS5pbm5lckhUTUwgPSB2aWRlbztcclxuICAgICAgICAgICAgICAgIENoYW5nZVZpZGVvKEdldFRodW1iVmlkZW8sIF9WaWRlb19pZCwgX0lucHV0RmlsZV9pZCwgY291bnQsIF9TaG93X3RodW1iKTtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgQ2hhbmdlVmlkZW8oR2V0VGh1bWJWaWRlbywgX3ZpZGVvX2lkLCBfaW5wdXRGaWxlX2lkLCBjb3VudCwgX3Nob3dfdGh1bWIpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXMtZWxlbWVudFwiICsgY291bnQpO1xyXG4gICAgICAgICAgICBsZXQgc3JjVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgX3ZpZGVvX2lkKTtcclxuICAgICAgICAgICAgbGV0IEZpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIF9pbnB1dEZpbGVfaWQpO1xyXG4gICAgICAgICAgICB2YXIgaWR2aWRlbyA9IF92aWRlb19pZDtcclxuICAgICAgICAgICAgRmlsZXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc3JjVmlkZW8uc2V0QXR0cmlidXRlKCdzcmMnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKEZpbGVzLmZpbGVzWzBdKSk7XHJcbiAgICAgICAgICAgICAgICBzcmNWaWRlby5sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICBzcmNWaWRlby5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgICAgICAgICAgICBzcmNWaWRlby5zdHlsZS53aWR0aCA9IFwiMzAwcHhcIjtcclxuICAgICAgICAgICAgICAgIHNyY1ZpZGVvLnN0eWxlLmhlaWdodCA9IFwiMzAwcHhcIjtcclxuICAgICAgICAgICAgICAgIHNyY1ZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhbnZhcy53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyY1ZpZGVvLmR1cmF0aW9uID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHNyY1ZpZGVvLmR1cmF0aW9uIC8gNjApIC8gNjApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjVmlkZW8uY3VycmVudFRpbWUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoRmlsZXMuZmlsZXNbMF0uc2l6ZSAvIDEwMjQpIC8gMTAyNCA+IDQwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKChGaWxlcy5maWxlc1swXS5zaXplIC8gMTAyNCkgLyAxMDI0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgR2V0VGh1bWJWaWRlbyhjYW52YXMsIGlkdmlkZW8sIGNvdW50LCBfc2hvd190aHVtYik7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBHZXRUaHVtYlZpZGVvKGNhbnZhcywgaWR2aWRlbywgY291bnQsIF9zaG93X3RodW1iKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgKGZ1bmN0aW9uIGdlcmFUaHVtYigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IEZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGlkdmlkZW8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfQ3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBfQ3R4LmRyYXdJbWFnZShGcmFtZSwgMTAsIDEwLCAzMDAsIDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coX3Nob3dfdGh1bWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2hvd190aHVtYiA9PSAneWVzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaXQtcGljdHVyZVwiICsgY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsIGNhbnZhcy50b0RhdGFVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ3RodW1ibmFpbCcgKyBjb3VudCArICcucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5DbGFzc1ZpZGVvID0gQ2xhc3NWaWRlbztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgQ2xhc3NWaWRlb18xID0gcmVxdWlyZShcIi4vVmlkZW8vQ2xhc3NWaWRlb1wiKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5ldyBDbGFzc1ZpZGVvXzEuQ2xhc3NWaWRlbyhcImNvbnRlbnQtZWxlbWVudFwiKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=