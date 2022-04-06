(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrPolicyModule-digitals-signature-digitals-signature-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/digitals-signature/digitals-signature.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/digitals-signature/digitals-signature.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{signatureData?.data?.page_title}}</ion-title>\n    <ion-buttons slot=\"start\" >\n      <ion-back-button tappable (click)=\"hardWareBackButton()\"></ion-back-button>\n      <!-- <ion-button color=\"dark\" tappable (click)=\"btnClick()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button> -->\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\">\n    <br>\n    <ion-row>\n      <ion-col [size]=\"12\"><p class=\"noMargin signTitleText\">{{signatureData?.data?.title}}</p></ion-col>\n    </ion-row>\n\n    <br>    \n    <ion-row>\n      <ion-col [size]=\"12\">\n        <div class=\"signatureDiv\">\n          <canvas #signaturePad width=\"auto\" tappable (click)=\"getSign($event)\" height=\"300px\" style=\"touch-action:none;\"></canvas>\n          <!-- <div class=\"iconDiv\"><img [src]=\"signatureData?.data?.icon_img\"></div> -->\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <br>\n    <ion-row>\n      <ion-col [size]=\"12\"><p class=\"noMargin signTitleText\">{{signatureData?.data?.sub_title}}</p></ion-col>\n    </ion-row>\n\n    <br>\n    <ion-row>\n      <ion-col [size]=\"6\" class=\"ion-text-center\">\n        <ion-button class=\"dynamicButtonOutline\" tappable (click)=\"takeAction('clear')\">{{signatureData?.data?.clear_button}}</ion-button>\n      </ion-col>\n      <ion-col [size]=\"6\" class=\"ion-text-center\">\n        <ion-button class=\"dynamicButtonColor\" tappable (click)=\"takeAction('save')\">{{signatureData?.data?.submit_button}}</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/signature_pad/dist/signature_pad.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/signature_pad/dist/signature_pad.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */

function Point(x, y, time) {
  this.x = x;
  this.y = y;
  this.time = time || new Date().getTime();
}

Point.prototype.velocityFrom = function (start) {
  return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
};

Point.prototype.distanceTo = function (start) {
  return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
};

Point.prototype.equals = function (other) {
  return this.x === other.x && this.y === other.y && this.time === other.time;
};

function Bezier(startPoint, control1, control2, endPoint) {
  this.startPoint = startPoint;
  this.control1 = control1;
  this.control2 = control2;
  this.endPoint = endPoint;
}

// Returns approximated length.
Bezier.prototype.length = function () {
  var steps = 10;
  var length = 0;
  var px = void 0;
  var py = void 0;

  for (var i = 0; i <= steps; i += 1) {
    var t = i / steps;
    var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
    var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (i > 0) {
      var xdiff = cx - px;
      var ydiff = cy - py;
      length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    }
    px = cx;
    py = cy;
  }

  return length;
};

/* eslint-disable no-multi-spaces, space-in-parens */
Bezier.prototype._point = function (t, start, c1, c2, end) {
  return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
};

/* eslint-disable */

// http://stackoverflow.com/a/27078401/815507
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function later() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

function SignaturePad(canvas, options) {
  var self = this;
  var opts = options || {};

  this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
  this.minWidth = opts.minWidth || 0.5;
  this.maxWidth = opts.maxWidth || 2.5;
  this.throttle = 'throttle' in opts ? opts.throttle : 16; // in miliseconds
  this.minDistance = 'minDistance' in opts ? opts.minDistance : 5;

  if (this.throttle) {
    this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
  } else {
    this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
  }

  this.dotSize = opts.dotSize || function () {
    return (this.minWidth + this.maxWidth) / 2;
  };
  this.penColor = opts.penColor || 'black';
  this.backgroundColor = opts.backgroundColor || 'rgba(0,0,0,0)';
  this.onBegin = opts.onBegin;
  this.onEnd = opts.onEnd;

  this._canvas = canvas;
  this._ctx = canvas.getContext('2d');
  this.clear();

  // We need add these inline so they are available to unbind while still having
  // access to 'self' we could use _.bind but it's not worth adding a dependency.
  this._handleMouseDown = function (event) {
    if (event.which === 1) {
      self._mouseButtonDown = true;
      self._strokeBegin(event);
    }
  };

  this._handleMouseMove = function (event) {
    if (self._mouseButtonDown) {
      self._strokeMoveUpdate(event);
    }
  };

  this._handleMouseUp = function (event) {
    if (event.which === 1 && self._mouseButtonDown) {
      self._mouseButtonDown = false;
      self._strokeEnd(event);
    }
  };

  this._handleTouchStart = function (event) {
    if (event.targetTouches.length === 1) {
      var touch = event.changedTouches[0];
      self._strokeBegin(touch);
    }
  };

  this._handleTouchMove = function (event) {
    // Prevent scrolling.
    event.preventDefault();

    var touch = event.targetTouches[0];
    self._strokeMoveUpdate(touch);
  };

  this._handleTouchEnd = function (event) {
    var wasCanvasTouched = event.target === self._canvas;
    if (wasCanvasTouched) {
      event.preventDefault();
      self._strokeEnd(event);
    }
  };

  // Enable mouse and touch event handlers
  this.on();
}

