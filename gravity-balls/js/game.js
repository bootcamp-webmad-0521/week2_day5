const game = {
    title: 'Bouncing balls app yay',
    author: 'Ger',
    license: undefined,
    version: '1.0.0',
    desciption: 'Physics app',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    balls: [],
    keys: {
        SPACE: 'Space'
    },
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },
    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeydown = e => e.code === this.keys.SPACE ? this.createBall() : null
    },
    start() {
        setInterval(() => {
            this.clearScreen()
            this.drawAll()
            this.moveAll()
            this.clearItems()
        }, 20)
    },
    createBall() {
        const ball = new Ball(this.ctx, 50, 50, 0, 100, this.canvasSize, 'basketball.png')
        this.balls.push(ball)

        console.log(this.balls)
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.balls.forEach(elm => elm.draw())
    },
    moveAll() {
        this.balls.forEach(elm => elm.move())
    },
    clearItems() {
        this.balls = this.balls.filter(elm => elm.ballPos.x >= 0)
    }
}