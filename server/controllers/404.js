export const get404 = async (req, res) => {
    try {
        res.status(200).send("<h1>Pagina no encontrada</h1>")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