// Public methods
SignaturePad.prototype.clear = function () {
  var ctx = this._ctx;
  var canvas = this._canvas;

  ctx.fillStyle = this.backgroundColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  this._data = [];
  this._reset();
  this._isEmpty = true;
};

SignaturePad.prototype.fromDataURL = function (dataUrl) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var image = new Image();
  var ratio = options.ratio || window.devicePixelRatio || 1;
  var width = options.width || this._canvas.width / ratio;
  var height = options.height || this._canvas.height / ratio;

  this._reset();
  image.src = dataUrl;
  image.onload = function () {
    _this._ctx.drawImage(image, 0, 0, width, height);
  };
  this._isEmpty = false;
};

SignaturePad.prototype.toDataURL = function (type) {
  var _canvas;

  switch (type) {
    case 'image/svg+xml':
      return this._toSVG();
    default:
      for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        options[_key - 1] = arguments[_key];
      }

      return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
  }
};

SignaturePad.prototype.on = function () {
  this._handleMouseEvents();
  this._handleTouchEvents();
};

SignaturePad.prototype.off = function () {
  this._canvas.removeEventListener('mousedown', this._handleMouseDown);
  this._canvas.removeEventListener('mousemove', this._handleMouseMove);
  document.removeEventListener('mouseup', this._handleMouseUp);

  this._canvas.removeEventListener('touchstart', this._handleTouchStart);
  this._canvas.removeEventListener('touchmove', this._handleTouchMove);
  this._canvas.removeEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype.isEmpty = function () {
  return this._isEmpty;
};

// Private methods
SignaturePad.prototype._strokeBegin = function (event) {
  this._data.push([]);
  this._reset();
  this._strokeUpdate(event);

  if (typeof this.onBegin === 'function') {
    this.onBegin(event);
  }
};

SignaturePad.prototype._strokeUpdate = function (event) {
  var x = event.clientX;
  var y = event.clientY;

  var point = this._createPoint(x, y);
  var lastPointGroup = this._data[this._data.length - 1];
  var lastPoint = lastPointGroup && lastPointGroup[lastPointGroup.length - 1];
  var isLastPointTooClose = lastPoint && point.distanceTo(lastPoint) < this.minDistance;

  // Skip this point if it's too close to the previous one
  if (!(lastPoint && isLastPointTooClose)) {
    var _addPoint = this._addPoint(point),
        curve = _addPoint.curve,
        widths = _addPoint.widths;

    if (curve && widths) {
      this._drawCurve(curve, widths.start, widths.end);
    }

    this._data[this._data.length - 1].push({
      x: point.x,
      y: point.y,
      time: point.time,
      color: this.penColor
    });
  }
};

SignaturePad.prototype._strokeEnd = function (event) {
  var canDrawCurve = this.points.length > 2;
  var point = this.points[0]; // Point instance

  if (!canDrawCurve && point) {
    this._drawDot(point);
  }

  if (point) {
    var lastPointGroup = this._data[this._data.length - 1];
    var lastPoint = lastPointGroup[lastPointGroup.length - 1]; // plain object

    // When drawing a dot, there's only one point in a group, so without this check
    // such group would end up with exactly the same 2 points.
    if (!point.equals(lastPoint)) {
      lastPointGroup.push({
        x: point.x,
        y: point.y,
        time: point.time,
        color: this.penColor
      });
    }
  }

  if (typeof this.onEnd === 'function') {
    this.onEnd(event);
  }
};

SignaturePad.prototype._handleMouseEvents = function () {
  this._mouseButtonDown = false;

  this._canvas.addEventListener('mousedown', this._handleMouseDown);
  this._canvas.addEventListener('mousemove', this._handleMouseMove);
  document.addEventListener('mouseup', this._handleMouseUp);
};

SignaturePad.prototype._handleTouchEvents = function () {
  // Pass touch events to canvas element on mobile IE11 and Edge.
  this._canvas.style.msTouchAction = 'none';
  this._canvas.style.touchAction = 'none';

  this._canvas.addEventListener('touchstart', this._handleTouchStart);
  this._canvas.addEventListener('touchmove', this._handleTouchMove);
  this._canvas.addEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype._reset = function () {
  this.points = [];
  this._lastVelocity = 0;
  this._lastWidth = (this.minWidth + this.maxWidth) / 2;
  this._ctx.fillStyle = this.penColor;
};

SignaturePad.prototype._createPoint = function (x, y, time) {
  var rect = this._canvas.getBoundingClientRect();

  return new Point(x - rect.left, y - rect.top, time || new Date().getTime());
};

SignaturePad.prototype._addPoint = function (point) {
  var points = this.points;
  var tmp = void 0;

  points.push(point);

  if (points.length > 2) {
    // To reduce the initial lag make it work with 3 points
    // by copying the first point to the beginning.
    if (points.length === 3) points.unshift(points[0]);

    tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
    var c2 = tmp.c2;
    tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
    var c3 = tmp.c1;
    var curve = new Bezier(points[1], c2, c3, points[2]);
    var widths = this._calculateCurveWidths(curve);

    // Remove the first element from the list,
    // so that we always have no more than 4 points in points array.
    points.shift();

    return { curve: curve, widths: widths };
  }

  return {};
};

SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
  var dx1 = s1.x - s2.x;
  var dy1 = s1.y - s2.y;
  var dx2 = s2.x - s3.x;
  var dy2 = s2.y - s3.y;

  var m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 };
  var m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 };

  var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

  var dxm = m1.x - m2.x;
  var dym = m1.y - m2.y;

  var k = l2 / (l1 + l2);
  var cm = { x: m2.x + dxm * k, y: m2.y + dym * k };

  var tx = s2.x - cm.x;
  var ty = s2.y - cm.y;

  return {
    c1: new Point(m1.x + tx, m1.y + ty),
    c2: new Point(m2.x + tx, m2.y + ty)
  };
};

