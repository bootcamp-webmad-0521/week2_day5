class Ball {

    constructor(ctx, ballWidth, ballHeight, ballPosX, ballPosY, canvasSize, ballImage) {
        this.ctx = ctx
        this.ballSize = { w: ballWidth, h: ballHeight }
        this.ballPos = { x: ballPosX, y: ballPosY }
        this.canvasSize = canvasSize
        this.ballImage = ballImage
        this.imageInstance = undefined

        this.ballVel = { x: 10, y: 1 }
        this.ballPhysics = { gravity: .4 }

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.ballImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {
        this.ballPos.x += this.ballVel.x
        this.ballVel.y += this.ballPhysics.gravity
        this.ballPos.y += this.ballVel.y

        this.ballPos.y >= this.canvasSize.h - this.ballSize.h ? this.ballVel.y *= -1 : null
        this.ballPos.x >= this.canvasSize.w - this.ballSize.w ? this.ballVel.x *= -1 : null
    }
}