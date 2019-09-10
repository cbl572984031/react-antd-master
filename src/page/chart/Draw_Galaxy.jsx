import React, { Component } from 'react';
import dat from './dat.gui.min.js'

class Draw extends Component {
    state = {
        AnimationId: null
    }
    componentDidMount() {
        this.init()
    }

    init = () => {
        let drawEle = document.getElementById('draw')
        let w = drawEle.offsetWidth;
        let h = drawEle.offsetHeight;

        window.onresize = function () {
            w = ctx.canvas.width = drawEle.offsetWidth;
            h = ctx.canvas.height = drawEle.offsetHeight;
            console.log(1)
        };

        let canvas = document.createElement('canvas');
        drawEle.appendChild(canvas);

        canvas.width = w;
        canvas.height = h;

        let ctx = canvas.getContext('2d');

        let mix_Red = 80;
        let mix_Green = 140;
        let mix_Blue = 220;
        let opacity = .15;
        let smoke_Size = 5;
        let select = {
            Compositing: 'lighter'
        };

        /* eslint-disable */
        let controls = new function () {
            this.mix_Red = mix_Red;
            this.mix_Green = mix_Green;
            this.mix_Blue = mix_Blue;
            this.opacity = opacity;
            this.smoke_Size = smoke_Size;

            this.redraw = function () {
                mix_Red = controls.mix_Red;
                mix_Green = controls.mix_Green;
                mix_Blue = controls.mix_Blue;
                opacity = controls.opacity;
                smoke_Size = controls.smoke_Size;
                ctx.globalCompositeOperation = Object.values(select)[0];
            }
        }

        let obj = {
            CLEAR_CANVAS: function () {
                ctx.clearRect(0, 0, w, h);
            }
        };
        let gui = new dat.GUI({
            resizable: false
        });
        gui.add(controls, "mix_Red", 0, 255).step(1).onChange(controls.redraw);
        gui.add(controls, "mix_Green", 0, 255).step(1).onChange(controls.redraw);
        gui.add(controls, "mix_Blue", 0, 255).step(1).onChange(controls.redraw);
        gui.add(controls, "opacity", 0, 1).onChange(controls.redraw);
        gui.add(controls, "smoke_Size", 1, 20).onChange(controls.redraw);
        gui.add(select, 'Compositing', {
            /*Source_Over: "source-over",
              Source_In: "source-in",
              Source_Out: "source-out",
              Source_Atop: "source-atop",
              Destination_Over: "destination-over",
              Destination_In: "destination-in",
              Destination_Out: "destination-out",
              Destination_Atop: "destination-atop",
              Copy: "copy",
              XOR: "xor",*/
            Screen: "screen",
            Overlay: "overlay",
            Color_Dodge: "color-dodge",
            Color_Burn: "color-burn",
            Hard_Light: "hard-light",
            Soft_Light: "soft-light",
            Difference: "difference",
            Exclusion: "exclusion",
            Hue: "hue",
            Saturation: "saturation",
            Color: "color",
            Luminosity: "luminosity",
            Ligher: 'lighter',
            Darker: 'darker',
            Multiply: 'multiply'
        }).onChange(controls.redraw);
        gui.add(obj, 'CLEAR_CANVAS');


        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, w, h);

        ctx.globalCompositeOperation = 'lighter';

        let randomNumbers = function randomNumbers(length) {
            return Array.from(new Array(length), function () {
                return Math.random();
            });
        };
        let TAU = Math.PI * 2;

        let createSmokeParticle = function createSmokeParticle() {

            let canvas = document.createElement('canvas');

            let w = 100;
            let h = 100;
            let cx = w * 0.5;
            let cy = h * 0.5;

            canvas.width = w;
            canvas.height = h;
            let ctx = canvas.getContext('2d');
            canvas.ctx = ctx;

            let xRand = -5 + Math.random() * 10;
            let yRand = -5 + Math.random() * 10;
            let xRand2 = 10 + Math.random() * (cx / 2);
            let yRand2 = 10 + Math.random() * (cy / 2);

            let color = {
                r: mix_Red,
                g: mix_Green,
                b: mix_Blue
                // r: Math.round(mix_Red + Math.random() * 100),
                // g: Math.round(mix_Green + Math.random() * 100),
                // b: Math.round(mix_Blue + Math.random() * 100)
            };


            ctx.fillStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + opacity + ')';

            Array.from(new Array(200), function () {
                return randomNumbers(3);
            }).forEach(function (p, i, arr) {
                let length = arr.length;

                let x = Math.cos(TAU / xRand / length * i) * p[2] * xRand2 + cx;
                let y = Math.sin(TAU / yRand / length * i) * p[2] * yRand2 + cy;


                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.arc(x, y, p[2] * 4, 0, TAU);
                ctx.fill();
            });

            return canvas;
        };