SignaturePad.prototype._calculateCurveWidths = function (curve) {
  var startPoint = curve.startPoint;
  var endPoint = curve.endPoint;
  var widths = { start: null, end: null };

  var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;

  var newWidth = this._strokeWidth(velocity);

  widths.start = this._lastWidth;
  widths.end = newWidth;

  this._lastVelocity = velocity;
  this._lastWidth = newWidth;

  return widths;
};

SignaturePad.prototype._strokeWidth = function (velocity) {
  return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
};

SignaturePad.prototype._drawPoint = function (x, y, size) {
  var ctx = this._ctx;

  ctx.moveTo(x, y);
  ctx.arc(x, y, size, 0, 2 * Math.PI, false);
  this._isEmpty = false;
};

SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
  var ctx = this._ctx;
  var widthDelta = endWidth - startWidth;
  var drawSteps = Math.floor(curve.length());

  ctx.beginPath();

  for (var i = 0; i < drawSteps; i += 1) {
    // Calculate the Bezier (x, y) coordinate for this step.
    var t = i / drawSteps;
    var tt = t * t;
    var ttt = tt * t;
    var u = 1 - t;
    var uu = u * u;
    var uuu = uu * u;

    var x = uuu * curve.startPoint.x;
    x += 3 * uu * t * curve.control1.x;
    x += 3 * u * tt * curve.control2.x;
    x += ttt * curve.endPoint.x;

    var y = uuu * curve.startPoint.y;
    y += 3 * uu * t * curve.control1.y;
    y += 3 * u * tt * curve.control2.y;
    y += ttt * curve.endPoint.y;

    var width = startWidth + ttt * widthDelta;
    this._drawPoint(x, y, width);
  }

  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._drawDot = function (point) {
  var ctx = this._ctx;
  var width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;

  ctx.beginPath();
  this._drawPoint(point.x, point.y, width);
  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._fromData = function (pointGroups, drawCurve, drawDot) {
  for (var i = 0; i < pointGroups.length; i += 1) {
    var group = pointGroups[i];

    if (group.length > 1) {
      for (var j = 0; j < group.length; j += 1) {
        var rawPoint = group[j];
        var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);
        var color = rawPoint.color;

        if (j === 0) {
          // First point in a group. Nothing to draw yet.

          // All points in the group have the same color, so it's enough to set
          // penColor just at the beginning.
          this.penColor = color;
          this._reset();

          this._addPoint(point);
        } else if (j !== group.length - 1) {
          // Middle point in a group.
          var _addPoint2 = this._addPoint(point),
              curve = _addPoint2.curve,
              widths = _addPoint2.widths;

          if (curve && widths) {
            drawCurve(curve, widths, color);
          }
        } else {
          // Last point in a group. Do nothing.
        }
      }
    } else {
      this._reset();
      var _rawPoint = group[0];
      drawDot(_rawPoint);
    }
  }
};

