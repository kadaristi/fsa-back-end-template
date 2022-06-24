export const anotherRoute = {
    path: '/another',
    method: 'get',
    handler: (req, res) => {
        res.status(200).json({message: 'This is my another route, hey!'})
    }
}