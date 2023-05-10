
import UsersModal from "../modals/index.js"

export const findAllUsers = async (req, res) => {

    const respon = await UsersModal.find({});

    res.status(200).json({ "response": "success", respon })
}


export const createUser = async (req, res) => {

    const { user, email, password, gender } = req.body
    const body = req.body;

    const valu = await UsersModal.create({ user, email, password })

    res.status(200).json({ valu })
}