SignaturePad.prototype._toSVG = function () {
  var _this2 = this;

  var pointGroups = this._data;
  var canvas = this._canvas;
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  var minX = 0;
  var minY = 0;
  var maxX = canvas.width / ratio;
  var maxY = canvas.height / ratio;
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.setAttributeNS(null, 'width', canvas.width);
  svg.setAttributeNS(null, 'height', canvas.height);

  this._fromData(pointGroups, function (curve, widths, color) {
    var path = document.createElement('path');

    // Need to check curve for NaN values, these pop up when drawing
    // lines on the canvas that are not continuous. E.g. Sharp corners
    // or stopping mid-stroke and than continuing without lifting mouse.
    if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
      var attr = 'M ' + curve.startPoint.x.toFixed(3) + ',' + curve.startPoint.y.toFixed(3) + ' ' + ('C ' + curve.control1.x.toFixed(3) + ',' + curve.control1.y.toFixed(3) + ' ') + (curve.control2.x.toFixed(3) + ',' + curve.control2.y.toFixed(3) + ' ') + (curve.endPoint.x.toFixed(3) + ',' + curve.endPoint.y.toFixed(3));

      path.setAttribute('d', attr);
      path.setAttribute('stroke-width', (widths.end * 2.25).toFixed(3));
      path.setAttribute('stroke', color);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');

      svg.appendChild(path);
    }
  }, function (rawPoint) {
    var circle = document.createElement('circle');
    var dotSize = typeof _this2.dotSize === 'function' ? _this2.dotSize() : _this2.dotSize;
    circle.setAttribute('r', dotSize);
    circle.setAttribute('cx', rawPoint.x);
    circle.setAttribute('cy', rawPoint.y);
    circle.setAttribute('fill', rawPoint.color);

    svg.appendChild(circle);
  });

  var prefix = 'data:image/svg+xml;base64,';
  var header = '<svg' + ' xmlns="http://www.w3.org/2000/svg"' + ' xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + ' ' + minY + ' ' + maxX + ' ' + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + '>';
  var body = svg.innerHTML;

  // IE hack for missing innerHTML property on SVGElement
  if (body === undefined) {
    var dummy = document.createElement('dummy');
    var nodes = svg.childNodes;
    dummy.innerHTML = '';

    for (var i = 0; i < nodes.length; i += 1) {
      dummy.appendChild(nodes[i].cloneNode(true));
    }

    body = dummy.innerHTML;
  }

  var footer = '</svg>';
  var data = header + body + footer;

  return prefix + btoa(data);
};

SignaturePad.prototype.fromData = function (pointGroups) {
  var _this3 = this;

  this.clear();

  this._fromData(pointGroups, function (curve, widths) {
    return _this3._drawCurve(curve, widths.start, widths.end);
  }, function (rawPoint) {
    return _this3._drawDot(rawPoint);
  });

  this._data = pointGroups;
};

SignaturePad.prototype.toData = function () {
  return this._data;
};

/* harmony default export */ __webpack_exports__["default"] = (SignaturePad);


/***/ }),

/***/ "./src/app/hrPolicyModule/digitals-signature/digitals-signature-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/hrPolicyModule/digitals-signature/digitals-signature-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: DigitalsSignaturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalsSignaturePageRoutingModule", function() { return DigitalsSignaturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _digitals_signature_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digitals-signature.page */ "./src/app/hrPolicyModule/digitals-signature/digitals-signature.page.ts");




