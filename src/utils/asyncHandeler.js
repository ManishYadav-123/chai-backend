const asyncHandeler = (requestHandeler) => {
    return async (req, res, next) => {
        Promise.resolve(requestHandeler(req, res, next)).catch(next);
    }
}

export {asyncHandeler }
// const asyncHandeler = () =>{}
// const asyncHandeler = (func) =>{()=>{}}
// const asyncHandeler = (func) => async()=>{}

    // const asyncHandeler = (func) => async (req, res, next) => {
    //     try {
    //         await func(req, res, next);
    //     } catch (error) {
    //         res.status(error.status || 500).json({
    //             success: false,
    //             message: error.message || "Internal Server Error"
    //         });
    //     }
    // };