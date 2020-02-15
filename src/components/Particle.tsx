export type ParticleProps = {
    ymin: number
    ymax: number
    xmin: number
    xmax: number
    sizemin: number
    sizemax: number
    alphamin: number
    alphamax: number
    velocity: number
    blinkChance: number
    direction: string
}

export default class Particle {
    blinkIndex: number = 0
    blinkSpeed: number = 20
    blinkSwitch: boolean = true
    x: number = 0
    y: number = 0
    ymin: number
    ymax: number
    xmin: number
    xmax: number
    particleSize: number
    alpha: number
    maxAlpha: number
    velocity: number
    blinkChance: number
    direction: string
    constructor(props: ParticleProps) {
        this.ymin = props.ymin
        this.ymax = props.ymax
        this.xmin = props.xmin
        this.xmax = props.xmax
        this.particleSize = random(props.sizemin, props.sizemax)
        this.alpha = random(props.alphamin, props.alphamax)
        this.maxAlpha = this.alpha
        this.velocity = props.velocity
        this.blinkChance = props.blinkChance
        this.direction = props.direction
        this.init()
    }
    init() {
        this.x = random(this.xmin, this.xmax)
        this.y = random(this.ymin, this.ymax)
    }
    reset() {
        if (this.direction === 'S') {
            this.x = random(this.xmin, this.xmax)
            this.y = this.ymin - this.particleSize
        } else if (this.direction === 'N') {
            this.x = random(this.xmin, this.xmax)
            this.y = this.ymax + this.particleSize
        } else if (this.direction === 'E') {
            this.x = this.xmin - this.particleSize
            this.y = random(this.ymin, this.ymax)
        } else if (this.direction === 'W') {
            this.x = this.xmax + this.particleSize
            this.y = random(this.ymin, this.ymax)
        } else {
            this.x = this.xmax + this.particleSize
            this.y = random(this.ymin, this.ymax)
        }
    }
    startBlink() {
        this.blinkIndex = 1
        let that = this
        that.blinkSwitch = true 
        function blinkLoop() {     
            setTimeout(function () {   
                if (that.blinkSwitch) {
                    that.alpha -= (1 / (that.blinkSpeed))    
                } else {
                    that.alpha += (1 / (that.blinkSpeed))     
                }
                that.blinkIndex++;             
                if (that.blinkIndex > (that.blinkSpeed / 2)) {
                    that.blinkSwitch = false
                }  
                if (that.blinkIndex < that.blinkSpeed) {
                    blinkLoop();  
                }
                if (that.blinkIndex === that.blinkSpeed) {
                    that.blinkIndex = 0
                    that.alpha = that.maxAlpha 
                }              
            }, 16)
        }
        blinkLoop();    
    }
    update() {

        if (this.direction === 'S') {
            this.y += this.velocity
            if (this.y > this.ymax + this.particleSize) {
                this.reset()
            }
        } else if (this.direction === 'N') {
            this.y -= this.velocity
            if (this.y < this.ymin - this.particleSize) {
                this.reset()
            }
        } else if (this.direction === 'E') {
            this.x += this.velocity
            if (this.x > this.xmax + this.particleSize) {
                this.reset()
            }
        } else if (this.direction === 'W') {
            this.x -= this.velocity
            if (this.x < this.xmin - this.particleSize) {
                this.reset()
            }
        } else {
            this.x -= this.velocity
            if (this.x < this.xmin - this.particleSize) {
                this.reset()
            }
        }
        
        if (this.blinkChance > 0 && this.blinkIndex === 0 && random(0, 100) < this.blinkChance * 100) {
            this.startBlink()
        }
    }
}

function random(min: number, max: number) {
    return Math.random() * (max - min) + min
}