const routes = [
    {
        path: '',
        component: _digitals_signature_page__WEBPACK_IMPORTED_MODULE_3__["DigitalsSignaturePage"]
    }
];
let DigitalsSignaturePageRoutingModule = class DigitalsSignaturePageRoutingModule {
};
DigitalsSignaturePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DigitalsSignaturePageRoutingModule);



/***/ }),

/***/ "./src/app/hrPolicyModule/digitals-signature/digitals-signature.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/hrPolicyModule/digitals-signature/digitals-signature.module.ts ***!
  \********************************************************************************/
/*! exports provided: DigitalsSignaturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalsSignaturePageModule", function() { return DigitalsSignaturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _digitals_signature_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./digitals-signature-routing.module */ "./src/app/hrPolicyModule/digitals-signature/digitals-signature-routing.module.ts");
/* harmony import */ var _digitals_signature_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./digitals-signature.page */ "./src/app/hrPolicyModule/digitals-signature/digitals-signature.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let DigitalsSignaturePageModule = class DigitalsSignaturePageModule {
};
DigitalsSignaturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _digitals_signature_routing_module__WEBPACK_IMPORTED_MODULE_5__["DigitalsSignaturePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_digitals_signature_page__WEBPACK_IMPORTED_MODULE_6__["DigitalsSignaturePage"]]
    })
], DigitalsSignaturePageModule);



/***/ }),

/***/ "./src/app/hrPolicyModule/digitals-signature/digitals-signature.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/hrPolicyModule/digitals-signature/digitals-signature.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signTitleText {\n  font-size: 14px;\n  color: #505050;\n  font-weight: bold;\n  margin: 10px 0px;\n}\n\n.signatureDiv {\n  border: 2px solid var(--headerColor);\n  width: 100%;\n  height: 300px;\n  border-radius: 10px;\n  position: relative;\n}\n\n.signatureDiv .iconDiv {\n  position: absolute;\n  width: 30px;\n  bottom: -20px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.signatureDiv canvas {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHJQb2xpY3lNb2R1bGUvZGlnaXRhbHMtc2lnbmF0dXJlL2RpZ2l0YWxzLXNpZ25hdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZSxlQUFBO0VBQWUsY0FBQTtFQUFjLGlCQUFBO0VBQWlCLGdCQUFBO0FBSzdEOztBQUpBO0VBQWMsb0NBQUE7RUFBb0MsV0FBQTtFQUFXLGFBQUE7RUFBYSxtQkFBQTtFQUFtQixrQkFBQTtBQVk3Rjs7QUFYSTtFQUFTLGtCQUFBO0VBQWtCLFdBQUE7RUFBVyxhQUFBO0VBQWEsT0FBQTtFQUFPLFFBQUE7RUFBUSxZQUFBO0FBbUJ0RTs7QUFsQkk7RUFBTyxXQUFBO0VBQVcsWUFBQTtBQXNCdEIiLCJmaWxlIjoic3JjL2FwcC9oclBvbGljeU1vZHVsZS9kaWdpdGFscy1zaWduYXR1cmUvZGlnaXRhbHMtc2lnbmF0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduVGl0bGVUZXh0e2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiM1MDUwNTA7Zm9udC13ZWlnaHQ6Ym9sZDttYXJnaW46MTBweCAwcHg7fVxuLnNpZ25hdHVyZURpdntib3JkZXI6MnB4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTt3aWR0aDoxMDAlO2hlaWdodDozMDBweDtib3JkZXItcmFkaXVzOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7XG4gICAgLmljb25EaXZ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MzBweDtib3R0b206LTIwcHg7bGVmdDowO3JpZ2h0OjA7bWFyZ2luOmF1dG87fVxuICAgIGNhbnZhc3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO31cbn0iXX0= */");

/***/ }),

/***/ "./src/app/hrPolicyModule/digitals-signature/digitals-signature.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/hrPolicyModule/digitals-signature/digitals-signature.page.ts ***!
  \******************************************************************************/
