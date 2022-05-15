const Users = require("../models/users")
var bcrypt = require('bcryptjs');

const findById = async (id) => {
  try {
    const user = await Users.findById(id);
    return user;
  } catch (err) {
    throw "User is not found"
  }
}

const findAll = async ()=>{
  // to do
}

const updatePass = async (req,res) => {
  // to do
  const { id,old_password, new_password } = req.body;
  const user = await Users.findById(id);
  //console.log(user)
  try {
    if (!user.matchesPassword(old_password)) {
      throw "The user's information is incorrect~"
    }
    var salt = bcrypt.genSaltSync(10);
    var newpassword = bcrypt.hashSync(new_password, salt);
    //resutlt = Users.updateOne({ _id: id }, { password: new_password })
   
    await Users.findByIdAndUpdate(id, { password: newpassword });
    //console.log(resutlt)
    return {
      success: true,
      data: newpassword
    }
  
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: 'password incorrect'
    }
  }

}

const update = async (req, res) => {
  // to do

  const {id, username, lastname ,firstname} = req.body;
  try {
    await Users.findByIdAndUpdate(id,{ username:username,lastname:lastname,firstname:firstname })
    
      try {
      const user = await Users.findById(id);
      return {
        success: true,
        data: user
      } 
    } catch (err) {
      throw "User is not found"
    }

  }catch (err) {
    return {
      success: false,
      data: err
    } 
  }

}

const remove = async (req,res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const deleting = await Users.deleteOne({ _id: id });
    console.log("deleting", deleting);
    res.json({ success: true, data: deleting });
  } catch (error) {
    res.json({ success: false, error: error });
  }
}

module.exports = {
  findById,
  updatePass,
  update,
  remove,
  findAll
}