        let Particle = function Particle() {
            let p = this;
            p.osc1 = {
                osc: 0,
                val: 0,
                freq: Math.random()
            };

            p.osc2 = {
                osc: 0,
                val: 0,
                freq: Math.random()
            };

            p.counter = 0;
            p.x = mousePos.x;
            p.y = mousePos.y;
            p.size = Math.random() * 100;
            p.growth = Math.random() / 20;
            p.life = Math.random();
            p.opacity = Math.random() / 5;
            p.speed = {
                x: Math.random(),
                y: Math.random()
            };

            p.texture = createSmokeParticle();
            p.rotationOsc = Math.round(Math.random()) ? 'osc1' : 'osc2';
        };

        let particles = [];

        let update = function update() {

            particles.forEach(function (p, i) {

                p.x = mousePos.x;
                p.y = mousePos.y;
                p.size = Math.sqrt(Math.pow(p.x - p.ox, 2) + Math.pow(p.y - p.oy, 2)) * smoke_Size;
                p.counter += 0.01;
                p.growth = Math.sin(p.life);
                p.life -= 0.001;
                p.osc1.osc = Math.sin(p.osc1.val += p.osc1.freq);
                p.osc2.osc = Math.cos(p.osc2.val += p.osc2.freq);
                p.ox = p.x;
                p.oy = p.y;

            });
        };

        let render = function render() {
            particles.forEach(function (p) {
                ctx.save();

                ctx.globalAlpha = p.opacity / (p.size / 50);
                ctx.translate(p.x, p.y);
                ctx.rotate(Math.random() * TAU);
                ctx.drawImage(p.texture, 0 - p.size / 2, 0 - p.size / 2, p.size, p.size);

                ctx.globalAlpha = 1;
                ctx.beginPath();
                ctx.fillStyle = 'rgba(' + (
                    155 + Math.round(Math.random() * 100)) + ',' + (
                        155 + Math.round(Math.random() * 100)) + ',' + (
                        155 + Math.round(Math.random() * 100)) + ',' +
                    Math.random() + ')';

                ctx.arc(Math.random() * p.size, Math.random() * p.size, Math.random(), 0, TAU);
                ctx.fill();

                ctx.restore();

            });

        };

        let loop = () => {
            update();
            render();
            let id = window.requestAnimationFrame(loop);
            this.setState({
                AnimationId: id
            })
        };

        let mousePos = {
            x: 0,
            y: 0
        };

        let drawingMode = false;
        let activateDraw = function activateDraw(e) {
            drawingMode = true;
            particles = Array.from(new Array(10), function () {
                return new Particle();
            });
        };
        let disableDraw = function disableDraw(e) {
            drawingMode = false;
            particles = [];
        };

        canvas.addEventListener('mousedown', activateDraw);
        canvas.addEventListener('mousemove', function (e) {
            mousePos.x = e.layerX;
            mousePos.y = e.layerY;
        });
        canvas.addEventListener('mouseup', disableDraw);

        canvas.addEventListener('touchstart', activateDraw);
        canvas.addEventListener('touchmove', function (e) {
            mousePos.x = e.touches[0].clientX;
            mousePos.y = e.touches[0].clientY - 64;
        });
        canvas.addEventListener('touchend', disableDraw);

        //canvas.addEventListener('touchstart', e => activateDraw);
        //canvas.addEventListener('touchmove', e => draw);
        //canvas.addEventListener('touchend', e => disableDraw);

        loop();
    }

    componentWillUnmount() {
        window.onresize = null
        window.cancelAnimationFrame(this.state.AnimationId);
    }

    render() {
        return (
            <div id='draw'></div>
        );
    }
}

export default Draw;
/**
 * 2019-09-10 GUI滑动绘制银河
 */