/*! exports provided: DigitalsSignaturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalsSignaturePage", function() { return DigitalsSignaturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.mjs");









let DigitalsSignaturePage = class DigitalsSignaturePage {
    constructor(apiservices, router, zone, menuCtrl, sendData, navCtrl, alertController, eventService) {
        this.apiservices = apiservices;
        this.router = router;
        this.zone = zone;
        this.menuCtrl = menuCtrl;
        this.sendData = sendData;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.eventService = eventService;
        this.hrPolicyData = this.sendData.alldata;
        console.log("HR policy list data==", this.hrPolicyData);
        this.signatureData = this.sendData.myParam;
        console.log("HR policy detail signature data==", this.signatureData);
        this.hrPolicyDetailAllData = this.sendData.hrPolicyDetailAllData;
        console.log("hr Policy Detail Array Redirection==", this.hrPolicyDetailAllData);
        this.commingData = this.sendData.commingPageName;
        console.log("comming from which page==", this.commingData);
    }
    hardWareBackButton() {
        this.zone.run(() => {
            // this.navCtrl.navigateBack("/hr-policy-list");
            if (this.commingData.commingFrom == "hrPolicyList") {
                this.apiservices.hrPolicyCount = 0;
                this.navCtrl.navigateBack("/hr-policy-detail");
            }
            else {
                this.apiservices.hrPolicyCount = 0;
                this.router.navigate(["/tabs/tab1"]);
            }
        });
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_8__["default"](this.signaturePadElement.nativeElement);
        console.log("signature init==", this.signaturePad);
    }
    takeAction(value) {
        this.zone.run(() => {
            if (value == "save") {
                this.hrPolicyData.status_text = "checkmark-outline";
                if (this.signaturePad.isEmpty()) {
                    this.confirmation();
                }
                else {
                    const dataURL = this.signaturePad.toDataURL();
                    console.log("signature dataURL png==", dataURL);
                    // this.download(dataURL, 'signature.png');
                    this.submitSignature(dataURL);
                }
            }
            else {
                console.log("signature clear1==");
                this.signaturePad.clear();
            }
        });
    }
    confirmation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // title: 'Confirm purchase',
                message: this.signatureData.data.error_empty,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            console.log("submit survey exam, No==");
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    submitSignature(signatureString) {
        this.zone.run(() => {
            console.log("noticeBoard Detail api call function");
            this.apiservices.showLoader();
            let apikey = {
                "post_id": this.hrPolicyData.hrpolicy_id,
                "signature": signatureString
            };
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].hrPolicySubmitSignature, apikey).subscribe((result) => {
                console.log("noticeBoard Detail api result==", result);
                this.apiservices.hideLoader();
                if (result.status == 1 || result.status == '1') {
                    this.apiservices.hrPolicyCount = this.apiservices.hrPolicyCount + 1;
                    console.log("hr policy otp data0==", this.hrPolicyDetailAllData.length);
                    console.log("hr policy otp data1==", this.apiservices.hrPolicyCount);
                    if (this.hrPolicyDetailAllData.length > 0) {
                        if (this.apiservices.hrPolicyCount == this.hrPolicyDetailAllData.length) {
                            this.hrPolicyData.action = "0";
                            var data = {
                                "commingFrom": "reloadHomeApi",
                                "reloadHomePage": true
                            };
                            this.eventService.publishSomeData({ data });
                            if (this.commingData.commingFrom == "hrPolicyList") {
                                this.apiservices.hrPolicyCount = 0;
                                this.router.navigate(["/hr-policy-list"]);
                            }
                            else {
                                this.apiservices.hrPolicyCount = 0;
                                this.router.navigate(["/tabs/tab1"]);
                            }
                        }
                        else {
                            this.sendData.alldata = this.hrPolicyData;
                            this.sendData.myParam = this.hrPolicyDetailAllData[this.apiservices.hrPolicyCount];
                            this.sendData.hrPolicyDetailAllData = this.hrPolicyDetailAllData;
                            this.sendData.commingPageName = this.commingData;
                            this.router.navigate([this.hrPolicyDetailAllData[this.apiservices.hrPolicyCount].data.redirect_page]);
                        }
                    }
                }
                else {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiservices.hideLoader();
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
};
DigitalsSignaturePage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] }
];
DigitalsSignaturePage.propDecorators = {
    signaturePadElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['signaturePad', { static: true },] }]
};
DigitalsSignaturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-digitals-signature',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./digitals-signature.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/digitals-signature/digitals-signature.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./digitals-signature.page.scss */ "./src/app/hrPolicyModule/digitals-signature/digitals-signature.page.scss")).default]
    })
], DigitalsSignaturePage);



/***/ })

}]);
//# sourceMappingURL=hrPolicyModule-digitals-signature-digitals-signature-module-es2015.js.map