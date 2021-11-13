class Link{
    constructor(bodya , bodyb){
        var lastLink = bodya.body.bodies.length - 2
        this.link = Constraint.create({
            bodyA : bodya.body.bodies[lastLink],
            bodyB : bodyb,
            length : -10,
            stiffness : 0.01
        })

        World.add(world , this.link)
    }
    

}