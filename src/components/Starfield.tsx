import Particle,{ParticleProps} from './Particle'

import React, { PureComponent } from 'react'
import raf from 'raf'

type Props = {
    amountParticlesPer10KPixels: number
    direction: string
    velocity: number
    particleSizeMin: number
    particleSizeMax: number
    alphaMin: number
    alphaMax: number
    blinkChance: number
}
type States = {
    width: number
    height: number
}
export class Starfield extends PureComponent<Props, States> {
    particles: Particle[] = []
    tickRaf: number = 0
    canvas: HTMLCanvasElement | undefined
    div: HTMLDivElement | undefined
    time: any
    delta: number = 3000;
    particleProps: ParticleProps = {
            ymin: 0,
            ymax: 0,
            xmin: 0,
            xmax: 0,
            sizemin: 0,
            sizemax: 0,
            alphamin: 0,
            alphamax: 0,
            velocity: 0,
            blinkChance: 0,
            direction: ''
    }
    state = { width: window.innerWidth, height: window.innerHeight};
    
    _handleResize = () => {
        clearTimeout(this.time)
        this.time = setTimeout(() => {this.updateDimensions()}, 200);
    }
    
    updateDimensions() {
        if (this.div !== undefined && this.div !== null && this.canvas !== undefined && this.canvas !== null) {
            this.setState({ width: this.div.offsetWidth, height: this.div.offsetHeight});
        }
    }

    canvasRef = (ref: HTMLCanvasElement) => {
        this.canvas = ref
    }
    divRef = (ref: HTMLDivElement) => {
        this.div = ref
    }
    componentDidMount() {
        this.reset(this.props, this.state)
        this.updateDimensions()
        window.addEventListener('resize', this._handleResize);
        this.tick()
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this._handleResize);
        raf.cancel(this.tickRaf)
    }
    componentDidUpdate() {
        this.reset(this.props, this.state)
    }
    render() {
        return (
            <div ref={this.divRef} style={{width: '100%', height: '100%' }}>
                <canvas
                    ref={this.canvasRef}
                    width={this.state.width * devicePixelRatio}
                    height={this.state.height * devicePixelRatio}
                    style={{height: this.state.height, width: this.state.width}}
                />
            </div>
        )
    }

    tick = () => {
        this.update()
        this.draw()

        this.tickRaf = raf(this.tick)
    }

    update() {
        for (let i = 0; i < this.particles.length; ++i) {
            this.particles[i].update()
        }

    }

    draw() {
        if (!this.canvas) return
        const ctx = this.canvas.getContext('2d')
        if (!ctx) return
        ctx.save()
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx.scale(devicePixelRatio, devicePixelRatio)
        for (let i = 0; i < this.particles.length; ++i) {
            const p = this.particles[i]
            ctx.fillStyle = 'rgba(255,255,255,' + p.alpha;
            ctx.fillRect(p.x, p.y, p.particleSize, p.particleSize)
        }
        ctx.restore()
    }

    reset(props: Props, state: States) {
        this.particles = []                               
        this.particleProps = {
            ymin: 0,
            ymax: state.height,
            xmin: 0,
            xmax: state.width,
            sizemin: props.particleSizeMin,
            sizemax: props.particleSizeMax,
            alphamin: props.alphaMin,
            alphamax: props.alphaMax,
            velocity: props.velocity,
            blinkChance: props.blinkChance,
            direction: props.direction
        }
        let particleAmount = Math.round(props.amountParticlesPer10KPixels * (state.width * state.height) / 10000)
        for (let i = 0; i < particleAmount; ++i) {
            this.particles.push(new Particle(this.particleProps))
        }
    }
}
